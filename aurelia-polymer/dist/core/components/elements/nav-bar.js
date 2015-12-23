System.register(['aurelia-framework', "aurelia-router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, aurelia_router_1;
    var NavBar;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            }],
        execute: function() {
            NavBar = (function () {
                function NavBar() {
                }
                NavBar.prototype.goToLauncher = function () {
                    this.router.navigate('launcher');
                };
                NavBar.prototype.goToList = function () {
                    this.router.navigate('compact-list');
                };
                NavBar.prototype.goToForm = function () {
                    this.router.navigate('form');
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', aurelia_router_1.Router)
                ], NavBar.prototype, "router", void 0);
                return NavBar;
            })();
            exports_1("NavBar", NavBar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9lbGVtZW50cy9uYXYtYmFyLnRzIl0sIm5hbWVzIjpbIk5hdkJhciIsIk5hdkJhci5jb25zdHJ1Y3RvciIsIk5hdkJhci5nb1RvTGF1bmNoZXIiLCJOYXZCYXIuZ29Ub0xpc3QiLCJOYXZCYXIuZ29Ub0Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFjQUMsQ0FBQ0E7Z0JBWEdELDZCQUFZQSxHQUFaQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JDQSxDQUFDQTtnQkFFREYseUJBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUVESCx5QkFBUUEsR0FBUkE7b0JBQ0lJLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBWkRKO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQkFBTUEsVUFBU0E7Z0JBYTdCQSxhQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFkRCwyQkFjQyxDQUFBIiwiZmlsZSI6ImNvcmUvY29tcG9uZW50cy9lbGVtZW50cy9uYXYtYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYWxleHZpemNhaW5vIG9uIDIxLzEyLzE1LlxyXG4gKi9cclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2QmFye1xyXG4gICAgQGJpbmRhYmxlIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICAgIGdvVG9MYXVuY2hlcigpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdsYXVuY2hlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9MaXN0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJ2NvbXBhY3QtbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9Gb3JtKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJ2Zvcm0nKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
