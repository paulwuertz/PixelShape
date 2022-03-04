import {connect} from 'react-redux';

import {getSidebarVisibility, getSelectionMode} from '../../selectors';

import RightSidebar from '../../components/sidebar/RightSidebar';

const mapStateToProps = state => ({
  visible: getSidebarVisibility(state),
  selectionMode: getSelectionMode(state)
});

const RightSidebarContainer = connect(
  mapStateToProps,
  null
)(RightSidebar);

export default RightSidebarContainer;
