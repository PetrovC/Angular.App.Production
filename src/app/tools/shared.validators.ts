import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinChar(longueur : number) : ValidatorFn {
    return (control : AbstractControl) => {
        let myValue : string = control.value
        if(myValue == null) return null;
        if(control.dirty && myValue.length < longueur) return {TropCourtError : "Le champ doit contenir minimum" + longueur + " charactère(s)"}
        return null;
    }
}
export function MinAge(minAge : number) : ValidatorFn {
  return (control : AbstractControl) => {
      let Year: number = new Date().getFullYear()
      let DateB: Date = control.value
      let DateBYear : number = parseInt(DateB.toString().substring(0,4))
      if(DateBYear == null) return null;
      if((Year-DateBYear) < 13) return {AgeError : 'Interdit au moins de 13 ans'}
      return null;
  }
}