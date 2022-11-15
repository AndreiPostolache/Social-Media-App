import classes from './Stories.module.scss'
import StoryPic from '../Content/user9.png';
import StoryPic2 from '../Content/user10.png';
import StoryPic3 from '../Content/user1.jpg';
import { Avatar } from '@mui/material';


const Stories = () => {
    return (
<div className={classes.stories}>
            <div className={classes.story}>
              <div className={classes.profile_photo}>
                {/* <img src={StoryPic} alt="Gigel"/> */}
                <Avatar
        alt="Remy Sharp"
        src={StoryPic3}
        sx={{ width: 28, height: 28 }}
      />
                <p className={classes.name}>Iulian Ciubotariu</p>
              </div>
            </div>

            <div className={classes.story}>
              <div className={classes.profile_photo}>
              <Avatar
        alt="Remy Sharp"
        src={StoryPic3}
        sx={{ width: 28, height: 28 }}
      />
                <p className={classes.name}>Andrei Dumitrascu</p>
              </div>
            </div>

            <div className={classes.story}>
              <div className={classes.profile_photo}>
              <Avatar
        alt="Remy Sharp"
        src={StoryPic3}
        sx={{ width: 28, height: 28 }}
      />
                <p className={classes.name}>Bogdan Munteanu</p>
              </div>
            </div>

            <div className={classes.story}>
              <div className={classes.profile_photo}>
              <Avatar
        alt="Remy Sharp"
        src={StoryPic2}
        sx={{ width: 28, height: 28 }}
      />
                <p className={classes.name}>Iulian Ciubotariu</p>
              </div>
            </div>

            <div className={classes.story}>
              <div className={classes.profile_photo}>
              <Avatar
        alt="Remy Sharp"
        src={StoryPic}
        sx={{ width: 28, height: 28 }}
      />
                <p className={classes.name}>Iulian Ciubotariu</p>
              </div>
            </div>

            <div className={classes.story}>
              <div className={classes.profile_photo}>
              <Avatar
        alt="Remy Sharp"
        src={StoryPic2}
        sx={{ width: 28, height: 28 }}
      />
                <p className={classes.name}>Iulian Ciubotariu</p>
              </div>
            </div>
          </div>
    );
}



export default Stories;