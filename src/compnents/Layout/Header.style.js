import styled from 'styled-components'

export const HeaderContent = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 5rem;
background-color: #8a2b06;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 92%;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 10;
`


export const CartBox = styled.div`
  top: 0;
  background-color: yellow;
  padding: 50px;
  font-size: 20px;
  `

  export const CartBoxSticky = styled.div`
  background-color: #55584d;
  padding: 20px;
  color: #000;
  position: fixed;
  margin: 90%;
  opacity: .85;
  margin-top: 150px;
  width: 40px;
  height: 40px;
  animation: push ease 5s alternate infinite;
  animation-delay: 1.5s;
`

export const ShopingBagBox = styled.div`
width: 20px;
  height: 20px;
`
export const ItemCount = styled.div`
  font-size: 16px;
  width: 150px;
  margin-top: 4px;
  color: yellow;
`
export const DollorCount = styled.div`
  font-size: 16px;
  width: 78px;
  margin-left: -20px;
  text-align: center;
  margin-top: 20px;
  background: white;
`


export const MainImage = styled.div`
width: 100%;
height: 5rem;
margin: 0px 0px 0px 0px;
`
export const MainImageImage = styled.div`
width: 110%;
height: 100%;
object-fit: cover;
transform: rotateZ(-5deg) translateY(-4rem) translateZ(-1rem);
`