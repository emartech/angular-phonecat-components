'use strict';


export class CopyrightComponent {

  constructor(ACTUAL_YEAR) {
    this.actualYear = ACTUAL_YEAR;
  }

  static create() {
    return {
      controller: ['ACTUAL_YEAR', CopyrightComponent],
      template: require('./copyright.tpl.html')
    };
  }

}
