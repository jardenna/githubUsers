import About from '@pages/About';
import Home from '@pages/Home';
import User from '@components/users/User';

import { NAV } from '@common/constants/content';

const { home, about, details } = NAV;

export const routes = [
   {
      path: '/',
      main: Home,
      sideBar: () => home,
      link: home,
      exact: true
   },

   {
      path: '/user/:login',
      main: User,
      sideBar: () => details
   },
   {
      path: '/about',
      main: About,
      link: about,
      sideBar: () => about
   }


];