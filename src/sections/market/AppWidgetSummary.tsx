// @mui
import { alpha } from '@mui/material/styles';
import { Box, Card, Typography, Stack, CardProps } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../utils/formatNumber';
import Iconify from "../../components/iconify";
// components

// ----------------------------------------------------------------------

interface Props extends CardProps {
    title: string;
    total: number;
    percent: number;
}

export default function AppWidgetSummary({ title, percent, total, sx, ...other }: Props) {

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2">{title}</Typography>

                <TrendingInfo percent={percent} />

                <Typography variant="h3">{fNumber(total)}</Typography>
            </Box>
        </Card>
    );
}


type TrendingInfoProps = {
    percent: number;
};

function TrendingInfo({ percent }: TrendingInfoProps) {
    return (
        <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
            <Iconify
                icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'}
                sx={{
                    mr: 1,
                    p: 0.5,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    color: 'success.main',
                    bgcolor: (theme) => alpha(theme.palette.success.main, 0.16),
                    ...(percent < 0 && {
                        color: 'error.main',
                        bgcolor: (theme) => alpha(theme.palette.error.main, 0.16),
                    }),
                }}
            />

            <Typography component="div" variant="subtitle2">
                {percent > 0 && '+'}

                {fPercent(percent)}
            </Typography>
        </Stack>
    );
}
