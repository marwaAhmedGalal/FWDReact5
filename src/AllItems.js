import React from 'react';

function AllItem (props){
return(
 		<ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
)
}

export default AllItem; 