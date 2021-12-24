var bucketList = [];

var listItem = document.getElementById("list-container");

function addValues(){

    let value = document.getElementById("input-field").value;
    bucketList.push(value);
    showlist();

}

function remove(i){

    bucketList.splice(i,1);
    showlist();

}

function reset(){

    bucketList = [];
    showlist();

}

function showlist(){
    
    listItem.innerHTML = "";
    for(let i = 0; i < bucketList.length; i++){
        let li = document.createElement('li');
        li.innerHTML = bucketList[i]+`<span><img class ="checked" onclick ="remove(`+i+`)" src ="https://i1.faceprep.in/tick-mark.png"></span>`
        li.className = "list";
        listItem.appendChild(li);
    }
    
}