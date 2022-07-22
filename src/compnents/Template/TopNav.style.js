import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
width: 100%;
height: 65px;
  background-color: #3D3D3D;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* show on larger screens */
  @media screen and (min-width: 600px) {
    display: block;
  }
  `


export const TopNavBarContainer = styled.div`


`

export const StyledMenu = styled.div`
position: fixex;
top: 0;
right: 0;
height: 100vh;
width: 100%;
@media screen and (min-width: 790px) {
  width: 60%;
}
background-color: rgba(255, 255, 255,.95);
z-index: 99;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const StyledLink = styled(Link)`
color: #222;
text-decoration: none;
font-size: clamp(3rem, 4vw, 6vw);
font-family: Impact, Haettenschweiler, 'Arial Nawwow Bold';
user-select: none;
`

export const Navigations = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);

`
export const BrandName  = styled.div`
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  
  `
  export const NavigationMenu = styled.div`
    margin-left: auto;  
  `
  export const Ul = styled.div`
    display: flex;
    padding: 0;
  
  `
  export const Li = styled.div`
    list-style-type: none;
    margin: 0 1rem;
  `
  export const UlLink = styled.div`
    text-decoration: none;
    display: block;
    width: 100%;
  `
  export const Humburger = styled.div`
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  `



export const Navigation = styled.header`
width: 100%;
border-bottom: 10px solid #222;
z-index: 1;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 100px 0;
height: 140px;
margin-bottom: 60px;
background: #f8f8f8;

.logo a {
  padding-top: 33px;
  display: flex;
  flex-direction: column;
  clear: both;
  padding-bottom: 30px;
  text-decoration: none;

  p {
    width: 500px;
    display: block;
  }
  em {
    font-size: 0.5em;
    float: left;
    display: block;
    img {
      display: inline-block;
      margin-top: 5px;
      width: 15px;
      float: left;
    }
    .letterhead {
      display: inline-block;
      line-height: 260%;
      float: left;
    }
  }
}
.gray {
  color: #ccc;
}
a {
  color: #222;
  opacity: 0.55;
  transition: all 0.6s;
  color: #222;
  font-size: 1em;
}
a:hover {
  opacity: 1;
}
.fa-bars {
  display: none;
  color: #222;
  font-size: 2rem;
}
nav {
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin: 0 15px;
    justify-content: space-between;
    font-size: 1em;
  }
  a {
    font-size: 1em;
    text-decoration: none;
    .active {
      color: tomato;
    }
  }
  a.active {
    color: #222;
  }
}

@media only screen and (max-width: 800px) {
  padding: 0px;
  .logo {
    padding-left: 15px;
    padding-top: 0px !important;
  }
}
@media only screen and (max-width: 600px) {
  height: auto;
  min-height: 50px;
  display: block;
  position: relative;
  .logo {
    width: 100%;
    display: block;
    padding-top: 20px;
    margin: 0px;
    margin-left: -5px;
    a {
      padding: 20px 0px;
    }
  }
  .fa-bars {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  ul.collapsed {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    overflow: hidden;
    max-height: 0;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

    &.is-expanded {
      overflow: hidden;
      max-height: 500px; /* approximate max height */
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: ease-in;
      -webkit-transition-timing-function: ease-in;
      -o-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    li {
      padding: 15px 10px;
      margin: 0px 0px;
      width: 100%;
    }
  }
}
`