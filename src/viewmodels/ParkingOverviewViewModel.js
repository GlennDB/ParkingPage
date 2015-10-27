/**
 * Created by Glenn De Block on 20/10/2015.
 */

var vm =
{
    parkingSpots: null,
    showParkingSpots : function(elementSelector){

        if(!this.parkingSpots || typeof(this.parkingSpots) !== "object")
        {
            throw new NoParkingSpotsException("No parkingspots defined");
        }

        var el = document.querySelector(elementSelector);
        var bobTheHtmlBuilder="";

        for(var i = 0, l = this.parkingSpots.length; i <l; i++)
        {
            var p = this.parkingSpots[i];
            var perc = 0;

            var parkingClass = "parking";

            if(p.availableCapacity > 0){
                perc = ((p.availableCapacity/ p.totalCapacity)*100).toFixed(2);
            }

            if(perc === 0){
                parkingClass += " parking-full";
            }
            else if(perc<config.warningTreshold)
            {
                parkingClass += " parking-warning";
            }

            bobTheHtmlBuilder += '<li class="'+ parkingClass +'">';
            bobTheHtmlBuilder += '<p class="parking-sign">P</p>';
            bobTheHtmlBuilder += '<p class="parking-description">' + p.description + '</p>';
            bobTheHtmlBuilder += '<p class="parking-stats">' + p.availableCapacity + '/' + p.totalCapacity + '</p>';
            bobTheHtmlBuilder += '</li>';
        }

        el.innerHTML = bobTheHtmlBuilder;
    }
};

//Falsy truthy
//Falsy: null, undefined, "", false