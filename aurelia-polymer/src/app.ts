import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'compact-list'], name: 'compact-list',      moduleId: 'compact-list',      nav: true, title: 'compact-list' }
    ]);

    this.router = router;
  }
}
