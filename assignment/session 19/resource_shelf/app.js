
class ResourceStore {

    constructor() {
        this.storageKey = "resourceShelfData";
        this.resources = this.loadResources();
    }

    loadResources() {
        try {
            const data = localStorage.getItem(this.storageKey);

            if (!data) {
                return [];
            }

            const resources = JSON.parse(data);

            return Array.isArray(resources) ? resources : [];

        } catch (error) {
            console.error("Error loading resources:", error);
            return [];
        }
    }

    saveResources() {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.resources)
        );
    }

    add(resource) {
        this.resources.push(resource);
        this.saveResources();
    }

    remove(id) {
        this.resources = this.resources.filter(
            resource => resource.id !== Number(id)
        );

        this.saveResources();
    }

    getAll() {
        return [...this.resources];
    }
}

const store = new ResourceStore();

const resourceForm = document.getElementById("resourceForm");
const shelf = document.getElementById("shelf");

function readForm() {
    console.log("readForm()");

    const title = document.getElementById("title").value.trim();
    const url = document.getElementById("url").value.trim();
    const subject = document.getElementById("subject").value;

    const resource = {
        id: Date.now(),
        title: title,
        url: url,
        subject: subject
    };

    return resource;
}

function saveResources(resource) {
    console.log("saveResources()");
    store.add(resource);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}

function renderResources() {
    console.log("renderResources()");

    const resources = store.getAll();

    if (resources.length === 0) {
        shelf.innerHTML = `
            <p class="empty-message">
                No resources available.
                Please add your first resource.
            </p>
        `;

        return;
    }

    shelf.innerHTML = resources.map(resource => `

        <div class="resource-card">

            <h3>
                ${escapeHTML(resource.title)}
            </h3>

            <span class="subject-badge">
                ${escapeHTML(resource.subject)}
            </span>

            <a
                href="${escapeHTML(resource.url)}"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-link"
            >
                Open Resource
            </a>

            <button
                class="delete-button"
                type="button"
                data-id="${resource.id}"
            >
                Delete
            </button>

        </div>

    `).join("");
}

function deleteResource(id) {
    console.log("deleteResource()");

    store.remove(Number(id));

    renderResources();
}

resourceForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const resource = readForm();

    saveResources(resource);

    renderResources();

    resourceForm.reset();
});

shelf.addEventListener("click", function(event) {

    const deleteButton = event.target.closest(".delete-button");

    if (deleteButton) {
        const id = Number(deleteButton.dataset.id);

        deleteResource(id);
    }

});

renderResources();
