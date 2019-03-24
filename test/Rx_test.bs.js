// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.js";
import * as Rxjs from "rxjs";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Operators from "rxjs/operators";

var oneObs = Rxjs.Observable.create((function (obs) {
        obs.next(10);
        obs.complete();
        return /* () */0;
      }));

var twoObs = Rxjs.Observable.create((function (obs) {
        obs.next(100);
        obs.next(200);
        obs.complete();
        return /* () */0;
      }));

Jest.describe("Static function: create", (function (param) {
        Jest.test("Sample test", (function (param) {
                return Jest.Expect[/* toBe */2](3, Jest.Expect[/* expect */0](3));
              }));
        return Jest.testAsync("Rx.create - Create observable using static method", undefined, (function (finish) {
                      var obs = Rxjs.Observable.create((function (obs) {
                              obs.next(20);
                              obs.complete();
                              return /* () */0;
                            }));
                      obs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toBe */2](20, Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

Jest.describe("Static operator: combineLatest", (function (param) {
        Jest.testAsync("combineLatest2", undefined, (function (finish) {
                var testObs = Rxjs.combineLatest(twoObs, oneObs);
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                        200,
                                        10
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        return Jest.testAsync("combineLatest6", undefined, (function (finish) {
                      var testObs = Rxjs.combineLatest(oneObs, oneObs, oneObs, oneObs, oneObs, oneObs);
                      testObs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                              10,
                                              10,
                                              10,
                                              10,
                                              10,
                                              10
                                            ], Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

Jest.describe("Static operator: forkJoin", (function (param) {
        Jest.testAsync("forkJoin2", undefined, (function (finish) {
                var testObs = Rxjs.forkJoin(oneObs, twoObs);
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                        10,
                                        200
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        return Jest.testAsync("forkJoin4", undefined, (function (finish) {
                      var testObs = Rxjs.forkJoin(twoObs, twoObs, twoObs, twoObs);
                      testObs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                              200,
                                              200,
                                              200,
                                              200
                                            ], Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

Jest.describe("Static operator: zip", (function (param) {
        Jest.testAsync("zip2", undefined, (function (finish) {
                var testObs = Rxjs.zip(oneObs, twoObs);
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                        10,
                                        100
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        return Jest.testAsync("zip5", undefined, (function (finish) {
                      var testObs = Curry._1(Operators.takeLast(1), Rxjs.zip(twoObs, twoObs, twoObs, twoObs, twoObs));
                      testObs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                              200,
                                              200,
                                              200,
                                              200,
                                              200
                                            ], Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

Jest.describe("Static operators", (function (param) {
        var test_fromArray = function (finish) {
          var array = /* array */[
            10,
            20
          ];
          var testObs = Curry._1(Operators.reduce((function (acc, next, _i) {
                      return $$Array.append(acc, /* array */[next]);
                    }), /* array */[]), Rxjs.from(array));
          testObs.subscribe((function (value) {
                  return Curry._1(finish, Jest.Expect[/* toEqual */12](array, Jest.Expect[/* expect */0](value)));
                }));
          return /* () */0;
        };
        Jest.testAsync("concat", undefined, (function (finish) {
                var testObs = Curry._1(Operators.reduce((function (acc, n, _i) {
                            return $$Array.append(acc, /* array */[n]);
                          }), /* array */[]), Rxjs.concat(oneObs, twoObs, oneObs));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* array */[
                                        10,
                                        100,
                                        200,
                                        10
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("defer", 100, (function (finish) {
                var testObs = Rxjs.defer((function () {
                        return oneObs;
                      }));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](10, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("deferArray", 100, (function (finish) {
                var testObs = Rxjs.defer((function (param) {
                        return /* array */[20];
                      }));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](20, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("empty", undefined, (function (finish) {
                var observer = {
                  next: (function (_val) {
                      Curry._1(finish, Jest.fail("Should expect no value"));
                      return /* () */0;
                    }),
                  complete: (function (param) {
                      Curry._1(finish, Jest.pass);
                      return /* () */0;
                    })
                };
                Rxjs.EMPTY.subscribe(observer);
                return /* () */0;
              }));
        Jest.testAsync("fromArray", undefined, test_fromArray);
        Jest.testAsync("interval", 1000, (function (finish) {
                var testObs = Curry._1(Operators.take(1), Rxjs.interval(100));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](0, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("merge", undefined, (function (finish) {
                var testObs = Curry._1(Operators.reduce((function (acc, next, _i) {
                            return /* :: */[
                                    next,
                                    acc
                                  ];
                          }), /* [] */0), Rxjs.merge(oneObs, twoObs));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* :: */[
                                        200,
                                        /* :: */[
                                          100,
                                          /* :: */[
                                            10,
                                            /* [] */0
                                          ]
                                        ]
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("never", 1000, (function (finish) {
                var observer = {
                  next: (function (_val) {
                      return Curry._1(finish, Jest.fail("Should expect no value"));
                    }),
                  error: (function (param) {
                      return Curry._1(finish, Jest.pass);
                    })
                };
                var testObs = Curry._1(Operators.timeout(100), Rxjs.NEVER);
                testObs.subscribe(observer);
                return /* () */0;
              }));
        Jest.testAsync("off", undefined, (function (finish) {
                var testObs = Rxjs.of(10);
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](10, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("race", undefined, (function (finish) {
                var delayedObs = Curry._1(Operators.delay(100), oneObs);
                var testObs = Curry._1(Operators.take(1), Rxjs.race(delayedObs, twoObs));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](100, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("range", undefined, (function (finish) {
                var testObs = Rxjs.range(10, 1, undefined);
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](10, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        return Jest.testAsync("timer", 1000, (function (finish) {
                      var testObs = Curry._1(Operators.takeLast(1), Curry._1(Operators.take(2), Rxjs.timer(100, 100)));
                      testObs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toBe */2](1, Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

export {
  oneObs ,
  twoObs ,
  
}
/* oneObs Not a pure module */
