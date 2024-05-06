
const map = L.map('map').setView([-34.9287, 138.6007], 13); // default ([0, 0], 0) Adelaide as center with zoom level 13
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributers';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(map);

const api_url = 'https://api.songkick.com/api/3.0';

async function getEvent() {

    try {
        const response = await fetch(api_url);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);



    } catch(error) {
        console.error(error);
    }

}

