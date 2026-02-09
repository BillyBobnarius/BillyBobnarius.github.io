const start_page_name = "index";
const page_holder_name = "activities";
const page_name_prefix = "activity";
const min_page = 0;
const max_pages = 3;

function navigate() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    let current_num = 0; 
    if (page.includes(page_name_prefix)) {
        current_num = parseInt(page.replace(`${page_name_prefix}_`, "").replace(".html", ""));
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            if (current_num < max_pages) {
                const next_num = current_num + 1;
                if (current_num === 0) {    
                    window.location.href = `./${page_holder_name}/${page_name_prefix}_${next_num}.html`;
                }else{
                    window.location.href = `./${page_name_prefix}_${next_num}.html`;
                }
            }
        } else if (event.key === 'ArrowLeft') {
            
            if (current_num > min_page) {
                const prev_num = current_num - 1;
                if (current_num === 1) {
                  window.location.href = `../${start_page_name}.html`;
                } else {
                    window.location.href = `./${page_name_prefix}_${prev_num}.html`;
                }  
            }
        }
    });
}

navigate();