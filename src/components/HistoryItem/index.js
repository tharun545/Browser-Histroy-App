// import React from 'react'

import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="list-item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" onClick={handleDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
