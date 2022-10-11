import Component from '@ember/component';
const signupoptions = [
  {
    name: 'all',
    value: 'All sign-ups'
  },
  {
    name: 'business',
    value: 'Business Sign-ups'
  },
  {
    name: 'nonbusiness',
    value: 'Non-Business Sign-ups'
  }
]

export default Component.extend({
  signupoptions,
  selectedSignupType: 'All',
});
