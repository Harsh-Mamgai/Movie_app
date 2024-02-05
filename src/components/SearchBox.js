import React from 'react';
export default function SearchBox(props) {
    return(
        <div className='col col-sm-4'>
            {/*Bootstrap form-control class*/}
            <input 
                className='form-control' 
                value={props.searchValue} 
                onChange={(event)=> props.setSearchValue(event.target.value)} 
                valueplaceholder="Type to search..." />
        </div>
    )
}