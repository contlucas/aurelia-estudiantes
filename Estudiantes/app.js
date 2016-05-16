export class App {
    configureRouter(config, router) {
        config.map([
            {
                route: "",
                moduleId: "./default",
                title: "Home",
                nav: true,
                name: "home"
            },
            {
                route: "alumnos",
                moduleId: "./alumnos/list",
                title: "Alumnos",
                nav: true
            },
            {
                route: "details/:id",
                moduleId: "./alumnos/details",
                title: "Detalle",
                nav: false,
                name: "details"
            }
        ]);
        this.router = router;
    }
}
//# sourceMappingURL=app.js.map