const INTIAL_STATE={
    lang:'en',
}
export default function languagered(state=INTIAL_STATE,action){
    switch(action.type){
        case "changelog":
            return{...state,lang:action.payload}
            default:
                return state;
    }
}