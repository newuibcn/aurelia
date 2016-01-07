/**
 * Created by Alex on 07/01/2016.
 */
import {bindable, customAttribute, autoinject} from 'aurelia-framework';

@autoinject
@customAttribute('ring-chart')
export class RingChart{
    @bindable percentage: number = null;

    constructor(private _element: Element){}

    toRadians(deg){
        return deg * Math.PI / 180;
    }

    percentageChanged(newValue: number){
        var context = (<any>this._element).getContext('2d');
        var centerX = (<any>this._element).width / 2;
        var centerY = (<any>this._element).height / 2;
        var radius = 70;

        context.beginPath();
        context.arc(centerX, centerY, radius, this.toRadians(-90), 2 * Math.PI * (this.percentage / 100) + this.toRadians(-90), false);
        context.fillStyle = 'rgba(255,255,255,0)';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = '#003300';
        context.stroke();
    }
}