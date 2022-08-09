import { useAppContext } from "../../Context/appContext";

const Alert = () => {
   const { alertType, alertText } = useAppContext()
    return(
        <div className={`${alertType}`}>
        {alertText}
        </div>
    )
}

export default Alert;