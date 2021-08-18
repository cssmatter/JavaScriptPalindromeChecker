var input = document.getElementById('typeTest')
var btn = document.querySelector('.check')
var result = document.getElementById('result')

function palindromeChecker(){
    let inputText = input.value.toLowerCase()
    let reverseText = inputText.split('').reverse().join('').toLowerCase()

    if(inputText === reverseText){
        result.innerHTML = "It's a Palindrome!!"
        result.style.color = 'green'
    }else{
        result.innerHTML = "It's NOT a Palindrome"
        result.style.color = 'grey'
    }
}
function ontype(){
    result.innerHTML = ''
}


btn.addEventListener('click', palindromeChecker)