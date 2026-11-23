
import {
    validateForm,
    validateUrl
} from "./validate.js";

const runTestsBtn = document.getElementById("runTests");

const testResults = document.getElementById("testResults");

const totalTests = document.getElementById("totalTests");
const passedTests = document.getElementById("passedTests");
const failedTests = document.getElementById("failedTests");

const validForm = {
    title: "JavaScript Tutorial",
    url: "https://example.com/maths",
    subject: "JavaScript"
};

const tests = [
    {
        name: "Valid form submission",
        expected: "No validation error",
        run: () => validateForm(validForm) === ""
    },

    {
        name: "Title minimum length",
        expected: "Title must be at least 3 characters.",
        run: () => validateForm({
            ...validForm,
            title: "JS"
        }) === "Title must be at least 3 characters."
    },

    {
        name: "Title maximum length",
        expected: "Title must be no more than 60 characters.",
        run: () => validateForm({
            ...validForm,
            title: "A".repeat(61)
        }) === "Title must be no more than 60 characters."
    },

    {
        name: "Subject is required",
        expected: "Subject is required.",
        run: () => validateForm({
            ...validForm,
            subject: ""
        }) === "Subject is required."
    },

    {
        name: "Subject maximum length",
        expected: "Subject must be no more than 40 characters.",
        run: () => validateForm({
            ...validForm,
            subject: "A".repeat(41)
        }) === "Subject must be no more than 40 characters."
    },

    {
        name: "Valid HTTP and HTTPS URLs",
        expected: "Both URLs accepted",
        run: () => {
            const httpsResult = validateUrl(
                "https://example.com/maths"
            );

            const httpResult = validateUrl(
                "http://example.com"
            );

            return httpsResult === "" && httpResult === "";
        }
    },

    {
        name: "Invalid URL without scheme",
        expected: "Enter a valid URL",
        run: () => {
            return validateUrl("example.com") ===
                "Enter a valid URL";
        }
    },

    {
        name: "FTP and empty URL rejection",
        expected: "Only http or https links are allowed / Enter a valid URL",
        run: () => {
            const ftpResult = validateUrl(
                "ftp://files.example.com"
            );

            const emptyResult = validateUrl("");

            return (
                ftpResult === "Only http or https links are allowed" &&
                emptyResult === "Enter a valid URL"
            );
        }
    }
];

function runAllTests() {
    let passed = 0;
    let failed = 0;

    testResults.replaceChildren();

    tests.forEach((test, index) => {
        let result = false;

        try {
            result = test.run();
        } catch (error) {
            console.error(`Test ${index + 1} failed:`, error);
        }

        const row = document.createElement("tr");

        const values = [
            index + 1,
            test.name,
            test.expected,
            result ? "Expected result matched" : "Test failed",
            result ? "PASS" : "FAIL"
        ];

        values.forEach((value, cellIndex) => {
            const cell = document.createElement("td");

            cell.textContent = value;

            if (cellIndex === 4) {
                cell.className = result ? "pass" : "fail";
            }

            row.appendChild(cell);
        });

        testResults.appendChild(row);

        if (result) {
            passed++;
        } else {
            failed++;
        }
    });

    totalTests.textContent = tests.length;
    passedTests.textContent = passed;
    failedTests.textContent = failed;

    console.table(
        tests.map((test, index) => ({
            Test: index + 1,
            Name: test.name,
            Status: testResults.children[index].lastChild.textContent
        }))
    );
}

runTestsBtn.addEventListener("click", runAllTests);

runAllTests();
