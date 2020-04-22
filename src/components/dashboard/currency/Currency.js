import React from 'react'
import europe from './flag-svg/europe.svg'
import usa from './flag-svg/usa.svg'
import gb from './flag-svg/gb.svg'
import rus from './flag-svg/rus.svg'
import turk from './flag-svg/turk.svg'
import up from './arrow/up.svg'
import down from './arrow/down.svg'
import dot from './arrow/dot.svg'
import convert from './arrow/convert.svg'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const Currency = () => {

    const useStyles = makeStyles({
        table: {
            maxWidth: 650,
        },
    });

    function createData(title, euro, tr, usd, pound, rub) {
        return { title, euro, tr, usd, pound, rub };
    }

    const rows = [
        createData('Buy Price', 237, 9.0, 37, 4.3, 25),
        createData('Sell Price', 262, 16.0, 24, 6.0, 22),
    ];
    const classes = useStyles();
    return (
        <div className="currency">
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Currency</TableCell>
                            <TableCell align="right">  <img src={europe} /></TableCell>
                            <TableCell align="right"> <img src={turk} /></TableCell>
                            <TableCell align="right"><img src={usa} /></TableCell>
                            <TableCell align="right"> <img src={gb} /></TableCell>
                            <TableCell align="right"> <img src={rus} /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right"> <img src={dot} /> {row.euro}</TableCell>
                                <TableCell align="right">  <img src={down} /> {row.tr}</TableCell>
                                <TableCell align="right"> <img src={up} />  {row.usd}</TableCell>
                                <TableCell align="right">  <img src={down} />{row.pound}</TableCell>
                                <TableCell align="right"> <img src={dot} />{row.rub}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <div style={{
                        position:"absolute",
                        left:"830px",
                        bottom:"30px",
                    }} >
                        <button style={{
                        width: "150px",
                        height: "50px",
                        backgroundColor:"#ffffff",
                        border:"1px solid #d7d8d6",
                        boxSizing:"border-box",
                        borderRadius:"7px",
                        padding: "10px 26px"
                        
                    }}><img  src={convert}/> Convertion</button>
                    </div>
                </Table>
            </TableContainer>

        </div>
    )
}


export default Currency;