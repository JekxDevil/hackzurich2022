var dataset = [
    {
        "Question": "According to climate projections, which place in Switzerland would be the hottest & in which year?",
        "Latitude": 46.16666667,
        "Longitude": 8.791666667,
        "Year": 2069,
        "For Answer 1": "",
        "For Answer 2": ""
    },
    {
        "Question": "Which glacier in switzerland is melting the fastest?",
        "Latitude": 46.384611,
        "Longitude": 9.841712,
        "Year": 1500,
        "For Answer 1": "",
        "For Answer 2": ""
    },
    {
        "Question": "thrww",
        "Latitude": 46.16666667,
        "Longitude": 8.791666667,
        "Year": 2086,
        "For Answer 1": "",
        "For Answer 2": ""
    },
    
    {
        "Question": "four",
        "Latitude": 46.16666667,
        "Longitude": 8.791666667,
        "Year": 2086,
        "For Answer 1": "",
        "For Answer 2": ""
    }
];


console.log(dataset[0].Question)


function generateQuestion() {

    console.log("page got refereshed");

    // UNCOMMENT BELOW
    var questionID = parseInt(localStorage.getItem("questionID"));

    // COMMENT OUT THE BELOW BEFORE DEPLOYMENT
    // var questionID=parseInt(1);
    // questionID--;


    document.getElementById("Question").innerHTML = (dataset[(parseInt(questionID))].Question);


}
