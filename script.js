
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5bf7c32a5bmsh080607ac0de7ed0p1aa04djsn24d4071a0188',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather =(city) => {
cityName.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city , options)
 .then(response => response.json())
 .then(response => {
  console.log(response)
  wind_speed.innerHTML = response.wind_speed
  wind_speed1.innerHTML = response.wind_speed
  wind_degrees.innerHTML =response.wind_degrees
  temp.innerHTML = response.temp
  temp1.innerHTML = response.temp
  humidity.innerHTML = response.humidity
  humidity1.innerHTML = response.humidity
  sunset.innerHTML = response.sunset
  min_temp.innerHTML = response.min_temp
  cloud_pct.innerHTML = response.cloud_pct
  feels_like.innerHTML = response.feels_like
  sunrise.innerHTML = response.sunrise
  max_temp.innerHTML = response.max_temp
 })
 .catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=> {
    e.preventDefault()
    getWeather(city.value)

})

getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' , options)
 .then(response => response.json())
 .then(response => {
  console.log(response)
  Mwind_speed.innerHTML = response.wind_speed
  Mwind_degrees.innerHTML =response.wind_degrees
  Mtemp.innerHTML = response.temp
  Mhumidity.innerHTML = response.humidity
  Msunset.innerHTML = response.sunset
  Mmin_temp.innerHTML = response.min_temp
  Mcloud_pct.innerHTML = response.cloud_pct
  Mfeels_like.innerHTML = response.feels_like
  Msunrise.innerHTML = response.sunrise
  Mmax_temp.innerHTML = response.max_temp
 })
 .catch(err => console.error(err));


 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
 .then(response => response.json())
 .then(response => {
  console.log(response)
  Nwind_speed.innerHTML = response.wind_speed
  Nwind_degrees.innerHTML =response.wind_degrees
  Ntemp.innerHTML = response.temp
  Nhumidity.innerHTML = response.humidity
  Nsunset.innerHTML = response.sunset
  Nmin_temp.innerHTML = response.min_temp
  Ncloud_pct.innerHTML = response.cloud_pct
  Nfeels_like.innerHTML = response.feels_like
  Nsunrise.innerHTML = response.sunrise
  Nmax_temp.innerHTML = response.max_temp
 })
 .catch(err => console.error(err));


 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata' , options)
 .then(response => response.json())
 .then(response => {
  console.log(response)
  Kwind_speed.innerHTML = response.wind_speed
  Kwind_degrees.innerHTML =response.wind_degrees
  Ktemp.innerHTML = response.temp
  Khumidity.innerHTML = response.humidity
  Ksunset.innerHTML = response.sunset
  Kmin_temp.innerHTML = response.min_temp
  Kcloud_pct.innerHTML = response.cloud_pct
  Kfeels_like.innerHTML = response.feels_like
  Ksunrise.innerHTML = response.sunrise
  Kmax_temp.innerHTML = response.max_temp
 })
 .catch(err => console.error(err));


 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
 .then(response => response.json())
 .then(response => {
  console.log(response)
  Cwind_speed.innerHTML = response.wind_speed
  Cwind_degrees.innerHTML =response.wind_degrees
  Ctemp.innerHTML = response.temp
  Chumidity.innerHTML = response.humidity
  Csunset.innerHTML = response.sunset
  Cmin_temp.innerHTML = response.min_temp
  Ccloud_pct.innerHTML = response.cloud_pct
  Cfeels_like.innerHTML = response.feels_like
  Csunrise.innerHTML = response.sunrise
  Cmax_temp.innerHTML = response.max_temp
 })
 .catch(err => console.error(err));


 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore' , options)
 .then(response => response.json())
 .then(response => {
  console.log(response)
  Bwind_speed.innerHTML = response.wind_speed
  Bwind_degrees.innerHTML =response.wind_degrees
  Btemp.innerHTML = response.temp
  Bhumidity.innerHTML = response.humidity
  Bsunset.innerHTML = response.sunset
  Bmin_temp.innerHTML = response.min_temp
  Bcloud_pct.innerHTML = response.cloud_pct
  Bfeels_like.innerHTML = response.feels_like
  Bsunrise.innerHTML = response.sunrise
  Bmax_temp.innerHTML = response.max_temp
 })
 .catch(err => console.error(err));