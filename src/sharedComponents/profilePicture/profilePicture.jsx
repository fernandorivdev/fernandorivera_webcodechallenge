import React from 'react';
import './profilePicture.scss';

const fallbackImage = '/warningSign.png';
const invalidPhotos = ['', 'default', 'self', null, undefined];

export const ProfilePicture = ({ post }) =>{
  const photoUrl = post.thumbnail;
  const imageSrc = invalidPhotos.includes(photoUrl) ? fallbackImage : photoUrl;
  
  return  (
    <img alt="Profile" src={imageSrc} className={'profile-picture'} />
  )
}