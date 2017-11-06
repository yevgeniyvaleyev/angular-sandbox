import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input('appDelay') delay: number;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit () {
    setTimeout(_ => {
      this.view.createEmbeddedView(this.template);
    }, this.delay * 1000)
  }
}
