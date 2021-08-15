import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListfanService } from 'src/app/services/listfan.service';
import { MinChar, MinAge } from 'src/app/tools/shared.validators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  myForm : FormGroup = this._formBuild.group({})

  constructor(
    private _service : ListfanService,
    private _formBuild : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this._formBuild.group({
      Nom : ["", [Validators.required, MinChar(2)]],
      DateB : ["", [Validators.required, MinAge(13)]],
      ListS : this._formBuild.array([])
    }, Validators.required)
  }
  getSeriesArray(){
    return this.myForm.get('ListS') as FormArray
  }
  addControlToArray(){
    this.getSeriesArray().push(new FormControl("",  Validators.required))
  }
  ajouter(){
    this._service.ajout(this.myForm.value.Nom, this.myForm.value.DateB, this.myForm.value.ListS)
  }
}
