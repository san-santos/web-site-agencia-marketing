import React from 'react';
import { Link} from "react-scroll";
import { List, Item, Linkstyle} from './styled';
import '../menu.css';

const Menu = ({actiontext}) => {
    return(
        
        <List>
            <Item className="nav-home">
                <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    <Linkstyle className={actiontext?'textColorBlack':'textColorWhite'}>
                    Home
                    </Linkstyle>
                </Link>
            </Item>
            <Item className="nav-item">
            <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <Linkstyle className={actiontext?'textColorBlack':'textColorWhite'}>
                Sobre a AGC3!
                </Linkstyle>
                </Link>
            </Item>
            <Item className="nav-item">
            <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <Linkstyle className={actiontext?'textColorBlack':'textColorWhite'}>
                Serviços
                </Linkstyle>
                </Link>
            </Item>
            <Item className="nav-item">
            <Link
                        activeClass="active"
                        to="cases"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <Linkstyle className={actiontext?'textColorBlack':'textColorWhite'}>
                Cases
                </Linkstyle>
                </Link>
            </Item>
            <Item className="nav-item">
            <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <Linkstyle className={actiontext?'textColorBlack':'textColorWhite'}>
                Contato
                </Linkstyle>
                </Link>
            </Item>
        </List>        
    )
};

export default Menu;