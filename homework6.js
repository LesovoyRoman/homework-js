function recursRemove(argNode) {
	argNode.innerText = '';
	if(argNode.hasChildNodes()) {
		argNode.childNodes.forEach(function(e, i) {
			if(e.hasChildNodes()) {
				recursRemove(e)
			} else if(e.tagName === 'DIV') {
				e.remove()
			}
			if(!e.tagName) {
				e.remove();
			}
		})
	}
}

// Есть проблемы с рекурсией, проходит она не по всем узлам.

var tagNames = [ "div", "div", "div", "div", "button" ]
var divStyle = `
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px green;
    font-size: 25px;
`
elements = tagNames.map ( function ( x ) {
    return document.body.appendChild ( 
        document.createElement ( x ) 
    )
})

elements.filter ( function ( element ) {
    return element.tagName === "DIV"
})
.forEach ( function ( element, num ) {
            element.style = divStyle
            element.innerText = num
})

elements.filter ( function ( element ) {
    return element.tagName === "BUTTON"
})
.forEach ( function ( element ) {
    element.innerHTML = "remove DIVs"
    element.onclick = function ( event ) {
            recursRemove (document.body)
    }
})