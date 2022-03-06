let appen = (arr) => {
  arr.map((e) => {
    console.log(e);
    let content_Div = document.createElement("div");
    content_Div.setAttribute("class", "contentdiv");
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
          "563492ad6f917000010000016528779b5826413e81ae5ef27ec5e7c5",
      },
    }
  );
  let data = await images.json();
  appen(data.photos);
}

imgur();
