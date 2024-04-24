const expect = require("chai").expect;
const request = require("request");

const baseUrl = "http://localhost:8080/api/";

describe("API Tests", function() {
    it("add two numbers using POST and return the result", function(done) {
        const options = {
            method: 'POST',
            url: baseUrl + 'addTwoNumbers',
            json: true,
            body: {
                firstNumber: 5,
                secondNumber: 3
            }
        };
        request(options, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body.result).to.equal(8);
            done();
        });
    });

    it("retrieve the last result using GET", function(done) {
        request(baseUrl + 'getResult', function(error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(data.result).to.equal(8);
            done();
        });
    });
});