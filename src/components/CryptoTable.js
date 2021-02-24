import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      top: 300
    },
});

const CryptoTable = ({ prices }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="simple table" id='cryptoTable'>
            <TableHead>
            <TableRow>
                <TableCell>Crypto Currency</TableCell>
                <TableCell align="right">Price (USD)</TableCell>
                <TableCell align="right">Price % Change</TableCell>
                <TableCell align="right">Market Cap (USD)</TableCell>
                <TableCell align="right">Market Cap % Change</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {prices.map((row) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.current_price}</TableCell>
                    <TableCell align="right">{row.price_change_percentage_24h}</TableCell>
                    <TableCell align="right">{row.market_cap}</TableCell>
                    <TableCell align="right">{row.market_cap_change_percentage_24h}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default CryptoTable
