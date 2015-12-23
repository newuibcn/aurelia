/**
 * Created by alexvizcaino on 21/12/15.
 */
import {bindable} from 'aurelia-framework';
import {Router} from "aurelia-router";

export class NavBar{
    @bindable router: Router;

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