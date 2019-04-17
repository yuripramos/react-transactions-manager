import axios from "axios";

export async function getAllShips(n) {
  let axiosArray = [];

  for(let i=0; i < n ; i++) {
    axiosArray.push(
        axios.get(`https://loadsmart-coding-test-frontend.herokuapp.com/json/shipment-${i+1}.json`)
    );
  }

  const responseAction = axios
    .all(axiosArray)
    .then(function(results) {
      let temp = results.map(r => r.data);
      return temp;
    })
    .catch(error => {
      return error.data;
    });

  return responseAction;
}
