var menu = document.getElementById("menu");
//var no_container = document.getElementById("no_container");
//document.getElementById("containerin");

async function getMovies(){
    try{
        var name=document.getElementById("name").value;
        let movielist=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=65673a3d&s=${name}`);
        var data=await movielist.json();
        console.log("data",data);
        
        appendMovies(data);
    }
    catch (error){
       
            append_no_movies();
        
       
      

       
       
    }
}
//getMovies();


/////////////   getMovies();
////////////    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg";

///////////     Title: "The Avengers";
//////////      Type: "movie";

/////////       Year: "2012";
////////        imdbID: "tt0848228"

///////         price: 169;
//////          var name=document.getElementById("name").value;


 function appendMovies(data){
     console.log(data);
     document.getElementById("menu").innerHTML="";



     data.Search.forEach(function (elem){
         
        let carddiv=document.createElement("div");
        carddiv.style.width="350px";
        carddiv.style.height="550px";
        carddiv.style.border="5 px solid white"
        
        let imgdiv=document.createElement("img");
        imgdiv.src=elem.Poster;
        imgdiv.style.marginTop="12%";
        imgdiv.style.borderRadius = "10px";
        




        let price=document.createElement("p");
        price.textContent=elem.price;
        price.style.color="white";
        price.style.marginTop="10%";
        let year=document.createElement("h4");
        year.textContent="Released Year : "+elem.Year;
        year.style.color="white";
        year.style.marginTop="8%";
        let title=document.createElement("h4");
        title.textContent="The Movie Title : "+elem.Title;
        title.style.color="white";
        title.style.marginTop="8%";
        let clicktoWatch=document.createElement("button");
        clicktoWatch.textContent="Click To Watch";
        clicktoWatch.style.marginLeft="0px";
        clicktoWatch.style.marginTop="-10%";
        clicktoWatch.style.borderRadius = "20px";
        clicktoWatch.id = "clicktoWatch";
        
            
        carddiv.append(imgdiv,title,year,clicktoWatch);
        menu.append(carddiv);


         
     
     });
   
    
 }
 








 


function append_no_movies(){
    //console.log(`Sorry`);
    document.getElementById("menu").innerHTML = "";

    let carddiv_2 = document.createElement("div");
    carddiv_2.style.marginTop = "50%";
    carddiv_2.style.marginLeft = "150%";


    let img_2 = document.createElement("img");
    img_2.src = "https://c.tenor.com/62UtpvqLAEQAAAAC/i-cant-find-any-proof-owen-wilson.gif";
    img_2.style.width = "400px";
    img_2.style.height = "400px";

    carddiv_2.append(img_2);
    menu.append(carddiv_2);






   


}

