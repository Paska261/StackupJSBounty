# StackupJSBounty
Bank Account Management Website
This web application is designed to simulate bank account management, offering a range of functionalities like creating accounts, depositing, withdrawing, checking balances, transferring funds, viewing transaction histories, closing accounts, and performing balance inquiries. The project is constructed using HTML, CSS, and JavaScript and extensively relies on classes, try-catch statements, and switch statements to achieve its functionality.

Instructions:
Create an Account:

Choose an account type (Savings or Checking).
Provide the account holder's name.
Click the "Create Account" button to generate a new account.
Deposit and Withdraw:

Following the creation of an account, users can perform transactions.
Select the transaction type (Deposit or Withdraw).
Input the transaction amount.
Click the "Deposit" or "Withdraw" button.
For a checking account, if "Withdraw" is selected, an overdraft limit must be specified.
Transfer Funds:

To transfer funds between accounts:
Enter the sender's account number.
Provide the receiver's account number.
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
