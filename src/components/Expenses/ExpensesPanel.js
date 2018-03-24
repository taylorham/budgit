import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Panel, Button, ListGroup } from 'react-bootstrap'
import Expense from './Expense'
import { toggleEdit, addExpense, editExpense } from 'actions'
import './expenses.css'

const ExpensesPanel = ({ expenses, addExpense, editingIndex, toggleEdit, editExpense }) => {
  const header = <h3>Expenses</h3>
  const footer = (
    <Button bsStyle="primary" onClick={addExpense}>
      Add
    </Button>
  )
  return (
    <Panel header={header} footer={footer} className="expenses">
      <ListGroup fill>
        {expenses.map((expense, i) => (
          <Expense
            {...expense}
            key={i}
            isEditing={editingIndex === i}
            editExpense={e => editExpense(e, i)}
            onClick={() => toggleEdit(editingIndex, i)}
          />
        ))}
      </ListGroup>
    </Panel>
  )
}

ExpensesPanel.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      amount: PropTypes.number,
      tag: PropTypes.string,
    })
  ).isRequired,
  addExpense: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    expenses: state.expenses.map(expense => ({
      label: expense.label,
      amount: expense.amount,
      tag: expense.tag,
    })),
    editingIndex: state.editingIndex,
  }),
  { toggleEdit, addExpense, editExpense }
)(ExpensesPanel)
