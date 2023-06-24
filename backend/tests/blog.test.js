const mongoose = require("mongoose");
const request = require("supertest");
const index = require("../index");
require("dotenv").config();

beforeEach(async()=>{
    await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async()=>{
    await mongoose.connection.close();
});


describe("GET /api/blogs", ()=>{
    it("should return all blogs", async()=>{
        const res = await request(index).get("/api");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});