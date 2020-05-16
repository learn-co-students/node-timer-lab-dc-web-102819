const initialString = process.argv[2]
let interval

if (initialString.charAt(initialString.length - 1) === 's') {
    interval = 's'
}

if (initialString.substring(initialString.length - 3, initialString.length) === 'min') {
    interval = 'min'
}

if (!interval) {
    console.error("No interval provided")
    process.exit(1)
}

let i = interval === 's' ? 
    parseInt(initialString.substring(0, initialString.length - 1)) : 
    parseInt(initialString.substring(0, initialString.length - 3)) * 60


let timer = setInterval(() => {
    if (i === 0) {
        clearInterval(timer)
        process.exit(0)
    }

    i--
    interval = i % 60 === 0 ? 'min' : 's'
    let num = interval === 'min' ? i / 60 : i
    console.log(`Left: ${num}${interval}`)
}, 1000)