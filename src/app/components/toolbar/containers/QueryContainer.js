import { connect } from 'react-redux'
import Query from '../components/Query'
import {Query_ASYN} from '../modules/query/action'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDrawEnd: (queryKey) =>{
            dispatch(Query_ASYN(queryKey))
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Query)