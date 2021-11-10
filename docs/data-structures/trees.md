# Trees

Trees are a relation-based data structure, which specialise in representing hierarchical structures. Like a linked list, nodes contain both elements of data and pointer marking its relation to immediate nodes. Each tree has a "root" node, off of which all other nodes branch. The root contains references to all elements directly below it, which are known as its "child nodes". This continues, with each child node, branching off into more child nodes.

Nodes with linked child nodes are called internal nodes while those without child nodes are external nodes. A common type of tree is the "binary search tree" which is used to easily search stored data.

These search operations are highly efficient, as its search duration is dependent not on the number of nodes but on the number of levels down the tree.

Regular trees are great for storing hierarchical data, but their power can really be heightened when you start messing around with how the data is actually stored within them.

## Terminology <!-- {docsify-ignore} -->

| Term          | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| Vertice       | A certain node in a tree                                                              |
| Edge          | A connection between nodes                                                            |
| Root node     | Topmost node of a tree                                                                |
| Child Node    | A certain node which has an edge connecting it to another node one level above itself |
| Parent Node   | Any node which has one or more child nodes                                            |
| External Node | A node in a tree which does not have any child nodes                                  |
| Height        | Number of edges on the longest possible path down towards an external node            |
| Depth         | Number of edges required to get from a particular node ot the root node               |
