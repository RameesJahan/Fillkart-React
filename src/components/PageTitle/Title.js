import React from 'react'
import './Title.css'

const Title = ({ name }) => {
  return (
      <div className="page-title" >
        <h2>{name}</h2>
      </div>
  )
}

export default Title