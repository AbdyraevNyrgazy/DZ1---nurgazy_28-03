const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')

const gmailRegex = /^\w[.%+-]+@gmail\.com$/

gmailButton.onclick =()=>{
    if(gmailRegex.test(gmailInput.value)){
        gmailResult.innerHTML= 'good'
        gmailResult.style.color= 'green'
    }
    else{gmailResult.innerHTML= 'error'
         gmailResult.style.color= 'red'
    }
}
//part 2
const childBlock = document.querySelector('.child_block')

let move = 0
const moveBlock = () => {
    if(move < 444){
        move += 5
        childBlock.style.left = move + 'px'
    }
    else {}
    moveBlock()
}
moveBlock()
