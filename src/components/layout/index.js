import React from 'react';
import * as Styled from './styled';
import { Header } from '../Header';

export const Layout = ({ children }) => {
    return(
        <Styled.WrapperLayout>
            <Header />
            { children }
        </Styled.WrapperLayout>
    );
};