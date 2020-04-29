import React, {useState} from "react";
import classnames from 'classnames';
import { connect } from 'react-redux';
import { ProfilePicture } from "../../../../sharedComponents/profilePicture/profilePicture";
import { openPostAction } from "../../../post-action/actions";
import { Author } from "../../../../sharedComponents/author/author";
import { Title } from "../../../../sharedComponents/title/title";
import { Comments } from "../../../../sharedComponents/comments/comments";
import { UpVotes } from "../../../../sharedComponents/up-votes/up-votes";
import { DownVotes } from "../down-votes/down-votes";
import './post.scss'


const PostComponent = ({ post, onOpenPostActions }) => {
  const [mouseEntered, changeMouseEntered] = useState(false);

    return <div
      className={classnames('post-container', { 'post-mouse-in': mouseEntered})}
      onMouseEnter={() => changeMouseEntered(true)}
      onMouseLeave={() => changeMouseEntered(false)}
      onClick={() => onOpenPostActions(post)}
    >
      <ProfilePicture post={post}/>
      <div className='post-text-container'>
        <Author post={post}/>
        <Title post={post}/>
        <div className='post-bottom-bar'>
          <Comments post={post}/>
          <UpVotes post={post}/>
          <DownVotes post={post}/>
        </div>
      </div>

    </div>
};

const mapDispatchToProps = (dispatch)=> ({
  onOpenPostActions: (post) => dispatch(openPostAction(post)),
});

export const Post= connect(null, mapDispatchToProps)(PostComponent);