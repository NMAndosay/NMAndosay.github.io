window.initProjects = function () {
    const fullView = document.getElementById("fullView");
    const projectList = document.getElementById("projectList");

    if (!fullView || !projectList) return;

    const projects = [
        /*{   
            title: "4 Pics 1 Word Game",
            images: [
                "images/projectImg/4P1W/4pics1word.png",
            ],
            type: "A Tkinter-based Word Puzzle Game",
            date: "2023-03",
            desc: "A replication of 4 Pics 1 Word game using Tkinter.",
            tags: ["Python", "Tkinter"],
            github: "https://github.com/NMAndosay/4Pics1Word.git",
            link: "https://github.com/NMAndosay/4Pics1Word.git"
        },*/
        {
            title: "ABLE EHR System",
            images: [""],
            type: "EHR System for ABLE Center",
            date: "2025-07",
            desc: "Project description goes here.",
            tags: ["React", "Vite", "JavaScript", "NodeJS"],
            github: "#",
            link: "#"
        },
        {
            title: "Avalia",
            images: [""],
            type: "Cinema Booking System",
            date: "2024-03",
            desc: "Project description goes here.",
            tags: ["ASP.NET", "C#", "JavaScript"],
            github: "#",
            link: "#"
        },
        {
            title: "CineBio",
            images: [
                "images/projectImg/cinebio/cinebio_homepage.png",
                "images/projectImg/cinebio/cinebio_bookingview.png",
            ],
            type: "Cinema Face Recognition System",
            date: "2024-11",
            desc: "Project description goes here.",
            tags: ["Python", "JavaScript"],
            github: "#",
            link: "#"
        }/*,
        {
            title: "HazSpot",
            images: [""
            ],
            type: "Cinema Face Recognition System",
            date: "2024-11",
            desc: "Project description goes here.",
            tags: ["Python", "JavaScript"],
            github: "#",
            link: "#"
        }*/
    ];

    let currentImages = [];
    let currentIndex = 0;

    function renderFull(p) {

        currentImages = (p.images && p.images.length && p.images[0] !== "")
            ? p.images
            : [];

        currentIndex = 0;

        fullView.innerHTML = `
        <div class="project-box full">

            <div class="project-header">
                <div class="project-title">${p.title}</div>
            </div>

            <div class="project-body">

                <div class="project-image-wrapper">

                    <div class="project-image" id="mainImg">

                        ${currentImages.length === 0 ? `
                            <div class="no-image">
                                📷 No Image Available
                            </div>
                        ` : `
                            <div class="image-nav">
                                <button id="prevImg">◀</button>

                                <div class="img-dots" id="imgDots"></div>

                                <button id="nextImg">▶</button>
                            </div>
                        `}

                    </div>

                </div>

                <div class="project-content">

                    <div class="project-meta">
                        <div class="project-type">
                            ${p.type}
                        </div>
                        <div class="project-date">
                            ${formatDate(p.date)}
                        </div>
                    </div>

                    <div class="project-desc">
                        ${p.desc}
                    </div>

                    <div class="pill-list">
                        ${p.tags.map(t => `<div class="pill">${t}</div>`).join("")}
                    </div>

                    <div class="project-links">
                        <a href="${p.github}" target="_blank">GitHub</a>
                        <a href="${p.link}" target="_blank">Link</a>
                    </div>

                </div>

            </div>
        </div>
        `;

        const el = document.getElementById("mainImg");
        const dotsContainer = document.getElementById("imgDots");

        // -----------------------------
        // NO IMAGE CASE
        // -----------------------------
        if (!currentImages.length) return;

        // -----------------------------
        // SINGLE IMAGE CASE
        // -----------------------------
        if (currentImages.length === 1 && el) {
            el.classList.add("single");
        }

        // -----------------------------
        // IMAGE UPDATE FUNCTION
        // -----------------------------
        function updateImage() {
            if (!el) return;

            el.style.backgroundImage =
                `url('${currentImages[currentIndex]}')`;
        }

        // -----------------------------
        // DOTS RENDER
        // -----------------------------
        function renderDots() {
            if (!dotsContainer) return;

            dotsContainer.innerHTML = "";

            currentImages.forEach((_, i) => {
                const dot = document.createElement("span");
                dot.className = "dot-indicator";

                if (i === currentIndex) dot.classList.add("active");

                dot.onclick = () => {
                    currentIndex = i;
                    updateImage();
                    renderDots();
                };

                dotsContainer.appendChild(dot);
            });
        }

        // -----------------------------
        // INIT FIRST IMAGE + DOTS
        // -----------------------------
        updateImage();
        renderDots();

        // -----------------------------
        // NAV BUTTONS
        // -----------------------------
        document.getElementById("nextImg")?.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateImage();
            renderDots();
        });

        document.getElementById("prevImg")?.addEventListener("click", () => {
            currentIndex =
                (currentIndex - 1 + currentImages.length) %
                currentImages.length;

            updateImage();
            renderDots();
        });
    }

    function setActiveProject(index) {
        const items = document.querySelectorAll("#projectList .folder-item");

        items.forEach(el => el.classList.remove("active"));

        if (items[index]) {
            items[index].classList.add("active");
        }

        renderFull(projects[index]);
    }

    function renderList() {
        projectList.innerHTML = "";

        projects.forEach((p, index) => {
            const div = document.createElement("div");
            div.className = "folder-item";

            div.innerHTML = `
                <span class="folder-icon">
                    <i class="fa-solid fa-folder"></i>
                </span>
                <span>${p.title}</span>
            `;

            div.onclick = () => setActiveProject(index);

            projectList.appendChild(div);
        });

        const firstItem = projectList.querySelector(".folder-item");
        if (firstItem) firstItem.classList.add("active");
    }

    function formatDate(dateStr) {
        if (!dateStr) return "";
        const [y, m] = dateStr.split("-");
        return new Date(y, m - 1).toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    // CLOSE BUTTON
    document.getElementById("closeProjects").onclick = () => {
        const about = document.getElementById("about_section");
        if (about) about.scrollIntoView({ behavior: "smooth" });
    };

    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    renderList();
    setActiveProject(0);
};