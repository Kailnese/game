import React from 'react'
import {
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const Home = () => {
    const classes = style();
    return (
        <Grid container>
            <Grid 
                xs={9}
                className={classes.leftContent}
            >
                This is Home left page
            </Grid>
            <Grid 
                xs={3}
                className={classes.rightContent}
            >
                This is Home right page
            </Grid>
        </Grid>
    )
}

const style = makeStyles({
    root: {
        display: `flex`
    },
    leftContent: {
        backgroundColor: `pink`
    },
    rightContent: {
        backgroundColor: `red`
    }
});

export default Home;