import React from 'react'
import {

} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const UserInfo = () => {
    const classes = style();
    return (
        <div className={classes.root}>
            User Info
        </div>
    )
}

const style = makeStyles({
    root: {
        background: `#fff`,
        height: `62%`,
        marginBottom: `9%`,
        borderRadius: `25px`
    }
});

export default UserInfo;