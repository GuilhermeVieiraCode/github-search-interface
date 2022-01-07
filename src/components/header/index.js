import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as Styled from './styled';

export const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return( 
    <header>
        <Styled.Wrapper>
            <input  type="text" 
                    placeholder="Type a Github username..." 
                    onChange={(event) => setUsernameForSearch(event.target.value)}></input>
            <button type="Submit" onClick={submitGetUser}>Search</button>
        </Styled.Wrapper>
    </header>
    );
}