import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import { RepositoryItem } from '../Repository-Item';
import * as Styled from './styled';

export const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);
    const [hasUserForSearchStarred, setHasUserForSearchStarred] = useState(false);

    useEffect(() => {
        if(githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);

        }
        setHasUserForSearchRepos(githubState.repositories);
        setHasUserForSearchStarred(githubState.starred);

    }, [githubState.user.login, 
        githubState.repositories,
        githubState.starred, 
        getUserRepos, 
        getUserStarred]);

    return(
        <Styled.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'>

            <Styled.WrapperTabList>
                <Styled.WrapperTab>Repositories</Styled.WrapperTab>
                <Styled.WrapperTab>Starred</Styled.WrapperTab>
            </Styled.WrapperTabList> 
            <Styled.WrapperTabPanel>
                <Styled.WrapperList>
                    {githubState.repositories.map((item) => 
                    <RepositoryItem
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.html_url}
                        fullName={item.full_name}/>
                    )}
                </Styled.WrapperList>
            </Styled.WrapperTabPanel>
            <Styled.WrapperTabPanel>
                <Styled.WrapperList>
                    {githubState.starred.map((item) => 
                        <RepositoryItem
                            key={item.id}
                            name={item.name}
                            linkToRepo={item.html_url}
                            fullName={item.full_name}/>
                        )}
                </Styled.WrapperList>    
            </Styled.WrapperTabPanel>   
        </Styled.WrapperTabs>
    )
}