import styled from 'styled-components';

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 15%;
    margin: 8px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperUserInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin: 8px;
    h1{
        font-size: 24px;
        font-weight: bold;
    }
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div{
        margin: 8px 8px 8px 0;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3{
        margin-right: 8px;
    }
    a{
        color: blue;
        font-weight: bold;
        font-size: 16px;
    }
`;

