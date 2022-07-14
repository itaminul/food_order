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
  margin-top: 280px; 
  margin-left: 290px;
  background: white;
  font-size: 15px;
  width: 50%;
  height: 30%;
`
export const AvailableProductsDetails = styled.div`
  margin-top: 150px; 
  margin-left: 100px;
  width: 50%;
`