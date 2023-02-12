import "../styles/WarningMessage.scss";

const WarningMessage = ({title, message}) => {
    return (
        <div className="no_data_warning_container">
            <h1 className="no_data_warning">{title}</h1>
            <h3>{message}</h3>
        </div>
    )
}

export default WarningMessage;