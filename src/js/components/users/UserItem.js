import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@commonReact/Card';
import Content from '@commonReact/Card/Content';
import Footer from '@commonReact/Card/Footer';
import Figure from '@commonReact/Card/Figure';

function UserItem({ user }) {

   return (
      <Card
         user={user}
         direction='horizontal'
         imgStyle='rounded-img'
         align='text-center'
      >
         <Figure>
            <img src={user.avatar_url} alt={user.login} />
         </Figure>

         <div className="card-container">
            <Content>
               <h3>{user.login}</h3>
            </Content>
            <Footer>

               <Link to={`/user/${user.login}`}>
                  More
               </Link>
            </Footer>
         </div>
      </Card>
   );
}

export default UserItem;
