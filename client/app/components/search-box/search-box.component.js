'use strict';


export class SearchBoxComponent {

  handleKeyUp($event) {
    this.onInputChange({ value: $event.target.value });
  }


  static create() {
    return {
      bindings: {
        onInputChange: '&'
      },
      controller: [SearchBoxComponent],
      template: require('./search-box.tpl.html')
    };
  }

}
