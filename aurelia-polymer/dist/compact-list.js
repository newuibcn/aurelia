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
                    this.overrideHeader = true;
                    this._ol.getObserver(this.users, 'selected')
                        .subscribe(this.selectItem.bind(this));
                }
                CompactList.prototype.attached = function () { };
                CompactList.prototype.selectItem = function (item) {
                    alert(JSON.stringify(item));
                };
                CompactList.prototype.showDetail = function () {
                    $('#master-detail')[0].togglePanel();
                };
                CompactList.prototype.closeDetail = function () {
                    $('#master-detail')[0].closeDrawer();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhY3QtbGlzdC50cyJdLCJuYW1lcyI6WyJDb21wYWN0TGlzdCIsIkNvbXBhY3RMaXN0LmNvbnN0cnVjdG9yIiwiQ29tcGFjdExpc3QuYXR0YWNoZWQiLCJDb21wYWN0TGlzdC5zZWxlY3RJdGVtIiwiQ29tcGFjdExpc3Quc2hvd0RldGFpbCIsIkNvbXBhY3RMaXN0LmNsb3NlRGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFXSUEscUJBQW9CQSxHQUFvQkE7b0JBQXBCQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFpQkE7b0JBVGpDQSxVQUFLQSxHQUFHQTt3QkFDWEEsRUFBQ0EsTUFBTUEsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUEsS0FBS0EsRUFBQ0E7d0JBQ2xDQSxFQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxFQUFFQSxVQUFVQSxFQUFFQSxLQUFLQSxFQUFDQTt3QkFDbENBLEVBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLFVBQVVBLEVBQUVBLEtBQUtBLEVBQUNBO3FCQUN0Q0EsQ0FBQ0E7b0JBRUtBLG1CQUFjQSxHQUFZQSxJQUFJQSxDQUFDQTtvQkFJbENBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFVBQVVBLENBQUNBO3lCQUN2Q0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9DQSxDQUFDQTtnQkFFREQsOEJBQVFBLEdBQVJBLGNBQVdFLENBQUNBO2dCQUVaRixnQ0FBVUEsR0FBVkEsVUFBV0EsSUFBSUE7b0JBQ1hHLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO2dCQUMvQkEsQ0FBQ0E7Z0JBRURILGdDQUFVQSxHQUFWQTtvQkFDSUksQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUVESixpQ0FBV0EsR0FBWEE7b0JBQ0lLLENBQUNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7Z0JBQ3pDQSxDQUFDQTtnQkE1QkxMO29CQUFDQSw4QkFBVUE7O2dDQTZCVkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQTdCQSxBQTZCQ0EsSUFBQTtZQTdCRCxxQ0E2QkMsQ0FBQSIsImZpbGUiOiJjb21wYWN0LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBhbGV4dml6Y2Fpbm8gb24gMjEvMTIvMTUuXHJcbiAqL1xyXG5pbXBvcnQge09ic2VydmVyTG9jYXRvciwgYXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIENvbXBhY3RMaXN0e1xyXG4gICAgcHVibGljIHVzZXJzID0gW1xyXG4gICAgICAgIHtcIm5hbWVcIjogXCJCb2JcIiwgXCJzZWxlY3RlZFwiOiBmYWxzZX0sXHJcbiAgICAgICAge1wibmFtZVwiOiBcIlRpbVwiLCBcInNlbGVjdGVkXCI6IGZhbHNlfSxcclxuICAgICAgICB7XCJuYW1lXCI6IFwiTWlrZVwiLCBcInNlbGVjdGVkXCI6IGZhbHNlfVxyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGVIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vbDogT2JzZXJ2ZXJMb2NhdG9yKXtcclxuICAgICAgICB0aGlzLl9vbC5nZXRPYnNlcnZlcih0aGlzLnVzZXJzLCAnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc2VsZWN0SXRlbS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpe31cclxuXHJcbiAgICBzZWxlY3RJdGVtKGl0ZW0pe1xyXG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZXRhaWwoKXtcclxuICAgICAgICAkKCcjbWFzdGVyLWRldGFpbCcpWzBdLnRvZ2dsZVBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEZXRhaWwoKXtcclxuICAgICAgICAkKCcjbWFzdGVyLWRldGFpbCcpWzBdLmNsb3NlRHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
