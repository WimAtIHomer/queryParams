import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sections', { path: '/sections' }, function () {
    this.route('measurements', {path: '/measurements/:sectionId'});
  });
});

export default Router;
