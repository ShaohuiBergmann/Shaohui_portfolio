export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        { name: "jobTitle", title: "JobTitle", type: "string" },
        { name: "company", title: "Company", type: "text" },
        {
            name: "companyImg",
            title: "CompanyImg",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        { name: "dateStarted", title: "DateStarted", type: "date" },
        { name: "dateEnded", title: "DateEnded", type: "date" },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
