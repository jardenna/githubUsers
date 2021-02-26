import React from 'react';

function Content({ children }) {
   return (
      <div className="card-content">
         { children}
      </div>
   );
}

export default Content;
