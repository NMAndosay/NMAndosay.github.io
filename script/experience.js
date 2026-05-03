window.initExperience = function () {
    const container = document.getElementById("experienceList");
    if (!container) return;

    const experiences = [
        {
            company: "Mapúa MCL",
            logo: "images/mapua mcl logo.png",
            start: "2023-09",
            end: "present",
            role: "Student / Developer",
            desc: [
                "Received Dean's Lister recognition",
                "Developed academic and personal software projects",
                "Built multiple full-stack and UI prototypes"
            ]
        },
        {
            company: "Tsuper Track Project",
            logo: "images/projectImg/tsupertrack-logo.png",
            start: "2023-05",
            end: "2023-08",
            role: "UI/UX Designer / Developer",
            desc: [
                "Worked in a team to design a bus tracking mobile app prototype focusing on commuter convenience."
            ]
        },
        {
            company: "4 Pics 1 Word Project",
            logo: "images/projectImg/4pics1word.png",
            start: "2023-03",
            end: "2023-06",
            role: "Game Developer",
            desc: [
                "Recreated the puzzle game using Python Tkinter as a school project."
            ]
        },
        {
            company: "Etherea Game Project",
            logo: "images/projectImg/etherea_icon.png",
            start: "2023-09",
            end: "present",
            role: "Game Developer",
            desc: [
                "Built an RPG-style running game in C# focusing on mechanics and gameplay flow."
            ]
        }
    ];

    function formatDate(dateStr) {
        if (!dateStr || dateStr === "present") return "Present";

        const [year, month] = dateStr.split("-");
        const date = new Date(Number(year), Number(month) - 1);

        return date.toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    function formatDateRange(start, end) {
        const startFormatted = formatDate(start);
        const endFormatted = end ? formatDate(end) : "Present";

        return `${startFormatted} — ${endFormatted}`;
    }

    container.innerHTML = "";

    experiences.forEach(exp => {
        const div = document.createElement("div");
        div.className = "experience-card";

        div.innerHTML = `
            <div class="experience-header">
                <div class="experience-title">${exp.company}</div>
                <div class="window-controls">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                </div>
            </div>

            <div class="experience-body">
                <img class="experience-logo" src="${exp.logo}" alt="${exp.company}">

                <div class="experience-content">
                    <div class="experience-role">${exp.role}</div>
                    <div class="experience-date">
                        ${formatDateRange(exp.start, exp.end)}
                    </div>
                    <ul class="experience-desc">
                        ${exp.desc.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;

        container.appendChild(div);
    });
};