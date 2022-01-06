import React from 'react';
import * as Styled from './styled';
import { Header } from '../header';

const Layout = ({ children }) => {
    return(
        <Styled.WrapperLayout>
            <Header />
            { children }
        </Styled.WrapperLayout>
    );
};

export default Layout;