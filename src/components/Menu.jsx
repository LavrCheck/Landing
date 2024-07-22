import { Nav, Offcanvas } from "react-bootstrap"
import './Menu.sass'
import logoBlack from '../images/logoBlack.svg'
import arrowLeft from '../images/arrowLeft.svg'



export const Menu = ({ sections, show, onHide }) => {

    return <>
        <Offcanvas show={show} onHide={onHide} placement="end" className='Menu pt-1'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><img src={logoBlack}/></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    {sections.map((item, index) => (
                        <Nav.Link key={index} href={item.link} className="link">
                            {item.text}
                            <img src={arrowLeft}/>
                        </Nav.Link>
                    ))}
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}