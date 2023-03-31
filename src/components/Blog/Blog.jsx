import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = ({handleReadTime, handleBookmark}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));        
    }, []);

    return (
        <div className="container row">
            {
                blogs.map((blog) => <SingleBlog key={blog.id} handleReadTime={handleReadTime} handleBookmark={handleBookmark} blog={blog}></SingleBlog>)
           }
        </div>
    );
};

export default Blog;