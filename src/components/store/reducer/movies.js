const INTIAL_STTATEE ={
    movies:[]
}
export default function moviesReducer(state=INTIAL_STTATEE,action){

switch(action.type){
    case "SETMOV":
    return{...state,movies:action.payload}

  
    default:
        return state;
}
}
