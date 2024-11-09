import './notificationModal.scss'

const NotificationModal = ({ setIsLogin }) => {
    return (
        <div className='NotificationModal' onClick={(e) => {
            if (e.target !== e.currentTarget) {
                return
            }
            setIsLogin(false)
        }}>
            helloooooooooooooo
        </div>
    )
}

export default NotificationModal