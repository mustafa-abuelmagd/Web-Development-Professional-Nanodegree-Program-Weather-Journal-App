

/* Global Variables */

// Create a new date instance dynamically with JS


let d = new Date();
let newDate = (d.getMonth() +1)+ '.' + d.getDate() + '.' + d.getFullYear();


const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const api = '&appid=7c6f63072319a60bed0bffe8fb53c63e&units=imperial';
document.getElementById('generate').addEventListener('click', performAction);




const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
    date: data.date,
    temp: data.temp,
    feels_like: data.feels_like,
    feeling: data.feeling,
  });

  try {
    const newData = await response.json();
    
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}


//what is going to happen when we click generate 
function performAction(e) {
  e.preventDefault();
  //getting the zip code from the text field that the user puts
  const zipCode = document.getElementById('zip').value;

  //same goes for the feeling text field
  const feeling = document.getElementById('feelings').value;

  //actually getting the weather data after specifying the zip code and the feeling 
  getWeather(url, zipCode, api)

    // then post requesting the data
    .then(function (userData) {
      postData('/add', { date: newDate, temp: userData.main.temp, feels_like: userData.main.feels_like, feeling })

    }).then(function (newData) {
      // call updateUI to update browser content
      updateUI()
    })
  }

//getting the data from the url using fetch and using async fucntion 
const getWeather = async (url, zipCode, api) => {

  //forming the new link we're getting the data from 
  const res = await fetch(url + zipCode + api)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log("error", error);
  }
}


//updating ui elements from the data received 
const updateUI = async () => {
  const req = await fetch('/all');
  try{
    const allData = await req.json();
    document.getElementById('temp').innerHTML = `TEMPERATURE IS: ${allData.temp}`;
    document.getElementById('date').innerHTML = `DATE IS: ${allData.date}`;
    document.getElementById('content').innerHTML = `Feeling: ${allData.feeling}` ;
    
    //the update UI function was mentioned in the lessons so I almost didn't change anything about it
    document.getElementById('feels_like').innerHTML = `FEELS LIKE: ${allData.feels_like}` ;


  }catch(error){
    console.log("error", error);
  }
}
