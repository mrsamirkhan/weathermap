const apiKey = `e9524d8571b3d698b066eedf9ea2a45e`;




//======================================

const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    // console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemp(data))

}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText('temperature', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const icon = document.getElementById('weather-icon');
    icon.setAttribute('src', url);
    // console.log(temp);
}