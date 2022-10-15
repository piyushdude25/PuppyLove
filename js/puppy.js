function fetchData() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data:", data.message);
      const html = `<div class= 'images'> <img  src=${data.message} alt="dog" /></div>`;
      //   const html = data.message.map((items) => {
      //     return `
      //     <div>ok</div>
      //    <div>${items} 2</div>
      // <img src=${items} alt="dog" />
      //     `;
      //   });
      //   console.log(html);
      document.getElementById("puppy").innerHTML = html;
    })

    .catch((err) => {
      console.log(err);
    });
}
fetchData();
