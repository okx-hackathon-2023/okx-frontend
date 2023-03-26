import { Helmet } from 'react-helmet-async';
// @mui
import {Box, Button, Card, CardContent, CardHeader, Container, Grid, Stack, Typography} from '@mui/material';
// components
import {useNavigate} from "react-router-dom";
import { useSettingsContext } from '../components/settings';
import AppWidgetSummary from "../sections/market/AppWidgetSummary";

// ----------------------------------------------------------------------

export default function PageOne() {
    const nav = useNavigate();
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Market</title>
            </Helmet>

            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="Market Stats" />
                            <CardContent>
                                <Stack direction="column">
                                    <Typography>TVL: $534,2M</Typography>
                                    <Typography>Top 1: AwesomePixieFund</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Card>
                            <CardHeader title="Portfolio" />
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Typography>Value: $19,415</Typography>
                                    <Typography>All time Earned: $1,415</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Typography>24H Change:  Up 4%</Typography>
                                    <Typography>Unallocated: $10,915</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid xs={12} item>
                        <Card>
                            <CardHeader title="Funds" />

                            <Box
                                p={4}
                                component="div"
                                onClick={() => {
                                    nav('/dashboard/fund/1')
                                }}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer',
                                        opacity: 0.5
                                    }
                                }}
                            >
                                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                    <Typography variant="h5" width={200}>Awesome Pixie Fund</Typography>
                                    <Typography width={100}>TVL: $121,3M</Typography>
                                    <Typography width={150}>Your share: $3,131</Typography>
                                    <Button variant="contained" onClick={(e) => e.stopPropagation()}>Deposit</Button>
                                </Stack>
                                <Stack mt={1} direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                    <Typography width={200}>Risk profile: High</Typography>
                                    <Typography width={100}>APY: 23%</Typography>
                                    <Typography width={150}>24H change: Up 3%</Typography>
                                    <Button variant="outlined" onClick={(e) => e.stopPropagation()}>Withdraw</Button>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
