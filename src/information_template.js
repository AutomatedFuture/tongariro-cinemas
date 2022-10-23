/*
Author: AutomatedFuture@github
*/

// Template for wordy, article-like pages

function InformationTemplate(props) {
    
    return (
        <main id="information">            
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </main>
    )
}


export default InformationTemplate;
