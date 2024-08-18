        //select popup-box,popup-overlay,button
        var popupoverlay=document.querySelector(".popup-overlay") //using class in div(overlay) called query selector
        var popupbox=document.querySelector(".popup-box")
        var addpopupbutton=document.getElementById("add-popup-button")   //using id in button called getElementById
        
        addpopupbutton.addEventListener("click",function(){
            popupoverlay.style.display="block"
            popupbox.style.display="block"
        })
        
        //select cancel button
        var cancelpopup=document.getElementById("cancel-popup")
        cancelpopup.addEventListener("click",function(event)
        {
         event.preventDefault()                               //not reload another page
         popupoverlay.style.display="none"
            popupbox.style.display="none"
        
        })
        //select containers
        var container=document.querySelector(".container")
        var addbook=document.getElementById("add-book")
        var booktitleinput=document.getElementById("book-title-input")
        var bookauthorinput=document.getElementById("book-author-input")
        var bookdescriptioninput=document.getElementById("book-description-input")
    
        addbook.addEventListener("click",function(event)
    {
        event.preventDefault()
        var div=document.createElement("div")                                 //create div     //``$ use template literal
         div.setAttribute("class","book-container")                            
        div.innerHTML=` <h2>${booktitleinput.value}</h2>               
                <h5>${bookauthorinput.value}</h5>                                 
                <p>${bookdescriptioninput.value}</p>
                <button onclick="deletebook(event)">delete</button>`          //delete button
        container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
    })
    function deletebook(event){
        event.target.parentElement.remove()
    }