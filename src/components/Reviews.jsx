import Slider from "react-slick";
import men from '../images/men.png'
import './Reviews.sass'
import { Col, Row } from 'react-bootstrap';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1180,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const reviews = Array(6).fill({
    avatar: men, name: 'Иван Иванов', city: 'Санкт-Петербург',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие ' +
        'возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский' +
        'опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
})




export const Reviews = () => {

    return <>
        <div className="Reviews p-5">
            <div className="overlay">
                <h2>Отзывы</h2>
                <Slider {...settings}>
                    {reviews.map((x) => (
                        <div className="card p-3 d-flex">
                            <div>
                                <Row >
                                    <Col xs={'auto'}>
                                        <img src={x.avatar} />
                                    </Col>
                                    <Col>
                                        <Row className="flex-column">
                                            <Col>
                                                <strong>{x.name}</strong>
                                            </Col>
                                            <Col>
                                                <span>{x.city}</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <Col className="mt-3">
                                <p>{x.description}</p>
                            </Col>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </>
}