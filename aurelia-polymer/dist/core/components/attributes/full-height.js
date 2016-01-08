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
                    this.overrideHeader = false;
                }
                FullHeight.prototype.overrideHeaderChanged = function (newValue) {
                    var height = this.overrideHeader ? $(window).height() : $(window).height() - $(this._element).offset().top;
                    $(this._element).height(height);
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], FullHeight.prototype, "overrideHeader", void 0);
                FullHeight = __decorate([
                    aurelia_framework_1.customAttribute('full-height'),
                    aurelia_framework_1.autoinject, 
                    __metadata('design:paramtypes', [Element])
                ], FullHeight);
                return FullHeight;
            })();
            exports_1("FullHeight", FullHeight);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9hdHRyaWJ1dGVzL2Z1bGwtaGVpZ2h0LnRzIl0sIm5hbWVzIjpbIkZ1bGxIZWlnaHQiLCJGdWxsSGVpZ2h0LmNvbnN0cnVjdG9yIiwiRnVsbEhlaWdodC5vdmVycmlkZUhlYWRlckNoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUtJQSxvQkFBb0JBLFFBQWlCQTtvQkFBakJDLGFBQVFBLEdBQVJBLFFBQVFBLENBQVNBO29CQUYzQkEsbUJBQWNBLEdBQVlBLEtBQUtBLENBQUNBO2dCQUVIQSxDQUFDQTtnQkFFeENELDBDQUFxQkEsR0FBckJBLFVBQXNCQSxRQUFpQkE7b0JBQ25DRSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFTQSxDQUFDQSxDQUFNQSxNQUFNQSxDQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFTQSxDQUFDQSxDQUFNQSxNQUFNQSxDQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFTQSxDQUFDQSxDQUFNQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQTtvQkFDeklBLENBQUNBLENBQU1BLElBQUlBLENBQUNBLFFBQVFBLENBQUVBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0E7Z0JBUERGO29CQUFDQSw0QkFBUUE7O21CQUFDQSxzQ0FBY0EsVUFBa0JBO2dCQUg5Q0E7b0JBQUNBLG1DQUFlQSxDQUFDQSxhQUFhQSxDQUFDQTtvQkFDOUJBLDhCQUFVQTs7K0JBVVZBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxJQUFBO1lBWEQsbUNBV0MsQ0FBQSIsImZpbGUiOiJjb3JlL2NvbXBvbmVudHMvYXR0cmlidXRlcy9mdWxsLWhlaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFsZXggb24gMDcvMDEvMjAxNi5cclxuICovXHJcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBhdXRvaW5qZWN0LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZSgnZnVsbC1oZWlnaHQnKVxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgRnVsbEhlaWdodHtcclxuICAgIEBiaW5kYWJsZSBvdmVycmlkZUhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnQpe31cclxuXHJcbiAgICBvdmVycmlkZUhlYWRlckNoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pe1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLm92ZXJyaWRlSGVhZGVyID8gKDxhbnk+JCg8YW55PndpbmRvdykpLmhlaWdodCgpIDogKDxhbnk+JCg8YW55PndpbmRvdykpLmhlaWdodCgpIC0gKDxhbnk+JCg8YW55PnRoaXMuX2VsZW1lbnQpKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgKDxhbnk+JCg8YW55PnRoaXMuX2VsZW1lbnQpKS5oZWlnaHQoaGVpZ2h0KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
