replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.ChildNodes.forEach(replaceText)
    }else if(element.nodeType===Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            const newr=document.createElement('span')
            newElement.innerHTML=element.textContent.replace(/(coronavirus)/gi,'<span class="background-color:black;color:black">$1</span>')
            element.replaceWith(newr)
        }
    }

}