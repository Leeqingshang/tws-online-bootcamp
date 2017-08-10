"use strict";


let main = require("../lib/main.js");


describe("coding and number",function(){
    it('get number',function(){
        let number = `95713`;
        let result = main(number);

        let expect_string = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        expect(expect_string).toEqual(result);
    });

    it('get number',function(){
        let number = `95713-1`;
        let result = main(number);

        let expect_string = '| |:|:: :|:|: |:::| :::|| ::||: :::|| :|::| |';
        expect(expect_string).toEqual(result);
    });

    it('get coding',function(){
        let coding = `| |:|:: :|:|: |:::| :::|| ::||: :|:|: |`;
        let result = main(coding);

        let expect_string = '95713';
        expect(expect_string).toEqual(result);
    });
});


