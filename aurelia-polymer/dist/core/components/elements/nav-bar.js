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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9lbGVtZW50cy9uYXYtYmFyLnRzIl0sIm5hbWVzIjpbIk5hdkJhciIsIk5hdkJhci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO2dCQUVBQyxDQUFDQTtnQkFER0Q7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDBCQUFNQSxVQUFTQTtnQkFDN0JBLGFBQUNBO1lBQURBLENBRkEsQUFFQ0EsSUFBQTtZQUZELDJCQUVDLENBQUEiLCJmaWxlIjoiY29yZS9jb21wb25lbnRzL2VsZW1lbnRzL25hdi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBhbGV4dml6Y2Fpbm8gb24gMjEvMTIvMTUuXHJcbiAqL1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZCYXJ7XHJcbiAgICBAYmluZGFibGUgcm91dGVyOiBSb3V0ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
