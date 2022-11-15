import classes from "./Friends.module.scss";
import NewFriends from "../FriendRequest/NewFriends";
import UserData from '../../../data/MOCK_DATA.json';




 



const Friends = () => {

  
  
 



 
  return (
    <div className={classes.friend_requests}>
      <h4 className={classes.frequest}>Request</h4>
      {
            UserData.map( user => {
                return (
                  <NewFriends profileData={user} key={user.id}></NewFriends>
                )
              })
        }
      

     

      

      
    </div>
  );
};

export default Friends;
