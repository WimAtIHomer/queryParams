/**
 * Created by Wim on 31-3-2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    },
    direction: {
      refreshModel: true
    }
  },
  model: function(params) {
    this.set('sectionId', params.sectionId);
    return Ember.RSVP.hash({
      section: this.get('store').find('section', params.sectionId)
    });
  },
  setupController: function (controller, model) {
    controller.set('model', model);
    var query = controller.get('listQuery');
    if (typeof(query.page) === 'undefined' || this.get("sectionId") !== query.sectionId) {
      controller.set('query', {sectionId: this.get("sectionId")});
      controller.set('page', 1);
      query = controller.get('listQuery');
    }
    this.get('store').query('measurement', query).then(function (model) {
      controller.set('measurements', model);
      controller.set('meta', model.get('meta'));
    });
  },
  actions: {
    willTransition: function(transition){
      if (this.routeName !== transition.targetName) {
        this.controller.set('page', -1);
        this.controller.set('measurements', null);
        this.controller.set('meta', undefined);
      }
    }
  }
});

