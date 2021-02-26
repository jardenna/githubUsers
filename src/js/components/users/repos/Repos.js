import React from 'react';

import RepoItem from './Repoitem';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';

function Repos({ repos, loading, error }) {

   return (
      <div className="repos-container">
         {repos && repos.map(repo => (
            <div className="repo-items" key={repo.id}>
               <RepoItem repo={repo} />
            </div>
         )
         )}

         {loading && <Loader />}
         {error && <Error />}

      </div>
   );
}

export default Repos;
