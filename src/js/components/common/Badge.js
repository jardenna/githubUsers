import React from 'react';

function Badge(props) {
   return (
      <span
         className={`badge ${props.className ? props.className : ''}`}
      >
         {props.content}
      </span>
   );
}

export default Badge;
