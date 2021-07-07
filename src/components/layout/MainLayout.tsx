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
        <Grid container spacing={3} classes={{root: classes.root}}>
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
                    hello
                </div>
            </Grid>
        </Grid>
        
    )
}

const style = makeStyles({
    root: {
        height: `100%`,
        width: `100%`,
        margin: `0`,
        alignContent: `center`,
        background: `url(${bgImage}) no-repeat center center fixed`,
        backgroundSize: `100% 100%`
    },
    nav: { 
        height: `90%`,
        margin: `0 1% 0 2%`,
        borderRadius: `15px`,
        backgroundColor: `#fff`
    },
    user: {
        display: `flex`,
        alignItems: `flex-end`,
        justifyContent: `center`,
        height: `50%`
    },
    iconBtn: {
        height: `50px`,
        padding: `1%`
    },
    icon: {
        boxShadow: `2px 2px 15px #eadee2`
    },
    content: {
        backgroundColor: `black`,
        height: `100%`,
        width: `100%`,
        color: `#fff`
    },
})

export default MainLayout;