let arr = [
    {
        "title": "Senior UI Developer",
        "rate": "$120/hr",
        "company": "Nike",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
    },
    {
        "title": "Senior Backend Engineer",
        "rate": "$150/hr",
        "company": "Google",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        "title": "Azure Data Engineer",
        "rate": "$125-145/hr",
        "company": "Airbnb",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
    },
    {
        "title": "Azure Data Engineer",
        "rate": "$125-145/hr",
        "company": "Airbnb",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
    },
    {
        "title": "Senior Backend Engineer",
        "rate": "$150/hr",
        "company": "Google",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        "title": "Senior UI Developer",
        "rate": "$120/hr",
        "company": "Nike",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
    }
]

let clutter = ""

arr.forEach(element => {
    clutter += `
    <div class="card">
        <p class="rate">${element.rate}</p>
        <h2 class="title">${element.title}</h2>
        <div class="card-body">
            <p class="company">${element.company}</p>
            <img src="${element.logo}" alt="">
        </div>
    </div>
    `
});

document.body.innerHTML = clutter
