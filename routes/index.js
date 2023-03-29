var express = require("express");
var router = express.Router();

const carbone = require("carbone");
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  //read the data from the JSON file
  var data = JSON.parse(fs.readFileSync("./test/data.json", "utf8"));
  //read the document template
  var template = "./test/test.docx";

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
    fs.writeFileSync("./test/output." + options.convertTo, result);

    res.render("index", { title: "Check ./test/output folder" });
  });
});

module.exports = router;
