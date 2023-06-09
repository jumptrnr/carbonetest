var express = require("express");
var router = express.Router();

const carbone = require("carbone");
const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  //read the data from the JSON file
  var data = JSON.parse(fs.readFileSync("./test/data.json", "utf8"));

  //read the document template t7tran library only working with odt for now
  var template = "./test/test.odt";

  //doesn't work with docx
  //var template = "./test/test.docx";

  var options = {
    lang: "en-us", // String, output lang of the report
    reportName: "Report", // String, dynamic file name, output in third argument of the callback
    convertTo: "pdf",
  };

  //use the carbone render function to render the document
  carbone.render(template, data, options, function (err, result) {
    if (err) {
      res.render("index", { title: "Error" });
      return console.log(err);
    }
    //write the result to a file
    var fileName = "output." + options.convertTo;
    var filePath = path.join(__dirname, "../test/", fileName);
    fs.writeFileSync(filePath, result);

    //send the file as response
    res.sendFile(filePath);
  });
});

module.exports = router;
