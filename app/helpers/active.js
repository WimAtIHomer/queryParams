import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  if (params[0] === params[1]) {
    return params[2] ? params[2] : 'active';
  } else {
    return '';
  }
});
