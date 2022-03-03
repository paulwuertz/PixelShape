import {connect} from 'react-redux';

import {getSelectionMode} from '../../selectors';
import {setSelectionMode} from '../../actions/tools';

import EditModeSwitch from '../../components/editmodeswitch/EditModeSwitch';

const mapStateToProps = state => ({
  selectionMode: getSelectionMode(state)
});

const mapDispatchToProps = dispatch => ({
  setSelectionMode (selectionMode) {
    return dispatch(setSelectionMode(selectionMode));
  }
});

const EditModeSwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModeSwitch);

export default EditModeSwitchContainer;
