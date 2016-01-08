/**
 * Created by alexvizcaino on 21/12/15.
 */
import {ObserverLocator, autoinject} from 'aurelia-framework';

@autoinject
export class CompactList{
    public users = [
        {"name": "Bob", "selected": false},
        {"name": "Tim", "selected": false},
        {"name": "Mike", "selected": false}
    ];

    public overrideHeader: boolean = true;
    public selectedItem;

    constructor(private _ol: ObserverLocator){
        this._ol.getObserver(this.users, 'selected')
            .subscribe(this.selectItem.bind(this));
    }

    attached(){}

    selectItem(item){
        alert(JSON.stringify(item))
    }

    showDetail(){
        $('#master-detail')[0].togglePanel();
    }

    closeDetail(){
        $('#master-detail')[0].closeDrawer();
    }
}