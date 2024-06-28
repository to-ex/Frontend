import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 88px; 
    left: 0;
    width: 100vw; 
    height: calc(100vh - 88px); 
    background-color: rgba(0, 0, 0, 0.3);
    display: flex; 
    justify-content: center; 
    z-index: 1000; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
    background: #fff;
    // padding: 20px;
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

const ConfirmButton = styled.button`
    background-color: #FF244A;
    color: white;
    width: 191px;
    height: 58px;
    margin: 10px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 19px;
`;

function ConfirmModal({ onConfirm, msg }) {
    return (
        <ModalBackdrop>
            <ModalContent>
                <p>{msg}</p>
                <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
            </ModalContent>
        </ModalBackdrop>
    );
}

export default ConfirmModal;