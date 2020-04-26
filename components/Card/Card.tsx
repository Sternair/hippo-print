import React from 'react'
import './Card.scss'

export const Card: React.FC = ({ children }) => {
  return (
    <div className="card__card-wrapper">
      {children}
    </div>
  )
}
