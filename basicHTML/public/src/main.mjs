
function getAccount() {
    
}





$(document).ready(function(){
    alert("JQuery is working");
});



/*

const spawn = async (signer: Account) => {

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


*/
