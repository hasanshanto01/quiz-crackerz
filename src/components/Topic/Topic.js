import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    // console.log(topic);
    const { id, logo, name, total } = topic;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={logo} alt="" className='bg-cyan-200' /></figure>
                <div className="flex justify-between p-5">
                    <div className='flex flex-col items-start'>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className='text-lg'>Total Questions: <span>{total}</span></p>
                    </div>
                    <div className="">
                        <button className="btn btn-accent text-white">
                            <Link to={`/quiz/${id}`}>
                                <span className='mr-2'>Start Practice</span>
                                <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;