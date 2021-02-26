import React from 'react';

function RepoItem({ repo }) {

   return (

      <h3>
         <a href={repo.html_url}>{repo.name}</a>
      </h3>

   );
}

export default RepoItem;
