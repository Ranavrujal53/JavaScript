
const tests = [

    {
        input: {
            title: "",
            subject: "Maths"
        },

        expected: "Title must be at least 3 characters."
    },

    {
        input: {
            title: "AB",
            subject: "Maths"
        },

        expected: "Title must be at least 3 characters."
    },

    {
        input: {
            title: "A".repeat(61),
            subject: "Maths"
        },

        expected: "Title must be no more than 60 characters."
    },

    {
        input: {
            title: "Algebra Notes",
            subject: ""
        },

        expected: "Please choose a subject."
    },

    {
        input: {
            title: "Algebra Notes",
            subject: "Maths"
        },

        expected: ""
    },

    {
        input: {
            title: "  CSS Guide  ",
            subject: "HTML & CSS"
        },

        expected: ""
    }

];

const results = tests.map(test => {

    const actual = validateForm(test.input);

    return {

        input: JSON.stringify(test.input),

        expected: test.expected || "Valid",

        actual: actual || "Valid",

        result: actual === test.expected ? "PASS" : "FAIL"

    };

});

console.table(results);
