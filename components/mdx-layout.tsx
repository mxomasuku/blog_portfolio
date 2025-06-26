import React from 'react'
import Thumbnail from './Thumbnail'
import SyntaxHightlighter from './SyntaxHightlighter'

export default function  MdxLayout  ({children}: {children: React.ReactNode})  {
  const isProduction = process.env.NODE_ENV === "production";
  return (
  <div>

<div className='px-5 md:px-0 max-w-4xl mx-auto prose dark:prose-invert'>
  <Thumbnail/>

  {isProduction ?   <SyntaxHightlighter>
{children}
  </SyntaxHightlighter> : 
  <div>
    {children}
    </div> }


</div>

  </div>
  )
}

