import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark } from '@fortawesome/free-solid-svg-icons'
import SideCart from './../SideCart/SideCart';

const SingleBlog = ({ blog, handleReadTime, handleBookmark }) => {
    
    
    // const {id, author_img, author_name, blog_title, cover_img, hash_tags,
    //     published_date, reading_time, handleReadTime} = props.blog;
    
    // const handleBookmark = () => {
    //     toast("Bookmark Added Successfully!");
    //     console.log(blog);
    //   };
    

    return (
        <div>
            <div className="blog-container w-100 m-auto">
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={blog.cover_img} className='rounded mb-3' width="100%"  height="80%" alt="" />
                    </div>
                    <div className="author d-flex justify-content-between">
                        <div className="author-info d-flex">
                            <div className='author-img'>
                            <img className='rounded-circle me-3' src={blog.author_img} alt="" width="50" height="50" />
                            </div>
                            <div>
                                <h5>{blog.author_name}</h5>
                                <p>{blog.published_date}</p>
                            </div>
                        </div>
                        <div className="time-bookmark d-flex gap-3">
                           
                            <p className='gap-5'>
                                {blog.reading_time} min read 
                            </p>

                            <a className='f-black' href="#">
                                <FontAwesomeIcon icon={faBookmark}
                                    onClick={()=>handleBookmark(blog.blog_no, blog.blog_title)} />
                            </a>

                            
                        </div>
                    </div>
                </div>
                <div>
                    <h1>{blog.blog_title}</h1>
                    <p>{blog.hash_tags}</p>
                    <a href="#" onClick={()=>handleReadTime(blog.reading_time)}>
                    Mark as read
                    </a>
    
                </div>
                <hr />
            </div>
        </div>
    );
};

export default SingleBlog;