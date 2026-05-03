window.initSkills = function () {
    const skillData = {
        "Frontend": [
            { name: "HTML", image: "" },
            { name: "CSS", image: "" },
            { name: "JavaScript", image: "" },
        ],
        "Backend": [
            { name: "Node.js", image: "" },
            { name: "Python", image: "" },
        ],
        "Tools": [
            { name: "Git", image: "" },
            { name: "Figma", image: "" },
        ],
        "Database": [
            { name: "SQL", image: "" },
            { name: "MongoDB", image: "" },
        ]
    };

    const categories = Object.keys(skillData);

    const folderContainer = document.querySelector(".skills-folder-group");
    const skillList = document.querySelector(".skills-window-list");
    const windowTitle = document.querySelector(".skills-window-title");
    const dropdownContainer = document.querySelector(".category-filter");

    const leftArrow = document.querySelector(".skills-arrow-left");
    const rightArrow = document.querySelector(".skills-arrow-right");

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
                <div class="skill-image"></div>
                <div class="skill-name">${skill.name}</div>
            `;

            skillList.appendChild(item);
        });

        windowTitle.textContent = category;
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
    }

    init();
};