const expenseCounter = document.getElementById('expense-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let expenseChart = null;
let isError = false;

//This function takes a string as input and removes any characters that match the pattern defined in the regex
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, ''); //g flag indicates that the regex should match globally in the entire string.
}

//This function checks if a given string contains a specific format of numeric representation.
function isInvalidInput(str) {
    const regex = /\d+e\d+/i; //i flag makes the match case-insensitive, so its matches boths e and E (e.g., 2e10 or 2E10)
    return str.match(regex); // returns the match if found. if not return null
}

// Adding a new entry and set to 1 by using HTMLString and .insertAdjacentHTML to insert this in the existing container without replacing the current
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll(`input[type="text"]`).length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-price">Entry ${entryNumber} Price</label>
    <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-price" placeholder="Price"/>`;

    // insert the HTMLString in the inputContainer without overlapping the existing only inserting
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

// Calculate the total expenses 
function calculateExpenses(e) {
    e.preventDefault(); //prevents from reloading if the function is triggered
    isError = false;

    const categories = [
        { name: "Food", inputs: document.querySelectorAll("#food input[type='number']") },
        { name: "Housing", inputs: document.querySelectorAll("#housing input[type='number']") },
        { name: "Healthcare", inputs: document.querySelectorAll("#healthcare input[type='number']") },
        { name: "Utilities", inputs: document.querySelectorAll("#utilities input[type='number']") },
        { name: "Clothing", inputs: document.querySelectorAll("#clothing input[type='number']") },
        { name: "Entertainment", inputs: document.querySelectorAll("#entertainment input[type='number']") },
        { name: "Emergency Fund", inputs: document.querySelectorAll("#emergency-fund input[type='number']") },
        { name: "Loans", inputs: document.querySelectorAll("#loans input[type='number']") },
    ];

    // calling the getExpensesFromInputs function for categories expenses and sum them up
    const budgetTotal = getExpensesFromInputs([budgetNumberInput]);
    const expenses = categories.map(category => ({
        name: category.name,
        total: getExpensesFromInputs(category.inputs)
    }));

    if (isError) return;

    const usedExpenses = expenses.reduce((sum, category) => sum + category.total, 0);
    const remainingBudget = budgetTotal - usedExpenses; // budget left after substracting spend expenses to budgetTotal.
    const status = remainingBudget < 0 ? 'Exceed' : 'Covered'; // if overspent = Exceed if not = Covered by the budget.

    // display the output element the budget summary
    output.innerHTML = `
    <span class="${status.toLowerCase()}">
        $${Math.abs(remainingBudget).toFixed(2)} ${status}
    </span>
    <hr>
    <p>Budget: $${budgetTotal.toFixed(2)}</p>
    <p>Spent: $${usedExpenses.toFixed(2)}</p>
    <p>Remaining: $${Math.abs(remainingBudget).toFixed(2)}</p>
    `;

    output.classList.remove('hide');

    // Data fir pie chart
    const labels = expenses.map(category => category.name);
    const data = expenses.map(category => category.total).filter(value => !isNaN(value));

    const canvas = document.getElementById('expenseChart');
    // canvas.width = 200;  // Set width in pixels
    // canvas.height = 200; // Set height in pixels

    // Update the pie chart
    if (expenseChart) {
        expenseChart.data.labels = labels;
        expenseChart.data.datasets[0].data = data;
        expenseChart.update();
    } else {
        const ctx = document.getElementById('expenseChart').getContext('2d');
        expenseChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels,
                datasets: [{
                    label: 'Expense Distribution',
                    data,
                    backgroundColor: [
                        '#FF6384', '#36A23B', '#FFCE56',
                        '#48C0C0', '#9966FF', '#FF9F40',
                        '#C9CBCF', '#2F4F4F',
                    ],
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        });
    }
}

// Calculating expenses while handling invalid inputs
function getExpensesFromInputs(list) {
    let expenses = 0;

    // iterates through list to clean the input string by removing invalid match.
    for (const item of list) {
        const currVal = cleanInputString(item.value); 
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input ${invalidInputMatch[0]}`); //checks if the cleaned string is an invalid number
            isError = true;
            return null;
        }
        expenses += Number(currVal); //cleaned input convert to a number add to expenses
    }
    return expenses;
}

// reset all the inputs and the outputs in the expense tracker
function clearForm() {
    // finds all the elements with a class .input-container and converts the NodeList into an Array using Array.from
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    // Iterates over all .input-container and reset by innerHTML with an empty string ('').
    for (const container of inputContainers) {
        container.innerHTML = '';
    }
    // resets
    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');

    const canvas = document.getElementById('expenseChart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';

    if (expenseChart) {
        expenseChart.destroy();
        expenseChart = null;
    }
}

// Buttons listener to function
addEntryButton.addEventListener("click", addEntry);
expenseCounter.addEventListener("submit", calculateExpenses);
clearButton.addEventListener("click", clearForm);



