// a reducer takes in two things:

// 1. the action 
// 2. copy of current state

export default function posts(state = [], action) {
  console.log(state, action)
  return state
}