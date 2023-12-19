export function addCarsToApp(app) {
    const carsArray = ["BMW", "VW", "AUDI", "MB"]
    const carsHTML = `
        <ul style="margin: 35px;
        font-size: 25px;">
            ${carsArray.map((car) => `<li>${car}</li>`).join('')}
        </ul>
   `
    app.innerHTML += carsHTML
}
