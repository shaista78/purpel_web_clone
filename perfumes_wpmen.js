women_perfume = JSON.parse(women_perfume);

    function viewPerfumes() {
        console.log(women_perfume);
        let data = document.getElementById("data");

        women_perfume.forEach(function (product) {
            let div = document.createElement("div");
            let name = document.createElement("p");
            name.innerText = product.name;
            
            let price = document.createElement("p");
            price.innerText = product.price;
            let image = document.createElement("img");
            image.src = product.image;
            let rating = document.createElement("p");
            rating.innerText = product.rating;


            let btn = document.createElement("button");
            btn.innerText = "Add to card"

            btn.onclick = function () {
                addtoCard(product);
            }
            div.append(image, name, price, rating, btn);
            data.append(div);
        });
    }

viewPerfumes();