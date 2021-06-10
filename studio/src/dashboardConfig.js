export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c1c29fca3588d0c6612f7b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-5fiais12",
                  apiId: "90126b8b-e29c-4e23-b03c-8bf8ec988bcd",
                },
                {
                  buildHookId: "60c1c29fe1f312d5e2ef518c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-692ptty5",
                  apiId: "e6b23d94-9399-49c2-b882-023f3d07ea09",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Jgobeille/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-692ptty5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
