// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  market: path(ROOTS_DASHBOARD, '/market'),
  two: path(ROOTS_DASHBOARD, '/governance'),
  three: path(ROOTS_DASHBOARD, '/createFund'),
};
