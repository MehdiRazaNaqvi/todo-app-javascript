function addtask() {
    var ediv = document.createElement("div");
    ediv.setAttribute("class","ediv")
    var div = document.getElementById("data");
    var name = document.createElement("p")
    name.setAttribute("id" , "txtdiv")
    var val = document.getElementById("val").value;
    var text = document.createTextNode(val)
    name.appendChild(text);
    ediv.appendChild(name)
    div.appendChild(ediv);
    var key = Math.random()*10284;
    key = key.toFixed();
    console.log(key)
    var obj = {
        val : val,
        key : key
    }
    console.log(obj)
    firebase.database().ref("entry/" +key).set(obj);
    firebase.database().ref("entry").on("child_added" , function(aya) {
        console.log(aya.val())
    })

    document.getElementById("val").value = ""

    //edit button

    var editbtn = document.createElement("button");
    var edittxt = document.createTextNode("Edit");
    editbtn.appendChild(edittxt)
    ediv.appendChild(editbtn)
    editbtn.setAttribute("class","btn btn-outline-success")
    editbtn.setAttribute("onclick","edittxt(this)")








    //delete button
    
    var button = document.createElement("button")
    var btntext = document.createTextNode("Delete")
    button.appendChild(btntext)
    ediv.appendChild(button)
    button.setAttribute("onclick","dlt(this)")
    button.setAttribute("id","dltbtn")
    button.setAttribute("class","btn btn-outline-dark")
   

    
    
    
}

function dlt(g) {
    
    g.parentNode.remove()
    console.log(g.parentNode)
    // firebase.database().ref("entry/" +key).remove()
    


}
function edittxt(n) {
    var oldv = n.parentNode.firstChild.firstChild.nodeValue
    var newv = prompt("Enter updated task" , oldv)
    n.parentNode.firstChild.firstChild.nodeValue = newv;
}



function dltall() {
    document.getElementById("data").innerHTML = "";

}

