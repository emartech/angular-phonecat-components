'use strict';


export class CarrierSelectComponent {

  constructor(carrierRepository) {
    this._carrierRepository = carrierRepository;
    this.carriers = [];
  }


  $onInit() {
    this._carrierRepository
      .getAll()
      .then((carriers) => this.carriers = carriers);
  }


  select(carrier) {
    this.onSelect({ carrier });
  }


  static create() {
    return {
      bindings: {
        onSelect: '&'
      },
      controller: ['carrierRepository', CarrierSelectComponent],
      template: require('./carrier-select.tpl.html')
    };
  }

}

