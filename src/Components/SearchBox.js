import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className='p-4 md:p-3'>
            <input 
            className='p-2 rounded-md w-full bg-indigo-400 leading-5 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-white focus:text-white placeholder-opacity-75'
            type='search'
            placeholder='Search Hero Name Here!'
            onChange={searchChange} />
        </div>
    )
}

export default SearchBox;