import Stories from "../Middle/Stories";
import Createpost from "../Middle/Createpost";
import Post from "../Middle/Post";
import UserData from "../../data/MOCK_DATA.json";
import classes from './Feeds.module.scss';




const Feeds = () => {
  return (
    <>
      <div className={classes.middle}>
        <Stories></Stories>
        <Createpost></Createpost>
        {
            UserData.map( user => {
                return (
                  <Post profileData={user} key={user.id}></Post>
                 
                )
              })
        }
        
        
      </div>
    </>
  );
};

export default Feeds;
