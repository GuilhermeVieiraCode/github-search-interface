import React from 'react';
import * as Styled from './styled';

export const Repositories = () => {
    return(
        <Styled.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'>

            <Styled.WrapperTabList>
                <Styled.WrapperTab>Repositories</Styled.WrapperTab>
                <Styled.WrapperTab>Starred</Styled.WrapperTab>
            </Styled.WrapperTabList> 
            <Styled.WrapperTabPanel>panel Repositories</Styled.WrapperTabPanel>
            <Styled.WrapperTabPanel>panel Starred</Styled.WrapperTabPanel>   
        </Styled.WrapperTabs>
    )
}