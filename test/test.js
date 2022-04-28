const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Bonjour toto!", (done) => {
        request(app).get("/").expect("Bonjour toto!", done);
    })
});