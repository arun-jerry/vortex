import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', { path: '/' }, function () {
    this.route('index', { path: '/' });
  });

  this.route('products', function () {
    this.route('index', { path: '/' });
    this.route('show', { path: '/:product_id' });
    this.route('new', { path: '/:product_id/new' });
    this.route('edit', { path: '/:launch_id/edit' });
  });
});

export default Router;
