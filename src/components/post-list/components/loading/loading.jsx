import React from 'react';
import ReactLoading from 'react-loading';
import './loading.scss';

export const Loading = () => (
  <div className='loading-component'>
    <ReactLoading type='spokes' color="#21AFEC"/>
  </div>
);
