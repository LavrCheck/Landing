import { Col, Collapse, Row } from "react-bootstrap"
import './Questions.sass'
import { QuestionCard } from "./QuestionCard"

const answer = 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'

const questions = [{ question: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?', answer: answer }, { question: 'Прототип нового сервиса - это как трубный призыв?', answer: answer },
{ question: 'Прототип нового сервиса - это как трубный призыв?', answer: answer },
{ question: 'Частокол на границе продолжает удивлять?', answer: answer },
{ question: 'Очевидцы сообщают, что слышали грохот грома грaдущих изменений?', answer: answer },
{ question: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?', answer: answer },
{ question: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?', answer: answer },
{ question: 'Высококачественный прототип будущего проекта обнадёживает?', answer: answer },

]



export const Questions = ({refs}) => {


    return <Row className="Questions p-4 flex-column align-items-center justify-content-center w-100 m-0" ref={refs}>
        <Col xs={12} className="my-5">
            <h3>Вопросы и ответы</h3>
        </Col>
        <Col xxl={8} xs={11}>
            <Row className="flex-column">
                {questions.map((x) => (
                    <QuestionCard data={x} key={x.question} />
                ))}
            </Row>
        </Col>
    </Row>
}