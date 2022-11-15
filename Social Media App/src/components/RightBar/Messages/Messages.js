import classes from './Messages.module.scss'

import MessageList from '../Messages/MessageList';
import { useState } from 'react';





const Messages = () => {
  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


 

    return (
<div className={classes.messages}>
                <div className={classes.heading}>
                  <h4>Messages</h4>
                  
                </div>
               
                <div className={classes.search_bar}>
                    
                  <input
                    type="search"
                    placeholder="Search messages"
                    classes={classes.message_search}
                    onChange={inputHandler}
                    
                    
                  />
                </div>
      
      
              
                <div className={classes.category}>
                  <h6 className={classes.active}>Primary</h6>
                  <h6>General</h6>
                  <h6 >Requests(7)</h6>
                </div>
      

     
      
                <MessageList input={inputText}></MessageList>

                

               
                
      
              </div>

    );
};



export default Messages;