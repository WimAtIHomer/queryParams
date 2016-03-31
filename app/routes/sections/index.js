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
  setupController: function (controller) {
    var query = controller.get('listQuery');
    if (typeof(query.page) === 'undefined') {
      controller.set('page', 1);
      controller.set('sort', 'id');
      controller.set('direction', 'DESC');
      query = controller.get('listQuery');
    }
    this.get('store').query('section', query).then(function (model) {
      controller.set('model', model);
      controller.set('meta', model.get('meta'));
    });
  },
  actions: {
    willTransition: function(transition){
      if (this.routeName !== transition.targetName) {
        this.controller.set('page', -1);
      }
    }
  }
});