function changeContent() { 
    var x = document.getElementById('textArea'); 
    x.value = x.value.replace(/\s{2,}/g, ' '); 
} 