import React from 'react';
import PropTypes from 'prop-types';

function MenuBurger({ onClick, ariaExpanded }) {
   return (
      <button
         className="menu-btn-wrapper"
         onClick={onClick}
         aria-expanded={ariaExpanded}
         aria-label='Toggle Navigation'
      >
         <span className="menu-btn" >
            <span className="menu-btn-burger" />
         </span>
      </button>
   );
}

export default MenuBurger;

MenuBurger.propTypes = {
   onClick: PropTypes.func.isRequired
};