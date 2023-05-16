let ol = document.createElement("ol")
document.body.appendChild(ol)

function createlist(user){

    for(let i=0;i<user.length;i++)
    for(let key in user[0]){
        let li =document.createElement("li")
        let text = document.createTextNode(user[0][key])
        li.appendChild(text)
        ol.appendChild(li)
    }
}

function submit(){
    let course = document.getElementById("course").Value 
    
    let user = []
    user.push({course:course})
    createlist(user);
    reset();

}

function reset(){
     
    document.getElementById("course").value=""
}