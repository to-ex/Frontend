import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 88px; 
    left: 0;
    width: 100vw; 
    height: calc(100vh - 88px); 
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; 
    justify-content: center; 
    z-index: 1000; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
    background: #fff;
    border-radius: 10px;
    margin-top: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 1001;
    width: 458px;
    height: 232px;
    text-align: center;
    font-size: 20px;
    p {
        margin-top: 80px;
    }
`;

const Button = styled.button`
    width: 191px;
    height: 58px;
    margin: 10px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: ${props => props.$confirm ? '#FF244A' : '#bEAEAEA'};
    color: ${props => props.$confirm ? 'white' : 'black'};
    margin-top: 20px;
    font-size: 19px;
`;

function Modal({ onConfirm, onCancel, msg, text1, text2 }) {
    return (
        <ModalBackdrop>
            <ModalContent>
                    <p>{msg}</p>
                <Button onClick={onCancel}>{text1}</Button>
                <Button $confirm onClick={onConfirm}>{text2}</Button>
            </ModalContent>
        </ModalBackdrop>
    );
}

export default Modal;