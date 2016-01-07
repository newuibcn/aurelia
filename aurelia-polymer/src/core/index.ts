/**
 * Created by alexvizcaino on 21/12/15.
 */
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(fc: FrameworkConfiguration){
    fc.globalResources('./components/elements/nav-bar');
    fc.globalResources('./converters/converter');
    fc.globalResources('./components/attributes/packer');
    fc.globalResources('./components/attributes/full-height');
}