import React from 'react'

export const Stars: React.FC<{ selected: number }> = ({ selected }) => {
  const selectedStarsAmount = Math.min(Math.max(selected, 0), 5)
  const unselectedStarsAmount = 5 - selectedStarsAmount

  const unselectedStars = Array(unselectedStarsAmount).fill(true)
  const selectedStars = Array(selectedStarsAmount).fill(true)

  return (
    <div style={{display: 'inline'}}>
      {selectedStars.map((_, i) => (<i key={'s_' + i} className="fas fa-star fa-sm" style={{ color: '#FFC107' }}></i>))}
      {unselectedStars.map((_, i) => <i key={'us_' + i} className="far fa-star fa-sm"></i>)}
    </div>
  )
}
