import { dAppName } from 'config';
import ProjectDetails from 'pages/ProjectDetails/ProjectDetails';
import Projects from 'pages/Projects/Projects';
import withPageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Transaction from './pages/Transaction';

export const routeNames = {
  home: '/',
  dashboard: '/dashboard',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  landingpage: '/landingpage',
  projects: '/projects',
  projectdetail: '/projectdetail'
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: LandingPage
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  },
  {
    path: routeNames.landingpage,
    title: 'Landing Page',
    component: LandingPage
  },
  {
    path: routeNames.projects,
    title: 'Projects',
    component: Projects
  },
  {
    path: routeNames.projectdetail,
    title: 'Project Detail',
    component: ProjectDetails
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
