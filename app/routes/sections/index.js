/**
 * Created by Wim on 31-3-2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
      default: 1
    },
    sort: {
      refreshModel: true,
      default: "id"
    },
    direction: {
      refreshModel: true,
      default: "DESC"
    }
  },
  model: function(params) {
    var query = $.extend({}, params);
    query.page = query.page - 1;
    return this.get('store').query('section', query);
  },
  setupController: function (controller, model) {
    controller.set('model', model);
    controller.set('meta', model.get('meta'));
  },
  resetController: function(controller, isExiting, transition){
    if (isExiting) {
      controller.set('model', null);
      controller.set('meta', undefined);
      controller.set('page', 1);
      controller.set('sort', undefined);
      controller.set('direction', undefined);
    }
  }
});