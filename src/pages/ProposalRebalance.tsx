import { Helmet } from 'react-helmet-async';
// @mui
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid, Paper,
    Stack, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from '@mui/material';
// components
import {useNavigate} from "react-router-dom";
import { useSettingsContext } from '../components/settings';
import AppWidgetSummary from "../sections/market/AppWidgetSummary";

// ----------------------------------------------------------------------

const rowsAssetsIn = [
    {
        asset: "BTC",
        amount: "50,012",
        value: "$300,012",
        state: "Staked on Acala",
    },
    {
        asset: "BTC",
        amount: "50,012",
        value: "$300,012",
        state: "Staked on Acala",
    },
    {
        asset: "BTC",
        amount: "50,012",
        value: "$300,012",
        state: "Staked on Acala",
    },
]

const rowsAssetsOut = [
    {
        asset: "BTC",
        amount: "50,012",
        value: "$300,012",
        state: "Staked on Acala",
    },
    {
        asset: "BTC",
        amount: "50,012",
        value: "$300,012",
        state: "Staked on Acala",
    },
    {
        asset: "BTC",
        amount: "50,012",
        value: "$300,012",
        state: "Staked on Acala",
    },
]

export default function ProposalRebalance() {
    const nav = useNavigate();
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Governance</title>
            </Helmet>

            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="Governance stats" />
                            <CardContent>
                                <Stack direction="column">
                                    <Typography>Ongoing proposals: 3</Typography>
                                    <Typography>Ongoing voting: 1</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={17} md={8} item>
                        <Card>
                            <CardHeader title="Fund's Portfolio" />
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Asset</TableCell>
                                                <TableCell align="left">Amount</TableCell>
                                                <TableCell align="left">Value</TableCell>
                                                <TableCell align="left">State</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rowsAssetsIn.map((row, i) => (
                                                <TableRow
                                                    key={i}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="left">{row.asset}</TableCell>
                                                    <TableCell align="left">
                                                        {row.amount}
                                                    </TableCell>
                                                    <TableCell align="left">{row.value}</TableCell>
                                                    <TableCell align="left">{row.state}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={17} md={1} item>
                        <Card>
                            <CardContent>
                                {'<->'}
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid xs={17} md={8} item>
                        <Card>
                            <CardHeader title="Fund's Portfolio" />
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Asset</TableCell>
                                                <TableCell align="left">Amount</TableCell>
                                                <TableCell align="left">Value</TableCell>
                                                <TableCell align="left">State</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rowsAssetsIn.map((row, i) => (
                                                <TableRow
                                                    key={i}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="left">{row.asset}</TableCell>
                                                    <TableCell align="left">
                                                        {row.amount}
                                                    </TableCell>
                                                    <TableCell align="left">{row.value}</TableCell>
                                                    <TableCell align="left">{row.state}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}
