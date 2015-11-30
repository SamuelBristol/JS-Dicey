var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

var url = "http://www.d20srd.org/srd/magicItems/wondrousItems.htm";
request(url, function (error, response, html) {
    // Continue if we do not receive an error, and we get a good response
  	if (!error && response.statusCode == 200) {
		// Load the HTML from the url
		var $ = cheerio.load(html);
        
        // Object to hold item values
        var Item = function(roll, reward, marketPrice, link){
          
          this.roll = roll;
          this.reward = reward;
          this.marketPrice = marketPrice;
          this.link = link;
          
        };
        
        var SetTableItems = function(fromTable, toTable) {
          fromTable.each(function(index, element) {
            var children = $(element).children("td");
            
            var roll = children.eq(0).text();
            var reward = children.eq(1).text();
            var marketPrice = children.eq(2).text();
            var link = url + children.eq(1).children("a").attr("href");
            
            toTable.push(new Item(roll, reward, marketPrice, link));
          });
        };
        
        // Get the table elements
        var minorWondrousItemsTblData = $("#tableMinorWondrousItems tr");
        var mediumWondrousItemsTblData = $("#tableMediumWondrousItems tr");
        var majorWondrousItemsTblData = $("#tableMajorWondrousItems tr");
    
        var jsonOutput = {};
        jsonOutput.minorWondrousItems = new Array();
        jsonOutput.mediumWondrousItems = new Array();
        jsonOutput.majorWondrousItems = new Array();
        
        SetTableItems(minorWondrousItemsTblData, jsonOutput.minorWondrousItems);
        SetTableItems(mediumWondrousItemsTblData, jsonOutput.mediumWondrousItems);
        SetTableItems(majorWondrousItemsTblData, jsonOutput.majorWondrousItems);
        
        // Remove empty first index
        jsonOutput.minorWondrousItems.shift();
        jsonOutput.mediumWondrousItems.shift();
        jsonOutput.majorWondrousItems.shift();
        
        fs.writeFile("allWondrousItems.json", JSON.stringify(jsonOutput, null, 4));
        console.log("Wrote JSON to allWondrousItems.json");
    
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});