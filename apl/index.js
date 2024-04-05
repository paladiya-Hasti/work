
const ui=(data)=>{
    // console.log(data.products);

    data.map((ele)=>{
        let title=document.createElement("h1")
        title.innerHTML=ele.title

        let price=document.createElement("h4")
        price.innerHTML="price : "+ele.price

        let discountPercentage=document.createElement("h4")
        discountPercentage.innerHTML="discoun : "+ele.discountPercentage
        
        let thumbnail=document.createElement("img")
        thumbnail.src=ele.thumbnail

        let brand=document.createElement("h4")
        brand.innerHTML="brand : "+ele.brand

        let div=document.createElement("div")
        div.append(title,price,discountPercentage,thumbnail,brand);

        div.setAttribute("class","box1")
        document.getElementById("box").append(div);
    })
}
const getdata =async()=>{
    try{
        let res=await fetch ("https://dummyjson.com/products")
        let data=await res.json()
        ui(data.products)
    }
    catch(error)
    {
        console.log(error);
    }
}
getdata()
