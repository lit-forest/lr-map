import { connect } from 'react-redux'
import Search from './components/Search'
import {search} from './action'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchClick: (searchKey) =>{
            dispatch(search(searchKey))
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)