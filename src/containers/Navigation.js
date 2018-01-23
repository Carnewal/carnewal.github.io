import {connect} from 'react-redux'
import Navigation from '../components/Navigation'
import {toggleSiteNav} from '../actions/system'
//import {bindActionCreators} from 'redux'

export default connect(
    (state) => ({ isSiteNavOpen: state.system.isSiteNavOpen }),
    (dispatch) => ({
        toggleSiteNav: () => { dispatch(toggleSiteNav()) }
    })
)(Navigation)