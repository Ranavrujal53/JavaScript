
class ResourceStore {

    constructor() {
        this.storageKey = "resourceShelfData";
        this.dataWasDamaged = false;
        this.resources = this.loadResources();
    }

    loadResources() {
        try {
            const data = localStorage.getItem(this.storageKey);

            if (data === null) {
                return [];
            }

            const resources = JSON.parse(data);

            if (!Array.isArray(resources)) {
                return [];
            }

            return resources;

        } catch (error) {
            this.dataWasDamaged = true;

            console.error(
                "Saved data was damaged; starting fresh",
                error
            );

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
            resource => Number(resource.id) !== Number(id)
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
const formError = document.getElementById("formError");

function readForm() {
    const title = document.getElementById("title").value.trim();
    const url = document.getElementById("url").value.trim();
    const subject = document.getElementById("subject").value;

    return {
        id: Date.now(),
        title: title,
        url: url,
        subject: subject
    };
}

function isDuplicate(resource) {
    return store.getAll().some(existing => {

        const sameTitle =
            existing.title.trim().toLowerCase() ===
            resource.title.trim().toLowerCase();

        const sameSubject =
            existing.subject.trim().toLowerCase() ===
            resource.subject.trim().toLowerCase();

        return sameTitle && sameSubject;
    });
}

function saveResources(resource) {
    store.add(resource);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

    })[character]);
}

function renderResources() {
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
                data-id="${Number(resource.id)}"
            >
                Delete
            </button>

        </div>

    `).join("");
}

function deleteResource(id) {
    store.remove(Number(id));
    renderResources();
}

resourceForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const resource = readForm();

    const error = validateForm(resource);

    if (error) {
        formError.textContent = error;
        return;
    }

    if (isDuplicate(resource)) {
        formError.textContent = "Already on your shelf";
        return;
    }

    try {
        saveResources(resource);
        renderResources();

        formError.textContent = "";
        resourceForm.reset();

    } catch (error) {
        formError.textContent =
            "Unable to save resource. Please try again.";
    }
});

shelf.addEventListener("click", function(event) {
    const deleteButton = event.target.closest(".delete-button");

    if (deleteButton && shelf.contains(deleteButton)) {
        const id = Number(deleteButton.dataset.id);
        deleteResource(id);
    }
});

renderResources();

if (store.dataWasDamaged) {
    formError.textContent =
        "Saved data was damaged; starting fresh";
}
