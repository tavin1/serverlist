// Função para mostrar a tela selecionada e ocultar as outras
function showScreen(screenId) {
    var screens = document.getElementsByClassName('screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].style.display = 'none';
    }
    document.getElementById(screenId).style.display = 'block';
}

// Preencher a lista de servidores com dados aleatórios
var serverTable = document.querySelector('#servers table tbody');
for (var i = 1; i <= 20; i++) {
    var serverName = 'Server ' + i;
    var status = getRandomStatus();
    var row = '<tr><td>' + serverName + '</td><td class="' + status + '">' + status + '</td></tr>';
    serverTable.innerHTML += row;
}


// Preencher as tabelas de solicitações e incidentes com dados aleatórios
var requestTable = document.getElementById('requestTable');
var incidentTable = document.getElementById('incidentTable');

var statuses = ['Abertas', 'Em Atendimento', 'Fechadas'];

for (var i = 0; i < statuses.length; i++) {
    var status = statuses[i];
    var requestRow = createRow(status, getRandomNumber());
    var incidentRow = createRow(status, getRandomNumber());

    requestTable.appendChild(requestRow);
    incidentTable.appendChild(incidentRow);
}

function createRow(status, quantity) {
    var row = document.createElement('tr');
    var statusCell = document.createElement('td');
    var quantityCell = document.createElement('td');

    statusCell.textContent = status;
    quantityCell.textContent = quantity;

    row.appendChild(statusCell);
    row.appendChild(quantityCell);

    return row;
}

for (var i = 0; i < services.length; i++) {
    var service = services[i];
    var listItem = document.createElement('p');
    listItem.textContent = service.name + ' - ' + service.value;
    serviceList.appendChild(listItem);
}

// Preencher a lista de links com dados aleatórios
var linkList = document.querySelector('#links .link-list');
var links = [
    'www.example1.com',
    'www.example2.com',
    'www.example3.com',
    // Adicione mais links aqui
];

for (var i = 0; i < 10; i++) {
    var linkName = 'Link ' + (i + 1);
    var status = getRandomStatus();
    var link = links[Math.floor(Math.random() * links.length)];
    var listItem = document.createElement('p');
    listItem.textContent = linkName + ' - ' + link;
    listItem.classList.add('link-item', status);
    linkList.appendChild(listItem);
}



// Função para gerar um status aleatório
function getRandomStatus() {
    var statuses = ['status-green', 'status-red', 'status-yellow', 'status-purple'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Função para gerar um número aleatório
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Mostrar a tela de status inicialmente
showScreen('status');

// Função para atualizar o timer a cada segundo
function updateTimer() {
    var timerElement = document.getElementById('timer');
    var currentDate = new Date();
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');
    var timerText = hours + ':' + minutes + ':' + seconds;
    timerElement.textContent = timerText;
}

// Atualizar o timer inicialmente
updateTimer();

// Atualizar o timer a cada segundo
setInterval(updateTimer, 1000);

