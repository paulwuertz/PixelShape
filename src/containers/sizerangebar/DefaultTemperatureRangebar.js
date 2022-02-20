import {connect} from 'react-redux';

import {getToolSettings} from '../../selectors';
import {setBaseTemp} from '../../actions/tools';

import DefaultTemperatureRangebar from '../../components/sizerangebar/DefaultTemperatureRangebar';

const mapStateToProps = state => ({
  currentBaseTemp: getToolSettings(state).baseTemp
});

const mapDispatchToProps = dispatch => ({
  setBaseTemp (baseTemp) {
    return dispatch(setBaseTemp(baseTemp));
  }
});

const DefaultTemperatureRangebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultTemperatureRangebar);

export default DefaultTemperatureRangebarContainer;
