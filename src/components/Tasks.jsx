import React from 'react'

export default function Tasks({title, position, handleDelete}) {
  return (
    <div className='flex p-3'>
        <li>{title}</li>
        <button key={position} className='text-stone-900 hover:text-red-900 ms-auto' onClick={() => handleDelete(position)}>Clear</button>
    </div>
  )
}
