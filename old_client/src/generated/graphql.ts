// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  bool: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u64: { input: any; output: any; }
  u128: { input: any; output: any; }
  usize: { input: any; output: any; }
};

export type ComponentUnion = Drug | Game | Market | Name | Player | Risks;

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Drug = {
  __typename?: 'Drug';
  entity?: Maybe<Entity>;
  quantity?: Maybe<Scalars['usize']['output']>;
};

export type DrugConnection = {
  __typename?: 'DrugConnection';
  edges?: Maybe<Array<Maybe<DrugEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type DrugEdge = {
  __typename?: 'DrugEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Drug>;
};

export type DrugOrder = {
  direction: Direction;
  field: DrugOrderOrderField;
};

export enum DrugOrderOrderField {
  Quantity = 'QUANTITY'
}

export type DrugWhereInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantityGT?: InputMaybe<Scalars['Int']['input']>;
  quantityGTE?: InputMaybe<Scalars['Int']['input']>;
  quantityLT?: InputMaybe<Scalars['Int']['input']>;
  quantityLTE?: InputMaybe<Scalars['Int']['input']>;
  quantityNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  componentNames?: Maybe<Scalars['String']['output']>;
  components?: Maybe<Array<Maybe<ComponentUnion>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Scalars['String']['output']>;
  systemCall: SystemCall;
  systemCallId?: Maybe<Scalars['Int']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Event>;
};

export type Game = {
  __typename?: 'Game';
  creator?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<Entity>;
  is_finished?: Maybe<Scalars['bool']['output']>;
  max_players?: Maybe<Scalars['usize']['output']>;
  max_turns?: Maybe<Scalars['usize']['output']>;
  num_players?: Maybe<Scalars['usize']['output']>;
  start_time?: Maybe<Scalars['u64']['output']>;
};

export type GameConnection = {
  __typename?: 'GameConnection';
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type GameEdge = {
  __typename?: 'GameEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Game>;
};

export type GameOrder = {
  direction: Direction;
  field: GameOrderOrderField;
};

export enum GameOrderOrderField {
  Creator = 'CREATOR',
  IsFinished = 'IS_FINISHED',
  MaxPlayers = 'MAX_PLAYERS',
  MaxTurns = 'MAX_TURNS',
  NumPlayers = 'NUM_PLAYERS',
  StartTime = 'START_TIME'
}

export type GameWhereInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  creatorGT?: InputMaybe<Scalars['String']['input']>;
  creatorGTE?: InputMaybe<Scalars['String']['input']>;
  creatorLT?: InputMaybe<Scalars['String']['input']>;
  creatorLTE?: InputMaybe<Scalars['String']['input']>;
  creatorNEQ?: InputMaybe<Scalars['String']['input']>;
  is_finished?: InputMaybe<Scalars['Int']['input']>;
  is_finishedGT?: InputMaybe<Scalars['Int']['input']>;
  is_finishedGTE?: InputMaybe<Scalars['Int']['input']>;
  is_finishedLT?: InputMaybe<Scalars['Int']['input']>;
  is_finishedLTE?: InputMaybe<Scalars['Int']['input']>;
  is_finishedNEQ?: InputMaybe<Scalars['Int']['input']>;
  max_players?: InputMaybe<Scalars['Int']['input']>;
  max_playersGT?: InputMaybe<Scalars['Int']['input']>;
  max_playersGTE?: InputMaybe<Scalars['Int']['input']>;
  max_playersLT?: InputMaybe<Scalars['Int']['input']>;
  max_playersLTE?: InputMaybe<Scalars['Int']['input']>;
  max_playersNEQ?: InputMaybe<Scalars['Int']['input']>;
  max_turns?: InputMaybe<Scalars['Int']['input']>;
  max_turnsGT?: InputMaybe<Scalars['Int']['input']>;
  max_turnsGTE?: InputMaybe<Scalars['Int']['input']>;
  max_turnsLT?: InputMaybe<Scalars['Int']['input']>;
  max_turnsLTE?: InputMaybe<Scalars['Int']['input']>;
  max_turnsNEQ?: InputMaybe<Scalars['Int']['input']>;
  num_players?: InputMaybe<Scalars['Int']['input']>;
  num_playersGT?: InputMaybe<Scalars['Int']['input']>;
  num_playersGTE?: InputMaybe<Scalars['Int']['input']>;
  num_playersLT?: InputMaybe<Scalars['Int']['input']>;
  num_playersLTE?: InputMaybe<Scalars['Int']['input']>;
  num_playersNEQ?: InputMaybe<Scalars['Int']['input']>;
  start_time?: InputMaybe<Scalars['Int']['input']>;
  start_timeGT?: InputMaybe<Scalars['Int']['input']>;
  start_timeGTE?: InputMaybe<Scalars['Int']['input']>;
  start_timeLT?: InputMaybe<Scalars['Int']['input']>;
  start_timeLTE?: InputMaybe<Scalars['Int']['input']>;
  start_timeNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Market = {
  __typename?: 'Market';
  cash?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  quantity?: Maybe<Scalars['usize']['output']>;
};

export type MarketConnection = {
  __typename?: 'MarketConnection';
  edges?: Maybe<Array<Maybe<MarketEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type MarketEdge = {
  __typename?: 'MarketEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Market>;
};

export type MarketOrder = {
  direction: Direction;
  field: MarketOrderOrderField;
};

export enum MarketOrderOrderField {
  Cash = 'CASH',
  Quantity = 'QUANTITY'
}

export type MarketWhereInput = {
  cash?: InputMaybe<Scalars['String']['input']>;
  cashGT?: InputMaybe<Scalars['String']['input']>;
  cashGTE?: InputMaybe<Scalars['String']['input']>;
  cashLT?: InputMaybe<Scalars['String']['input']>;
  cashLTE?: InputMaybe<Scalars['String']['input']>;
  cashNEQ?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantityGT?: InputMaybe<Scalars['Int']['input']>;
  quantityGTE?: InputMaybe<Scalars['Int']['input']>;
  quantityLT?: InputMaybe<Scalars['Int']['input']>;
  quantityLTE?: InputMaybe<Scalars['Int']['input']>;
  quantityNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Name = {
  __typename?: 'Name';
  entity?: Maybe<Entity>;
  short_string?: Maybe<Scalars['felt252']['output']>;
};

export type NameConnection = {
  __typename?: 'NameConnection';
  edges?: Maybe<Array<Maybe<NameEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type NameEdge = {
  __typename?: 'NameEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Name>;
};

export type NameOrder = {
  direction: Direction;
  field: NameOrderOrderField;
};

export enum NameOrderOrderField {
  ShortString = 'SHORT_STRING'
}

export type NameWhereInput = {
  short_string?: InputMaybe<Scalars['String']['input']>;
  short_stringGT?: InputMaybe<Scalars['String']['input']>;
  short_stringGTE?: InputMaybe<Scalars['String']['input']>;
  short_stringLT?: InputMaybe<Scalars['String']['input']>;
  short_stringLTE?: InputMaybe<Scalars['String']['input']>;
  short_stringNEQ?: InputMaybe<Scalars['String']['input']>;
};

export type Player = {
  __typename?: 'Player';
  cash?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  health?: Maybe<Scalars['u8']['output']>;
  location_id?: Maybe<Scalars['felt252']['output']>;
  turns_remaining?: Maybe<Scalars['usize']['output']>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  edges?: Maybe<Array<Maybe<PlayerEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Player>;
};

export type PlayerOrder = {
  direction: Direction;
  field: PlayerOrderOrderField;
};

export enum PlayerOrderOrderField {
  Cash = 'CASH',
  Health = 'HEALTH',
  LocationId = 'LOCATION_ID',
  TurnsRemaining = 'TURNS_REMAINING'
}

export type PlayerWhereInput = {
  cash?: InputMaybe<Scalars['String']['input']>;
  cashGT?: InputMaybe<Scalars['String']['input']>;
  cashGTE?: InputMaybe<Scalars['String']['input']>;
  cashLT?: InputMaybe<Scalars['String']['input']>;
  cashLTE?: InputMaybe<Scalars['String']['input']>;
  cashNEQ?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  healthGT?: InputMaybe<Scalars['Int']['input']>;
  healthGTE?: InputMaybe<Scalars['Int']['input']>;
  healthLT?: InputMaybe<Scalars['Int']['input']>;
  healthLTE?: InputMaybe<Scalars['Int']['input']>;
  healthNEQ?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  location_idGT?: InputMaybe<Scalars['String']['input']>;
  location_idGTE?: InputMaybe<Scalars['String']['input']>;
  location_idLT?: InputMaybe<Scalars['String']['input']>;
  location_idLTE?: InputMaybe<Scalars['String']['input']>;
  location_idNEQ?: InputMaybe<Scalars['String']['input']>;
  turns_remaining?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingGT?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingGTE?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingLT?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingLTE?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  drugComponents?: Maybe<DrugConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  event: Event;
  events?: Maybe<EventConnection>;
  gameComponents?: Maybe<GameConnection>;
  marketComponents?: Maybe<MarketConnection>;
  nameComponents?: Maybe<NameConnection>;
  playerComponents?: Maybe<PlayerConnection>;
  risksComponents?: Maybe<RisksConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryDrugComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DrugOrder>;
  where?: InputMaybe<DrugWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GameOrder>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryMarketComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MarketOrder>;
  where?: InputMaybe<MarketWhereInput>;
};


export type QueryNameComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<NameOrder>;
  where?: InputMaybe<NameWhereInput>;
};


export type QueryPlayerComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlayerOrder>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryRisksComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RisksOrder>;
  where?: InputMaybe<RisksWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['Int']['input'];
};

export type Risks = {
  __typename?: 'Risks';
  arrested?: Maybe<Scalars['u8']['output']>;
  entity?: Maybe<Entity>;
  hurt?: Maybe<Scalars['u8']['output']>;
  mugged?: Maybe<Scalars['u8']['output']>;
  travel?: Maybe<Scalars['u8']['output']>;
};

export type RisksConnection = {
  __typename?: 'RisksConnection';
  edges?: Maybe<Array<Maybe<RisksEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type RisksEdge = {
  __typename?: 'RisksEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Risks>;
};

export type RisksOrder = {
  direction: Direction;
  field: RisksOrderOrderField;
};

export enum RisksOrderOrderField {
  Arrested = 'ARRESTED',
  Hurt = 'HURT',
  Mugged = 'MUGGED',
  Travel = 'TRAVEL'
}

export type RisksWhereInput = {
  arrested?: InputMaybe<Scalars['Int']['input']>;
  arrestedGT?: InputMaybe<Scalars['Int']['input']>;
  arrestedGTE?: InputMaybe<Scalars['Int']['input']>;
  arrestedLT?: InputMaybe<Scalars['Int']['input']>;
  arrestedLTE?: InputMaybe<Scalars['Int']['input']>;
  arrestedNEQ?: InputMaybe<Scalars['Int']['input']>;
  hurt?: InputMaybe<Scalars['Int']['input']>;
  hurtGT?: InputMaybe<Scalars['Int']['input']>;
  hurtGTE?: InputMaybe<Scalars['Int']['input']>;
  hurtLT?: InputMaybe<Scalars['Int']['input']>;
  hurtLTE?: InputMaybe<Scalars['Int']['input']>;
  hurtNEQ?: InputMaybe<Scalars['Int']['input']>;
  mugged?: InputMaybe<Scalars['Int']['input']>;
  muggedGT?: InputMaybe<Scalars['Int']['input']>;
  muggedGTE?: InputMaybe<Scalars['Int']['input']>;
  muggedLT?: InputMaybe<Scalars['Int']['input']>;
  muggedLTE?: InputMaybe<Scalars['Int']['input']>;
  muggedNEQ?: InputMaybe<Scalars['Int']['input']>;
  travel?: InputMaybe<Scalars['Int']['input']>;
  travelGT?: InputMaybe<Scalars['Int']['input']>;
  travelGTE?: InputMaybe<Scalars['Int']['input']>;
  travelLT?: InputMaybe<Scalars['Int']['input']>;
  travelLTE?: InputMaybe<Scalars['Int']['input']>;
  travelNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type System = {
  __typename?: 'System';
  classHash?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  systemId?: Maybe<Scalars['ID']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<System>;
};

export type AvailableGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableGamesQuery = { __typename?: 'Query', gameComponents?: { __typename?: 'GameConnection', totalCount: number, edges?: Array<{ __typename?: 'GameEdge', cursor: any, node?: { __typename?: 'Game', creator?: any | null, num_players?: any | null, max_players?: any | null, max_turns?: any | null, start_time?: any | null } | null } | null> | null } | null };

export type GlobalScoresQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GlobalScoresQuery = { __typename?: 'Query', playerComponents?: { __typename?: 'PlayerConnection', totalCount: number, edges?: Array<{ __typename?: 'PlayerEdge', cursor: any, node?: { __typename?: 'Player', cash?: any | null, entity?: { __typename?: 'Entity', keys?: Array<string | null> | null, components?: Array<{ __typename: 'Drug' } | { __typename: 'Game' } | { __typename: 'Market' } | { __typename: 'Name', short_string?: any | null } | { __typename: 'Player' } | { __typename: 'Risks' } | null> | null } | null } | null } | null> | null } | null };

export type GameEntityQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GameEntityQuery = { __typename?: 'Query', entity: { __typename?: 'Entity', components?: Array<{ __typename: 'Drug' } | { __typename: 'Game', creator?: any | null, is_finished?: any | null, max_players?: any | null, max_turns?: any | null, num_players?: any | null, start_time?: any | null } | { __typename: 'Market' } | { __typename: 'Name' } | { __typename: 'Player' } | { __typename: 'Risks' } | null> | null } };

export type PlayerEntityQueryVariables = Exact<{
  gameId: Scalars['String']['input'];
  playerId: Scalars['String']['input'];
}>;


export type PlayerEntityQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', totalCount: number, edges?: Array<{ __typename?: 'EntityEdge', cursor: any, node?: { __typename?: 'Entity', components?: Array<{ __typename: 'Drug', quantity?: any | null } | { __typename: 'Game' } | { __typename: 'Market' } | { __typename: 'Name', short_string?: any | null } | { __typename: 'Player', cash?: any | null, health?: any | null, turns_remaining?: any | null } | { __typename: 'Risks' } | null> | null } | null } | null> | null } | null };

export type LocationEntitiesQueryVariables = Exact<{
  gameId: Scalars['String']['input'];
  locationId: Scalars['String']['input'];
}>;


export type LocationEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', totalCount: number, edges?: Array<{ __typename?: 'EntityEdge', cursor: any, node?: { __typename?: 'Entity', keys?: Array<string | null> | null, components?: Array<{ __typename: 'Drug' } | { __typename: 'Game' } | { __typename: 'Market', cash?: any | null, quantity?: any | null } | { __typename: 'Name' } | { __typename: 'Player' } | { __typename: 'Risks', arrested?: any | null, hurt?: any | null, mugged?: any | null, travel?: any | null } | null> | null } | null } | null> | null } | null };


export const AvailableGamesDocument = gql`
    query AvailableGames {
  gameComponents(first: 10) {
    totalCount
    edges {
      node {
        creator
        num_players
        max_players
        max_turns
        start_time
      }
      cursor
    }
  }
}
    `;
export const GlobalScoresDocument = gql`
    query GlobalScores($limit: Int) {
  playerComponents(
    first: $limit
    where: {turns_remaining: 0}
    order: {direction: DESC, field: CASH}
  ) {
    totalCount
    edges {
      node {
        cash
        entity {
          keys
          components {
            __typename
            ... on Name {
              short_string
            }
          }
        }
      }
      cursor
    }
  }
}
    `;
export const GameEntityDocument = gql`
    query GameEntity($id: ID!) {
  entity(id: $id) {
    components {
      __typename
      ... on Game {
        creator
        is_finished
        max_players
        max_turns
        num_players
        start_time
      }
    }
  }
}
    `;
export const PlayerEntityDocument = gql`
    query PlayerEntity($gameId: String!, $playerId: String!) {
  entities(keys: [$gameId, $playerId]) {
    totalCount
    edges {
      node {
        components {
          __typename
          ... on Player {
            cash
            health
            turns_remaining
          }
          ... on Drug {
            quantity
          }
          ... on Name {
            short_string
          }
        }
      }
      cursor
    }
  }
}
    `;
export const LocationEntitiesDocument = gql`
    query LocationEntities($gameId: String!, $locationId: String!) {
  entities(keys: [$gameId, $locationId]) {
    totalCount
    edges {
      node {
        keys
        components {
          __typename
          ... on Market {
            cash
            quantity
          }
          ... on Risks {
            arrested
            hurt
            mugged
            travel
          }
        }
      }
      cursor
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const AvailableGamesDocumentString = print(AvailableGamesDocument);
const GlobalScoresDocumentString = print(GlobalScoresDocument);
const GameEntityDocumentString = print(GameEntityDocument);
const PlayerEntityDocumentString = print(PlayerEntityDocument);
const LocationEntitiesDocumentString = print(LocationEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AvailableGames(variables?: AvailableGamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AvailableGamesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AvailableGamesQuery>(AvailableGamesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AvailableGames', 'query');
    },
    GlobalScores(variables?: GlobalScoresQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GlobalScoresQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GlobalScoresQuery>(GlobalScoresDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GlobalScores', 'query');
    },
    GameEntity(variables: GameEntityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GameEntityQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GameEntityQuery>(GameEntityDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GameEntity', 'query');
    },
    PlayerEntity(variables: PlayerEntityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PlayerEntityQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PlayerEntityQuery>(PlayerEntityDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PlayerEntity', 'query');
    },
    LocationEntities(variables: LocationEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: LocationEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LocationEntitiesQuery>(LocationEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LocationEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;