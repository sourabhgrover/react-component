import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard >
            <CommentDetail author="Sam" date="Today at 6PM" commentText="Nice 1" imgSrc={faker.image.avatar()} /> 
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author="James" date="Yesterday at 6PM" commentText="Nice 2" imgSrc={faker.image.avatar()}/> 
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail author="Tom" date="Yesterday at 5PM" commentText="Nice 3" imgSrc={faker.image.avatar()} /> 
        </ApprovalCard>
        
        </div>

    );
};

ReactDOM.render(<App />,document.querySelector('#root'));