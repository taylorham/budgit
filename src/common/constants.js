export const LOCAL_STORAGE_NAME = 'reactBudgit'

export const emptyItem = {
  label: '',
  amount: 0,
  frequency: 'monthly',
  timing: 1,
  tag: 'uncategorized',
}

export const frequencies = {
  once: 1,
  daily: 30.42,
  'semi-weekly': 8.69,
  weekly: 4.34,
  'bi-weekly': 2.17,
  'semi-monthly': 2,
  monthly: 1,
  'bi-monthly': 0.5,
  quarterly: 0.333,
  annually: 0.083,
}

export const tags = {
  necessities: 'success',
  entertainment: 'warning',
  uncategorized: 'danger',
}
