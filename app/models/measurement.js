/**
 * Created by Wim on 31-3-2016.
 */
import DS from "ember-data";

export default DS.Model.extend({
  section: DS.belongsTo('section'),
  value: DS.attr('string'),
  timestamp: DS.attr('string')
});