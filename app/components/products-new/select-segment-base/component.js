import Component from '@ember/component';
const segmentOptions = [
  {
    name: 'signups',
    value: '<b>Sign-up</b> using'
  },
  {
    name: 'account-state',
    value: '<b>Account</b> in <b>state</b>'
  },
  {
    name: 'region',
    value: 'in <b>Region</b>'
  },
  {
    name: 'mrr',
    value: '<b>MRR</b> between'
  },
  {
    name: 'plan',
    value: 'in <b>Plan</b>'
  }
];

export default Component.extend({
  segmentOptions,
  selectedSegmentType: 'select segment type'
});
