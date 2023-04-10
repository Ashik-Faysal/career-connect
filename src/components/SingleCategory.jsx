import React from 'react';

const SingleCategory = ({ card }) => {
  const  { id,logo,jobTitle,availablePost} =card;
    return (
        <div className='p-4 border bg-gray-200 m-4'>
            <img src={logo} alt="" />
            <h3 className='text-3xl font-bold py-4'>{jobTitle}</h3>
            <p>{availablePost}</p>
        </div>
    );
};

export default SingleCategory;