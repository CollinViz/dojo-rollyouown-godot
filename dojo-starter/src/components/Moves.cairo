use box::BoxTrait;
use traits::Into;
use array::ArrayTrait;
use starknet::ContractAddress;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Moves {
    #[key]
    player: ContractAddress,
    remaining: u8,
}
