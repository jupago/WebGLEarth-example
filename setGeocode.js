//this doesn't d anything but is a loop to help you get the geocode of every user
var data = [];
function setGeocodes(){
  for (var i = 0; i < users.length; i++) {
      data.push(users[i])
      data[data.length -1].geo = {};
      fetchGeo(users[i], i)
  }


}


function fetchGeo(user, i){
  return fetch("https://maps.googleapis.com/maps/api/geocode/json?&address=" + user.city)
  .then(response => {return response.json()})
  .then(response => {
    parsePromise(response.results[0].geometry.location, i);
  } );
}

function parsePromise(results, i){
  data[i].geo = results
}
