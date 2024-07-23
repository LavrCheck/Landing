import { Col, Collapse, Fade, Row } from "react-bootstrap"
import { useState } from "react"
import plus from '../images/plus.svg'
import plusPrimary from '../images/plusPrimary.svg'
import './QuestionCard.sass'


export const QuestionCard = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false)


    return <>
        <Col className="QuestionCard">
            <div onClick={() => setIsOpen(!isOpen)} className="d-flex justify-content-between p-4 header">
                <strong style={isOpen ? {color: '#2A6CEA'} : {}}>{data.question}</strong> <img src={isOpen ? plusPrimary : plus}/>
            </div>

            <Collapse in={isOpen} appear={false} timeout={0}>
                <div className="p-4">
                    <span >{data.answer}</span>
                </div>
            </Collapse>

        </Col >

    </>
};