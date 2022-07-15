import styled from 'styled-components'
import { device } from './Device';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;
  @media ${device.laptop} {
    flex-direction: row;
  }

`
export const ProductsSummaryContent = styled.div`
  font-size: 20px;
  display: inline-block;
  border: 1px solid white;
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 300;
  margin-top: 50px; 
  margin-left: 290px;
  background: white;
  font-size: 15px;
  width: 50%;
  height: 30%;
`
export const ProductsWrapper = styled.div`
width: 100%;

`

export const AvailableProductsDetails = styled.div`
width: 30%;
margin-left: 30%;
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

`