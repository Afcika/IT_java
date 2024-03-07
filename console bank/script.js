// Define initial account balances
let accounts = {
    "luka": 2000,
    "nika": 3000
};

// Function to handle adding money to an account
function addMoney() {
    let username = prompt("Enter username:");
    let amount = parseFloat(prompt("Enter amount to add:"));

    if (isNaN(amount)) {
        alert("Invalid amount.");
        return;
    }

    if (accounts.hasOwnProperty(username)) {
        accounts[username] += amount;
        alert(`Added $${amount} to ${username}'s account.`);
        alert(`${username}'s remaining balance: $${accounts[username]}`);
    } else {
        alert("Account not found.");
    }
}

// Function to handle getting money from an account
function getMoney() {
    let username = prompt("Enter username:");
    let amount = parseFloat(prompt("Enter amount to get:"));

    if (isNaN(amount)) {
        alert("Invalid amount.");
        return;
    }

    if (accounts.hasOwnProperty(username)) {
        if (accounts[username] >= amount) {
            accounts[username] -= amount;
            alert(`Withdrawn $${amount} from ${username}'s account.`);
            alert(`${username}'s remaining balance: $${accounts[username]}`);
        } else {
            alert(`Insufficient funds in ${username}'s account.`);
        }
    } else {
        alert("Account not found.");
    }
}

// Function to handle checking money in an account
function checkMoney() {
    let username = prompt("Enter username:");

    if (accounts.hasOwnProperty(username)) {
        alert(`${username}'s current balance: $${accounts[username]}`);
    } else {
        alert("Account not found.");
    }
}

// Main function to prompt user for action
function main() {
    let action = prompt("Choose an action: 'add', 'get', or 'check'");

    if (action === 'add') {
        addMoney();
    } else if (action === 'get') {
        getMoney();
    } else if (action === 'check') {
        checkMoney();
    } else {
        alert("Invalid action.");
    }
}

// Call main function
main();
