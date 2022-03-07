let appen = (arr) => {
  arr.map((e) => {
    console.log(e);
    let content_Div = document.createElement("div");
<<<<<<< HEAD:Imgur-Clone/index.js
    content_Div.setAttribute("class", "contentdiv");
=======

>>>>>>> 0ebc9ac023e6eb07ca1a09d68147f0228230aad2:index.js
    let imgs = document.createElement("img");
    imgs.setAttribute("src", e.src.original);

    let p = document.createElement("p");
    p.textContent = e.alt;
    let div = document.createElement("div");
    div.setAttribute("id", "IconsDiv");
    let uploadIcon = document.createElement("div");
    uploadIcon.innerHTML  =` <span class="material-icons" id = "icon4">upload</span>`
    let commentIcon = document.createElement("div");
    commentIcon.innerHTML  = `<span class="material-icons" id = "icon5">chat_bubble_outline</span>`
    let viewIcon = document.createElement("div");
    viewIcon.innerHTML  = `<span class="material-icons" id = "icon6">visibility</span>`
    div.append(uploadIcon,commentIcon,viewIcon);
    content_Div.append(imgs, p,div);
    document.querySelector(".section2").append(content_Div);
  });
};

async function imgur() {
  let images = await fetch(
    "https://api.pexels.com/v1/curated?page=2&per_page=40",
    {
      Method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
<<<<<<< HEAD:Imgur-Clone/index.js
          "563492ad6f9170000100000133595104e05c43158e8ab70fef6f6574",
=======
          "563492ad6f91700001000001edb3647acc49449e8f2d2064f2957de9",
>>>>>>> 0ebc9ac023e6eb07ca1a09d68147f0228230aad2:index.js
      },
    }
  );
  let data = await images.json();
  console.log(data)
  appen(data.photos);
}

imgur();
