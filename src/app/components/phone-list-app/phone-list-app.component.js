'use strict';


export class PhoneListAppComponent {

  constructor(filteredPhoneList) {
    this.phones = filteredPhoneList;
  }


  $onInit() {
    this.phones.load();
  }


  static create() {
    return {
      controller: ['filteredPhoneList', PhoneListAppComponent],
      template: require('./phone-list-app.tpl.html')
    };
  }
  
}
