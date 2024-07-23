import { Col, Row } from 'react-bootstrap';
import './Descriptions.sass'

const descriptions = Array(4).fill({
    header: 'Опрошенных пользовались микрокредитами',
    description: 'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах' 
})

export const Descriptions = () => {




    return <>
        <Row className='Descriptions p-5 justify-content-center'>
            {descriptions.map((x) => (
                <Col xs={11} md={5} className='m-2'>
                    <Row className='flex-column'>
                        <Col className='my-3'>
                            <strong>{x.header}</strong>
                        </Col>
                        <Col>
                            <span>{x.description}</span>
                        </Col>
                    </Row>
                </Col>
            ))}
        </Row>
    </>
};