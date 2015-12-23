System.register([], function(exports_1) {
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = 'Aurelia';
                    config.map([
                        { route: ['', 'launcher'], name: 'launcher', moduleId: 'launcher', nav: true, title: 'launcher' },
                        { route: 'compact-list', name: 'compact-list', moduleId: 'compact-list', nav: true, title: 'compact-list' },
                        { route: 'form', name: 'form', moduleId: 'form', nav: true, title: 'form' }
                    ]);
                    this.router = router;
                };
                App.prototype.attached = function () {
                    $('#main-panel').height(window.innerHeight);
                };
                App.prototype.goToLauncher = function () {
                    this.router.navigate('launcher');
                };
                App.prototype.goToList = function () {
                    this.router.navigate('compact-list');
                };
                App.prototype.goToForm = function () {
                    this.router.navigate('form');
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuY29uZmlndXJlUm91dGVyIiwiQXBwLmF0dGFjaGVkIiwiQXBwLmdvVG9MYXVuY2hlciIsIkFwcC5nb1RvTGlzdCIsIkFwcC5nb1RvRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7WUFFQTtnQkFBQUE7Z0JBNkJBQyxDQUFDQTtnQkExQkNELDZCQUFlQSxHQUFmQSxVQUFnQkEsTUFBMkJBLEVBQUVBLE1BQWNBO29CQUN6REUsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTt3QkFDVEEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsVUFBVUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBT0EsUUFBUUEsRUFBRUEsVUFBVUEsRUFBT0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUE7d0JBQzNHQSxFQUFFQSxLQUFLQSxFQUFFQSxjQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxjQUFjQSxFQUFPQSxRQUFRQSxFQUFFQSxjQUFjQSxFQUFPQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxjQUFjQSxFQUFFQTt3QkFDckhBLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQU9BLFFBQVFBLEVBQUVBLE1BQU1BLEVBQU9BLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BLEVBQUVBO3FCQUN0RkEsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBRURGLHNCQUFRQSxHQUFSQTtvQkFDUUcsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JEQSxDQUFDQTtnQkFFREgsMEJBQVlBLEdBQVpBO29CQUNFSSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQUVESixzQkFBUUEsR0FBUkE7b0JBQ0VLLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBRURMLHNCQUFRQSxHQUFSQTtvQkFDRU0sSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxDQUFDQTtnQkFDSE4sVUFBQ0E7WUFBREEsQ0E3QkEsQUE2QkNBLElBQUE7WUE3QkQscUJBNkJDLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgcm91dGVyOiBSb3V0ZXI7XHJcbiAgXHJcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiBbJycsICdsYXVuY2hlciddLCBuYW1lOiAnbGF1bmNoZXInLCAgICAgIG1vZHVsZUlkOiAnbGF1bmNoZXInLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdsYXVuY2hlcicgfSxcclxuICAgICAgeyByb3V0ZTogJ2NvbXBhY3QtbGlzdCcsIG5hbWU6ICdjb21wYWN0LWxpc3QnLCAgICAgIG1vZHVsZUlkOiAnY29tcGFjdC1saXN0JywgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnY29tcGFjdC1saXN0JyB9LFxyXG4gICAgICB7IHJvdXRlOiAnZm9ybScsIG5hbWU6ICdmb3JtJywgICAgICBtb2R1bGVJZDogJ2Zvcm0nLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdmb3JtJyB9XHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCl7XHJcbiAgICAoPGFueT4kKCcjbWFpbi1wYW5lbCcpKS5oZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGdvVG9MYXVuY2hlcigpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJ2xhdW5jaGVyJyk7XHJcbiAgfVxyXG5cclxuICBnb1RvTGlzdCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJ2NvbXBhY3QtbGlzdCcpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub0Zvcm0oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdmb3JtJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
