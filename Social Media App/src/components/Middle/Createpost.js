import ImageAvatars from '../Avatar';
import classes from './Createpost.module.scss'



const Createpost = () => {
    return (
        <form className={classes.create_post}>
            
            <ImageAvatars></ImageAvatars>
            
            <input
              type="text"
              placeholder="What's on your mind, Andrei?"
              id="create-post"
            />
            <input type="submit" value="Post" className={`${classes.btn} ${classes.btn_primary}`} />
          </form>
    );
}



export default Createpost;