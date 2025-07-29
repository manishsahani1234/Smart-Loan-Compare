// Loan tenure constraints for each loan type (min and max years)
const loanTenureConstraints = {
    home: { min: 5, max: 30 },
    personal: { min: 1, max: 7 },
    car: { min: 1, max: 7 },
    education: { min: 1, max: 10 },
    business: { min: 1, max: 10 },
    'two-wheeler': { min: 1, max: 5 }
};

const loanData = {
    home: {
        'SBI': { rate: 8.4, minAmount: 300000, maxAmount: 50000000, url: 'https://homeloans.sbi' },
        'HDFC': { rate: 8.7, minAmount: 500000, maxAmount: 75000000, url: 'https://hdfc.com/home-loan' },
        'LIC Housing': { rate: 8.6, minAmount: 400000, maxAmount: 50000000, url: 'https://lichousing.com' },
        'Axis Bank': { rate: 8.9, minAmount: 350000, maxAmount: 60000000, url: 'https://axisbank.com/home-loan' },
        'PNB': { rate: 8.5, minAmount: 250000, maxAmount: 50000000, url: 'https://pnbhousing.com' },
        'Bank of Baroda': { rate: 8.55, minAmount: 300000, maxAmount: 100000000, url: 'https://www.bankofbaroda.in/home-loan.htm' },
        'Kotak Mahindra': { rate: 8.75, minAmount: 500000, maxAmount: 50000000, url: 'https://www.kotak.com/en/home-loan.html' },
        'IDBI Bank': { rate: 8.65, minAmount: 300000, maxAmount: 10000000, url: 'https://www.idbi.com/home-loan.asp' }
    },
    personal: {
        'NAVI': { rate: 9.5, minAmount: 20000, maxAmount: 2000000, url: 'https://navi.com/personal-loan' },
        'Bajaj Finserv': { rate: 10.2, minAmount: 50000, maxAmount: 3500000, url: 'https://bajajfinserv.in/personal-loan' },
        'HDFC': { rate: 10.5, minAmount: 75000, maxAmount: 4000000, url: 'https://hdfc.com/personal-loan' },
        'ICICI': { rate: 11.0, minAmount: 100000, maxAmount: 5000000, url: 'https://icicibank.com/personal-loan' },
        'Kotak': { rate: 10.8, minAmount: 30000, maxAmount: 3000000, url: 'https://kotak.com/personal-loan' },
        'Axis Bank': { rate: 10.9, minAmount: 50000, maxAmount: 4000000, url: 'https://www.axisbank.com/personal-loan' },
        'Yes Bank': { rate: 11.2, minAmount: 100000, maxAmount: 5000000, url: 'https://www.yesbank.in/personal-loan' },
        'IndusInd Bank': { rate: 11.5, minAmount: 75000, maxAmount: 5000000, url: 'https://www.indusind.com/personal-loan' }
    },
    car: {
        'HDFC': { rate: 8.9, minAmount: 100000, maxAmount: 3000000, url: 'https://hdfc.com/car-loan' },
        'ICICI': { rate: 9.2, minAmount: 150000, maxAmount: 5000000, url: 'https://icicibank.com/car-loan' },
        'Axis Bank': { rate: 9.1, minAmount: 120000, maxAmount: 4000000, url: 'https://axisbank.com/car-loan' },
        'SBI': { rate: 8.8, minAmount: 80000, maxAmount: 5000000, url: 'https://sbi.co.in/car-loan' },
        'Tata Capital': { rate: 9.4, minAmount: 90000, maxAmount: 4000000, url: 'https://tatacapital.com/car-loan' },
        'Bank of Baroda': { rate: 9.0, minAmount: 100000, maxAmount: 3000000, url: 'https://www.bankofbaroda.in/car-loan.htm' },
        'Kotak Mahindra': { rate: 9.3, minAmount: 150000, maxAmount: 5000000, url: 'https://www.kotak.com/en/car-loan.html' },
        'Mahindra Finance': { rate: 9.6, minAmount: 100000, maxAmount: 2500000, url: 'https://www.mahindrafinance.com/car-loan.aspx' }
    },
    education: {
        'SBI': { rate: 8.3, minAmount: 50000, maxAmount: 2000000, url: 'https://sbi.co.in/education-loan' },
        'PNB': { rate: 8.6, minAmount: 40000, maxAmount: 1500000, url: 'https://pnb.co.in/education-loan' },
        'Bank of Baroda': { rate: 8.8, minAmount: 60000, maxAmount: 2000000, url: 'https://bob.com/education-loan' },
        'Canara Bank': { rate: 8.7, minAmount: 55000, maxAmount: 1800000, url: 'https://canarabank.com/education-loan' },
        'HDFC': { rate: 9.0, minAmount: 70000, maxAmount: 2500000, url: 'https://hdfc.com/education-loan' },
        'Axis Bank': { rate: 8.9, minAmount: 50000, maxAmount: 2000000, url: 'https://www.axisbank.com/education-loan' },
        'Avanse': { rate: 9.5, minAmount: 100000, maxAmount: 5000000, url: 'https://www.avanse.com/education-loan' },
        'Credenc': { rate: 9.2, minAmount: 50000, maxAmount: 3000000, url: 'https://www.credenc.com/education-loan' }
    },
    business: {
        'SBI': { rate: 10.5, minAmount: 100000, maxAmount: 5000000, url: 'https://sbi.co.in/business-loan' },
        'HDFC': { rate: 11.2, minAmount: 150000, maxAmount: 7500000, url: 'https://hdfc.com/business-loan' },
        'ICICI': { rate: 11.5, minAmount: 200000, maxAmount: 10000000, url: 'https://icicibank.com/business-loan' },
        'Axis Bank': { rate: 11.0, minAmount: 175000, maxAmount: 8000000, url: 'https://axisbank.com/business-loan' },
        'Kotak': { rate: 11.8, minAmount: 125000, maxAmount: 5000000, url: 'https://kotak.com/business-loan' },
        'Indifi': { rate: 12.5, minAmount: 50000, maxAmount: 5000000, url: 'https://www.indifi.com/business-loan' },
        'Lendingkart': { rate: 12.0, minAmount: 50000, maxAmount: 2000000, url: 'https://www.lendingkart.com/business-loan' },
        'FlexiLoans': { rate: 12.2, minAmount: 100000, maxAmount: 3000000, url: 'https://www.flexiloans.com/business-loan' }
    },
    'two-wheeler': {
        'Hero FinCorp': { rate: 12.5, minAmount: 20000, maxAmount: 500000, url: 'https://herofincorp.com/two-wheeler-loan' },
        'TVS Credit': { rate: 13.2, minAmount: 15000, maxAmount: 400000, url: 'https://tvscredit.com/two-wheeler-loan' },
        'Bajaj Finance': { rate: 12.8, minAmount: 25000, maxAmount: 600000, url: 'https://bajajfinserv.in/two-wheeler-loan' },
        'HDFC Bank': { rate: 12.0, minAmount: 30000, maxAmount: 500000, url: 'https://hdfc.com/two-wheeler-loan' },
        'ICICI Bank': { rate: 12.3, minAmount: 35000, maxAmount: 550000, url: 'https://icicibank.com/two-wheeler-loan' },
        'Axis Bank': { rate: 12.4, minAmount: 30000, maxAmount: 500000, url: 'https://www.axisbank.com/two-wheeler-loan' },
        'Shriram Finance': { rate: 13.0, minAmount: 20000, maxAmount: 400000, url: 'https://www.shriramfinance.in/two-wheeler-loan' },
        'Muthoot Finance': { rate: 13.5, minAmount: 25000, maxAmount: 300000, url: 'https://www.muthootfinance.com/two-wheeler-loan' }
    }
};

// Function to format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Function to get min and max amount for current loan type
function getLoanConstraints(loanType) {
    const banks = loanData[loanType];
    let minAmount = Infinity;
    let maxAmount = 0;

    for (const bank in banks) {
        const bankData = banks[bank];
        if (bankData.minAmount < minAmount) minAmount = bankData.minAmount;
        if (bankData.maxAmount > maxAmount) maxAmount = bankData.maxAmount;
    }

    return { minAmount, maxAmount };
}

// Function to update loan constraints when loan type changes
function updateLoanConstraints(loanType) {
    const constraints = getLoanConstraints(loanType);
    const loanAmountInput = document.getElementById('loanAmount');
    const loanTenureInput = document.getElementById('loanTenure');

    // Set min and max for loan amount
    loanAmountInput.min = constraints.minAmount;
    loanAmountInput.max = constraints.maxAmount;

    // Set placeholder for amount
    loanAmountInput.placeholder = `${formatCurrency(constraints.minAmount)} - ${formatCurrency(constraints.maxAmount)}`;

    // Get tenure constraints for this loan type
    const tenureConstraints = loanTenureConstraints[loanType];

    // Set min and max for tenure
    loanTenureInput.min = tenureConstraints.min;
    loanTenureInput.max = tenureConstraints.max;

    // Set placeholder for tenure
    loanTenureInput.placeholder = `${tenureConstraints.min}-${tenureConstraints.max} years`;

    // Clear previous values
    loanAmountInput.value = '';
    loanTenureInput.value = '';
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}

function hideErrors() {
    document.querySelectorAll('.error-msg').forEach(el => {
        el.style.display = 'none';
    });
}

function updateBankCards(loanType) {
    const bankGrid = document.getElementById('bankGrid');
    bankGrid.innerHTML = '';

    Object.keys(loanData[loanType]).forEach(bank => {
        const data = loanData[loanType][bank];
        const card = document.createElement('div');
        card.className = 'bank-card';
        card.innerHTML = `
            <div class="bank-header">
                <h3>${bank}</h3>
                <div class="interest-bubble">${data.rate}%</div>
            </div>
            <p class="bank-limit">Loan Range: ${formatCurrency(data.minAmount)} - ${formatCurrency(data.maxAmount)}</p>
            <div class="emi-result" data-bank="${bank}"></div>
        `;
        bankGrid.appendChild(card);
    });
}

function calculateEMI() {
    hideErrors();
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const tenureYears = parseInt(document.getElementById('loanTenure').value);
    const loanType = document.querySelector('.loan-tab.active').dataset.loan;
    const loanName = document.querySelector('.loan-tab.active span').textContent.trim();

    // Get loan constraints
    const constraints = getLoanConstraints(loanType);
    const tenureConstraints = loanTenureConstraints[loanType];

    // Update loan summary
    document.getElementById('summaryType').textContent = loanName;
    document.getElementById('summaryAmount').textContent = formatCurrency(amount);
    document.getElementById('summaryTenure').textContent = `${tenureYears} years`;

    let isValid = true;

    if (isNaN(amount) || amount <= 0) {
        showError('amountError', 'Please enter a valid loan amount');
        isValid = false;
    } else if (amount < constraints.minAmount) {
        showError('amountError', `Minimum loan amount for ${loanName} is ${formatCurrency(constraints.minAmount)}`);
        isValid = false;
    } else if (amount > constraints.maxAmount) {
        showError('amountError', `Maximum loan amount for ${loanName} is ${formatCurrency(constraints.maxAmount)}`);
        isValid = false;
    }

    if (isNaN(tenureYears) || tenureYears < tenureConstraints.min || tenureYears > tenureConstraints.max) {
        showError('tenureError', `Please enter tenure between ${tenureConstraints.min}-${tenureConstraints.max} years`);
        isValid = false;
    }

    if (!isValid) return;

    const tenureMonths = tenureYears * 12;
    let bestRate = Infinity;
    let lowestEMI = Infinity;
    let bestBank = '';
    let bestBankUrl = '';

    // Update bank cards for current loan type
    updateBankCards(loanType);

    Object.entries(loanData[loanType]).forEach(([bank, data]) => {
        const card = document.querySelector(`.emi-result[data-bank="${bank}"]`);

        if (amount < data.minAmount) {
            card.innerHTML = `
                <div class="error-msg" style="display:block; margin: 1rem 0;">
                    Minimum loan amount: ${formatCurrency(data.minAmount)}
                </div>
            `;
        } else if (amount > data.maxAmount) {
            card.innerHTML = `
                <div class="error-msg" style="display:block; margin: 1rem 0;">
                    Maximum loan amount: ${formatCurrency(data.maxAmount)}
                </div>
            `;
        } else {
            const monthlyRate = (data.rate / 12) / 100;
            const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
            const totalPayment = emi * tenureMonths;
            const interestAmount = totalPayment - amount;
            const principalPercent = ((amount / totalPayment) * 100).toFixed(0);

            // Update best rate and lowest EMI for summary
            if (data.rate < bestRate) {
                bestRate = data.rate;
                bestBank = bank;
                bestBankUrl = data.url;
            }
            if (emi < lowestEMI) lowestEMI = emi;

            card.innerHTML = `
                <div class="emi-result">
                    <p>
                        <span>Monthly EMI:</span>
                        <span>${formatCurrency(Math.round(emi))}</span>
                    </p>
                    <p>
                        <span>Total Interest:</span>
                        <span>${formatCurrency(Math.round(interestAmount))}</span>
                    </p>
                    <p>
                        <span>Total Payment:</span>
                        <span>${formatCurrency(Math.round(totalPayment))}</span>
                    </p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${principalPercent}%;"></div>
                    </div>
                    <p style="text-align: center; font-size: 0.9rem; color: #64748b;">
                        ${principalPercent}% Principal | ${(100 - principalPercent).toFixed(0)}% Interest
                    </p>
                </div>
                <button class="apply-btn" onclick="window.open('${data.url}', '_blank')">Apply Now</button>
            `;
        }
    });

    // Update loan summary with best rate and lowest EMI
    document.getElementById('summaryRate').textContent = bestRate.toFixed(1) + '%';
    document.getElementById('summaryEMI').textContent = formatCurrency(Math.round(lowestEMI));

    // Update best offer section
    document.getElementById('bestBank').textContent = `${bestBank} ${loanName}`;
    document.getElementById('bestBankLink').href = bestBankUrl;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with home loan
    updateBankCards('home');
    updateLoanConstraints('home');

    // Tab click event
    document.querySelectorAll('.loan-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelector('.loan-tab.active').classList.remove('active');
            this.classList.add('active');
            const loanType = this.dataset.loan;
            updateBankCards(loanType);
            updateLoanConstraints(loanType);

            // Reset summary
            document.getElementById('summaryAmount').textContent = '₹0';
            document.getElementById('summaryTenure').textContent = '0 years';
            document.getElementById('summaryRate').textContent = '0%';
            document.getElementById('summaryEMI').textContent = '₹0';
            document.getElementById('bestBank').textContent = '-';
        });
    });

    // Calculate button click event
    document.getElementById('calculateBtn').addEventListener('click', calculateEMI);
});