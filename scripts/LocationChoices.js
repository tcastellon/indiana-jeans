export const LocationChoices = async() => {
    //Fetches locations from the API
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let html = `
        <div class="survey-input">
            <h2>What type of area do you live in?</h2>
    `

    //TODO: Generate radio buttons and add to html

    html += `
        </div>
    `

    return html
}