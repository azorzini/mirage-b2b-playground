import certificate from './certificate';
import endpoint from './endpoint';
import messageFlow from './messageFlow';
import partner from './partner';

export default {
  ...certificate,
  ...partner,
  ...endpoint,
  ...messageFlow
};
