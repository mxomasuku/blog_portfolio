import React from 'react'
import PageHeader from './PageHeader'

export default function  MdxLayout  ({children}: {children: React.ReactNode})  {
  return (
  <div>
    <PageHeader pageTitle='Try'/>

<div className='px-5 md:px-0 max-w-4xl mx-auto prose'>
{children}
</div>

  </div>
  )
}

