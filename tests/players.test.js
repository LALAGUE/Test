const request = require("supertest");
let server = require("../index");

describe("GET /", () => {
  it("Return all players sorted by their id", async () => {
    const res = await request(server).get("/players");
    expect(res.status).toBe(200);
  });

  it("The route returns all the objects", async () => {
    const res = await request(server).get("/players");
    expect(res.body.length).toBe(5);
  });
});

describe("GET /:id", () => {
  it("Returns the player with the specified id", async () => {
    const res = await request(server).get("/players/17");
    expect(res.status).toBe(200);
  });

  it("Return 404 if the player doesn't exist", async () => {
    const res = await request(server).get("/players/100");
    expect(res.status).toBe(404);
  });

  it("Check if the response is not null", async () => {
    const res = await request(server).get("/players/17");
    expect(res.body).not.toBeNull();
  });

  it("Check if the returned object matches", async () => {
    const res = await request(server).get("/players/17");
    expect(res.body[0]).toEqual({
      id: 17,
      firstname: "Rafael",
      lastname: "Nadal",
      shortname: "R.NAD",
      sex: "M",
      country: {
        picture:
          "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
        code: "ESP"
      },
      picture:
        "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      data: {
        rank: 1,
        points: 1982,
        weight: 85000,
        height: 185,
        age: 33,
        last: [1, 0, 0, 0, 1]
      }
    });
  });
});
