import React from 'react';
import { RepositoryItem } from '../repository-item';
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
            <Styled.WrapperTabPanel>
                <RepositoryItem 
                    name="repo"
                    linkToRepo="https://github.com/GuilhermeVieiraCode/course-manager"
                    fullName="GuilhermeVieiraCode/course-manager"/>
            </Styled.WrapperTabPanel>
            <Styled.WrapperTabPanel>
                <RepositoryItem
                    name="repo"
                    linkToRepo="https://github.com/GuilhermeVieiraCode/course-manager"
                    fullName="GuilhermeVieiraCode/course-manager" 
                />
            </Styled.WrapperTabPanel>   
        </Styled.WrapperTabs>
    )
}