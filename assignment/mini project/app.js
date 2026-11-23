
import { validateForm } from "./validate.js";

import {
    initializeTheme,
    toggleTheme
} from "./theme.js";

const STORAGE_KEY = "resourceShelfData";

const form = document.getElementById("resourceForm");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const subjectInput = document.getElementById("subject");

const shelf = document.getElementById("shelf");
const formError = document.getElementById("formError");

const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEdit");
const formHeading = document.getElementById("formHeading");

const resourceCount = document.getElementById("resourceCount");
const emptyMessage = document.getElementById("emptyMessage");

const themeToggle = document.getElementById("themeToggle");

let resources = loadResources();
let editingId = null;

function loadResources() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (!savedData) {
            return [];
        }

        const parsedData = JSON.parse(savedData);

        if (!Array.isArray(parsedData)) {
            return [];
        }

        return parsedData.filter(resource =>
            resource &&
            typeof resource.id === "string" &&
            typeof resource.title === "string" &&
            typeof resource.url === "string" &&
            typeof resource.subject === "string"
        );

    } catch (error) {
        console.error("Unable to load resources:", error);
        return [];
    }
}

function saveResources() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(resources)
        );

        return true;

    } catch (error) {
        console.error("Unable to save resources:", error);

        formError.textContent = "Unable to save resources.";

        return false;
    }
}

function createId() {
    if (crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function resetForm() {
    form.reset();

    editingId = null;

    formError.textContent = "";

    submitBtn.textContent = "Add Resource";

    formHeading.textContent = "Add New Resource";

    cancelEditBtn.hidden = true;
}

function createResourceCard(resource) {
    const card = document.createElement("article");

    card.className = "resource-card";
    card.dataset.id = resource.id;

    const heading = document.createElement("h3");
    heading.textContent = resource.title;

    const subject = document.createElement("p");
    subject.className = "subject";
    subject.textContent = `Subject: ${resource.subject}`;

    const link = document.createElement("a");
    link.className = "resource-url";
    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = resource.url;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "edit-btn";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    actions.append(editButton, deleteButton);

    card.append(heading, subject, link, actions);

    return card;
}

function renderResources() {
    shelf.replaceChildren();

    resources.forEach(resource => {
        const card = createResourceCard(resource);

        shelf.appendChild(card);
    });

    resourceCount.textContent =
        `${resources.length} ${resources.length === 1 ? "Resource" : "Resources"}`;

    emptyMessage.hidden = resources.length > 0;
}

function startEditing(id) {
    const resource = resources.find(item => item.id === id);

    if (!resource) {
        return;
    }

    editingId = resource.id;

    titleInput.value = resource.title;
    urlInput.value = resource.url;
    subjectInput.value = resource.subject;

    formError.textContent = "";

    submitBtn.textContent = "Update";

    formHeading.textContent = "Edit Resource";

    cancelEditBtn.hidden = false;

    titleInput.focus();

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function addResource(data) {
    const newResource = {
        id: createId(),
        title: data.title.trim(),
        url: data.url.trim(),
        subject: data.subject.trim()
    };

    resources.push(newResource);

    if (!saveResources()) {
        resources.pop();
        return;
    }

    renderResources();
    resetForm();
}

function updateResource(data) {
    const index = resources.findIndex(
        resource => resource.id === editingId
    );

    if (index === -1) {
        formError.textContent = "Resource not found.";
        return;
    }

    const oldResource = resources[index];

    const updatedResource = {
        ...oldResource,
        title: data.title.trim(),
        url: data.url.trim(),
        subject: data.subject.trim()
    };

    resources[index] = updatedResource;

    if (!saveResources()) {
        resources[index] = oldResource;
        return;
    }

    renderResources();
    resetForm();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = {
        title: titleInput.value,
        url: urlInput.value,
        subject: subjectInput.value
    };

    const error = validateForm(data);

    if (error) {
        formError.textContent = error;
        return;
    }

    formError.textContent = "";

    if (editingId) {
        updateResource(data);
    } else {
        addResource(data);
    }
});

shelf.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");

    if (!button || !shelf.contains(button)) {
        return;
    }

    const card = button.closest(".resource-card");

    if (!card) {
        return;
    }

    const id = card.dataset.id;

    const action = button.dataset.action;

    if (action === "edit") {
        startEditing(id);
    }

    if (action === "delete") {
        const resource = resources.find(
            item => item.id === id
        );

        if (!resource) {
            return;
        }

        const confirmed = confirm(
            `Are you sure you want to delete "${resource.title}"?`
        );

        if (!confirmed) {
            return;
        }

        const previousResources = resources;

        resources = resources.filter(
            item => item.id !== id
        );

        if (!saveResources()) {
            resources = previousResources;
            return;
        }

        if (editingId === id) {
            resetForm();
        }

        renderResources();
    }
});

cancelEditBtn.addEventListener("click", resetForm);

themeToggle.addEventListener("click", function () {
    toggleTheme();
});

initializeTheme();

renderResources();
