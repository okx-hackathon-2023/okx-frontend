import { Helmet } from 'react-helmet-async';
// @mui
import {Box, Button, Card, CardContent, CardHeader, Container, Grid, Stack, Typography} from '@mui/material';
// components
import {useNavigate} from "react-router-dom";
import { useSettingsContext } from '../components/settings';
import AppWidgetSummary from "../sections/market/AppWidgetSummary";

// ----------------------------------------------------------------------

export default function Governance() {
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

                    <Grid xs={12} item>
                        <Card>
                            <CardHeader title="Proposals" />

                            <Box
                                p={4}
                                component="div"
                            >
                                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                    <Typography variant="h5" width={200}>Awesome Pixie Fund</Typography>
                                    <Typography width={100}>TVL: $121,3M</Typography>
                                    <Typography width={150}>Your share: $3,131</Typography>
                                </Stack>
                                <Stack mt={1} direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                    <Typography width={200}>Risk profile: High</Typography>
                                    <Typography width={100}>APY: 23%</Typography>
                                    <Typography width={200}>Managing DAO: Pixies</Typography>
                                    <Button variant="outlined" onClick={() => {
                                        nav('/dashboard/proposal/1')
                                    }}>View</Button>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
