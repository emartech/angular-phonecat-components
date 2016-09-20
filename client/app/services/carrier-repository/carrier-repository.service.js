'use strict';


export class CarrierRepositoryService {

  constructor($http) {
    this._$http = $http;
  }


  getAll() {
    return this._$http
      .get('/api/carriers.json')
      .then((response) => response.data);
  }


  static create() {
    return ['$http', CarrierRepositoryService];
  }

}
