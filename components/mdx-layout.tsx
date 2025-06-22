import React from 'react'
import PageHeader from './PageHeader'

export default function  MdxLayout  ({children}: {children: React.ReactNode})  {
  return (
  <div>
    <PageHeader pageTitle='Try'/>

{children}
  </div>
  )
}

