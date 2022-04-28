const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Bonjour Bonjour!", (done) => {
        request(app).get("/").expect("Bonjour Bonjour!", done);
    })
});