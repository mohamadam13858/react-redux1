import { BUY_SANDEWICH } from "./foodType";


const foodState = {

    sandewich: 20
}


const foodReduser = (state = foodState ,action) => {
    switch (action.type) {
        case BUY_SANDEWICH:
            return { ...state, sandewich: state.sandewich - 1 }

        default:
            return state
    }
}

export default foodReduser;