import React from "react";
import * as Styled from './styled';

export const Header = () => {
    return( 
    <header>
        <Styled.Wrapper>
            <input type="text" placeholder="Type a username..."></input>
            <button type="Submit">Search</button>
        </Styled.Wrapper>
    </header>
    )
}