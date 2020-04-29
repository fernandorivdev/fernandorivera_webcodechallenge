import React, { useState } from 'react';
import './searchInput.scss';
import classnames from 'classnames';

export const SearchInput = ({ value, onChange, onEnterPressed })=> {
  const [focus, setFocus] = useState(false);
  const onInputChange = (e) => onChange(e.target.value);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onEnterPressed(value);
    }
    
  };
  return <input
    className={classnames('search-input', {'search-input-writing': focus})}
    type='text'
    onChange={onInputChange}
    value={value}
    onKeyUp={onKeyUp}
    onFocus={() => setFocus(true)}
    onBlur={() => setFocus(false)}
  />
};
