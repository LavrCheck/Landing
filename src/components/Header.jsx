import { Col, Nav, Offcanvas, Row } from "react-bootstrap"
import './Header.sass'
import { auto } from "@popperjs/core"
import logo from '../images/logo.svg'
import menu from '../images/menu.svg'
import { Menu } from "./Menu"
import { useState } from "react"

const navigation = [
    { text: 'Как это работает', link: 'howItWorksRef' },
    { text: '3-й блок', link: 'blockRef' },
    { text: 'Вопросы и ответы', link: 'questionsRef' },
    { text: 'Форма', link: 'formRef' }
]

export const Header = ({ refs }) => {

    const [isMenuShow, setIsMenuShow] = useState(false)

    const handleScroll = (link) => {
        if (refs[link]) {
            refs[link].current.scrollIntoView({ behavior: 'smooth' })
        }
    }


    return <>
        <Row className="Header">
            <Col xs={'auto'} xl={6} className="d-flex justify-content-center align-items-center mx-2">
                <img src={logo} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center navigation-container">
                {/* <nav> */}
                    <img className="menu" src={menu} onClick={() => setIsMenuShow(true)} />
                    <Row className="p-0 navigation justify-content-between">
                        {navigation.map((x) => (
                            <Col key={x.text} xs={'auto'} className="p-0">
                                <span
                                    onClick={() => handleScroll(x.link)}
                                >{x.text}</span>
                            </Col>
                        ))}
                    </Row>
                {/* </nav> */}
            </Col>
        </Row>
        <Menu
            show={isMenuShow}
            onClick={(link) => handleScroll(link)}
            onHide={() => setIsMenuShow(false)}
            sections={navigation}
        />
    </>
}