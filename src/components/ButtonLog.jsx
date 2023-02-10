import "../styles/ButtonLog.scss";


const ButtonLog = ({label, hoverClass}) => {
  return (
    <button 
        type="button"
        className="button_log"
    >
        {label}

        <div className={`hover_style ${hoverClass}`}>
            {label}
        </div>
    </button>
  )
}

export default ButtonLog;