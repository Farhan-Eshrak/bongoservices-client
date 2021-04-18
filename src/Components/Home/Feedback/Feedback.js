import React, { useEffect, useState } from 'react';
import FeedbackClient from '../FeedbackClient/FeedbackClient';

const Feedback = () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-savannah-71667.herokuapp.com/getAllClientReview')
        .then(res => res.json())
        .then(data => setClient(data))
    }, [])
    
    return (
        <section className="container" style={{'margin-top': '50px'}}>
            <h3 className="text-center">What Our Clients say </h3>
            <br/> <hr/>
            <div className="row p-5 m-5">
                {
                    client.map(client => <FeedbackClient client={client}></FeedbackClient>)
                }
            </div>

        </section>
    );
};

export default Feedback;