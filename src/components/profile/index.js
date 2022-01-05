import React from 'react';
import * as Styled from './styled';

const Profile = () => {
    return(
        <Styled.Wrapper>
            <Styled.WrapperImg src="https://avatars.githubusercontent.com/u/44982023?v=4" 
                alt="User Avatar"/>
            <Styled.WrapperUserInfo>
                <div>
                    <h1>Guilherme Vieira</h1>
                    <Styled.WrapperUsername>
                        <h3>Username:</h3>
                        <a href="https://github.com/GuilhermeVieiraCode" 
                        target="_blank"
                        rel="noreferrer"
                        >GuilhermeVieiraCode</a>
                    </Styled.WrapperUsername>
                </div>    
                <Styled.WrapperStatusCount>
                    <div>
                    <h4>Followers</h4>
                    <span>3</span>
                    </div>
                    <div>
                    <h4>Following</h4>
                    <span>4</span>
                    </div>
                    <div>
                    <h4>Starred</h4>
                    <span>2</span>
                    </div>
                </Styled.WrapperStatusCount>
           </Styled.WrapperUserInfo> 
        </Styled.Wrapper>
    );
}
        
              

export default Profile;