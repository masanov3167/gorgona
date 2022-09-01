const copyText = document.querySelector('.copy__url');
const copyBtn = document.querySelector('.copy__url__btn');

copyBtn.addEventListener('click', () =>{
        var range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        copyTextFn()
});

function copyTextFn(){
    setTimeout(() =>{
        copyBtn.textContent = 'Copying.'
    },200);
    setTimeout(() =>{
        copyBtn.textContent = 'Copying..'
    },400)
    setTimeout(() =>{
        copyBtn.textContent = 'Copying...'
    },600)
    setTimeout(() =>{
        copyBtn.textContent = 'Copied ✓'
    },800)
    setTimeout(()=>{
        copyBtn.textContent = 'Copy'
    }, 2500)
}