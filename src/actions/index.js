import { v4 } from 'uuid'
import C from './constants'

export const addSong = (song, name) =>
    ({
        type: C.ADD_SONG,
        name,
        song,
        id: v4()
    })

export const removeSong = id =>
    ({
        type: C.REMOVE_SONG,
        id
    })

export const playState = (name, src) =>
    ({
        type: C.PLAY_SONG,
        name,
        src
    })

export const rateSong = (id, rating) =>
    ({
        type: C.RATE_SONG,
        id,
        rating
    })