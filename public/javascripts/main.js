window.onload = () => {
  
    getPlace() 
}
  
  
function getPlace() {
  const param = location.pathname.split("/").reverse()[0]
    axios.get(`/api/${param}` )
      .then(thePlace => {
          console.log(thePlace.data.lon)
      placeLocation(thePlace.data)})
      .catch(err => console.log(err))
}
  
  
function placeLocation(thePlace) {
    
    const locatedAt = {
      lat: thePlace.lat,
      lng: thePlace.lon
    }

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: locatedAt
    })
      
  
    new google.maps.Marker({
        position: locatedAt,
        map: map,
        title: thePlace.name
    })
  
    
}