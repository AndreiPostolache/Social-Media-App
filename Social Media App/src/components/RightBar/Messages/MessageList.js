import classes from './MessageList.module.scss';
import messageData from '../../../data/MESSAGES_DATA.json';




const MessageList = (props) => {


    const filteredData = messageData.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul className={classes.messageList}>
            {filteredData.map((item) => (
                <li key={item.id}>
                <div className={classes.message}>
                    <div className={classes.profile_photo}>
                      <img src={item.avatar} alt='avatar'></img>
                      <div className={classes.active}></div>
                    </div>
                    <div className={classes.message_body}>
                      <h5>{item.first_name} </h5>
                      <p className={classes.text_muted}>{item.text}</p>
                    </div>
                  </div>
                
                </li>
            ))}
        </ul>
    )


};


export default MessageList;