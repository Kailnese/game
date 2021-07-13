import React from 'react'
import {
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import {
    WhatsNew,
    UserInfo,
    LiveTournament
} from '../../components/HomeComp'

const Home = () => {
    const classes = style();
    return (
        <Grid container>
            <Grid 
                xs={10}
                className={classes.leftContent}
            >
                <LiveTournament />
            </Grid>
            <Grid 
                xs={2}
                className={classes.rightContent}
            >
                <UserInfo />
                <WhatsNew />
            </Grid>
        </Grid>
    )
}

const style = makeStyles({
    root: {
        display: `flex`
    },
    leftContent: {
    },
    rightContent: {
    }
});

export default Home;