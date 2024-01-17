function parimp(n) {
    if (n % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let res = parimp(1234567890)
console.log(res)