import React from 'react'
import { 
    IconButton,
    InputBase,
    Typography
} from '@material-ui/core'
import { 
    Search,
    LocalMall,
    Notifications
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const TopNav = () => {
    const classes = style();
    return (
        <div className={classes.root}>
            <div className={classes.username}>
                <Typography classes={{root: classes.title}}>Hello User</Typography>
            </div>
            <div className={classes.searchContent}>
                <InputBase 
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    classes={{root: classes.searchInput}}
                />
                <div>
                    <Search classes={{root: classes.searchIcon}} />
                </div>
            </div>
            <div className={classes.funcBtn}>
                <IconButton>
                    <LocalMall />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
            </div>
        </div>
    )
}

const style = makeStyles({
    root: {
        display: `flex`,
        justifyContent: `space-between`,
        width: `100%`,
        color: `black`
    },
    username: {
        display: `flex`,
        alignItems: `center`
    },
    title: {
    },
    searchContent: {
        display: `flex`,
        alignItems: `center`
    },
    searchInput: {
        borderRadius: `15px`,
        padding: `10px`,
        textAlign: `center`,
        width: `20vw`,
        height: `3vh`,
        backdropFilter: `blur(10px)`,
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
    },
    searchIcon: {
        position: `absolute`,
        transform: `translate(-120%, -50%)`
    },
    funcBtn: {

    }
});

export default TopNav;