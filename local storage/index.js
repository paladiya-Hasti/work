
let productss = JSON.parse(localStorage.getItem("products")) || [];
console.log("productss", productss);
const deleteproduct = (i) => {
    productss.splice(i, 1)
    dispaly()
    localStorage.setItem("products", JSON.stringify(productss));
}

let dispaly = () => {
    document.getElementById("box").innerHTML = "";
    let count = 0
    productss.map((ele, i) => {
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let content = document.createElement("p")
        content.innerHTML = ele.content
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let img = document.createElement("img")
        img.src = ele.img
        

        let btn1 = document.createElement("button")
        btn1.innerHTML = "DELETE"

        btn1.addEventListener("click", () =>deleteproduct(i))
        let div = document.createElement("div")
        div.append(img, title, content, price,btn1)
        document.getElementById("box").append(div)

    })

}


let products = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value
    let content = document.getElementById("content").value
    let price = document.getElementById("price").value
    let img = document.getElementById("img").value
  

    let product = {
        title: title,
        content: content,
        price: price,
        img: img,
    
    }
    localStorage.setItem("products", JSON.stringify(productss))

    

    productss.push(product);
    console.log(productss)
    dispaly()
}
document.getElementById("form").addEventListener("submit", products)