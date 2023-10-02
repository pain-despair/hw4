const hours = parseInt(prompt('Skilki godin'))
const seconds = hours * 3600
if (!isNaN(hours)){
    alert(`In ${hours} hours ${seconds} seconds`)
} else {
    alert('Ne 4islo')
}

