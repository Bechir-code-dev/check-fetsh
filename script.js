let btn=document.getElementById('btn');
let KEY='66ec922dd1dfcf94e8055946ffcb0034';

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let input = document.getElementById('input').value;
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${KEY}&units=metric`

axios.get(URL).then((response)=>{const data=response.data;
    console.log(data);
    let pays = document.getElementById('pays');
    let weather = document.getElementById('weather');
    let wind = document.getElementById('wind');
    pays.innerHTML=`Your country is :${data.name}`;
    weather.innerHTML=`The weather of your country is :${data.weather[0].description}`
    wind.innerHTML=`The speed of the wind is :${data.wind.speed}`
}).catch((err)=>console.error(err));










})