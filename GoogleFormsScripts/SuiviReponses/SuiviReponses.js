const FORM_ID = 'IDFORMS';
const POLL_INTERVAL = 5000;

function surveillerReponses() {
    const responsesUrl = `https://docs.google.com/spreadsheets/d/${FORM_ID}/gviz/tq?tqx=out:csv`;

    let lastResponseCount = 0;

    function getNewResponses() {
        fetch(responsesUrl)
            .then(response => response.text())
            .then(data => {
                const rows = data.trim().split('\n');

                if (rows.length > lastResponseCount) {
                    const newResponses = rows.slice(lastResponseCount);
                    lastResponseCount = rows.length;

                    newResponses.forEach(response => console.log(response));
                }
            })
            .catch(error => {
                console.error('Une erreur est survenue :', error);
            });
    }

    setInterval(getNewResponses, POLL_INTERVAL);
}

surveillerReponses();