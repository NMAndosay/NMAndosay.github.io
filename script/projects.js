window.initProjects = function () {
    const fullView = document.getElementById("fullView");
    const projectList = document.getElementById("projectList");

    if (!fullView || !projectList) return;

    const projects = [
        {
            title: "Geospatial Risk Mapping System",
            image: "",
            type: "Data Science / Web App",
            year: "2024",
            desc: "A web-based geospatial analytics system designed to visualize and assess environmental and hazard-related risks across different locations. It integrates geospatial data processing with interactive mapping to display risk indicators through layered visualizations such as choropleth maps. The system supports data-driven insights for understanding spatial patterns, enabling better interpretation of risk distribution for planning and decision-making purposes.",
            tags: ["Python", "React", "GIS"],
            github: "#",
            link: "#"
        },
        {   
            title: "4 Pics 1 Word Game",
            image: "images/4pics1word.png",
            type: "Desktop Application",
            year: "2023",
            desc: "A replication of 4 Pics 1 Word game using Tkinter.",
            tags: ["Python", "Tkinter"],
            github: "https://github.com/NMAndosay/4Pics1Word.git",
            link: "https://github.com/NMAndosay/4Pics1Word.git"
        },
        {
            title: "Tsuper Track",
            image: "images/tsupertrack.png",
            type: "UI/UX Design",
            year: "2023",
            desc: "A product mockup design for a bus locator system.",
            tags: ["Figma", "UI/UX"],
            github: "https://www.figma.com/file/OHcfxrx5AT6Vxiqcr8wCw7/Mockup---Tsuper-Track",
            link: "https://www.figma.com/file/OHcfxrx5AT6Vxiqcr8wCw7/Mockup---Tsuper-Track"
        },
        {
            title: "Etherea Game",
            image: "images/etherea.png",
            type: "Game Development",
            year: "2023",
            desc: "An interactive RPG-like running game created using C#.",
            tags: ["C#", "Game Dev"],
            github: "https://github.com/mvillamante/Etherea.git",
            link: "https://github.com/mvillamante/Etherea.git"
        },
        {
            title: "Etherea Game",
            image: "images/etherea.png",
            type: "Game Development",
            year: "2023",
            desc: "An interactive RPG-like running game created using C#.",
            tags: ["C#", "Game Dev"],
            github: "https://github.com/mvillamante/Etherea.git",
            link: "https://github.com/mvillamante/Etherea.git"
        },
        {
            title: "Etherea Game",
            image: "images/etherea.png",
            type: "Game Development",
            year: "2023",
            desc: "An interactive RPG-like running game created using C#.",
            tags: ["C#", "Game Dev"],
            github: "https://github.com/mvillamante/Etherea.git",
            link: "https://github.com/mvillamante/Etherea.git"
        },
        {
            title: "Etherea Game",
            image: "images/etherea.png",
            type: "Game Development",
            year: "2023",
            desc: "An interactive RPG-like running game created using C#.",
            tags: ["C#", "Game Dev"],
            github: "https://github.com/mvillamante/Etherea.git",
            link: "https://github.com/mvillamante/Etherea.git"
        },
    ];

    function renderFull(p) {
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

                <!-- LEFT: IMAGE -->
                <div class="project-image" style="background-image: url('${p.image}'); background-size: cover; background-position: center;"></div>

                <!-- RIGHT: CONTENT -->
                <div class="project-content">

                    <div class="project-type-container">
                        <div class="project-type-text">${p.type || "Project Type"}</div>
                        <div class="project-type-year">${p.year || ""}</div>
                    </div>

                    <div class="project-desc">
                        ${p.desc}
                    </div>

                    <div class="project-pill-list">
                        ${p.tags.map(t => `<div class="project-pill">${t}</div>`).join("")}
                    </div>

                    <div class="project-links">
                        <a href="${p.github}" target="_blank">GitHub</a>
                        <a href="${p.link || "#"}" target="_blank">Link</a>
                    </div>

                </div>
            </div>
            </div>
        `;
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
                    style="${p.image ? `background-image:url('${p.image}'); background-size:cover; background-position:center;` : ''}">
                </div>

                <div class="project-content">

                    <div class="project-type-container">
                        <div>${p.type || "Project Type"}</div>
                        <div>${p.year || ""}</div>
                    </div>

                    <div class="project-pill-list">
                        ${p.tags.map(t => `<div class="project-pill">${t}</div>`).join("")}
                    </div>

                    <div class="project-btn">View Full Details</div>

                </div>
            </div>
            `;

            div.onclick = () => renderFull(p);
            projectList.appendChild(div);
        });
    }

    renderList();
    renderFull(projects[0]);
};