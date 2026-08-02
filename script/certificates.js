window.initCertificates = function () {

    const folderList =
        document.getElementById("certificateFolderList");

    const fileList =
        document.getElementById("certificateFileList");

    if (!folderList || !fileList) return;

    function formatDate(date) {
        return new Date(date + "-01").toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    // ============================
    // CERTIFICATE DATA
    // ============================

    const certificates = [
        // COMPTIA 2025
        {
            id: "comptia",
            title: "CompTIA Tech+ Certification",
            issuer: "CompTIA",
            date: "2025-12",
            description:
                "Foundational IT certification covering core concepts in technology, infrastructure, software development, databases, cybersecurity, and emerging technologies.",
            image: "images/myIcons/comptia-logo.png",
            pdfs: [
                {
                    title: "CompTIA Tech+ Certification", 
                    file: "https://www.credly.com/badges/d9ff8b94-6ac8-4692-bb69-4379e7e807b8/public_url",
                    preview: "files/certificates/comptia/comptia-tech-certification.png"
                }
            ]

        },

        // Data Analytics Professional Certificate 2026
        {
            id: "google",
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google",
            date: "2026-06",
            description:
                "Professional certificate focused on the complete data analytics process from data preparation to visualization.",
            image: "images/myIcons/google-logo.jpg",

            pdfs: [
                {
                    title: "Foundations: Data, Data, Everywhere",
                    file: "https://coursera.org/share/e3f67cddf1b108a1423c5e9fa732dbc8",
                    preview: "files/certificates/data-analytics/CDA-1-1.png"
                },
                {
                    title: "Ask Questions to Make Data-Driven Decisions",
                    file: "https://coursera.org/share/4c3f69911e5e34446e4b879e91856e9f",
                    preview: "files/certificates/data-analytics/CDA-2-1.png"
                },
                {
                    title: "Prepare Data for Exploration",
                    file: "https://coursera.org/share/4df61e34457bc13e24ef9f49c64ea673",
                    preview: "files/certificates/data-analytics/CDA-3-1.png"
                },
                {
                    title: "Process Data from Dirty to Clean",
                    file: "https://coursera.org/share/b40fc81dd4bb8a8fbf22267e5027d44b",
                    preview: "files/certificates/data-analytics/CDA-4-1.png"
                },
                {
                    title: "Analyze Data to Answer Questions",
                    file: "https://coursera.org/share/ddd3be9113e387e9401c75be1504119d",
                    preview: "files/certificates/data-analytics/CDA-5-1.png"
                },
                {
                    title: "Share Data Through the Art of Visualization",
                    file: "https://coursera.org/share/6c729922a36feb5622d7e132545b1d5f",
                    preview: "files/certificates/data-analytics/CDA-6-1.png"
                },
                {
                    title: "Introduction to Data Analytics Using Python",
                    file: "https://coursera.org/share/620f46debec944d4edd550ebff7e18a8",
                    preview: "files/certificates/data-analytics/CDA-7-1.png"
                },
                {
                    title: "Google Data Analytics Capstone: Complete a Case Study",
                    file: "https://coursera.org/share/7101fa7007e5d9c44c58f0f962805c0a",
                    preview: "files/certificates/data-analytics/CDA-8-1.png"
                },
                {
                    title: "Accelerate Your Job Search with AI",
                    file: "https://coursera.org/share/557243f0ea78efb1b222e61de29fd7aa",
                    preview: "files/certificates/data-analytics/CDA-9-1.png"
                },
                {
                    title: "Google Analytics Professional Certificate",
                    file: "https://coursera.org/share/d79d42989720f25905bd87827f7d73b0",
                    preview: "files/certificates/data-analytics/CDA-FINAL-1.png"
                }
            ]
        },

        // Data Science Professional Certificate 2026
        {
            id: "ibmds",
            title: "IBM Data Science Professional Certificate",
            issuer: "IBM",
            date: "2026-07",
            description:
                "A comprehensive professional certificate covering Python, SQL, data analysis, visualization, machine learning, and data science methodologies.",
            image: "images/myIcons/ibm-logo.jpg",

            pdfs: [
                {
                    title: "What is Data Science?",
                    file: "https://coursera.org/share/439804a33e126a396ba6c685783081be",
                    preview: "files/certificates/data-science/CDS-1-1.png"
                },
                {
                    title: "Tools for Data Science",
                    file: "https://coursera.org/share/712d36feb4d9573c199fa4ef7c5030be",
                    preview: "files/certificates/data-science/CDS-2-1.png"
                },
                {
                    title: "Data Science Methodology",
                    file: "https://coursera.org/share/3e759988b4469b9db600765bcf9333e0",
                    preview: "files/certificates/data-science/CDS-3-1.png"
                },
                {
                    title: "Python for Data Science, AI & Development",
                    file: "https://coursera.org/share/d7dd50298ce46a3ddf86a2b4336da630",
                    preview: "files/certificates/data-science/CDS-4-1.png"
                },
                {
                    title: "Python Project for Data Science",
                    file: "https://coursera.org/share/dc1fd294395591f383f6107f5d49c33a",
                    preview: "files/certificates/data-science/CDS-5-1.png"
                },
                {
                    title: "Databases and SQL for Data Science with Python",
                    file: "https://coursera.org/share/4dbb3319262f500ab5c4be250b3335a1",
                    preview: "files/certificates/data-science/CDS-6-1.png"
                },
                {
                    title: "Data Analysis with Python",
                    file: "https://coursera.org/share/bc785d8f5c466f437c3d84f6e93715dc",
                    preview: "files/certificates/data-science/CDS-7-1.png"
                },
                {
                    title: "Data Visualization with Python",
                    file: "https://coursera.org/share/6b1b1366a5503fc5ef2ed6751ca69402",
                    preview: "files/certificates/data-science/CDS-8-1.png"
                },
                {
                    title: "Machine Learning with Python",
                    file: "https://coursera.org/share/cc932ddef1f1059d8a89bdc463d4ab74",
                    preview: "files/certificates/data-science/CDS-9-1.png"
                },
                {
                    title: "Applied Data Science Capstone",
                    file: "https://coursera.org/share/a337e3ead0a7e769bccb762da0729616",
                    preview: "files/certificates/data-science/CDS-10-1.png"
                },
                {
                    title: "Generative AI: Elevate Your Data Science Career",
                    file: "https://coursera.org/share/08a8ba232c883647b176f3fbbbb28185",
                    preview: "files/certificates/data-science/CDS-11-1.png"
                },
                {
                    title: "Data Science Career Guide and Interview Preparation",
                    file: "https://coursera.org/share/55f1cb5bdfff881146b0e82bdc373fed",
                    preview: "files/certificates/data-science/CDS-12-1.png"
                },
                {
                    title: "IBM Data Science Professional Certificate",
                    file: "https://coursera.org/share/47a26a998bbf576572e21053e8cfb395",
                    preview: "files/certificates/data-science/CDS-FINAL-1.png"
                }
            ]
        },

        // AI Developer Professional Certificate 2026
        {
            id: "ibmai",
            title: "IBM AI Developer Professional Certificate",
            issuer: "IBM",
            date: "2026-06",
            description:
                "Professional certificate covering AI development, Python programming, APIs, machine learning, and generative AI.",
            image: "images/myIcons/ibm-logo.jpg",

            pdfs: [
                {
                    title: "Introduction to Software Engineering",
                    file: "https://coursera.org/share/79b7ac302172574b5df4f26dd6861c83",
                    preview: "files/certificates/ai-dev/AD-1-1.png"
                },
                {
                    title: "Introduction to Artificial Intelligence (AI)",
                    file: "https://coursera.org/share/e0ba47393a61db39278c4f5fbbe523ec",
                    preview: "files/certificates/ai-dev/AD-2-1.png"
                },
                {
                    title: "Generative AI: Introduction and Applications",
                    file: "https://coursera.org/share/d212a1497e06fef1dcf1a6147ae4a5bc",
                    preview: "files/certificates/ai-dev/AD-3-1.png"
                },
                {
                    title: "Generative AI: Prompt Engineering Basics",
                    file: "https://coursera.org/share/5c648431e1efa26e15e4b4b69f90f4d9",
                    preview: "files/certificates/ai-dev/AD-4-1.png"
                },
                {
                    title: "Introduction to HTML, CSS, and JavaScript",
                    file: "https://coursera.org/share/035a3cd04768924f87fe20fae45fdaf7",
                    preview: "files/certificates/ai-dev/AD-5-1.png"
                },
                {
                    title: "Python for Data Science, AI, & Development",
                    file: "https://coursera.org/share/d7dd50298ce46a3ddf86a2b4336da630",
                    preview: "files/certificates/ai-dev/AD-6-1.png"
                },
                {
                    title: "Developing AI Applications with Python and Flask",
                    file: "https://coursera.org/share/9ff31acbc79d89a535ce7f3006bfdba9",
                    preview: "files/certificates/ai-dev/AD-7-1.png"
                },
                {
                    title: "Building Generative AI Applications with Python",
                    file: "https://coursera.org/share/cd019bf6e0d84eb14712ad33de611b71",
                    preview: "files/certificates/ai-dev/AD-8-1.png"
                },
                {
                    title: "Generative AI: Elevate your Software Development Career",
                    file: "https://coursera.org/share/034a07f584aa8f2be96929caa3038ab7",
                    preview: "files/certificates/ai-dev/AD-9-1.png"
                },
                {
                    title: "Software Developer Career Guide and Interview Preparation",
                    file: "https://coursera.org/share/c5355b3a55b2db7825f7c55a936537a4",
                    preview: "files/certificates/ai-dev/AD-10-1.png"
                },
                {
                    title: "IBM AI Developer Professional Certificate",
                    file: "https://coursera.org/share/b427fe6fbf8ecacb06f27133a9988e2f",
                    preview: "files/certificates/ai-dev/AD-FINAL-1.png"
                }
            ]
        }

    ];


    // ============================
    // RENDER FOLDERS
    // ============================

    function renderFolders() {

        folderList.innerHTML = "";

        certificates.forEach((certificate, index) => {

            const folder = document.createElement("div");

            folder.className = "certificate-folder";

            folder.dataset.folder = certificate.id;

            folder.innerHTML = `
                <i class="fa-solid fa-award"></i>
                <span>${certificate.title.replace(" Professional Certificate", "")}</span>
            `;

            folder.onclick = () => {
                setActiveCertificate(certificate.id);
            };

            folderList.appendChild(folder);

        });

    }


    // ============================
    // RENDER CERTIFICATE FILES
    // ============================

    function renderFiles(certificate) {

    fileList.innerHTML = "";

    // ============================
    // CERTIFICATE INFORMATION
    // ============================

    const certificateInfo =
        document.createElement("div");

    certificateInfo.className =
        "certificate-info";

    certificateInfo.innerHTML = `
        <div class="certificate-info-image">
            <img
                src="${certificate.image}"
                alt="${certificate.title}"
            >
        </div>

        <div class="certificate-info-content">

            <h2>${certificate.title}</h2>

            <div class="certificate-meta">
                <span>${certificate.issuer}</span>
                <span>•</span>
                <span>${formatDate(certificate.date)}</span>
            </div>

            <p>
                ${certificate.description}
            </p>

        </div>
    `;

    fileList.appendChild(certificateInfo);


    // ============================
    // CERTIFICATE FILES
    // ============================

    const certificateSet =
        document.createElement("div");

    certificateSet.className =
        "certificate-set active";

    certificate.pdfs.forEach(pdf => {

        const file =
            document.createElement("a");

        file.className =
            "certificate-file";

        file.href = pdf.file;
        file.target = "_blank";
        file.rel = "noopener noreferrer";

        file.innerHTML = `

            <div class="certificate-preview">

                <img
                    src="${pdf.preview}"
                    alt="${pdf.title}"
                >

            </div>

            <span>
                ${pdf.title}
            </span>

        `;

        certificateSet.appendChild(file);

    });

    fileList.appendChild(certificateSet);

}


    // ============================
    // SET ACTIVE CERTIFICATE
    // ============================

    function setActiveCertificate(id) {

        // Remove active from folders

        document
            .querySelectorAll(".certificate-folder")
            .forEach(folder => {

                folder.classList.remove("active");

            });


        // Find certificate

        const certificate =
            certificates.find(
                certificate => certificate.id === id
            );

        if (!certificate) return;


        // Activate folder

        const selectedFolder =
            document.querySelector(
                `.certificate-folder[data-folder="${id}"]`
            );

        if (selectedFolder) {

            selectedFolder.classList.add("active");

        }


        // Render files

        renderFiles(certificate);

    }

    // Sort certificates by date (newest first)
    certificates.sort((a, b) => {
        return new Date(b.date + "-01") - new Date(a.date + "-01");
    });

    window.certificateData = certificates;
    

    // ============================
    // INITIALIZE
    // ============================

    renderFolders();

    if (certificates.length > 0) {

        setActiveCertificate(
            certificates[0].id
        );

    }

};

/* ==========================================
   PRACTICUM CERTIFICATES
========================================== */

window.initPracticumCertificates = function () {

    const container =
        document.getElementById("practicumCertificates");

    if (!container) return;

    // Certificates specifically related to the practicum
    const practicumCertificateIds = [
        "google",
        "ibmai",
        "ibmds"
    ];

    // Make sure the main certificate data exists
    if (!window.certificateData) {
        console.warn("Certificate data has not been initialized yet.");
        return;
    }

    // Get only the selected certificates
    const practicumCertificates =
        window.certificateData.filter(certificate =>
            practicumCertificateIds.includes(certificate.id)
        );

    container.innerHTML = "";

    practicumCertificates.forEach(certificate => {

        const card = document.createElement("a");

        card.className = "practicum-certificate-card";

        const finalCertificate =
            certificate.pdfs[certificate.pdfs.length - 1];

        card.href = finalCertificate.file;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        // Choose an icon based on the certificate
        let icon = "fa-award";

        switch (certificate.id) {

            case "google":
                icon = "fa-chart-line";
                break;

            case "ibmds":
                icon = "fa-brain";
                break;

            case "ibmai":
                icon = "fa-robot";
                break;

            default:
                icon = "fa-award";

        }

        card.innerHTML = `

            <div class="practicum-certificate-icon">
                <i class="fa-solid ${icon}"></i>
            </div>

            <div class="practicum-certificate-info">

                <span class="certificate-type">
                    PROFESSIONAL CERTIFICATE
                </span>

                <h4>
                    ${certificate.title}
                </h4>

                <p>
                    ${certificate.description}
                </p>

                <div class="certificate-meta">

                    <span>
                        <i class="${certificate.id === "google" ? "fa-brands fa-google" : "fa-brands fa-ibm"}"></i>
                        ${certificate.issuer}
                    </span>

                    <span>
                        <i class="fa-regular fa-calendar"></i>
                        ${new Date(certificate.date).getFullYear()}
                    </span>

                </div>

            </div>

            <i class="fa-solid fa-arrow-up-right-from-square certificate-open"></i>

        `;

        container.appendChild(card);

    });

};


/* ==========================================
   FORMAT CERTIFICATE DATE
========================================== */

function formatCertificateDate(date) {

    return new Date(date + "-01").toLocaleDateString(
        "en-US",
        {
            month: "long",
            year: "numeric"
        }
    );

}