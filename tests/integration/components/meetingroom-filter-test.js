import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meetingroom-filter', 'Integration | Component | meetingroom filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{meetingroom-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#meetingroom-filter}}
      template block text
    {{/meetingroom-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
