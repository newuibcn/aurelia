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
    var RingChart;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            RingChart = (function () {
                function RingChart(_element) {
                    this._element = _element;
                    this.percentage = null;
                }
                RingChart.prototype.toRadians = function (deg) {
                    return deg * Math.PI / 180;
                };
                RingChart.prototype.percentageChanged = function (newValue) {
                    var context = this._element.getContext('2d');
                    var centerX = this._element.width / 2;
                    var centerY = this._element.height / 2;
                    var radius = 70;
                    context.beginPath();
                    context.arc(centerX, centerY, radius, this.toRadians(-90), 2 * Math.PI * (this.percentage / 100) + this.toRadians(-90), false);
                    context.fillStyle = 'rgba(255,255,255,0)';
                    context.fill();
                    context.lineWidth = 7;
                    context.strokeStyle = '#003300';
                    context.stroke();
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], RingChart.prototype, "percentage", void 0);
                RingChart = __decorate([
                    aurelia_framework_1.autoinject,
                    aurelia_framework_1.customAttribute('ring-chart'), 
                    __metadata('design:paramtypes', [Element])
                ], RingChart);
                return RingChart;
            })();
            exports_1("RingChart", RingChart);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9hdHRyaWJ1dGVzL3JpbmctY2hhcnQudHMiXSwibmFtZXMiOlsiUmluZ0NoYXJ0IiwiUmluZ0NoYXJ0LmNvbnN0cnVjdG9yIiwiUmluZ0NoYXJ0LnRvUmFkaWFucyIsIlJpbmdDaGFydC5wZXJjZW50YWdlQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBS0lBLG1CQUFvQkEsUUFBaUJBO29CQUFqQkMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBU0E7b0JBRjNCQSxlQUFVQSxHQUFXQSxJQUFJQSxDQUFDQTtnQkFFR0EsQ0FBQ0E7Z0JBRXhDRCw2QkFBU0EsR0FBVEEsVUFBVUEsR0FBR0E7b0JBQ1RFLE1BQU1BLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBRURGLHFDQUFpQkEsR0FBakJBLFVBQWtCQSxRQUFnQkE7b0JBQzlCRyxJQUFJQSxPQUFPQSxHQUFTQSxJQUFJQSxDQUFDQSxRQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcERBLElBQUlBLE9BQU9BLEdBQVNBLElBQUlBLENBQUNBLFFBQVNBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO29CQUM3Q0EsSUFBSUEsT0FBT0EsR0FBU0EsSUFBSUEsQ0FBQ0EsUUFBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlDQSxJQUFJQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFFaEJBLE9BQU9BLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO29CQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsRUFBRUEsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQy9IQSxPQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxxQkFBcUJBLENBQUNBO29CQUMxQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLE9BQU9BLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO29CQUN0QkEsT0FBT0EsQ0FBQ0EsV0FBV0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQ2hDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQXJCREg7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLGlDQUFVQSxVQUFnQkE7Z0JBSHhDQTtvQkFBQ0EsOEJBQVVBO29CQUNWQSxtQ0FBZUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7OzhCQXdCN0JBO2dCQUFEQSxnQkFBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7WUF6QkQsaUNBeUJDLENBQUEiLCJmaWxlIjoiY29yZS9jb21wb25lbnRzL2F0dHJpYnV0ZXMvcmluZy1jaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFsZXggb24gMDcvMDEvMjAxNi5cclxuICovXHJcbmltcG9ydCB7YmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZSwgYXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuQGN1c3RvbUF0dHJpYnV0ZSgncmluZy1jaGFydCcpXHJcbmV4cG9ydCBjbGFzcyBSaW5nQ2hhcnR7XHJcbiAgICBAYmluZGFibGUgcGVyY2VudGFnZTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50KXt9XHJcblxyXG4gICAgdG9SYWRpYW5zKGRlZyl7XHJcbiAgICAgICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XHJcbiAgICB9XHJcblxyXG4gICAgcGVyY2VudGFnZUNoYW5nZWQobmV3VmFsdWU6IG51bWJlcil7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSAoPGFueT50aGlzLl9lbGVtZW50KS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBjZW50ZXJYID0gKDxhbnk+dGhpcy5fZWxlbWVudCkud2lkdGggLyAyO1xyXG4gICAgICAgIHZhciBjZW50ZXJZID0gKDxhbnk+dGhpcy5fZWxlbWVudCkuaGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgcmFkaXVzID0gNzA7XHJcblxyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCB0aGlzLnRvUmFkaWFucygtOTApLCAyICogTWF0aC5QSSAqICh0aGlzLnBlcmNlbnRhZ2UgLyAxMDApICsgdGhpcy50b1JhZGlhbnMoLTkwKSwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMCknO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gNztcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMwMDMzMDAnO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
