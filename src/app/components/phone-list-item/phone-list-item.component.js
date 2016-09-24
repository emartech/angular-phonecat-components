'use strict';


export class PhoneListItemComponent {

  static create() {
    return {
      bindings: {
        phone: '<'
      },
      controller: [PhoneListItemComponent],
      template: require('./phone-list-item.tpl.html')
    };
  }


}
