"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3104],{9568:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/docs/blog/welcome","editUrl":"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/blog/2024-03-30-welcome.md","source":"@site/blog/2024-03-30-welcome.md","title":"Welcome","description":"Welcome to the new nodestream documentation and project site!","date":"2024-03-30T00:00:00.000Z","formattedDate":"March 30, 2024","tags":[{"label":"welcome","permalink":"/docs/blog/tags/welcome"},{"label":"nodestream","permalink":"/docs/blog/tags/nodestream"}],"readingTime":0.545,"hasTruncateMarker":false,"authors":[{"name":"Zach Probst","title":"Maintainer of Nodestream","url":"https://github.com/zprobst","imageURL":"https://github.com/zprobst.png","key":"zprobst"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["zprobst"],"tags":["welcome","nodestream"]},"unlisted":false,"nextItem":{"title":"Nodestream 0.12 Release","permalink":"/docs/blog/2024/03/30/nodestream-0-12"}},"content":"Welcome to the new nodestream documentation and project site! \\nWe are excited to share with you the new features and improvements we have been working on.\\n\\nWe have been working hard to improve the documentation and make it easier to use and navigate.\\nWe have also been working on improving the project site to make it easier to find the information you need.\\n\\nWe hope you find the new documentation and project site helpful and easy to use!\\n\\nBy the way, thanks to the [Docusaurus](https://docusaurus.io/) team for creating such a great tool!\\n\\nIf you have any questions or feedback, please feel free to reach out to us on [GitHub](https://github.com/nodestream-proj/nodestream)!"},{"id":"/2024/03/30/nodestream-0-12","metadata":{"permalink":"/docs/blog/2024/03/30/nodestream-0-12","editUrl":"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/blog/2024-03-30-nodestream-0-12/index.md","source":"@site/blog/2024-03-30-nodestream-0-12/index.md","title":"Nodestream 0.12 Release","description":"We are happy to announce the release of Nodestream 0.12.","date":"2024-03-30T00:00:00.000Z","formattedDate":"March 30, 2024","tags":[],"readingTime":2.745,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/docs/blog/welcome"}},"content":"We are happy to announce the release of Nodestream 0.12. \\nThis release marks the largest update to Nodestream since its inception. \\nWe\'ve spent a lot of time improving the core of nodestream and we\'re excited to share it with you.\\n\\nBefore we get into the details, we want to thank the community for their support and feedback. \\nAs such, we have completely revamped the documentation to make it easier to use and navigate.\\nThis releases comes with two headline features [Database Migrations](#database-migrations) and [Multi-Database Support](#multi-database-support).\\n\\n## Database Migrations \\n\\nIn the past, nodestream attempted to automatically create indexes and constraints on the database based on your pipeline at runtime.\\nThis was done by introspecting the schema of the entire project and generating the appropriate queries to create the indexes and constraints.\\nThis was a very powerful feature but it had a few drawbacks:\\n- **It was redundant.** The same indexes and constraints were being created with `IF NOT EXISTS` clauses every time the pipeline was run.\\n- **It was slow.** The queries were being executed serially and the pipeline was locked until they were all completed.\\n- **It was error prone.** If the database was not in a state that allowed for the creation of the indexes and constraints, the pipeline would fail.\\n- **It was high friction.** There was no way to refactor the database without manual intervention. If the schema changed, the pipeline would fail and the user would have to manually remove the indexes, constraints, and sometimes data before running the pipeline again.\\n\\nTo address these issues, `nodestream` 0.12 has introduced the concept of migrations.\\nMigrations are a way of encapsulating changes to the database schema in a way that can be applied incrementally. \\nConceptually, they are similar to the migrations in the [Django](https://docs.djangoproject.com/en/5.0/topics/migrations/), [Rails](https://guides.rubyonrails.org/v3.2/migrations.html), [Neo4j Migrations](https://neo4j.com/labs/neo4j-migrations/2.0/), and [Flyway](https://documentation.red-gate.com/fd/migrations-184127470.html) frameworks.\\n\\nMigrations are defined in a directory called `migrations` in the root of your project.\\nEach migration is a yaml file that contains data about the migration and its dependencies.\\nYou can create migrations by running the `nodestream migrations make` command.\\n\\n## Multi-Database Support \\n\\nPrior to this release, the only database that was supported was neo4j. \\nWhile this is an category leading database, the goal of nodestream is to be database agnostic.\\nAs such, we are happy to announce that nodestream now supports [Amazon Neptune](https://aws.amazon.com/neptune/) and [Amazon Neptune Analytics](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html).\\nTO accomedate that, we have moved the neo4j database connector into a separate package called [nodestream-plugin-neo4j](https://pypi.org/project/nodestream-plugin-neo4j/) and added a new package called [nodestream-plugin-neptune](https://pypi.org/project/nodestream-plugin-neptune/).\\n\\nThank you to the following folks from AWS to make that happen:\\n\\n-- TODO: Get the links to all of the AWS folks who helped us with this.\\n\\n## Parquet Support\\n\\nMany customers have data stored in parquet format. \\nPaquet is a columnar storage format that is optimized for reading and writing large datasets.\\nWe are happy to announce that nodestream now supports parquet as a first class citizen.\\n\\n## Performance Improvements\\n\\nWe\'ve made a small number of performance improvements to the core of nodestream that should result in faster processing times and lower memory usage.\\nMost notably, we\'ve cache the `last_ingested_at` timestamp for nodes and relationships to reduce the number of times we create objects in memory. \\nWe\'ve observed a 10% improvement in processing times and a 5% reduction in memory usage in our benchmarks."}]}')}}]);