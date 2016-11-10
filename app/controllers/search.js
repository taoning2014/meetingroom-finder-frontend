import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.get('store').findAll('meetingroom');
      } else {
        return this.get('store').findAll('meetingroom');
      }
    }
  }
});
