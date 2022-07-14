import { Fragment } from "react";
import { HeaderContent, MainImage } from "./Header.style";
import foodImage from '../../assets/food_order_banner.png'
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return <Fragment>
        <HeaderContent>
            <HeaderCartButton onClick={props.onShowCart} />

        </HeaderContent>
        <MainImage>
            <img style={{width: '100%', height: '700px'}} src={foodImage} alt='Food' />
        </MainImage>

    </Fragment>
}

export default Header;