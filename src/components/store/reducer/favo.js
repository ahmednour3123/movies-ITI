const FAVLIST={

    fav:[]
}
export default function favreducer(state=FAVLIST,action){
    switch(action.type){
        case "SETFAV":
            return{...state,fav:action.payload}
            default:
                return state;
    }

}