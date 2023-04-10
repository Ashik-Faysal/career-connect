import React from 'react';

const ShowBlog = ({ blog }) => {
    const { id, question, answer } = blog;
    return (
      <div className="bg-gray-400  p-4 my-6 shadow-2xl rounded-3xl">
        <h4 className="text-2xl font-semibold mb-2">
          {id}.{question}
        </h4>
        <p>Answer: {answer}</p>
      </div>
    );
};

export default ShowBlog;