import { createStore } from 'redux'

export default createStore(function(state, action){

    if(state === undefined || 0 || ''){
        return { idx : "" }
    }

    if(action.type === "idx"){
        return {...state, idx : action.idx }
    }


});



