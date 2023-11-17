const names = ['Alice', 'Bob', 'Carol', 'Alvin', 'Nathan', 'Avery'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Graphic Artist', 'Photographer'];
const prices = [30, 50, 70, 65, 120, 100];
const array = [];

const addFreelancerInterval = setInterval(render, 3000);

function getAveragePrice() {
    return array.reduce(function (sum, currentPrice) {
        return sum + currentPrice;
    },0) / array.length;
}

function populateAveragePrice() {
    const span = document.getElementById('averagePrice');
    span.textContent = Math.round(getAveragePrice());
}

function render() {
    addFreelancer()
    populateAveragePrice()
}

function addFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOcc = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    array.push(randomPrice);
    const table = document.getElementById('newFreelancers');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = randomName;
    cell2.innerHTML = randomOcc;
    cell3.innerHTML = randomPrice;
}

