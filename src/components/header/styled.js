import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
    }

    button{
        padding: 14px;
        margin: 0 16px;
        border-radius: 8px;
        color: white;
        background-color: #3256a8;
        font-weight: bold;
        
        &:hover{
            background-color: #2c5282;
        }
    }


`;