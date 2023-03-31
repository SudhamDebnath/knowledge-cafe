import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));        
    }, []);

    return (
        <div className="container">
            {
                blogs.map((blog) => <SingleBlog blog={blog}></SingleBlog>)
           }
        </div>
    );
};

export default Blog;