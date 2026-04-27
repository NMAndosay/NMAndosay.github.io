async function loadSection(placeholderId, filePath) {
    const response = await fetch(filePath);
    const data = await response.text();
    document.getElementById(placeholderId).innerHTML = data;
}

function setupMobileMenu() {
    const menu = document.querySelector('#mobile_menu');
    const menuLinks = document.querySelector('.navbar_menu');

    if (menu && menuLinks) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }
}

function observeSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                section.classList.add("animate");
                setActiveLink(sectionId); // 👈 ADD THIS
            }
        });
    }, options);

    observer.observe(section);
}

function setActiveLink(sectionId) {
    const links = document.querySelectorAll(".navbar_links");

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
        }
    });
}

// THEME TOGGLE ----------------------------------------------------
function setupThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");
    const icon = document.getElementById("themeIcon");

    if (!toggleBtn || !icon) return;

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        if (isDark) {
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
        }
    });
}

async function loadAllSections() {
    await loadSection("navbar-placeholder", "./navigation/navbar.html");
    await loadSection("home-placeholder", "./sections/home.html");
    await loadSection("about-placeholder", "./sections/about.html");
    await loadSection("skills-placeholder", "./sections/skills.html");
    await loadSection("projects-placeholder", "./sections/projects.html");
    await loadSection("experience-placeholder", "./sections/experience.html");
    await loadSection("education-placeholder", "./sections/education.html");
    await loadSection("contacts-placeholder", "./sections/contacts.html");
    await loadSection("practicum-placeholder", "./sections/practicum.html");

    // AFTER loading, setup JS features
    setupMobileMenu();
    setupThemeToggle();
    initProjects();

    observeSection("home_section");
    observeSection("about_section");
    observeSection("skills_section");
    observeSection("projects_section");
    observeSection("experience_section");
    observeSection("education_section");
    observeSection("contacts_section");
    observeSection("practicum_section");
}

document.addEventListener("DOMContentLoaded", loadAllSections);