// Define a class for BankAccount
class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
        this.transactions = [];
        this.accountNumber = this.generateAccountNumber();
        if (accountType === "savings") {
            this.interestRate = 0.02; // 2% annual interest rate for savings accounts
        } else {
            this.interestRate = 0; // No interest for checking accounts
            this.overdraftLimit = 100; // Overdraft limit for checking accounts
        }
        this.isClosed = false;
    }

    generateAccountNumber() {
        return Math.floor(Math.random() * 1000000000); // Generate a random 9-digit account number
    }

    deposit(amount) {
        if (this.isClosed) {
            throw new Error("Account is closed.");
        }
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push(`Deposit: +$${amount.toFixed(2)}`);
            return this.balance;
        } else {
            throw new Error("Invalid amount for deposit.");
        }
    }

    withdraw(amount) {
        if (this.isClosed) {
            throw new Error("Account is closed.");
        }
        if (amount > 0) {
            if (this.accountType === "checking" && amount > this.balance + this.overdraftLimit) {
                throw new Error("Transaction exceeds overdraft limit.");
            }
            if (amount <= this.balance) {
                this.balance -= amount;
                this.transactions.push(`Withdrawal: -$${amount.toFixed(2)}`);
                return this.balance;
            } else {
                throw new Error("Insufficient funds.");
            }
        } else {
            throw new Error("Invalid amount for withdrawal.");
        }
    }

    addInterest() {
        if (this.accountType === "savings") {
            const interest = this.balance * this.interestRate;
            this.deposit(interest);
            this.transactions.push(`Interest Added: +$${interest.toFixed(2)}`);
        }
    }

    getTransactionHistory() {
        return this.transactions;
    }

    closeAccount() {
        this.isClosed = true;
    }
}

// Create an array to store all accounts
const allAccounts = [];

// Define a function to check if an account already exists
function accountExists(accountHolder, accountType) {
    return allAccounts.some(account => account.accountHolder === accountHolder && account.accountType === accountType);
}

// Define a function to find an account by account number
function findAccountByNumber(accountNumber) {
    return allAccounts.find(account => account.accountNumber === accountNumber);
}

// DOM elements
const accountTypeSelect = document.getElementById("account-type");
const accountHolderInput = document.getElementById("account-holder");
const balanceSpan = document.getElementById("balance");
const accountNumberSpan = document.getElementById("account-number");
const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const transactionHistoryButton = document.getElementById("transaction-history");
const transactionHistoryDiv = document.getElementById("transaction-history-div");
const transactionTypeSelect = document.getElementById("transaction-type");
const transactionTypeDiv = document.getElementById("transaction-type-div");
const overdraftLimitInput = document.getElementById("overdraft-limit");
const createAccountButton = document.getElementById("create-account");
const transferButton = document.getElementById("transfer");

// Added: Balance Inquiry Button
const balanceInquiryButton = document.getElementById("balance-inquiry");

// Initialize the bank account
let currentAccount = null;

// Event listeners
depositButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    try {
        if (currentAccount) {
            const newBalance = currentAccount.deposit(amount);
            balanceSpan.textContent = newBalance.toFixed(2);
        } else {
            throw new Error("Please create an account first");
        }
    } catch (error) {
        alert(error.message);
    }
});

withdrawButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    try {
        if (currentAccount) {
            const newBalance = currentAccount.withdraw(amount);
            balanceSpan.textContent = newBalance.toFixed(2);
        } else {
            throw new Error("Please create an account first");
        }
    } catch (error) {
        alert(error.message);
    }
});

transactionHistoryButton.addEventListener("click", () => {
    if (currentAccount) {
        const transactionHistory = currentAccount.getTransactionHistory();
        transactionHistoryDiv.innerHTML = "<h2>Transaction History</h2>";
        const ul = document.createElement("ul");
        transactionHistory.forEach((transaction) => {
            const li = document.createElement("li");
            li.textContent = transaction;
            ul.appendChild(li);
        });
        transactionHistoryDiv.appendChild(ul);
    } else {
        alert("Please create an account first");
    }
});

accountTypeSelect.addEventListener("change", () => {
    const accountType = accountTypeSelect.value;
    const accountHolder = accountHolderInput.value;

    switch (accountType) {
        case "savings":
            currentAccount = new BankAccount(accountHolder, "savings");
            transactionTypeDiv.style.display = "block";
            break;
        case "checking":
            currentAccount = new BankAccount(accountHolder, "checking");
            transactionTypeDiv.style.display = "block";
            break;
        default:
            throw new Error("Invalid account type");
    }

    balanceSpan.textContent = currentAccount.balance.toFixed(2);
    accountNumberSpan.textContent = currentAccount.accountNumber; // Display account number
});

// Additional feature: Close Account button
const closeAccountButton = document.getElementById("close-account");

closeAccountButton.addEventListener("click", () => {
    if (currentAccount) {
        currentAccount.closeAccount();
        alert("Account has been closed.");
        // Reset the current account
        currentAccount = null;
        balanceSpan.textContent = "0.00";
        accountNumberSpan.textContent = "N/A"; // Reset account number
    } else {
        alert("No account to close.");
    }
});

// Additional feature: Transaction Type select and switch
transactionTypeSelect.addEventListener("change", () => {
    const transactionType = transactionTypeSelect.value;

    switch (transactionType) {
        case "deposit":
            amountInput.placeholder = "Deposit Amount";
            depositButton.textContent = "Deposit";
            withdrawButton.style.display = "none";
            overdraftLimitInput.style.display = "none";
            break;
        case "withdraw":
            amountInput.placeholder = "Withdraw Amount";
            depositButton.style.display = "none";
            withdrawButton.style.display = "block";
            overdraftLimitInput.style.display = "block";
            break;
        default:
            amountInput.placeholder = "Amount";
            depositButton.textContent = "Deposit";
            withdrawButton.style.display = "none";
            overdraftLimitInput.style.display = "none";
            break;
    }
});

// Additional feature: Create Account button
createAccountButton.addEventListener("click", () => {
    const accountType = accountTypeSelect.value;
    const accountHolder = accountHolderInput.value;

    if (!accountExists(accountHolder, accountType)) {
        const newAccount = new BankAccount(accountHolder, accountType);
        allAccounts.push(newAccount);
        currentAccount = newAccount;
        balanceSpan.textContent = currentAccount.balance.toFixed(2);
        accountNumberSpan.textContent = currentAccount.accountNumber; // Display account number
        alert("Account created successfully!");
    } else {
        alert("An account with the same holder name and account type already exists.");
    }
});

// Additional feature: Transfer Funds button
transferButton.addEventListener("click", () => {
    const senderAccountNumber = parseFloat(document.getElementById("sender-account-number").value);
    const receiverAccountNumber = parseFloat(document.getElementById("receiver-account-number").value);
    const transferAmount = parseFloat(document.getElementById("transfer-amount").value);

    const senderAccount = findAccountByNumber(senderAccountNumber);
    const receiverAccount = findAccountByNumber(receiverAccountNumber);

    if (!senderAccount) {
        alert("Sender account not found.");
        return;
    }

    if (!receiverAccount) {
        alert("Receiver account not found.");
        return;
    }

    try {
        const newSenderBalance = senderAccount.withdraw(transferAmount);
        receiverAccount.deposit(transferAmount);
        alert(`Funds transferred successfully. Sender's new balance: $${newSenderBalance.toFixed(2)}`);
    } catch (error) {
        alert(error.message);
    }
});

// Additional feature: Balance Inquiry button
balanceInquiryButton.addEventListener("click", () => {
    if (currentAccount) {
        alert(`Balance Inquiry: $${currentAccount.balance.toFixed(2)}`);
    } else {
        alert("Please create an account first");
    }
});
