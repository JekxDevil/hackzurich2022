var dataset=[
    {
      "Question": "According to climate projections, which place in Switzerland would be the hottest?",
      "Latitude": 46.16666667,
      "Longitude": 8.791666667,
      "Year": 2086,
      "For Answer 1": "",
      "For Answer 2": ""
    }
  ];

console.log(dataset[0].Question)


function generateQuestion(){

    console.log("page got refereshed");

    // UNCOMMENT BELOW
    // var questionID= parseInt(localStorage.getItem("questionID"));

    // COMMENT OUT THE BELOW BEFORE DEPLOYMENT
    var questionID=parseInt(1);
    document.getElementById("Question").innerHTML = (dataset[(questionID-1)].Question);

  
}
  