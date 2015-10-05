(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

      	showMap: function () {
            if (!this.checkSimulator()) {
              	Mapbox.show(
                  {
                    style: 'emerals',
                    margins: {
                      'left': 0,
                      'right': 0,
                      'top': 316,
                      'bottom': 50
                    },
                    center: {
                      lat: 52.3702160,
                      lng: 4.8951680
                    },
                    zoomLevel: 12, // 0 (the entire world) to 20, default 10
                    showUserLocation: true, // default false
                    hideAttribution: true, // default false
                    hideLogo: true, // default false
                    hideCompass: false, // default false
                    disableRotation: false, // default false
                    disableScroll: false, // default false
                    disableZoom: false, // default false
                    disablePitch: false, // default false
                    markers: [
                      {
                        'lat': 52.3732160,
                        'lng': 4.8941680,
                        'title': 'Nice location',
                        'subtitle': 'Really really nice location'
                      }
                    ]
                  },
                  this.onSuccess,
                  this.onError
            )}
        },

        hideMap: function () {
            if (!this.checkSimulator()) {
              	Mapbox.hide(
                  {},
                  this.onSuccess,
                  this.onError
                );
            }
        },

        addMarkers: function () {
            if (!this.checkSimulator()) {
              	Mapbox.addMarkers(
	                [
                    {
                      'lat': 52.3602160,
                      'lng': 4.8891680,
                      'title': 'One-line title here', // no popup unless set
                      'subtitle': 'This text can span multiple lines on Android only.'
                    },
                    {
                      'lat': 52.3702160,
                      'lng': 4.8911680,
                      'title': 'Nu subtitle for this one' // iOS: no popup unless set, Android: an empty popup -- so please add something
                    }
                  ],
                  this.onSuccess,
                  this.onError
                );
            }
        },
      
        addPolygon: function () {
            if (!this.checkSimulator()) {
              	Mapbox.addPolygon(
                  {
                    points: [
                      {
                        'lat': 52.3832160,
                        'lng': 4.8991680
                      },
                      {
                        'lat': 52.3632160,
                        'lng': 4.9011680
                      },
                      {
                        'lat': 52.3932160,
                        'lng': 4.8911680
                      }
                    ]
                  },
                  this.onSuccess,
                  this.onError
                );
            }
        },
      
        setCenter: function () {
            if (!this.checkSimulator()) {
              	Mapbox.setCenter(
                  {
                    lat: 52.3602160,
                    lng: 4.8891680,
                    animated: true
                  },
                  this.onSuccess,
                  this.onError
                );
            }
        },

        getCenter: function () {
            if (!this.checkSimulator()) {
              	Mapbox.getCenter(
                  this.onSuccessWithAlert
                );
            }
        },

        setZoomLevel: function () {
            if (!this.checkSimulator()) {
              	Mapbox.setZoomLevel(
                  {
                    level: 10,
							      animated: true
                  },
                  this.onSuccess,
                  this.onError
                );
            }
        },

        getZoomLevel: function () {
            if (!this.checkSimulator()) {
              	Mapbox.getZoomLevel(
                  this.onSuccessWithAlert
                );
            }
        },

	      checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.Mapbox === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        },

        // callbacks
        onSuccess: function(msg) {
            console.log('Mapbox success: ' + msg);
        },

        onSuccessWithAlert: function(msg) {
            alert(JSON.stringify(msg));
        },

        onError: function(msg) {
            alert('Mapbox error: ' + msg);
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);