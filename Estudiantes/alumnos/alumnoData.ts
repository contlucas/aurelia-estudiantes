import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class AlumnoData {
    private http: HttpClient;

    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        return this.http.get("api/alumnos").then(response => { return response.content });
    }
}