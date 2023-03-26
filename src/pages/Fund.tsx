import { Helmet } from 'react-helmet-async';
// @mui
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    Stack,
    Typography
} from '@mui/material';
// components
import {useNavigate} from "react-router-dom";
import ChartLine from "../sections/fund/ChartLine";
import Markdown from "../components/markdown";

// ----------------------------------------------------------------------

export default function Fund() {
    const nav = useNavigate();

    return (
        <>
            <Helmet>
                <title>Fund</title>
            </Helmet>

            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="Awesome Pixie Fund" />
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>TVL: $121,3M</Typography>
                                    <Typography>Managing DAO: Pixies</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>APY: 23%</Typography>
                                    <Typography>24H change: Up 3%</Typography>
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined">Deposit</Button>
                                <Button variant="outlined">Withdraw</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="Rebalance information" />
                            <CardContent>
                                <Typography>Last rebalance: 2 Months ago</Typography>
                                <Typography>Next rebalance: 1 Month</Typography>
                                <Typography>Next voting starts: 2 Weeks</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined">View proposal</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="6.231 (+0.4%)" />
                            <CardContent>
                                <ChartLine />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="Description" />
                            <CardContent>
                                <Markdown children="
                                    <h3>General</h3>
                                     <span>
                                      Our crypto fund is designed to heavily invest in staking various assets on the OkChain. Staking is a process where investors hold their assets in a particular cryptocurrency wallet, and the assets are used to validate transactions on the blockchain network. In return, the investors receive rewards in the form of interest or tokens. The OkChain is a fast, reliable, and secure blockchain network that allows investors to stake their assets and earn rewards.
                                    </span>
                                    <h3>Risks</h3>
                                    Investing in a crypto fund that heavily invests in staking various assets on the OkChain carries some risks. The value of cryptocurrencies can be volatile and subject to market fluctuations, which can cause significant losses to investors. Staking can also be risky, as the validator nodes may face technical issues, network failures, or security threats that can impact the rewards earned by investors. Moreover, regulatory changes or legal issues may impact the usability and adoption of cryptocurrencies.

                                " />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="My share" />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
