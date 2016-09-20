'use strict';


export class PhoneAppComponent {

  constructor($routeParams, phoneRepository) {
    this.phone = {};

    this._phoneId = $routeParams.phoneId;
    this._phoneRepository = phoneRepository;
  }


  $onInit() {
    this._phoneRepository
      .getOne(this._phoneId)
      .then((phone) => this.phone = phone);
  }


  static create() {
    return {
      controller: ['$routeParams', 'phoneRepository', PhoneAppComponent],
      template: require('./phone-app.tpl.html')
    };
  }
  
}
