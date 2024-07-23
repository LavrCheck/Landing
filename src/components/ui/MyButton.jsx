import './MyButton.sass'

export const MyButton = ({text, isForm = false, isDisabled, onClick}) => {
    
    return <>
        <button
            className={`MyButton ${isForm ? 'form' : ''}`}
            disabled={isDisabled}
            onClick={onClick}
        >{text}</button>
    </>
}