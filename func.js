window.onscroll = function () { scrollFunction() };

const header = document.querySelector("header");
header.style.paddingTop = "30px";
header.style.paddingBottom = "30px";

function scrollFunction() {
    const header = document.querySelector("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.fontSize = "0.8em";

        header.style.paddingTop = "10px";
        header.style.paddingBottom = "10px";
    } else {
        header.style.fontSize = "1em";

        header.style.paddingTop = "30px";
        header.style.paddingBottom = "30px";
    }
}

const main = document.querySelector("main");

const sections = [
    {
        name: "Library",
        id: "library",
        summary: "During my library experience, I assisted in the daily operations of the library. This included front desk, shelving, shelf reading, handling circulation, generating and printing class reading reports, cataloguing, resource and collection management, book preparation and repair, display designing and setup, and assisting students and staff. I made use of the library management system and other software and undertook several projects. I also have experience in organising and hosting events and designing promotional posters as part of my library course.",
        skills: [
            {
                name: "Qualified Library Technician",
                icon: "graduation-cap"
            },
            {
                name: "Cataloguing (original and copy)",
                icon: "code"
            },
            {
                name: "Resource Processing",
                icon: "book"
            },
            {
                name: "Customer Assistance",
                icon: "users"
            },
            {
                name: "Display & Signage Creation",
                icon: "print"
            },
            {
                name: "Library Management Software (LMS)",
                icon: "computer"
            },
            {
                name: "Event Organisation & Hosting",
                icon: "calendar"
            },
        ]
    },
    {
        name: "Customer Service & Business",
        id: "customer-service-n-business",
        summary: "In my work, I have helped customers and clients by answering questions, understanding their needs, and providing clear and helpful support. I focus on communication, accuracy, and creating a positive customer experience. I have experience in handling sales processes and transactions, and following procedures carefully to ensure accuracy and smooth customer interactions. I also have experience in creating invoices, including organising and processing payment-related information with attention to detail and accuracy. I have interacted with customers face-to-face as well as through digital means.",
        skills: [
            {
                name: "Customer Assistance",
                icon: "users"
            },
            {
                name: "Sales & Transactions",
                icon: "shopping-cart"
            },
            {
                name: "Invoicing",
                icon: "file"
            }
        ]
    },
    {
        name: "Development & Design",
        id: "development-n-design",
        summary: "I have experience in web development, building websites with a focus on clean layout and usability, using frontend stacks like HTML, CSS and JavaScript. I use HTML to structure content clearly, CSS to create aesthetic and responsive designs, and JavaScript to add interactivity and function. I have general knowledge of programming which I use for this purpose as well as other projects I might work on. I also have experience as a print designer, with practical knowledge in graphic and print design, including working with image editing tools to refine and prepare visuals for conceptual, promotional or print use.",
        skills: [
            {
                name: "Web Development",
                icon: "computer"
            },
            {
                name: "Programming",
                icon: "code"
            },
            {
                name: "HTML",
                icon: "html5 fa-brands"
            },
            {
                name: "CSS",
                icon: "css fa-brands"
            },
            {
                name: "Javascript",
                icon: "js fa-brands"
            },
            {
                name: "Graphic Design",
                icon: "brush"
            },
            {
                name: "Print Design",
                icon: "print"
            },
            {
                name: "Image Manipulation / Photoshop",
                icon: "image"
            }
        ]
    },
    {
        name: "Other skills",
        id: "other-skills",
        summary: "",
        skills: [
            {
                name: "Word processing",
                icon: "file-word"
            },
            {
                name: "Presentation creation",
                icon: "file-powerpoint"
            },
            {
                name: "Spreadsheeting",
                icon: "file-excel"
            },
            {
                name: "Databases",
                icon: "database"
            },
            {
                name: "Data entry",
                icon: "keyboard"
            },
            {
                name: "Bilingual (EN, AR)",
                icon: "kakao-talk fa-brands"
            },
        ]
    },
]

const sectionsDiv = document.getElementById("sections-div");

for (let i = 0; i < sections.length; i++) {
    const data = sections[i];
    const section = document.createElement("section");
    section.id = data.id;
    section.classList.add("skill-section");

    const container = document.createElement("div");
    container.classList.add("container");
    section.append(container);

    container.innerHTML = `
<h2>${data.name}</h2>
<p class="summary">${data.summary}</p>
<div class="block-grid">
${createBlocks(data.skills)}
</div>
`;

    sectionsDiv.append(section);
}

function createBlocks(skills) {
    let html = "";

    for (let i = 0; i < skills.length; i++) {
        const data = skills[i];

        html += `
<div class="block">
    <i class="fa-solid fa-${data.icon}"></i>
    <p>${data.name}</p>
</div>`;
    }

    return html;
}