function dragStartHandler(event){
    console.log("drag")   

    event.dataTransfer.setData("elemId" , event.target.id)
}

function dragUpHandler(event){
    let targetId=event.dataTransfer.getData("elemId")
    let targetElem= document.getElementById(targetId)

    event.target.append(targetElem)
}
function dragOverHandler(event){
    event.preventDefault()
    // console.log("dragover")

}