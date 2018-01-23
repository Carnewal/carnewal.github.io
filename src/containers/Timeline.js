import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Timeline from '../components/Timeline'
import { toggleTimelineFuture } from '../actions/system'

export default connect(
    (state) => ({ 
        isTimelineFutureOpen: state.system.isTimelineFutureOpen,
        ...state.timeline
    }),
    (dispatch) => bindActionCreators({ toggleTimelineFuture }, dispatch)
)(Timeline)