const content = document.createElement("div")
content.classList = "m-5 "
let message = `<h1 class="offset-4 text-danger">No Results Found</h1>`

function card2(message, image) {

    var div = document.createElement("div");
    div.classList = "col-sm-3 col-lg-3 col-md-3  float-left  ";
    div.style.width = "300px";

    var div11 = document.createElement("div");
    div11.classList = "card boxShadow  border border-danger w-70 p-2 h-100 "
    var div2 = document.createElement("div");
    div2.classList = "card-body ";
    var img = document.createElement("img");
    img.classList = "card-img ";
    var p = document.createElement("p");
    p.classList = "card-text text-center";
    p.textContent = message;
    var divB = document.createElement("div");
    divB.classList = "col-md-2 offset-3";

    const button = document.createElement("button")
    button.classList = "btn btn-dark"
    button.textContent = "Watch"

    img.src = image;

    div.appendChild(div11);
    div11.appendChild(img);
    div11.appendChild(div2);
    div2.appendChild(p);
    div11.appendChild(divB);
    divB.appendChild(button);

    content.appendChild(div);
    document.body.appendChild(content)

}
const search = document.getElementById("search");
search.addEventListener("keyup", () => {
    let val = search.value

    fetch(`http://www.omdbapi.com/?s=${val}&apikey=ac69fb2c`)
        .then(response => response.json())
        .then(function(response) {

            content.innerHTML = ""

            if (response.Search !== undefined) {
                for (const card of response.Search) {
                    card2(card.Title, card.Poster)
                }

            } else {
                content.innerHTML = message
            }


        })


})