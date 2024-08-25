const socket = io();

if (navigator.geolocation) {
    console.log("Geolocation is available");
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log("Position acquired:", latitude, longitude);
        socket.emit("send-location", { latitude, longitude });
    }, (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
        }
    }, {
        enableHighAccuracy: true,
        timeout: 10000, // Increase the timeout value
        maximumAge: 0
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Rajan Mandanka"
}).addTo(map)

const markers = {};

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    console.log("Received location:", id, latitude, longitude);
    map.setView([latitude, longitude]);
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on("user-disconnected", (id) => {
    console.log("User disconnected:", id);
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
