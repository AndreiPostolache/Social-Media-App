import Topbar from '../components/TopBar/Topbar';
import Rightbar from '../components/RightBar/Rightbar';
import Leftbar from '../components/LeftBar/Leftbar';
import Feeds from '../components/Middle/Feeds';
import classes from './Home.module.scss';













export default function Home(props) {
    return(
        <>
        <Topbar toggleTheDarkMode={props.toggleDarkMode}></Topbar>
        <main>
        <div className={classes.homeContainer}>
        <Leftbar></Leftbar>
        <Feeds></Feeds>
        <Rightbar></Rightbar>
        </div>
        </main>
        
        
        </>
    )
};