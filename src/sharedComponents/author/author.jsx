import React from 'react';
import './author.scss';

export const Author = ({ post }) => (<span className='author-name'>{post.author}</span>);