import { SetupNetworkResult } from "./setupNetwork";
import { Account, InvokeTransactionReceiptResponse,num, shortString } from "starknet";
import { EntityIndex, getComponentValue, setComponent } from "@latticexyz/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { updatePositionWithDirection } from "../utils";
import { POSITION_OFFSET } from "../phaser/constants";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { execute, contractComponents }: SetupNetworkResult,
    { Position, Moves }: ClientComponents
) {
    const create_game = async (signer: Account,startTime:number,maxPlayers:number,maxTurns:number) => {
        debugger;
         
        try {
            const tx = await execute(signer, "create_game", [
                startTime,
                maxPlayers,
                maxTurns,
              ]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt);
             
            console.log(events)
            
            return JSON.stringify(events);
        } catch (e) {
            console.log(e);
            return JSON.stringify(null);
        }  
    }
    const join_game = async (signer: Account,gameId:string) => {
        debugger;
         
        try {
            const tx = await execute(signer, "join_game", [
                gameId
              ]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt);
             
            console.log(events)
            
            return JSON.stringify(events);
        } catch (e) {
            console.log(e) 
            return JSON.stringify(null);
        }  
    }
    const travel = async (signer: Account,gameId: string, locationId: string) => {
        debugger;
         
        try {
            const tx = await execute(signer, "travel", [
                gameId,
                locationId
              ]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt);
             
            console.log(events)
            
            return JSON.stringify(events);
        } catch (e) {
            console.log(e) 
            return JSON.stringify(null);
        }  
    }
    const buy = async (signer: Account,gameId: string,
        locationId: string,
        drugId: string,
        quantity: number,) => {
        debugger;
         
        try {
            const tx = await execute(signer, "buy", [
                gameId,
                locationId,
                drugId,
                quantity
              ]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt);
             
            console.log(events)
            
            return JSON.stringify(events);
        } catch (e) {
            console.log(e) 
            return JSON.stringify(null);
        }  
    }
    const sell = async (signer: Account,gameId: string,
        locationId: string,
        drugId: string,
        quantity: number) => {
        debugger;
         
        try {
            const tx = await execute(signer, "sell", [
                gameId,
                locationId,
                drugId,
                quantity,
              ]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt);
             
            console.log(events)
            
            return JSON.stringify(events);
        } catch (e) {
            console.log(e) 
            return JSON.stringify(null);
        }  
    }
    const setName = async (signer: Account,gameId: string, playerName: string) => {
        debugger;
         
        try {
            const tx = await execute(signer, "set_name", [gameId, playerName]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt);
             
            console.log(events)
            
            return JSON.stringify(events);
        } catch (e) {
            console.log(e) 
            return JSON.stringify(null);
        }  
    }
    const spawn = async (signer: Account) => {
        debugger;
        const entityId = parseInt(signer.address) as EntityIndex;

        const positionId = uuid();
        Position.addOverride(positionId, {
            entity: entityId,
            value: { x: 0, y: 0 },
        });

        const movesId = uuid();
        Moves.addOverride(movesId, {
            entity: entityId,
            value: { remaining: 100 },
        });

        try {
            const tx = await execute(signer, "spawn", []);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            const events = parseEvent(receipt) 
            console.log(events) 
            return JSON.stringify(events);
        } catch (e) {
            console.log(e)
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        } finally {
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        }
    };

    const move = async (signer: Account, direction: Direction) => {

        console.log(signer.address)

        const entityId = parseInt(signer.address) as EntityIndex;
        debugger;
         
        const positionId = uuid();
        Position.addOverride(positionId, {
            entity: entityId,
            value: updatePositionWithDirection(direction, getComponentValue(Position, entityId) as Position ),//as Position
        });

        const movesId = uuid();
        Moves.addOverride(movesId, {
            entity: entityId,
            value: { remaining: (getComponentValue(Moves, entityId)?.remaining || 0) - 1 },
        });

        try {
            const tx = await execute(signer, "move", [direction]);

            console.log(tx)
            const receipt = await signer.waitForTransaction(tx.transaction_hash, { retryInterval: 100 })

            console.log(receipt)

            const events = parseEvent(receipt)
            const entity = parseInt(events[0].entity.toString()) as EntityIndex

            const movesEvent = events[0] as Moves;
            setComponent(contractComponents.Moves, entity, { remaining: movesEvent.remaining })

            const positionEvent = events[1] as Position;
            setComponent(contractComponents.Position, entity, { x: positionEvent.x, y: positionEvent.y })
        } catch (e) {
            console.log(e)
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        } finally {
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        }

    };

    return {
        spawn,
        move,
        create_game,
        join_game,
        travel,
        buy,
        sell,
        setName
    };
}


// TODO: Move types and generalise this

export enum Direction {
    Left = 0,
    Right = 1,
    Up = 2,
    Down = 3,
}

export enum ComponentEvents {
    Moves = "Moves",
    Position = "Position",
    GameCreated = "GameCreated",
    PlayerJoined = "PlayerJoined",
    Traveled = "Traveled",
    Bought = "Bought",
    Sold = "Sold",
    RandomEvent = "RandomEvent",
}

export interface BaseEvent {
    type: ComponentEvents;
    entity: string;
    gameId: string;
}

export interface Moves extends BaseEvent {
    remaining: number;
}

export interface Position extends BaseEvent {
    x: number;
    y: number;
    location_id:number;
    player_id:number;

}
export interface RandomEventData extends BaseEvent {
    playerId: string;
    healthLoss: number;
    mugged: boolean;
    arrested: boolean;
  }
  
  export interface CreateEventData extends BaseEvent {
    creator: string;
    startTime: number;
    maxTurns: number;
    maxPlayers: number;
  }
  
  export interface JoinedEventData extends BaseEvent {
    playerId: string;
    locationName: string;
  }
  
  export interface BoughtEventData extends BaseEvent {
    playerId: string;
    drugId: string;
    quantity: number;
    price: number;
  }
  
  export interface SoldEventData extends BaseEvent {
    playerId: string;
    drugId: string;
    quantity: number;
    price: number;
  }
export const parseEvent = (
    receipt: InvokeTransactionReceiptResponse
): Array<Moves | Position | SoldEventData | BoughtEventData | JoinedEventData|RandomEventData |CreateEventData> => {
    if (!receipt.events) {
        throw new Error(`No events found`);
    }

    let events: Array<Moves | Position | SoldEventData | BoughtEventData | JoinedEventData|RandomEventData |CreateEventData> = [];

    for (let raw of receipt.events) {
        const decodedEventType = shortString.decodeShortString(raw.data[0]);

        switch (decodedEventType) {
            case ComponentEvents.Moves:{
                if (raw.data.length < 6) {
                    throw new Error('Insufficient data for Moves event.');
                }

                const movesData: Moves = {
                    type: ComponentEvents.Moves,
                    entity: raw.data[2],
                    remaining: Number(raw.data[5]),
                    gameId:'0'
                };

                events.push(movesData);
                break;
            }
            case ComponentEvents.Position:{
                if (raw.data.length < 7) {
                    throw new Error('Insufficient data for Position event.');
                }
                debugger;
                const positionData: Position = {
                    type: ComponentEvents.Position,
                    entity: raw.data[2],
                    x: Number(raw.data[5]) - POSITION_OFFSET,
                    y: Number(raw.data[6]) - POSITION_OFFSET,
                    location_id:0,
                    player_id:0,
                    gameId:'0'
                };

                events.push(positionData);
                break;
            }
            case ComponentEvents.GameCreated: {
                const Data:CreateEventData = {
                    gameId: num.toHexString(raw.data[0]),
                    creator: num.toHexString(raw.data[1]),
                    startTime: Number(raw.data[2]),
                    maxTurns: Number(raw.data[3]),
                    maxPlayers: Number(raw.data[4]),
                } as CreateEventData;
                events.push(Data);
                break;
            }
                case ComponentEvents.RandomEvent:{
                    const Data:RandomEventData= {
                    gameId: num.toHexString(raw.data[0]),
                    playerId: num.toHexString(raw.data[1]),
                    healthLoss: Number(raw.data[2]),
                    mugged: Boolean(raw.data[3] === "0x1"),
                    arrested: Boolean(raw.data[4] === "0x1"),
                } as RandomEventData;
                events.push(Data);
                break;
            }
                case ComponentEvents.PlayerJoined:{
                const Data:JoinedEventData = {
                    gameId: num.toHexString(raw.data[0]),
                    playerId: num.toHexString(raw.data[1]),
                    locationName: shortString.decodeShortString(raw.data[2]),
                } as JoinedEventData;
                events.push(Data);
                break;
            }
                case ComponentEvents.Traveled:
                case ComponentEvents.Bought:
                case ComponentEvents.Sold:
                throw new Error(`event parse not implemented: ${decodedEventType}`);
            default: 
                console.debug(`Unsupported event type. ${decodedEventType} `, raw );
        }
    }

    return events;
};