"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2746],{4075:(e,t,n)=>{n.d(t,{M:()=>d});var r=n(9592),i=n(53),a=n(4722);n(3046);function d(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:o(e),edges:l(e)};return r.A(e.graph())||(t.value=i.A(e.graph())),t}function o(e){return a.A(e.nodes(),(function(t){var n=e.node(t),i=e.parent(t),a={v:t};return r.A(n)||(a.value=n),r.A(i)||(a.parent=i),a}))}function l(e){return a.A(e.edges(),(function(t){var n=e.edge(t),i={v:t.v,w:t.w};return r.A(t.name)||(i.name=t.name),r.A(n)||(i.value=n),i}))}},53:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1641);const i=function(e){return(0,r.A)(e,4)}},2746:(e,t,n)=>{n.d(t,{r:()=>E});var r=n(1176),i=n(4075),a=n(8747),d=n(6257),o=n(697),l=n(358),s=n(6312);let c={},h={},g={};const f=(e,t)=>(d.l.trace("In isDescendant",t," ",e," = ",h[t].includes(e)),!!h[t].includes(e)),u=(e,t,n,r)=>{d.l.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const i=t.children(e)||[];e!==r&&i.push(e),d.l.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(t.children(i).length>0)u(i,t,n,r);else{const a=t.node(i);d.l.info("cp ",i," to ",r," with parent ",e),n.setNode(i,a),r!==t.parent(i)&&(d.l.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(d.l.debug("Setting parent",i,e),n.setParent(i,e)):(d.l.info("In copy ",e,"root",r,"data",t.node(e),r),d.l.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const o=t.edges(i);d.l.debug("Copying Edges",o),o.forEach((i=>{d.l.info("Edge",i);const a=t.edge(i.v,i.w,i.name);d.l.info("Edge data",a,r);try{((e,t)=>(d.l.info("Descendants of ",t," is ",h[t]),d.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(h[t]?h[t].includes(e.v)||f(e.v,t)||f(e.w,t)||h[t].includes(e.w):(d.l.debug("Tilt, ",t,",not in descendants"),!1))))(i,r)?(d.l.info("Copying as ",i.v,i.w,a,i.name),n.setEdge(i.v,i.w,a,i.name),d.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):d.l.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(o){d.l.error(o)}}))}d.l.debug("Removing node",i),t.removeNode(i)}))},w=(e,t)=>{const n=t.children(e);let r=[...n];for(const i of n)g[i]=e,r=[...r,...w(i,t)];return r},p=(e,t)=>{d.l.trace("Searching",e);const n=t.children(e);if(d.l.trace("Searching children of id ",e,n),n.length<1)return d.l.trace("This is a valid node",e),e;for(const r of n){const n=p(r,t);if(n)return d.l.trace("Found replacement for",e," => ",n),n}},v=e=>c[e]&&c[e].externalConnections&&c[e]?c[e].id:e,y=(e,t)=>{if(d.l.warn("extractor - ",t,i.M(e),e.children("D")),t>10)return void d.l.error("Bailing out");let n=e.nodes(),r=!1;for(const i of n){const t=e.children(i);r=r||t.length>0}if(r){d.l.debug("Nodes = ",n,t);for(const r of n)if(d.l.debug("Extracting node",r,c,c[r]&&!c[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),c[r])if(!c[r].externalConnections&&e.children(r)&&e.children(r).length>0){d.l.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";c[r]&&c[r].clusterData&&c[r].clusterData.dir&&(n=c[r].clusterData.dir,d.l.warn("Fixing dir",c[r].clusterData.dir,n));const a=new o.T({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));d.l.warn("Old graph before copy",i.M(e)),u(r,e,a,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:c[r].clusterData,labelText:c[r].labelText,graph:a}),d.l.warn("New graph after copy node: (",r,")",i.M(a)),d.l.debug("Old graph after copy",i.M(e))}else d.l.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!c[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),d.l.debug(c);else d.l.debug("Not a cluster",r,t);n=e.nodes(),d.l.warn("New list of nodes",n);for(const r of n){const n=e.node(r);d.l.warn(" Now next level",r,n),n.clusterNode&&y(n.graph,t+1)}}else d.l.debug("Done, no node has children",e.nodes())},x=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const r=e.children(t),i=x(e,r);n=[...n,...i]})),n},m={rect:(e,t)=>{d.l.info("Creating subgraph rect for ",t.id,t);const n=(0,d.c)(),r=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),i=r.insert("rect",":first-child"),o=(0,d.m)(n.flowchart.htmlLabels),c=r.insert("g").attr("class","cluster-label"),h="markdown"===t.labelType?(0,l.a)(c,t.labelText,{style:t.labelStyle,useHtmlLabels:o}):c.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let g=h.getBBox();if((0,d.m)(n.flowchart.htmlLabels)){const e=h.children[0],t=(0,s.Ltv)(h);g=e.getBoundingClientRect(),t.attr("width",g.width),t.attr("height",g.height)}const f=0*t.padding,u=f/2,w=t.width<=g.width+f?g.width+f:t.width;t.width<=g.width+f?t.diff=(g.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,d.l.trace("Data ",t,JSON.stringify(t)),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-w/2).attr("y",t.y-t.height/2-u).attr("width",w).attr("height",t.height+f);const{subGraphTitleTopMargin:p}=(0,a.g)(n);o?c.attr("transform",`translate(${t.x-g.width/2}, ${t.y-t.height/2+p})`):c.attr("transform",`translate(${t.x}, ${t.y-t.height/2+p})`);const v=i.node().getBBox();return t.width=v.width,t.height=v.height,t.intersect=function(e){return(0,a.i)(t,e)},r},roundedWithTitle:(e,t)=>{const n=(0,d.c)(),r=e.insert("g").attr("class",t.classes).attr("id",t.id),i=r.insert("rect",":first-child"),o=r.insert("g").attr("class","cluster-label"),l=r.append("rect"),c=o.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let h=c.getBBox();if((0,d.m)(n.flowchart.htmlLabels)){const e=c.children[0],t=(0,s.Ltv)(c);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}h=c.getBBox();const g=0*t.padding,f=g/2,u=t.width<=h.width+t.padding?h.width+t.padding:t.width;t.width<=h.width+t.padding?t.diff=(h.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,i.attr("class","outer").attr("x",t.x-u/2-f).attr("y",t.y-t.height/2-f).attr("width",u+g).attr("height",t.height+g),l.attr("class","inner").attr("x",t.x-u/2-f).attr("y",t.y-t.height/2-f+h.height-1).attr("width",u+g).attr("height",t.height+g-h.height-3);const{subGraphTitleTopMargin:w}=(0,a.g)(n);o.attr("transform",`translate(${t.x-h.width/2}, ${t.y-t.height/2-t.padding/3+((0,d.m)(n.flowchart.htmlLabels)?5:3)+w})`);const p=i.node().getBBox();return t.height=p.height,t.intersect=function(e){return(0,a.i)(t,e)},r},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,d=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2-d).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");const o=r.node().getBBox();return t.width=o.width,t.height=o.height,t.intersect=function(e){return(0,a.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,d=i/2;r.attr("class","divider").attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);const o=r.node().getBBox();return t.width=o.width,t.height=o.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,a.i)(t,e)},n}};let b={};const C=async(e,t,n,o,l,s)=>{d.l.info("Graph in recursive render: XXX",i.M(t),l);const h=t.graph().rankdir;d.l.trace("Dir in recursive render - dir:",h);const g=e.insert("g").attr("class","root");t.nodes()?d.l.info("Recursive render XXX",t.nodes()):d.l.info("No nodes found for",t),t.edges().length>0&&d.l.trace("Recursive edges",t.edge(t.edges()[0]));const f=g.insert("g").attr("class","clusters"),u=g.insert("g").attr("class","edgePaths"),w=g.insert("g").attr("class","edgeLabels"),v=g.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const r=t.node(e);if(void 0!==l){const n=JSON.parse(JSON.stringify(l.clusterData));d.l.info("Setting data for cluster XXX (",e,") ",n,l),t.setNode(l.id,n),t.parent(e)||(d.l.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(d.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r&&r.clusterNode){d.l.info("Cluster identified",e,r.width,t.node(e));const i=await C(v,r.graph,n,o,t.node(e),s),l=i.elem;(0,a.u)(r,l),r.diff=i.diff||0,d.l.info("Node bounds (abc123)",e,r,r.width,r.x,r.y),(0,a.s)(l,r),d.l.warn("Recursive render complete ",l,r)}else t.children(e).length>0?(d.l.info("Cluster - the non recursive path XXX",e,r.id,r,t),d.l.info(p(r.id,t)),c[r.id]={id:p(r.id,t),node:r}):(d.l.info("Node - the non recursive path",e,r.id,r),await(0,a.e)(v,t.node(e),h))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),d.l.info("Fix",c,"ids:",e.v,e.w,"Translating: ",c[e.v],c[e.w]),(0,a.f)(w,n)})),t.edges().forEach((function(e){d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),d.l.info("#############################################"),d.l.info("###                Layout                 ###"),d.l.info("#############################################"),d.l.info(t),(0,r.Zp)(t),d.l.info("Graph after layout:",i.M(t));let y=0;const{subGraphTitleTotalMargin:E}=(0,a.g)(s);return(e=>x(e,e.children()))(t).forEach((function(e){const n=t.node(e);d.l.info("Position "+e+": "+JSON.stringify(t.node(e))),d.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(n.y+=E,(0,a.p)(n)):t.children(e).length>0?(n.height+=E,((e,t)=>{d.l.trace("Inserting cluster");const n=t.shape||"rect";b[t.id]=m[n](e,t)})(f,n),c[n.id].node=n):(n.y+=E/2,(0,a.p)(n))})),t.edges().forEach((function(e){const r=t.edge(e);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r),r.points.forEach((e=>e.y+=E/2));const i=(0,a.h)(u,e,r,c,n,t,o);(0,a.j)(r,i)})),t.nodes().forEach((function(e){const n=t.node(e);d.l.info(e,n.type,n.diff),"group"===n.type&&(y=n.diff)})),{elem:g,diff:y}},E=async(e,t,n,r,o)=>{(0,a.a)(e,n,r,o),(0,a.b)(),(0,a.d)(),b={},h={},g={},c={},d.l.warn("Graph at first:",JSON.stringify(i.M(t))),((e,t)=>{if(!e||t>10)d.l.debug("Opting out, no graph ");else{d.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(d.l.warn("Cluster identified",t," Replacement id in edges: ",p(t,e)),h[t]=w(t,e),c[t]={id:p(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),r=e.edges();n.length>0?(d.l.debug("Cluster identified",t,h),r.forEach((e=>{e.v!==t&&e.w!==t&&f(e.v,t)^f(e.w,t)&&(d.l.warn("Edge: ",e," leaves cluster ",t),d.l.warn("Descendants of XXX ",t,": ",h[t]),c[t].externalConnections=!0)}))):d.l.debug("Not a cluster ",t,h)}));for(let t of Object.keys(c)){const n=c[t].id,r=e.parent(n);r!==t&&c[r]&&!c[r].externalConnections&&(c[t].id=r)}e.edges().forEach((function(t){const n=e.edge(t);d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(d.l.warn("Fix XXX",c,"ids:",t.v,t.w,"Translating: ",c[t.v]," --- ",c[t.w]),c[t.v]&&c[t.w]&&c[t.v]===c[t.w]){d.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=v(t.v),i=v(t.w),e.removeEdge(t.v,t.w,t.name);const a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const o=structuredClone(n),l=structuredClone(n);o.label="",o.arrowTypeEnd="none",l.label="",o.fromCluster=t.v,l.toCluster=t.v,e.setEdge(r,a,o,t.name+"-cyclic-special"),e.setEdge(a,i,l,t.name+"-cyclic-special")}else if(c[t.v]||c[t.w]){if(d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=v(t.v),i=v(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){const i=e.parent(r);c[i].externalConnections=!0,n.fromCluster=t.v}if(i!==t.w){const r=e.parent(i);c[r].externalConnections=!0,n.toCluster=t.w}d.l.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name)}})),d.l.warn("Adjusted Graph",i.M(e)),y(e,0),d.l.trace(c)}})(t),d.l.warn("Graph after:",JSON.stringify(i.M(t)));const l=(0,d.c)();await C(e,t,r,o,void 0,l)}}}]);