'use client'
import React from 'react'

const LinkButton = ({href,children,className = "", target = "_blank"}) => {
  return (
    <a
     href={href}
     target={target}
     className={`inline-block px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition ${className}`}>
        {children}
     </a>
  )
}

export default LinkButton