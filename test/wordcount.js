
  'use strict';
var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/library.js');

 
describe('Return number of wordCount in an Array `wordCount`', function () {

      it('should return 4 for ("My name is stella"))', function () {
        expect(myApp.wordCount(("My name is stella"))).to.eql(4);
      });

       it('should return 3 for ("What is this"))', function () {
        expect(myApp.wordCount(("What is this"))).to.eql(3);
      });

       it('should return 1 for ("My"))', function () {
        expect(myApp.wordCount(("My"))).to.eql(1);
      });


       it('should return 0 for (""))', function () {
        expect(myApp.wordCount((""))).to.eql(0);
      });

    });

