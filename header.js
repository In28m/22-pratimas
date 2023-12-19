export function addHeaderToApp(app) {
    const headerHTML = `
        <header style="
            background: #ffff00da;
            color: white;
            margin-top: 50px;
            padding: 10px;">

        <h1 style="
            text-align: center;
             font-size: 65px;">Header</h1>

        <p style="font-size: 25px; margin: 35px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi autem a optio praesentium minus accusamus impedit beatae vitae quaerat repellendus dolor provident eligendi numquam sed at natus, dolorum excepturi dignissimos. </p>
        </header>
    `
    app.innerHTML = headerHTML + app.innerHTML
}

