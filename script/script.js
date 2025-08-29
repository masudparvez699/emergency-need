// Call Button Funtionality
let callButtons = document.getElementsByClassName('call-buttons');
let coins = parseInt(document.getElementById('coin-count').innerText);
for (let btns of callButtons) {
    btns.addEventListener('click', function () {
        if (coins < 20) {
            alert("⚔️ Insufficient coins. A minimum of 20 coins is required to make a call.")
        }
        else {
            let name = btns.parentNode.parentNode.children[1].innerText;
            let number = btns.parentNode.parentNode.children[3].innerText;
            let time = new Date().toLocaleTimeString();
            alert("Calling " + name + " " + number + "...")
            coins = coins - 20;
            document.getElementById('coin-count').innerText = coins;
            let container = document.getElementById('calling-history');
            console.log(container)
            let div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl mb-2">
                    <div>
                        <h3 class="font-bold text-xs">${name}</h3>
                        <p class="text-sm mt-2 text-gray-500">${number}</p>
                    </div>
                    <p class="text-sm  text-gray-600">${time}</p>
                </div> 
            `;
            container.appendChild(div);
        }
    })
}
// Clear Button Functionality 
document.getElementById('button').addEventListener('click', function () {
    document.getElementById('calling-history').innerText = "";
})
// Copy Button Functionality 
let copyButtons = document.getElementsByClassName('copy-buttons')
let copyIcon = parseInt(document.getElementById('copy-count').innerText);
for (let copy of copyButtons) {
    copy.addEventListener('click', function () {
        let copiedText = copy.parentNode.parentNode.children[3].innerText;
        alert("Number Copied to clipboard : " + copiedText)
        navigator.clipboard.writeText(copiedText)
        copyIcon = copyIcon + 1;
        document.getElementById('copy-count').innerText = copyIcon;


    })
}