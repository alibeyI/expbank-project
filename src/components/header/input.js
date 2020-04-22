import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './header.css'


export default function CustomizedInputBase() {

  return (
   <div>

      <input type="text" className="search" placeholder="Search"/>
   </div>
  );
}
