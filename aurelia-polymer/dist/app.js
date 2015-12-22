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
                        { route: 'compact-list', name: 'compact-list', moduleId: 'compact-list', nav: true, title: 'compact-list' }
                    ]);
                    this.router = router;
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuY29uZmlndXJlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7OztZQUVBO2dCQUFBQTtnQkFZQUMsQ0FBQ0E7Z0JBVENELDZCQUFlQSxHQUFmQSxVQUFnQkEsTUFBMkJBLEVBQUVBLE1BQWNBO29CQUN6REUsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTt3QkFDVEEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsVUFBVUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBT0EsUUFBUUEsRUFBRUEsVUFBVUEsRUFBT0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUE7d0JBQzNHQSxFQUFFQSxLQUFLQSxFQUFFQSxjQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxjQUFjQSxFQUFPQSxRQUFRQSxFQUFFQSxjQUFjQSxFQUFPQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxjQUFjQSxFQUFFQTtxQkFDdEhBLENBQUNBLENBQUNBO29CQUVIQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQUNIRixVQUFDQTtZQUFEQSxDQVpBLEFBWUNBLElBQUE7WUFaRCxxQkFZQyxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcidcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICdsYXVuY2hlciddLCBuYW1lOiAnbGF1bmNoZXInLCAgICAgIG1vZHVsZUlkOiAnbGF1bmNoZXInLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdsYXVuY2hlcicgfSxcbiAgICAgIHsgcm91dGU6ICdjb21wYWN0LWxpc3QnLCBuYW1lOiAnY29tcGFjdC1saXN0JywgICAgICBtb2R1bGVJZDogJ2NvbXBhY3QtbGlzdCcsICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ2NvbXBhY3QtbGlzdCcgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
