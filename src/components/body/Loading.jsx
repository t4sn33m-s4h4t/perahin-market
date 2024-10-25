import React from 'react';
import { Spinner } from 'reactstrap'; 

const Loading = () => {
  return (
    <div className="text-center my-5 py-5">   
      <div className="my-5 pb-5">
      <Spinner
        color="primary"   
        style={{ width: '3rem', height: '3rem' }} 
      />
      <br />
      <br />
      <b>Loading...</b>  
      </div>
    </div>
  );
};

export default Loading;
