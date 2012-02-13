Ext.data.JsonP.tree({"guide":"<h1>Trees</h1>\n\n<hr />\n\n<p>The <a href=\"#!/api/Ext.tree.Panel\" rel=\"Ext.tree.Panel\" class=\"docClass\">Tree Panel</a> Component is one of the most versatile Components in Ext JS and is an excellent tool for displaying heirarchical data in an application.  Tree Panel extends from the same class as <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid Panel</a>, so all of the benefits of Grid Panels - features, extensions, and plugins can also be used on Tree Panels. Things like columns, column resizing, dragging and dropping, renderers, sorting and filtering can be expected to work similarly for both components.</p>\n\n<p>Let's start by creating a very simple Tree.</p>\n\n<pre class='inline-example '><code>Ext.create('Ext.tree.Panel', {\n    renderTo: Ext.getBody(),\n    title: 'Simple Tree',\n    width: 150,\n    height: 150,\n    root: {\n        text: 'Root',\n        expanded: true,\n        children: [\n            {\n                text: 'Child 1',\n                leaf: true\n            },\n            {\n                text: 'Child 2',\n                leaf: true\n            },\n            {\n                text: 'Child 3',\n                expanded: true,\n                children: [\n                    {\n                        text: 'Grandchild',\n                        leaf: true\n                    }\n                ]\n            }\n        ]\n    }\n});\n</code></pre>\n\n<p>This Tree Panel renders itself to the document body.  We defined a root node that is expanded by default. The root node has three children, the first two of which are leaf nodes which means they cannot have any children.  The third node is not a leaf node and has has one child leaf node.  The <code>text</code> property is used as the node's text label. See <a href=\"guides/tree/examples/simple_tree/index.html\">Simple Tree</a> for a live demo.</p>\n\n<p>Internally a Tree Panel stores its data in a <a href=\"#!/api/Ext.data.TreeStore\" rel=\"Ext.data.TreeStore\" class=\"docClass\">TreeStore</a>. The above example uses the <a href=\"#!/api/Ext.tree.Panel-cfg-root\" rel=\"Ext.tree.Panel-cfg-root\" class=\"docClass\">root</a> config as a shortcut for configuring a store.  If we were to configure the store separately, the code would look something like this:</p>\n\n<pre><code>var store = Ext.create('Ext.data.TreeStore', {\n    root: {\n        text: 'Root',\n        expanded: true,\n        children: [\n            {\n                text: 'Child 1',\n                leaf: true\n            },\n            {\n                text: 'Child 2',\n                leaf: true\n            },\n            ...\n        ]\n    }\n});\n\nExt.create('Ext.tree.Panel', {\n    title: 'Simple Tree',\n    store: store,\n    ...\n});\n</code></pre>\n\n<p>For more on <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s see the <a href=\"#/guide/data\">Data Guide</a>.</p>\n\n<h2>The Node Interface</h2>\n\n<p>In the above examples we set a couple of different properties on tree nodes. But what are nodes exactly? As mentioned before, the Tree Panel is bound to a <a href=\"#!/api/Ext.data.TreeStore\" rel=\"Ext.data.TreeStore\" class=\"docClass\">TreeStore</a>. A Store in Ext JS manages a collection of <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances. Tree nodes are simply Model instances that are decorated with a <a href=\"#!/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">NodeInterface</a>.  Decorating a Model with a NodeInterface gives the Model the fields, methods and properties that are required for it to be used in a tree.  The following is a screenshot that shows the structure of a node in the developer tools.</p>\n\n<p><p><img src=\"guides/tree/nodeinterface.png\" alt=\"A model instance decorated with the NodeInterface\"></p></p>\n\n<p>In order to see the full set of fields, methods and properties available on nodes, see the API documentation for the <a href=\"#!/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">NodeInterface</a> class.</p>\n\n<h2>Visually changing your tree</h2>\n\n<p>Let's try something simple. When you set the <a href=\"#!/api/Ext.tree.Panel-cfg-useArrows\" rel=\"Ext.tree.Panel-cfg-useArrows\" class=\"docClass\">useArrows</a> configuration to true, the Tree Panel hides the lines and uses arrows as expand and collapse icons.</p>\n\n<p><p><img src=\"guides/tree/arrows.png\" alt=\"Arrows\"></p></p>\n\n<p>Setting the <a href=\"#!/api/Ext.tree.Panel-cfg-rootVisible\" rel=\"Ext.tree.Panel-cfg-rootVisible\" class=\"docClass\">rootVisible</a> property to false visually removes the root node. By doing this, the root node will automatically be expanded. The following image shows the same tree with <code>rootVisible</code> set to false and <a href=\"#!/api/Ext.tree.Panel-cfg-lines\" rel=\"Ext.tree.Panel-cfg-lines\" class=\"docClass\">lines</a> set to false.</p>\n\n<p><p><img src=\"guides/tree/root-lines.png\" alt=\"Root not visible and no lines\"></p></p>\n\n<h2>Multiple columns</h2>\n\n<p>Since <a href=\"#!/api/Ext.tree.Panel\" rel=\"Ext.tree.Panel\" class=\"docClass\">Tree Panel</a> extends from the same base class as <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid Panel</a> adding more columns is very easy to do.</p>\n\n<pre class='inline-example '><code>var tree = Ext.create('Ext.tree.Panel', {\n    renderTo: Ext.getBody(),\n    title: 'TreeGrid',\n    width: 300,\n    height: 150,\n    fields: ['name', 'description'],\n    columns: [{\n        xtype: 'treecolumn',\n        text: 'Name',\n        dataIndex: 'name',\n        width: 150,\n        sortable: true\n    }, {\n        text: 'Description',\n        dataIndex: 'description',\n        flex: 1,\n        sortable: true\n    }],\n    root: {\n        name: 'Root',\n        description: 'Root description',\n        expanded: true,\n        children: [{\n            name: 'Child 1',\n            description: 'Description 1',\n            leaf: true\n        }, {\n            name: 'Child 2',\n            description: 'Description 2',\n            leaf: true\n        }]\n    }\n});\n</code></pre>\n\n<p>The <a href=\"#!/api/Ext.tree.Panel-cfg-columns\" rel=\"Ext.tree.Panel-cfg-columns\" class=\"docClass\">columns</a> configuration expects an array of <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a> configurations just like a <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid Panel</a> would have.  The only difference is that a Tree Panel requires at least one column with an xtype of 'treecolumn'.  This type of column has tree-specific visual effects like depth, lines and expand and collapse icons. A typical Tree Panel would have only one 'treecolumn'.</p>\n\n<p>The <code>fields</code> configuration is passed on to the Model that the internally created Store uses (See the <a href=\"#/guide/data\">Data Guide</a> for more information on <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s). Notice how the <a href=\"#!/api/Ext.grid.column.Column-cfg-dataIndex\" rel=\"Ext.grid.column.Column-cfg-dataIndex\" class=\"docClass\">dataIndex</a> configurations on the columns map to the fields we specified - name and description.</p>\n\n<p>It is also worth noting that when columns are not defined, the tree will automatically create one single <code>treecolumn</code> with a <code>dataIndex</code> set to 'text'. It also hides the headers on the tree. To show this header when using only a single column set the <code>hideHeaders</code> configuration to 'false'.</p>\n\n<h2>Adding nodes to the tree</h2>\n\n<p>The root node for the Tree Panel does not have to be specified in the initial configuration.  We can always add it later:</p>\n\n<pre><code>var tree = Ext.create('Ext.tree.Panel');\ntree.setRootNode({\n    text: 'Root',\n    expanded: true,\n    children: [{\n        text: 'Child 1',\n        leaf: true\n    }, {\n        text: 'Child 2',\n        leaf: true\n    }]\n});\n</code></pre>\n\n<p>Although this is useful for very small trees with only a few static nodes, most Tree Panels will contain many more nodes. So let's take a look at how we can programmatically add new nodes to the tree.</p>\n\n<pre><code>var root = tree.getRootNode();\n\nvar parent = root.appendChild({\n    text: 'Parent 1'\n});\n\nparent.appendChild({\n    text: 'Child 3',\n    leaf: true\n});\n\nparent.expand();\n</code></pre>\n\n<p>Every node that is not a leaf node has an <a href=\"#!/api/Ext.data.NodeInterface-method-appendChild\" rel=\"Ext.data.NodeInterface-method-appendChild\" class=\"docClass\">appendChild</a> method which accepts a Node, or a config object for a Node as its first parameter, and returns the Node that was appended. The above example also calls the <a href=\"#!/api/Ext.data.NodeInterface-event-expand\" rel=\"Ext.data.NodeInterface-event-expand\" class=\"docClass\">expand</a> method to expand the newly created parent.</p>\n\n<p><p><img src=\"guides/tree/append-children.png\" alt=\"Appending to the tree\"></p></p>\n\n<p>Also useful is the ability to define children inline when creating the new parent nodes. The following code gives us the same result.</p>\n\n<pre><code>var parent = root.appendChild({\n    text: 'Parent 1',\n    expanded: true,\n    children: [{\n        text: 'Child 3',\n        leaf: true\n    }]\n});\n</code></pre>\n\n<p>Sometimes we want to insert a node into a specific location in the tree instead of appending it. Besides the <code>appendChild</code> method, <a href=\"#!/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">Ext.data.NodeInterface</a> also provides <a href=\"#!/api/Ext.data.NodeInterface-method-insertBefore\" rel=\"Ext.data.NodeInterface-method-insertBefore\" class=\"docClass\">insertBefore</a> and <a href=\"#!/api/Ext.data.NodeInterface-method-insertChild\" rel=\"Ext.data.NodeInterface-method-insertChild\" class=\"docClass\">insertChild</a> methods.</p>\n\n<pre><code>var child = parent.insertChild(0, {\n    text: 'Child 2.5',\n    leaf: true\n});\n\nparent.insertBefore({\n    text: 'Child 2.75',\n    leaf: true\n}, child.nextSibling);\n</code></pre>\n\n<p>The <code>insertChild</code> method expects an index at which the child will be inserted. The <code>insertBefore</code> method expects a reference node. The new node will be inserted before the reference node.</p>\n\n<p><p><img src=\"guides/tree/insert-children.png\" alt=\"Inserting children into the tree\"></p></p>\n\n<p>NodeInterface also provides several more properties on nodes that can be used to reference other nodes.</p>\n\n<ul>\n<li><a href=\"#!/api/Ext.data.NodeInterface-property-nextSibling\" rel=\"Ext.data.NodeInterface-property-nextSibling\" class=\"docClass\">nextSibling</a></li>\n<li><a href=\"#!/api/Ext.data.NodeInterface-property-previousSibling\" rel=\"Ext.data.NodeInterface-property-previousSibling\" class=\"docClass\">previousSibling</a></li>\n<li><a href=\"#!/api/Ext.data.NodeInterface-property-parentNode\" rel=\"Ext.data.NodeInterface-property-parentNode\" class=\"docClass\">parentNode</a></li>\n<li><a href=\"#!/api/Ext.data.NodeInterface-property-lastChild\" rel=\"Ext.data.NodeInterface-property-lastChild\" class=\"docClass\">lastChild</a></li>\n<li><a href=\"#!/api/Ext.data.NodeInterface-property-firstChild\" rel=\"Ext.data.NodeInterface-property-firstChild\" class=\"docClass\">firstChild</a></li>\n<li><a href=\"#!/api/Ext.data.NodeInterface-property-childNodes\" rel=\"Ext.data.NodeInterface-property-childNodes\" class=\"docClass\">childNodes</a></li>\n</ul>\n\n","title":"Trees"});