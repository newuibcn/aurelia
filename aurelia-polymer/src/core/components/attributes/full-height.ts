/**
 * Created by Alex on 07/01/2016.
 */
import {customAttribute, autoinject} from 'aurelia-framework';

@customAttribute('full-height')
export class FullHeightCustomAttibute{
    constructor(private _element: Element){}

    attached(){
        var height = (<any>$(<any>window)).height() - (<any>$(<any>this._element)).offset().top;
        (<any>$(<any>this._element)).height(height);
    }
}