const sidebarBtn = document.getElementsByClassName("sidebar-btn")[0];
const menuItem = document.getElementsByClassName("sidebar-item");

const budget_center = menuItem[2];
const finance = menuItem[3];

sidebarBtn.addEventListener("click", function() {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const sidebarBody = document.getElementsByClassName("sidebar-body")[0];

    if(sidebar.classList.contains("active")){
        sidebar.classList.remove("active");
        sidebarBody.classList.remove("showAnim");

        console.log("Close Sidebar");
    } else {
        sidebar.classList.add("active");
        sidebarBody.classList.add("showAnim");
        
        console.log("Open Sidebar");
    }
});

budget_center.addEventListener("click", function() {

    if(budget_center.classList.contains("selected")){
        budget_center.classList.remove("selected");
    } else {
        budget_center.classList.add("selected");
    }
});

finance.addEventListener("click", function() {

    if(finance.classList.contains("selected")){
        finance.classList.remove("selected");
    } else {
        finance.classList.add("selected");
    }
});

// Sidebar Items Functions

const dashboard = document.getElementById("dashboard");
const dpr = document.getElementById("dpr");

// Budget Center Btns
const academic = document.getElementById("academic");
const admin = document.getElementById("admin");
const trust_fund = document.getElementById("trust_fund");
const auxiliary = document.getElementById("auxiliary");

// Finance Btns
const institutional = document.getElementById("institutional");
const off_budget = document.getElementById("off_budget");
const petty_cash = document.getElementById("petty_cash");
const reports = document.getElementById("reports");

// Reference Btns
const budget_code = document.getElementById("budget_code");
const office = document.getElementById("office");
const payee = document.getElementById("payee");

// Users Btn
const users = document.getElementById("users");

dashboard.addEventListener("click", function() {
    window.location.href = "/main/dashboard/index.html";
});

dpr.addEventListener("click", function() {
    window.location.href = "/main/dpr/index.html";
});

academic.addEventListener("click", function() {
    window.location.href = "/main/finance/budget_center/academic/index.html";
});

admin.addEventListener("click", function() {
    window.location.href = "/main/finance/budget_center/admin/index.html";
});

trust_fund.addEventListener("click", function() {
    window.location.href = "/main/finance/budget_center/trust_fund/index.html";
});

auxiliary.addEventListener("click", function() {
    window.location.href = "/main/finance/budget_center/auxiliary/index.html";
});

institutional.addEventListener("click", function() {
    window.location.href = "/main/finance/institutional/index.html";
});

off_budget.addEventListener("click", function() {
    window.location.href = "/main/finance/off_budget/index.html";
});

petty_cash.addEventListener("click", function() {
    window.location.href = "/main/finance/petty_cash/index.html";
});

reports.addEventListener("click", function() {
    window.location.href = "/main/finance/report/index.html";
});

budget_code.addEventListener("click", function() {
    window.location.href = "/main/reference/budget_code/index.html";
});

office.addEventListener("click", function() {
    window.location.href = "/main/reference/office/index.html";
});

payee.addEventListener("click", function() {
    window.location.href = "/main/reference/payee/index.html";
});

users.addEventListener("click", function() {
    window.location.href = "/main/users/index.html";
});