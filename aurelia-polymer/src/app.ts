import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'launcher'], name: 'launcher',      moduleId: 'launcher',      nav: true, title: 'launcher' },
      { route: 'compact-list', name: 'compact-list',      moduleId: 'compact-list',      nav: true, title: 'compact-list' },
      { route: 'form', name: 'form',      moduleId: 'form',      nav: true, title: 'form' }
    ]);

    this.router = router;
  }

  attached(){
    (<any>$('#main-panel')).height(window.innerHeight);
  }

  goToLauncher(){
    this.router.navigate('launcher');
  }

  goToList(){
    this.router.navigate('compact-list');
  }

  goToForm(){
    this.router.navigate('form');
  }
}
