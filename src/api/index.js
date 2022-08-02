import axios from "axios";

//const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async(type, sw, ne) => {
    try{
          //const response = await axios.get();
          const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,                   
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'df6c504516msh938c3dc409d2514p1b236djsn9e85e25917b2',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
       return data;
       

    } catch(error){
        console.log(error)

    }
}

export const getWeatherData = async(lat, lng) => {
  try{
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {
        lon: lng,
        lat: lat,
      },
      headers: {
        'X-RapidAPI-Key': 'a59f103255msh0d70af832f4c9f6p1d2b1djsn5bf857180214',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    });
    console.log(data);
    return data;
  }
  
  catch(error){
    console.log(error)
  }
}



