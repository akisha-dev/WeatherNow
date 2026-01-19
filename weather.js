document.querySelector('.loader').style.display = 'none';
let currentconditionHtml ="";
            async function getweather(){
                try{

                  let city= document.getElementById('city').value;
                  let response = await fetch(`https://wttr.in/${city}?format=j1`); 
                  document.querySelector('.loader').style.display = 'block';
                  let data = await response.json()
                  console.log(data);
                
                  document.querySelector('.loader').style.display = 'none';
                   if(data.nearest_area[0].areaName[0].value!= 'New Found Out'){
                  currentconditionHtml =`
                  <div class="results">
                   <div class=situ>THE CURRENT WEATHER IN ${city} </div>
                   <div class="time">Local Observation Time : ${data.current_condition[0].localObsDateTime}</div>
                   <div class=tempC>Temperature(in Celsius) : ${data.current_condition[0].temp_C}</div>
                    <div class=tempF>Temperature(in Farheniet) : ${data.current_condition[0].temp_F}</div>
                    <div class=situation>${data.current_condition[0].weatherDesc[0].value}
                    <div class=feelslikeC>Feels Like(C) : ${data.current_condition[0].FeelsLikeC}</div>
                    <div class=feelslikeF>Feels Like(F) ${data.current_condition[0].FeelsLikeF}</div>
                    <div class=humidity>Humidity : ${data.current_condition[0].humidity}</div>
                    </div>
                   `

                    document.querySelector('.current')
                    .innerHTML= currentconditionHtml;}
                    else{
                        
                    document.querySelector('.current')
                    .innerHTML= `${city} not found`;

                    }
                   
                }      
                catch(error){
                    console.log('error',error);
                     document.querySelector('.loader').style.display = 'none';
                    document.querySelector('.current').innerHTML = `${error} Please Try Again`;
                }          
            }
         
            