// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  {
    subheader: 'Main menu',
    items: [
      { title: 'Market', path: PATH_DASHBOARD.market, icon: ICONS.dashboard },
      { title: 'Governance', path: PATH_DASHBOARD.two, icon: ICONS.ecommerce },
      { title: 'Create Fund', path: PATH_DASHBOARD.three, icon: ICONS.analytics },
    ],
  },
];

export default navConfig;
