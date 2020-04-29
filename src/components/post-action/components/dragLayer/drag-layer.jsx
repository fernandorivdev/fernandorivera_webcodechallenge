import React from "react";
import { connect } from 'react-redux';
import { DragLayer } from "react-dnd";
import { PostDescription } from "../post-description/post-description";
import { postAnimatingToogle } from "../../actions";
import './drag-layer.scss';

class PostsDragLayerComponent extends React.Component {

  state = {
    animating: false,
    wasDragging: false,
    postAnimating: null,
    startTransitionTime: null,
    initialOffset: null,
    currentTransitionTime: null,
  };

  transitionTime = 500;
  transitionPhotos = 70;
  lastOffset = { x: 0, y: 0};

  getItemStyles (initialOffset, currentOffset) {
    
    const {
      animating,
      startTransitionTime,
      currentTransitionTime,
    } = this.state;
    const { lastOffset, transitionPhotos, transitionTime } = this;

    let { x, y } = initialOffset;
    if ( currentOffset ) {
      
      x = currentOffset.x;
      y = currentOffset.y;
    }

    if (animating) {
      
      const r = (currentTransitionTime -startTransitionTime)/ transitionTime;
      if( r >= 1){
        this.setState({ animating: false});
        this.props.toggleAnimation(false);
      }
      
      const photoR = transitionTime / transitionPhotos;
      x = lastOffset.x - r * ( lastOffset.x - initialOffset.x);
      y = lastOffset.y - r * ( lastOffset.y - initialOffset.y);

      setTimeout(() => {
        this.setState({
          currentTransitionTime: Date.now(),
        });
      }, photoR)
    }

    const transform = `translate(${x}px, ${y}px)`;
    return {
      opacity: 0.5,
      transform,
      WebkitTransform: transform,
    }
  }

  render() {
    const {
      item,
      initialOffset,
      currentOffset,
      isDragging,
      toggleAnimation,
    } = this.props;

    const {
      wasDragging,
      animating,
      postAnimating,
      initialOffset: initialOffsetFromState,
    } = this.state;

    if(isDragging && !wasDragging) {
      this.setState({
        wasDragging: true,
        postAnimating: item.post,
        initialOffset,
      });
    }

    if(isDragging && currentOffset) {
      this.lastOffset = currentOffset;
    }

    if(wasDragging && !isDragging){
      const time = Date.now();
      this.setState({
        animating: true,
        wasDragging: false,
        startTransitionTime: time,
        currentTransitionTime: Date.now(),
      });
      toggleAnimation(true);
    }

    if(!isDragging && !animating)
      return null;
    const post = item ? item.post : postAnimating;
    const offset = initialOffset || initialOffsetFromState;
    return (
      <div  className='drag-layer' >
        <div
          style={this.getItemStyles(offset, currentOffset)}
        >
          <PostDescription post={post}/>
        </div>
      </div>
    )

  }
}

const collect = monitor => ({
  item: monitor.getItem(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAnimation: (on) => dispatch(postAnimatingToogle(on)),
});

export const PostDragLayer = DragLayer(collect)(connect(null,mapDispatchToProps)(PostsDragLayerComponent));