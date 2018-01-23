import {actions} from '../actions/system'

const initialState = {
    isSiteNavOpen: false,
    isTimelineFutureOpen: false
}

const system = (state = initialState, action) => {
    switch(action.type) {
        case actions.TOGGLE_SITE_NAV:
            return {
                ...state, 
                isSiteNavOpen: !state.isSiteNavOpen
            }
        case actions.TOGGLE_TIMELINE_FUTURE:
            return {
                ...state,
                isTimelineFutureOpen: !state.isTimelineFutureOpen
            }
        default:
            return state
    }
}

export default system