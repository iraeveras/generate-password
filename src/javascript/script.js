function getChartTypes() {
    const uppercase = document.querySelector('#include-uppercase').checked;
    const lowercase = document.querySelector('#include-lowercase').checked;
    const number = document.querySelector('#include-number').checked;
    const specialCharacter = document.querySelector('#include-spacial-character').checked;

    const chartTypes = [];

    if (uppercase) {
        chartTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if (lowercase) {
        chartTypes.push('abcdefghijklmnopqrstuvwxyz')
    }

    if (number) {
        chartTypes.push('0123456789')
    }

    if (specialCharacter) {
        chartTypes.push('!@#$%^&*()_-+={}[]|\\/?><:;"\'.,~`');
    }

    return chartTypes
}

function getPasswordSize() {
    const size = document.querySelector('#size').value;

    if (isNaN(size) || size < 4 || size > 128) {
        alert('Tamanho inválid, digite um número entre 4 e 128')
    }

    return size
}

function randonChartType(chartTypes) {
    const randonIndex = Math.floor(Math.random() * chartTypes.length);


    return chartTypes[randonIndex][Math.floor(Math.random() * chartTypes[randonIndex].length)];
}

function generatePassword(size, chartTypes) {
    let passwordGenerate = '';
    while (passwordGenerate.length < size) {
        passwordGenerate += randonChartType(chartTypes)
    }

    return passwordGenerate
}

document.querySelector('#generate').addEventListener('click', function () {
    const size = getPasswordSize();
    const charTypes = getChartTypes();
    const passwordGenerated = generatePassword(size, charTypes);

    document.querySelector('#password-container').classList.add('show');
    document.querySelector('#password').textContent = passwordGenerated;

})