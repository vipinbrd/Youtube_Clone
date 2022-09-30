let api_key="AIzaSyCpt_4tfvKp6MI7dABEI6_x5EYabZLWmbc"

let trend=async()=>{
    
let query="trending"
   let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`

// <<<<<<< HEAD
let trend=async()=>{
    
let query="cartoon"
   let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${api_key}`

let res=await fetch(url)
let data=await res.json()
appending(data.items)

}
setTimeout(() => {
    trend()
}, 3000);



// =======
let res=await fetch(url)
let data=await res.json()
console.log(data.items)
appending(data.items)

}
trend()
// >>>>>>> 49d01cddbaa7aad036128bd96af6f50f96fb3454

let container=document.querySelector("#container")
let play=async()=>{
     let query=input.value

    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${api_key}`

let res=await fetch(url)
let data=await res.json()
console.log(data.items)
appending(data.items)

}
let appending=(data)=>{
    container.innerHTML=null
    data.forEach(({id:{videoId},snippet:{title}})=>{

        console.log(videoId,title)
        
        let div =document.createElement("div")
        let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        let h3=document.createElement("h3")
        h3.innerText=title
        div.append(iframe,h3)
        container.append(div)

    })



}



/*
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/jfidjUl-UPE"
 title="YouTube video player" 
 frameborder="0" allow="accelerometer; 
 autoplay; clipboard-write; 
 encrypted-media; 
 gyroscope; picture-in-picture" 
allowfullscreen></iframe>
*/
