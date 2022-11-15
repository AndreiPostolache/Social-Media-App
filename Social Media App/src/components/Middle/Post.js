

import classes from './Post.module.scss';
import Story3 from '../Content/story3.jpg'
import { useState,  } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';




const Post = (props) => {

  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(
    props.profileData.numberOfLikes
  );

  



  const likesReactionAction = () => {
    
    setIsLiked((prevState) => {
      return !prevState;
    });

    if (isLiked) {
      setNumberOfLikes((prevState) => {
        return prevState -1;
      });
    } else {
      setNumberOfLikes((prevState) => {
        return prevState +1;
      });
    }
  };


  


    return (
<div className={classes.feeds}>
            <div className={classes.feed}>
              <div className={classes.head}>
                <div className={classes.user}>
                  <div className={classes.profile_photo}>
                  <img
                        src={props.profileData.profilepic}
                        alt="Profile"
                        className={classes.profile_photo}
                        id="profileImage"
                      />
                  </div>
                  <div className="ingo">
                    <h3 className={classes.profileNameText}>{props.profileData.first_name}</h3>
                    <small>Iasi, 15 MINUTES AGO</small>
                  </div>
                </div>
                <div className="profileOptions-buttons">
                  <div className="bookmark">
                  
                    <span><i className="fa-solid fa-bookmark" id="bookmark-button"></i></span>
                  
                  
                </div>
                  {/* <div className="profileOptions">
                    
                    <Link id="profileOptionsButton">
                      
                      <span className="edit"><i className="fa-solid fa-ellipsis"></i></span>
                    </Link>
                    <div className="profileOptionsDropdown" >
                      <div className="profileOptions-body"> <span className="profileDropDown-icons"><i className="fa-regular fa-bookmark"></i></span> Salveaza aceasta postare</div>
                      
                      <div className="profileOptions-body"><span className="profileDropDown-icons" ><i className="fa-regular fa-bell"></i></span>Raporteaza aceasta postare</div>
                      
                      <div className="profileOptions-body"><span className="profileDropDown-icons"><i className="fa-solid fa-code"></i></span>Incorporeaza  postarea</div>
                    
                      
                      <div className="profileOptions-body"><span className="profileDropDown-icons"><i className="fa-solid fa-square-xmark"></i></span>Nu mai urmari postarea</div>
                      <div className="profileOptions-body"><span className="profileDropDown-icons"><i className="fa-sharp fa-solid fa-flag"></i></span>Marcheaza aceasta postare</div>
                      
  
                    </div>
                  </div> */}
                </div>
                
               
              </div>
              <div className={classes.photo}>
                <img src={Story3} alt='Story3'/>
              </div>

              <span className={classes.text_muted}> Travelling around the world!
              </span>

              <div className={classes.reacts}>
                <div className={classes.likesNumber}>
                  <i className="fas fa-thumbs-up"></i>
                  <span className={classes.reactsCount}
                    ><span id="numberOfLikes"></span> {numberOfLikes} likes</span>
                </div>
                <div className={classes.commentsNumber}>
                  <i className="fas fa-comments"></i>
                  <span className={classes.reactsCount}>15 comments</span>
                </div>
              </div>
              <hr />
              <div className={classes.reactsActions}>
                <ul className={classes.actions}>
                  <li  className={`${classes.reactions} ${isLiked && classes.blue}`}
              onClick={likesReactionAction}>
                   <ThumbUpIcon></ThumbUpIcon>
                    <span>Like</span>
                  </li>
                  <li className={classes.reactions}  id="commentButton">
                    <CommentIcon></CommentIcon>
                    <span>Comment</span>
                  </li>
                  <li className={classes.reactions}>
                    <ShareIcon></ShareIcon>
                    <span>Share</span>
                  </li>
                </ul>
                </div>
                
              
                <section className={classes.commentSection}>
                    <div className={classes.enterCommentInput}>
                      <img
                        src={props.profileData.profilepic}
                        alt="Profile"
                        className={classes.profile_photo}
                        id="profileImage"
                      />
                      <input type="text" className={classes.commentInput} placeholder="Insert your comment here..." />
                    </div>
                  
                    <div className={classes.commentsSection}>
                      <span id="pressEnterNotification"></span>
                      {/* <img
                        src={ProfilePic}
                        alt="User Profile Image"
                        className="profile-photo"
                        id="profileImage"
                      /> */}
                      <div className={classes.profile_photo}>
                      <img
                        src={props.profileData.profilepic}
                        alt="Profile"
                        className={classes.profile_photo}
                        id="profileImage"
                      />
                      </div>
                      
                      
                      <div className={classes.firstComment}>
                        <span>{props.profileData.first_name}</span>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          Quaerat, aut.
                        </p>
                      </div>
                    </div>
                  </section>
                 


            
            </div>



            
         


            
          </div>
    );
}


export default Post;