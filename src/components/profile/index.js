import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as Styled from './styled';

const Profile = () => {
    const { githubState } = useGithub();

    return(
        <Styled.Wrapper>
            <Styled.WrapperImg src={githubState.user.avatar} 
                alt="User Avatar"/>
            <Styled.WrapperUserInfo>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <Styled.WrapperGeneric>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} 
                        target="_blank"
                        rel="noreferrer"
                        >{githubState.user.login}</a>
                    </Styled.WrapperGeneric>
                    <Styled.WrapperGeneric>
                        <h3>Bio:</h3>
                        <p>{githubState.user.bio}</p>
                    </Styled.WrapperGeneric>
                    <Styled.WrapperGeneric>
                        <h3>Company:</h3>
                        <p>{githubState.user.company}</p>
                    </Styled.WrapperGeneric>
                    <Styled.WrapperGeneric>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog} 
                        target="_blank"
                        rel="noreferrer"
                        >{githubState.user.blog}</a>
                    </Styled.WrapperGeneric>
                    <Styled.WrapperGeneric>
                        <h3>Location:</h3>
                        <p>{githubState.user.location}</p>
                    </Styled.WrapperGeneric>
                </div>    
                <Styled.WrapperStatusCount>
                    <div>
                    <h4>Followers</h4>
                    <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                    <h4>Following</h4>
                    <span>{githubState.user.following}</span>
                    </div>
                    <div>
                    <h4>Repos</h4>
                    <span>{githubState.user.public_repos}</span>
                    </div>
                    <div>
                    <h4>Gists</h4>
                    <span>{githubState.user.public_gists}</span>
                    </div>
                </Styled.WrapperStatusCount>
           </Styled.WrapperUserInfo> 
        </Styled.Wrapper>
    );
}
        
              

export default Profile;