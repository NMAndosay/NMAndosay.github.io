window.initSkills = function () {
    const skillData = {
        "Frontend": [
            { name: "HTML", image: "images/skillsImg/html-logo.png" },
            { name: "CSS", image: "images/skillsImg/css-logo.png" },
            { name: "JavaScript", image: "images/skillsImg/javascript-logo.png" },
            { name: "TypeScript", image: "images/skillsImg/typescript-logo.png" },
            { name: "ReactJS", image: "images/skillsImg/react-logo.png" },
            { name: "Vite", image: "images/skillsImg/vite-logo.png" },
        ],
        "Backend": [
            { name: "NodeJS", image: "images/skillsImg/nodejs-logo.png" },
            { name: "Python", image: "images/skillsImg/python-logo.png" },
            { name: "Django", image: "images/skillsImg/django-logo.png" },
            { name: "Flask", image: "images/skillsImg/flask-logo.png" },
            { name: "C#", image: "images/skillsImg/csharp-logo.png" },
            { name: "REST API", image: "images/skillsImg/restapi-logo.png" },
        ],
        "Database": [
            { name: "MySQL", image: "images/skillsImg/mysql-logo.png" },
            { name: "MongoDB", image: "images/skillsImg/mongodb-logo.png" },
            { name: "PostgreSQL", image: "images/skillsImg/postgresql-logo.png" },
        ],
        "Data & Analytics": [
            { name: "SQL", image: "images/skillsImg/sql-logo.png" },
            { name: "Amazon Athena", image: "images/skillsImg/aws-athena-logo.png" },
            // { name: "Pandas", image: "images/skillsImg/pandas-logo.png" },
            // { name: "NumPy", image: "images/skillsImg/numpy-logo.png" },
            { name: "Power BI", image: "images/skillsImg/power-bi-logo.png" },
            { name: "Jupyter Notebook", image: "images/skillsImg/jupyter-logo.png" },
        ],
        "Tools & Others": [
            { name: "Git", image: "images/skillsImg/git-logo.png" },
            { name: "GitHub", image: "images/skillsImg/github-logo.png" },
            { name: "Visual Studio Code", image: "images/skillsImg/vscode-logo.png" },
            { name: "Visual Studio", image: "images/skillsImg/vs-logo.png" },
            { name: "Figma", image: "images/skillsImg/figma-logo.png" },
            { name: "Canva", image: "images/skillsImg/canva-logo.png" },
            { name: "Postman", image: "images/skillsImg/postman-logo.png" },
        ]
    };

    const categories = Object.keys(skillData);

    const folderContainer = document.querySelector(".skills-folder-group");
    const skillList = document.querySelector(".skills-window-list");
    const windowTitle = document.querySelector(".skills-window-title");
    const dropdownContainer = document.querySelector(".category-filter");

    const leftArrow = document.querySelector(".skills-arrow-left");
    const rightArrow = document.querySelector(".skills-arrow-right");

    const breadcrumb = document.getElementById("skillsBreadcrumb");

    let currentCategory = null;
    let currentIndex = 0;

    // ---------------- FOLDERS ----------------
    function renderFolders() {
        folderContainer.innerHTML = "";

        Object.keys(skillData).forEach(category => {
            const div = document.createElement("div");
            div.className = "skills-folder-item";

            div.innerHTML = `
                <div class="skill-folder-image">
                    <img src="images/myIcons/folder-logo.png" alt="Folder Icon">
                </div>
                <div class="skill-name">${category}</div>
            `;

            div.onclick = () => setActiveCategory(category);

            folderContainer.appendChild(div);
        });
    }

    // ---------------- SKILLS ----------------
    function renderSkills(category) {
        skillList.innerHTML = "";

        skillData[category].forEach(skill => {
            const item = document.createElement("div");
            item.className = "skills-window-item";

            item.innerHTML = `
                <div class="skill-image">
                    <img src="${skill.image}" alt="${skill.name}">
                </div>
                <div class="skill-name">${skill.name}</div>
            `;

            skillList.appendChild(item);
        });

        breadcrumb.innerHTML = `Skills <span style="opacity:0.5;">›</span> ${category}`;
    }

    // ---------------- ACTIVE CATEGORY ----------------
    function setActiveCategory(category) {
        currentCategory = category;
        currentIndex = categories.indexOf(category);

        renderSkills(category);
        updateActiveFolder();
        updateDropdown();
    }

    // ---------------- ACTIVE FOLDER UI ----------------
    function updateActiveFolder() {
        document.querySelectorAll(".skills-folder-item").forEach(el => {
            el.classList.remove("active");

            if (el.querySelector(".skill-name")?.textContent === currentCategory) {
                el.classList.add("active");
            }
        });
    }

    // ---------------- DROPDOWN ----------------
    function renderDropdown() {
        const select = document.createElement("select");

        categories.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat;
            select.appendChild(option);
        });

        select.onchange = (e) => {
            setActiveCategory(e.target.value);
        };

        dropdownContainer.appendChild(select);
    }

    function updateDropdown() {
        const select = dropdownContainer.querySelector("select");
        if (select) select.value = currentCategory;
    }

    // ---------------- ARROWS ----------------
    function nextCategory() {
        currentIndex = (currentIndex + 1) % categories.length;
        setActiveCategory(categories[currentIndex]);
    }

    function prevCategory() {
        currentIndex = (currentIndex - 1 + categories.length) % categories.length;
        setActiveCategory(categories[currentIndex]);
    }

    // ---------------- INIT ----------------
    function init() {
        renderFolders();
        renderDropdown();

        leftArrow?.addEventListener("click", prevCategory);
        rightArrow?.addEventListener("click", nextCategory);

        const firstCategory = categories[0];
        setActiveCategory(firstCategory);

        const closeBtn = document.getElementById("closeSkills");

        if (closeBtn) {
            closeBtn.onclick = () => {
                const about = document.getElementById("about_section");
                if (about) {
                    about.scrollIntoView({ behavior: "smooth" });
                }
            };
        }
    }

    // ---------------- TAB SWITCHING FOR PRACTICUM----------------
    const tabs = document.querySelectorAll(".viewer-tab");
    const contents = document.querySelectorAll(".viewer-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");

            document
                .getElementById(tab.dataset.tab)
                .classList.add("active");
        });
    });

    init();
};