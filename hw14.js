// ************************* ADDITIONAL #1 ******************************
let container = additonalOne.appendChild(document.createElement('p'))
container.style = `color: magenta;`
container.id = 'symbolOutputString'
function typeMessage(message) {
    message.split('').forEach((item, index) => {
         new Promise(
            resolve => setTimeout(() => resolve(item), (index + 1) * 1000))
            .then(response => container.innerText += response)
    })
}
typeSymb.onclick = (event) => {
    outputStr.value == '' ? alert('Введите строку для посимвольного вывода!!!') : 
    typeMessage(outputStr.value)
    outputStr.value = ''
}
 outputStr.onkeypress = (event) => symbolOutputString.innerText = ''

// ******************* ADDITIONAL #2 *******************************************

let container2 = additonalTwo.appendChild(document.createElement('p'))
container2.style = `color: magenta;`
container2.id = 'symbolOutputString2'
function typeMessage2(message) {
    let index = 0
    console.log('Hello')
    return function reverse() {
        let symb = message[index]

        new Promise(
                    resolve => setTimeout(() => resolve(symb), (index + 1) * 1000))
                    .then(response => container2.innerText += response)
          return ++index < message.length ? reverse() : null
    }
}
typeSymb2.onclick = (event) => {
    debugger
    outputStr2.value == '' ? alert('Введите строку для посимвольного вывода!!!') : 
    typeMessage2(outputStr2.value)()
    outputStr2.value = ''
}
 outputStr2.onkeypress = (event) => symbolOutputString2.innerText = ''