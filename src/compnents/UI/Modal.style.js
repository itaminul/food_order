import styled from 'styled-components'

export const BackdropModal = styled.div`
background-color: white;
position: fixed;
top: 75px;
z-index: 5;
max-height: calc(100% - 200px);
left: calc(50% - 250px);
display: flex;
flex-direction: column;
@media (max-width: 500px) {
  left: 0px;
  margin: 0px 10px;
}
`

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;


export const AModal = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0px;
  left: 77%;
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const ModalForm = styled.div`
position: fixed;
top: 20vh;
left: 5%;
width: 100%;
padding: 1rem;
background-color:rgba(0, 0, 0, 0.75);

`