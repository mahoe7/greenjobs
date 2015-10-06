  /*global position*/

  describe("Test for listindustry function", function() {
    var missingIndustry = greenjobs.splice(0, 1);
    var missingI = missingIndustry[0].Industry;
    missingIndustry[0].Industry = "";

    var missingProperty = greenjobs.splice(0, 1);
    delete missingProperty[0].Industry;

    it("Industry field contains empty string test. Should ignore this record" + missingI, function() {
      expect(listIndustries(missingIndustry)[0]).toEqual("");
    });

    it("Missing Industry field test. Should return undefined", function() {
      expect(listIndustries(missingProperty)[0]).not.toBeDefined();
    })
  });
