export class App {
    public router: any;

    configureRouter(config: any, router: any) {
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