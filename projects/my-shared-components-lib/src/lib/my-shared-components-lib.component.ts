import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-shared-components-lib',
  template: ` <p>my-shared-components-lib works!</p> `,
  templateUrl: './my-shared-components-lib.component.scss',
})
export class MySharedComponentsLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
