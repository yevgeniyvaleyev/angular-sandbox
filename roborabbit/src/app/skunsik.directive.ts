import { Directive,Input, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSkunsik]'
})
export class SkunsikDirective {

  @Input('format') format;

  @HostBinding('style.background') bg: string;

  @HostListener('focus') onFocus() {
    console.log('on focus');
    this.bg = '#ffffff';
  }

  @HostListener('blur') onBlur() {
    const isUpperCase = this.format === 'uppercase';
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = isUpperCase ?
      value.toUpperCase() :
      value.toLowerCase();

    console.log('on blur', value.toUpperCase());
    this.bg = '#d0ffe1';
  }

  constructor(private el: ElementRef) { }

}
