var dataset = [
    {
        "Question": "According to Swiss climate projections, which location would see the highest temperature?",
        "Latitude": 46.166666666666664,
        "Longitude": 8.791666666666666,
        // "Year": 2069,
        "ForAnswer1": "The temperature in the Locarno (Ticino) will be 42.16501 C",
        "ForAnswer2": "In mitigated scenario (RCP 2.6) Projected Temperature for 15 July 2069 & worst case no migration scenario (RCP 85) Projected Temperature for 15 July 2069",
        "ForAnswer3":"q1.png",
        "Fact": "The Sahara Desert 🏜️ is one of the driest and hottest regions of the world, with a mean temperature sometimes over 30 °C (86 °F) and the average high temperatures in summer are over 40 °C (104 °F) for months at a time."
        
    },
    {
        "Question": "Which glacier in switzerland is melting the fastest?",
        "Latitude": 46.384611,
        "Longitude": 9.841712,
        // "Year": 2086,
        "ForAnswer1": "The Vadret da Roseg glacier", 
        "ForAnswer2": "",
        "ForAnswer3":"q2.jpg",
        "Fact": "🏂 The melting of the Glaciers reveals skier impacts exacerbate climate change https://www.powder.com/stories/is-skiing-good-for-glacier-health-or-speeding-their-demise"
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
