import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import dot from './dot.svg';
import { Button } from '@material-ui/core';
import './account.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 510,
        backgroundColor: theme.palette.background.paper,
    },
}));


const Listitem = () => {

    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <div>
            <List className={classes.root}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value} role={undefined} dense divider button onClick={handleToggle(value)}>
                            <ListItemText>My account</ListItemText>
                            <ListItemText>AZ101001020301024274598719</ListItemText>
                            <ListItemText>2 000 000 $</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="menu">
                                    <img src={dot} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
           
        </div>
        
    )
}
export default Listitem;