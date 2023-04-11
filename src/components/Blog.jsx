import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowBlog from './ShowBlog';

const Blog = () => {
    const blogs = useLoaderData();
    // console.log(blogs);
    return (
        <div className='mx-24'>
            {
                blogs.map(blog => <ShowBlog blog={blog}
                key={blog.id}
                />)
            }
      </div>
    );
};

export default Blog;