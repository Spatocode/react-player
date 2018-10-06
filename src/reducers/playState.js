import C from '../constants'

export const playState = (state = {}, action) => {
    switch(action.type){
        case C.PLAY_SONG:
            return{
                name: action.name,
                src: action.src
            }
        default :
            return state
    }
}