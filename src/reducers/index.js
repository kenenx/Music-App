const initState = {
  name:'Bladee',
  color: '#e7bce7'
}

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case ' UPDATE_COLOR' :
      return { ...state, location: action.payload}
    default:
      return state
  }
}

export default myReducer