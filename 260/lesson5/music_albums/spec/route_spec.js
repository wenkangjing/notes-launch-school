var request = require("request"),
    root = "http://localhost:3000/",
    albums;

describe("JSON Routs", function() {
  describe("/albums.json", function() {
    // jasmine-node asyn test
    it("returns an array of albums", function(done){
      request(root + "albums.json", function(error, response, body) {
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        //expect(true).toBeFalsy();
        done();
      });
    });
  });

  describe("/albums/<album>.json", function() {
    it("returns an array of tracks", function(done) {
      request(root + "albums/" + albums[0].title + ".json", function(err, resp, body) {
        expect(JSON.parse(body)[0].title).toBeDefined();
        //expect(true).toBeFalsy();
        done();
      });
    });
  });
});