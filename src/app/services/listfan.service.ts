import { Injectable } from '@angular/core';
import { Fan } from '../models/fans.liste.model';

@Injectable({
  providedIn: 'root'
})
export class ListfanService{
    listFan: Fan[] = []
    constructor() { }

    ajout(nom : string, date : Date, series : string []) {
        this.listFan.push({Name : nom, DateB: date , ListS: series, VisibleD : false})
    }
    supprimerSerie(indexF:number, indexS:number){
        this.listFan[indexF].ListS.splice(indexS, 1)
    }
    ajoutSeries(serie: string, indexF: number){
        this.listFan[indexF].ListS.push(serie)
    }
}