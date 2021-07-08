import React from 'react'
import { 
    IconButton,
    InputBase
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
            <div>
                Hello User
            </div>
            <div>
                <InputBase 
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div>
                    <Search />
                </div>
            </div>
            <div>
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
        backgroundColor: `#fff`,
        color: `black`
    }
});

export default TopNav;