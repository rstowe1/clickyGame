import React from 'react';
import "./memory.css";

const memory = props => (
  <div className="allCards col-xs-6"
       key=
         {
           props.id
         }
       onClick=
         {
           () => props.handler(props.id, props.clicked)
         }
  >
    <img id=
           {
             props.name
           }
         src=
           {
             props.image
           }
         alt=
           {
             props.name
           }
    />
  </div>
);

export default memory;