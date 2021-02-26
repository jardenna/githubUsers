import React from 'react';

function Card({ align, direction, imgStyle, children }) {

   return (
      <section className={`card ${direction ? direction : ''} ${align ? align : ''} ${imgStyle ? imgStyle : ''} flex-container`}>

         {children}
      </section>
   );
}

export default Card;
