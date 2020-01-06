
var city = $("#city").val().trim();
var units = "&units=imperial";
var apiKey = "&APPID=b4c0df4313eab8d2235e613c40604980";
var currentURL = "weather?q=";
var forecastURlL = "forecast?q=";
var apiPath = "https://api.openweathermap.org/data/2.5/";
var queryURLCurrent = apiPath + currentURL + city + units + apiKey;
var queryURLForecast = apiPath + forecastURlL + city + units + apiKey;

$(document).ready(function () {

    $("#searchBtn").on("click", function () {

        var city = $("#city").val().trim();
        var units = "&units=imperial";
        var apiKey = "&APPID=b4c0df4313eab8d2235e613c40604980";

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + units + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET",
        })
            .then(function (response) {
                // $(".list-group").prepend("<li class= list-group-item>" + city + "</li>"); //

                localStorage.setItem("city name", city);


                ////////////


                var searchName = response.name;
                var currentTemp = response.main.temp;
                var currentWS = response.wind.speed;
                var currentHumidity = response.main.humidity;
                var currentIcon = response.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + currentIcon + ".png";



                $("#cityName").text(searchName + " Weather Details " + "(" + m + ")");
                $("#wicon").attr("src", iconUrl);
                $("#wS").text("Wind Speed: " + currentWS);
                $("#humidity").text("Humidity %: " + currentHumidity);
                $("#temp").text("Temperature (F) " + currentTemp);


            });

            var cityStorage = localStorage.getItem("city name");
            $(".list-group").prepend("<li class='list-group-item col-md-4'>" + cityStorage + "</li>")

    });

    var m = moment().format('L');

    $(".list-group-item").on("click", function () {

        var listCity = $(this).text();
        var units = "&units=imperial";
        var apiKey = "&APPID=b4c0df4313eab8d2235e613c40604980"

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + listCity + units + apiKey;


        $.ajax({
            url: queryURL,
            method: "GET",
        })

            .then(function (response) {

                console.log(response);

                var searchName = response.name;
                var currentTemp = response.main.temp;
                var currentWS = response.wind.speed;
                var currentHumidity = response.main.humidity;
                var currentIcon = response.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + currentIcon + ".png";

                $("#cityName").text(searchName + " Weather Details " + "(" + m + ")");
                $("#wicon").attr("src", iconUrl);
                $("#wS").text("Wind Speed: " + currentWS);
                $("#humidity").text("Humidity %: " + currentHumidity);
                $("#temp").text("Temperature (F) " + currentTemp);






            });

        $(".list-group-item").on("click", function () {

            var listCity = $(this).text();
            var units = "&units=imperial";
            var apiKey = "&APPID=b4c0df4313eab8d2235e613c40604980"

            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + listCity + units + apiKey;


            $.ajax({
                url: queryURL,
                method: "GET",
            })
                .then(function (response) {

                    console.log(response);

                    var cityForecastName = response.city.name;

                    $("#forecastTitle").text(cityForecastName + " 5 Day Forecast:")

                    //creating forecast temps//

                    var day1Temp = response.list[0].main.temp;
                    var day2Temp = response.list[1].main.temp;
                    var day3Temp = response.list[2].main.temp;
                    var day4Temp = response.list[3].main.temp;
                    var day5Temp = response.list[4].main.temp;

                    $("#temp1").text("Temperature (F) " + day1Temp);
                    $("#temp2").text("Temperature (F) " + day2Temp);
                    $("#temp3").text("Temperature (F) " + day3Temp);
                    $("#temp4").text("Temperature (F) " + day4Temp);
                    $("#temp5").text("Temperature (F) " + day5Temp);

                    //creating forecast humidity//

                    var day1Humid = response.list[0].main.humidity;
                    var day2Humid = response.list[1].main.humidity;
                    var day3Humid = response.list[2].main.humidity;
                    var day4Humid = response.list[3].main.humidity;
                    var day5Humid = response.list[4].main.humidity;

                    $("#humid1").text("Humidity %: " + day1Humid);
                    $("#humid2").text("Humidity %: " + day2Humid);
                    $("#humid3").text("Humidity %: " + day3Humid);
                    $("#humid4").text("Humidity %: " + day4Humid);
                    $("#humid5").text("Humidity %: " + day5Humid);

                    //creating date//

                    var m = moment().format('LL')

                    var date1 = moment(m).add(1, 'days').calendar();
                    var date2 = moment(m).add(2, 'days').calendar();
                    var date3 = moment(m).add(3, 'days').calendar();
                    var date4 = moment(m).add(4, 'days').calendar();
                    var date5 = moment(m).add(5, 'days').calendar();

                    $("#date1").text(date1);
                    $("#date2").text(date2);
                    $("#date3").text(date3);
                    $("#date4").text(date4);
                    $("#date5").text(date5);

                    //creating image icons//

                    var icon1 = response.list[0].weather[0].icon;
                    var icon2 = response.list[1].weather[0].icon;
                    var icon3 = response.list[2].weather[0].icon;
                    var icon4 = response.list[3].weather[0].icon;
                    var icon5 = response.list[4].weather[0].icon;

                    var iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
                    var iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
                    var iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
                    var iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
                    var iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";

                    $("#image1").attr("src", iconUrl1);
                    $("#image2").attr("src", iconUrl2);
                    $("#image3").attr("src", iconUrl3);
                    $("#image4").attr("src", iconUrl4);
                    $("#image5").attr("src", iconUrl5);




                })

        })

    })

    $("#searchBtn").on("click", function () {
        var city = $("#city").val().trim();
        var units = "&units=imperial";
        var apiKey = "&APPID=b4c0df4313eab8d2235e613c40604980";

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + units + apiKey;


        $.ajax({
            url: queryURL,
            method: "GET",
        })
            .then(function (response) {

                //creating forecast title//

                var cityForecastName = response.city.name;

                $("#forecastTitle").text(cityForecastName + " 5 Day Forecast:")

                //creating forecast temps//
                var day1Temp = response.list[0].main.temp;
                var day2Temp = response.list[1].main.temp;
                var day3Temp = response.list[2].main.temp;
                var day4Temp = response.list[3].main.temp;
                var day5Temp = response.list[4].main.temp;

                $("#temp1").text("Temperature (F) " + day1Temp);
                $("#temp2").text("Temperature (F) " + day2Temp);
                $("#temp3").text("Temperature (F) " + day3Temp);
                $("#temp4").text("Temperature (F) " + day4Temp);
                $("#temp5").text("Temperature (F) " + day5Temp);

                //creating forecast humidity//

                var day1Humid = response.list[0].main.humidity;
                var day2Humid = response.list[1].main.humidity;
                var day3Humid = response.list[2].main.humidity;
                var day4Humid = response.list[3].main.humidity;
                var day5Humid = response.list[4].main.humidity;

                $("#humid1").text("Humidity %: " + day1Humid);
                $("#humid2").text("Humidity %: " + day2Humid);
                $("#humid3").text("Humidity %: " + day3Humid);
                $("#humid4").text("Humidity %: " + day4Humid);
                $("#humid5").text("Humidity %: " + day5Humid);

                //creating date//

                var m = moment().format('LL')

                var date1 = moment(m).add(1, 'days').calendar();
                var date2 = moment(m).add(2, 'days').calendar();
                var date3 = moment(m).add(3, 'days').calendar();
                var date4 = moment(m).add(4, 'days').calendar();
                var date5 = moment(m).add(5, 'days').calendar();

                $("#date1").text(date1);
                $("#date2").text(date2);
                $("#date3").text(date3);
                $("#date4").text(date4);
                $("#date5").text(date5);

                // creating image icons//

                var icon1 = response.list[0].weather[0].icon;
                var icon2 = response.list[1].weather[0].icon;
                var icon3 = response.list[2].weather[0].icon;
                var icon4 = response.list[3].weather[0].icon;
                var icon5 = response.list[4].weather[0].icon;

                var iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
                var iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
                var iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
                var iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
                var iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";

                $("#image1").attr("src", iconUrl1);
                $("#image2").attr("src", iconUrl2);
                $("#image3").attr("src", iconUrl3);
                $("#image4").attr("src", iconUrl4);
                $("#image5").attr("src", iconUrl5);


            })

    })

});









