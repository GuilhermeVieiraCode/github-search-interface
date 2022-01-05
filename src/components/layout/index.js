import React from 'react';
import * as Styled from './styled';

const Layout = ({ children }) => {
    return(
        <Styled.WrapperLayout>
            <header>
                header
            </header>
            { children }
        </Styled.WrapperLayout>
    );
};

export default Layout;