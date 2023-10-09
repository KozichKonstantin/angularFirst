import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

type NewType = AfterViewInit;

@Directive({
  selector: '[appFocus]'
})
export default class FocusDirective implements OnInit, NewType {

  constructor(private el: ElementRef) { }
  ngAfterViewInit(): void {
    this.el.nativeElement.focus()
  }
  ngOnInit(): void {
  }

}
