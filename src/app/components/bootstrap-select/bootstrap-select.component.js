'use strict';


export class BootstrapSelectComponent {

  constructor() {
    this.selectedOption = '';
    this.isOpened = false;
  }


  displaySelectedOption() {
    return this.selectedOption || this.placeholder;
  }


  toggle() {
    this.isOpened = !this.isOpened;
  }


  select(option) {
    this.isOpened = false;
    this.selectedOption = option;
    this.onSelect({ option });
  }


  static create() {
    return {
      bindings: {
        options: '<',
        onSelect: '&',
        placeholder: '@'
      },
      controller: [BootstrapSelectComponent],
      template: require('./bootstrap-select.tpl.html')
    };
  }

}
