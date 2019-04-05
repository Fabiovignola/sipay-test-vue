var app = new Vue({
    el: '#app',
    data: {
        allDogsName: [],
        allDogs: [],
        printImagen: "affenpinscher",
        urldog: "https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg",
        url: "",

    },
    created: function () {
        this.callAjax();
        //        this.allPrint();
    },
    methods: {
        callAjax: function () {
            fetch("https://dog.ceo/api/breeds/list/all", {
                method: "GET",

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).then(function (json) {
                data = json;
                console.log(json);
                app.allDogsName = data.message;
                console.log(app.allDogsName);

                ;
            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });
        },
        allPrint: function (key) {
            var selectedEvent = event.target;
            var election = selectedEvent.getAttribute("data-option");
            console.log(election);


            fetch("https://dog.ceo/api/breed/" + election + "/images/random", {
                    method: "GET",

                }).then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    app.url = myJson.message;
                    console.log(myJson);
                    console.log(app.url);

                }).catch(function (error) {
                    console.log("Request failed:" + error.message);
                });
        },

    }
});
