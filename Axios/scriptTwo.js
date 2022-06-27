//How to start the json server
//json-server --watch products.json
//This is a demo of GET request using axios

//limit=20 requests only 20 urls of the cat images.
const catUrl = "https://api.thecatapi.com/v1/images/search?limit=20";

//event listener function for fetchCatData
function fetchCatData() {

  axios.get(catUrl).then(

    (receivedCatJson) => {

      //what to do when the request is successfull
      console.log(receivedCatJson);

    }

  ).catch(

    (error) => {

      //when to do when the request is not successfull
      console.log(error);

    }

  )

}

let fetchCatBtn = document.getElementById("fetchCatBtn");

fetchCatBtn.addEventListener("click", fetchCatData);