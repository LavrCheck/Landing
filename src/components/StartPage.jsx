import { Row, Col } from 'react-bootstrap'
import './StartPage.sass'
import { MyButton } from './ui/MyButton'

export const StartPage = () => {

    return <>
        <div className='StartPage'>
            <Row className='overlay p-0 m-0 flex-column justify-content-center align-items-center hello' >
                <Col xxl={5} md={8} sm={9}>
                    <Col className='section' xs={'auto'}>
                        <span>Говорят, никогда не поздно сменить профессию</span>
                    </Col>
                    <Col className='section' xs={'auto'}>
                        <p>Сделай круто тестовое задание и у тебя получится</p>
                    </Col>
                    <Col className='section mt-5' xs={'auto'}>
                        <MyButton text={'Проще простого!'}/>
                    </Col>
                </Col>
            </Row>
        </div>
    </>
}