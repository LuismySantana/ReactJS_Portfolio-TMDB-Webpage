import "../styles/ButtonLog.scss";


const ButtonLog = ({label, hoverClass, clickAction}) => {
  return (
    <button 
        type="button"
        className="button_log"
        onClick={clickAction}
    >
        {label}

        <div className={`hover_style ${hoverClass}`}>
            {label}
        </div>
    </button>
  )
}

export default ButtonLog;