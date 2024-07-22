import { Col, Nav, Offcanvas, Row } from "react-bootstrap"
import './Header.sass'
import { auto } from "@popperjs/core"
import logo from '../images/logo.svg'
import menu from '../images/menu.svg'
import { Menu } from "./Menu"
import { useState } from "react"

const navigation = [{ text: 'Как это работает', link: '' }, { text: '3-й блок', link: '' },
{ text: 'Вопросы и ответы', link: '' }, { text: 'Форма', link: '' }]

export const Header = () => {

    const [isMenuShow, setIsMenuShow] = useState(false)


    return <>
        <Row className="Header">
            <Col xs={'auto'} xl={6} className="d-flex justify-content-center align-items-center mx-2">
                <img src={logo} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center navigation-container">
                <img className="menu" src={menu} onClick={() => setIsMenuShow(true)} />
                <Row className="p-0 navigation justify-content-between">
                    {navigation.map((x) => (
                        <Col key={x.text} xs={'auto'} className="p-0">
                            <span
                                onClick={() => { }}
                            >{x.text}</span>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>

        <Menu
            show={isMenuShow}
            onHide={() => setIsMenuShow(false)}
            sections={navigation}
        />
    </>
}