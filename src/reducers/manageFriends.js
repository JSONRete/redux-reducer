export function manageFriends(state, action){

    switch (action.type) {
        case "ADD_FRIEND":
          return ({   ...state, friends: [ ...state.friends, action.friend] })
        case "REMOVE_FRIEND":
        //   return { REMOVE_FRIEND: state.REMOVE_FRIEND - 1 };
        default:
          return state;
      }
}
  
  let state = { friends: [] };