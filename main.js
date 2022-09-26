// initializing Mapbox
mapboxgl.accessToken='pk.eyJ1IjoibmF2MTI2IiwiYSI6ImNsOGlzZmc2bjFhdDYzdXF4MjY0YXY3YmoifQ.1i1nExgBi1iD72zCXiuuPA'

let latitude=19.003490, longitude=73.956146

var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:15
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)