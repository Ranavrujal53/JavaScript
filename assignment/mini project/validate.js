
export function validateUrl(value) {
    let url;

    try {
        url = new URL(String(value ?? "").trim());
    } catch (error) {
        return "Enter a valid URL";
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") {
        return "Only http or https links are allowed";
    }

    return "";
}

export function validateForm(data) {
    const title = String(data.title ?? "").trim();
    const subject = String(data.subject ?? "").trim();
    const url = String(data.url ?? "").trim();

    if (title.length < 3) {
        return "Title must be at least 3 characters.";
    }

    if (title.length > 60) {
        return "Title must be no more than 60 characters.";
    }

    if (!subject) {
        return "Subject is required.";
    }

    if (subject.length > 40) {
        return "Subject must be no more than 40 characters.";
    }

    const urlError = validateUrl(url);

    if (urlError) {
        return urlError;
    }

    return "";
}
