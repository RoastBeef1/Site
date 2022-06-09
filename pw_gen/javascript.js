onload = (event) =>
{
    finalMsg = document.getElementById("pw")
    genButton = document.getElementsByClassName("genbutton")
}

function randstring()
{
    let len = 18
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
    let charactersLength = characters.length;
    for ( let i = 0; i < len; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    finalMsg.innerText = result
}