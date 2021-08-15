import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fan } from '../models/fans.liste.model';
import { ListfanService } from '../services/listfan.service';
import { MinChar } from '../tools/shared.validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listFan : Fan[] = []
  AjoutSerie:boolean=false
  SupSerie:boolean=false
  iF: number = 0
  iS: number = 0
  constructor(
    private _service : ListfanService,
    private _formBuild : FormBuilder
  ) { }

  delAlert(s:number,f:number){
    this.SupSerie= !this.SupSerie
    this.iF = f
    this.iS = s
  }
  ToSerie(){
    this.AjoutSerie= !this.AjoutSerie
  }
  ngOnInit(): void {
    this.listFan = this._service.listFan
    this.myForm = this._formBuild.group({
      Serie : ["", [Validators.required, MinChar(2)]]
    }, Validators.required)
  }
  toggleVisibleD(index : number) {
    this.listFan[index].VisibleD = !this.listFan[index].VisibleD
  }
  myForm : FormGroup = this._formBuild.group({})
  delSeries(){
    this._service.supprimerSerie(this.iF, this.iS)
    this.SupSerie= !this.SupSerie
  }
  modifS(indexF:number){
    this._service.ajoutSeries(this.myForm.value.Serie, indexF)
  }
}
