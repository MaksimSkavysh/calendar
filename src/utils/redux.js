export const trivialAction = (type) => {
  const action = () => ({ type })
  action.toString = () => type
  return action
}
