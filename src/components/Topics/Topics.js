import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loadTopics = useLoaderData();
    const { data } = loadTopics;
    // console.log(data);
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-2 justify-between gap-14 w-3/4 mx-auto my-14'>
                {
                    data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;