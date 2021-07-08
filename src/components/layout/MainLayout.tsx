import React from 'react'
import {
    List,
    ListItem,
    IconButton,
    Grid,
    Avatar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {
    Home,
    SportsEsports,
    PeopleAlt,
    NewReleases,
    PieChart,
    Settings
} from '@material-ui/icons'

import user from '../../images/1.jpeg'
import bgImage from '../../images/background.jpeg'

const MainLayout = (props:any) => {
    const classes = style();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} classes={{root: classes.container}}>
                <Grid item classes={{root: classes.nav}}>
                    <List>
                        <ListItem>
                            <IconButton>
                                <Home />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <SportsEsports />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <PeopleAlt />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <NewReleases />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <PieChart />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <Settings />
                            </IconButton>
                        </ListItem>
                    </List> 
                    <div className={classes.user}>
                        <IconButton classes={{root: classes.iconBtn}}>
                            <Avatar alt="user" src={user} classes={{root: classes.icon}} />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.content}>
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
    user: {
        display: `flex`,
        alignItems: `flex-end`,
        justifyContent: `center`,
        height: `40%`
    },
    iconBtn: {
        height: `50px`,
        padding: `1%`
    },
    icon: {
        boxShadow: `2px 2px 15px #ffd6fb`
    },
    content: {
        height: `100%`,
        width: `100%`
    },
})

export default MainLayout;