import {connect} from 'react-redux';

import {getSidebarVisibility} from '../../selectors';

import RightSidebar from '../../components/sidebar/RightSidebar';

const mapStateToProps = state => ({
  visible: getSidebarVisibility(state)
});

const RightSidebarContainer = connect(
  mapStateToProps,
  null
)(RightSidebar);

export default RightSidebarContainer;
