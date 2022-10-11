// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import { computed } from '@ember/object';
//import { productHeader, productList } from '/constants/products';

const productHeader = [
  'Name',
  'Environment',
  'Active Campaigns',
  'User impact',
];

const productList = [
  {
    id: 1,
    label: 'Freshdesk',
    route: '/products/1',
    environment: 'Producion',
    activeCampaigns: 87,
    userImpact: '89%',
  },
  {
    id: 2,
    label: 'Freshsales',
    route: '/products/2',
    environment: 'Producion',
    activeCampaigns: 23,
    userImpact: '50%',
  },
  {
    id: 3,
    label: 'Freshservices',
    route: '/products/3',
    environment: 'Producion',
    activeCampaigns: 5,
    userImpact: '10%',
  },
  {
    id: 4,
    label: 'Freshchat',
    route: '/products/4',
    environment: 'Producion',
    activeCampaigns: 67,
    userImpact: '70%',
  },
  {
    id: 5,
    label: 'Freshcaller',
    route: '/products/5',
    environment: 'Producion',
    activeCampaigns: 23,
    userImpact: '40%',
  },
];

// eslint-disable-next-line ember/no-classic-classes, ember/require-tagless-components
export default Component.extend({
  columns: computed(function () {
    return productHeader;
  }),
  products: computed(function () {
    return productList;
  }),
});
