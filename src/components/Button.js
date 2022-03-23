import React from 'react';

function Button({children, color}) {
    return(
      <button className="btnCard">{children}</button>
    );
  }

 export default Button;