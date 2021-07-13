import React from 'react'
import {
    List,
    ListItem,
    IconButton,
    Grid,
    Avatar,
    Icon
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { withRouter } from 'react-router'

import user from '../../images/1.jpeg'
import bgImage from '../../images/background.jpeg'
import TopNav from '../../common/topNav/TopNav'

import routes from '../../router'

const MainLayout = (props:any) => {
    const classes = style();
    const handleNav = (path:string) => {
        props.history.push(path);
        console.log(props.history)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} classes={{root: classes.container}}>
                <Grid item classes={{root: classes.nav}}>
                    <List>
                        {routes.map(item => {
                            return (
                                <ListItem>
                                    <IconButton 
                                        onClick={() => handleNav(item.path)}
                                        className={`${classes.btn} ${item.path === props.history.location.pathname ? classes.active: ""}`}
                                    >
                                        <Icon 
                                            component={item.btn} 
                                            color={item.path === props.history.location.pathname ? "primary" : "inherit"}
                                            classes={{colorPrimary: classes.activeBtn}}
                                        />
                                    </IconButton>
                                </ListItem>
                            )
                        })}
                    </List> 
                    <div className={classes.user}>
                        <IconButton classes={{root: classes.avatarBtn}}>
                            <Avatar alt="user" src={user} classes={{root: classes.avatar}} />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.content}>
                        <TopNav />
                        {props.children}
                    </div>
                </Grid>
            </Grid>
        </div>
        
    )
}

const style = makeStyles({
    
    root: {
        height: `100%`,
        width: `100%`,
        background: `url(${bgImage}) no-repeat center center fixed`,
        backgroundSize: `100% 100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    },
    container: {
        height: `95%`,
        width: `95%`,
        margin: `0`,
        alignContent: `center`,
        padding: `2%`,
        backdropFilter: `blur(10px)`,
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
        borderRadius: `15px`,
        boxShadow: `0px 1px 11px -2px #A86FA6`
    },
    nav: { 
        height: `98%`,
        margin: `0 1% 0 2%`,
        borderRadius: `15px`,
        backgroundColor: `#fff`,
        boxShadow: `0px 1px 11px -2px #FFDCFF`
    },
    btn: {
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '0.175rem',
            left: '25%',
            bottom: '0',
            background: '#f86de1',
            transition: 'transform 0.3s ease',
            transform: 'scale(0, 1)'
        },
        '&:hover::after': {
            transform: 'scale(1, 1)'
        }
    },
    active: {
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '0.175rem',
            left: '25%',
            bottom: '0',
            background: '#f86de1',
            transition: 'transform 0.3s ease',
            transform: 'scale(1, 1)'
        }
    },
    activeBtn: {
        color: '#f86de1'
    },
    user: {
        display: `flex`,
        alignItems: `flex-end`,
        justifyContent: `center`,
        height: `40%`
    },
    avatarBtn: {
        height: `50px`,
        padding: `1%`
    },
    avatar: {
        boxShadow: `2px 2px 15px #ffd6fb`
    },
    content: {
        height: `100%`,
        width: `100%`
    },
})

export default withRouter(MainLayout);