import React from 'react';
import './AddFavourites.css';

export const AddFavourites = () => {
  return (
    <div>
        <span className='hy'>Add to Favourites</span>
        {/*copied from bootstrap icons this code for heart icon. upto svg tag*/}
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
    </div>
  )
}
export default AddFavourites;
