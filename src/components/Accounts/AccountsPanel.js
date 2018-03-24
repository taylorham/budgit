import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Panel, Col, Button } from 'react-bootstrap'
import { frequencies } from 'common/constants'
import './accounts.css'

const AccountsPanel = ({ banking, outgoing }) => {
  const { income, savings, checking } = banking
  const { expenses, debts } = outgoing
  const header = <h3>Accounts</h3>
  const total = (income - expenses).toFixed(2)

  return (
    <Panel header={header} className="accounts">
      <Col xs={4} className="banking">
        <div className="income">
          <span className="name">Monthly Income</span>
          <span className="amount">{income}</span>
        </div>
        <div className="savings">
          <span className="name">Savings</span>
          <span className="amount">{savings}</span>
        </div>
        <div className="checking">
          <span className="name">Checking</span>
          <span className="amount">{checking}</span>
        </div>
      </Col>
      <Col xs={4} className="outgoing">
        <div className="expenses">
          <span className="name">Monthly Expenses</span>
          <span className="amount">{expenses}</span>
        </div>
        <div className="debts">
          <span className="name">Debts</span>
          <span className="amount">{debts}</span>
        </div>
      </Col>
      <Col xs={4} className="netTotal">
        <span className="name">Monthly Net Total</span>
        <span className="amount">{total}</span>
        <Button bsStyle="link" bsSize="small" className="edit">
          Edit
        </Button>
      </Col>
    </Panel>
  )
}

AccountsPanel.propTypes = {
  banking: PropTypes.shape({
    income: PropTypes.number.isRequired,
    savings: PropTypes.number.isRequired,
    checking: PropTypes.number.isRequired,
  }).isRequired,
  outgoing: PropTypes.shape({
    expenses: PropTypes.number.isRequired,
    debts: PropTypes.number.isRequired,
  }).isRequired,
}

export default connect(state => {
  const { accounts: { incomes, savings, checking, debts }, expenses } = state
  const income = incomes.reduce((num, { amount }) => (num += amount), 0) * 2
  const totalExpenses = expenses.reduce((num, { amount, frequency }) => {
    num += amount * frequencies[frequency]
    return num
  }, 0)
  return {
    banking: { income, savings, checking },
    outgoing: { expenses: totalExpenses, debts },
  }
})(AccountsPanel)
