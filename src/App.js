import React from 'react'
import { Grid, Col } from 'react-bootstrap'
import ExpensesPanel from 'components/Expenses/ExpensesPanel'
import AccountsPanel from 'components/Accounts/AccountsPanel'
import 'app.css'

const App = () => (
  <Grid className="App">
    <Col sm={3}>
      <ExpensesPanel />
    </Col>
    <Col sm={9}>
      <AccountsPanel />
    </Col>
  </Grid>
)

export default App
