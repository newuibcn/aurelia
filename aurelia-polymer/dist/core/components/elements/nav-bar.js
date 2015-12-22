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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9lbGVtZW50cy9uYXYtYmFyLnRzIl0sIm5hbWVzIjpbIk5hdkJhciIsIk5hdkJhci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO2dCQUVBQyxDQUFDQTtnQkFER0Q7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDBCQUFNQSxVQUFTQTtnQkFDN0JBLGFBQUNBO1lBQURBLENBRkEsQUFFQ0EsSUFBQTtZQUZELDJCQUVDLENBQUEiLCJmaWxlIjoiY29yZS9jb21wb25lbnRzL2VsZW1lbnRzL25hdi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYWxleHZpemNhaW5vIG9uIDIxLzEyLzE1LlxuICovXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXJ7XG4gICAgQGJpbmRhYmxlIHJvdXRlcjogUm91dGVyO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
