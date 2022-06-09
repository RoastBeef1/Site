onload = () =>
{
    ipbox = document.getElementById("ip")
}

function getIP()
{
    alert("Momentan nicht verfügbar")
    /*
    ipbox.innerText = "..."
    try
    {
        fetch("https://api.ipify.org/?format=json")
        .then(data => data.json())
        .then(data => ipbox.innerText = data.ip)
    } catch (err) {alert("Fehler: " + err)}
    */
}
