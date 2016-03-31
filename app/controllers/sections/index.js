/**
 * Created by Wim on 31-3-2016.
 */
import Ember from 'ember';
import PaginationMixin from 'query-params/mixins/pagination';

export default Ember.Controller.extend(PaginationMixin, {
  modelType: 'section'
});
