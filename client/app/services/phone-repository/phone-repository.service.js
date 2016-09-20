'use strict';

export class PhoneRepositoryService {

  constructor($http) {
    this._$http = $http;
  }


  getOne(phoneId) {
    return this._$http
      .get(`/api/${phoneId}.json`)
      .then((response) => response.data);
  }


  getAll() {
    return this._$http
      .get('/api/phones.json')
      .then((response) => response.data);
  }


  static create() {
    return ['$http', PhoneRepositoryService];
  }

}
