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
                    "6331c5b3a359ed0db98f36f5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-cwwc7uo1",
                  apiId: "2b55c678-c0ed-4257-8566-01c821275ab6",
                },
                {
                  buildHookId: "6331c5b4b89ad910051dba86",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xh6x93sj",
                  apiId: "f81ca900-583f-4270-9c17-a6ff05bbb28c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/LanaDeeLawfty/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xh6x93sj.netlify.app",
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
