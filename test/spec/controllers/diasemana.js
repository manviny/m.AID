'use strict';

describe('Controller: DiasemanaCtrl', function () {

  // load the controller's module
  beforeEach(module('mcalendarioAppApp'));

  var DiasemanaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiasemanaCtrl = $controller('DiasemanaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
