import { connect } from 'react-redux'
import Rbox from './components/Rbox'

const mapStateToProps = (state, ownProps) => {
    return {
        child: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () =>{
            dispatch(actionCreator)
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rbox)