import React, { useState } from "react";
import classes from './NewFriends.module.scss';


const NewFriends = (props) => {
    
  const [acceptText, setAcceptText] = useState("Accept");
  const [declineText, setDeclineText] = useState("Decline");


  function handleClick(e) {
    if ( e.target.id === "accept" ) {
      setAcceptText("You accepted " + '\n' + props.profileData.first_name + '\n' + "request");
      setDeclineText("");
    } else {
      setDeclineText("You declined " + '\n' + props.profileData.first_name + '\n' + "request");
      setAcceptText("");
    }
  }




    return (



        <div className={classes.request}>
        <div className={classes.info}>
          <div >
            <img src={props.profileData.profilepic} className={classes.profile_photo} alt='profilepic'></img>
            {/* <img src="Content/request1.jpg" alt="" /> */}
          </div>
          <div>
            <h5 id="friend">{props.profileData.first_name}</h5>
            <p className={classes.text_muted}>29 mutual friends</p>
          </div>
        </div>
        <div className={classes.action}>
        <button disabled={!acceptText} onClick={handleClick} className={` ${acceptText ? `${classes.btn_primary} ${classes.btn}` : null }` } id="accept">
        {acceptText}
      </button>

      <button disabled={!declineText} onClick={handleClick} className={` ${declineText ? `${classes.btn}` : null }` } id="decline">
        {declineText}
      </button>

         
        </div>
      </div>
    );
}

export default NewFriends;