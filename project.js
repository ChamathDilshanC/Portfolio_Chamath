// Project and assignment data
const projects = [
    { id: 1, type: 'project', title: 'E-commerce Platform Web', description: 'Developed a full-stack online store with user authentication, product catalog, and payment integration using React, Node.js, and MongoDB.', image: 'Projects/Assets/Pos.png', github: 'https://github.com/ChamathDilshanC/Pos-System' },
    { id: 2, type: 'project', title: 'Chat App', description: 'Created a real-time messaging application with features like user authentication, chat rooms, and message history using Socket.io and Express.', image: 'Projects/Assets/ChatApp.png', github: 'https://github.com/ChamathDilshanC/Chat-App-UI' },
    { id: 3, type: 'project', title: 'Sun @ Moon Resort POS', description: 'Built a point-of-sale system for a resort, featuring inventory management, billing, and reporting functionalities using Java and MySQL.', image: 'Projects/Assets/Resort.png', github: 'https://github.com/ChamathDilshanC/Sun-MoonResort_Project' },
    { id: 4, type: 'project', title: 'Connect 4 Game', description: 'Implemented the classic Connect 4 game with a graphical user interface, AI opponent, and score tracking using Java and JavaFX.', image: 'Projects/Assets/C4G.png', github: 'https://github.com/ChamathDilshanC/connect-four-game-assignment-1' },
    { id: 5, type: 'project', title: 'Boy Girl Match Percentage', description: 'Designed a fun app that calculates compatibility percentage between two names using custom algorithms and a user-friendly interface.', image: 'Projects/Assets/BGM.png', github: 'https://github.com/ChamathDilshanC/MatchPresentage' },
    { id: 6, type: 'project', title: 'CLI Student Management', description: 'Developed a command-line interface for managing student records, including CRUD operations and basic reporting, using Python and SQLite.', image: 'Projects/Assets/SMS.png', github: 'https://github.com/ChamathDilshanC/ComandLineInterface-SMS-' },
];

const assignments = [
    {
        id: 7,
        type: 'assignment',
        title: 'Assignment 01',
        description: 'Html and CSS assignment',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment1',
        cases: [
            {
                title: 'Case 1',
                description: 'Implement The Portfolio',
                path: 'index.html',
                image: 'Assigments/Assets/A1/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath'
            }
        ]
    },
    {
        id: 8,
        type: 'assignment',
        title: 'Assignment 02',
        description: 'Implemented various data structures like linked lists, trees, and graphs in C++. Includes comprehensive unit tests.',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment2',
        cases: [
            {
                title: 'Case 1',
                description: 'A colorful grid layout with four quadrants in red, green, yellow, and pink.',
                path: 'Assigments/Assigment2/Case1/case1.html',
                image: 'Assigments/Assets/A2/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/blob/main/Assigments/Assigment2/Case1'
            },
            {
                title: 'Case 2',
                description: 'A dark blue rectangular layout with three repeated orange "f" logos.',
                path: 'Assigments/Assigment2/Case2/case2.html',
                image: 'Assigments/Assets/A2/Case2.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/blob/main/Assigments/Assigment2/Case2'
            },
            {
                title: 'Case 3',
                description: 'A simple circular design with concentric circles in different colors.',
                path: 'Assigments/Assigment2/Case3/case3.html',
                image: 'Assigments/Assets/A2/Case3.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/blob/main/Assigments/Assigment2/Case3'
            },
            {
                title: 'Case 4',
                description: 'A card-like layout with a blue background and the word "How".',
                path: 'Assigments/Assigment2/Case4/case4.html',
                image: 'Assigments/Assets/A2/Case4.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/blob/main/Assigments/Assigment2/Case4'
            },
            {
                title: 'Case 5',
                description: 'A colorful grid layout made up of 12 rectangles.',
                path: 'Assigments/Assigment2/Case5/case5.html',
                image: 'Assigments/Assets/A2/Case5.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/blob/main/Assigments/Assigment2/Case5'
            },
            {
                title: 'Case 6',
                description: 'Another colorful grid layout with asymmetrical arrangement.',
                path: 'Assigments/Assigment2/Case6/case6.html',
                image: 'Assigments/Assets/A2/Case6.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/blob/main/Assigments/Assigment2/Case6'
            }
        ]
    },
    {
        id: 9,
        type: 'assignment',
        title: 'Assignment 03',
        description: 'CSS Animations and Transitions',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3',
        cases: [
            {
                title: 'Case 1',
                description: 'Simple Menu Bar',
                path: 'Assigments/Assigment3/Case1/case1.html',
                image: 'Assigments/Assets/A3/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3/Case1'
            },
            {
                title: 'Case 2',
                description: 'Hover Effect Animation',
                path: 'Assigments/Assigment3/Case2/case2.html',
                image: 'Assigments/Assets/A3/Case2.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3/Case2'
            },
            {
                title: 'Case 3',
                description: 'Floating Box Animation',
                path: 'Assigments/Assigment3/Case3/case3.html',
                image: 'Assigments/Assets/A3/Case3.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3/Case3'
            },
            {
                title: 'Case 4',
                description: 'Warterdrop Animation',
                path: 'Assigments/Assigment3/Case4/case4.html',
                image: 'Assigments/Assets/A3/Case4.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3/Case4'
            },
            {
                title: 'Case 5',
                description: 'Image Slider',
                path: 'Assigments/Assigment3/Case5/case5.html',
                image: 'Assigments/Assets/A3/Case5.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3/Case5'
            },
            {
                title: 'Case 6',
                description: 'Car Animation',
                path: 'Assigments/Assigment3/Case6/CarAnimation.html',
                image: 'Assigments/Assets/A3/Case6.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment3/Case6'
            }
        ]
    },
    {
        id: 10,
        type: 'assignment',
        title: 'Assignment 04',
        description: 'Design layout using flexible grids, images, and CSS media queries.',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment1',
        cases: [
            {
                title: 'Case 1',
                description: 'Design layout using flexible grids, images, and CSS media queries.',
                path: 'Assigments/Assigment4/Assigment-4.html',
                image: 'Assigments/Assets/A4/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment4'
            }
        ]
    },
    {
        id: 11,
        type: 'assignment',
        title: 'Assignment 05',
        description: 'Design user interface for inventory management, sales processing, and reporting.',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment5',
        cases: [
            {
                title: 'Case 1',
                description: 'Implement a Pos System.',
                path: 'Assigments/Assigment5/index.html',
                image: 'Assigments/Assets/A5/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Assignment-05/tree/main/Case1'
            }
        ]
    },
    {
        id: 12,
        type: 'assignment',
        title: 'Assignment 06',
        description: 'Design and build a website or platform to showcase your work and skills effectively.',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath/tree/main/Assigments/Assigment6',
        cases: [
            {
                title: 'Case 1',
                description: 'Created My Own Portfolio',
                path: 'index.html',
                image: 'Assigments/Assets/A6/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Portfolio_Chamath'
            }
        ]
    },
    {
        id: 13,
        type: 'assignment',
        title: 'Assignment 07',
        description: 'Created Single Page Pos Application. [ SPA ]',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Pos-System/tree/spa',
        cases: [
            {
                title: 'Case 1',
                description: 'Made No Refreshing Pages.',
                path: 'Assigments/Assigment6/index.html',
                image: 'Assigments/Assets/A5/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Pos-System/tree/spa'
            }
        ]
    },
    {
        id: 14,
        type: 'assignment',
        title: 'Assignment 08',
        description: 'Create the graphical view of a Que Process Using HTML, CSS and JS.',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Assignment-08',
        cases: [
            {
                title: 'Case 1',
                description: 'Queue Process Visualization',
                path: 'Assigments/Assigment7/Case1/Case1.html',
                image: 'Assigments/Assets/A8/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Assignment-08/tree/main/Case1'
            },
            {
                title: 'Case 2',
                description: 'Queue Animation Implementation',
                path: 'Assigments/Assigment7/Case2/Case2.html',
                image: 'Assigments/Assets/A8/Case2.png',
                github: 'https://github.com/ChamathDilshanC/Assignment-08/tree/main/Case2'
            }
        ]
    },
    {
        id: 15,
        type: 'assignment',
        title: 'Assignment 09',
        description: 'graphical view of the famous TV Series Knight Rider’s theme light system',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Assignment-09',
        cases: [
            {
                title: 'Case 1',
                description: 'Create a graphical view of the famous TV Series Knight Rider’s theme light systemusingHTML, CSS and JS. \n',
                path: 'Assigments/Assigment8/Assigment.html',
                image: 'Assigments/Assets/A9/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Assignment-09/blob/main/Assigment.html'
            }
        ]
    },
    {
        id: 16,
        type: 'assignment',
        title: 'Assignment 10',
        description: 'This project includes a Calculator application built with HTML, CSS, and JavaScript. ',
        image: 'Assigments/Assets/Assigment.png',
        github: 'https://github.com/ChamathDilshanC/Assignment-10',
        cases: [
            {
                title: 'Case 1',
                description: 'Designed for simplicity and ease of use, this web-based calculator performs basic arithmetic operations and serves as an interactive tool for practicing frontend development skills. \n',
                path: 'Assigments/Assigment9/Calculator.html',
                image: 'Assigments/Assets/A10/Case1.png',
                github: 'https://github.com/ChamathDilshanC/Assignment-10/blob/main/Calculator.html'
            }
        ]
    },
];

const allItems = [...projects, ...assignments];

let currentItems = allItems;
let currentFilter = 'all';
let currentIndex = 0;

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${item.title}</h2>
            <p class="card-description">${item.description}</p>
        </div>
        <div class="card-footer">
            <div class="card-actions">
                <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <svg class="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                ${item.type === 'assignment' ? `
                    <button class="run-button" data-id="${item.id}">
                        Explore
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    const githubLink = card.querySelector('.github-link');
    githubLink.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('GitHub link clicked:', item.github);
    });

    const runButton = card.querySelector('.run-button');
    if (runButton) {
        runButton.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Run button clicked for assignment:', item.id);
            openPopup(item.id);
        });
    }

    return card;
}

function createPopupCard(caseItem, assignmentId) {
    const card = document.createElement('div');
    card.className = 'popup-card';

    // Find the parent assignment to get the default GitHub path if case doesn't have one
    const parentAssignment = assignments.find(a => a.id === assignmentId);
    const githubPath = caseItem.github || `${parentAssignment.github}/tree/main/${caseItem.path}`;

    card.innerHTML = `
        <img src="${caseItem.image}" alt="${caseItem.title}" class="popup-card-image">
        <div class="popup-card-content">
            <h3 class="popup-card-title">${caseItem.title}</h3>
            <p>${caseItem.description}</p>
            <div class="popup-card-actions">
                <a href="${githubPath}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <svg class="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <button class="run-button" onclick="openRunInterface(${assignmentId}, '${caseItem.path}')">
                    RUN
                </button>
            </div>
        </div>
    `;

    const githubLink = card.querySelector('.github-link');
    githubLink.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('GitHub link clicked:', githubPath);
    });

    return card;
}

function updateCards() {
    const cardGrid = document.getElementById('cardGrid');
    if (!cardGrid) {
        console.error('Card grid element not found');
        return;
    }
    cardGrid.innerHTML = '';
    const itemsToShow = currentItems.slice(currentIndex, currentIndex + 3);
    itemsToShow.forEach((item, index) => {
        const card = createCard(item);
        cardGrid.appendChild(card);
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });
}

function filterItems(filter) {
    console.log('Filtering items:', filter);
    currentFilter = filter;
    currentIndex = 0;
    currentItems = filter === 'all' ? allItems :
        (filter === 'projects' ? projects : assignments);
    updateCards();
}

function updateSlider(button) {
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.style.width = `${button.offsetWidth}px`;
        slider.style.left = `${button.offsetLeft}px`;
    } else {
        console.error('Slider element not found');
    }
}

function openPopup(assignmentId) {
    console.log('Opening popup for assignment:', assignmentId);
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupContent = document.getElementById('popupContent');
    const popupTitle = document.getElementById('popupTitle');
    const assignment = assignments.find(a => a.id === assignmentId);

    if (!assignment) {
        console.error(`Assignment with id ${assignmentId} not found`);
        return;
    }

    popupTitle.textContent = assignment.title;
    popupContent.innerHTML = '';
    assignment.cases.forEach((caseItem) => {
        const card = createPopupCard(caseItem, assignmentId);
        popupContent.appendChild(card);
    });

    popup.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    console.log('Closing popup');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function openRunInterface(assignmentId, casePath) {
    console.log('Opening run interface:', assignmentId, casePath);
    const popup = document.createElement('div');
    popup.className = 'run-popup';
    popup.innerHTML = `
        <div class="run-popup-content">
            <h2>Code Execution</h2>
            <button class="close-popup" onclick="closeRunPopup()">&times;</button>
            <iframe src="${casePath}" frameborder="0"></iframe>
        </div>
    `;
    document.body.appendChild(popup);

    // Close popup when clicking outside
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closeRunPopup();
        }
    });
}

function closeRunPopup() {
    const popup = document.querySelector('.run-popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const panel = document.getElementById('panel');
    const buttons = panel.querySelectorAll('.panel-button');
    const seeMoreBtn = document.querySelector('.button-row');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Filter button clicked:', this.textContent.trim().toLowerCase());
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateSlider(this);
            filterItems(this.textContent.trim().toLowerCase());
        });
    });

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function() {
            console.log('See More button clicked');
            currentIndex += 3;
            if (currentIndex >= currentItems.length) {
                currentIndex = 0;
            }
            updateCards();
        });
    } else {
        console.error('See More button not found');
    }

    // Close popup when clicking outside
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });
    } else {
        console.error('Overlay element not found');
    }

    // Initialize slider position and cards
    const initialButton = buttons[0];
    if (initialButton) {
        updateSlider(initialButton);
        filterItems('all');
    } else {
        console.error('No filter buttons found');
    }

    // Debug: Log all clickable elements
    document.querySelectorAll('.github-link, .run-button').forEach(el => {
        console.log('Clickable element:', el);
    });
});

// Expose functions to global scope
window.openPopup = openPopup;
window.closePopup = closePopup;
window.openRunInterface = openRunInterface;
window.closeRunPopup = closeRunPopup;
window.filterItems = filterItems;
window.updateCards = updateCards;

// Additional debugging function
window.debugProjectSection = function() {
    console.log('Current filter:', currentFilter);
    console.log('Current index:', currentIndex);
    console.log('Current items:', currentItems);
    console.log('All items:', allItems);
    console.log('Projects:', projects);
    console.log('Assignments:', assignments);

    const cardGrid = document.getElementById('cardGrid');
    console.log('Card grid element:', cardGrid);

    const panel = document.getElementById('panel');
    console.log('Panel element:', panel);

    const buttons = panel ? panel.querySelectorAll('.panel-button') : [];
    console.log('Filter buttons:', buttons);

    const seeMoreBtn = document.querySelector('.button-row');
    console.log('See More button:', seeMoreBtn);

    const popup = document.getElementById('popup');
    console.log('Popup element:', popup);

    const overlay = document.getElementById('overlay');
    console.log('Overlay element:', overlay);
};

console.log('Project script loaded');