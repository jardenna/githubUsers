import React from 'react';

import UserItem from './UserItem';
import Search from './Search';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';

import GithubContext from '@context/github/githubContext';

function Users() {

   const githubContext = React.useContext(GithubContext);

   React.useEffect(() => {
      githubContext.getUsers();
   }, []);


   const searchObj = {
      login: ''
   };

   const { users, loading, error } = githubContext;

   return (
      <article>
         <Search
            searchObj={searchObj}
            inputName='login'
            placeholder='Search users'

         />
         {error && <Error />}
         {loading && <Loader />}
         <section className="grid">
            {users && users.map(user => (
               <UserItem
                  key={user.id}
                  user={user}
               />
            )
            )}


         </section>
      </article>

   );
}

export default Users;
