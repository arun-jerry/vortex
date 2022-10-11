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

const conditions = [
  {
    name: 'select-segment-base',
    options: '',
    componentName: 'products-new/select-segment-base',
    selectedPair: {
      componentName: 'products-new/sign-up-segments',
      options: '',
      name: 'sign-up-segment',
    }
  }
]


// eslint-disable-next-line ember/no-classic-classes, ember/require-tagless-components
export default Component.extend({
  optionsList,
  selectedLaunchType: 'select launch type',
  showSegments: computed('selectedLaunchType', function() {
    // return this.selectedLaunchType === 'Launch for segments';
    return true;
  }),
  selectedSignupType: 'All',
  selectedSegmentType: 'Select segemnt',
  signupoptions,
  segmentOptions,
  conditions,
  actions: {
    addDefaultConditon() {
      let conditions = this.conditions;
      conditions.pushObject(conditions[0]);
      set(this, 'conditions', conditions);
    }
  }
});
