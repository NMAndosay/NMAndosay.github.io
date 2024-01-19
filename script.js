const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    function observeSection(sectionId) {
        var section = document.getElementById(sectionId);

        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    section.classList.add("animate");
                } else {
                    section.classList.remove("animate");
                }
            });
        }, options);

        observer.observe(section);
    }

    // Observe each section
    observeSection("skills_section");
    observeSection("about_section");
    observeSection("projects_section");
    observeSection("achievements_section");
});
