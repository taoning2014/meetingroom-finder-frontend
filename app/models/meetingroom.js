import DS from 'ember-data';

export default DS.Model.extend({
  "name": DS.attr(),
  "position-x": DS.attr(),
  "position-y": DS.attr(),
  "image": DS.attr()
});
