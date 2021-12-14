import { GET_ALL_MUSIC_EVENTS } from "./actions";

function getMusicEvents (state = [], action: { type: any; payload: { data: any; }; }) {
    switch (action.type) {
        case GET_ALL_MUSIC_EVENTS:
            return [ action.payload.data, ...state ];
    }

    return state;
}

export default getMusicEvents;