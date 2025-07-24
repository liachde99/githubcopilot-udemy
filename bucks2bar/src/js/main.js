const months = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];
const monthLabels = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
];

function collectValues(prefix) {
    return months.map(m => {
        const el = document.getElementById(`${prefix}-${m}`);
        return el && el.value ? Number(el.value) : 0;
    });
}

let chartInstance = null;

function renderBarChart() {
    const incomes = collectValues("income");
    const expenses = collectValues("expenses");
    const canvas = document.getElementById("barChart");
    const ctx = canvas.getContext("2d");

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: monthLabels,
            datasets: [
                {
                    label: "Einkommen",
                    data: incomes,
                    backgroundColor: "#198754"
                },
                {
                    label: "Ausgaben",
                    data: expenses,
                    backgroundColor: "#dc3545"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: "top" }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 500 }
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const chartTab = document.getElementById("chart-tab");
    const refreshBtn = document.getElementById("refreshChart");

    function showChartIfTabActive() {
        if (document.getElementById("chart").classList.contains("active")) {
            renderBarChart();
        }
    }

    chartTab && chartTab.addEventListener("shown.bs.tab", showChartIfTabActive);
    refreshBtn && refreshBtn.addEventListener("click", renderBarChart);

    // Initial rendering if the chart tab is active
    showChartIfTabActive();

    document.getElementById("downloadChart").addEventListener("click", function () {
        const canvas = document.getElementById("barChart");
        const imageURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = "diagramm.png";
        link.click();
    });

    // Theme switcher
    const themeBtn = document.getElementById("toggleTheme");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    function setTheme(mode) {
        const tabContent = document.getElementById("mainTabContent");
        if (mode === "dark") {
            body.classList.add("bg-dark", "text-light");
            themeBtn.classList.remove("btn-outline-light");
            themeBtn.classList.add("btn-outline-dark");
            themeIcon.classList.remove("bi-moon");
            themeIcon.classList.add("bi-sun");
            tabContent.classList.remove("bg-light");
            tabContent.classList.add("bg-dark", "text-light");
        } else {
            body.classList.remove("bg-dark", "text-light");
            themeBtn.classList.remove("btn-outline-dark");
            themeBtn.classList.add("btn-outline-light");
            themeIcon.classList.remove("bi-sun");
            themeIcon.classList.add("bi-moon");
            tabContent.classList.remove("bg-dark", "text-light");
            tabContent.classList.add("bg-light");
        }
        localStorage.setItem("theme", mode);
    }

    // Initial theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    themeBtn.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-dark");
        setTheme(isDark ? "light" : "dark");
    });
        
    // Show/hide login popover on hover
    const loginBtn = document.getElementById('loginBtn');
    const loginPopover = document.getElementById('loginPopover');

    loginBtn.addEventListener('mouseenter', () => {
        loginPopover.style.display = 'block';
    });
    loginBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!loginPopover.matches(':hover')) loginPopover.style.display = 'none';
        }, 100);
    });
    loginPopover.addEventListener('mouseenter', () => {
        loginPopover.style.display = 'block';
    });
    loginPopover.addEventListener('mouseleave', () => {
        loginPopover.style.display = 'none';
    });
    
    const loginInput = document.getElementById('loginInput');
    
    loginInput.addEventListener('input', () => {
        const value = loginInput.value;
        const hasLower = /[a-z]/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecial = /[^A-Za-z0-9]/.test(value);
        if (hasLower && hasUpper && hasNumber && hasSpecial) {
            loginInput.style.borderColor = 'green';
        } else {
            loginInput.style.borderColor = 'red';
        }
    });
});