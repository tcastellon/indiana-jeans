//Function that fetches the submission list from the API and generates HTML to list all of the submissions
export const SubmissionList = async () => {
    //Fetch submissions from the API
    const response = await fetch("http://localhost:8088/submissions?_expand=socioLocation")
    const submissions = await response.json()
    
    let html =`
    <div id='survey-submission-list'>
        <h2>Survey Submissions</h2>
    `
    // Generate HTML for each submission using .map()
    const submissionsHTML = submissions.map(
        (submission) => {
        return `
            <section class="survey-submission-container">
                <h2>Submission ${submission.id}</h2>
                <p>Owns Blue Jeans: ${submission.ownsBlueJeans}</p>
                <p>Location: ${submission.socioLocation.label}</p>
            </section>
        `
        }
    )
    // Join the array of strings into a single string and add to our HTML
    html += submissionsHTML.join("")
    
    html += `
        </div>
    `
    return html
}


//Example of .map() method 
// const newArray = originalArray.map((item) => {
//     return transformedItem;
// });