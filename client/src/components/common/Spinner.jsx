import React from "react";
import spinner from '../../img/spinner.gif';

export default () => {
  return (
    <div>
      <img src={spinner} className="spinner" alt="Loading..."/>
    </div>
  );
}
