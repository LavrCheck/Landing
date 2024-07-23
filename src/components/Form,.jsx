import { Row, Col } from 'react-bootstrap'
import './Form.sass'
import { MyButton } from './ui/MyButton'
import { useState } from 'react'

export const Form = ({refs}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [check, setCheck] = useState(false)


    return <>
        <div className='Form w-100 d-flex justify-content-center' ref={refs}>
            <div className='overlay'>
                <Row className='flex-column w-100'>
                    <Col>
                        <h3 className='my-5'>Отправить форму</h3>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} md={6} className='my-3'>
                                <input
                                    value={name}
                                    onChange={(x) => setName(x.target.value)}
                                    className='inputs'
                                    placeholder='Имя'
                                />
                            </Col>

                            <Col xs={12} md={6} className='my-3'>
                                <input
                                    value={phone}
                                    onChange={(x) => {
                                        if (/^[\d+]*$/.test(x.target.value)) { setPhone(x.target.value) }
                                    }}
                                    className='inputs'
                                    placeholder='Телефон'
                                />
                            </Col>

                            <Col xs={12} md={6} className='my-3 d-flex justify-content-start align-items-center '>
                                <input className='me-2 form-check-input' type='checkbox' value={check} onChange={() => setCheck(!check)} /> <span>Согласен, отказываюсь</span>
                            </Col>

                            <Col xs={12} md={6} className='my-3 '>
                                <MyButton
                                    isForm={true}
                                    text={'Отправить'}
                                    isDisabled={!name || (phone.length < 11) || !check}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    </>
}