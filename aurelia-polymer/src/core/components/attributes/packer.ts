/**
 * Created by alexvizcaino on 22/12/15.
 */
import {customAttribute, autoinject} from 'aurelia-framework';

@customAttribute('packer')
@autoinject
export class Packer{

    public root: any;

    public sorter = {

        random: function (a, b) {
            return Math.random() - 0.5;
        },
        w: function (a, b) {
            return b.w - a.w;
        },
        h: function (a, b) {
            return b.h - a.h;
        },
        a: function (a, b) {
            return b.area - a.area;
        },
        max: function (a, b) {
            return Math.max(b.w, b.h) - Math.max(a.w, a.h);
        },
        min: function (a, b) {
            return Math.min(b.w, b.h) - Math.min(a.w, a.h);
        },

        height: (function (a, b) {
            return this.sorter.msort(a, b, ['h', 'w']);
        }).bind(this),
        width: (function (a, b) {
            return this.sorter.msort(a, b, ['w', 'h']);
        }).bind(this),
        area: (function (a, b) {
            return this.sorter.msort(a, b, ['a', 'h', 'w']);
        }).bind(this),
        maxside: (function (a, b) {
            return this.sorter.msort(a, b, ['max', 'min', 'h', 'w']);
        }).bind(this),

        msort: (function (a, b, criteria) { /* sort by multiple criteria */
            var diff, n;
            for (n = 0; n < criteria.length; n++) {
                diff = this.sorter[criteria[n]](a, b);
                if (diff != 0)
                    return diff;
            }
            return 0;
        }).bind(this),

        now: function(blocks) {
            blocks.sort(this.width);
        }
    }

    constructor(private _element: Element){}

    attached(){
        this.root = { x: 0, y: 0, w: $(this._element).width(), h: $(this._element).height() };
        this.fit(this.getTiles(this._element.getElementsByTagName('paper-card')));
    }

    private getTiles(elements){
        var tile, tiles = [];
        for(var i = 0; i < elements.length; i++){
            tile = {node: elements[i], w: $(elements[i]).width(), h: $(elements[i]).height()}
            tiles.push(tile);
        }

        //this.sorter.now(tiles);
        tiles.sort((a, b) => {
            return a.h > b.h ? 1 :
                a.h < b.h ? -1 : 0;
        })
        return tiles;
    }

    private fit(tiles){
        var n, node, tile;
        this.root = { x: 0, y: 0, w: tiles[0].w, h: tiles[0].h };
        for(n = 0; n < tiles.length; n++){
          tile = tiles[n];
            if(node = this.findNode(this.root, tile.w, tile.h)){
                tile.fit = this.splitNode(node, tile.w, tile.h);
            } else {
                tile.fit = this.growNode(tile.w, tile.h);
            }
        }

        for(var n = 0 ; n < tiles.length ; n++) {
            var tile = tiles[n];
            if (tile.fit) {
                var parentOffset = $(this._element).offset();
                $(tile.node).offset({left: parentOffset.left + tile.fit.x, top: parentOffset.top + tile.fit.y});
            }
        }
    }

    private growNode(w, h){
        var canGrowDown  = (w <= this.root.w);
        var canGrowRight = (h <= this.root.h);

        var shouldGrowRight = canGrowRight && (this.root.h >= (this.root.w + w)); // attempt to keep square-ish by growing right when height is much greater than width
        var shouldGrowDown  = canGrowDown  && (this.root.w >= (this.root.h + h)); // attempt to keep square-ish by growing down  when width  is much greater than height

        if (shouldGrowRight)
            return this.growRight(w, h);
        else if (shouldGrowDown)
            return this.growDown(w, h);
        else if (canGrowRight)
            return this.growRight(w, h);
        else if (canGrowDown)
            return this.growDown(w, h);
        else
            return null; // need to ensure sensible root starting size to avoid this happening

    }

    private growRight(w, h){
        var node;
        this.root = {
            used: true,
            x: 0,
            y: 0,
            w: this.root.w + w,
            h: this.root.h,
            down: this.root,
            right: { x: this.root.w, y: 0, w: w, h: this.root.h }
        };
        if (node = this.findNode(this.root, w, h))
            return this.splitNode(node, w, h);
        else
            return null;
    }

    private growDown(w, h){
        var node;
        this.root = {
            used: true,
            x: 0,
            y: 0,
            w: this.root.w,
            h: this.root.h + h,
            down:  { x: 0, y: this.root.h, w: this.root.w, h: h },
            right: this.root
        };
        if (node = this.findNode(this.root, w, h))
            return this.splitNode(node, w, h);
        else
            return null;
    }

    private findNode(root, w, h){
        if(root.used)
            return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
        else if((w <= root.w) && (h <= root.h))
            return root;
        else
            return null;
    }

    private splitNode(node, w, h){
        node.used = true;
        node.down  = { x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
        node.right = { x: node.x + w, y: node.y,     w: node.w - w, h: h          };
        return node;
    }
}