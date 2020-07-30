import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
   return (
       <div className = "ui container comments">
        <ApprovalCard>
          <CommentDetail author="Shweta" timeAgo ="Today at 4:45 PM" content="Badhiya hai" avatar ={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Smita" timeAgo ="Today at 7:20 PM" content="Acha blog hai" avatar ={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Shiny" timeAgo ="Today at 9:15 PM" content="Khoob bhalo" avatar ={faker.image.avatar()}/>
        </ApprovalCard>
       </div>
   );
};

ReactDOM.render( 
  <App />,
  document.querySelector('#root')
);