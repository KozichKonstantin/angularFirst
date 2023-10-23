import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/prod';
import { SaveService } from 'src/app/services/save.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  // public typeSelect: string;
  // public unitSelect: string;
  constructor(private router: Router, private saveServ: SaveService) {}
  form = new FormGroup({
    nameInp: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    modelInp: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(15),
    ]),
    numberMin: new FormControl<number>(0, [Validators.required]),
    numberMax: new FormControl<number>(0, [Validators.required]),
    typeSelect: new FormControl<string>('', [Validators.required]),
    unitSelect: new FormControl<string>('', [Validators.required]), 
    locationInp: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
  });
  get nameInp() {
    return this.form.controls.nameInp as FormControl;
  }
  get modelInp() {
    return this.form.controls.modelInp as FormControl;
  }
  get numberMin() {
    return this.form.controls.numberMin as FormControl;
  }
  get numberMax() {
    return this.form.controls.numberMax as FormControl;
  }
  get typeSelect (){
    return this.form.controls.typeSelect as FormControl;
  }
  get unitSelect(){
    return this.form.controls.unitSelect as FormControl;
  }
  get locationInp() {
    return this.form.controls.locationInp as FormControl;
  }
  
  saveEl(
    nameInp: string,
    modelInp: string,
    typeSelect: string,
    numberMin: string,
    numberMax: string,
    unitSelect: string,
    locationInp: string
  ) {
    const newProd: IProduct = {
      name: nameInp,
      model: modelInp,
      type: typeSelect,
      range: numberMin + ' - ' + numberMax,
      unit: unitSelect,
      location: locationInp,
    };
    this.saveServ.postSave(newProd).subscribe((prod) => {});
    localStorage.setItem('newProd', JSON.stringify(newProd));
    return console.log(newProd);
  }
  goHome(value: string = '') {
    if (value == 'post') {
      console.log('like posted');
      this.router.navigate(['main']);
    } else {
      this.router.navigate(['main']);
    }
  }
  ngOnInit(): void {}
}
