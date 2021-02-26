import React from 'react';

function Figure({ children, figcaption }) {
   return (
      <figure>
         { children}

         <figcaption>
            {figcaption}
         </figcaption>
      </figure>
   );
}

export default Figure;
