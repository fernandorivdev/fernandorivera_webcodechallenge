import React from 'react';
import { connect } from 'react-redux';
import { selectSearchText } from "./selectors";
import { SearchInput } from './components/searchInput';
import { onTextChange, onSearchCommand } from './actions';
import './top-bar.scss';

const TopBar = ( { value, onTextChange, onSearchCommand }) => {
  const onChange = text => onTextChange(text);

  return <div className = "container blue-background">
    <div className = "content-container top-bar">
      <span className = "top-bar-text"> Reddit </span>
      <SearchInput className="top-bar-search-input" onChange={onChange} value={value} onEnterPressed={onSearchCommand}/>
    </div>
  </div>
};

const mapStateToProps = state => ({
  value: selectSearchText(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTextChange: (value) => dispatch(onTextChange(value)),
  onSearchCommand: (value) => dispatch(onSearchCommand(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
