function convertSuhu(){
    var temp = Number(document.getElementById('masukan').value)
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    var hasil

    if (from == 'celcius') {
        if (to == 'celcius') {
            hasil = temp
        } else if (to == 'fahrenheit') {
            hasil = (temp * 1.8) + 32
        } else if (to == 'reamur') {
            hasil = (temp * 0.8)
        } else if (to==="kelvin") {
            hasil = (temp+273)
        }
    } else if (from == 'fahrenheit') {
        if (to == 'celcius') {
            hasil = (temp - 32) / 1.8
        } else if (to == 'fahrenheit') {
            hasil = temp
        } else if (to == 'reamur') {
            hasil = ((temp-32)*4/9)
        }
    } else if (from == 'reamur') {
        if (to == 'celcius') {
            hasil = (temp*1.25)
        } else if (to == 'fahrenheit') {
            hasil = (temp*9/4)+32
        } else if (to == 'reamur') {
            hasil = temp
        } else if (to == "kelvin") {
            hasil = ((5/4*temp)+273)
        }
    } else if (from == "kelvin") {
        if (to == "celcius") {
            hasil = temp-273
        } else if (to == "reamur") {
            hasil = 4/5*(temp-273)
        }
    }
    document.getElementById('resultLabel').removeAttribute('hidden')
    document.getElementById('result').removeAttribute('hidden')
    document.getElementById('result').value = hasil
}