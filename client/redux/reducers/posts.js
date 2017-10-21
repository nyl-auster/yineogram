// a reducer takes in two things:

// 1. the action 
// 2. copy of current fragrement (or whole) state
export default function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const newState = state.slice()
      newState[action.index].likes++
      return newState
    default:
      return state
  }
  return state
}