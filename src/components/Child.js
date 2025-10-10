import React from 'react'

const Child = ({cartItems,handleRemove}) => {
  return (
    <div className='child'>
        <h1>Child Component</h1>
        <ul>
            {
                cartItems.length > 0 ?
                (
                cartItems.map((item,index) => {
                    return (
                        <li key={index}>
                            {`${item.text} - $${item.numInput}`}
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </li>
                    )
                })
            ) : []
            }
        </ul>
    </div>
  )
}

export default Child