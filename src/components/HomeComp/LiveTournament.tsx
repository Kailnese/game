import React from 'react'
import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const liveGames = [
    {
        id: `1`,
        title: `Unravel`,
        views: `23600`,
        icon: ``,
        type: `action`
    },
    {
        id: `2`,
        title: `Assasin's Creed`,
        views: `29000`,
        icon: ``,
        type: `action`
    },
    {
        id: `3`,
        title: `Street Fighter V`,
        views: `13700`,
        icon: ``,
        type: `sport`
    },
    {
        id: `4`,
        title: `Devil Cry`,
        views: `73600`,
        icon: ``,
        type: `action`
    },
    {
        id: `5`,
        title: `BloMutant`,
        views: `336400`,
        icon: ``,
        type: `action`
    },
    {
        id: `6`,
        title: `Splinter Cell`,
        views: `15600`,
        icon: ``,
        type: `music`
    },
    {
        id: `7`,
        title: `Dead Cell`,
        views: `19550`,
        icon: ``,
        type: `action`
    },
    {
        id: `8`,
        title: `Legua of Legends`,
        views: `64210`,
        icon: ``,
        type: `puzzle`
    },
    {
        id: `9`,
        title: `World of Warcraft`,
        views: `48000`,
        icon: ``,
        type: `rpg`
    }
]

const formatNumber = (temp:string) => {
    var num:number = Number(temp);
    return num > 999 ? ((num/1000).toFixed(1) + 'k') : num;
}

const LiveTournament = () => {
    const classes = style();
    return (
        <div className={classes.root}>
            <Grid container className={classes.content}>
                <Grid 
                    item 
                    xs={3}
                    className={classes.listContent}
                >
                    <div>
                        <Typography>LIVE TOURNAMENTS (75)</Typography>
                        <FormControl className={classes.formSelect}>
                            <InputLabel></InputLabel>
                            <Select native defaultValue="1" disableUnderline>
                                <option value={1}>All Games</option>
                                <option value={2}>Action</option>
                                <option value={3}>Puzzle</option>
                                <option value={4}>MMORPG</option>
                                <option value={5}>Sports</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formSelect} classes={{root: classes.formSelect}}>
                            <InputLabel></InputLabel>
                            <Select native defaultValue="1" disableUnderline>
                                <option value={1}>Most Viewers</option>
                                <option value={2}>Least Viewers</option>
                            </Select>
                        </FormControl>
                        <List className={classes.listRoot}>
                            {liveGames.map(item => {
                                return (
                                    <ListItem key={item.id}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                {item.icon}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.title} secondary={formatNumber(item.views)} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                    
                </Grid>
                <Grid 
                    item 
                    xs={9}
                    className={classes.liveRight}
                >
                    these content
                </Grid>
            </Grid>
        </div>
    )
}

const style = makeStyles({
    root: {
        height: `78vh`
    },
    content: {
        height: `100%`,
        width: `98%`,
        background: `#fff`,
        borderRadius: `25px`,
        display: `flex`
    },
    listContent: {
        display: `flex`,
        justifyContent: `center`,
        // padding: `2%`
    },
    listRoot: {
        maxHeight: `60vh`,
        overflow: `auto`
    },
    liveRight: {
    },
    formSelect: {
        textDecoration: `none`
    }
});

export default LiveTournament;