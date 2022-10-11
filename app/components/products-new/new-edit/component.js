// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import EmberObject, { set, get, computed } from '@ember/object';

const optionsList = [
  {
    name: 'launch_all',
    value: 'Launch for all'
  },
  {
    name: 'segmentbased',
    value: 'Launch for segments'
  }
];

const segmentOptions = [
  {
    name: 'signups',
    value: '<b>Sign-up</b> using'
  },
  {
    name: 'business',
    value: 'Business Sign-ups'
  },
  {
    name: 'nonbusiness',
    value: 'Non-Business Sign-ups'
  }
];

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


// eslint-disable-next-line ember/no-classic-classes, ember/require-tagless-components
export default Component.extend({
  optionsList,
  selectedLaunchType: 'select launch type',
  showSegments: computed('selectedLaunchType', function() {
    return this.selectedLaunchType === 'Launch for segments';
  }),
  selectedSignupType: 'All',
  selectedSegmentType: 'Select segemnt',
  signupoptions,
  segmentOptions
});
