 let currentconditionHtml ="";
            async function getweather(){
                try{
                  let response = await fetch('https://wttr.in/London?format=j1');  
                  let data = await response.json()
                  console.log('feelslikec:',data.current_condition[0].FeelsLikeC);

                }      
                catch(error){
                    console.log('error',error);
                }          
            }
            getweather();