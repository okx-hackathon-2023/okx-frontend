import { Helmet } from 'react-helmet-async';
// @mui
import {Box, Button, Card, Container, Grid, Stack, Typography} from '@mui/material';
// components
import { useSettingsContext } from '../components/settings';
import AppWidgetSummary from "../sections/market/AppWidgetSummary";

// ----------------------------------------------------------------------

export default function PageOne() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Market</title>
            </Helmet>

            <Container>
                <Grid container gap={2}>
                    <Grid xs={12} md={4}>
                        <Card>
                            <Stack direction="column" spacing={2} p={4}>
                                <Typography variant="h3">Market Stats</Typography>
                                <Typography>Earned: $35,2M    TVL: $534,2M</Typography>
                                <Typography>Top 1: AwesomePixieFund</Typography>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Card>
                            <Stack direction="column" spacing={2} p={4}>
                                <Typography variant="h3">Portfolio</Typography>
                                <Typography>Value: $19,415    All time Earned: $1,415</Typography>
                                <Typography>24H Change:  Up 4%   Unallocated: $10,915</Typography>
                            </Stack>
                        </Card>
                    </Grid>


                    <Grid xs={12}>
                        <Card>
                            <Typography variant="h3" pt={4} pl={4}>Funds</Typography>

                            <Box
                                p={4}
                                sx={{
                                    ':hover': {
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
