import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/prod';
import { IProductEdit } from 'src/app/models/editProd';
import { SaveService } from 'src/app/services/save.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  public editing: IProductEdit;
  constructor(private router: Router, private saveServ: SaveService) {}
  public minNumber: number;

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
    numberMax: new FormControl<number>(1, [
      Validators.required,
      // Validators.min(),
    ]),
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
  get typeSelect() {
    return this.form.controls.typeSelect as FormControl;
  }
  get unitSelect() {
    return this.form.controls.unitSelect as FormControl;
  }
  get locationInp() {
    return this.form.controls.locationInp as FormControl;
  }
  checkValues(
    min = this.form.controls.numberMin.value,
    max = this.form.controls.numberMax.value
  ) {
    if (min != null && max != null && min < max) {
      return false;
    } else {
      return true;
    }
  }
  saveEl(newProd: IProductEdit) {
    if (localStorage.getItem('action') == 'add') {
      localStorage.setItem('newProd', JSON.stringify(newProd));
      return console.log(newProd);
    } else {
      if (localStorage.getItem('action') == 'edit') {
        newProd.id = this.editing.id;
        localStorage.setItem('edit', JSON.stringify(newProd));
      }
    }
  }
  goHome() {
    this.router.navigate(['main']);
  }
  checkType() {
    if (localStorage.getItem('action') == 'edit') {
      this.editing = JSON.parse(localStorage.getItem('edit') + '');
    }
  }
  ngOnInit(): void {
    this.checkType();
  }
}
