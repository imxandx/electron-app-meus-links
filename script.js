'use strict';

// Element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Testimonials modal functionality
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
    elementToggleFunc(modalContainer);
    elementToggleFunc(overlay);
};

testimonialsItems.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.textContent = this.querySelector("[data-testimonials-title]").textContent;
        modalText.textContent = this.querySelector("[data-testimonials-text]").textContent;
        testimonialsModalFunc();
    });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Filter functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

const filterFunc = (selectedValue) => {
    filterItems.forEach(item => {
        item.classList.toggle("active", selectedValue === "all" || selectedValue === item.dataset.category);
    });
};

select.addEventListener("click", () => elementToggleFunc(select));

selectItems.forEach(item => {
    item.addEventListener("click", function () {
        selectValue.textContent = this.textContent;
        elementToggleFunc(select);
        filterFunc(this.textContent.toLowerCase());
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        selectValue.textContent = this.textContent;
        filterFunc(this.textContent.toLowerCase());
        document.querySelector(".filter-btn.active").classList.remove("active");
        this.classList.add("active");
    });
});

// Form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
    input.addEventListener("input", () => {
        formBtn.disabled = !form.checkValidity();
    });
});

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
        pages.forEach(page => {
        page.classList.toggle("active", page.dataset.page === this.textContent.toLowerCase());
        });
        navigationLinks.forEach(nav => nav.classList.toggle("active", nav === this));
        window.scrollTo(0, 0);
    });
});
