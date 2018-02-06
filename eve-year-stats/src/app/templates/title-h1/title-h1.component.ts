import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  template: '<div class="row justify-content-md-center border-bottom pb-3 mb-4 mt-5"><h1 clas="text-center" id="{{ name }}" > {{ name }} </h1></div>'
})
export class TitleH1Component implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
