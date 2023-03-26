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
                                <Markdown children="
                                <h3>Proposal Header</h3>
                                As a crypto enthusiast, I propose to exclude SaveFi from the pool of allowed applications for investment due to its suspected malicious behavior. SaveFi has been under scrutiny for its unethical practices and has been accused of exploiting its users. <br /><br />

SaveFi claims to offer a decentralized finance platform that allows users to earn interest on their crypto investments. However, recent investigations have revealed that the platform is not as decentralized as it claims to be. The platform's team has complete control over user funds and can manipulate the interest rates to their advantage.<br /><br />

Furthermore, several reports have surfaced, highlighting SaveFi's involvement in illegal activities such as money laundering and insider trading. The platform has also been accused of using user funds to finance its own operations.<br /><br />

Given the above facts, it is imperative that we exclude SaveFi from the list of allowed applications for investment. Allowing such a platform to operate within the crypto space would be detrimental to the entire community.<br /><br />

Therefore, I urge all stakeholders to support this proposal and take necessary actions to prevent SaveFi from continuing its malicious activities.
                                " />
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}
