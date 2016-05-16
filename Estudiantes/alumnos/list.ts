import {inject} from "aurelia-framework";
import {AlumnoData} from "./alumnoData";

@inject(AlumnoData)
export class List {
    private alumnoData: AlumnoData;
    public alumnos: AlumnoData[];

    constructor(alumnoData) {
        this.alumnoData = alumnoData;
    }

    activate() {
        return this.alumnoData.getAll().then(alumnos => { this.alumnos = alumnos });
    }
}