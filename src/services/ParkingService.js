/**
 * Created by Glenn De Block on 20/10/2015.
 */

//Module, ze zien er altijd hetzelfde uit. Je vangt ze op in een modulevariable.

var parkingService = (function(){

    //Geen variabele zonder var,...
    "use strict";

    //Private

    //Public api
    return {

        get: function(){

            //window.document
            //$.getJSON  -> kan je niet gebruiken in webservice, je kan niet aan $/ je window

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.url, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200){
                var data = JSON.parse(xmlHttp.responseText);
                var parkings = [];

                for(var i = 0, l = data.Parkings.parkings.length; i<l; i++){

                    var o = data.Parkings.parkings[i];
                    if(o.availableCapacity === ""){o.availableCapacity = 0;}
                    var newP = new Parking(
                        o.name,
                        o.description,
                        o.address,
                        o.availableCapacity,
                        o.totalCapacity

                    );

                    parkings.push(newP);
                }

                return parkings;
            }

        },

        getById: function(){
            
        }

    };

})();