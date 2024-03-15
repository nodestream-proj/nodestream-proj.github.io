"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3292],{4780:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(7624),o=i(2172);const s={sidebar_position:1},d="Modeling Source Nodes",a={id:"tutorials-intermediate/source-nodes",title:"Modeling Source Nodes",description:"Learn about source nodes and how to model them in nodestream.",source:"@site/docs/tutorials-intermediate/source-nodes.md",sourceDirName:"tutorials-intermediate",slug:"/tutorials-intermediate/source-nodes",permalink:"/docs/docs/tutorials-intermediate/source-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials-intermediate/source-nodes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials - Intermediate",permalink:"/docs/docs/category/tutorials---intermediate"},next:{title:"Relationship Building",permalink:"/docs/docs/tutorials-intermediate/relationship-building-techniques"}},r={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Source Node Behavior",id:"source-node-behavior",level:2},{value:"Data Insertion",id:"data-insertion",level:3},{value:"Uniqueness",id:"uniqueness",level:3},{value:"Defining the Source Node",id:"defining-the-source-node",level:2},{value:"Defining Properties",id:"defining-properties",level:3},{value:"Indexing Fields",id:"indexing-fields",level:3},{value:"Adding Multiple Node Types",id:"adding-multiple-node-types",level:3},{value:"Defining Relationships",id:"defining-relationships",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"modeling-source-nodes",children:"Modeling Source Nodes"}),"\n",(0,t.jsx)(n.p,{children:"Learn about source nodes and how to model them in nodestream."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"In nodestream, a source node is a node that is conceptually the center point of a piece of data being ingested.\nRelationships are defined relative to the source node.\nFor example, if you are ingesting data from a table in a relational database, the source node would often be the entity that table represents and forgein keys would be used to define relationships to other nodes in the graph."}),"\n",(0,t.jsx)(n.p,{children:"Determining which node may be the source node is a critical step in the modeling process.\nHere are some questions to consider when determining the source node:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What is the primary entity that the data represents?"}),"\n",(0,t.jsx)(n.li,{children:"What is the primary key of the data?"}),"\n",(0,t.jsx)(n.li,{children:"What is the primary way that the data is queried?"}),"\n",(0,t.jsx)(n.li,{children:"Can I define relationships to other nodes in the graph using this node?"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["There is ",(0,t.jsx)(n.strong,{children:"ONLY one source node per ingestion"}),". If you define multiple source nodes, the behavior is undefined (however, it currently overwrites the previous source node with the new one.)"]})}),"\n",(0,t.jsx)(n.h2,{id:"source-node-behavior",children:"Source Node Behavior"}),"\n",(0,t.jsx)(n.h3,{id:"data-insertion",children:"Data Insertion"}),"\n",(0,t.jsx)(n.p,{children:"Source nodes are always upserted.\nThat means that if a node with the same key already exists, it will be updated with the new properties, relationships, and labels.\nIf a node with the same key does not exist, it will be created."}),"\n",(0,t.jsx)(n.h3,{id:"uniqueness",children:"Uniqueness"}),"\n",(0,t.jsxs)(n.p,{children:["The source node, and in fact all nodes, have their a uniqueness is defined by the combination of its ",(0,t.jsx)(n.code,{children:"type"})," and ",(0,t.jsx)(n.code,{children:"key"}),".\nThe ",(0,t.jsx)(n.code,{children:"type"})," is the label of the node and the ",(0,t.jsx)(n.code,{children:"key"})," is the unique identifier of the node within the ",(0,t.jsx)(n.code,{children:"type"}),".\nFor example, if you have a source node with the type ",(0,t.jsx)(n.code,{children:"Person"})," and the key ",(0,t.jsx)(n.code,{children:"email"}),", then the combination of ",(0,t.jsx)(n.code,{children:"Person"})," and ",(0,t.jsx)(n.code,{children:"email"})," must be unique across all ",(0,t.jsx)(n.code,{children:"Person"})," nodes in the graph.\nIn the event that a node is referenced from another pipeline, the properties and relationships of the source node will be merged together with the new data.\nIf there are any conflicts, the new data will take precedence."]}),"\n",(0,t.jsx)(n.h2,{id:"defining-the-source-node",children:"Defining the Source Node"}),"\n",(0,t.jsxs)(n.p,{children:["The source node is defined in the ",(0,t.jsx)(n.code,{children:"source"})," block of the node definition.\nLet's take an example at a user record from a json object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "John Doe",\n  "email": "jdoe@example.com",\n  "age": 30,\n  "partner_id": 2,\n  "employer_id": 12345,\n  "status": "Active"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we'd likely want to define a ",(0,t.jsx)(n.code,{children:"Person"})," node with the ",(0,t.jsx)(n.code,{children:"id"})," as the key.\nHere's how we'd define the source node in the node definition:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- type: source_node\n  node_type: Person\n  key:\n    name: !jmespath id\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we're using the ",(0,t.jsx)(n.code,{children:"!jmespath"})," tag to extract the ",(0,t.jsx)(n.code,{children:"id"})," from the json object. Keep in mind that ",(0,t.jsx)(n.code,{children:"key"})," is a map, so you can define multiple keys if you need to for a composite key."]}),"\n",(0,t.jsx)(n.h3,{id:"defining-properties",children:"Defining Properties"}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's iterate on this model and add some more metadata to the source node.\nIn particular, we'll add the ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"age"}),", and ",(0,t.jsx)(n.code,{children:"email"})," properties to the source node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- type: source_node\n  node_type: Person\n  key:\n    name: !jmespath id\n  properties:\n    name: !jmespath name\n    age: !jmespath age\n    email: !jmespath email\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Keep in mind that the ",(0,t.jsx)(n.code,{children:"!jmespath"})," tag is used to extract the value from the json object.\nIt does not have to match the property name in the source node (e.g ",(0,t.jsx)(n.code,{children:"age"})," could be called ",(0,t.jsx)(n.code,{children:"years_old"}),")"]}),"\n",(0,t.jsx)(n.h3,{id:"indexing-fields",children:"Indexing Fields"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to index a field, you can do so by adding the ",(0,t.jsx)(n.code,{children:"additional_indexes"})," clause to the source node definition.\nHere's an example of indexing the ",(0,t.jsx)(n.code,{children:"email"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- type: source_node\n  node_type: Person\n  key:\n    name: !jmespath id\n  properties:\n    name: !jmespath name\n    age: !jmespath age\n    email: !jmespath email\n  additional_indexes:\n    - email\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You may be wondering why its called ",(0,t.jsx)(n.code,{children:"additional_indexes"})," and not just ",(0,t.jsx)(n.code,{children:"indexes"}),".\nNodestream auotomatically indexes certain fields such as the ",(0,t.jsx)(n.code,{children:"last_ingested_at"})," timestamp as well as the fields used in the ",(0,t.jsx)(n.code,{children:"key"})," clause.\nAlso note that, the behavior of the ",(0,t.jsx)(n.code,{children:"additional_indexes"})," clause as well as indexes automatically created by nodestream depends on the underlying graph database. See the documentation for your specific graph database for more information ",(0,t.jsx)(n.a,{href:"../../category/database-support",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"additional_indexes"})," clause is a list, so you can add multiple indexes if you need to."]})}),"\n",(0,t.jsx)(n.h3,{id:"adding-multiple-node-types",children:"Adding Multiple Node Types"}),"\n",(0,t.jsxs)(n.p,{children:["You can also apply additional types/labels to the source node by using the ",(0,t.jsx)(n.code,{children:"addional_types"})," clause.\nRecall that in our ",(0,t.jsx)(n.code,{children:"status"})," field, we have a value of ",(0,t.jsx)(n.code,{children:"Active"}),".\nIt may be nice to add a label to the source node based on the status.\nHere's how you'd do that:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- type: source_node\n  node_type: Person\n  key:\n    name: !jmespath id\n  properties:\n    name: !jmespath name\n    age: !jmespath age\n    email: !jmespath email\n  additional_indexes:\n    - email\n  additional_types:\n    - Active\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"additional_types"})," clause is not considered as part of defining the uniqueness of the node.\nIn other words, the combination of ",(0,t.jsx)(n.code,{children:"Person"})," and ",(0,t.jsx)(n.code,{children:"id"})," must still be unique across all ",(0,t.jsx)(n.code,{children:"Person"})," nodes in the graph regardless of what values are in the ",(0,t.jsx)(n.code,{children:"additional_types"})," clause.\nThis is here to support querying and filtering of nodes in the graph."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"additional_types"})," clause is a list, so you can add multiple types if you need to."]})}),"\n",(0,t.jsx)(n.h3,{id:"defining-relationships",children:"Defining Relationships"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"../relationship-building-techniques",children:"next guide"})," will cover how to define relationships between nodes."]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>d});var t=i(1504);const o={},s=t.createContext(o);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);