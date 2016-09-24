'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';

import { PhoneRepositoryService } from './services/phone-repository/phone-repository.service';
import { CarrierRepositoryService } from './services/carrier-repository/carrier-repository.service';
import { FilteredPhoneListService } from './services/filtered-phone-list/filtered-phone-list.service';

import { ShortDescriptionFilter } from './filters/short-description/short-description.filter';

import { PhoneAppComponent } from './components/phone-app/phone-app.component';
import { PhoneListAppComponent } from './components/phone-list-app/phone-list-app.component';
import { BootstrapSelectComponent } from './components/bootstrap-select/bootstrap-select.component';
import { CarrierSelectComponent } from './components/carrier-select/carrier-select.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { PhoneListItemComponent } from './components/phone-list-item/phone-list-item.component';
import { CopyrightComponent } from './components/copyright/copyright.component';


angular
  .module('phoneApp', [
    ngRoute
  ])

  .constant('ACTUAL_YEAR', 2016)

  .service('phoneRepository', PhoneRepositoryService.create())
  .service('carrierRepository', CarrierRepositoryService.create())
  .service('filteredPhoneList', FilteredPhoneListService.create())

  .component('phoneApp', PhoneAppComponent.create())
  .component('phoneListApp', PhoneListAppComponent.create())
  .component('bootstrapSelect', BootstrapSelectComponent.create())
  .component('carrierSelect', CarrierSelectComponent.create())
  .component('searchBox', SearchBoxComponent.create())
  .component('phoneListItem', PhoneListItemComponent.create())
  .component('copyright', CopyrightComponent.create())

  .filter('shortDescription', ShortDescriptionFilter.create())

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<phone-list-app></phone-list-app>'
      })
      .when('/phone/:phoneId', {
        template: '<phone-app></phone-app>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
