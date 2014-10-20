'use strict';

describe('Controller: HorariosCtrl', function () {

  // load the controller's module
  beforeEach(module('mcalendarioAppApp'));

  var HorariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HorariosCtrl = $controller('HorariosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
