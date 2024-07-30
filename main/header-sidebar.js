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