import React from 'react';

import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import Card from '@commonReact/Card';
import Content from '@commonReact/Card/Content';
import Footer from '@commonReact/Card/Footer';
import Figure from '@commonReact/Card/Figure';
import Badge from '@commonReact/Badge';
import Repos from '@components/Users/repos/Repos';

import GithubContext from '../../context/github/githubContext';


function User(props) {

   const githubContext = React.useContext(GithubContext);

   const { user, loading, getUser, getRepos, repos, error } = githubContext;

   React.useEffect(() => {
      const id = props.match.params.login;
      getUser(id);
      getRepos(id);
   }, []);


   const figcaption = (
      <div>
         <h1>{user.name}</h1>
         {user.location !== '' || user.location &&
            <p>Location: {user.location} </p>
         }
      </div>
   );

   const { followers, following, public_repos, public_gists } = user;
   const reposArr = [
      {
         id: 1,
         className: 'bg-danger',
         text: 'Followers',
         content: followers ? followers : ''
      },
      {
         id: 2,
         className: 'bg-warning',
         text: 'Following',
         content: following ? following : ''
      },
      {
         id: 3,
         className: 'bg-info',
         text: 'Public Repos',
         content: public_repos ? public_repos : ''
      },
      {
         id: 4,
         text: 'Public Gists',
         content: public_gists ? public_gists : ''
      }
   ];


   return (
      <article className="user">

         <div className="grid container">
            {
               <section key={user.id} >
                  <Card
                     imgStyle='rounded-img'
                     align='text-center'
                  >
                     <Figure
                        figcaption={figcaption}
                     >
                        <img src={user.avatar_url} alt={user.login} />
                     </Figure>

                     <div className="card-container">
                        <Content>
                           <h3>Bio</h3>
                           <div>
                              {user.bio ? user.bio : 'No bio yet'}
                              <div><a href={user.html_url} className="btn">Visit Github Profile</a></div>

                              {user.login && <p>Username: {user.login}</p>}
                              {user.company && <p>Company: {user.company}</p>}
                              {user.blog && <p>Website: <a href={user.blog}>{user.blog}</a></p>}


                           </div>

                        </Content>

                     </div>
                     <Footer>
                        {reposArr.map(repo => (
                           <Badge
                              key={repo.id}
                              className={repo.className ? repo.className : ''}
                              content={`${repo.text}  ${repo.content}`}
                           />
                        ))}


                     </Footer>
                  </Card>
                  <Repos
                     repos={repos}
                     loading={loading}
                  />
               </section>
            }


         </div>
         {loading && <Loader />}
         {error && <Error />}

      </article>
   );
}

export default User;
