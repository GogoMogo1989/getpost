const loadEvent = async _ => {
  


    const urlNasaApi = `public/script.js`
    
        
    fetch(urlNasaApi)
        .then(response => response.json())
        .then(data => {
            let {title, explanation, url} = data

            const card =`  
            <div class=pictures>
                <h1>${title}</h1>
                <p>${explanation}</p>
                <img src="${url}">
            </div>
            <form method="post" action="...">
                <label for="theday">Choose your date:</label>
                <input type="date" id="theday" name="theday"/> 
                <button type="submit" onclick="counting()">Let's see!</button> 
            </form>`
        })

        const rootElement = document.getElementById("root");
        rootElement.insertAdjacentHTML("beforeend", card )

            
 }
    
window.addEventListener("load", loadEvent);