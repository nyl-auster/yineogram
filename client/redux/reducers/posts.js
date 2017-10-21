// a reducer takes in two things:

// 1. the action 
// 2. copy of current fragrement (or whole) state
export default function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index
      // return a new array
      return [
        ...state.slice(0, i),
        { ...state[i], likes: ++state[i].likes }, // we clone the only part of the array that is actually changing
        ...state.slice(i + 1),
      ]
    default:
      return state
  }
  return state
}