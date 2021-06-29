var dtatra;
firebase.database().ref("entry").on("child_added" , function(dta) {
    console.log(dta.val())    
    dtatra = dta.val()
    
})



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
    
    var obj = {
        val : val,
        key : key
    }
    
    firebase.database().ref("entry").child(key).set(obj);
 

    document.getElementById("val").value = ""

    //edit button
    var editbtn = document.createElement("button");
    var edittxt = document.createTextNode("Edit");
    editbtn.appendChild(edittxt)
    ediv.appendChild(editbtn)
    editbtn.setAttribute("class","btn btn-outline-success")
    editbtn.setAttribute("onclick","edittxt(this)")
    editbtn.setAttribute("id",dtatra.key)








    //delete button
    
    var button = document.createElement("button")
    var btntext = document.createTextNode("Delete")
    button.appendChild(btntext)
    ediv.appendChild(button)
    button.setAttribute("class","btn btn-outline-dark")
    button.setAttribute("onclick","dlt(this)")    
    button.setAttribute("id", dtatra.key)    
    
   

    
    
    
}
// console.log(dtatra)
function dlt(g) {
    
    firebase.database().ref("entry/" +g.id).remove()
    g.parentNode.remove()
    
    


}
function edittxt(n) {

    var oldv = n.parentNode.firstChild.firstChild.nodeValue
    var newv = prompt("Enter updated task" , oldv)
    n.parentNode.firstChild.firstChild.nodeValue = newv;
    console.log(n.id)
    firebase.database().ref("entry/" +n.id ).set({
        val : newv,
        key : n.id
    }) 
}



function dltall() {
    document.getElementById("data").innerHTML = "";
    firebase.database().ref("entry").remove()

}
