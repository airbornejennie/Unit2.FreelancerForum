const names = ['Alice', 'Bob', 'Carol', 'Alvin', 'Nathan', 'Avery'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Graphic Artist', 'Photographer'];
const prices = ['$30', '$50', '$70', '$65', '$120', '$100'];
const maxFreelancers = 6;

const freelancers = [
    {
        name: 'Alice',
        occupation: 'Writer',
        price: 30,
    },
    {
        name: 'Bob',
        occupation: 'Teacher',
        price: 50,
    },
];

const addFreelancerInterval = setInterval(addFreelancer, 3000);

render();

function addFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOcc = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    const table = document.getElementById('newFreelancers');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = randomName;
    cell2.innerHTML = randomOcc;
    cell3.innerHTML = randomPrice;
}

clearInterval(addFreelancerInterval);
