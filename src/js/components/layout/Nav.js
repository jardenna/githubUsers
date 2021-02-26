import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { routes } from '@common/constants/nav';
import MenuBurger from '@components/layout/MenuBurger';
import useToggle from '@hooks/useToggle';
import useScroll from '@hooks/useScroll';



function Nav() {
   const ref = React.useRef(null);

   const [toggle, selected] = useToggle([]);
   const [isSticky] = useScroll(ref);

   const history = useHistory();
   const pathname = history.location.pathname;

   const onToggleNav = (value) => {
      toggle(value);
   };



   const toggledNav = selected.includes('mobile');
   return (
      <div className={`${!toggledNav ? '' : 'open-nav'} ${isSticky ? 'sticky' : ''} main-nav`} ref={ref}>

         <MenuBurger
            onClick={() => onToggleNav('mobile')}
            ariaExpanded={toggledNav}
         />

         <nav>
            <ul>
               {routes.map(route => (
                  route.link ? <li
                     className={`${pathname === route.path ? 'active' : ''} main-nav-items`}
                     key={route.path}
                     id={route.path}
                     onClick={() => onToggleNav('mobile', route.path)}
                  >
                     <Link to={route.path}>{route.link}</Link>
                  </li> : null
               ))}
            </ul>


         </nav>

      </div>

   );
}

export default Nav;