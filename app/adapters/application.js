import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'http://tning-ld1.linkedin.biz:3000'
});
