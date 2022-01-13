import React from 'react';

function DleteItem (props){
  return(
  
    <button onClick={props.deleteLastItem} disabled={props.noItemsFound}>
          Delete Last Item
        </button>
)}

export default DleteItem;