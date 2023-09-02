import styled from "styled-components"; 
import { store } from "../store/store";
import { Wrapper } from "./wrapper";
import { SpawnBtn } from "./spawnbtn"; 
 

export const UI = ( ) => {
    const layers = store((state) => {
        return {
            networkLayer: state.networkLayer 
        };
    });

    if (!layers.networkLayer  ) return <>No network node</>;
    //const world = namespaceWorld(layers.networkLayer.world, "phaser");
    return (
        <Wrapper>
            <HeaderContainer>
                 
                <SpawnBtn />

            </HeaderContainer>
        </Wrapper>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;