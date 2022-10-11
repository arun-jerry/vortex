// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import { computed } from '@ember/object';
//import { productHeader, productList } from 'vortex/app/constants/products';

export const launchHeader = ['Name', 'Interactions', 'User impact'];

export const launchList = [
  {
    id: 1,
    label: 'Nudge trial customers to use more filters and convert them to paid',
    route: '/products/1/edit',
    interactions: '2.5k',
    userImpact: '89%',
    featureKey: '', 
    config: {

    }
  },
  {
    id: 2,
    label: 'Show option to add more ticket fields and redirect to upgrade page',
    route: '/products/2/edit',
    interactions: '2.5k',
    userImpact: '50%',
  },
  {
    id: 3,
    label:
      'List feature that the customer might get on the next higher plan if upgraded with 20% discount on yearly',
    route: '/products/3/edit',
    interactions: '2.5k',
    userImpact: '10%',
  },
  {

    id: 4,
    label: 'Trial Nudges',
    route: '/products/4/edit',
    einteractions: '2.5k',
    userImpact: '70%',
  },
  {
    id: 5,
    label: 'Featured features',
    route: '/products/5/edit',
    interactions: '2.5k',
    userImpact: '40%',
    featurekey: '',
    config: {

    }
  },
];

// eslint-disable-next-line ember/no-classic-classes, ember/require-tagless-components
export default Component.extend({
  columns: computed(function () {
    return launchHeader;
  }),
  launches: computed(function () {
    return launchList;
  }),
});
