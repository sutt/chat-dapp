console.log("attached")
const url = "http://localhost:3009/messages"
const pollMs = 1000 * 3

pollRequests()


function displayMessages(messages) {
    
    console.log("displaying..." + JSON.stringify(messages))
    
    const container = document.getElementsByClassName('container').item(0)
    container.innerHTML = ""

    for (let i=0; i< messages.length; i++) {
        let msgElement = document.createElement('span')
        msgElement.classList.add('message')
        const orientation = i % 2 ? 'left': 'right'
        msgElement.classList.add(orientation)
        try{
            msgElement.innerHTML = messages[i].message
            container.appendChild(msgElement)
        } catch (e) {
            console.log(e)
            
        }
    }

    container.scrollTop = container.scrollHeight
}


function sendMessage() {
    
    const chatbox = document.getElementById("chatbox")
    const msgText = chatbox.value
   
    const msgData = {
        user: "mock",
        message: msgText,
    }

    console.log("sending message..." + JSON.stringify(msgData))

    fetch(url, 
        {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body:    JSON.stringify(msgData)
        }
    )
    .then(res => res.json())
    .then(messages => {
        displayMessages(messages)
    })
}


function getMessages() {

    fetch(url)
    .then(res => res.json())
    .then(messages => {
        displayMessages(messages)
    })

}

function pollRequests() {
    getMessages()
    setInterval(() => {
        console.log("polling for messages")
        getMessages()
    }, 
    pollMs)
}

