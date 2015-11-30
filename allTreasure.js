var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

var url = "http://www.d20srd.org/srd/treasure.htm";
request(url, function (error, response, html) {
  // Object to hold item values
  var Treasure = function(roll, reward, examples){
    this.roll = roll;
    this.reward = reward;
    
    if(examples){
      this.examples = examples;
    } else {
      // Do not add property
    }
    
  };
  
  function SetTreasureItems(fromTable, toTable) {
    
    toTable.coins = {};
    toTable.goods = {};
    toTable.items = {};
    
    var currentLevel = 1;
    
    fromTable.each(function(index, element) {
      var children = $(element).children("td");
      
      var levelCol = children.eq(0).text();
      
      // Get the actual number
      var result = levelCol.match(/\d+/);
      if(result) {
        currentLevel = Number(result[0]);
      }
      
      // Do coins rolls
      var coinRollCol = children.eq(1).text();
      var coinRewardCol = children.eq(2).text();
      
      if(coinRewardCol == "—"){
        coinRewardCol = "No coins.";
      }
      
      if(coinRollCol != "" && coinRewardCol != ""){
        var newCoinsTreasure = new Treasure(coinRollCol, coinRewardCol);
        
        if(!toTable.coins[currentLevel]){
          toTable.coins[currentLevel] = new Array();
          toTable.coins[currentLevel].push(newCoinsTreasure);
        } else {
          toTable.coins[currentLevel].push(newCoinsTreasure);
        }
      }
      
      // Do goods rolls
      var goodsRollCol = children.eq(3).text();
      var goodsRewardCol = children.eq(4).text();
      
      if(goodsRewardCol == "—"){
        goodsRewardCol = "No goods.";
      }
      
      if(goodsRollCol != "" && goodsRewardCol != ""){
        var newGoodsTreasure = new Treasure(goodsRollCol, goodsRewardCol);
        
        if(!toTable.goods[currentLevel]){
          toTable.goods[currentLevel] = new Array();
          toTable.goods[currentLevel].push(newGoodsTreasure);
        } else {
          toTable.goods[currentLevel].push(newGoodsTreasure);
        }
      }
      
      // Do items rolls
      var itemsRollCol = children.eq(5).text();
      var itemsRewardCol = children.eq(6).text();
      
      if(itemsRewardCol == "—"){
        itemsRewardCol = "No items.";
      }
      
      if(itemsRollCol != "" && itemsRewardCol != ""){
        var newItemsTreasure = new Treasure(itemsRollCol, itemsRewardCol);
        
        if(!toTable.items[currentLevel]){
          toTable.items[currentLevel] = new Array();
          toTable.items[currentLevel].push(newItemsTreasure);
        } else {
          toTable.items[currentLevel].push(newItemsTreasure);
        }
      }
      
    });
    
    console.log('Gathered all treasure items.');
  };
  
  function SetGems(fromTable, toTable) {
    toTable.gems = new Array();
    
    fromTable.each(function(index, element) {
      var children = $(element).children("td");
      
      var rollCol = children.eq(0).text();
      var rewardCol = children.eq(1).text();
      var examples = children.eq(3).text().split("; ");
      
      toTable.gems.push(new Treasure(rollCol, rewardCol, examples));
    });
    
    // Remove empty first element
    toTable.gems.shift();
    
    console.log('Captured all gem items.');
    
  };
  
  function SetArt(fromTable, toTable) {
    toTable.art = new Array();
    
    fromTable.each(function(index, element) {
      var children = $(element).children("td");
      
      var rollCol = children.eq(0).text();
      var rewardCol = children.eq(1).text();
      var examples = children.eq(3).text().split("; ");
      
      toTable.art.push(new Treasure(rollCol, rewardCol, examples));
    });
    
    // Remove empty first element
    toTable.art.shift();
    
    console.log('Captured all art items.');
    
  };
  
  function SetMundane(fromTable, toTable) {
    toTable.mundaneWondrousItems = new Array();
    var subItems = new Array();
    var sub2Items = new Array();
    
    fromTable.each(function(index, element) {
      var children = $(element).children("td:not(.sub, .sub2)");
      var childrenSub = $(element).children(".sub");
      var childrenSub2 = $(element).children(".sub2");
      
      var rollCol = children.eq(0).text();
      var rewardCol = children.eq(1).text();
      
      var rollCol2 = childrenSub.eq(0).text();
      var rewardCol2 = childrenSub.eq(1).text();
      
      var rollCol3 = childrenSub2.eq(0).text();
      var rewardCol3 = childrenSub2.eq(1).text();
      
      if(rollCol != '' && rewardCol != ''){
        toTable.mundaneWondrousItems.push(new Treasure(rollCol, rewardCol));
      }
      
      if(rollCol2 != '' && rewardCol2 != ''){
        subItems.push(new Treasure(rollCol2, rewardCol2));
      }
      
      if(rollCol3 != '' && rewardCol3 != ''){
        sub2Items.push(new Treasure(rollCol3, rewardCol3));
      }
      
    });
    
    toTable.alchemyItems = subItems.slice(0, 8);
    toTable.armorItems = subItems.slice(8, 16);
    toTable.weaponItems = subItems.slice(16, 19);
    toTable.toolItems = subItems.slice(19, subItems.length);
    toTable.darkwoodArmorItems = sub2Items.slice(0, 2);
    toTable.masterworkShieldItems = sub2Items.slice(2, sub2Items.length);
    
    console.log('Captured all mundane items.');
  };

  
  // Continue if we do not receive an error, and we get a good response
	if (!error && response.statusCode == 200) {
	// Load the HTML from the url
	var $ = cheerio.load(html);
	
  // Get the table elements
  var treasureTblData = $("#tableTreasure tr");
  var gemsTblData = $("#tableGems tr");
  var artObjectsTblData = $("#tableArtObjects tr");
  var mundaneWondrousItemsTblData = $("#tableMundaneItems tr");
  
  var jsonOutput = {};
  
  SetTreasureItems(treasureTblData, jsonOutput);
  SetGems(gemsTblData, jsonOutput);
  SetArt(artObjectsTblData, jsonOutput);
  SetMundane(mundaneWondrousItemsTblData, jsonOutput);
  
  // Write output to file
  fs.writeFile("allTreasure.json", JSON.stringify(jsonOutput, null, 4));
  console.log("Wrote JSON to allTreasure.json");
    
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});