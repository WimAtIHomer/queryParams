/**
 * Created by Wim on 31-3-2016.
 */
import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: config.api_namespace
});