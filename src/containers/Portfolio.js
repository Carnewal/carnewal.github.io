
import {connect} from 'react-redux'
import Portfolio from '../components/Portfolio'

export default connect(
    (state) => ({ portfolio: state.portfolio })
)(Portfolio)