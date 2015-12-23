System.register(['aurelia-framework'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var CompactList;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            CompactList = (function () {
                function CompactList(_ol) {
                    this._ol = _ol;
                    this.users = [
                        { "name": "Bob", "selected": false },
                        { "name": "Tim", "selected": false },
                        { "name": "Mike", "selected": false }
                    ];
                    this._ol.getObserver(this.users, 'selected')
                        .subscribe(this.selectItem.bind(this));
                }
                CompactList.prototype.selectItem = function (item) {
                    alert(JSON.stringify(item));
                };
                CompactList.prototype.showDetail = function () {
                    $('#master-detail')[0].togglePanel();
                };
                CompactList = __decorate([
                    aurelia_framework_1.autoinject, 
                    __metadata('design:paramtypes', [aurelia_framework_1.ObserverLocator])
                ], CompactList);
                return CompactList;
            })();
            exports_1("CompactList", CompactList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhY3QtbGlzdC50cyJdLCJuYW1lcyI6WyJDb21wYWN0TGlzdCIsIkNvbXBhY3RMaXN0LmNvbnN0cnVjdG9yIiwiQ29tcGFjdExpc3Quc2VsZWN0SXRlbSIsIkNvbXBhY3RMaXN0LnNob3dEZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQVVJQSxxQkFBb0JBLEdBQW9CQTtvQkFBcEJDLFFBQUdBLEdBQUhBLEdBQUdBLENBQWlCQTtvQkFSakNBLFVBQUtBLEdBQUdBO3dCQUNYQSxFQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxFQUFFQSxVQUFVQSxFQUFFQSxLQUFLQSxFQUFDQTt3QkFDbENBLEVBQUNBLE1BQU1BLEVBQUVBLEtBQUtBLEVBQUVBLFVBQVVBLEVBQUVBLEtBQUtBLEVBQUNBO3dCQUNsQ0EsRUFBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsVUFBVUEsRUFBRUEsS0FBS0EsRUFBQ0E7cUJBQ3RDQSxDQUFDQTtvQkFLRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsQ0FBQ0E7eUJBQ3ZDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0NBLENBQUNBO2dCQUVERCxnQ0FBVUEsR0FBVkEsVUFBV0EsSUFBSUE7b0JBQ1hFLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO2dCQUMvQkEsQ0FBQ0E7Z0JBRURGLGdDQUFVQSxHQUFWQTtvQkFDSUcsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQXJCTEg7b0JBQUNBLDhCQUFVQTs7Z0NBc0JWQTtnQkFBREEsa0JBQUNBO1lBQURBLENBdEJBLEFBc0JDQSxJQUFBO1lBdEJELHFDQXNCQyxDQUFBIiwiZmlsZSI6ImNvbXBhY3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFsZXh2aXpjYWlubyBvbiAyMS8xMi8xNS5cclxuICovXHJcbmltcG9ydCB7T2JzZXJ2ZXJMb2NhdG9yLCBhdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQ29tcGFjdExpc3R7XHJcbiAgICBwdWJsaWMgdXNlcnMgPSBbXHJcbiAgICAgICAge1wibmFtZVwiOiBcIkJvYlwiLCBcInNlbGVjdGVkXCI6IGZhbHNlfSxcclxuICAgICAgICB7XCJuYW1lXCI6IFwiVGltXCIsIFwic2VsZWN0ZWRcIjogZmFsc2V9LFxyXG4gICAgICAgIHtcIm5hbWVcIjogXCJNaWtlXCIsIFwic2VsZWN0ZWRcIjogZmFsc2V9XHJcbiAgICBdO1xyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2w6IE9ic2VydmVyTG9jYXRvcil7XHJcbiAgICAgICAgdGhpcy5fb2wuZ2V0T2JzZXJ2ZXIodGhpcy51c2VycywgJ3NlbGVjdGVkJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0SXRlbShpdGVtKXtcclxuICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShpdGVtKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGV0YWlsKCl7XHJcbiAgICAgICAgJCgnI21hc3Rlci1kZXRhaWwnKVswXS50b2dnbGVQYW5lbCgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
