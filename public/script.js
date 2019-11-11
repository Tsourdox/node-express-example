/* Salute the programmers... */
console.log('Welcome Developers!')

/* Hook up run script function */
window.onload = run

/* Fix fetch.... */
_fetch = fetch

/**
 * A simpler fetch function...
 * @param {String} url
 * @returns {{}} JSON object
 */
fetch = async function(url) {
    const response = await _fetch(url)
    return await response.json()
}

/**
 * Runs the script
 */
function run() {
    getVisitorsFromServerApi()
}

async function getVisitorsFromServerApi() {
    /* Request info from server API */
    try {
        console.log('calling api..')
        const response = await fetch('http://localhost:3000/api')
        document.querySelector('h3 > span').innerHTML = response.count
    } catch (err) {
        console.error(err)
    }
}