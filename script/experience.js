window.initExperience = function () {

    const container = document.getElementById("experienceList");
    if (!container) return;

    const experiences = [
        {
            company: "AF Payments Inc.",
            logo: "images/mapua mcl logo.png",
            start: "2026-09",
            end: "present",
            role: "BIA Data Science Intern",
            desc: [
                "Received Dean's Lister recognition.",
                "Developed multiple academic and personal software projects.",
                "Built responsive full-stack web applications and UI prototypes.",
                "Applied software engineering, database, and AI concepts through project-based learning."
            ],
            skills: [
                "SQL", "Athena Query", "Power BI"
            ]
        }
    ];

    function formatDate(dateStr) {

        if (!dateStr || dateStr.toLowerCase() === "present")
            return "Present";

        const [year, month] = dateStr.split("-");

        return new Date(year, month - 1).toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });

    }

    function formatDateRange(start, end) {

        return `${formatDate(start)} — ${formatDate(end)}`;

    }

    container.innerHTML = "";

    experiences.forEach(exp => {

        const card = document.createElement("div");
        card.className = "experience-card";

        card.innerHTML = `
            <img
                class="experience-logo"
                src="${exp.logo}"
                alt="${exp.company}"
            >

            <div class="experience-content">

                <div class="experience-top">

                    <div class="experience-company">

                        <div class="experience-title">
                            ${exp.company}
                        </div>

                        <div class="experience-role">
                            ${exp.role}
                        </div>

                    </div>

                    <div class="experience-date">
                        ${formatDateRange(exp.start, exp.end)}
                    </div>

                </div>

                <ul class="experience-desc">
                    ${exp.desc.map(item => `
                        <li>${item}</li>
                    `).join("")}
                </ul>

                <div class="experience-tags">
                    ${exp.skills.map(skill => `
                        <span class="experience-tag">
                            ${skill}
                        </span>
                    `).join("")}
                </div>

            </div>
        `;

        container.appendChild(card);

    });

};