import React from 'react'
import {

} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import TopNav from '../../common/topNav/TopNav';

const Home = () => {
    const classes = style();
    return (
        <div className={classes.root}>
            <TopNav />
            <div className={classes.content}>
                hello content
            </div>
        </div>
    )
}

const style = makeStyles({
    root: {

    },
    content: {
        backgroundColor: `pink`,
        height: `80vh`
    }
});

export default Home;