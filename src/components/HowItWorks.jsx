import { Col, Row } from 'react-bootstrap'
import './HowItWorks.sass'
import arrowUp from '../images/arrowUp.svg'
import delivery from '../images/delivery.svg'
import money from '../images/money.svg'
import secure from '../images/secure.svg'
import mobile from '../images/mobile.png'
import car from '../images/car.jpg'

const sections = [{ img: arrowUp, header: 'Прочитай задание внимательно', text: 'Думаю, у тебя не займет это больше двух-трех минут' },
{ img: delivery, header: 'Изучи весь макет заранее', text: 'Подумай как это будет работать на разных разрешениях и при скролле' },
{ img: secure, header: 'Сделай хорошо', text: 'Чтобы мы могли тебе доверить подобные задачи в будущем' },
{ img: money, header: 'Получи предложение', text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))' }
]

export const HowItWorks = ({refs}) => {

    return <>
        <Row className='HowItWorks flex-column align-items-center m-0'>
            <Col xxl={10} xs={11} className='pt-5 flex1' ref={refs.howItWorksRef}>
                <Row className='flex-column align-items-center justify-content-center'>
                    <Col xs={'auto'} className='d-flex justify-content-center'>
                        <h2>Как это работает</h2>
                    </Col>
                    <Col className='mt-xxl-5'>
                        <Row className='align-items-center just'>
                            {sections.map((x) => (
                                <Col key={x.header} className='mt-3' xl={3} sm={6} xs={12} >
                                    <Row >
                                        <Col xl={12} xs={'auto'}><img className='icon' src={x.img} /></Col>
                                        <Col>
                                            <Row className='flex-column'>
                                                <Col className='my-1'><span>{x.header}</span></Col>
                                                <Col className='pe-md-5'><p className='m-0 pe-5'>{x.text}</p></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xxl={10} xs={11} className='flex1 d-flex' ref={refs.blockRef}>
                <Row className='w-100 ps-3 bottom-info pb-5'>

                    <Col xs={12} className='d-flex flex-column justify-content-center align-items-center flex1'>
                        <h3>Круто, ты дошел до третьего блока</h3><br />
                        <span className='description'
                        >63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</span> <br />
                        <span className='description'
                        > Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах. </span>
                    </Col>
                    <Col xs={12} className='flex1 d-flex justify-content-center '>
                        <div className='img-container'>
                            <img src={mobile} />
                            <img src={car} />
                        </div>
                    </Col>

                </Row>
            </Col>
        </Row>
    </>
}