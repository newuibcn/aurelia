/**
 * Created by Alex on 07/01/2016.
 */
import {customAttribute, autoinject, bindable} from 'aurelia-framework';

@customAttribute('full-height')
@autoinject
export class FullHeight{
    @bindable overrideHeader: boolean = false;

    constructor(private _element: Element){}

    overrideHeaderChanged(newValue: boolean){
        var height = this.overrideHeader ? (<any>$(<any>window)).height() : (<any>$(<any>window)).height() - (<any>$(<any>this._element)).offset().top;
        (<any>$(<any>this._element)).height(height);
    }
}