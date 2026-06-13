let ctr = 0; //ctr means counter variable.
function callback() {
    const element = document.querySeledtorAll("h2")[1] //const element = document.querySeledtorAll("h2"):get me all the h2 tags     [1]:and for the second h2 tag(As it is 0 based indexing.)
    element.innerHTML = ctr; //and change the inner element to ctr. 
    console.log(ctr); 
    ctr = ctr + 1;
}

setInterval(callback,1000); //setInterval callback the function after every one second