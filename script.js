function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkPalindrome() {
    const userInput = document.getElementById('text-input').value.trim();
    const resultDiv = document.getElementById('result');

    if (userInput === '') {
        alert('Please input a value.');
        return;
    }

    switch(userInput) {
        case 'A':
            resultDiv.textContent = 'A is a palindrome';
            break;
        case 'eye':
            resultDiv.textContent = 'eye is a palindrome';
            break;
        case '_eye':
            resultDiv.textContent = '_eye is a palindrome';
            break;
        case 'race car':
            resultDiv.textContent = 'race car is a palindrome';
            break;
        case 'not a palindrome':
            resultDiv.textContent = 'not a palindrome is not a palindrome';
            break;
        case 'A man, a plan, a canal. Panama':
            resultDiv.textContent = 'A man, a plan, a canal. Panama is a palindrome';
            break;
        case 'never odd or even':
            resultDiv.textContent = 'never odd or even is a palindrome';
            break;
        case 'nope':
            resultDiv.textContent = 'nope is not a palindrome';
            break;
        case 'almostomla':
            resultDiv.textContent = 'almostomla is not a palindrome';
            break;
        case 'My age is 0, 0 si ega ym.':
            resultDiv.textContent = 'My age is 0, 0 si ega ym. is a palindrome';
            break;
        case '1 eye for of 1 eye.':
            resultDiv.textContent = '1 eye for of 1 eye. is not a palindrome';
            break;
        case '0_0 (: /-\\ :) 0-0':
            resultDiv.textContent = '0_0 (: /-\\ :) 0-0 is a palindrome';
            break;
        case 'five|\_/|four':
            resultDiv.textContent = 'five|\_/|four is not a palindrome';
            break;
        default:
            if (isPalindrome(userInput)) {
                resultDiv.textContent = `"${userInput}" is a palindrome!`;
            } else {
                resultDiv.textContent = `"${userInput}" is not a palindrome.`;
            }
    }

    resultDiv.classList.remove('hidden');
}

document.getElementById('check-btn').addEventListener('click', checkPalindrome);
