let city = 'moscow';

const loc = document.querySelector(".title");
const temp = document.querySelector("#tmpCount");
const feelslike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windSpeed");

let cel = true;


async function getData(city) {
    
    try {
        const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=07b1eb7a4dcd44a18ba42836232604&q=${city}`);
        const response = await data.json();


        loc.innerHTML = response.location.name;

        if (cel) {
            temp.innerHTML = response.current.temp_c + ' C';

            feelslike.innerHTML = 'Feels like: ' + response.current.feelslike_c + ' C';
        } else {
            temp.innerHTML = response.current.temp_f + ' F';

            feelslike.innerHTML = 'Feels like: ' + response.current.feelslike_f + ' F';
        }

        humidity.innerHTML = 'Humidity: ' + response.current.humidity + ' %';

        windSpeed.innerHTML = 'Wind speed: ' + response.current.wind_kph + ' km/h';

        document.querySelector("#icon").src = 'http:' + response.current.condition.icon;
    }
    catch(err) {
        console.log(err);
    }

}

function btn() {
    city = document.querySelector('#inp').value;
    getData(document.querySelector('#inp').value);
}

document.querySelector('button').addEventListener('click', () => {
    btn();
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        btn();
    }
});


document.querySelector('.slider').addEventListener('click', () => {

    document.querySelector('.slider').classList.toggle('fr');
    if (cel) cel = false;
    else cel = true;

    getData(city);

    
});
getData(city);