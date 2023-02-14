import React, { useState } from 'react'
import useForm from '../hooks/useForm';

function Layout({children}) {

    const [list,text,handleChange,handleSubmit] = useForm();
  return (
    <div>
        <nav>
           <h5> Weather App </h5>
           <form onSubmit={handleSubmit}>
            <input type='text' value={text} placeholder='search weather' onChange={handleChange} />
            <input type="submit" />
           </form>
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout;