window.initCertificates = function () {

    const folderList =
        document.getElementById("certificateFolderList");

    const fileList =
        document.getElementById("certificateFileList");

    if (!folderList || !fileList) return;


    // ============================
    // CERTIFICATE DATA
    // ============================

    const certificates = [

        // Data Analytics Professional Certificate
        {
            id: "google",
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google",
            date: "2026",
            description:
                "Professional certificate focused on the complete data analytics process from data preparation to visualization.",
            image: "images/certificates/google-da-cover.png",

            pdfs: [
                {
                    title: "Foundations: Data, Data, Everywhere",
                    file: "files/certificates/google/01_Foundations.pdf",
                    preview: "files/certificates/data-analytics/CDA-1-1.png"
                },
                {
                    title: "Ask Questions to Make Data-Driven Decisions",
                    file: "files/certificates/google/02_Ask_Questions.pdf",
                    preview: "files/certificates/data-analytics/CDA-2-1.png"
                },
                {
                    title: "Prepare Data for Exploration",
                    file: "files/certificates/google/03_Prepare_Data.pdf",
                    preview: "files/certificates/data-analytics/CDA-3-1.png"
                },
                {
                    title: "Process Data from Dirty to Clean",
                    file: "files/certificates/google/04_Process_Data.pdf",
                    preview: "files/certificates/data-analytics/CDA-4-1.png"
                },
                {
                    title: "Analyze Data to Answer Questions",
                    file: "files/certificates/google/05_Analyze_Data.pdf",
                    preview: "files/certificates/data-analytics/CDA-5-1.png"
                },
                {
                    title: "Share Data Through the Art of Visualization",
                    file: "files/certificates/google/06_Share_Data.pdf",
                    preview: "files/certificates/data-analytics/CDA-6-1.png"
                },
                {
                    title: "Introduction to Data Analytics Using Python",
                    file: "files/certificates/google/07_Capstone.pdf",
                    preview: "files/certificates/data-analytics/CDA-7-1.png"
                },
                {
                    title: "Google Data Analytics Capstone: Complete a Case Study",
                    file: "files/certificates/google/08_Professional_Certificate.pdf",
                    preview: "files/certificates/data-analytics/CDA-8-1.png"
                },
                {
                    title: "Accelerate Your Job Search with AI",
                    file: "files/certificates/google/08_Professional_Certificate.pdf",
                    preview: "files/certificates/data-analytics/CDA-9-1.png"
                },
                {
                    title: "Google Analytics Professional Certificate",
                    file: "files/certificates/google/08_Professional_Certificate.pdf",
                    preview: "files/certificates/data-analytics/CDA-FINAL-1.png"
                }
            ]
        },

        // Data Science Professional Certificate
        {
            id: "ibmds",
            title: "IBM Data Science Professional Certificate",
            issuer: "IBM",
            date: "2026",
            description:
                "A comprehensive professional certificate covering Python, SQL, data analysis, visualization, machine learning, and data science methodologies.",
            image: "images/certificates/ibm-ds-cover.png",

            pdfs: [
                {
                    title: "What is Data Science?",
                    file: "files/certificates/ibm_ds/01_What_is_Data_Science.pdf",
                    preview: "files/certificates/data-science/CDS-1-1.png"
                },
                {
                    title: "Tools for Data Science",
                    file: "files/certificates/ibm_ds/02_Tools_for_Data_Science.pdf",
                    preview: "files/certificates/data-science/CDS-2-1.png"
                },
                {
                    title: "Data Science Methodology",
                    file: "files/certificates/ibm_ds/03_Data_Science_Methodology.pdf",
                    preview: "files/certificates/data-science/CDS-3-1.png"
                },
                {
                    title: "Python for Data Science, AI & Development",
                    file: "files/certificates/ibm_ds/04_Python.pdf",
                    preview: "files/certificates/data-science/CDS-4-1.png"
                },
                {
                    title: "Python Project for Data Science",
                    file: "files/certificates/ibm_ds/05_Python_Project.pdf",
                    preview: "files/certificates/data-science/CDS-5-1.png"
                },
                {
                    title: "Databases and SQL for Data Science with Python",
                    file: "files/certificates/ibm_ds/06_SQL.pdf",
                    preview: "files/certificates/data-science/CDS-6-1.png"
                },
                {
                    title: "Data Analysis with Python",
                    file: "files/certificates/ibm_ds/07_Data_Analysis.pdf",
                    preview: "files/certificates/data-science/CDS-7-1.png"
                },
                {
                    title: "Data Visualization with Python",
                    file: "files/certificates/ibm_ds/08_Data_Visualization.pdf",
                    preview: "files/certificates/data-science/CDS-8-1.png"
                },
                {
                    title: "Machine Learning with Python",
                    file: "files/certificates/ibm_ds/09_Machine_Learning.pdf",
                    preview: "files/certificates/data-science/CDS-9-1.png"
                },
                {
                    title: "Applied Data Science Capstone",
                    file: "files/certificates/ibm_ds/10_Capstone.pdf",
                    preview: "files/certificates/data-science/CDS-10-1.png"
                },
                {
                    title: "Generative AI: Elevate Your Data Science Career",
                    file: "files/certificates/ibm_ds/11_Generative_AI.pdf",
                    preview: "files/certificates/data-science/CDS-11-1.png"
                },
                {
                    title: "Data Science Career Guide and Interview Preparation",
                    file: "files/certificates/ibm_ds/12_Professional_Certificate.pdf",
                    preview: "files/certificates/data-science/CDS-12-1.png"
                },
                {
                    title: "IBM Data Science Professional Certificate",
                    file: "files/certificates/ibm_ds/12_Professional_Certificate.pdf",
                    preview: "files/certificates/data-science/CDS-FINAL-1.png"
                }
            ]
        },

        // AI Developer Professional Certificate
        {
            id: "ibmai",
            title: "IBM AI Developer Professional Certificate",
            issuer: "IBM",
            date: "2026",
            description:
                "Professional certificate covering AI development, Python programming, APIs, machine learning, and generative AI.",
            image: "images/certificates/ibm-ai-cover.png",

            pdfs: [
                {
                    title: "Introduction to Software Engineering",
                    file: "files/certificates/ibm_ai/01_Intro_AI.pdf",
                    preview: "files/certificates/ai-dev/AD-1-1.png"
                },
                {
                    title: "Introduction to Artificial Intelligence (AI)",
                    file: "files/certificates/ibm_ai/02_Python.pdf",
                    preview: "files/certificates/ai-dev/AD-2-1.png"
                },
                {
                    title: "Generative AI: Introduction and Applications",
                    file: "files/certificates/ibm_ai/03_AI_Apps.pdf",
                    preview: "files/certificates/ai-dev/AD-3-1.png"
                },
                {
                    title: "Generative AI: Prompt Engineering Basics",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-4-1.png"
                },
                {
                    title: "Introduction to HTML, CSS, and JavaScript",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-5-1.png"
                },
                {
                    title: "Python for Data Science, AI, & Development",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-6-1.png"
                },
                {
                    title: "Developing AI Applications with Python and Flask",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-7-1.png"
                },
                {
                    title: "Building Generative AI Applications with Python",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-8-1.png"
                },
                {
                    title: "Generative AI: Elevate your Software Development Career",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-9-1.png"
                },
                {
                    title: "Software Developer Career Guide and Interview Preparation",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
                    preview: "files/certificates/ai-dev/AD-10-1.png"
                },
                {
                    title: "IBM AI Developer Professional Certificate",
                    file: "files/certificates/ibm_ai/04_Professional_Certificate.pdf",
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
                <i class="fa-solid fa-folder"></i>
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