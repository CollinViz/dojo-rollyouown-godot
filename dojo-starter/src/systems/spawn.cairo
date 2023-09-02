#[system]
mod spawn {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::{Into, TryInto};
    use option::OptionTrait;
    use dojo::world::Context;

    use rollyourown::components::Position::Position;
    use rollyourown::components::Moves::Moves;
    use rollyourown::constants::OFFSET;

    // so we don't go negative

    fn execute(ctx: Context) {
        // cast the offset to a u32
        let offset: u32 = OFFSET.try_into().unwrap();

        set!(
            ctx.world,
            (
                Moves {
                    player: ctx.origin, remaining: 100
                    }, Position {
                    player: ctx.origin, x: offset, y: offset
                },
            )
        );
        return ();
    }
}