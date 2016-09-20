'use strict';


export class FilteredPhoneListService {

  constructor($filter, phoneRepository) {
    this._filter = $filter('filter');
    this._phoneRepository = phoneRepository;

    this._allPhones = [];
    this._phones = [];
    this._searchText = '';
    this._selectedCarrier = '';
  }


  load() {
    this._phoneRepository
      .getAll()
      .then((phones) => this._phones = this._allPhones = phones);
  }


  getAll() {
    return this._phones;
  }


  hasAny() {
    return this._phones.length > 0;
  }


  setSelectedCarrier(carrier) {
    this._selectedCarrier = carrier;
    this._filterPhones();
  }


  setSearchText(value) {
    this._searchText = value;
    this._filterPhones();
  }


  _filterPhones() {
    this._phones = this._filter(this._allPhones, { name: this._searchText, carrier: this._selectedCarrier });
  }


  static create() {
    return ['$filter', 'phoneRepository', FilteredPhoneListService];
  }

}
