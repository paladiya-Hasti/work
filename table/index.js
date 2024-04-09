let product=JSON.parse(localStorage.getItem("products"))||[]

let display=()=>{
    document.getElementById("box").innerHTML=""
    product.map((ele,i)=>{
        let title=document.createElement("td")
        title.innerHTML=ele.title
        let cate=document.createElement("td")
        cate.innerHTML=ele.cate 
        let img=document.createElement("img")
        img.src=ele.img
        let price=document.createElement("td")
        price.innerHTML=ele.price
        let des=document.createElement("td")
        des.innerHTML=ele.des
        let btn=document.createElement("button")
        btn.innerHTML="delete"

        btn.addEventListener("click",()=>{
            product.splice(i,1)
            display()
        })

        document.getElementById("del").addEventListener("click",()=>{
            document.getElementById("box").innerHTML=""
        })
        btn.setAttribute("class","but")
        let tr=document.createElement("tr")
        tr.append(title,cate,img,price,des,btn)
        document.getElementById("box").append(tr)
    })
}

const handleproduct=(e)=>{
    e.preventDefault()

    let data=
    {
        title:document.getElementById("title").value,
        cate:document.getElementById("cate").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        des:document.getElementById("des").value,
    }
    if(data.title.length<2){
        document.getElementById("error").innerHTML="please enter must be 2 or more letter"
        document.getElementById("error").style.color="red"
        return
    }
    if(data.img.length==0){
        document.getElementById("error1").innerHTML="please enter img url"
        document.getElementById("error1").style.color="red"
        return
    }
    if(data.price.length<2){
        document.getElementById("error2").innerHTML="please enter must be 2 or more letter"
        document.getElementById("error2").style.color="red"
        return
    }
    // if(data.des.length==0){
    //     document.getElementById("error3").innerHTML="please enter description"
    //     document.getElementById("error3").style.color="red"
    //     return
    // }


    product.push(data)
    console.log(data);
    display()

    localStorage.setItem("products",JSON.stringify(product))
}

document.getElementById("form").addEventListener("submit",handleproduct)