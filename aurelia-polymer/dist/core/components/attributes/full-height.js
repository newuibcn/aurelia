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
    var FullHeight;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            FullHeight = (function () {
                function FullHeight(_element) {
                    this._element = _element;
                }
                FullHeight.prototype.attached = function () {
                    var height = $(window).height() - $(this._element).offset().top;
                    $(this._element).height(height);
                };
                FullHeight = __decorate([
                    aurelia_framework_1.customAttribute('full-height'), 
                    __metadata('design:paramtypes', [Element])
                ], FullHeight);
                return FullHeight;
            })();
            exports_1("FullHeight", FullHeight);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9hdHRyaWJ1dGVzL2Z1bGwtaGVpZ2h0LnRzIl0sIm5hbWVzIjpbIkZ1bGxIZWlnaHQiLCJGdWxsSGVpZ2h0LmNvbnN0cnVjdG9yIiwiRnVsbEhlaWdodC5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBRUlBLG9CQUFvQkEsUUFBaUJBO29CQUFqQkMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBU0E7Z0JBQUVBLENBQUNBO2dCQUV4Q0QsNkJBQVFBLEdBQVJBO29CQUNJRSxJQUFJQSxNQUFNQSxHQUFTQSxDQUFDQSxDQUFNQSxNQUFNQSxDQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFTQSxDQUFDQSxDQUFNQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQTtvQkFDbEZBLENBQUNBLENBQU1BLElBQUlBLENBQUNBLFFBQVFBLENBQUVBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0E7Z0JBUExGO29CQUFDQSxtQ0FBZUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7OytCQVE5QkE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQVJBLEFBUUNBLElBQUE7WUFSRCxtQ0FRQyxDQUFBIiwiZmlsZSI6ImNvcmUvY29tcG9uZW50cy9hdHRyaWJ1dGVzL2Z1bGwtaGVpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWxleCBvbiAwNy8wMS8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGF1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ2Z1bGwtaGVpZ2h0JylcclxuZXhwb3J0IGNsYXNzIEZ1bGxIZWlnaHR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50KXt9XHJcblxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gKDxhbnk+JCg8YW55PndpbmRvdykpLmhlaWdodCgpIC0gKDxhbnk+JCg8YW55PnRoaXMuX2VsZW1lbnQpKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgKDxhbnk+JCg8YW55PnRoaXMuX2VsZW1lbnQpKS5oZWlnaHQoaGVpZ2h0KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
