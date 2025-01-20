import React from 'react'

interface PageHeaderProps {
    pageTitle: string
}

const PageHeader: React.FC<PageHeaderProps>  = ({pageTitle}) => {
  return (
  
    <h1 className="font-cormorantGaramond font-light text-6xl  text-center">
{pageTitle}
    </h1>
  )
}

export default PageHeader