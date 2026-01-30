document.querySelector('.loader').style.display = 'none';

document.querySelector('.current').style.display="none";
let currentconditionHtml ="";


            async function getweather(){
                try{
                   
                  let city= document.getElementById('city').value.trim();
                  if(!city){
                    alert('Please enter a valid name');
                    return;
                  }
                  document.querySelector('.loader').style.display = 'block';
                  let response = await fetch(`https://wttr.in/${city}?format=j1`); 
                  
                  let data = await response.json()
                  console.log(data);
             
                  
                   if(data.nearest_area[0].areaName[0].value!= 'New Found Out' && city!=''){
                    document.querySelector('.loader').style.display = 'none';
                    document.querySelector('.current').style.display="block";
                  
                  currentconditionHtml =`
                  
                  <div class="results">
                   <div class=situ>The Current weather in ${city} </div>
                    <div class=feelslikeC>Feels Like(C) : ${data.current_condition[0].FeelsLikeC}</div>
                    <div class=feelslikeF>Feels Like(F) ${data.current_condition[0].FeelsLikeF}</div>
                    <div class=humidity>Humidity : ${data.current_condition[0].humidity}</div>
                   <div class=situation>${data.current_condition[0].weatherDesc[0].value}</div>
                   <div class="time">Local Observation Time : ${data.current_condition[0].localObsDateTime}</div>
                   </div>
                   `

                    document.querySelector('.current')
                    .innerHTML= currentconditionHtml;}
                    else {
                       document.querySelector('.loader').style.display = 'none';
                      alert(`Please Enter a valid name!`);

                    

                    }}
                   
                  
                catch(error){
                    console.log('error',error);
                     document.querySelector('.loader').style.display = 'none';
                    document.querySelector('.current').innerHTML ='Please Try Again';
                }          
            }
         
            