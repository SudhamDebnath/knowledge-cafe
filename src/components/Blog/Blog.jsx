import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = ({handleReadTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));        
    }, []);

    return (
        <div className="container row">
            {
                blogs.map((blog) => <SingleBlog handleReadTime={handleReadTime} blog={blog}></SingleBlog>)
           }
        </div>
    );
};

export default Blog;