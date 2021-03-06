import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Listitem from './list'
import './account.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `width-tab-${index}`,
        'aria-controls': `width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root1: {
        width: 534,
    },
}));

const Accounts = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div className="pay">
            <div className={classes.root1}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="default"
                        textColor="default"
                        v
                        aria-label="full width tabs example"
                    >
                        <Tab label="Accounts" {...a11yProps(0)} />
                        <Tab label="Loans" {...a11yProps(1)} />
                        <Tab label="Cards" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                       <Listitem/>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                       <Listitem/>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                       <Listitem/>
                    </TabPanel>
                    
                </SwipeableViews>
            </div>
            <button className="button4">
                Go to accounts page
            </button>
        </div>
    )
}
export default Accounts;