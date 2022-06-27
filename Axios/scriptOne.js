//How to start the json server
//json-server --watch products.json
//This is a demo of GET request using axios

const url = "http://localhost:3000/products";

//event listener function
function fetchData() {

  axios.get(url).then(

    (receivedJson) => {

      //what to do when the request is successfull
      console.log(receivedJson);

    }

  ).catch(

    (error) => {

      //when to do when the request is not successfull
      console.log(error);

    }

  )

}

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", fetchData);


