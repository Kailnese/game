import React from 'react'
import {

} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const WhatsNew = () => {
    const classes = style();
    return (
        <div className={classes.root}>
            what's new?
        </div>
    )
}

const style = makeStyles({
    root: {
        background: `#fff`,
        height: `35%`,
        borderRadius: `25px`
    }
});

export default WhatsNew;