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
import Markdown from "../components/markdown";
import ChartPie from "../sections/proposal/ChartPie";

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

export default function Proposal() {
    return (
        <>
            <Helmet>
                <title>Proposal</title>
            </Helmet>

            <Container>
                <Grid container spacing={2}>

                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="DeFiZ Governance" />
                            <CardContent>
                                <Stack direction="column">
                                    <Typography>Initiated by: 0x5Fb0....A0Bd</Typography>
                                    <Typography>Managing DAO: DeFiZ DAO</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardContent>
                                <ChartPie />
                                <Stack spacing={2} direction="row">
                                    <Button>Yes</Button>
                                    <Button color="error">No</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={12} item>
                        <Card>
                            <CardContent>
                                <Markdown children="<h3>Proposal Header</h3>  Very very very  very very very very very very very very very very very very many text" />
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}
