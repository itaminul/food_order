import { Wrapper } from "./App.style";
import TopNav from "./compnents/Template/TopNav";
import LeftSideBar from "./compnents/Template/LeftSideBar";
import Footer from "./compnents/Template/Footer";

import { TopNavBarContainer } from "./compnents/Template/TopNav.style";
import { LeftSideBarContainer } from "./compnents/Template/LeftSideBar.style";
import { FooterContainer } from "./compnents/Template/Footer.syle";
import GlobalStyles from "./GlobalStyles.styles";
function App() {
  return (
    <Wrapper>
      <GlobalStyles/>
         <TopNav />
    </Wrapper>
  );
}

export default App;
