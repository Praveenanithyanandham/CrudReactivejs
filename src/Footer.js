import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'green',
        height: '93px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
    },
    reserve: {
        display: 'flex',
        alignItems: 'center',
    },
    develop: {
        marginTop: '13px',
    },
    develop1: {
        marginLeft: '20px',
        fontSize: '30px',
    },
}));
function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <div className={classes.reserve}>
                <CopyrightOutlinedIcon />
 
                <p style={{ marginLeft: '5px', letterSpacing: '3px' }}>copyright 2021 | All rights reserved | Terms of service </p>
            </div>
            <div className={classes.develop}>
                <TiSocialFacebook className={classes.develop1} />
                <TiSocialInstagram className={classes.develop1} />
                <TiSocialTwitter className={classes.develop1} />
            </div>
        </footer>
    );
}
export default Footer;