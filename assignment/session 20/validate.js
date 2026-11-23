
function validateForm(data) {

    const title = String(data.title || "").trim();

    const subject = String(data.subject || "").trim();

    if (title.length < 3) {
        return "Title must be at least 3 characters.";
    }

    if (title.length > 60) {
        return "Title must be no more than 60 characters.";
    }

    if (subject === "") {
        return "Please choose a subject.";
    }

    return "";
}
