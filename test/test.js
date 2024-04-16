const expect = require("chai").expect;
const request = require("request");

describe("Add Two Numbers API", function() {
    const baseUrl = "http://localhost:8080/api/addTwoNumbers/";

    it("returns status 200 and the correct result for valid numbers", function(done) {
        request(baseUrl + "3/5", function(error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(data.result).to.equal(8);
            done();
        });
    });

    it("returns status 400 for invalid numbers", function(done) {
        request(baseUrl + "a/b", function(error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(400);
            expect(data.result).to.be.null;
            done();
        });
    });
});

