import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import dot from '../account/dot.svg';
import { Button } from '@material-ui/core';
import './pay.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 1200,
        backgroundColor: theme.palette.background.paper,
    },
}));


const Lists = () => {

    const data = useSelector(state => state.dataReducer)
    console.log(data);
    const classes = useStyles();

    function clickFunc(props) {
        const current = data.find(c => c.id === props)
        delete current.url
        alert(JSON.stringify(current))
    }
    return (
        <div className="paySchedule" >
            <List className={classes.root}>
                {
                    data.map((index) => (
                        <ListItem key={index.id} dense divider >
                            <ListItemText >{index.dressName}</ListItemText>
                            <ListItemText>{index.price}</ListItemText>
                            <ListItemText>{index.quantity}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="menu" onClick={() => clickFunc(index.id)}>
                                    <img src={dot}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }
            </List>

        </div>

    )
}
export default Lists;