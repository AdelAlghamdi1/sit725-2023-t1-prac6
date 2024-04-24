// test/test.js
import { expect } from 'chai';
import request from 'request';
const baseUrl = "http://localhost:3000/api/card";

describe("API Tests", function() {
    it("add a new card using POST and return the result", function(done) {
        const options = {
            method: 'POST',
            url: baseUrl + '/addCard',
            json: true,
            body: {
                title: "New Card Title",
                image: "images/cat1.png",
                link: "#",
                description: "Description of the new card"
            }
        };
        request(options, function(error, response, body) {
            expect(response.statusCode).to.equal(201);
            expect(body.card.title).to.equal("New Card Title");
            done();
        });
    });

    it("retrieve all cards using GET and return the result", function(done) {
        request(baseUrl + '/getAllCards', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            const cards = JSON.parse(body);
            expect(cards).to.be.an('array');
            done();
        });
    });
});
