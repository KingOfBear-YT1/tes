function igstalk() {
    fetch('https://viko-api.herokuapp.com/api/stalk/ig?apikey=rxking&query=vikodwik_rmx')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let profile = data.result.Profile_pic
        let ledalede = data.result.Username
        let ledal = data.result.Name
        let polo = data.result.Jumlah_Following
        document.getElementById("followw").innerHTML = ledalede
        document.getElementById("foll").innerHTML = polo
        document.getElementById("nametag").innerHTML = ledal
        document.getElementById("fotoprofile").src = profile
    })
    .catch(err => {
        console.log(err)
    });
}

function vikoapi() {
    fetch('https://privatasw.herokuapp.com/informasi/apiku')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let intejer = data.result.infoku
        let inpo = data.result.info
        let kunci = data.result.apikey
        let spamku = `${data.result.ngunu} <br><br>note: silahkan copy apikey diatas, lalu paste pada URL &apikey=APIKEY, mau menambahkan apikey pribadi? silahkan chat di pojok kanan bawah`
        document.getElementById("pedofil").innerHTML = intejer
        document.getElementById("crito").innerHTML = inpo
        document.getElementById("apikuuu").innerHTML = kunci
        document.getElementById("lucast").innerHTML = spamku
    })
    .catch(err => {
        console.log(err)
    });
}