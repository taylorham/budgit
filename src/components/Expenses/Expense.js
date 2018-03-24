import React from 'react'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'
import { ListGroupItem } from 'react-bootstrap'

const Expense = ({ isEditing, label, amount, tag, onClick, editExpense }) => {
  const onClickFix = e => e.stopPropagation()
  const onKeyPress = e => e.key === 'Enter' && onClick()

  return (
    <ListGroupItem
      className={`expense ${tag}${isEditing ? ' editing' : ''}`}
      onKeyPress={onKeyPress}
      onClick={onClick}
    >
      <div>
        <span className="name">
          {isEditing ? (
            <input
              type="text"
              name="label"
              className="form-control"
              value={label}
              onClick={onClickFix}
              onChange={editExpense}
            />
          ) : (
            startCase(label)
          )}
        </span>
        <span className="amount">
          {isEditing ? (
            <input
              type="text"
              name="amount"
              className="form-control"
              value={amount}
              onClick={onClickFix}
              onChange={editExpense}
            />
          ) : (
            amount
          )}
        </span>
        <span className="edit">Click to Edit</span>
      </div>
    </ListGroupItem>
  )
}

Expense.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  editExpense: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Expense
