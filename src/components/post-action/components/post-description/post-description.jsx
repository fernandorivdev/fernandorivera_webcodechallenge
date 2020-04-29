import React, {useEffect} from 'react';
import { useDrag } from "react-dnd";
import classnames from "classnames";
import { getEmptyImage } from 'react-dnd-html5-backend'
import { ProfilePicture } from "../../../../sharedComponents/profilePicture/profilePicture";
import { Author } from "../../../../sharedComponents/author/author";
import { UpVotes } from "../../../../sharedComponents/up-votes/up-votes";
import { Comments } from "../../../../sharedComponents/comments/comments";
import { Title } from "../../../../sharedComponents/title/title";
import './post-description.scss'

export const PostDescription = ({ post, classNames }) => {
  const [{isDragging}, drag, preview] = useDrag({
    item: { type: 'post', post},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  });

  const opacity = isDragging ? 0 : 1;

  return <div ref={drag} className={classnames("post-card-container", classNames)} style={{ opacity }}>
      <ProfilePicture post = {post}/>
      <div className="post-card-text-container">
        <Author post = {post}/>
        <Title post = {post}/>
      </div>
      <div className='post-description-bottom-bar'>
        <Comments post = {post} showText = {false}/>
        <UpVotes post = {post} showText = {false}/>
      </div>
    </div>
}