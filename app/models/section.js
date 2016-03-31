/**
 * Created by Wim on 31-3-2016.
 */
import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});