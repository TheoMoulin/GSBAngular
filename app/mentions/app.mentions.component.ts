import { Component } from "@angular/core";
import { DataService } from "../services/app.service.data";
import { Observable } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: "my-mentions",
    templateUrl: "app.mentions.html"
})

export class MentionsComponent {
    hebergement:string = "Machine de Théo";
    auteur:string = "Theo Moulin";
    objectif:string = "Gérer mdes médecins et des visiteurs";
    date:string = "2018/2019"
}