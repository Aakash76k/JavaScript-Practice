
const transactionForm = document.getElementById("transactionForm");

const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");

const transactionList = document.getElementById("transactionList");
const emptyMessage = document.getElementById("emptyMessage");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");

// Get transactions from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


// Add Transaction
transactionForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;

    if (description === "" || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    const transaction = {
        id: Date.now(),
        description: description,
        amount: amount,
        type: type
    };

    transactions.push(transaction);

    saveTransactions();

    displayTransactions();

    transactionForm.reset();

});


// Display Transactions
function displayTransactions() {

    transactionList.innerHTML = "";

    if (transactions.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    transactions.forEach(function (transaction) {

        const li = document.createElement("li");

        li.classList.add(
            "transaction",
            transaction.type
        );

        const sign = transaction.type === "income" ? "+" : "-";

        li.innerHTML = `
            <div class="transaction-info">
                <h3>${transaction.description}</h3>
                <p>${transaction.type.toUpperCase()}</p>
            </div>

            <div class="transaction-right">

                <span class="amount ${
                    transaction.type === "income"
                        ? "income-amount"
                        : "expense-amount"
                }">
                    ${sign} ₹${transaction.amount}
                </span>

                <button
                    class="delete-btn"
                    onclick="deleteTransaction(${transaction.id})"
                >
                    Delete
                </button>

            </div>
        `;

        transactionList.appendChild(li);

    });

    updateSummary();
}


// Delete Transaction
function deleteTransaction(id) {

    transactions = transactions.filter(function (transaction) {
        return transaction.id !== id;
    });

    saveTransactions();

    displayTransactions();
}


// Update Balance, Income and Expense
function updateSummary() {

    let income = 0;
    let expense = 0;

    transactions.forEach(function (transaction) {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

    });

    const balance = income - expense;

    incomeElement.textContent = `₹${income}`;
    expenseElement.textContent = `₹${expense}`;
    balanceElement.textContent = `₹${balance}`;
}


// Save to localStorage
function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}


// Initial display
displayTransactions();

