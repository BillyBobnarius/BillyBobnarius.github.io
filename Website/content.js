const activity_data = {
    "activity_1": {
        label: "Activity 1",
        title: "Westmount Park & Westmount area",
        description: {
            point1: "1)",
            point2: "2)",
            point3: "3)",
            point4: "4)",
            point5: "5)",
            point6: "6)",
            point7: "7)",
            point8: "8)",
            point9: "9)",
        }
    },
    "activity_2": {
        label: "Activity 2",
        title: "Canadian Architecture Centre",
        description: {
            point1: "1)",
            point2: "2)",
            point3: "3)",
            point4: "4)",
            point5: "5)",
            point6: "6)",
            point7: "7)",
            point8: "8)",
            point9: "9)",
        }
    },
    "activity_3": {
        label: "Activity 3",
        title: "",
        description: {
            point1: "1)",
            point2: "2)",
            point3: "3)",
            point4: "4)",
            point5: "5)",
            point6: "6)",
            point7: "7)",
            point8: "8)",
            point9: "9)",
        }
    }
};

function load_content() {
    const container = document.querySelector('[data-activity]');
    if (container) {
        const id = container.getAttribute('data-activity');
        const data = activity_data[id];

        if (data) {
            document.getElementById('activity-label').innerText = data.label;
            document.getElementById('activity-title').innerText = data.title;

            // Target the description area
            const descArea = document.getElementById('activity-description');
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

window.onload = load_content;