'use strict';

describe('Service: cal', function () {

  // load the service's module
  beforeEach(module('mcalendarioAppApp'));

  // instantiate service
  var cal;
  beforeEach(inject(function (_cal_) {
    cal = _cal_;
  }));

  it('should do something', function () {
    expect(!!cal).toBe(true);
  });

});
