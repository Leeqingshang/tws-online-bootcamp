"use strict";

var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

let main = require("../lib/main.js");
let lyrics = require('../lyrics.js');

describe("99 bottles beer on the wall",function(){

    it('test 3',function(){
        let result = main(2);
        let lyric = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(lyric).to.equal(result);
    }) 

    it('test 3',function(){
        let result = main(3);
        let lyric = `3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(lyric).to.equal(result);
    }) 
    it("test 99",function(){
        let result = main(99);
        let lyric = lyrics();
        expect(lyric).to.equal(result);
    });
});


