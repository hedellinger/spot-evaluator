Ext.define('SpotEvaluator.view.SEMap', {
    extend: 'Ext.Map',
    xtype:'semap',
    config: {
        mapOptions: {
            center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
            zoom : 16,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
        },
        listeners: {
            maprender: function(oComp, oMap) {
                navigator.geolocation.getCurrentPosition(function(position){
            
                    var foundCircles = {};
                    
                    var createCircle = function(circleOption){
                       var circle = new google.maps.Circle(circleOptions);
                       google.maps.event.addListener(circle, 'mousedown', function(ev){
                           Ext.Msg.alert("ABC Company","123 Main Street");                                               
                        });
                        return circle;
                    }

                    var getRandomInRange = function(from, to, fixed) {
                        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
                    };

                    var getRandomColor = function(){
                       var color   = Math.floor((Math.random() * 3) + 1);
                       var red     = "#FF0000";
                       var green   = "#00FF00";
                       var yellow  = "#FFFF00";
                       
                       switch(color){
                         case 1: return red; break;
                         case 2: return green; break;
                         case 3: return yellow; break;
                         default : return red; break;
                       }
                    };
            
                    var geolat = position.coords.latitude;
                    var geolong = position.coords.longitude;
                    var position = new google.maps.LatLng(geolat ,geolong );
                    
                    //screenshots purposes
                    /*var geolat = 33.689456;
                    var geolong = -117.874016;
                    var position = new google.maps.LatLng(geolat ,geolong);*/
                    
                    var maxDif   = 0.009999;
                    for (var i = 0; i <= 40; i++) {
                        var latpos      = getRandomInRange(geolat - maxDif, geolat + maxDif, 6);
                        var longpos     = getRandomInRange(geolong - maxDif, geolong + maxDif, 6);
                        var auxposition = new google.maps.LatLng(latpos ,longpos);
                        var auxcolor       =  getRandomColor();

                        var circleOptions = {
                          strokeColor: auxcolor,
                          strokeOpacity: 0.8,
                          strokeWeight: 2,
                          fillColor: auxcolor,
                          fillOpacity: 0.35,
                          map: oMap,
                          center: auxposition,
                          radius: 35
                        };  
                        
                        foundCircles[i] = createCircle(circleOptions);
                    };
                   
                    setTimeout(function() {
                        oMap.panTo(position);
                        setTimeout(function(){
                            var oBodyPanel = Ext.ComponentQuery.query('#bodyPanel')[0];
                            oBodyPanel.setMasked(false);
                        }, 1000);
                    }, 1000);

                }, function(){});
            }
        }
    },
    initialize: function(){
      //without this function map is not shown :/  
    }
});