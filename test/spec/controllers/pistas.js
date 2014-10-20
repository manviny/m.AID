'use strict';

describe('Controller: PistasCtrl', function () {

  // load the controller's module
  beforeEach(module('mcalendarioAppApp'));

  var PistasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PistasCtrl = $controller('PistasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
