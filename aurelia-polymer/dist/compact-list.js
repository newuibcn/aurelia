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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhY3QtbGlzdC50cyJdLCJuYW1lcyI6WyJDb21wYWN0TGlzdCIsIkNvbXBhY3RMaXN0LmNvbnN0cnVjdG9yIiwiQ29tcGFjdExpc3Quc2VsZWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBVUlBLHFCQUFvQkEsR0FBb0JBO29CQUFwQkMsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBaUJBO29CQVJqQ0EsVUFBS0EsR0FBR0E7d0JBQ1hBLEVBQUNBLE1BQU1BLEVBQUVBLEtBQUtBLEVBQUVBLFVBQVVBLEVBQUVBLEtBQUtBLEVBQUNBO3dCQUNsQ0EsRUFBQ0EsTUFBTUEsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUEsS0FBS0EsRUFBQ0E7d0JBQ2xDQSxFQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxVQUFVQSxFQUFFQSxLQUFLQSxFQUFDQTtxQkFDdENBLENBQUNBO29CQUtFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFVQSxDQUFDQTt5QkFDdkNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0E7Z0JBRURELGdDQUFVQSxHQUFWQSxVQUFXQSxJQUFJQTtvQkFDWEUsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7Z0JBQy9CQSxDQUFDQTtnQkFqQkxGO29CQUFDQSw4QkFBVUE7O2dDQWtCVkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQWxCRCxxQ0FrQkMsQ0FBQSIsImZpbGUiOiJjb21wYWN0LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYWxleHZpemNhaW5vIG9uIDIxLzEyLzE1LlxuICovXG5pbXBvcnQge09ic2VydmVyTG9jYXRvciwgYXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIENvbXBhY3RMaXN0e1xuICAgIHB1YmxpYyB1c2VycyA9IFtcbiAgICAgICAge1wibmFtZVwiOiBcIkJvYlwiLCBcInNlbGVjdGVkXCI6IGZhbHNlfSxcbiAgICAgICAge1wibmFtZVwiOiBcIlRpbVwiLCBcInNlbGVjdGVkXCI6IGZhbHNlfSxcbiAgICAgICAge1wibmFtZVwiOiBcIk1pa2VcIiwgXCJzZWxlY3RlZFwiOiBmYWxzZX1cbiAgICBdO1xuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX29sOiBPYnNlcnZlckxvY2F0b3Ipe1xuICAgICAgICB0aGlzLl9vbC5nZXRPYnNlcnZlcih0aGlzLnVzZXJzLCAnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc2VsZWN0SXRlbShpdGVtKXtcbiAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==