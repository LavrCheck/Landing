import './MyButton.sass'

export const MyButton = ({text, className}) => {
    
    return <>
        <button
            className={`MyButton ${className}`}
        >{text}</button>
    </>
}