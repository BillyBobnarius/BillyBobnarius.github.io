const gymData = {
    "location1": {
        label: "Location 1",
        title: "Westmount Park",
        description: {
            point1: "1) This is the first paragraph about the Town Square. It focuses on the community atmosphere.",
            point2: "2) This is the second paragraph. Here, I observed how the outdoor equipment handles weather wear.",
            point3: "3) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
            point4: "4) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
            point5: "5) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
        }
    },
    "location2": {
        label: "Location 2",
        title: "The Iron Warehouse",
        description: {
            point1: "1) This is the first paragraph about the Town Square. It focuses on the community atmosphere.",
            point2: "2) This is the second paragraph. Here, I observed how the outdoor equipment handles weather wear.",
            point3: "3) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
            point4: "4) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
            point5: "5) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
        }
    },
    "location3": {
        label: "Location 3",
        title: "Cartier Square",
        description: {
            point1: "1) This is the first paragraph about the Town Square. It focuses on the community atmosphere.",
            point2: "2) This is the second paragraph. Here, I observed how the outdoor equipment handles weather wear.",
            point3: "3) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
            point4: "4) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
            point5: "5) This is the third paragraph. I concluded that urban gyms are the future of accessible fitness.",
        }
    }
};

function loadContent() {
    const container = document.querySelector('[data-location]');
    if (container) {
        const id = container.getAttribute('data-location');
        const data = gymData[id];

        if (data) {
            document.getElementById('loc-label').innerText = data.label;
            document.getElementById('loc-title').innerText = data.title;

            // Target the description area
            const descArea = document.getElementById('loc-description');
            descArea.innerHTML = ""; // Clear any example text first

            // Loop through the description object and create paragraphs
            Object.values(data.description).forEach(text => {
                const p = document.createElement('p');
                p.innerText = text;
                descArea.appendChild(p);
            });
        }
    }
}

window.onload = loadContent;