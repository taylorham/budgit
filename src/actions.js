export const toggleEdit = (editingIndex, index) => ({
  type: 'TOGGLE_EDIT',
  editingIndex,
  index,
})

export const editExpense = (event, index) => ({
  type: 'EDIT_EXPENSE',
  event,
  index,
})

export const addExpense = () => ({
  type: 'ADD_EXPENSE',
})

export const removeExpense = index => ({
  type: 'REMOVE_EXPENSE',
  index,
})
