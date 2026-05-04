window.initProjects = function () {
    const fullView = document.getElementById("fullView");
    const projectList = document.getElementById("projectList");

    if (!fullView || !projectList) return;

    const projects = [
        /*{   
            title: "4 Pics 1 Word Game",
            images: [
                "images/projectImg/4pics1word.png",
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
            tags: ["Tag1", "Tag2"],
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
            images: [""],
            type: "Cinema Face Recognition System",
            date: "2024-11",
            desc: "Project description goes here.",
            tags: ["Python", "JavaScript"],
            github: "#",
            link: "#"
        },
        {
            title: "Color Game",
            images: [""],
            type: "A Color Guessing Game",
            date: "2023-12",
            desc: "Project description goes here.",
            tags: ["Python"],
            github: "#",
            link: "#"
        },
        {
            title: "Etherea",
            images: [
                "images/projectImg/etherea.png"
            ],
            type: "A Parallax Fighting Game",
            date: "2023-11",
            desc: "An interactive RPG-like running game created using C#.",
            tags: ["C#"],
            github: "https://github.com/mvillamante/Etherea.git",
            link: "https://github.com/mvillamante/Etherea.git"
        },
        {
            title: "Gamepedia",
            images: [""],
            type: "...",
            date: "2024-07",
            desc: "Project description goes here.",
            tags: ["Tag1", "Tag2"],
            github: "#",
            link: "#"
        },
        {
            title: "HazSpot",
            images: [""],
            type: "Geospatial Web App",
            date: "2026-04",
            desc: "A web-based geospatial analytics system designed to visualize and assess environmental and hazard-related risks across different locations. It integrates geospatial data processing with interactive mapping to display risk indicators through layered visualizations such as choropleth maps. The system supports data-driven insights for understanding spatial patterns, enabling better interpretation of risk distribution for planning and decision-making purposes.",
            tags: ["Python", "JavaScript", "TypeScript", "Django", "Node.js"],
            github: "#",
            link: "#"
        },
        {
            title: "StudyMatch",
            images: [""],
            type: "...wrong date...",
            date: "2024-07",
            desc: "Project description goes here.",
            tags: ["HTML", "Python"],
            github: "#",
            link: "#"
        },
        {
            title: "Tsuper Track",
            images: [
                "images/projectImg/tsupertrack.png"
            ],
            type: "Bus Booking Mobile App (Prototype)",
            date: "2023-01",
            desc: "A product mockup design for a bus locator system.",
            tags: ["Figma"],
            github: "https://www.figma.com/file/OHcfxrx5AT6Vxiqcr8wCw7/Mockup---Tsuper-Track",
            link: "https://www.figma.com/file/OHcfxrx5AT6Vxiqcr8wCw7/Mockup---Tsuper-Track"
        },
        {
            title: "Twitter Clone",
            images: [""],
            type: "...wrong date...",
            date: "2024-03",
            desc: "Project description goes here.",
            tags: ["C#", "ASP.NET"],
            github: "#",
            link: "#"
        },
    ];

    let currentImageIndex = 0;
    let currentImages = [];

    function renderFull(p) {
        currentImages = p.images?.length ? p.images : [];
        currentImageIndex = 0;

        function getImage() {
            return currentImages[currentImageIndex] || "";
        }

        fullView.innerHTML = `
            <div class="project-box full">

            <div class="project-header">
                <div class="project-title">${p.title}</div>
                <div class="window-controls">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                </div>
            </div>

            <div class="project-body">

                <div class="project-image-wrapper">

                    <div class="project-image" id="mainProjectImage"
                        style="background-image:url('${getImage()}')">

                        <div class="image-nav">
                            <button id="prevImg">◀</button>
                            <div class="img-dots" id="imgDots"></div>
                            <button id="nextImg">▶</button>
                        </div>

                    </div>

                </div>

                <div class="project-content">

                    <div class="project-type-container">
                        <div>${p.type || "Project Type"}</div>
                        <div>${formatDate(p.date)}</div>
                    </div>

                    <div class="project-desc">
                        ${p.desc}
                    </div>

                    <div class="pill-list">
                        ${p.tags.map(t => `<div class="pill">${t}</div>`).join("")}
                    </div>

                    <div class="project-links">
                        <a href="${p.github}" target="_blank">GitHub</a>
                        <a href="${p.link || "#"}" target="_blank">Link</a>
                    </div>

                </div>
            </div>
            </div>
        `;

        const dotsContainer = document.getElementById("imgDots");
        function renderDots() {
            if (!dotsContainer) return;

            dotsContainer.innerHTML = "";

            currentImages.forEach((_, index) => {
                const dot = document.createElement("span");
                dot.className = "dot-indicator";

                if (index === currentImageIndex) dot.classList.add("active");

                dot.onclick = () => {
                    currentImageIndex = index;
                    updateImage();
                    renderDots();
                };

                dotsContainer.appendChild(dot);
            });
        }

        function updateImage() {
            const el = document.getElementById("mainProjectImage");
            if (!el || !currentImages.length) return;

            el.style.backgroundImage = `url('${currentImages[currentImageIndex]}')`;
            renderDots();
        }

        renderDots();

        document.getElementById("nextImg")?.addEventListener("click", () => {
            if (!currentImages.length) return;
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
            updateImage();
        });

        document.getElementById("prevImg")?.addEventListener("click", () => {
            if (!currentImages.length) return;
            currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
            updateImage();
        });
            }

    function renderList() {
        projectList.innerHTML = "";

        projects.forEach(p => {
            const div = document.createElement("div");
            div.className = "project-box small";

            div.innerHTML = `
            <div class="project-header">
                <div class="project-title">${p.title}</div>
                <div class="window-controls">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                </div>
            </div>

            <div class="project-body">

                <div class="project-image"
                    style="${p.images?.[0] ? `background-image:url('${p.images[0]}'); background-size:cover; background-position:center;` : ''}">
                </div>

                <div class="project-content">

                    <div class="project-type-container">
                        <div>${p.type || "Project Type"}</div>
                        <div>${formatDate(p.date)}</div>
                    </div>

                    <div class="pill-list">
                        ${p.tags.map(t => `<div class="pill">${t}</div>`).join("")}
                    </div>

                    <div class="project-btn">View Full Details</div>

                </div>
            </div>
            `;

            div.onclick = () => renderFull(p);
            projectList.appendChild(div);
        });
    }

    function formatDate(dateStr) {
        if (!dateStr) return "";

        const [year, month] = dateStr.split("-");
        const date = new Date(year, month - 1);

        return date.toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    projects.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderList();
    renderFull(projects[0]);
};