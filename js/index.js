function fetchData() {
  fetch("https://dog.ceo/api/breeds/list")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data", data.message);
      const html = data.message.map((items) => {
        return `
        <span><a href='./puppy.html' ><li id="lName">${items}</li></a></span>
        `;
      });
      //   console.log(html);
      document.getElementById("root").innerHTML = html;
    })

    .catch((err) => {
      console.log(err);
    });
}
fetchData();
// ---------------------------
// const dataa = fetch("https://dog.ceo/api/breed/hound/images")
//   .then((data) => {
//     // console.log("data:", data);
//     return data.json();
//   })
//   .then((alldata) => {
//     // console.log("data:", alldata.message[1]);
//     // document.getElementById("root").innerHTML = allData;
//     // let data1 = "";

//     alldata.map((items) => {
//       //   data1 += `
//       // <div>${items.message}</div>
//       `<div> <img src=${items.message[1]} </div>
//         `;
//     });
//     document.getElementById("root").innerHTML = data1;
//   })

//   .catch((err) => {
//     console.log(err);
//   });

// // console.log("dataaaa:::", dataa);
