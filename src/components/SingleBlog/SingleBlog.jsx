import React from 'react';

const SingleBlog = ({ blog, handleReadTime }) => {
    
    // const {id, author_img, author_name, blog_title, cover_img, hash_tags,
    //     published_date, reading_time, handleReadTime} = props.blog;
    
    return (
        <div>
            <div className="blog-container w-100 m-auto col-md-6">
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={blog.cover_img} className='rounded' width="100%"  height="80%" alt="" />
                    </div>
                    <div className="author d-flex justify-content-between">
                        <div className="author-info d-flex">
                            <div className='author-img'>
                            <img className='rounded-circle' src={blog.author_img} alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h5>{blog.author_name}</h5>
                                <p>{blog.published_date}</p>
                            </div>
                        </div>
                        <div className="time-bookmark">
                        <p>{blog.reading_time} min read </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>{blog.blog_title}</h1>
                    <p>{blog.hash_tags}</p>
                    <button onClick={()=>handleReadTime(blog.reading_time)} className='btn btn-info'>Mark as read</button>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default SingleBlog;