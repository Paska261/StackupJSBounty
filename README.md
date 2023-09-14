# StackupJSBounty# Bank Account Management Website

## Overview

This web application allows users to simulate bank account management with features like creating accounts, depositing, withdrawing, checking balances, transferring funds, viewing transaction histories, closing accounts, and performing balance inquiries. The project is built using HTML, CSS, and JavaScript, and it extensively utilizes classes, switch statements, and try-catch-finally statements.

## Instructions

### Create an Account

1. Select an account type (Savings or Checking).
2. Enter the account holder's name.
3. Click the "Create Account" button to create a new account.

### Deposit and Withdraw

1. After creating an account, you can perform transactions.
2. Select the transaction type (Deposit or Withdraw).
3. Enter the transaction amount.
4. Click the "Deposit" or "Withdraw" button.
5. If you choose "Withdraw" for a checking account, you'll need to specify an overdraft limit.

### Transfer Funds

1. To transfer funds between accounts:
2. Enter the sender's account number.
3. Enter the receiver's account number.
4. Specify the transfer amount.
5. Click the "Transfer Funds" button.

### View Transaction History

- Click the "Transaction History" button to see a list of your recent transactions.

### Balance Inquiry

- For each account, you can perform a balance inquiry by clicking the "Balance Inquiry" button.

### Close Account

- To close an account, click the "Close Account" button. This action is irreversible.

## Code Walkthrough

### Why Classes?

The core of this application is the `BankAccount` class, which represents bank accounts. It's used to create, manage, and track transactions for individual accounts.

### Switch Statements

Switch statements are used to handle various scenarios, such as selecting account types, transaction types, and managing overdraft limits. They provide a structured way to handle user inputs.

### Try-Catch-Finally Statements

Exception handling is crucial for managing errors gracefully. Try-catch-finally statements are used to catch and handle exceptions, ensuring that the application remains robust even in the face of invalid inputs or other issues.

The website also keeps track of all created accounts in an array, ensuring that users can't create multiple accounts with the same account holder name and type.

Feel free to explore the website and interact with its features to better understand how bank account management is simulated using classes, switch statements, and error handling. Enjoy using the Bank Account Management Website!

Specify the transfer amount.
Click the "Transfer Funds" button.
View Transaction History:

Click the "Transaction History" button to access a list of recent transactions.
Balance Inquiry:

For each account, perform a balance inquiry by clicking the "Balance Inquiry" button.
Close Account:

To close an account, click the "Close Account" button. This action is irreversible.
Code Walkthrough:
Why Classes?
The project employs classes primarily for encapsulation and organization. The BankAccount class serves as the blueprint for individual bank accounts. By encapsulating account properties and methods within a class, we achieve a clean separation of concerns, making it easier to manage and maintain the codebase. Each account operates independently, and this encapsulation ensures that changes or errors in one account don't affect others.

How Switch Statements Help:
Switch statements play a pivotal role in managing various user scenarios, providing a structured approach to handle different cases. Here's how they are used:

Account Type Selection: The switch statement is used to determine the selected account type, allowing the application to create either a savings or checking account object accordingly.

Transaction Type Selection: For deposit and withdrawal, a switch statement helps switch between these two transaction types, altering the user interface and behavior dynamically.

The Role of Try-Catch Statements:
Exception handling is fundamental for maintaining the robustness of the application. Try-catch statements are employed to catch and gracefully handle exceptions that may arise from user actions or invalid inputs. They ensure that the application doesn't crash and provides user-friendly error messages. For instance:

Insufficient Funds: A try-catch block catches exceptions when a withdrawal exceeds available funds, ensuring users receive a helpful "Insufficient funds" error message.

Overdraft Limit: For checking accounts, try-catch is used to detect when withdrawals exceed the overdraft limit, preventing users from overdrawing their accounts.

By using classes, switch statements, and try-catch statements judiciously, this website offers a smooth and error-tolerant user experience while providing a practical demonstration of how these programming constructs enhance code organization, manage user interactions, and ensure application reliability. Enjoy using the Bank Account Management Website!
