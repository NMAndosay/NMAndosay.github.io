window.initProjects = function () {
    const fullView = document.getElementById("fullView");
    const projectList = document.getElementById("projectList");

    if (!fullView || !projectList) return;

    const projects = [
        {   
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
        },
        {
            title: "ABLE EHR System",
            images: [""],
            type: "Electronic Health Record System for Pediatric Therapy Monitoring",
            date: "2025-07",
            desc: "A web-based Electronic Health Record (EHR) system developed for the ABLE Center that streamlines pediatric therapy progress monitoring. The system leverages Natural Language Processing (NLP) to analyze therapy notes, organize patient records, and support healthcare professionals with efficient documentation and progress tracking.",
            tags: ["React", "Vite", "JavaScript", "NodeJS"],
            github: "https://github.com/mvillamante/ABLE_EHR_System",
            link: "#"
        },
        {
            title: "Avalia",
            images: [""],
            type: "Cinema Booking System",
            date: "2024-03",
            desc: "A web-based cinema ticket booking system that enables users to browse currently showing movies, view available showtimes, select seats, and reserve tickets through an intuitive interface. Designed to streamline the booking process, the system provides a convenient, efficient, and user-friendly movie reservation experience.",
            tags: ["ASP.NET", "C#", "JavaScript"],
            github: "https://github.com/NMAndosay/Avalia",
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
            desc: "A web-based cinema booking system that integrates facial recognition technology for secure and seamless customer authentication. The system enables users to browse movies, reserve seats, and verify their identity through face recognition during the booking process, providing a faster and more convenient cinema experience.",
            tags: ["Python", "JavaScript"],
            github: "https://github.com/mvillamante/Cinema-Face-Regnition",
            link: "#"
        },
        {
            title: "HazSpot",
            images: [
                "images/projectImg/hazspot/hazspot_landingpage.png",
                "images/projectImg/hazspot/hazspot_comfeed.png",
                "images/projectImg/hazspot/hazspot_alerts.png",
                "images/projectImg/hazspot/hazspot_reports.png",
                "images/projectImg/hazspot/hazspot_evaccenter.png",
                "images/projectImg/hazspot/hazspot_dashboard-analytics.png",
            ],
            type: "Geospatial Web Application for Disaster Risk Assessment",
            date: "2026-05",
            desc: "A web-based geospatial analytics platform that integrates multi-source spatial data to assess green and hazard indices while predicting calamity risk using time-series forecasting. Designed to support community-based sustainable planning and disaster preparedness through interactive maps and data-driven insights.",
            tags: ["Python", "Jupyter Notebook", "React", "Django"],
            github: "https://github.com/mvillamante/Geospatial_Web_App",
            link: "https://hazspot.vercel.app"
        },
        {
            title: "StudyMatch (Web)",
            images: [""],
            type: "Student Grouping and Recommendation System",
            date: "2025-07",
            desc: "A prediction-based web application that utilizes clustering techniques to intelligently group students according to their preferences and characteristics. The system helps create compatible study groups, promoting effective collaboration and improving the overall learning experience.",
            tags: ["HTML", "Python"],
            github: "https://github.com/NMAndosay/StudyMatch",
            link: "#"
        },
        {
            title: "StudyMatch (Mobile)",
            images: [
                "images/projectImg/studymatch-mobile/studymatch_homepage.png",
                "images/projectImg/studymatch-mobile/studymatch_class.png",
                "images/projectImg/studymatch-mobile/studymatch_inputs.png",
                "images/projectImg/studymatch-mobile/studymatch_results.png",
            ],
            type: "Student Grouping and Recommendation System",
            date: "2025-07",
            desc: "A prediction-based web application that utilizes clustering techniques to intelligently group students according to their preferences and characteristics. The system helps create compatible study groups, promoting effective collaboration and improving the overall learning experience.",
            tags: ["Jetpack Compose"], // YUNG SA MOBILE DIN
            github: "#",
            link: "#"
        },
        {
            title: "Gamepedia",
            images: [""],
            type: "Student Grouping and Recommendation System",
            date: "2024-07",
            desc: "A mobile quiz application developed using Xamarin that challenges users with interactive trivia across various video game genres. The app features an intuitive interface, engaging gameplay, and a diverse set of questions designed to test players' gaming knowledge while providing an enjoyable learning experience.",
            tags: ["Xamarin", "C#"],
            github: "https://github.com/NMAndosay/StudyMatch",
            link: "#"
        },
        {
            title: "Etherea",
            images: [""],
            type: "A Parallax Fighting Game",
            date: "2023-11",
            desc: "A 2D parallax-style action game where players take on the role of a heroine battling various monsters across immersive environments. The game features side-scrolling combat, layered parallax backgrounds, and engaging gameplay designed to deliver an exciting and visually dynamic adventure.",
            tags: ["Xamarin", "C#", ".NET"],
            github: "https://github.com/NMAndosay/StudyMatch",
            link: "#"
        },
        {
            title: "Twitter Clone",
            images: [""],
            type: "A Parallax Fighting Game",
            date: "2023-11",
            desc: "",
            tags: ["Xamarin", "C#", ".NET"],
            github: "",
            link: "#"
        },
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