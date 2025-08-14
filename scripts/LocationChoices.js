export const LocationChoices = async() => {
    //Fetches locations from the API
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let html = `
        <div class="survey-input">
            <h2>What type of area do you live in?</h2>
    `

    //Generate radio buttons and add to html
    for (const location of locations) {
        html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
    }

    html += `
        </div>
    `

    return html
}