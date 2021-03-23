import { Modal } from '@material-ui/core';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  background: #00000080;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const InnerModalStyles = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  padding: 0 1rem;
  transform: translate(-50%, -50%);
  border-radius: 2.5rem;
  border: none;
  outline: none;
  width: 600px;
  height: 300px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  text-align: center;
  .btn-wrapper {
    display: flex;
    width: 60%;
    justify-content: space-between;
    padding-top: 2rem;

    button {
      cursor: pointer;
      border: 1px solid #00000070;
      border-radius: 1.2rem;
      padding: 1rem 3.5rem;
      font-weight: 500;
      font-size: 1.5rem;
      :hover {
        border-color: #ffffff;
      }
    }

    .delete-btn {
      background-color: #df0000;
      color: #ffffff;
    }
  }
`;
