import React from 'react'

type Props = {
    children: JSX.Element;
};

export default function index({children}:Props) {
  return (
    <div className='container'>
        {children}
    </div>
  )
}
