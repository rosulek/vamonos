(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Vamonos = {
    handleArguments: function(_arg) {
      var arg, argName, defaultValue, description, givenArgs, ignoreExtraArgs, specs, type, widgetName, widgetObject, _ref, _ref1, _results;
      widgetObject = _arg.widgetObject, givenArgs = _arg.givenArgs, ignoreExtraArgs = _arg.ignoreExtraArgs;
      if (ignoreExtraArgs == null) {
        ignoreExtraArgs = false;
      }
      widgetName = widgetObject.constructor.name;
      if (widgetName == null) {
        throw Error("handleArguments: widgetName required");
      }
      if (widgetObject == null) {
        throw Error("handleArguments: widgetObject required for " + widgetName + " widget");
      }
      if (givenArgs == null) {
        throw Error("handleArguments: givenArgs required for " + widgetName + " widget");
      }
      if (widgetObject.constructor.spec == null) {
        throw Error("handleArguments: no spec for " + widgetName + " widget");
      }
      _ref = widgetObject.constructor.spec;
      for (argName in _ref) {
        specs = _ref[argName];
        type = specs.type, description = specs.description, defaultValue = specs.defaultValue;
        if (type == null) {
          throw Error("handleArguments: no type provided for " + widgetName + "." + argName);
        }
        if (type === "jQuery Selector") {
          type = "";
        }
        type = this.arrayify(type);
        if (givenArgs[argName] != null) {
          if (_ref1 = givenArgs[argName].constructor.name, __indexOf.call(type, _ref1) < 0) {
            throw TypeError(("WIDGET " + widgetName + ": constructor argument ") + ("'" + argName + "' expects type '" + type + "' but got ") + ("type '" + givenArgs[argName].constructor.name + "'"));
          }
          widgetObject[argName] = givenArgs[argName];
          if (!ignoreExtraArgs) {
            delete givenArgs[argName];
          }
        } else {
          if (specs.hasOwnProperty("defaultValue")) {
            widgetObject[argName] = defaultValue;
          } else {
            throw Error("" + widgetName + ": required argument '" + argName + "' missing.");
          }
        }
      }
      if (!ignoreExtraArgs) {
        _results = [];
        for (arg in givenArgs) {
          _results.push(this.warn(widgetName, "unused argument \"" + arg + "\""));
        }
        return _results;
      }
    },
    warn: function(objName, str) {
      return console.log("### WARNING ### " + objName + ": " + str);
    },
    formatObject: function(object, attributes, prevObj) {
      var addClass, attribute, rows, str, tbl;
      if (attributes == null) {
        attributes = [];
      }
      if ((prevObj != null) && (object.name != null) && object.name !== prevObj.name) {
        addClass = "class='changed'";
      } else {
        addClass = "";
      }
      tbl = "<table " + addClass + " >";
      rows = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = attributes.length; _i < _len; _i++) {
          attribute = attributes[_i];
          str = Vamonos.rawToTxt(object[attribute]);
          if ((prevObj != null) && str !== Vamonos.rawToTxt(prevObj[attribute])) {
            addClass = "class='changed'";
          } else {
            addClass = "";
          }
          _results.push(("<tr " + addClass + " ><td>" + attribute + "</td><td>&nbsp=&nbsp") + str + "</td></tr>");
        }
        return _results;
      })();
      tbl += rows.join("") + "</table>";
      return tbl;
    },
    editableValue: function($elem, valFunc, returnFunc) {
      var $editor, doneEditing, oldVal,
        _this = this;
      doneEditing = function() {
        var newVal;
        newVal = returnFunc($editor.val());
        return $elem.html(newVal.length ? newVal : oldVal);
      };
      oldVal = valFunc($elem);
      $editor = $("<input class='inline-input'>").hide().width($elem.width()).val(oldVal).on("keydown.vamonos-graph", function(event) {
        var _ref;
        if ((_ref = event.keyCode) !== 13 && _ref !== 32 && _ref !== 9 && _ref !== 27) {
          return;
        }
        doneEditing();
        return false;
      }).on("blur.vamonos-graph something-was-selected", function(event) {
        doneEditing();
        return true;
      });
      $elem.html($editor);
      return $editor.fadeIn("fast").focus().select();
    },
    moveToTop: function($elem, $container) {
      if ($container == null) {
        $container = $("*");
      }
      return $elem.css("z-index", this.highestZIndex($container) + 1);
    },
    highestZIndex: function($sel) {
      var index_highest;
      index_highest = 0;
      $sel.each(function() {
        var index_current;
        index_current = parseInt($(this).css("zIndex"), 10);
        if (index_current > index_highest) {
          return index_highest = index_current;
        }
      });
      return index_highest;
    },
    insertSet: function(item, arraySet) {
      if (__indexOf.call(arraySet, item) < 0) {
        return arraySet.push(item);
      }
    },
    txtToRaw: function(txt) {
      if (txt.match(/^\+?(inf(inity)?|\u221E)$/i)) {
        return Infinity;
      }
      if (txt.match(/^-(inf(inity)?|\u221E)$/i)) {
        return -Infinity;
      }
      if (isNaN(parseInt(txt))) {
        return null;
      } else {
        return parseInt(txt);
      }
    },
    rawToTxt: function(raw) {
      if (raw == null) {
        return "";
      }
      if (raw === Infinity) {
        return "\u221E";
      }
      if (raw === -Infinity) {
        return "-\u221E";
      }
      if (typeof raw === 'object' && raw.type === 'Vertex') {
        return raw.name;
      }
      if (typeof raw === 'object' && raw.type === 'Edge') {
        return raw.id;
      }
      if (typeof raw === 'object' && raw.type === 'Graph') {
        return "graph";
      }
      if (typeof raw === 'object' && raw.type === 'BinaryTree') {
        return "tree";
      }
      if (typeof raw === 'object' && raw.type === 'Queue') {
        return raw.toString();
      }
      return "" + raw;
    },
    txtValid: function(txt) {
      return this.txtToRaw(txt) != null;
    },
    isNumber: function(val) {
      return !isNaN(parseInt(val));
    },
    removeNamespace: function(varName) {
      var r;
      r = varName.split(/::/);
      if (r.length === 2) {
        return r[1];
      } else {
        return r[r.length - 1];
      }
    },
    funcify: function(arg) {
      if (typeof arg === "function") {
        return arg;
      }
      return function() {
        return arg;
      };
    },
    arrayify: function(obj) {
      if (obj instanceof Array) {
        return obj;
      } else {
        return [obj];
      }
    },
    jqueryify: function(obj) {
      if (typeof obj === 'string') {
        return $("#" + obj);
      } else {
        return obj;
      }
    },
    "export": function(obj) {
      var root, _ref;
      root = (_ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? _ref : window;
      root.Vamonos || (root.Vamonos = {});
      return this.mixin(root.Vamonos, obj);
    },
    mixin: function(dest, src, f) {
      var name, val;
      for (name in src) {
        val = src[name];
        if ((typeof dest[name] === 'object') && (typeof src[name] === 'object')) {
          this.mixin(dest[name], val);
        } else {
          dest[name] = f != null ? f(val) : val;
        }
      }
      return dest;
    },
    clone: function(obj) {
      var k, r, v;
      if (obj == null) {
        return;
      }
      if ((typeof obj).match(/number|string|boolean/)) {
        return obj;
      }
      if (obj.type === 'queue') {
        return obj.clone();
      }
      if (obj.type === 'stash') {
        r = {};
        for (k in obj) {
          v = obj[k];
          r[k] = Vamonos.clone(v);
        }
        return r;
      }
      if (obj instanceof Array) {
        return $.extend(true, [], obj);
      }
      return $.extend(true, {}, obj);
    }
  };

}).call(this);

(function() {
  var BinaryTree;

  BinaryTree = (function() {

    BinaryTree["interface"] = {};

    BinaryTree.description = "*Experimental*. BinaryTree takes a tree encoded as nested objects of\nthe form `{ val, id, left, right }` where left and right are optional\nobjects of the same form.";

    function BinaryTree(guts) {
      this.guts = guts;
      this._refresh();
      this.type = "BinaryTree";
    }

    BinaryTree["interface"].eachNodeInOrder = {
      args: [["f", "a function that takes a node"]],
      description: "applies `f` to each node using an in-order traversal"
    };

    BinaryTree.prototype.eachNodeInOrder = function(f) {
      var helper;
      return (helper = function(node) {
        if (node == null) {
          return;
        }
        helper(node.left);
        f(node);
        return helper(node.right);
      })(this.guts);
    };

    BinaryTree["interface"].eachNodePreOrder = {
      args: [["f", "a function that takes a node"]],
      description: "applies `f` to each node using a pre-order traversal"
    };

    BinaryTree.prototype.eachNodePreOrder = function(f) {
      var helper;
      return (helper = function(node) {
        if (node == null) {
          return;
        }
        f(node);
        helper(node.left);
        return helper(node.right);
      })(this.guts);
    };

    BinaryTree["interface"].eachNodePostOrder = {
      args: [["f", "a function that takes a node"]],
      description: "applies `f` to each node using a post-order traversal"
    };

    BinaryTree.prototype.eachNodePostOrder = function(f) {
      var helper;
      return (helper = function(node) {
        if (node == null) {
          return;
        }
        helper(node.left);
        helper(node.right);
        return f(node);
      })(this.guts);
    };

    BinaryTree["interface"].asGraph = {
      description: "returns an equivalent `Vamonos.DataStructure.Graph`"
    };

    BinaryTree.prototype.asGraph = function() {
      var g,
        _this = this;
      g = new Vamonos.DataStructure.Graph();
      this.eachNodePreOrder(function(n) {
        var left, right, thisOne;
        thisOne = g.addVertex(n);
        if (n.left != null) {
          left = g.addVertex(n.left);
          g.addEdge(n.id, left.id);
        }
        if (n.right != null) {
          right = g.addVertex(n.right);
          return g.addEdge(n.id, right.id);
        }
      });
      return g;
    };

    BinaryTree["interface"].rotateRight = {
      args: [["id", "a node id"]],
      description: "rotates the tree right at the node matching id"
    };

    BinaryTree.prototype.rotateRight = function(id) {
      var rotateRightHelper;
      rotateRightHelper = function(node) {
        var left, temp, x;
        if (node == null) {
          return;
        }
        if ((node != null ? node.id : void 0) === id) {
          if (node.left == null) {
            return node;
          }
          temp = node;
          left = node.left;
          x = left.right;
          left.right = node;
          node.left = x;
          return left;
        } else {
          node.left = rotateRightHelper(node.left, id);
          node.right = rotateRightHelper(node.right, id);
          return node;
        }
      };
      this.guts = rotateRightHelper(this.guts, id);
      this._refresh();
      return "ok";
    };

    BinaryTree["interface"].rotateLeft = {
      args: [["id", "a node id"]],
      description: "rotates the tree left at the node matching id"
    };

    BinaryTree.prototype.rotateLeft = function(id) {
      var rotateLeftHelper;
      rotateLeftHelper = function(node) {
        var right, temp, x;
        if (node == null) {
          return;
        }
        if ((node != null ? node.id : void 0) === id) {
          if (node.right == null) {
            return node;
          }
          temp = node;
          right = node.right;
          x = right.left;
          right.left = node;
          node.right = x;
          return right;
        } else {
          node.left = rotateLeftHelper(node.left, id);
          node.right = rotateLeftHelper(node.right, id);
          return node;
        }
      };
      this.guts = rotateLeftHelper(this.guts, id);
      this._refresh();
      return "ok";
    };

    BinaryTree["interface"].addNode = {
      args: [["targetId", "a node id"], ["direction", "`\"left\"` or `\"right\"`"], ["newNode", "optional: a node object"]],
      description: "adds `newNode` as the `direction` child of the node matching `targetId`"
    };

    BinaryTree.prototype.addNode = function(targetId, direction, newNode) {
      var addNodeHelper, _ref, _ref1;
      if (newNode == null) {
        newNode = {};
      }
      if ((_ref = this.nextId) == null) {
        this.nextId = 0;
      }
      if ((_ref1 = newNode.id) == null) {
        newNode.id = "tree-node-" + this.nextId++;
      }
      addNodeHelper = function(node) {
        if (node == null) {
          return;
        }
        if ((node != null ? node.id : void 0) === targetId) {
          return node[direction] = newNode;
        } else {
          addNodeHelper(node.left);
          return addNodeHelper(node.right);
        }
      };
      addNodeHelper(this.guts);
      this._refresh();
      return newNode.id;
    };

    BinaryTree["interface"].deleteNode = {
      args: [["targetId", "a node id"]],
      description: "deletes the node matching `targetId`, preforming rotations as necessary"
    };

    BinaryTree.prototype.deleteNode = function(targetId) {
      var deleteNodeHelper;
      deleteNodeHelper = function(node) {
        var _ref, _ref1;
        if (node == null) {
          return;
        }
        if (((_ref = node.right) != null ? _ref.id : void 0) === targetId) {
          node.right = void 0;
          return true;
        } else if (((_ref1 = node.left) != null ? _ref1.id : void 0) === targetId) {
          node.left = void 0;
          return true;
        } else {
          return deleteNodeHelper(node.left) || deleteNodeHelper(node.right);
        }
      };
      if (this.guts.id === targetId) {
        this.guts = void 0;
      } else {
        deleteNodeHelper(this.guts);
      }
      return this._refresh();
    };

    BinaryTree["interface"].changeVal = {
      args: [["targetId", "a node id"], ["newVal", "an arbitrary value"]],
      description: "changes the val field of the node matching `targetId` to `newVal`"
    };

    BinaryTree.prototype.changeVal = function(targetId, newVal) {
      var changeValHelper;
      changeValHelper = function(node) {
        if (node == null) {
          return;
        }
        if (node.id === targetId) {
          node.val = newVal;
          return true;
        } else {
          return changeValHelper(node.left) || changeValHelper(node.right);
        }
      };
      changeValHelper(this.guts);
      return this._refresh();
    };

    BinaryTree.prototype._refresh = function() {
      this._assignOrder();
      return this._assignDepth();
    };

    BinaryTree.prototype._assignOrder = function() {
      var _this = this;
      this.count = 0;
      return this.eachNodeInOrder(function(n) {
        return n.order = _this.count++;
      });
    };

    BinaryTree.prototype._assignDepth = function() {
      var helper,
        _this = this;
      this.maxDepth = 0;
      return (helper = function(node, depth) {
        if (node == null) {
          return;
        }
        node.depth = depth;
        if (depth > _this.maxDepth) {
          _this.maxDepth = depth;
        }
        helper(node.left, depth + 1);
        return helper(node.right, depth + 1);
      })(this.guts, 0);
    };

    return BinaryTree;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      BinaryTree: BinaryTree
    }
  });

}).call(this);

(function() {
  var Graph;

  Graph = (function() {

    Graph.description = "The Graph data structure provides standard graph functionality\nto Vamonos.";

    Graph.spec = {
      directed: {
        type: "Boolean",
        description: "Whether the graph is directed.",
        defaultValue: false
      },
      prefix: {
        type: "String",
        description: "A string prepended to each new vertex id.",
        defaultValue: ""
      },
      vertices: {
        type: ["Object", "Array"],
        description: "A single vertex or an array of vertices to create the graph with.",
        defaultValue: void 0,
        example: "vertices: [ \n    {id: \"v0\", x: 17,  y: 10},\n    {id: \"v1\", x: 98,  y: 10},\n    {id: \"v3\", x: 15,  y: 78},\n]"
      },
      edges: {
        type: ["Object", "Array"],
        description: "A single edge or an array of edges to create the graph with.",
        defaultValue: void 0,
        example: "edges: [\n    {source: 'v0',target: 'v4'},\n    {source: 'v1',target: 'v2'},\n]"
      }
    };

    Graph["interface"] = {};

    function Graph(args) {
      var e, v, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
      if (args == null) {
        args = {};
      }
      this.directed = (_ref = args.directed) != null ? _ref : false;
      this.idPrefix = (_ref1 = args.prefix) != null ? _ref1 : "";
      this.type = 'Graph';
      this.edges = {};
      this.vertices = {};
      _ref2 = Vamonos.arrayify(args.vertices);
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        v = _ref2[_i];
        if (v != null) {
          this.addVertex(v);
        }
      }
      _ref3 = Vamonos.arrayify(args.edges);
      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
        e = _ref3[_j];
        if (e != null) {
          this.addEdge(e.source, e.target, e);
        }
      }
    }

    Graph["interface"].vertex = {
      args: [["vid", "a vertex object containing an id field, or an id"]],
      description: "returns the vertex object matching `vid`"
    };

    Graph.prototype.vertex = function(vid) {
      return this.vertices[this.idify(vid)];
    };

    Graph["interface"].addVertex = {
      args: [["vtx", "a vertex object"]],
      description: "adds `vtx` to the graph"
    };

    Graph.prototype.addVertex = function(vtx) {
      var _ref, _ref1;
      if (this.vertices[vtx.id] != null) {
        return vtx.id;
      }
      vtx.type = 'Vertex';
      if ((_ref = vtx.name) == null) {
        vtx.name = this.nextVertexName();
      }
      if ((_ref1 = vtx.id) == null) {
        vtx.id = this.nextVertexId();
      }
      this.vertices[vtx.id] = vtx;
      return vtx;
    };

    Graph["interface"].removeVertex = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "removes the vertex matching `v` and all related edges from the " + "graph"
    };

    Graph.prototype.removeVertex = function(v) {
      var affectedEdges, e, vtx, _i, _len;
      vtx = this.vertex(v);
      if (vtx == null) {
        return;
      }
      this.returnVertexName(vtx.name);
      affectedEdges = this.incomingEdges(vtx.id).concat(this.outgoingEdges(vtx.id));
      for (_i = 0, _len = affectedEdges.length; _i < _len; _i++) {
        e = affectedEdges[_i];
        this.removeEdge(e.source.id, e.target.id);
      }
      return delete this.vertices[vtx.id];
    };

    Graph["interface"].getVertices = {
      description: "returns an array of all vertices"
    };

    Graph.prototype.getVertices = function() {
      var vid, vtx, _ref, _results;
      _ref = this.vertices;
      _results = [];
      for (vid in _ref) {
        vtx = _ref[vid];
        _results.push(vtx);
      }
      return _results;
    };

    Graph["interface"].eachVertex = {
      args: [["f", "a function taking a vertex as an argument"]],
      description: "applies `f` to each vertex in the graph"
    };

    Graph.prototype.eachVertex = function(f) {
      var id, v, vs, _i, _len, _results;
      vs = ((function() {
        var _ref, _results;
        _ref = this.vertices;
        _results = [];
        for (id in _ref) {
          v = _ref[id];
          _results.push(v);
        }
        return _results;
      }).call(this)).sort(function(a, b) {
        return a.name - b.name;
      });
      _results = [];
      for (_i = 0, _len = vs.length; _i < _len; _i++) {
        v = vs[_i];
        if (v != null) {
          _results.push(f(v));
        }
      }
      return _results;
    };

    Graph["interface"].nextVertexId = {
      description: "returns an unused vertex id"
    };

    Graph.prototype.nextVertexId = function() {
      var _ref, _ref1;
      if ((_ref = this._customVertexNum) == null) {
        this._customVertexNum = 0;
      }
      return "" + ((_ref1 = this.idPrefix) != null ? _ref1 : "custom") + "-vertex-" + (this._customVertexNum++);
    };

    Graph["interface"].returnVertexName = {
      args: [["n", "string"]],
      description: "adds `n` to the list of available vertex names"
    };

    Graph.prototype.returnVertexName = function(n) {
      this.availableNames.unshift(n);
      return this.availableNames.sort();
    };

    Graph["interface"].nextVertexName = {
      description: "returns the next available vertex name"
    };

    Graph.prototype.nextVertexName = function() {
      var _ref;
      if ((_ref = this.availableNames) == null) {
        this.availableNames = "abcdefghijklmnopqrstuvwxyz".split("");
      }
      return this.availableNames.shift();
    };

    Graph["interface"].edge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"]],
      description: "if there is an edge from `source` to `target`, returns it. " + "understands undirected graphs."
    };

    Graph.prototype.edge = function(source, target) {
      var sourceId, targetId, _ref, _ref1;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      return ((_ref = this.edges[sourceId]) != null ? _ref[targetId] : void 0) || !this.directed && ((_ref1 = this.edges[targetId]) != null ? _ref1[sourceId] : void 0);
    };

    Graph["interface"].addEdge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"], ["attrs", "an object containing edge attributes"]],
      description: "adds an edge from `source` to `target` with attributes copied from `attrs`"
    };

    Graph.prototype.addEdge = function(source, target, attrs) {
      var edge, k, s, sourceId, t, targetId, v, _base, _base1, _ref, _ref1;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      if (this.edge(sourceId, targetId)) {
        return;
      }
      s = this.vertex(sourceId);
      t = this.vertex(targetId);
      if (!((s != null) && (t != null))) {
        return;
      }
      edge = {
        source: s,
        target: t,
        type: 'Edge'
      };
      if (attrs != null) {
        for (k in attrs) {
          v = attrs[k];
          if (k !== 'source' && k !== 'target') {
            edge[k] = v;
          }
        }
      }
      ((_ref = (_base = this.edges)[sourceId]) != null ? _ref : _base[sourceId] = {})[targetId] = edge;
      if (!this.directed) {
        ((_ref1 = (_base1 = this.edges)[targetId]) != null ? _ref1 : _base1[targetId] = {})[sourceId] = edge;
      }
      return edge;
    };

    Graph["interface"].removeEdge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"]],
      description: "removes the edge from `source` to `target`. understands directedness."
    };

    Graph.prototype.removeEdge = function(source, target) {
      var edge, sourceId, targetId, _ref, _ref1, _ref2;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      edge = (_ref = this.edges[sourceId]) != null ? _ref[targetId] : void 0;
      if ((_ref1 = this.edges[sourceId]) != null) {
        delete _ref1[targetId];
      }
      if (!this.directed) {
        if ((_ref2 = this.edges[targetId]) != null) {
          delete _ref2[sourceId];
        }
      }
      return edge;
    };

    Graph["interface"].getEdges = {
      description: "returns an array of all edges in the graph"
    };

    Graph.prototype.getEdges = function() {
      var edge, outgoingEdges, source, target, uglyArray, _ref;
      uglyArray = (function() {
        var _ref, _results;
        _ref = this.edges;
        _results = [];
        for (source in _ref) {
          outgoingEdges = _ref[source];
          _results.push((function() {
            var _results1;
            _results1 = [];
            for (target in outgoingEdges) {
              edge = outgoingEdges[target];
              _results1.push(edge);
            }
            return _results1;
          })());
        }
        return _results;
      }).call(this);
      return (_ref = []).concat.apply(_ref, uglyArray);
    };

    Graph["interface"].eachEdge = {
      args: [["f", "a function taking an edge"]],
      description: "applies `f` to each edge"
    };

    Graph.prototype.eachEdge = function(f) {
      var e, _i, _len, _ref, _results;
      _ref = this.getEdges();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        if (e != null) {
          _results.push(f(e));
        }
      }
      return _results;
    };

    Graph["interface"].neighbors = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "returns all neighbors of `v`"
    };

    Graph.prototype.neighbors = function(v) {
      var edge, target;
      return ((function() {
        var _ref, _results;
        _ref = this.edges[this.idify(v)];
        _results = [];
        for (target in _ref) {
          edge = _ref[target];
          _results.push(this.vertex(target));
        }
        return _results;
      }).call(this)).sort(function(a, b) {
        return a.name - b.name;
      });
    };

    Graph["interface"].eachNeighbor = {
      args: [["v", "a vertex object containing an id field, or an id"], ["f", "a function that takes a vertex as input"]],
      description: "applies `f` to each neighbor of `v`"
    };

    Graph.prototype.eachNeighbor = function(v, f) {
      var neighbor, _i, _len, _ref, _results;
      _ref = this.neighbors(v);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        neighbor = _ref[_i];
        if (neighbor != null) {
          _results.push(f(neighbor));
        }
      }
      return _results;
    };

    Graph["interface"].outgoingEdges = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "returns all outgoing edges of `v`"
    };

    Graph.prototype.outgoingEdges = function(v) {
      var edge, target, vid;
      vid = this.idify(v);
      return ((function() {
        var _ref, _results;
        _ref = this.edges[vid];
        _results = [];
        for (target in _ref) {
          edge = _ref[target];
          _results.push(edge);
        }
        return _results;
      }).call(this)).concat(this.directed ? [] : this.incomingEdges(vid));
    };

    Graph["interface"].incomingEdges = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "returns all incoming edges of `v`"
    };

    Graph.prototype.incomingEdges = function(v) {
      var edge, outgoingEdges, result, source, target, vid, _ref, _ref1;
      vid = this.idify(v);
      result = [];
      _ref = this.edges;
      for (source in _ref) {
        outgoingEdges = _ref[source];
        for (target in outgoingEdges) {
          edge = outgoingEdges[target];
          if (target === vid) {
            result.push(edge);
          }
        }
      }
      return (_ref1 = []).concat.apply(_ref1, result);
    };

    Graph.prototype.idify = function(v) {
      if (typeof v === 'string' || !(v != null)) {
        return v;
      }
      return v.id;
    };

    Graph.prototype.clone = function() {
      var r;
      r = new Vamonos.DataStructure.Graph();
      return Vamonos.mixin(r, this, Vamonos.clone);
    };

    Graph["interface"].toString = {
      description: "returns a javascripty string you could use to initialize a graph with."
    };

    Graph.prototype.toString = function() {
      var attr, attrs, e, s, value, _i, _len, _ref;
      s = "defaultGraph: new Vamonos.DataStructure.Graph({\n    directed: " + this.directed + ",\n    prefix: \"" + this.idPrefix + "\",\n    vertices: [\n";
      this.eachVertex(function(vtx) {
        var attr, attrs, value;
        attrs = [];
        for (attr in vtx) {
          value = vtx[attr];
          if (attr === "type") {
            continue;
          }
          if (value.type === 'Vertex') {
            attrs.push("" + attr + ": '" + value.id + "'");
          } else if (value.constructor.name === 'String') {
            attrs.push("" + attr + ": '" + value + "'");
          } else {
            attrs.push("" + attr + ": " + value);
          }
        }
        return s += "\t\t{ " + (attrs.join(", ")) + " },\n";
      });
      s += "\t],\n\tedges: [\n";
      _ref = this.getEdges();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        attrs = [];
        for (attr in e) {
          value = e[attr];
          if (attr === "type") {
            continue;
          }
          if (value.type === 'Vertex') {
            attrs.push("" + attr + ": '" + value.id + "'");
          } else if (value.constructor.name === 'String') {
            attrs.push("" + attr + ": '" + value + "'");
          } else {
            attrs.push("" + attr + ": " + value);
          }
        }
        s += "\t\t{ " + (attrs.join(", ")) + " },\n";
      }
      s += "    ]\n}),";
      return s;
    };

    return Graph;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      Graph: Graph
    }
  });

}).call(this);

(function() {
  var Queue;

  Queue = (function() {

    Queue.description = "A queue data structure for use in algorithms and widgets.";

    Queue["interface"] = {};

    Queue.spec = {
      initialArray: {
        type: "Array",
        defaultValue: [],
        description: "The initial value of the queue."
      },
      comparator: {
        type: "Function",
        defaultValue: void 0,
        description: "A function taking two elements and returning `1`, " + "`0`, or `-1`. Used in the `sort` method."
      }
    };

    function Queue(arg) {
      var _ref;
      if (arg == null) {
        arg = {};
      }
      this.initialize((_ref = arg != null ? arg.initialArray : void 0) != null ? _ref : []);
      this.comparator = arg != null ? arg.comparator : void 0;
      this.type = 'Queue';
    }

    Queue["interface"].initialize = {
      args: [["elems", "an array of elements. DefaultValue: `[]`"]],
      description: "Sets `elems` to be the content of the queue."
    };

    Queue.prototype.initialize = function(elems) {
      if (elems == null) {
        elems = [];
      }
      this.guts = elems.slice(0);
      return this;
    };

    Queue["interface"].enqueue = {
      args: [["elem", "an element"]],
      description: "Pushes `elem` onto the queue."
    };

    Queue.prototype.enqueue = function(elem) {
      return this.guts.push(elem);
    };

    Queue["interface"].dequeue = {
      description: "Pops and element from the queue."
    };

    Queue.prototype.dequeue = function() {
      return this.guts.shift();
    };

    Queue["interface"].extractMin = {
      description: "Extracts the minimum element from the queue, according to " + "the comparator provided to the constructor, or JavaScript's " + "internal comparator."
    };

    Queue.prototype.extractMin = function() {
      this.sort();
      return this.dequeue();
    };

    Queue["interface"].isEmpty = {
      description: "Returns true if the queue is empty."
    };

    Queue.prototype.isEmpty = function() {
      return this.guts.length === 0;
    };

    Queue.prototype.clone = function() {
      return new Vamonos.DataStructure.Queue({
        initialArray: Vamonos.clone(this.guts),
        comparator: this.comparator
      });
    };

    Queue["interface"].sort = {
      description: "Sorts the queue in place according to the comparator " + "provided to the constructor, or JavaScript's internal " + "comparator."
    };

    Queue.prototype.sort = function() {
      return this.guts.sort(this.comparator);
    };

    Queue["interface"].toString = {
      description: "Returns a string version of the queue."
    };

    Queue.prototype.toString = function() {
      var elem;
      if (this.isEmpty()) {
        return "[ ]";
      } else {
        return "[" + (((function() {
          var _i, _len, _ref, _results;
          _ref = this.guts;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            elem = _ref[_i];
            _results.push(Vamonos.rawToTxt(elem));
          }
          return _results;
        }).call(this)).join(", ")) + "]";
      }
    };

    Queue["interface"].contains = {
      args: [["x", "an element"]],
      description: "Returns true if `x` is in the queue."
    };

    Queue.prototype.contains = function(x) {
      return this.guts.some(function(elem) {
        return elem === x;
      });
    };

    return Queue;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      Queue: Queue
    }
  });

}).call(this);

(function() {
  var Visualizer,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Visualizer = (function() {

    Visualizer.description = "The central object of the Vamonos system. The Visualizer controls\nthe flow of information to and from Widgets, keeps track of\nnamespaces and variables, and runs the simulation itself.";

    Visualizer.spec = {
      widgets: {
        type: "Array",
        description: "a list of widgets for use in the visualization",
        defaultValue: []
      },
      algorithm: {
        type: ["Function", "Object"],
        description: "as a function, the 'main' procedure. as an object, an " + "association of procedure names to functions.",
        defaultValue: (function() {})
      },
      maxFrames: {
        type: "Integer",
        defaultValue: 250,
        description: "the maximum number of snapshots"
      },
      autoStart: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to skip edit mode at load time"
      }
    };

    function Visualizer(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.breakpoints = {};
      this.watchVars = [];
      this.registeredVars = {};
      this.procedures = {};
      this.initializeStash();
      this.prepareAlgorithm(this.algorithm);
      this.tellWidgets("setup", this);
      this.tellWidgets("setupEnd");
      if (this.autoStart) {
        this.runAlgorithm();
      } else {
        this.editMode();
      }
    }

    Visualizer.prototype.trigger = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "runAlgorithm":
          return this.runAlgorithm();
        case "editMode":
          return this.editMode();
        case "nextFrame":
          return this.nextFrame();
        case "prevFrame":
          return this.prevFrame();
        case "jumpFrame":
          return this.jumpFrame.apply(this, options);
      }
    };

    Visualizer.prototype.registerVariable = function(name) {
      var ns, varName, _base, _ref, _ref1;
      _ref = this.parseVarName(name), ns = _ref[0], varName = _ref[1];
      return ((_ref1 = (_base = this.registeredVars)[ns]) != null ? _ref1 : _base[ns] = []).push(varName);
    };

    Visualizer.prototype.setVariable = function(name, value) {
      var ns, varName, _ref;
      _ref = this.parseVarName(name), ns = _ref[0], varName = _ref[1];
      this.stash.inputScope[name] = value;
      return value;
    };

    Visualizer.prototype.getVariable = function(name) {
      var ns, varName, _ref;
      _ref = this.parseVarName(name), ns = _ref[0], varName = _ref[1];
      return this.stash.inputScope[name];
    };

    Visualizer.prototype.setWatchVar = function(varName) {
      return Vamonos.insertSet(varName, this.watchVars);
    };

    Visualizer.prototype.isWatchVar = function(varName) {
      return __indexOf.call(this.watchVars, varName) >= 0;
    };

    Visualizer.prototype.removeWatchVar = function(varName) {
      if (__indexOf.call(this.watchVars, varName) < 0) {
        return;
      }
      return (function(w) {
        return w.splice(w.indexOf(varName), 1);
      })(this.watchVars);
    };

    Visualizer.prototype.getBreakpoints = function(proc) {
      var _base, _ref;
      return (_ref = (_base = this.breakpoints)[proc]) != null ? _ref : _base[proc] = [];
    };

    Visualizer.prototype.getCurrentBreakpoints = function() {
      return this.getBreakpoints(this.stash.currentScope._procName);
    };

    Visualizer.prototype.setBreakpoint = function(b, proc) {
      var _base, _ref;
      if ((_ref = (_base = this.breakpoints)[proc]) == null) {
        _base[proc] = [];
      }
      return Vamonos.insertSet(b, this.breakpoints[proc]);
    };

    Visualizer.prototype.removeBreakpoint = function(b, proc) {
      var _base, _ref;
      if ((_ref = (_base = this.breakpoints)[proc]) == null) {
        _base[proc] = [];
      }
      return (function(bps) {
        return bps.splice(bps.indexOf(b), 1);
      })(this.breakpoints[proc]);
    };

    Visualizer.prototype.parseVarName = function(varname, defaultScope) {
      if (defaultScope == null) {
        defaultScope = "main";
      }
      if (!varname.match(/::/)) {
        return [defaultScope, varname];
      }
      return varname.split(/::/);
    };

    Visualizer.prototype.initializeStash = function() {
      var _base, _ref, _ref1;
      if ((_ref = this.stash) == null) {
        this.stash = {};
      }
      if ((_ref1 = (_base = this.stash).inputScope) == null) {
        _base.inputScope = {
          _procName: "input"
        };
      }
      this.stash.callStack = [this.stash.inputScope];
      this.stash.globalScope = {};
      return this.stash.currentScope = this.stash.inputScope;
    };

    Visualizer.prototype.getFrame = function(num, shallow) {
      var bare, c, procName, procsAlreadySeen, r, scope, _i, _len, _ref;
      if (num == null) {
        num = 0;
      }
      if (shallow == null) {
        shallow = false;
      }
      r = {
        _callStack: (function() {
          var _i, _len, _ref, _results;
          _ref = this.stash.callStack;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            _results.push({
              procName: c._procName,
              args: c._args
            });
          }
          return _results;
        }).call(this),
        _frameNumber: num,
        _prevLine: this.stash.currentScope._prevLine,
        _nextLine: this.stash.currentScope._nextLine,
        _procName: this.stash.currentScope._procName
      };
      r._callStack[0].activeStackFrame = true;
      procsAlreadySeen = [];
      _ref = this.stash.callStack;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        scope = _ref[_i];
        procName = scope._procName;
        if (__indexOf.call(procsAlreadySeen, procName) >= 0) {
          continue;
        }
        bare = procName === this.stash.currentScope._procName;
        this.cloneScopeToObj(r, procName, scope, bare, shallow);
        procsAlreadySeen.push(procName);
      }
      this.cloneScopeToObj(r, "global", this.stash.globalScope, true, shallow);
      this.cloneScopeToObj(r, "input", this.stash.inputScope, true, shallow);
      return r;
    };

    Visualizer.prototype.cloneScopeToObj = function(obj, procName, scope, bare, shallow) {
      var cloned, k, v, _name, _ref, _ref1, _results;
      if (bare == null) {
        bare = false;
      }
      _results = [];
      for (k in scope) {
        v = scope[k];
        if (typeof v === 'function') {
          continue;
        }
        if (k === 'global') {
          continue;
        }
        if (/^_/.test(k)) {
          continue;
        }
        cloned = shallow ? v : Vamonos.clone(v);
        if ((_ref = obj[_name = "" + procName + "::" + k]) == null) {
          obj[_name] = cloned;
        }
        if (bare) {
          _results.push((_ref1 = obj[k]) != null ? _ref1 : obj[k] = cloned);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Visualizer.prototype.line = function(n, relevantScope) {
      var frame, reasons, _ref, _ref1;
      if (this.frameNumber >= this.maxFrames) {
        throw "too many frames";
      }
      if (++this.numCallsToLine > 10000) {
        throw "too many lines";
      }
      switch (n) {
        case "call":
          this.calledProc = relevantScope.procName;
          break;
        case "ret":
          if (!relevantScope.tailCall) {
            ((_ref = this.returnStack) != null ? _ref : this.returnStack = []).unshift(relevantScope);
          }
          this.returnedProc = relevantScope.procName;
      }
      if (typeof n === 'number') {
        this.stash.currentScope._nextLine = n;
      }
      reasons = this.takeSnapshotReasons(n);
      if (reasons) {
        frame = this.getFrame(++this.frameNumber);
        frame._snapshotReasons = reasons;
        if ((_ref1 = this.returnStack) != null ? _ref1.length : void 0) {
          frame._returnStack = this.returnStack.slice(0);
          this.returnStack.length = 0;
        }
        this.frames.push(frame);
        if (n === "call") {
          this.calledProc = null;
        } else {
          this.returnedProc = this.calledProc = void 0;
        }
      }
      if (typeof n === 'number') {
        this.stash.currentScope._prevLine = n;
      }
      if (n === "call") {
        return this.returnStack = [];
      }
    };

    Visualizer.prototype.takeSnapshotReasons = function(n) {
      var changes, reasons;
      reasons = null;
      if (__indexOf.call(this.getCurrentBreakpoints(), n) >= 0) {
        (reasons != null ? reasons : reasons = {}).breakpoint = n;
      }
      if (typeof n === 'number') {
        changes = this.watchVarsChanged();
        if (changes != null) {
          (reasons != null ? reasons : reasons = {}).watchVarsChanged = changes;
        }
        if (this.isWatchVar("_callstack") && this.calledProc) {
          (reasons != null ? reasons : reasons = {}).procCalled = this.calledProc;
        }
        if (this.isWatchVar("_callstack") && this.returnedProc) {
          (reasons != null ? reasons : reasons = {}).procReturned = this.returnedProc;
        }
      }
      if (n === 'call' && this.returnedProc && this.isWatchVar("_callstack")) {
        if (this.returnedProc) {
          (reasons != null ? reasons : reasons = {}).procReturned = this.returnedProc;
        }
      }
      if (n === "end") {
        (reasons != null ? reasons : reasons = {}).procReturned = "main";
      }
      return reasons;
    };

    Visualizer.prototype.watchVarsChanged = function() {
      var fakeFrame, left, ret, right, v;
      if (!this.watchVars.length) {
        return;
      }
      fakeFrame = this.getFrame(Infinity, true);
      ret = (function() {
        var _i, _len, _ref, _ref1, _results;
        _ref = this.watchVars;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          v = _ref[_i];
          left = (_ref1 = this.frames[this.frames.length - 1]) != null ? _ref1[v] : void 0;
          right = fakeFrame[v];
          if (JSON.stringify(left) === JSON.stringify(right)) {
            continue;
          }
          _results.push(v);
        }
        return _results;
      }).call(this);
      if (ret.length) {
        return ret;
      } else {
        return null;
      }
    };

    Visualizer.prototype.prepareAlgorithm = function(algorithm) {
      var procName, procedure, _results;
      if (typeof algorithm === 'function') {
        algorithm = {
          "main": algorithm
        };
      }
      _results = [];
      for (procName in algorithm) {
        procedure = algorithm[procName];
        _results.push(this.procedures[procName] = this.wrapProcedure(procName, procedure));
      }
      return _results;
    };

    Visualizer.prototype.wrapProcedure = function(procName, procedure) {
      var _this = this;
      return function(args) {
        var name, newScope, proc, ret, returnFrame, value, _i, _len, _ref, _ref1, _ref2, _ref3;
        if (args == null) {
          args = {};
        }
        newScope = {
          _procName: procName,
          _args: args
        };
        _ref = _this.procedures;
        for (name in _ref) {
          proc = _ref[name];
          newScope[name] = proc;
        }
        for (name in args) {
          value = args[name];
          newScope[name] = value;
        }
        _ref2 = (_ref1 = _this.registeredVars[procName]) != null ? _ref1 : [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          name = _ref2[_i];
          if ((_ref3 = newScope[name]) == null) {
            newScope[name] = void 0;
          }
        }
        newScope.global = _this.stash.globalScope;
        _this.stash.currentScope = newScope;
        _this.line("call", {
          procName: procName
        });
        if (args._tailCall) {
          _this.stash.callStack[0] = newScope;
        } else {
          _this.stash.callStack.unshift(newScope);
        }
        ret = procedure.call(newScope, function(n) {
          return _this.line(n);
        });
        returnFrame = {
          procName: _this.stash.currentScope._procName,
          args: _this.stash.currentScope._args,
          returnValue: ret,
          tailCall: args._tailCall
        };
        _this.line("ret", returnFrame);
        if (!args._tailCall) {
          _this.stash.callStack.shift();
          _this.stash.currentScope = _this.stash.callStack[0];
        }
        return ret;
      };
    };

    Visualizer.prototype.runAlgorithm = function() {
      var f, k, mainArgs, v, _i, _len, _ref, _ref1;
      if (this.mode === "display") {
        return;
      }
      this.frames = [];
      this.frameNumber = 0;
      this.numCallsToLine = 0;
      this.returnStack = [];
      this.initializeStash();
      if (this.mode === "edit") {
        this.tellWidgets("editStop");
      }
      this.mode = "running";
      if (this.checkErrors() !== "ok") {
        this.editMode();
        return;
      }
      mainArgs = {};
      _ref = this.stash.inputScope;
      for (k in _ref) {
        v = _ref[k];
        if (v == null) {
          continue;
        }
        if (/^_/.test(k)) {
          continue;
        }
        mainArgs[k] = v;
      }
      try {
        if (typeof this.procedures.main !== 'function') {
          throw "no main function";
        }
        $("body").addClass("processing");
        this.line("init");
        this.procedures.main(mainArgs);
        this.line("end");
        $("body").removeClass("processing");
      } catch (err) {
        $("body").removeClass("processing");
        switch (err) {
          case "too many frames":
            alert("Too many frames. You may have an infinite loop, or you may " + "want to consider setting fewer breakpoints. " + "Visualization has been truncated to the first " + ("" + this.maxFrames + " frames."));
            break;
          case "too many lines":
            alert("Your algorithm has executed for over 10000 instructions. " + "You may have an infinite loop. " + "Visualization has been truncated.");
            break;
          default:
            throw err;
        }
      }
      this.frameNumber = 0;
      _ref1 = this.frames;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        f = _ref1[_i];
        f._numFrames = this.frames.length;
      }
      this.mode = "display";
      this.tellWidgets("displayStart");
      return this.nextFrame();
    };

    Visualizer.prototype.tellWidgets = function() {
      var event, options, widget, _i, _len, _ref, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _ref = this.widgets;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        widget = _ref[_i];
        _results.push(widget.event.apply(widget, [event].concat(__slice.call(options))));
      }
      return _results;
    };

    Visualizer.prototype.editMode = function() {
      if (this.mode === "edit") {
        return;
      }
      if (this.mode === "display") {
        this.tellWidgets("displayStop");
      }
      this.mode = "edit";
      return this.tellWidgets("editStart");
    };

    Visualizer.prototype.checkErrors = function() {
      var errors;
      errors = this.tellWidgets("checkErrors", this).filter(function(x) {
        return x != null;
      });
      if (errors.length) {
        return alert(errors.join("\n"));
      } else {
        return "ok";
      }
    };

    Visualizer.prototype.nextFrame = function() {
      return this.goToFrame(this.frameNumber + 1, "next");
    };

    Visualizer.prototype.prevFrame = function() {
      return this.goToFrame(this.frameNumber - 1, "prev");
    };

    Visualizer.prototype.jumpFrame = function(n) {
      return this.goToFrame(n, "jump");
    };

    Visualizer.prototype.goToFrame = function(n, type) {
      if (!(this.mode === "display" && (1 <= n && n <= this.frames.length))) {
        return;
      }
      this.frameNumber = n;
      return this.tellWidgets("render", this.frames[this.frameNumber - 1], type);
    };

    return Visualizer;

  })();

  this.Vamonos["export"]({
    Visualizer: Visualizer
  });

}).call(this);

(function() {
  var Array,
    __slice = [].slice;

  Array = (function() {

    Array.description = "The Array widget displays an array. It is a minimal wrapper " + "around the ArrayGuts widget.";

    Array.dependencies = ["Vamonos.Widget.ArrayGuts"];

    Array.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      }
    };

    function Array(options) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: options,
        ignoreExtraArgs: true
      });
      this.$container = Vamonos.jqueryify(options.container);
      options.container = $("<table>", {
        "class": "array"
      });
      this.$container.append(options.container);
      this.guts = new Vamonos.Widget.ArrayGuts(options);
    }

    Array.prototype.event = function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.guts).event.apply(_ref, args);
    };

    return Array;

  })();

  this.Vamonos["export"]({
    Widget: {
      Array: Array
    }
  });

}).call(this);

(function() {
  var ArrayGuts,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  ArrayGuts = (function() {

    ArrayGuts.description = "ArrayGuts is where array input and display happen.";

    ArrayGuts.spec = {
      container: {
        type: "jQuery Selector",
        description: "a selector of the dom element the guts should go in"
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      defaultInput: {
        type: "Array",
        defaultValue: [],
        description: "the initial value for this array"
      },
      ignoreIndexZero: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the array should appear to be 1-indexed"
      },
      displayOnly: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the array is editable"
      },
      showChanges: {
        type: ["String", "Array"],
        description: "type of frame shifts to highlight changes at, " + "can be multiple types with an array of strings",
        defaultValue: "next"
      },
      cssRules: {
        type: "Array",
        defaultValue: [],
        description: "an array of triples of the form `\[comparison, " + "index-variable-expr, css-class\]` where every index in " + "the array that matches the comparason against the given " + "index-variable-expr receives the given css class.",
        example: "cssRules: [\n    ['>', 'k', 'shaded'],\n    ['=', 'k+i', 'green'],\n]"
      },
      showIndices: {
        type: "Array",
        description: "an array of index-variable-exprs of the form that show the " + "text of the index-variable-exprs on the indices they " + "correspond to.",
        defaultValue: []
      },
      showCellNumber: {
        type: "Boolean",
        defaultValue: true,
        description: "Whether to show a number above each cell."
      },
      showLabel: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to show the varName before the array"
      },
      cellFormat: {
        type: "Function",
        defaultValue: void 0,
        description: "A function that takes the raw contents of each entry and " + "returns the html to be displayed."
      },
      cellParse: {
        type: "Function",
        defaultValue: void 0,
        description: "A function that parses the text input from an editable cell " + "to an internal representation."
      },
      persistent: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to save the result of running the algorithm and to " + "use it as the initial value upon returning to edit mode."
      },
      _dummyIndexZero: {
        type: "Boolean",
        description: "",
        defaultValue: false
      }
    };

    function ArrayGuts(args) {
      var row, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.cellFormat) == null) {
        this.cellFormat = Vamonos.rawToTxt;
      }
      if ((_ref1 = this.cellParse) == null) {
        this.cellParse = Vamonos.txtToRaw;
      }
      this.$editBox = null;
      this.editIndex = null;
      this.lastInput = this.defaultInput;
      this.firstIndex = this.ignoreIndexZero ? 1 : 0;
      this.showChanges = Vamonos.arrayify((_ref2 = this.showChanges) != null ? _ref2 : "next");
      this.txtValid = function(txt) {
        return this.cellParse(txt) != null;
      };
      this.$rowIndices = $("<tr>", {
        "class": "array-indices"
      });
      this.$rowCells = $("<tr>", {
        "class": "array-cells"
      });
      this.$rowAnnotations = $("<tr>", {
        "class": "array-annotations"
      });
      this.$cells = [];
      this.$annotations = [];
      if (this.showCellNumber) {
        this.$rowIndices.hide();
      }
      this.container.append(this.$rowIndices, this.$rowCells, this.$rowAnnotations);
      if (this.showLabel === true) {
        this.showLabel = this.varName + ":";
      }
      if (typeof this.showLabel === "string") {
        _ref3 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          row = _ref3[_i];
          row.append("<th></th>");
        }
        this.$rowCells.find("th").html(this.showLabel);
      }
      if (this.ignoreIndexZero && this._dummyIndexZero) {
        _ref4 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
        for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
          row = _ref4[_j];
          row.append("<th></th>");
        }
      }
    }

    ArrayGuts.prototype.event = function() {
      var event, i, options, row, v, _, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _results, _results1,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          if (!this.displayOnly) {
            this.viz.setVariable(this.varName, this.lastInput.slice());
          }
          this.theArray = [];
          _ref = this.cssRules;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], _ = _ref1[0], i = _ref1[1], _ = _ref1[2];
            _ref2 = this.virtualIndexDependents(i);
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
              v = _ref2[_j];
              this.viz.registerVariable(v);
            }
          }
          _ref3 = this.showIndices;
          _results = [];
          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            i = _ref3[_k];
            _results.push((function() {
              var _l, _len3, _ref4, _results1;
              _ref4 = this.virtualIndexDependents(i);
              _results1 = [];
              for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
                v = _ref4[_l];
                _results1.push(this.viz.registerVariable(v));
              }
              return _results1;
            }).call(this));
          }
          return _results;
          break;
        case "editStart":
          this.arrayReset(this.persistent ? this.viz.getVariable(this.varName) : this.lastInput);
          if (this.displayOnly) {
            _ref4 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
            _results1 = [];
            for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
              row = _ref4[_l];
              _results1.push(row.hide());
            }
            return _results1;
          } else {
            this.$rowCells.on("click.arrayguts", "td", {}, function(e) {
              return _this.tdClick(e);
            });
            return this.$rowCells.prop("title", "Click in any cell to edit this array");
          }
          break;
        case "editStop":
          if (!this.displayOnly) {
            this.$rowCells.off("click.arrayguts");
            this.lastInput = this.theArray.slice();
            this.viz.setVariable(this.varName, this.theArray.slice());
            this.stopEditingCell(false);
            return this.$rowCells.prop("title", "");
          }
          break;
        case "displayStart":
          if (this.displayOnly) {
            _ref5 = [this.$rowCells, this.$rowAnnotations];
            for (_m = 0, _len4 = _ref5.length; _m < _len4; _m++) {
              row = _ref5[_m];
              row.show();
            }
            if (this.showCellNumber) {
              this.$rowIndices.show();
            }
            this.theArray = [];
          }
          return this.arrayReset(this.lastInput);
        case "render":
          return this.render.apply(this, options);
      }
    };

    ArrayGuts.prototype.render = function(frame, type) {
      var $cell, $selector, className, compare, i, index, indexName, indices, newArray, row, showChange, target, _i, _j, _k, _l, _len, _len1, _len2, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results;
      newArray = (_ref = frame[this.varName]) != null ? _ref : [];
      _ref1 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        row = _ref1[_i];
        row.find("td").removeClass();
      }
      while (newArray.length < this.theArray.length) {
        this.arrayChopLast();
      }
      while (newArray.length > this.theArray.length) {
        this.arrayPushRaw(null);
      }
      _ref2 = this.cssRules;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        _ref3 = _ref2[_j], compare = _ref3[0], indexName = _ref3[1], className = _ref3[2];
        index = this.virtualIndex(frame, indexName);
        if (Vamonos.isNumber(index) && (this.firstIndex <= index && index < newArray.length)) {
          $cell = this.$cells[index];
          $selector = (function() {
            switch (compare) {
              case "<":
                return $cell.prevAll();
              case "<=":
                return $cell.prevAll().add($cell);
              case "=":
              case "==":
                return $cell;
              case ">":
                return $cell.nextAll();
              case ">=":
                return $cell.nextAll().add($cell);
            }
          })();
          $selector.addClass(className);
        }
      }
      showChange = __indexOf.call(this.showChanges, type) >= 0;
      for (i = _k = _ref4 = this.firstIndex, _ref5 = newArray.length; _ref4 <= _ref5 ? _k < _ref5 : _k > _ref5; i = _ref4 <= _ref5 ? ++_k : --_k) {
        this.arraySetFromRaw(i, newArray[i], showChange);
      }
      indices = {};
      _ref6 = this.showIndices;
      for (_l = 0, _len2 = _ref6.length; _l < _len2; _l++) {
        i = _ref6[_l];
        if (/::/.test(i)) {
          i = i.split(/::/)[1];
        }
        target = this.virtualIndex(frame, i);
        if ((_ref7 = indices[target]) == null) {
          indices[target] = [];
        }
        indices[target].push(i);
      }
      this.$rowAnnotations.find("td").empty();
      _results = [];
      for (i = _m = _ref8 = this.firstIndex, _ref9 = newArray.length; _ref8 <= _ref9 ? _m < _ref9 : _m > _ref9; i = _ref8 <= _ref9 ? ++_m : --_m) {
        if (indices[i] != null) {
          _results.push(this.$annotations[i].html(indices[i].join(", ")));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    ArrayGuts.prototype.virtualIndex = function(frame, indexStr) {
      var prevOp, t, thisTerm, tokens, total, _i, _len;
      if (!indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)) {
        return null;
      }
      tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g);
      prevOp = "+";
      total = 0;
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        t = tokens[_i];
        if (prevOp != null) {
          thisTerm = Vamonos.isNumber(t) ? parseInt(t) : frame[t];
          if (thisTerm == null) {
            return null;
          }
          switch (prevOp) {
            case "+":
              total += thisTerm;
              break;
            case "-":
              total -= thisTerm;
          }
          prevOp = null;
        } else {
          prevOp = t;
        }
      }
      return total;
    };

    ArrayGuts.prototype.virtualIndexDependents = function(indexStr) {
      if (!indexStr.match(/^((?:[\w\d_]+::)?[a-zA-Z_]+|\d+)((-|\+)((?:[\w\d_]+::)?[a-zA-Z_]+|\d+))*$/g)) {
        return [];
      }
      return indexStr.match(/((?:[\w\d_]+::)?[a-zA-Z_]+)/g);
    };

    ArrayGuts.prototype.tdClick = function(event) {
      var i;
      if ((this.$editBox != null) && event.target === this.$editBox.get(0)) {
        return;
      }
      i = this.$rowCells.find("td").index($(event.target).closest("td"));
      return this.startEditingCell(i + this.firstIndex);
    };

    ArrayGuts.prototype.startEditingCell = function(index) {
      var $cell,
        _this = this;
      if (index === this.editIndex) {
        return;
      }
      if ((this.editIndex != null)) {
        this.stopEditingCell(true);
      }
      $cell = this.$cells[index];
      this.editIndex = index;
      this.$editBox = $("<input>", {
        "class": "inline-input"
      });
      this.$editBox.val(this.cellFormat(this.theArray[index]));
      this.$editBox.width($cell.width());
      this.$editBox.on("blur.arrayguts", function(e) {
        return _this.stopEditingCell(true);
      });
      this.$editBox.on("keydown.arrayguts", function(e) {
        return _this.editKeyDown(e);
      });
      $cell.html(this.$editBox);
      $cell.addClass("editing");
      this.$editBox.focus();
      return this.$editBox.select();
    };

    ArrayGuts.prototype.startEditingNextCell = function() {
      if (this.editIndex === this.theArray.length - 1) {
        if (!this.txtValid(this.$editBox.val())) {
          return;
        }
        this.arrayPushRaw(null);
      }
      return this.startEditingCell(this.editIndex + 1);
    };

    ArrayGuts.prototype.startEditingPrevCell = function() {
      if (this.editIndex > this.firstIndex) {
        return this.startEditingCell(this.editIndex - 1);
      }
    };

    ArrayGuts.prototype.stopEditingCell = function(save) {
      var $cell, dead, last, txt;
      if (!((this.editIndex != null) && (this.$editBox != null))) {
        return;
      }
      $cell = this.$cells[this.editIndex];
      last = this.editIndex === this.theArray.length - 1;
      txt = $cell.children("input").val();
      dead = last && this.editIndex !== this.firstIndex && ((save && !this.txtValid(txt)) || (!save && !(this.theArray[this.editIndex] != null)));
      if (dead) {
        this.arrayChopLast();
      } else if (save && this.txtValid(txt)) {
        this.arraySetFromTxt(this.editIndex, txt);
      } else {
        this.arraySetFromRaw(this.editIndex, this.theArray[this.editIndex]);
      }
      $cell.removeClass("editing");
      this.editIndex = null;
      return this.$editBox = null;
    };

    ArrayGuts.prototype.editKeyDown = function(event) {
      var elt, txt;
      switch (event.keyCode) {
        case 13:
          this.stopEditingCell(true);
          return false;
        case 32:
          this.startEditingNextCell();
          return false;
        case 9:
          if (event.shiftKey) {
            this.startEditingPrevCell();
          } else {
            this.startEditingNextCell();
          }
          return false;
        case 8:
          if (this.$editBox.val() === "") {
            this.startEditingPrevCell();
            return false;
          }
          break;
        case 37:
          elt = this.$editBox.get(0);
          if (elt.selectionStart === 0 && elt.selectionEnd === 0) {
            this.startEditingPrevCell();
            return false;
          }
          break;
        case 39:
          txt = this.$editBox.val();
          elt = this.$editBox.get(0);
          if (elt.selectionStart === txt.length && elt.selectionEnd === txt.length) {
            this.startEditingNextCell();
            return false;
          }
          break;
        case 27:
          this.stopEditingCell(false);
          return false;
        default:
          return true;
      }
    };

    ArrayGuts.prototype.arrayPushRaw = function(val, showChanges) {
      var $newAnnotation, $newCell, newindex;
      newindex = this.theArray.length;
      this.theArray.push(val);
      $newCell = $("<td>", {
        text: this.cellFormat(val)
      });
      $newAnnotation = $("<td>");
      this.$cells.push($newCell);
      this.$annotations.push($newAnnotation);
      this.$rowIndices.append("<td>" + newindex + "</td>");
      this.$rowCells.append($newCell);
      this.$rowAnnotations.append($newAnnotation);
      if (showChanges) {
        return this.markChanged(newindex);
      }
    };

    ArrayGuts.prototype.arrayChopLast = function() {
      var row, _i, _len, _ref, _results;
      this.theArray.length--;
      this.$cells.length--;
      this.$annotations.length--;
      _ref = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        _results.push(row.find("td:last-child").remove());
      }
      return _results;
    };

    ArrayGuts.prototype.arraySetFromTxt = function(index, txtVal, showChanges) {
      return this.arraySetFromRaw(index, this.cellParse(txtVal), showChanges);
    };

    ArrayGuts.prototype.arraySetFromRaw = function(index, rawVal, showChanges) {
      var $cell, newhtml, oldhtml;
      this.theArray[index] = rawVal;
      $cell = this.$cells[index];
      oldhtml = $cell.html();
      newhtml = this.theArray[index] != null ? "" + this.cellFormat(this.theArray[index]) : "";
      if (oldhtml !== newhtml) {
        $cell.html(newhtml);
        if (showChanges) {
          return this.markChanged(index);
        }
      }
    };

    ArrayGuts.prototype.arrayReset = function(newArray) {
      var row, v, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2, _results;
      this.theArray.length = 0;
      this.$cells.length = 0;
      this.$annotations.length = 0;
      for (_i = 0, _ref = this.firstIndex; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
        this.theArray.push(null);
        this.$cells.push(null);
        this.$annotations.push(null);
      }
      _ref1 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
        row = _ref1[_j];
        row.find("td").remove();
      }
      if ((newArray != null ? newArray.length : void 0) > this.firstIndex) {
        _ref2 = newArray.slice(this.firstIndex);
        _results = [];
        for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
          v = _ref2[_k];
          _results.push(this.arrayPushRaw(v));
        }
        return _results;
      } else {
        return this.arrayPushRaw(null);
      }
    };

    ArrayGuts.prototype.markChanged = function(index) {
      var $cell, dup;
      $cell = this.$cells[index];
      $cell.addClass("changed");
      dup = $cell.clone();
      $cell.replaceWith(dup);
      return this.$cells[index] = dup;
    };

    return ArrayGuts;

  })();

  this.Vamonos["export"]({
    Widget: {
      ArrayGuts: ArrayGuts
    }
  });

}).call(this);

(function() {
  var BinaryTree,
    __slice = [].slice;

  BinaryTree = (function() {

    BinaryTree.description = "A representation of a binary tree.";

    BinaryTree.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      defaultTree: {
        type: "BinaryTree",
        description: "the initial tree",
        defaultValue: void 0
      },
      xscalar: {
        type: "Number",
        defaultValue: 60,
        description: "how far to seperate nodes on the x axis"
      },
      yscalar: {
        type: "Number",
        defaultValue: 40,
        description: "how far to seperate nodes on the y axis"
      }
    };

    function BinaryTree(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.theTree = (_ref = this.defaultTree) != null ? _ref : new Vamonos.DataStructure.BinaryTree();
      this.graphDisplay = new Vamonos.Widget.GraphDisplay({
        container: this.container,
        vertexLabels: {
          inner: function(n) {
            return n.val;
          }
        },
        draggable: false,
        highlightChanges: false,
        resizable: false
      });
    }

    BinaryTree.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return this.viz = options[0], options;
        case "render":
          frame = options[0], type = options[1];
          return this.draw(frame[this.varName]);
      }
    };

    BinaryTree.prototype.draw = function(tree) {
      var graph, _ref;
      this.generatePositions(tree);
      graph = tree.asGraph();
      this.graphDisplay.fitGraph(graph, this.graphDrawn);
      this.graphDisplay.draw(graph, this.graphDrawn);
      return (_ref = this.graphDrawn) != null ? _ref : this.graphDrawn = true;
    };

    BinaryTree.prototype.generatePositions = function(tree) {
      var _this = this;
      return tree.eachNodeInOrder(function(n) {
        n.x = n.order * _this.xscalar + _this.graphDisplay.containerMargin;
        return n.y = n.depth * _this.yscalar + _this.graphDisplay.containerMargin;
      });
    };

    BinaryTree.prototype.editMode = function() {
      this.draw(this.theTree);
      return this.setContainerEditBindings();
    };

    BinaryTree.prototype.setContainerEditBindings = function() {
      var _this = this;
      return this.graphDisplay.$outer.on("click.vamonos-graph", function(e) {
        var $target;
        $target = $(e.target);
        if ($target.is("div.vertex-contents")) {
          _this.selectNode($target.parent());
        } else {
          _this.deselect();
        }
        return true;
      });
    };

    BinaryTree.prototype.selected = function() {
      if (this.$selectedNode != null) {
        return 'node';
      }
    };

    BinaryTree.prototype.selectNode = function(node) {
      var _this = this;
      if ('node' === this.selected()) {
        this.deselectNode();
      }
      this.$selectedNode = node;
      node.addClass("selected");
      node.find("div.vertex-contents").on("click", function() {
        return _this.editValue(_this.$selectedNode);
      });
      return this.openDrawer();
    };

    BinaryTree.prototype.deselect = function() {
      this.deselectNode();
      return this.closeDrawer();
    };

    BinaryTree.prototype.deselectNode = function() {
      if (!this.$selectedNode) {
        return;
      }
      this.$selectedNode.find("div.vertex-contents").off("click");
      this.$selectedNode.removeClass("selected");
      return this.$selectedNode = void 0;
    };

    BinaryTree.prototype.openDrawer = function() {
      var buttons, node,
        _this = this;
      if ('node' !== this.selected()) {
        return;
      }
      node = this.theTree.asGraph().vertex(this.$selectedNode.attr("id"));
      buttons = [];
      if (node.right != null) {
        buttons.push($("<button>", {
          text: "rotate left"
        }).on("click.vamonos-graph", function(e) {
          var rightChild;
          rightChild = node.right;
          _this.theTree.rotateLeft(node.id);
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[rightChild.id]);
        }));
      }
      if (node.left != null) {
        buttons.push($("<button>", {
          text: "rotate right"
        }).on("click.vamonos-graph", function(e) {
          var leftChild;
          leftChild = node.left;
          _this.theTree.rotateRight(node.id);
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[leftChild.id]);
        }));
      }
      if (node.left == null) {
        buttons.push($("<button>", {
          text: "add left child"
        }).on("click.vamonos-graph", function(e) {
          var nodeId;
          nodeId = _this.theTree.addNode(node.id, "left", {
            val: node.val
          });
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[nodeId]);
        }));
      }
      if (node.right == null) {
        buttons.push($("<button>", {
          text: "add right child"
        }).on("click.vamonos-graph", function(e) {
          var nodeId;
          nodeId = _this.theTree.addNode(node.id, "right", {
            val: node.val
          });
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[nodeId]);
        }));
      }
      if (node.depth !== 0) {
        buttons.push($("<button>", {
          text: "del"
        }).on("click.vamonos-graph", function(e) {
          _this.theTree.deleteNode(node.id);
          _this.deselect();
          return _this.draw(_this.theTree);
        }));
      }
      return this.graphDisplay.openDrawer({
        buttons: buttons,
        label: ""
      });
    };

    BinaryTree.prototype.closeDrawer = function() {
      return this.graphDisplay.closeDrawer();
    };

    BinaryTree.prototype.editValue = function($node) {
      var $contents, nodeId, returnFunc, valFunc,
        _this = this;
      $contents = $node.find("div.vertex-contents");
      nodeId = $node.attr("id");
      valFunc = function($contents) {
        return $contents.text();
      };
      returnFunc = function(newVal) {
        var val;
        val = Vamonos.txtToRaw(newVal);
        if (newVal != null) {
          _this.theTree.changeVal(nodeId, val);
        }
        return Vamonos.rawToTxt(val);
      };
      return Vamonos.editableValue($contents, valFunc, returnFunc);
    };

    return BinaryTree;

  })();

  this.Vamonos["export"]({
    Widget: {
      BinaryTree: BinaryTree
    }
  });

}).call(this);

(function() {
  var CallStack,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  CallStack = (function() {

    CallStack.description = "CallStack is a representation of the stash's call stack. " + "It also displays the values a procedure was called with, and its " + "return value. Note: setting \"\_callStack\" as a watchVar will cause " + "the visualizer to break on procedure calls and returns.";

    CallStack.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      procedureNames: {
        type: "Object",
        defaultValue: {},
        description: "an object mapping procedure names (those in the Visualizer's " + "'algorithm' argument) to their fully capitalized and formatted " + "display forms.",
        example: "procedureNames: {\n" + "    main: \"DFS\",\n" + "    visit: \"DFS-Visit\",\n" + "}"
      },
      animate: {
        type: "Array",
        defaultValue: ["next"],
        description: "types of frame changes to show an animation on"
      },
      resizable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the widget should have a resize triangle"
      },
      ignoreMain: {
        type: "Boolean",
        defaultValue: false,
        description: "CallStack will not display calls to the `main` procedure when set. " + "This is useful when you'd like to use `main` to set variables, or " + "do other useful housekeeping."
      },
      ignoreArgumentValues: {
        type: "Array",
        defaultValue: [],
        description: "An array of argument names `\['arg1','arg2'\]` that should only " + "show their name in the Call Stack."
      }
    };

    function CallStack(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.$container = Vamonos.jqueryify(this.container);
      this.$inner = $("<div>", {
        "class": "callstack"
      }).appendTo(this.$container);
      this.$table = $("<table>", {
        "class": "callstack"
      }).appendTo(this.$inner);
      this.$container.hide();
      if (this.resizable) {
        this.$container.resizable({
          handles: "se",
          alsoResize: this.$inner
        });
        this.$container.addClass("ui-resizable-roomforscrollbar");
      }
      this.$argRows = [];
      this.$procRows = [];
    }

    CallStack.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return this.viz = options[0], options;
        case "render":
          frame = options[0], type = options[1];
          return this.render(frame, type);
        case "displayStop":
          this.$argRows = [];
          this.$procRows = [];
          this.$table.empty();
          return this.$container.hide();
        case "displayStart":
          return this.$container.show();
      }
    };

    CallStack.prototype.ignoreFrame = function(frame) {
      return frame.procName === "input" || this.ignoreMain && frame.procName === 'main';
    };

    CallStack.prototype.render = function(frame, type) {
      var f, i, newScrollTop, r, scope, stack, tgt, _i, _len, _ref,
        _this = this;
      this.$inner.stop();
      stack = frame._callStack.slice(0);
      stack.reverse();
      stack = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = stack.length; _i < _len; _i++) {
          f = stack[_i];
          if (!this.ignoreFrame(f)) {
            _results.push(f);
          }
        }
        return _results;
      }).call(this);
      if (frame._returnStack != null) {
        _ref = frame._returnStack;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          r = _ref[_i];
          if (!this.ignoreFrame(r)) {
            stack.push(r);
          }
        }
      }
      while (stack.length > this.$argRows.length) {
        this.$argRows.push($("<tr>").appendTo(this.$table));
        this.$procRows.push($("<tr>").appendTo(this.$table));
      }
      for (i in stack) {
        scope = stack[i];
        this.setArgRow(this.$argRows[i], scope);
        this.setProcRow(this.$procRows[i], scope);
      }
      tgt = this.$procRows[stack.length - 1];
      newScrollTop = this.$inner.scrollTop() - this.$inner.offset().top - this.$inner.height() + tgt.height() + tgt.offset().top + 1;
      if (__indexOf.call(this.animate, type) >= 0 && newScrollTop > 0) {
        return this.$inner.animate({
          scrollTop: newScrollTop
        }, 500, function() {
          var _results;
          _results = [];
          while (stack.length < _this.$argRows.length) {
            _this.$argRows.pop().remove();
            _results.push(_this.$procRows.pop().remove());
          }
          return _results;
        });
      } else {
        while (stack.length < this.$argRows.length) {
          this.$argRows.pop().remove();
          this.$procRows.pop().remove();
        }
        return this.$inner.scrollTop(this.$inner.prop("scrollHeight"));
      }
    };

    CallStack.prototype.setArgRow = function($tr, scope) {
      return $tr.html("<td class='callstack-args'>" + ("" + (this.argStr(scope)) + "</td><td class='callstack-return'>") + ("" + (this.retStr(scope)) + "</td>"));
    };

    CallStack.prototype.setProcRow = function($tr, scope) {
      var procName, _ref;
      procName = (_ref = this.procedureNames[scope.procName]) != null ? _ref : scope.procName;
      $tr.html("<td><td><div class='callstack-proc-container'><div class='callstack-proc'>" + procName + "</div></div></td>");
      if ("returnValue" in scope) {
        $tr.find("div.callstack-proc").addClass("callstack-returned");
      }
      if (scope.activeStackFrame) {
        return $tr.find("div.callstack-proc").addClass("callstack-active");
      }
    };

    CallStack.prototype.argStr = function(scope) {
      var k, r, v;
      r = (function() {
        var _ref, _results;
        _ref = scope.args;
        _results = [];
        for (k in _ref) {
          v = _ref[k];
          if (!/^_/.test(k)) {
            if (__indexOf.call(this.ignoreArgumentValues, k) >= 0) {
              _results.push(k);
            } else if (v.constructor.name === 'Array') {
              _results.push("" + k + "=" + k);
            } else {
              _results.push("" + k + "=" + (Vamonos.rawToTxt(v)));
            }
          }
        }
        return _results;
      }).call(this);
      return r.join(",") + "<span class='callstack-arrow'>&darr;</span>";
    };

    CallStack.prototype.retStr = function(scope) {
      var r, ret;
      if (!("returnValue" in scope)) {
        return "&nbsp;";
      }
      ret = Vamonos.arrayify(scope.returnValue);
      return "<span class='callstack-arrow'>&uarr;</span>" + ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = ret.length; _i < _len; _i++) {
          r = ret[_i];
          _results.push(Vamonos.rawToTxt(r));
        }
        return _results;
      })()).join(",");
    };

    return CallStack;

  })();

  this.Vamonos["export"]({
    Widget: {
      CallStack: CallStack
    }
  });

}).call(this);

(function() {
  var Console,
    __slice = [].slice;

  Console = (function() {

    Console.description = "The `Console` widget is for debugging. It will print each " + "frame and event to the console. It takes no arguments.";

    Console.spec = {};

    function Console(args) {
      if (args == null) {
        args = {};
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
    }

    Console.prototype.event = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'render') {
        return console.log(options[0]._frameNumber + " : " + JSON.stringify(options[0]._snapshotReasons));
      } else if (options.length > 0) {
        return console.log("widget event '" + event + "', options:", options);
      } else {
        return console.log("widget event '" + event + "'");
      }
    };

    return Console;

  })();

  this.Vamonos["export"]({
    Widget: {
      Console: Console
    }
  });

}).call(this);

(function() {
  var ControlButtons, ControlFrameLabel, ControlSlider, Controls,
    __slice = [].slice;

  Controls = (function() {

    Controls.description = "The Controls widget controls the Visualizer - switching " + "modes and frames.";

    Controls.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      autoPlay: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the visualization should skip edit mode"
      },
      fullscreen: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the visualization is in fullscreen mode"
      },
      buttons: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the buttons"
      },
      slider: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the slider"
      },
      frameNumber: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the frame number"
      },
      showWhileSliding: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to update visualization when sliding"
      },
      keyboardShortcuts: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to handle keyboard shortcuts"
      },
      runStopButton: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the run and stop button"
      },
      expandWidth: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to expand the controls to fill its parent"
      }
    };

    function Controls(arg) {
      var _this = this;
      if (typeof arg !== "object") {
        arg = {
          container: arg
        };
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: arg
      });
      this.$container = Vamonos.jqueryify(this.container);
      this.$inner = $("<div>", {
        "class": "controls controls-disabled"
      });
      this.$slider = $("<div>");
      this.$buttons = $("<div>");
      this.$frameLabel = $("<div>");
      if (this.frameNumber) {
        this.frameLabel = new ControlFrameLabel({
          container: this.$frameLabel
        });
      }
      if (this.slider) {
        this.sliderObj = new ControlSlider({
          container: this.$slider,
          showWhileSliding: this.showWhileSliding,
          labelWidget: this.frameLabel
        });
      }
      if (this.buttons) {
        this.buttonsObj = new ControlButtons({
          container: this.$buttons,
          runStopButton: this.runStopButton,
          autoPlay: this.autoPlay,
          keyboardShortcuts: this.keyboardShortcuts
        });
      }
      this.$container.append(this.$inner);
      if (this.buttons) {
        this.$inner.append(this.$buttons);
      }
      if (this.frameNumber) {
        this.$inner.append(this.$frameLabel);
      }
      if (this.slider) {
        this.$inner.append(this.$slider);
      }
      if (this.buttons && this.slider) {
        this.$inner.addClass("controls-full");
      }
      switch (this.fullscreen) {
        case "auto":
          if (!window.screenTop && !window.screenY) {
            this.$container.addClass("controls-fullscreen");
          }
          $(window).on("resize", function() {
            if (!window.screenTop && !window.screenY) {
              return _this.$inner.addClass("controls-fullscreen");
            } else {
              return _this.$inner.removeClass("controls-fullscreen");
            }
          });
          break;
        case true:
          this.$inner.addClass("controls-fullscreen");
      }
    }

    Controls.prototype.event = function() {
      var event, options, _ref, _ref1, _ref2;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.buttonsObj) != null) {
        _ref.event.apply(_ref, [event].concat(__slice.call(options)));
      }
      if ((_ref1 = this.sliderObj) != null) {
        _ref1.event.apply(_ref1, [event].concat(__slice.call(options)));
      }
      if ((_ref2 = this.frameLabel) != null) {
        _ref2.event.apply(_ref2, [event].concat(__slice.call(options)));
      }
      switch (event) {
        case "setupEnd":
          if (this.expandWidth) {
            return this.$container.width(this.$container.parent().width() + 1);
          }
          break;
        case "displayStart":
          return this.$inner.removeClass("controls-disabled");
        case "displayStop":
          return this.$inner.addClass("controls-disabled");
      }
    };

    return Controls;

  })();

  this.Vamonos["export"]({
    Widget: {
      Controls: Controls
    }
  });

  ControlFrameLabel = (function() {

    function ControlFrameLabel(_arg) {
      var container;
      container = _arg.container;
      this.$frameLabel = Vamonos.jqueryify(container);
      this.$frameLabel.addClass("controls-frame-number");
      this.writeLabel(null);
    }

    ControlFrameLabel.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "editStart":
        case "displayStop":
          return this.writeLabel(null);
        case "displayStart":
          return this.writeLabel(0, 0);
        case "render":
          frame = options[0], type = options[1];
          return this.writeLabel(frame._frameNumber, frame._numFrames);
      }
    };

    ControlFrameLabel.prototype.writeLabel = function(value, max) {
      if (value != null) {
        return this.$frameLabel.html("" + value + " / " + max);
      } else {
        return this.$frameLabel.html("stopped");
      }
    };

    return ControlFrameLabel;

  })();

  ControlButtons = (function() {
    var NEXT, PAUSE, PLAY, PREV, RUN, STOP;

    PLAY = "\u25b6";

    PAUSE = "\u25ae\u25ae";

    STOP = "stop";

    RUN = "run";

    NEXT = "\u25ae\u25B6";

    PREV = "\u25c0\u25ae";

    function ControlButtons(_arg) {
      var container, runStopButton,
        _this = this;
      container = _arg.container, runStopButton = _arg.runStopButton, this.autoPlay = _arg.autoPlay, this.keyboardShortcuts = _arg.keyboardShortcuts;
      this.$container = Vamonos.jqueryify(container);
      this.$runStopButton = $("<button>", {
        "class": "controls-button",
        html: RUN
      });
      this.$prevButton = $("<button>", {
        "class": "controls-button",
        html: PREV
      });
      this.$nextButton = $("<button>", {
        "class": "controls-button",
        html: NEXT
      });
      this.$playPauseButton = $("<button>", {
        "class": "controls-button",
        html: PLAY
      });
      this.playInterval = null;
      this.atLastFrame = false;
      this.$container.addClass("controls-buttons");
      if (runStopButton) {
        this.$container.append(this.$runStopButton);
      }
      this.$container.append(this.$prevButton, this.$nextButton, this.$playPauseButton);
      this.$nextButton.on("click", function() {
        _this.visualizer.trigger("nextFrame");
        return _this.stopPlaying();
      });
      this.$prevButton.on("click", function() {
        _this.visualizer.trigger("prevFrame");
        return _this.stopPlaying();
      });
      this.$runStopButton.on("click", function() {
        if (_this.mode === "edit") {
          return _this.visualizer.trigger("runAlgorithm");
        } else if (_this.mode === "display") {
          return _this.visualizer.trigger("editMode");
        }
      });
      this.$playPauseButton.on("click", function() {
        if (_this.playInterval != null) {
          return _this.stopPlaying();
        } else {
          return _this.startPlaying();
        }
      });
    }

    ControlButtons.prototype.startPlaying = function() {
      var _this = this;
      if ((this.playInterval != null) || this.atLastFrame) {
        return;
      }
      this.$playPauseButton.html(PAUSE);
      this.$playPauseButton.prop("title", "Pause automatic playback of algorithm [shortcut: space bar]");
      return this.playInterval = setInterval((function() {
        if (!_this.visualizer.frozen) {
          return _this.visualizer.trigger("nextFrame");
        }
      }), 1000);
    };

    ControlButtons.prototype.stopPlaying = function() {
      if (this.playInterval == null) {
        return;
      }
      clearTimeout(this.playInterval);
      this.playInterval = null;
      this.$playPauseButton.html(PLAY);
      return this.$playPauseButton.prop("title", "Start automatic playback of algorithm [shortcut: space bar]");
    };

    ControlButtons.prototype.event = function() {
      var event, frame, options, type,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.visualizer = options[0];
          if (this.keyboardShortcuts) {
            return $("body").on("keydown.controlbuttons", function(e) {
              return _this.keyDownHandler(e);
            });
          }
          break;
        case "editStart":
          this.$runStopButton.html(RUN);
          this.$runStopButton.prop("title", "Execute the algorithm with current inputs/breakpoints/etc [shortcut: enter]");
          this.prevButtonActive(false);
          this.nextButtonActive(false);
          this.playPauseButtonActive(false);
          this.$container.addClass("controls-disabled");
          return this.mode = "edit";
        case "displayStart":
          this.$runStopButton.html(STOP);
          this.$runStopButton.prop("title", "Stop the algorithm to edit inputs/breakpoints/etc [shortcut: escape]");
          this.$container.removeClass("controls-disabled");
          this.mode = "display";
          if (this.autoPlay) {
            return this.startPlaying();
          }
          break;
        case "displayStop":
          this.stopPlaying();
          return this.mode = null;
        case "render":
          frame = options[0], type = options[1];
          this.atLastFrame = frame._frameNumber === frame._numFrames;
          this.nextButtonActive(!this.atLastFrame);
          this.playPauseButtonActive(!this.atLastFrame);
          return this.prevButtonActive(frame._frameNumber !== 1);
      }
    };

    ControlButtons.prototype.keyDownHandler = function(event) {
      if (this.visualizer.frozen) {
        return true;
      }
      if (this.mode === "display") {
        switch (event.keyCode) {
          case 37:
            if (!this.$prevButton.attr("disabled")) {
              this.$prevButton.trigger("click");
            }
            return false;
          case 39:
            if (!this.$nextButton.attr("disabled")) {
              this.$nextButton.trigger("click");
            }
            return false;
          case 32:
            if (!this.$playPauseButton.attr("disabled")) {
              this.$playPauseButton.trigger("click");
            }
            return false;
          case 27:
            this.$runStopButton.trigger("click");
            return false;
        }
      } else {
        switch (event.keyCode) {
          case 13:
            this.$runStopButton.trigger("click");
            return false;
        }
      }
      return true;
    };

    ControlButtons.prototype.playPauseButtonActive = function(active) {
      if (active) {
        this.$playPauseButton.removeAttr("disabled");
        return this.$playPauseButton.prop("title", "Start automatic playback of algorithm [shortcut: space bar]");
      } else {
        this.$playPauseButton.attr("disabled", "true");
        return this.$playPauseButton.prop("title", "");
      }
    };

    ControlButtons.prototype.nextButtonActive = function(active) {
      if (active) {
        this.$nextButton.removeAttr("disabled");
        return this.$nextButton.prop("title", "Step forwards through the algorithm's execution [shortcut: right arrow]");
      } else {
        this.$nextButton.attr("disabled", "true");
        return this.$nextButton.prop("title", "");
      }
    };

    ControlButtons.prototype.prevButtonActive = function(active) {
      if (active) {
        this.$prevButton.removeAttr("disabled");
        return this.$prevButton.prop("title", "Step backwards through the algorithm's execution [shortcut: left arrow]");
      } else {
        this.$prevButton.attr("disabled", "true");
        return this.$prevButton.prop("title", "");
      }
    };

    return ControlButtons;

  })();

  ControlSlider = (function() {

    function ControlSlider(_arg) {
      var container,
        _this = this;
      container = _arg.container, this.showWhileSliding = _arg.showWhileSliding, this.labelWidget = _arg.labelWidget;
      this.$slider = Vamonos.jqueryify(container);
      this.$slider.addClass("controls-slider");
      this.$slider.attr("title", "Slide to jump forward/backward through algorithm's execution");
      this.$slider.slider({
        min: 0,
        max: 0,
        value: 0,
        slide: function(event, ui) {
          return _this.slideEvent(event, ui);
        },
        stop: function() {
          return _this.stopEvent();
        }
      });
    }

    ControlSlider.prototype.stopEvent = function() {
      if (this.mode === "display") {
        return this.visualizer.trigger("jumpFrame", this.$slider.slider("option", "value"));
      }
    };

    ControlSlider.prototype.slideEvent = function(event, ui) {
      if (this.mode !== "display") {
        return;
      }
      if (this.showWhileSliding) {
        return this.visualizer.trigger("jumpFrame", ui.value);
      } else if (this.labelWidget != null) {
        return this.labelWidget.writeLabel(ui.value, this.$slider.slider("option", "max"));
      }
    };

    ControlSlider.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return this.visualizer = options[0], options;
        case "editStart":
          return this.mode = "edit";
        case "displayStart":
          this.mode = "display";
          this.$slider.slider("option", "min", 0);
          this.$slider.slider("option", "max", 0);
          return this.$slider.slider("option", "value", 0);
        case "render":
          frame = options[0], type = options[1];
          this.$slider.slider("option", "min", 1);
          this.$slider.slider("option", "max", frame._numFrames);
          return this.$slider.slider("option", "value", frame._frameNumber);
      }
    };

    return ControlSlider;

  })();

}).call(this);

(function() {
  var Error,
    __slice = [].slice;

  Error = (function() {

    Error.description = "The `Error` widget serves as a way to create custom error conditions.\nThe visualization will not change to DisplayMode unless all conditions\nare met.";

    Error.spec = {
      conditions: {
        type: "Array",
        description: "a list of functions that take a viz object and return " + "a string saying what went wrong.",
        example: "new Vamonos.Widget.Error({\n    conditions: [\n        function(viz){ \n            var s = viz.getVariable(\"s\");\n            var t = viz.getVariable(\"t\");\n            if (s.id === t.id) {\n                return \"Ford-Fulkerson says: s and t must be different!\";\n            }\n        }\n    ]\n})"
      }
    };

    function Error(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
    }

    Error.prototype.event = function() {
      var c, event, options, s, viz, _i, _len, _ref, _ref1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'checkErrors') {
        viz = options[0];
        s = "";
        _ref = this.conditions;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          s += (_ref1 = c(viz)) != null ? _ref1 : "";
        }
        if (s.length) {
          return s;
        }
      }
    };

    return Error;

  })();

  this.Vamonos["export"]({
    Widget: {
      Error: Error
    }
  });

}).call(this);

(function() {
  var GraphDisplay,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  GraphDisplay = (function() {

    GraphDisplay.description = "GraphDisplay provides display functionality to " + "widgets that need not use graph data structures.";

    GraphDisplay.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      vertexLabels: {
        type: "Object",
        defaultValue: {},
        description: "an object containing a mapping of label positions " + "(inner, nw, sw, ne, se) to labels. Labels can display " + "simple variable names (corresponding to inputVars). " + "This must be provided in the form: `{ label: ['var1', 'var2'] }`. " + "It can be more complicated, as a function that takes " + "a vertex and returns some html. if we give a label " + "an object, we can control what is shown in edit/display " + "mode in the form: " + "`{ label : { edit: function{}, display: function{} } }`",
        example: "vertexLabels: {\n" + "    inner : {\n" + "        edit: function(vtx){return vtx.name}, \n" + "        display: function(vtx){return vtx.d} \n" + "    },\n" + "    sw    : function(vtx){return vtx.name}, \n" + "    ne    : ['u', 'v'],\n" + "    nw    : ['s'],\n" + "}"
      },
      edgeLabel: {
        type: ["Object", "Array", "Function"],
        defaultValue: void 0,
        description: "an array, containing the name of the edge attribute to display" + "and the default value for new edges or a function taking an edge " + "and returning a string. one can also specify whether to show certain " + "things in edit or display mode by using an object.",
        example: "edgeLabel: { display: [ 'w', 1 ], edit: function(e){ return e.w } }"
      },
      colorEdges: {
        type: "Array",
        defaultValue: [],
        description: "provides a way to set edge coloring based on vertex variables " + "or edge properties. takes an array of doubles of the form  " + "`[ edge-predicate, color ]`, where color is a hex color and edge-" + "predicate is either a string of the form `'vertex1->vertex2'` or " + "a function that takes an edge and returns a boolean",
        example: "colorEdges: [\n" + "    ['u->v', '#FF7D7D'],\n" + "    [ function(edge){\n" + "        return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)\n" + "            || (edge.source.pred ? edge.source.pred.id === edge.target.id : false) }\n" + "    , '#92E894' ],\n" + "]"
      },
      vertexCssAttributes: {
        type: "Object",
        defaultValue: {},
        description: "provides a way to change CSS classes of vertices based on " + "vertex attributes. takes an object of the form `{ attribute: " + "value | [list of values] }`. in the case of a single value,  " + "the vertex will simply get a class with the same name as " + "the attribute. in the case of a list of values, the css " + "class will be of the form 'attribute-value' when its value " + "matches.",
        example: "vertexCssAttributes: { done: true }\n" + "vertexCssAttributes: { color: ['white', 'gray', 'black'] }"
      },
      containerMargin: {
        type: "Number",
        defaultValue: 30,
        description: "how close nodes can get to the container edge"
      },
      minX: {
        type: "Number",
        defaultValue: 100,
        description: "minimum width of the graph widget"
      },
      minY: {
        type: "Number",
        defaultValue: 100,
        description: "minimum height of the graph widget"
      },
      resizable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the graph widget is resizable"
      },
      draggable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether nodes can be moved"
      },
      highlightChanges: {
        type: "Boolean",
        defaultValue: true,
        description: "whether nodes will get the css class 'changed' when they are modified"
      }
    };

    function GraphDisplay(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.connections = {};
      this.nodes = {};
      this.$outer = Vamonos.jqueryify(this.container);
      this.$inner = $("<div>", {
        "class": "graph-inner-container"
      });
      this.graphDrawn = false;
      if (((_ref = this.edgeLabel) != null ? _ref.constructor.name : void 0) !== 'Object') {
        this.edgeLabel = {
          edit: this.edgeLabel,
          display: this.edgeLabel
        };
      }
      this.$outer.append(this.$inner);
      this.$outer.disableSelection();
      if (this.resizable) {
        this.$outer.resizable({
          handles: "se",
          minWidth: this.minX,
          minHeight: this.minY
        });
      }
      this.jsPlumbInstance = jsPlumb.getInstance({
        Connector: ["Straight"],
        PaintStyle: this.normalPaintStyle,
        Endpoint: "Blank",
        Anchor: [
          "Perimeter", {
            shape: "Circle"
          }
        ]
      });
    }

    GraphDisplay.prototype.event = function() {
      var e, event, label, options, v, values, _i, _j, _len, _len1, _ref, _ref1, _ref2, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          _ref = this.colorEdges;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            if (typeof e[0] === 'string') {
              _ref1 = e[0].split(/<?->?/);
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                v = _ref1[_j];
                this.viz.registerVariable(v);
              }
            }
          }
          _ref2 = this.vertexLabels;
          _results = [];
          for (label in _ref2) {
            values = _ref2[label];
            _results.push((function() {
              var _k, _len2, _results1;
              _results1 = [];
              for (_k = 0, _len2 = values.length; _k < _len2; _k++) {
                v = values[_k];
                if (typeof v === 'string') {
                  _results1.push(this.viz.registerVariable(v));
                }
              }
              return _results1;
            }).call(this));
          }
          return _results;
      }
    };

    GraphDisplay.prototype.draw = function(graph, frame) {
      var edge, vertex, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4,
        _this = this;
      if (frame == null) {
        frame = {};
      }
      if ((_ref = this.mode) == null) {
        this.mode = "display";
      }
      this.directed = graph.directed;
      this.graphDrawn = true;
      this.$outer.find(".changed").removeClass("changed");
      _ref1 = graph.getVertices();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        vertex = _ref1[_i];
        if (this.nodes[vertex.id] != null) {
          continue;
        }
        this.addNode(vertex);
      }
      _ref2 = graph.getEdges();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        edge = _ref2[_j];
        if (((_ref3 = this.connections[edge.source.id]) != null ? _ref3[edge.target.id] : void 0) != null) {
          continue;
        }
        if ((((_ref4 = this.connections[edge.target.id]) != null ? _ref4[edge.source.id] : void 0) != null) && !this.directed) {
          continue;
        }
        this.addConnection(edge, graph);
      }
      this.eachConnection(function(sourceId, targetId) {
        if (!graph.edge(sourceId, targetId)) {
          return _this.removeConnection(sourceId, targetId, graph);
        }
      });
      this.eachNode(function(vid, node) {
        if (graph.vertex(vid)) {
          return _this.updateNode(node, graph.vertex(vid), frame);
        } else {
          return _this.removeNode(vid);
        }
      });
      this.updateConnections(graph, frame);
      return this.previousGraph = graph;
    };

    GraphDisplay.prototype.fitGraph = function(graph, animate) {
      var clearMe, max_x, max_y, nodes, vertex, xVals, yVals, _i, _len, _ref;
      if (animate == null) {
        animate = false;
      }
      if (graph != null) {
        if (!((this._vertexWidth != null) && (this._vertexHeight != null))) {
          nodes = $("div.vertex-contents");
          if (!nodes.size()) {
            this.addNode({
              id: "TEST-VERTEX"
            }, false);
            clearMe = true;
          }
          this._vertexWidth = nodes.width();
          this._vertexHeight = nodes.height();
          if (clearMe) {
            this.removeNode("TEST-VERTEX");
          }
        }
        xVals = [];
        yVals = [];
        _ref = graph.getVertices();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          vertex = _ref[_i];
          xVals.push(vertex.x + this._vertexWidth + this.containerMargin);
          yVals.push(vertex.y + this._vertexHeight + this.containerMargin);
        }
        max_x = Math.max.apply(Math, __slice.call(xVals).concat([this.minX]));
        max_y = Math.max.apply(Math, __slice.call(yVals).concat([this.minY]));
      } else {
        max_x = 0;
        max_y = 0;
      }
      if (animate) {
        this.$outer.animate({
          width: max_x,
          height: max_y
        }, 500);
      } else {
        this.$outer.width(max_x);
        this.$outer.height(max_y);
      }
      if (this.resizable) {
        this.$outer.resizable("option", "minWidth", max_x);
        return this.$outer.resizable("option", "minHeight", max_y);
      }
    };

    GraphDisplay.prototype.clearDisplay = function() {
      this.jsPlumbInstance.reset();
      this.$inner.html("");
      this.graphDrawn = false;
      this.connections = {};
      this.nodes = {};
      return this.previousGraph = void 0;
    };

    GraphDisplay.prototype.eachNode = function(f) {
      var node, vid, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (vid in _ref) {
        node = _ref[vid];
        _results.push(f(vid, node));
      }
      return _results;
    };

    GraphDisplay.prototype.eachConnection = function(f) {
      var con, seen, sourceId, targetId, targets, _ref, _results;
      if (!this.directed) {
        seen = [];
      }
      _ref = this.connections;
      _results = [];
      for (sourceId in _ref) {
        targets = _ref[sourceId];
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (targetId in targets) {
            con = targets[targetId];
            if (!this.directed) {
              if (__indexOf.call(seen, con) >= 0) {
                continue;
              }
              seen.push(con);
            }
            _results1.push(f(sourceId, targetId, con));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    GraphDisplay.prototype.addNode = function(vertex, show) {
      var $contents, $v, style, type, _ref,
        _this = this;
      if (show == null) {
        show = true;
      }
      $v = $("<div>", {
        "class": 'vertex',
        id: vertex.id
      });
      $v.hide();
      $v.css("left", vertex.x);
      $v.css("top", vertex.y);
      $v.css("position", "absolute");
      $contents = $("<div>", {
        "class": "vertex-contents"
      });
      _ref = this.vertexLabels;
      for (type in _ref) {
        style = _ref[type];
        if (type === "ne" || type === "nw" || type === "se" || type === "sw") {
          $("<div>", {
            "class": "vertex-" + type + "-label"
          }).appendTo($v);
        }
      }
      if (this.draggable) {
        this.jsPlumbInstance.draggable($v, {
          containment: "parent",
          start: function(event, ui) {
            return Vamonos.moveToTop($v);
          },
          stop: function(event, ui) {
            $v.css("z-index", "auto");
            if (_this.mode === 'edit') {
              vertex.x = ui.position.left;
              return vertex.y = ui.position.top;
            }
          }
        });
      }
      $v.append($contents);
      this.$inner.append($v);
      if (show) {
        $v.fadeIn(100);
      }
      return this.nodes[vertex.id] = $v;
    };

    GraphDisplay.prototype.removeNode = function(vid) {
      var node;
      node = this.nodes[vid];
      this.jsPlumbInstance.removeAllEndpoints(node);
      delete this.nodes[vid];
      return node.fadeOut(100, function() {
        return node.remove();
      });
    };

    GraphDisplay.prototype.updateNode = function($node, vertex, frame) {
      if ($node == null) {
        $node = this.nodes[vid];
      }
      if (!(($node != null) && (vertex != null))) {
        return;
      }
      this.updateNodeLabels($node, vertex, frame);
      this.updateNodeClasses($node, vertex, frame);
      return this.updateNodePosition($node, vertex, frame);
    };

    GraphDisplay.prototype.updateNodePosition = function($node, vertex) {
      var pos;
      pos = $node.position();
      if (pos.left === vertex.x && pos.top === vertex.y) {
        return;
      }
      return this.jsPlumbInstance.animate(vertex.id, {
        left: vertex.x,
        top: vertex.y
      }, {
        duration: 500
      });
    };

    GraphDisplay.prototype.updateNodeLabels = function($node, vertex, frame) {
      var $target, style, type, v, _ref;
      _ref = this.vertexLabels;
      for (type in _ref) {
        style = _ref[type];
        $target = type === "inner" ? $node.children("div.vertex-contents") : type === "ne" || type === "nw" || type === "se" || type === "sw" ? $node.children("div.vertex-" + type + "-label") : void 0;
        if ($target == null) {
          return;
        }
        $target.html(style.constructor.name === "Function" ? Vamonos.rawToTxt(style(vertex)) : style.constructor.name === "Array" ? ((function() {
          var _i, _len, _ref1, _results;
          _results = [];
          for (_i = 0, _len = style.length; _i < _len; _i++) {
            v = style[_i];
            if (((_ref1 = frame[v]) != null ? _ref1.id : void 0) === vertex.id) {
              _results.push(Vamonos.removeNamespace(v));
            }
          }
          return _results;
        })()).join(",") : style.constructor.name === "Object" ? Vamonos.rawToTxt(style[this.mode](vertex)) : style);
      }
    };

    GraphDisplay.prototype.updateNodeClasses = function($node, vertex) {
      var attr, kind, val, _i, _len, _ref, _ref1, _results;
      if (this.highlightChanges && this.mode === 'display' && this.vertexChanged(vertex)) {
        $node.addClass("changed");
      }
      _ref = this.vertexCssAttributes;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        if (val.length) {
          for (_i = 0, _len = val.length; _i < _len; _i++) {
            kind = val[_i];
            $node.removeClass("" + attr + "-" + kind);
          }
          if (_ref1 = vertex[attr], __indexOf.call(val, _ref1) >= 0) {
            _results.push($node.addClass("" + attr + "-" + vertex[attr]));
          } else {
            _results.push(void 0);
          }
        } else {
          if (vertex[attr] === val) {
            _results.push($node.addClass(attr));
          } else {
            _results.push($node.removeClass(attr));
          }
        }
      }
      return _results;
    };

    GraphDisplay.prototype.vertexChanged = function(newv) {
      var k, oldv, v, _ref, _ref1;
      if (newv == null) {
        return false;
      }
      if (this.previousGraph == null) {
        return false;
      }
      if (!(oldv = this.previousGraph.vertex(newv.id))) {
        return false;
      }
      for (k in newv) {
        v = newv[k];
        if (v.type === "Vertex") {
          if (((_ref = oldv[k]) != null ? _ref.id : void 0) !== v.id) {
            return true;
          }
        } else {
          if (oldv[k] !== v) {
            return true;
          }
        }
      }
      for (k in newv) {
        v = newv[k];
        if (v.type === "Vertex") {
          if (((_ref1 = newv[k]) != null ? _ref1.id : void 0) !== v.id) {
            return true;
          }
        } else {
          if (newv[k] !== v) {
            return true;
          }
        }
      }
    };

    GraphDisplay.prototype.addConnection = function(edge, graph) {
      var con, _base, _base1, _base2, _name, _name1, _name2, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      if (((_ref = this.connections[edge.source.id]) != null ? _ref[edge.target.id] : void 0) != null) {
        return;
      }
      if (this.directed && (((_ref1 = this.connections[edge.target.id]) != null ? _ref1[edge.source.id] : void 0) != null)) {
        con = this.connections[edge.target.id][edge.source.id];
        con.addOverlay([
          "PlainArrow", {
            id: "backArrow",
            location: 4,
            direction: -1,
            width: 12,
            length: 8
          }
        ]);
        if (this.mode === 'display') {
          this.setLabel(con, graph);
        }
        ((_ref2 = (_base = ((_ref3 = this.backEdges) != null ? _ref3 : this.backEdges = {}))[_name = edge.source.id]) != null ? _ref2 : _base[_name] = {})[edge.target.id] = con;
      } else {
        con = this.jsPlumbInstance.connect({
          source: edge.source.id,
          target: edge.target.id
        });
        this.setOverlays(con, edge);
      }
      ((_ref4 = (_base1 = this.connections)[_name1 = edge.source.id]) != null ? _ref4 : _base1[_name1] = {})[edge.target.id] = con;
      if (!this.directed) {
        ((_ref5 = (_base2 = this.connections)[_name2 = edge.target.id]) != null ? _ref5 : _base2[_name2] = {})[edge.source.id] = con;
      }
      return con;
    };

    GraphDisplay.prototype.removeConnection = function(sourceId, targetId, graph) {
      var con, _ref, _ref1, _ref2, _ref3, _ref4;
      if (((_ref = this.backEdges) != null ? (_ref1 = _ref[sourceId]) != null ? _ref1[targetId] : void 0 : void 0) != null) {
        con = this.backEdges[sourceId][targetId];
        con.removeOverlay("backArrow");
        if (this.mode === 'display') {
          this.setLabel(con, graph);
        }
        delete this.backEdges[sourceId][targetId];
        return delete this.connections[sourceId][targetId];
      } else if (((_ref2 = this.backEdges) != null ? (_ref3 = _ref2[targetId]) != null ? _ref3[sourceId] : void 0 : void 0) != null) {
        con = this.backEdges[targetId][sourceId];
        this.jsPlumbInstance.detach(con);
        delete this.backEdges[targetId][sourceId];
        delete this.connections[sourceId][targetId];
        return this.addConnection(graph.edge(targetId, sourceId), graph);
      } else {
        con = (_ref4 = this.connections[sourceId]) != null ? _ref4[targetId] : void 0;
        if (con == null) {
          return;
        }
        this.jsPlumbInstance.detach(con);
        delete this.connections[sourceId][targetId];
        if (!this.directed) {
          return delete this.connections[targetId][sourceId];
        }
      }
    };

    GraphDisplay.prototype.updateConnections = function(graph, frame) {
      var attr, con, edge, edgeHack, source, style, target, val, _i, _len, _ref, _ref1, _ref2, _results,
        _this = this;
      if (this.colorEdges == null) {
        return;
      }
      this.eachConnection(function(sourceId, targetId, con) {
        _this.resetConnectionStyle(con);
        if (_this.mode === 'display') {
          return _this.setLabel(con, graph);
        }
      });
      _ref = this.colorEdges;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        style = _ref[_i];
        if (typeof style[0] === 'string') {
          _ref1 = style[0].split(/->/).map(function(v) {
            return frame[v];
          }), source = _ref1[0], target = _ref1[1];
          if (!((source != null) && (target != null))) {
            continue;
          }
          con = (_ref2 = this.connections[source.id]) != null ? _ref2[target.id] : void 0;
          if (con == null) {
            continue;
          }
          _results.push(con.setPaintStyle(this.customStyle(style[1])));
        } else if (typeof style[0] === 'function') {
          _results.push((function() {
            var _j, _len1, _ref3, _ref4, _ref5, _results1;
            _ref3 = graph.getEdges();
            _results1 = [];
            for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
              edge = _ref3[_j];
              edgeHack = {
                source: graph.vertex(edge.source),
                target: graph.vertex(edge.target)
              };
              for (attr in edge) {
                val = edge[attr];
                if ((_ref4 = !attr) === "source" || _ref4 === "target") {
                  edgeHack[attr] = val;
                }
              }
              if (style[0](edge) || style[0](edgeHack)) {
                con = (_ref5 = this.connections[edge.source.id]) != null ? _ref5[edge.target.id] : void 0;
                _results1.push(con.setPaintStyle(this.customStyle(style[1])));
              } else {
                _results1.push(void 0);
              }
            }
            return _results1;
          }).call(this));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    GraphDisplay.prototype.resetConnectionStyle = function(con) {
      return con.setPaintStyle(this.normalPaintStyle);
    };

    GraphDisplay.prototype.setOverlays = function(connection) {
      connection.removeAllOverlays();
      if (this.directed) {
        return connection.addOverlay([
          "PlainArrow", {
            location: -4,
            width: 12,
            length: 8
          }
        ]);
      }
    };

    GraphDisplay.prototype.setLabel = function(con, graph) {
      var attr, backEdge, backLoc, backVal, edge, loc, val, _ref, _ref1,
        _this = this;
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      con.removeOverlay("edgeLabel");
      con.removeOverlay("edgeLabel");
      if (graph.directed && graph.edge(con.targetId, con.sourceId)) {
        backEdge = graph.edge(con.targetId, con.sourceId);
        loc = 0.75;
        backLoc = 0.25;
      }
      edge = graph.edge(con.sourceId, con.targetId);
      if (this.edgeLabel[this.mode].constructor.name === 'Function') {
        val = this.edgeLabel[this.mode](edge);
        if (backEdge != null) {
          backVal = this.edgeLabel[this.mode](backEdge);
        }
      } else if (this.edgeLabel[this.mode].constructor.name === 'Array') {
        attr = this.edgeLabel[this.mode][0];
        val = Vamonos.rawToTxt((_ref = edge[attr]) != null ? _ref : "");
        if (backEdge != null) {
          backVal = Vamonos.rawToTxt((_ref1 = backEdge[attr]) != null ? _ref1 : "");
        }
      } else {
        return;
      }
      con.addOverlay([
        "Custom", {
          create: function() {
            var $label;
            $label = $("<div class='graph-label'>" + val + "</div>");
            return $("<div>").append($label);
          },
          id: "edgeLabel",
          location: loc != null ? loc : 0.5
        }
      ]);
      if (backEdge != null) {
        return con.addOverlay([
          "Custom", {
            create: function() {
              var $label;
              $label = $("<div class='graph-label'>" + backVal + "</div>");
              return $("<div>").append($label);
            },
            id: "edgeLabel",
            location: backLoc
          }
        ]);
      }
    };

    GraphDisplay.prototype.openDrawer = function(_arg) {
      var buttons, label;
      buttons = _arg.buttons, label = _arg.label;
      if (this.$drawer != null) {
        this.$drawer.html("<div class='graph-drawer'></div>");
      } else {
        this.$drawer = $("<div>", {
          "class": "graph-drawer"
        }).hide();
        this.$outer.after(this.$drawer);
      }
      $("<span class='label'>" + label + "</span>").appendTo(this.$drawer);
      if (buttons != null) {
        this.$drawer.append(buttons);
      }
      if (!this.$drawer.is(":visible")) {
        return this.$drawer.fadeIn("fast");
      }
    };

    GraphDisplay.prototype.closeDrawer = function() {
      if (this.$drawer == null) {
        return;
      }
      return this.$drawer.fadeOut("fast");
    };

    GraphDisplay.editColor = "#92E894";

    GraphDisplay.lightEdgeColor = "#cccccc";

    GraphDisplay.darkEdgeColor = "#aaaaaa";

    GraphDisplay.deletionColor = "#FF7D7D";

    GraphDisplay.lineWidth = 4;

    GraphDisplay.prototype.normalPaintStyle = {
      dashstyle: "0",
      lineWidth: GraphDisplay.lineWidth,
      strokeStyle: GraphDisplay.lightEdgeColor
    };

    GraphDisplay.prototype.potentialEdgePaintStyle = {
      dashstyle: "1 1",
      strokeStyle: GraphDisplay.editColor,
      lineWidth: GraphDisplay.lineWidth + 1
    };

    GraphDisplay.prototype.selectedPaintStyle = {
      lineWidth: GraphDisplay.lineWidth,
      strokeStyle: GraphDisplay.editColor
    };

    GraphDisplay.prototype.hoverPaintStyle = {
      lineWidth: GraphDisplay.lineWidth,
      strokeStyle: GraphDisplay.darkEdgeColor
    };

    GraphDisplay.prototype.customStyle = function(color) {
      return {
        lineWidth: GraphDisplay.lineWidth,
        strokeStyle: color
      };
    };

    return GraphDisplay;

  })();

  this.Vamonos["export"]({
    Widget: {
      GraphDisplay: GraphDisplay
    }
  });

}).call(this);

(function() {
  var Graph,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  Graph = (function() {

    Graph.description = "The Graph widget provides graph input functionality. It " + "uses GraphDisplay for functionality that is not related to input.";

    Graph.dependencies = ["Vamonos.Widget.GraphDisplay"];

    Graph.spec = {
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      defaultGraph: {
        type: "Graph",
        defaultValue: void 0,
        description: "the initial graph, as a Vamonos.DataStructure.Graph"
      },
      inputVars: {
        type: "Object",
        defaultValue: {},
        description: "a mapping of variable names to vertex ids of the form                 `{ var1: 'node1' }` for displaying variables that contain                 vertices."
      },
      editable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the graph allows user input"
      },
      tooltips: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to display tooltips"
      }
    };

    function Graph(args) {
      this.stopEditingLabel = __bind(this.stopEditingLabel, this);

      this.editAttribute = __bind(this.editAttribute, this);

      this.createEditableEdgeLabel = __bind(this.createEditableEdgeLabel, this);

      this.removePotentialEdge = __bind(this.removePotentialEdge, this);

      this.potentialEdgeTo = __bind(this.potentialEdgeTo, this);

      var a, k, v, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        ignoreExtraArgs: true
      });
      _ref = ["tooltips", "varName", "defaultGraph", "inputVars", "editable"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        a = _ref[_i];
        delete args[a];
      }
      if (this.editable) {
        this.theGraph = (_ref1 = this.defaultGraph) != null ? _ref1 : new Vamonos.DataStructure.Graph();
        _ref2 = this.inputVars;
        for (k in _ref2) {
          v = _ref2[k];
          this.inputVars[k] = this.theGraph.vertex(v);
        }
      } else {
        if ((_ref3 = args.minX) == null) {
          args.minX = 0;
        }
        if ((_ref4 = args.minY) == null) {
          args.minY = 0;
        }
        if ((_ref5 = args.resizable) == null) {
          args.resizable = false;
        }
      }
      this.edgeLabel = (_ref6 = (_ref7 = args.edgeLabel) != null ? _ref7.edit : void 0) != null ? _ref6 : args.edgeLabel;
      this.displayWidget = new Vamonos.Widget.GraphDisplay(args);
    }

    Graph.prototype.event = function() {
      var event, frame, options, type, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.registerVariables();
          this.updateVariables();
          return (_ref = this.displayWidget).event.apply(_ref, ["setup"].concat(__slice.call(options)));
        case "render":
          frame = options[0], type = options[1];
          if (frame[this.varName] != null) {
            this.displayWidget.fitGraph(frame[this.varName]);
            return this.displayWidget.draw(frame[this.varName], frame);
          } else {
            this.displayWidget.clearDisplay();
            return this.displayWidget.fitGraph(frame[this.varName]);
          }
          break;
        case "displayStart":
          this.displayWidget.mode = "display";
          if (this.tooltips) {
            return this.setDisplayToolTips();
          }
          break;
        case "editStart":
          if (this.editable) {
            this.displayWidget.mode = "edit";
            return this.startEditing();
          }
          break;
        case "editStop":
          if (this.editable) {
            return this.stopEditing();
          }
          break;
        case "checkErrors":
          if (this.editable) {
            return this.verifyInputVarsSet();
          }
      }
    };

    Graph.prototype.setDefaultToolTips = function() {
      this.displayWidget.$inner.prop("title", "Click on whitespace to add vertices, edges to modify them.");
      this.displayWidget.$inner.children(".vertex").prop("title", "Click a vertex to modify vertex attributes and edges.");
      return this.displayWidget.$inner.children(".graph-label").prop("title", "Click an edge attribute to modify it.");
    };

    Graph.prototype.setNodeSelectionToolTips = function() {
      this.displayWidget.$inner.prop("title", "Click on white space to deselect.");
      return this.displayWidget.$inner.children(".vertex").prop("title", "Click a vertex to add an edge or change selected vertex.");
    };

    Graph.prototype.setConnectionSelectionToolTips = function() {
      this.displayWidget.$inner.prop("title", "Click on white space to deselect. Click on another edge to select it.");
      return this.displayWidget.$inner.children(".vertex").prop("title", "Click a vertex to select it.");
    };

    Graph.prototype.setDisplayToolTips = function() {
      this.displayWidget.$inner.prop("title", "Drag a vertex to move it.");
      this.displayWidget.$inner.children(".vertex").removeAttr("title");
      return this.displayWidget.$inner.children(".graph-label").removeAttr("title");
    };

    Graph.prototype.startEditing = function() {
      this.displayWidget.draw(this.theGraph, this.inputVars);
      this.displayWidget.fitGraph(this.theGraph);
      if (this.editable) {
        this.setContainerEditBindings();
        this.setConnectionEditBindings();
        if (this.tooltips) {
          return this.setDefaultToolTips();
        }
      }
    };

    Graph.prototype.stopEditing = function() {
      if (this.editable) {
        this.deselect();
        this.unsetConnectionEditBindings();
        this.unsetContainerEditBindings();
        return this.updateVariables();
      }
    };

    Graph.prototype.registerVariables = function() {
      var key, _results;
      this.viz.registerVariable(this.varName);
      _results = [];
      for (key in this.inputVars) {
        _results.push(this.viz.registerVariable(key));
      }
      return _results;
    };

    Graph.prototype.updateVariables = function() {
      var graph, k, v, _ref, _results;
      graph = Vamonos.clone(this.theGraph);
      this.viz.setVariable(this.varName, graph);
      _ref = this.inputVars;
      _results = [];
      for (k in _ref) {
        v = _ref[k];
        if (v != null) {
          _results.push(this.viz.setVariable(k, graph.vertex(v.id), true));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Graph.prototype.verifyInputVarsSet = function() {
      var k, s, v;
      s = ((function() {
        var _ref, _results;
        _ref = this.inputVars;
        _results = [];
        for (k in _ref) {
          v = _ref[k];
          if (!(v != null)) {
            _results.push("" + this.varName + " says: please set " + k + "!");
          }
        }
        return _results;
      }).call(this)).join('\n');
      if (s.length) {
        return s;
      }
    };

    Graph.prototype.addVertex = function(vertex) {
      var newv, node;
      if (vertex == null) {
        vertex = {};
      }
      newv = this.theGraph.addVertex(vertex);
      this.displayWidget.draw(this.theGraph, this.inputVars);
      node = this.displayWidget.nodes[newv.id];
      this.selectNode(node);
      return node;
    };

    Graph.prototype.removeVertex = function(vid) {
      var k, v, _ref;
      this.deselect();
      this.theGraph.removeVertex(vid);
      _ref = this.inputVars;
      for (k in _ref) {
        v = _ref[k];
        if ((v != null) && v.id === vid) {
          this.inputVars[k] = void 0;
        }
      }
      return this.displayWidget.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.addEdge = function(sourceId, targetId) {
      var attrs, _ref;
      attrs = {};
      if ((_ref = this.edgeLabel) != null ? _ref.length : void 0) {
        attrs[this.edgeLabel[0]] = this.edgeLabel[1];
      }
      this.theGraph.addEdge(sourceId, targetId, attrs);
      this.displayWidget.draw(this.theGraph, this.inputVars);
      return this.setConnectionEditBindings();
    };

    Graph.prototype.removeEdge = function(sourceId, targetId) {
      if ('edge' === this.selected()) {
        this.deselect();
      }
      this.theGraph.removeEdge(sourceId, targetId);
      return this.displayWidget.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.setContainerEditBindings = function() {
      var _this = this;
      return this.displayWidget.$outer.on("click.vamonos-graph", function(e) {
        var $target, dwH, dwW, height, sourceId, targetId, width, x, y, _ref, _ref1, _ref2, _ref3;
        $target = $(e.target);
        if (!_this.selected()) {
          if ($target.is("div.vertex-contents")) {
            _this.selectNode($target.parent());
          }
          if ($target.is(_this.displayWidget.$inner)) {
            x = (_ref = e.offsetX) != null ? _ref : e.pageX - _this.displayWidget.$outer.offset().left;
            y = (_ref1 = e.offsetY) != null ? _ref1 : e.pageY - _this.displayWidget.$outer.offset().top;
            width = (_ref2 = _this.displayWidget._vertexWidth) != null ? _ref2 : 24;
            height = (_ref3 = _this.displayWidget._vertexHeight) != null ? _ref3 : 24;
            dwH = _this.displayWidget.$inner.height();
            dwW = _this.displayWidget.$inner.width();
            if ((y - (height / 2) > 0) && (y + (height / 2) < dwH) && (x - (width / 2) > 0) && (x + (width / 2) < dwW)) {
              _this.addVertex({
                x: x - (width / 2),
                y: y - (height / 2)
              });
            }
          }
        } else {
          if ($target.is("div.vertex-contents") && 'vertex' === _this.selected()) {
            sourceId = _this.$selectedNode.attr("id");
            targetId = $target.parent().attr("id");
            if (sourceId === targetId) {
              _this.deselect();
            } else if (_this.theGraph.edge(sourceId, targetId)) {
              _this.selectNode(_this.displayWidget.nodes[targetId]);
            } else {
              _this.addEdge(sourceId, targetId);
              _this.removePotentialEdge();
            }
          } else if ($target.is("div.vertex-contents") && 'edge' === _this.selected()) {
            _this.selectNode($target.parent());
          } else if ($target.is(_this.displayWidget.$inner)) {
            _this.deselect();
          }
        }
        return true;
      });
    };

    Graph.prototype.unsetContainerEditBindings = function() {
      return this.displayWidget.$outer.off("click.vamonos-graph");
    };

    Graph.prototype.setConnectionEditBindings = function() {
      var _this = this;
      return this.displayWidget.eachConnection(function(sourceId, targetId, con) {
        return _this.connectionBindings(con);
      });
    };

    Graph.prototype.connectionBindings = function(con) {
      var backLoc, loc,
        _this = this;
      con.bind("click", function(c) {
        return _this.selectConnection(c);
      });
      con.bind("mouseenter", function(c) {
        var _ref;
        if (c.id === ((_ref = _this.$selectedConnection) != null ? _ref.id : void 0)) {
          return;
        }
        return c.setPaintStyle(_this.displayWidget.hoverPaintStyle);
      });
      con.bind("mouseexit", function(c) {
        var _ref;
        if (c.id === ((_ref = _this.$selectedConnection) != null ? _ref.id : void 0)) {
          return;
        }
        return _this.displayWidget.resetConnectionStyle(c);
      });
      if (this.edgeLabel != null) {
        con.removeOverlay("editableEdgeLabel");
        con.removeOverlay("editableEdgeLabel");
        con.removeOverlay("edgeLabel");
        if (this.theGraph.directed && this.theGraph.edge(con.targetId, con.sourceId)) {
          loc = 0.75;
          backLoc = 0.25;
        } else {
          loc = 0.5;
        }
        con.addOverlay([
          "Custom", {
            create: function() {
              var edge;
              edge = _this.theGraph.edge(con.sourceId, con.targetId);
              return _this.createEditableEdgeLabel(edge, con);
            },
            id: "editableEdgeLabel",
            cssClass: "graph-label",
            location: loc
          }
        ]);
        if (backLoc != null) {
          return con.addOverlay([
            "Custom", {
              create: function() {
                var backEdge;
                backEdge = _this.theGraph.edge(con.targetId, con.sourceId);
                return _this.createEditableEdgeLabel(backEdge, con);
              },
              id: "editableEdgeLabel",
              cssClass: "graph-label",
              location: backLoc
            }
          ]);
        }
      }
    };

    Graph.prototype.unsetConnectionEditBindings = function() {
      var _this = this;
      return this.displayWidget.eachConnection(function(sourceId, targetId, con) {
        con.unbind("click");
        con.unbind("mouseenter");
        con.unbind("mouseexit");
        con.removeOverlay("editableEdgeLabel");
        return con.removeOverlay("editableEdgeLabel");
      });
    };

    Graph.prototype.selected = function() {
      if (this.$selectedNode != null) {
        return 'vertex';
      }
      if (this.$selectedConnection != null) {
        return 'edge';
      }
      return false;
    };

    Graph.prototype.selectNode = function(node) {
      var _this = this;
      this.stopEditingLabel();
      if ('vertex' === this.selected()) {
        this.deselectNode();
      }
      if ('edge' === this.selected()) {
        this.deselectConnection();
      }
      this.$selectedNode = node;
      this.$selectedNode.addClass("selected");
      this.$selectedNode.removeClass('hovering');
      this.$others = this.$selectedNode.siblings("div.vertex").children("div.vertex-contents");
      this.$others.on("mouseenter.vamonos-graph", function(e) {
        return _this.potentialEdgeTo($(e.target).parent());
      });
      this.$others.on("mouseleave.vamonos-graph", this.removePotentialEdge);
      this.openDrawer();
      if (this.tooltips) {
        return this.setNodeSelectionToolTips();
      }
    };

    Graph.prototype.selectConnection = function(con) {
      if ('vertex' === this.selected()) {
        this.deselectNode();
      }
      if ('edge' === this.selected()) {
        this.deselectConnection();
      }
      this.$selectedConnection = con;
      this.$selectedConnection.setPaintStyle(this.displayWidget.selectedPaintStyle);
      this.openDrawer();
      if (this.tooltips) {
        return this.setConnectionSelectionToolTips();
      }
    };

    Graph.prototype.deselect = function() {
      this.deselectNode();
      this.deselectConnection();
      this.closeDrawer();
      if (this.tooltips) {
        return this.setDefaultToolTips();
      }
    };

    Graph.prototype.deselectNode = function() {
      if (this.$selectedNode == null) {
        return;
      }
      if (this.possibleEdge != null) {
        this.displayWidget.jsPlumbInstance.detach(this.possibleEdge);
      }
      this.$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph");
      this.$selectedNode.removeClass("selected");
      return this.$selectedNode = void 0;
    };

    Graph.prototype.deselectConnection = function() {
      if (this.$selectedConnection == null) {
        return;
      }
      this.displayWidget.resetConnectionStyle(this.$selectedConnection);
      this.$selectedConnection = void 0;
      return this.removePotentialEdge();
    };

    Graph.prototype.potentialEdgeTo = function(node) {
      var sourceId, targetId, _ref, _ref1;
      sourceId = this.$selectedNode.attr("id");
      targetId = node.attr("id");
      if (((_ref = this.displayWidget.connections[sourceId]) != null ? _ref[targetId] : void 0) != null) {
        return;
      }
      if (this.theGraph.directed && (((_ref1 = this.displayWidget.connections[targetId]) != null ? _ref1[sourceId] : void 0) != null)) {
        this.potentialEdge = this.displayWidget.connections[targetId][sourceId];
        this.potentialEdge.addOverlay([
          "PlainArrow", {
            id: "parrow",
            location: 4,
            direction: -1,
            width: 12,
            length: 8
          }
        ]);
        this.potentialEdge.setPaintStyle(this.displayWidget.potentialEdgePaintStyle);
        return this.potentialEdgeIsBidirectional = true;
      } else {
        this.potentialEdge = this.displayWidget.jsPlumbInstance.connect({
          source: sourceId,
          target: targetId,
          paintStyle: this.displayWidget.potentialEdgePaintStyle
        });
        return this.displayWidget.setOverlays(this.potentialEdge);
      }
    };

    Graph.prototype.removePotentialEdge = function() {
      if (this.potentialEdge == null) {
        return;
      }
      if (this.potentialEdgeIsBidirectional) {
        this.potentialEdge.removeOverlay("parrow");
        this.potentialEdge.setPaintStyle(this.displayWidget.normalPaintStyle);
        this.potentialEdgeIsBidirectional = void 0;
      } else {
        this.displayWidget.jsPlumbInstance.detach(this.potentialEdge);
      }
      return this.potentialEdge = void 0;
    };

    Graph.prototype.openDrawer = function() {
      var arr, buttons, edge, label, nametag, sourceId, targetId, type, v, vtx, _fn,
        _this = this;
      type = this.selected();
      if (type === 'vertex') {
        vtx = this.theGraph.vertex(this.$selectedNode.attr("id"));
        label = "vertex&nbsp;&nbsp;" + vtx.name + "&nbsp;&nbsp;";
        buttons = [];
        _fn = function(v, vtx, buttons, inputVars, displayWidget, theGraph) {
          var $b,
            _this = this;
          $b = $("<button>", {
            text: "" + v,
            title: "Set " + v + "=" + vtx.name
          });
          $b.on("click.vamonos-graph", function(e) {
            inputVars[v] = vtx;
            return displayWidget.draw(theGraph, inputVars);
          });
          return buttons.push($b);
        };
        for (v in this.inputVars) {
          _fn(v, vtx, buttons, this.inputVars, this.displayWidget, this.theGraph);
        }
        buttons.push($("<button>", {
          text: "del",
          title: "Delete " + vtx.name
        }).on("click.vamonos-graph", function(e) {
          return _this.removeVertex(vtx.id);
        }));
      } else if (type === 'edge') {
        sourceId = this.$selectedConnection.sourceId;
        targetId = this.$selectedConnection.targetId;
        edge = this.theGraph.edge(sourceId, targetId);
        if (this.theGraph.directed && !this.theGraph.edge(targetId, sourceId)) {
          arr = "&rarr;";
        } else {
          arr = "-";
        }
        nametag = edge.source.name + "&nbsp;" + arr + "&nbsp;" + edge.target.name;
        label = "edge&nbsp;&nbsp;" + nametag + "&nbsp;&nbsp;";
        buttons = [
          $("<button>", {
            text: "del",
            title: "Delete " + edge.source.name + "->" + edge.target.name
          }).on("click.vamonos-graph", function(e) {
            if (_this.theGraph.directed && _this.theGraph.edge(targetId, sourceId)) {
              _this.removeEdge(edge.target.id, edge.source.id);
            }
            return _this.removeEdge(edge.source.id, edge.target.id);
          })
        ];
      } else {
        return;
      }
      return this.displayWidget.openDrawer({
        buttons: buttons,
        label: label
      });
    };

    Graph.prototype.closeDrawer = function() {
      return this.displayWidget.closeDrawer();
    };

    Graph.prototype.createEditableEdgeLabel = function(edge, con) {
      var $label, val, _ref,
        _this = this;
      val = Vamonos.rawToTxt((_ref = edge[this.edgeLabel[0]]) != null ? _ref : "");
      return $label = $("<div>" + val + "</div>").on("click", function() {
        _this.selectConnection(con);
        return _this.editAttribute($label, edge);
      });
    };

    Graph.prototype.editAttribute = function($label, edge) {
      var returnFunc, valFunc,
        _this = this;
      valFunc = function() {
        var _ref;
        return (_ref = edge[_this.edgeLabel[0]]) != null ? _ref : "";
      };
      returnFunc = function(newVal) {
        var val;
        val = Vamonos.txtToRaw(newVal);
        if (val != null) {
          edge[_this.edgeLabel[0]] = val;
        }
        return Vamonos.rawToTxt(val);
      };
      return Vamonos.editableValue($label, valFunc, returnFunc);
    };

    Graph.prototype.stopEditingLabel = function() {
      return this.displayWidget.$inner.find("input.inline-input").trigger("something-was-selected");
    };

    return Graph;

  })();

  this.Vamonos["export"]({
    Widget: {
      Graph: Graph
    }
  });

}).call(this);

(function() {
  var Hardcoded,
    __slice = [].slice;

  Hardcoded = (function() {

    Hardcoded.description = "Hardcoded takes an object containing mappings of variable names to \n" + "default values.\n" + "\n" + ">     new Vamonos.Widget.Hardcoded({ \n" + ">         i: 1, \n" + ">         A: [3,1,4] \n" + ">     }) \n" + "\n" + "Hardcoded has a couple magical variable names: `breakpoints` and \n" + "`watch`. `breakpoints` is used for setting breakpoints without a \n" + "Pseudocode widget. It takes a list of linenumbers. \n" + "\n" + ">     new Vamonos.Widget.Hardcoded({ breakpoints: [3,1,4] }) \n" + "\n" + "`watch` takes a list of variable names to add to watchVars. \n" + "\n" + ">     new Vamonos.Widget.Hardcoded({ watch: [\"i\", \"k\"] }) " + "\n" + "Note: setting `_callStack` as a watch var will break on procedure " + "calls and returns";

    function Hardcoded(args) {
      this.args = args != null ? args : {};
    }

    Hardcoded.prototype.event = function() {
      var event, name, options, value, _ref, _ref1, _results, _results1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          _ref = this.args;
          _results = [];
          for (name in _ref) {
            value = _ref[name];
            if (name === "breakpoints") {
              _results.push(this.setBreakpoints(value));
            } else if (name === "watch") {
              _results.push(this.setWatchVars(value));
            } else {
              _results.push(this.viz.setVariable(name, value, true));
            }
          }
          return _results;
          break;
        case "editStop":
          _ref1 = this.args;
          _results1 = [];
          for (name in _ref1) {
            value = _ref1[name];
            if (name !== "breakpoints" && name !== "watch") {
              _results1.push(this.viz.setVariable(name, value, true));
            }
          }
          return _results1;
      }
    };

    Hardcoded.prototype.setBreakpoints = function(breakpoints) {
      var context, n, points, _i, _len, _results, _results1;
      if (breakpoints.constructor.name === 'Array') {
        _results = [];
        for (_i = 0, _len = breakpoints.length; _i < _len; _i++) {
          n = breakpoints[_i];
          _results.push(this.viz.setBreakpoint(n, "main"));
        }
        return _results;
      } else {
        _results1 = [];
        for (context in breakpoints) {
          points = breakpoints[context];
          _results1.push((function() {
            var _j, _len1, _results2;
            _results2 = [];
            for (_j = 0, _len1 = points.length; _j < _len1; _j++) {
              n = points[_j];
              _results2.push(this.viz.setBreakpoint(n, context.proc));
            }
            return _results2;
          }).call(this));
        }
        return _results1;
      }
    };

    Hardcoded.prototype.setWatchVars = function(vars) {
      var v, _i, _len, _results;
      if (vars.constructor.name === 'Array') {
        _results = [];
        for (_i = 0, _len = vars.length; _i < _len; _i++) {
          v = vars[_i];
          _results.push(this.viz.setWatchVar(v));
        }
        return _results;
      } else if (typeof vars === 'string') {
        return this.viz.setWatchVar(vars);
      }
    };

    return Hardcoded;

  })();

  this.Vamonos["export"]({
    Widget: {
      Hardcoded: Hardcoded
    }
  });

}).call(this);

(function() {
  var Matrix,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Matrix = (function() {

    Matrix.description = "Displays a two dimensional array.";

    Matrix.dependencies = ["Vamonos.Widget.ArrayGuts"];

    Matrix.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      showChanges: {
        type: ["String", "Array"],
        defaultValue: "next",
        description: "type of frame shifts to highlight changes at, " + "can be multiple types with an array of strings"
      },
      cssRules: {
        type: "Array",
        defaultValue: [],
        description: "an array of quadruples of the form [row/column, " + "comparison, index-variable-expr, css-class] " + "where every row/column in the matrix that matches the " + "comparason against the given index-variable-expr receives " + "the given css class."
      },
      showIndices: {
        type: "Array",
        defaultValue: [],
        description: "an array of doubles of the form [row/column, " + "index-variable-expr] that show the text of the " + "index-variable-expr on the row/column it corresponds to."
      },
      cellFormat: {
        type: "Function",
        defaultValue: void 0,
        description: "A function that takes the raw contents of each entry and " + "returns the html to be displayed."
      }
    };

    function Matrix(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.cellFormat) == null) {
        this.cellFormat = Vamonos.rawToTxt;
      }
      this.$container = Vamonos.jqueryify(this.container);
      this.rows = [];
      this.cols = [];
      this.$cells = {};
      this.$rows = {};
      this.$colAnnotations = {};
      this.$rowAnnotations = {};
      this.$table = $("<table>", {
        "class": "matrix"
      });
      this.$container.append(this.$table);
    }

    Matrix.prototype.event = function() {
      var event, i, options, v, _, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          _ref = this.cssRules;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], _ = _ref1[0], _ = _ref1[1], i = _ref1[2], _ = _ref1[3];
            _ref2 = this.virtualIndexDependents(i);
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
              v = _ref2[_j];
              this.viz.registerVariable(v);
            }
          }
          _ref3 = this.showIndices;
          _results = [];
          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            _ref4 = _ref3[_k], _ = _ref4[0], i = _ref4[1];
            _results.push((function() {
              var _l, _len3, _ref5, _results1;
              _ref5 = this.virtualIndexDependents(i);
              _results1 = [];
              for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
                v = _ref5[_l];
                _results1.push(this.viz.registerVariable(v));
              }
              return _results1;
            }).call(this));
          }
          return _results;
          break;
        case "editStart":
          return this.$container.hide();
        case "displayStart":
          this.matrixReset();
          return this.$container.show();
        case "render":
          return this.render.apply(this, options);
      }
    };

    Matrix.prototype.render = function(frame, type) {
      var c, className, colIndices, compare, home, i, left, leftIndex, newCols, newMatrix, newRows, r, right, rightIndex, rowIndices, showChange, target, tmpFrame, v, _i, _j, _k, _l, _len, _len1, _len10, _len11, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results, _s, _t;
      newMatrix = (_ref = frame[this.varName]) != null ? _ref : {};
      this.$table.find("td").removeClass();
      _ref1 = this.getRows(newMatrix);
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        r = _ref1[_i];
        this.matrixEnsureRow(r);
      }
      _ref2 = this.getCols(newMatrix);
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        c = _ref2[_j];
        this.matrixEnsureColumn(c);
      }
      newRows = this.getRows(newMatrix);
      _ref3 = this.rows.slice(0);
      for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
        r = _ref3[_k];
        if (__indexOf.call(newRows, r) < 0) {
          this.matrixRemoveRow(r);
        }
      }
      newCols = this.getCols(newMatrix);
      _ref4 = this.cols.slice(0);
      for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
        c = _ref4[_l];
        if (__indexOf.call(newCols, c) < 0) {
          this.matrixRemoveCol(c);
        }
      }
      tmpFrame = {};
      for (v in frame) {
        tmpFrame[v] = frame[v];
      }
      _ref5 = this.cssRules;
      for (_m = 0, _len4 = _ref5.length; _m < _len4; _m++) {
        _ref6 = _ref5[_m], leftIndex = _ref6[0], compare = _ref6[1], rightIndex = _ref6[2], className = _ref6[3];
        _ref7 = this.rows;
        for (_n = 0, _len5 = _ref7.length; _n < _len5; _n++) {
          r = _ref7[_n];
          tmpFrame.row = r;
          _ref8 = this.cols;
          for (_o = 0, _len6 = _ref8.length; _o < _len6; _o++) {
            c = _ref8[_o];
            tmpFrame.col = c;
            left = this.virtualIndex(tmpFrame, leftIndex);
            right = this.virtualIndex(tmpFrame, rightIndex);
            if (this.comparator(compare, left, right)) {
              this.$cells[r][c].addClass(className);
            }
          }
        }
      }
      showChange = __indexOf.call(this.showChanges, type) >= 0;
      _ref9 = this.rows;
      for (_p = 0, _len7 = _ref9.length; _p < _len7; _p++) {
        r = _ref9[_p];
        _ref10 = this.cols;
        for (_q = 0, _len8 = _ref10.length; _q < _len8; _q++) {
          c = _ref10[_q];
          this.matrixSetFromRaw(r, c, (_ref11 = newMatrix[r]) != null ? _ref11[c] : void 0, showChange);
        }
      }
      rowIndices = {};
      colIndices = {};
      _ref12 = this.showIndices;
      for (_r = 0, _len9 = _ref12.length; _r < _len9; _r++) {
        _ref13 = _ref12[_r], type = _ref13[0], i = _ref13[1];
        home = type === "row" ? rowIndices : colIndices;
        target = "" + this.virtualIndex(frame, i);
        if (home[target] != null) {
          home[target].push(i);
        } else {
          home[target] = [i];
        }
      }
      _ref14 = this.rows;
      for (_s = 0, _len10 = _ref14.length; _s < _len10; _s++) {
        r = _ref14[_s];
        this.$rowAnnotations[r].html(rowIndices[r] != null ? rowIndices[r].join(", ") : "");
      }
      _ref15 = this.cols;
      _results = [];
      for (_t = 0, _len11 = _ref15.length; _t < _len11; _t++) {
        c = _ref15[_t];
        _results.push(this.$colAnnotations[c].html(colIndices[c] != null ? colIndices[c].join(", ") : ""));
      }
      return _results;
    };

    Matrix.prototype.virtualIndex = function(frame, indexStr) {
      var prevOp, t, thisTerm, tokens, total, _i, _len;
      if (!indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)) {
        return null;
      }
      tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g);
      if (tokens.length === 1) {
        return frame[tokens[0]];
      }
      prevOp = "+";
      total = 0;
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        t = tokens[_i];
        if (prevOp != null) {
          thisTerm = Vamonos.isNumber(t) ? parseInt(t) : parseInt(frame[t]);
          if (thisTerm == null) {
            return null;
          }
          switch (prevOp) {
            case "+":
              total += thisTerm;
              break;
            case "-":
              total -= thisTerm;
          }
          prevOp = null;
        } else {
          prevOp = t;
        }
      }
      return total;
    };

    Matrix.prototype.virtualIndexDependents = function(indexStr) {
      if (!indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)) {
        return [];
      }
      return indexStr.match(/([a-zA-Z_]+)/g);
    };

    Matrix.prototype.getRows = function(matrix) {
      var r, v;
      r = (function() {
        var _results;
        _results = [];
        for (v in matrix) {
          _results.push("" + v);
        }
        return _results;
      })();
      return this.smartSort(r);
    };

    Matrix.prototype.getCols = function(matrix) {
      var c, k, r;
      c = [];
      for (r in matrix) {
        for (k in matrix[r]) {
          if (__indexOf.call(c, k) < 0) {
            c.push("" + k);
          }
        }
      }
      return this.smartSort(c);
    };

    Matrix.prototype.smartSort = function(list) {
      if (list.filter(function(z) {
        return !Vamonos.isNumber(z);
      }).length) {
        return list.sort(function(a, b) {
          return a.localeCompare(b);
        });
      } else {
        return list.sort(function(a, b) {
          return parseInt(a) - parseInt(b);
        });
      }
    };

    Matrix.prototype.matrixEnsureRow = function(newRowName, showChanges) {
      var $newRow, c, newPos, _i, _len, _ref;
      newRowName = "" + newRowName;
      if (__indexOf.call(this.rows, newRowName) >= 0) {
        return;
      }
      this.rows.push(newRowName);
      this.smartSort(this.rows);
      newPos = this.rows.indexOf(newRowName);
      this.theMatrix[newRowName] = {};
      this.$rows[newRowName] = $newRow = $("<tr>").append($("<th>", {
        "class": "matrix-row-label",
        text: newRowName
      }));
      this.$cells[newRowName] = {};
      _ref = this.cols;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        $newRow.append(this.$cells[newRowName][c] = $("<td>"));
      }
      $newRow.append(this.$rowAnnotations[newRowName] = $("<th>", {
        "class": "matrix-row-annotation"
      }));
      this.$table.find("tr:nth-child(" + (newPos + 1) + ")").after($newRow);
      if (showChanges) {
        return $newRow.find("td").addClass('changed');
      }
    };

    Matrix.prototype.matrixEnsureColumn = function(newColName, showChanges) {
      var newPos, r, _i, _len, _ref, _results,
        _this = this;
      newColName = "" + newColName;
      if (__indexOf.call(this.cols, newColName) >= 0) {
        return;
      }
      this.cols.push(newColName);
      this.smartSort(this.cols);
      newPos = this.cols.indexOf(newColName);
      this.$table.find("tr > :nth-child(" + (newPos + 1) + ")").each(function(i, e) {
        if (i === 0) {
          return $(e).after($("<th>", {
            "class": "matrix-col-label",
            text: newColName
          }));
        } else if (i === _this.rows.length + 1) {
          return $(e).after(_this.$colAnnotations[newColName] = $("<th>", {
            "class": "matrix-col-annotation"
          }));
        } else {
          return $(e).after(_this.$cells[_this.rows[i - 1]][newColName] = $("<td>"));
        }
      });
      if (showChanges) {
        _ref = this.rows;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          r = _ref[_i];
          _results.push(this.$cells[r][newColName].addClass("changed"));
        }
        return _results;
      }
    };

    Matrix.prototype.matrixRemoveRow = function(rowName) {
      var pos;
      rowName = "" + rowName;
      if (__indexOf.call(this.rows, rowName) < 0) {
        return;
      }
      pos = this.rows.indexOf(rowName);
      this.rows.splice(pos, 1);
      this.$table.find("tr:nth-child(" + (pos + 2) + ")").remove();
      delete this.$rowAnnotations[rowName];
      delete this.$cells[rowName];
      return delete this.theMatrix[rowName];
    };

    Matrix.prototype.matrixRemoveCol = function(colName) {
      var pos, r, _i, _len, _ref, _results;
      colName = "" + colName;
      if (__indexOf.call(this.cols, colName) < 0) {
        return;
      }
      pos = this.cols.indexOf(colName);
      this.cols.splice(pos, 1);
      this.$table.find("tr > :nth-child(" + (pos + 2) + ")").remove();
      delete this.$colAnnotations[colName];
      _ref = this.rows;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        r = _ref[_i];
        delete this.$cells[r][colName];
        _results.push(delete this.theMatrix[r][colName]);
      }
      return _results;
    };

    Matrix.prototype.matrixSetFromRaw = function(i, j, rawVal, showChanges) {
      var $cell, newhtml, oldhtml;
      this.theMatrix[i][j] = rawVal;
      $cell = this.$cells[i][j];
      if ($cell == null) {
        return;
      }
      oldhtml = $cell.html();
      newhtml = rawVal != null ? "" + this.cellFormat(rawVal) : "";
      if (oldhtml !== newhtml) {
        $cell.html(newhtml);
        if (showChanges) {
          return this.markChanged(i, j);
        }
      }
    };

    Matrix.prototype.matrixReset = function() {
      this.theMatrix = {};
      this.$cells = {};
      this.rows = [];
      this.$rows = {};
      this.cols = [];
      this.$rowAnnotations = {};
      this.$colAnnotations = {};
      return this.$table.html("<tr><th></th><th></th></tr><tr><th></th><th></th></tr>");
    };

    Matrix.prototype.markChanged = function(i, j) {
      var dup;
      this.$cells[i][j].addClass("changed");
      dup = this.$cells[i][j].clone();
      this.$cells[i][j].replaceWith(dup);
      return this.$cells[i][j] = dup;
    };

    Matrix.prototype.shallowCopy = function(matrix) {
      var c, cols, r, res, rows, _i, _j, _len, _len1;
      rows = this.getRows(matrix);
      cols = this.getCols(matrix);
      res = {};
      for (_i = 0, _len = rows.length; _i < _len; _i++) {
        r = rows[_i];
        res[r] = {};
        for (_j = 0, _len1 = cols.length; _j < _len1; _j++) {
          c = cols[_j];
          res[r][c] = matrix[r][c];
        }
      }
      return res;
    };

    Matrix.prototype.comparator = function(str, a, b) {
      var res;
      if (Vamonos.isNumber(a) && Vamonos.isNumber(b)) {
        res = parseInt(a) - parseInt(b);
      } else {
        res = a.localeCompare(b);
      }
      switch (str) {
        case "<":
          return res < 0;
        case "<=":
          return res <= 0;
        case "=":
        case "==":
          return res === 0;
        case ">":
          return res > 0;
        case ">=":
          return res >= 0;
      }
    };

    return Matrix;

  })();

  this.Vamonos["export"]({
    Widget: {
      Matrix: Matrix
    }
  });

}).call(this);

(function() {
  var ModeLine,
    __slice = [].slice;

  ModeLine = (function() {

    ModeLine.description = "Display a string that changes depending upon which mode " + "the visualizer is in.";

    ModeLine.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      editModeText: {
        type: "String",
        description: "message ModeLine displays in editMode"
      },
      displayModeText: {
        type: "String",
        description: "message ModeLine displays in displayMode"
      }
    };

    function ModeLine(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.$container = Vamonos.jqueryify(this.container);
    }

    ModeLine.prototype.event = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "editStart":
          return this.$container.html(this.editModeText);
        case "displayStart":
          return this.$container.html(this.displayModeText);
      }
    };

    return ModeLine;

  })();

  this.Vamonos["export"]({
    Widget: {
      ModeLine: ModeLine
    }
  });

}).call(this);

(function() {
  var ParallelArrays,
    __slice = [].slice;

  ParallelArrays = (function() {

    ParallelArrays.description = "Display multiple arrays, all lined up nice.";

    ParallelArrays.dependencies = ["Vamonos.Widget.ArrayGuts"];

    ParallelArrays.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      }
    };

    function ParallelArrays(sharedOptions) {
      var combinedOptions, k, specificOptions, tableContainer, v, _i, _len, _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: sharedOptions,
        ignoreExtraArgs: true
      });
      this.$container = Vamonos.jqueryify(sharedOptions.container);
      delete sharedOptions.container;
      tableContainer = $("<table>", {
        "class": "array"
      });
      this.$container.append(tableContainer);
      this.guts = [];
      _ref = sharedOptions.arrays;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        specificOptions = _ref[_i];
        combinedOptions = Vamonos.clone(sharedOptions);
        delete combinedOptions.arrays;
        for (k in specificOptions) {
          v = specificOptions[k];
          combinedOptions[k] = v;
        }
        combinedOptions.tableContainer = tableContainer;
        combinedOptions._dummyIndexZero = true;
        this.guts.push(new Vamonos.Widget.ArrayGuts(combinedOptions));
      }
    }

    ParallelArrays.prototype.event = function() {
      var args, g, _i, _len, _ref, _results;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _ref = this.guts;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        g = _ref[_i];
        _results.push(g.event.apply(g, args));
      }
      return _results;
    };

    return ParallelArrays;

  })();

  this.Vamonos["export"]({
    Widget: {
      ParallelArrays: ParallelArrays
    }
  });

}).call(this);

(function() {
  var Pseudocode,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Pseudocode = (function() {

    Pseudocode.description = "The Pseudocode widget prettily formats the pseudocode in " + "the div you provide it. It also visualizes and allows editing of " + "breakpoints.";

    Pseudocode.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      editableBreakpoints: {
        type: "Boolean",
        defaultValue: true,
        description: "whether breakpoints can be modified with this widget"
      },
      breakpoints: {
        type: ["Array", "String"],
        defaultValue: [],
        description: "initial breakpoints, as an array of line numbers, " + "or `'all'` for all breakpoints"
      },
      procedureName: {
        type: "String",
        defaultValue: "main",
        description: "the name of the procedure in the algorithm"
      }
    };

    function Pseudocode(args) {
      var nLines, _i, _ref, _ref1, _results;
      if (typeof args !== "object") {
        args = {
          container: args
        };
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.locals) == null) {
        this.locals = [];
      }
      if ((_ref1 = this.args) == null) {
        this.args = [];
      }
      this.mostRecent = 0;
      nLines = this.formatContainer(Vamonos.jqueryify(this.container));
      if (this.breakpoints === "all") {
        this.breakpoints = (function() {
          _results = [];
          for (var _i = 1; 1 <= nLines ? _i <= nLines : _i >= nLines; 1 <= nLines ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
      }
    }

    Pseudocode.prototype.event = function() {
      var b, event, frame, options, type, _i, _len, _ref, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          _ref = this.breakpoints;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            b = _ref[_i];
            _results.push(this.viz.setBreakpoint(b, this.procedureName));
          }
          return _results;
          break;
        case "editStart":
          if (this.editableBreakpoints) {
            this.enableBreakpointSelection();
          }
          this.showBreakpoints();
          return this.$tbl.find("div.pseudocode-breakpoint").addClass("pseudocode-editmode-breakpoint");
        case "editStop":
          return this.$tbl.find("div.pseudocode-breakpoint").removeClass("pseudocode-editmode-breakpoint");
        case "displayStart":
          if (this.editableBreakpoints) {
            this.disableBreakpointSelection();
          }
          return this.showBreakpoints();
        case "displayStop":
          this.clear();
          return this.$tbl.find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint");
        case "render":
          frame = options[0], type = options[1];
          return this.render(frame);
      }
    };

    Pseudocode.prototype.render = function(frame) {
      var next, prev;
      this.clear();
      if (this.procedureName !== frame._procName) {
        return;
      }
      next = frame._nextLine;
      prev = frame._prevLine;
      if (prev != null) {
        this.addClassToLine(prev, "pseudocode-previous");
      }
      if (next != null) {
        this.addClassToLine(next, "pseudocode-next");
      }
      if (frame._snapshotReasons.breakpoint != null) {
        return this.getLine(frame._nextLine).find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint");
      }
    };

    Pseudocode.prototype.clear = function() {
      this.$tbl.find("tr").removeClass("pseudocode-next");
      this.$tbl.find("tr").removeClass("pseudocode-previous");
      return this.$tbl.find("div.pseudocode-breakpoint").removeClass("pseudocode-active-breakpoint");
    };

    Pseudocode.prototype.addClassToLine = function(n, klass) {
      if (Vamonos.isNumber(n)) {
        return this.$tbl.find("tr[vamonos-linenumber=" + n + "]").addClass(klass);
      }
    };

    Pseudocode.prototype.keywords = "for while if else elseif elsif elif begin end then repeat until               to downto by return error throw and or swap each".split(/\s+/).sort(function(a, b) {
      return b.length - a.length;
    });

    Pseudocode.prototype.enableBreakpointSelection = function() {
      var gutter,
        _this = this;
      gutter = this.$tbl.find("td.pseudocode-gutter");
      gutter.on("mousedown", function(event) {
        var n;
        n = $(event.target).closest("tr").attr("vamonos-linenumber");
        _this.toggleBreakpoint(n);
        _this.mouseDownMode = _this.getBreakpointStatus(n);
        return false;
      });
      $(window).on("mouseup.vamonos", function() {
        return _this.mouseDownMode = null;
      });
      gutter.on("mouseover", function() {
        var n;
        if (_this.mouseDownMode == null) {
          return;
        }
        n = $(event.target).closest("tr").attr("vamonos-linenumber");
        switch (_this.mouseDownMode) {
          case "on":
            return _this.setBreakpoint(n);
          case "off":
            return _this.unsetBreakpoint(n);
        }
      });
      return gutter.prop("title", "Click to toggle a breakpoint on this line");
    };

    Pseudocode.prototype.disableBreakpointSelection = function() {
      var gutter;
      gutter = this.$tbl.find("td.pseudocode-gutter");
      gutter.off("mousedown").off("mouseover").prop("title", "");
      $(window).off("mouseup.vamonos");
      return this.mouseDownMode = null;
    };

    Pseudocode.prototype.getBreakpointStatus = function(n) {
      if (!Vamonos.isNumber(n)) {
        return;
      }
      n = parseInt(n);
      if (__indexOf.call(this.viz.getBreakpoints(this.procedureName), n) >= 0) {
        return "on";
      } else {
        return "off";
      }
    };

    Pseudocode.prototype.setBreakpoint = function(n) {
      if (this.getBreakpointStatus(n) !== "off") {
        return;
      }
      n = parseInt(n);
      this.getLine(n).find("td.pseudocode-gutter").append($("<div>", {
        "class": "pseudocode-breakpoint"
      }));
      return this.viz.setBreakpoint(parseInt(n), this.procedureName);
    };

    Pseudocode.prototype.unsetBreakpoint = function(n) {
      if (this.getBreakpointStatus(n) !== "on") {
        return;
      }
      n = parseInt(n);
      this.getLine(n).find("td.pseudocode-gutter").html("");
      return this.viz.removeBreakpoint(n, this.procedureName);
    };

    Pseudocode.prototype.toggleBreakpoint = function(n) {
      switch (this.getBreakpointStatus(n)) {
        case "on":
          return this.unsetBreakpoint(n);
        case "off":
          return this.setBreakpoint(n);
      }
    };

    Pseudocode.prototype.showBreakpoints = function() {
      var n, _i, _len, _ref, _results;
      this.$tbl.find("td.pseudocode-gutter div.pseudocode-breakpoint").remove();
      _ref = this.viz.getBreakpoints(this.procedureName);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        _results.push(this.getLine(n).find("td.pseudocode-gutter").append($("<div>", {
          "class": "pseudocode-breakpoint"
        })));
      }
      return _results;
    };

    Pseudocode.prototype.getLine = function(n) {
      return this.$tbl.find("tr[vamonos-linenumber=" + n + "]");
    };

    Pseudocode.prototype.formatContainer = function($container) {
      var className, html_lines, indents, keywordsPattern, line, lineNumber, lineNumberStr, minWhitespace, numIndents, title, _i, _len, _ref;
      title = $container.attr("title");
      $container.removeAttr("title");
      html_lines = $container.html().split(/\r\n|\r|\n/).filter(function(l) {
        return l.match(/\S/);
      });
      this.$tbl = $("<table>", {
        "class": "pseudocode"
      });
      this.$tbl.append($("<tr>", {
        "class": "pseudocode-header"
      }).append($("<td>", {
        "class": "pseudocode-title",
        colspan: 3,
        text: title
      })));
      minWhitespace = ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = html_lines.length; _i < _len; _i++) {
          line = html_lines[_i];
          _results.push(line.match(/^\s*/)[0].length);
        }
        return _results;
      })()).reduce(function(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      });
      keywordsPattern = new RegExp("\\b(" + (this.keywords.join("|")) + ")\\b", "gi");
      lineNumber = 1;
      for (_i = 0, _len = html_lines.length; _i < _len; _i++) {
        line = html_lines[_i];
        _ref = line.match(/^\s*(\/\/|\#)/) ? ["", "pseudocode-comment"] : [lineNumber++, "pseudocode-text"], lineNumberStr = _ref[0], className = _ref[1];
        if (className !== "pseudocode-comment") {
          line = line.replace(keywordsPattern, function(s) {
            return "<b>" + s + "</b>";
          });
        }
        numIndents = Math.floor((line.match(/^\s*/)[0].length - minWhitespace) / 4);
        indents = Array(numIndents + 1).join("<span class=pseudocode-indent></span>");
        this.$tbl.append($("<tr>", {
          "class": "pseudocode-line",
          "vamonos-linenumber": lineNumberStr
        }).append($("<td>", {
          "class": "pseudocode-gutter"
        }), $("<td>", {
          "class": "pseudocode-line-number",
          text: lineNumberStr
        }), $("<td>", {
          "class": className,
          html: indents + line
        })));
      }
      $container.html(this.$tbl);
      return lineNumber;
    };

    return Pseudocode;

  })();

  this.Vamonos["export"]({
    Widget: {
      Pseudocode: Pseudocode
    }
  });

}).call(this);

(function() {
  var DIRS, QTipTutorial;

  DIRS = {
    n: {
      target: "topMiddle",
      tooltip: "bottomMiddle"
    },
    s: {
      target: "bottomMiddle",
      tooltip: "topMiddle"
    },
    e: {
      target: "rightMiddle",
      tooltip: "leftMiddle"
    },
    w: {
      target: "leftMiddle",
      tooltip: "rightMiddle"
    },
    nw: {
      target: "topLeft",
      tooltip: "rightBottom"
    },
    ne: {
      target: "topRight",
      tooltip: "leftBottom"
    },
    se: {
      target: "bottomRight",
      tooltip: "leftTop"
    },
    sw: {
      target: "bottomLeft",
      tooltip: "rightTop"
    }
  };

  QTipTutorial = (function() {

    QTipTutorial.spec = {
      states: {
        type: "Array",
        description: "array of objects of the format `{ target, dir, tooltip }` where " + "target is a jQuery selector for where you want the tooltip to " + "appear, tooltip is the message to be displayed."
      }
    };

    function QTipTutorial(args) {
      var _this = this;
      if (args.constructor.name === 'Array') {
        args = {
          states: args
        };
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.currStateIndex = null;
      this.$currTarget = null;
      this.$tipXButton = $("<div>", {
        style: "float:right; padding: 0 0 8px 8px; cursor: pointer;",
        html: "&#x2612;"
      });
      this.$tipPrevLink = $("<div>", {
        style: "float:left; cursor: pointer;",
        html: "&laquo; previous"
      });
      this.$tipNextLink = $("<div>", {
        style: "float:right; cursor: pointer;",
        html: "next &raquo;"
      });
      this.$tipData = $("<div>", {
        style: "padding-bottom: 12px;"
      });
      this.$tipContents = $("<div>").append(this.$tipXButton, this.$tipData, this.$tipPrevLink, this.$tipNextLink);
      this.$tipXButton.on("click.qtiptutorial", function() {
        return _this.stop();
      });
      this.$tipPrevLink.on("click.qtiptutorial", function() {
        return _this.prevState();
      });
      this.$tipNextLink.on("click.qtiptutorial", function() {
        return _this.nextState();
      });
    }

    QTipTutorial.prototype.setup = function() {};

    QTipTutorial.prototype.doState = function(newStateIndex) {
      var currState, _ref;
      if (this.$currTarget != null) {
        this.$currTarget.qtip("destroy");
      }
      if (newStateIndex < 0) {
        return;
      }
      this.currStateIndex = newStateIndex;
      currState = this.states[this.currStateIndex];
      if (currState == null) {
        return;
      }
      this.$currTarget = currState.target;
      if ((_ref = currState.dir) == null) {
        currState.dir = "w";
      }
      this.$tipData.html(currState.tooltip);
      if (this.currStateIndex > 0) {
        this.$tipPrevLink.show();
      } else {
        this.$tipPrevLink.hide();
      }
      if (this.currStateIndex < this.states.length - 1) {
        this.$tipNextLink.show();
      } else {
        this.$tipNextLink.hide();
      }
      return this.$currTarget.qtip({
        position: {
          corner: DIRS[currState.dir]
        },
        show: {
          when: false,
          ready: true
        },
        hide: false,
        style: {
          name: "cream",
          tip: DIRS[currState.dir].tooltip
        },
        content: this.$tipContents
      });
    };

    QTipTutorial.prototype.event = function() {};

    QTipTutorial.prototype.setup = function() {};

    QTipTutorial.prototype.nextState = function() {
      return this.doState(this.currStateIndex + 1);
    };

    QTipTutorial.prototype.prevState = function() {
      return this.doState(this.currStateIndex - 1);
    };

    QTipTutorial.prototype.stop = function() {
      return this.doState(-1);
    };

    QTipTutorial.prototype.restart = function() {
      return this.doState(0);
    };

    return QTipTutorial;

  })();

  this.Vamonos["export"]({
    Widget: {
      QTipTutorial: QTipTutorial
    }
  });

}).call(this);

(function() {
  var Queue,
    __slice = [].slice;

  Queue = (function() {

    Queue.dependencies = ["Vamonos.Widget.ArrayGuts"];

    Queue.spec = {
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      showCellNumber: {
        type: "Boolean",
        description: "whether to show numbers above queue elements",
        defaultValue: false
      }
    };

    function Queue(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        ignoreExtraArgs: true
      });
      args.showCellNumber = this.showCellNumber;
      this.arrayWidget = new Vamonos.Widget.Array(args);
    }

    Queue.prototype.event = function() {
      var event, frame, newFrame, options, type, viz, _ref, _ref1, _ref2;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0];
          viz.registerVariable(this.varName);
          return (_ref = this.arrayWidget).event.apply(_ref, [event].concat(__slice.call(options)));
        case "render":
          frame = options[0], type = options[1];
          newFrame = Vamonos.clone(frame);
          newFrame[this.varName] = (_ref1 = frame[this.varName]) != null ? _ref1.guts : void 0;
          return this.arrayWidget.event("render", newFrame, type);
        default:
          return (_ref2 = this.arrayWidget).event.apply(_ref2, [event].concat(__slice.call(options)));
      }
    };

    return Queue;

  })();

  this.Vamonos["export"]({
    Widget: {
      Queue: Queue
    }
  });

}).call(this);

(function() {
  var UserQuiz,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  UserQuiz = (function() {

    UserQuiz.spec = {
      question: {
        type: ["String", "Function"],
        description: "either a string or a function that takes a frame and returns a " + "string"
      },
      answer: {
        type: ["String", "Function"],
        description: "either a string or a function that takes a frame and returns a " + "string"
      },
      condition: {
        type: "Function",
        description: "a function taking the current frame, returning a boolean, " + "used to determine when to ask a question"
      },
      title: {
        type: ["String", "Function"],
        defaultValue: void 0,
        description: "the title of the quiz. either as a plain string or as a function " + "that takes the current frame as an argument and returns a string."
      }
    };

    function UserQuiz(args) {
      var response, _ref,
        _this = this;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.title) == null) {
        this.title = Vamonos.funcify("Self-test question");
      }
      this.question = Vamonos.funcify(this.question);
      this.answer = Vamonos.funcify(this.answer);
      this.$dialog = $("<div>", {
        "class": "userquiz"
      });
      this.$dialog.hide();
      this.$question = $("<div>", {
        "class": "userquiz-question"
      }).appendTo(this.$dialog);
      response = $("<div>", {
        "class": "userquiz-response"
      }).appendTo(this.$dialog);
      this.$answer = $("<input>", {
        "class": "userquiz-answer"
      }).appendTo(response);
      this.$submit = $("<button>", {
        text: "answer"
      }).appendTo(response);
      this.$feedback = $("<div>", {
        "class": "userquiz-feedback"
      }).appendTo(this.$dialog);
      this.$submit.on("click", function() {
        return _this.submitHandler();
      });
      this.$answer.on("keypress", function(e) {
        if (e.keyCode === 13) {
          _this.$submit.trigger("click");
          return false;
        }
      });
    }

    UserQuiz.prototype.event = function() {
      var event, options, type, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.visualizer = options[0];
          return $("body").append(this.$dialog);
        case "displayStart":
          this.currentAnswer = null;
          this.currentFrame = null;
          this.framesPassed = [];
          this.wrongTimeout = null;
          return this.log = [];
        case "render":
          this.currentFrame = options[0], type = options[1];
          if (!(type === "next" && this.condition(this.currentFrame) && (_ref = this.currentFrame._frameNumber, __indexOf.call(this.framesPassed, _ref) < 0))) {
            return;
          }
          this.$dialog.attr("title", this.title(this.currentFrame));
          this.$question.html(this.question(this.currentFrame));
          this.$answer.val("");
          this.$feedback.html("");
          this.$feedback.removeClass("correct-answer", "wrong-answer");
          this.currentAnswer = this.answer(this.currentFrame);
          this.wrongTimeout = null;
          this.visualizer.frozen = true;
          return this.$dialog.dialog({
            modal: true,
            closeOnEscape: false,
            position: {
              my: "center",
              at: "center",
              of: window
            }
          });
        case "displayStop":
          return console.log(this.log);
      }
    };

    UserQuiz.prototype.submitHandler = function() {
      var _this = this;
      if (this.$answer.val() === this.currentAnswer + "") {
        this.$feedback.html("&#x2713; Correct!");
        this.$feedback.addClass("correct-answer");
        this.framesPassed.push(this.currentFrame._frameNumber);
        if (this.wrongTimeout) {
          clearTimeout(this.wrongTimeout);
        }
        this.log.push("correct answer `" + this.currentAnswer + "` at frame " + this.currentFrame._frameNumber);
        return setTimeout((function() {
          _this.$dialog.dialog("close");
          return _this.visualizer.frozen = false;
        }), 1000);
      } else {
        this.$feedback.addClass("wrong-answer");
        this.$feedback.html("&#x2717; Sorry, that's not right!");
        this.wrongTimeout = setTimeout((function() {
          return _this.$feedback.html("");
        }), 2000);
        return this.log.push("wrong answer `" + (this.$answer.val()) + "` at frame " + this.currentFrame._frameNumber);
      }
    };

    return UserQuiz;

  })();

  this.Vamonos["export"]({
    Widget: {
      UserQuiz: UserQuiz
    }
  });

}).call(this);

(function() {
  var VarDisplay,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  VarDisplay = (function() {

    VarDisplay.description = "VarDisplay allows viewing of the contents of variables, and " + "if they are objects, their attributes.";

    VarDisplay.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself"
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      attributes: {
        type: "Array",
        defaultValue: void 0,
        description: "if the variable is an object, an array of strings representing " + "which object attributes to show"
      },
      showChanges: {
        type: ["String", "Array"],
        defaultValue: "next",
        description: "type of frame shifts to highlight changes at, can be multiple " + "types with an array of strings"
      }
    };

    function VarDisplay(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.$container = Vamonos.jqueryify(this.container);
      this.$container.addClass("var-display");
      this.showChanges = Vamonos.arrayify(this.showChanges);
    }

    VarDisplay.prototype.event = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          return this.viz.registerVariable(this.varName);
        case "editStart":
          return this.$container.empty();
        case "render":
          return this.showVars.apply(this, options);
      }
    };

    VarDisplay.prototype.showVars = function(frame, type) {
      var dup, newstr, oldstr, _ref;
      if (!(frame[this.varName] != null)) {
        newstr = "-";
      } else if (this.attributes != null) {
        if (__indexOf.call(this.showChanges, type) >= 0) {
          newstr = Vamonos.formatObject(frame[this.varName], this.attributes, this.oldval);
        } else {
          newstr = Vamonos.formatObject(frame[this.varName], this.attributes);
        }
        this.dontShowChange = true;
      } else {
        newstr = Vamonos.rawToTxt(frame[this.varName]);
      }
      oldstr = this.$container.html();
      if (newstr !== oldstr) {
        if (__indexOf.call(this.showChanges, type) >= 0) {
          if (this.dontShowChange) {
            this.$container.removeClass("changed");
          } else {
            this.$container.addClass("changed");
          }
          this.$container.html(newstr);
          dup = this.$container.clone();
          this.$container.replaceWith(dup);
          this.$container = dup;
        } else {
          this.$container.html(newstr);
          this.$container.removeClass("changed");
          this.$container.children().removeClass("changed");
        }
      } else {
        this.$container.removeClass("changed");
        this.$container.children().removeClass("changed");
      }
      this.dontShowChange = void 0;
      return this.oldval = (_ref = frame[this.varName]) != null ? _ref : {
        dummyObj: true
      };
    };

    return VarDisplay;

  })();

  this.Vamonos["export"]({
    Widget: {
      VarDisplay: VarDisplay
    }
  });

}).call(this);

(function() {
  var VarName,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  VarName = (function() {

    VarName.description = "VarName shows the variable name and provides " + "a buton to set the variable as a watchVar, and visual feedback for " + "editable variables in editMode.";

    VarName.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      displayName: {
        type: "String",
        description: "alternate varname to display - defaults to varName",
        defaultValue: void 0
      },
      inputVar: {
        type: "Boolean",
        description: "whether to accept input for this variable in edit mode",
        defaultValue: false
      },
      watchable: {
        type: "Boolean",
        description: "whether the variable can be set as a watchVar",
        defaultValue: true
      },
      watching: {
        type: "Boolean",
        description: "whether the variable starts off set as a watchVar",
        defaultValue: false
      }
    };

    function VarName(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.displayName) == null) {
        this.displayName = this.varName;
      }
      this.$container = Vamonos.jqueryify(this.container);
      this.watching && (this.watching = this.watchable);
      if (this.inputVar) {
        this.$editIndicator = $("<span>", {
          "class": "var-editable",
          html: "&#x270e;"
        }).appendTo(this.$container);
      }
      if (this.watchable) {
        this.$watchToggle = $("<span>", {
          "class": "var-watch",
          html: "&#x2605;"
        }).appendTo(this.$container);
      }
      this.$varName = $("<span>", {
        "class": "var-name",
        html: this.displayName + ":"
      }).appendTo(this.$container);
    }

    VarName.prototype.event = function() {
      var event, frame, options, _ref,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          if (this.watching) {
            return this.viz.setWatchVar(this.varName);
          }
          break;
        case "editStart":
          this.setWatchStatus();
          if (this.watchable) {
            this.$watchToggle.on("mousedown", function() {
              return _this.toggleWatch();
            });
            this.$watchToggle.prop("title", "Click to toggle breaking when this variable changes");
          }
          if (this.inputVar) {
            this.$editIndicator.addClass("var-editing");
            return this.$editIndicator.prop("title", "Now in edit mode, you can change the contents of this variable");
          }
          break;
        case "editStop":
          if (this.watchable) {
            this.$watchToggle.off("mousedown");
            this.$watchToggle.prop("title", "");
          }
          if (this.inputVar) {
            this.$editIndicator.removeClass("var-editing");
            return this.$editIndicator.prop("title", "");
          }
          break;
        case "displayStart":
          return this.setWatchStatus();
        case "displayStop":
          if (this.watchable) {
            return this.$watchToggle.removeClass("var-watch-active");
          }
          break;
        case "render":
          frame = options[0];
          if (!this.watchable) {
            return;
          }
          if ((frame._snapshotReasons.watchVarsChanged != null) && (_ref = this.varName, __indexOf.call(frame._snapshotReasons.watchVarsChanged, _ref) >= 0)) {
            return this.$watchToggle.addClass("var-watch-active");
          } else {
            return this.$watchToggle.removeClass("var-watch-active");
          }
      }
    };

    VarName.prototype.setWatchStatus = function() {
      if (!this.watchable) {
        return;
      }
      if (this.viz.isWatchVar(this.varName)) {
        this.$watchToggle.addClass("var-watching");
        return this.watching = true;
      } else {
        this.$watchToggle.removeClass("var-watching");
        return this.watching = false;
      }
    };

    VarName.prototype.toggleWatch = function() {
      if (!this.watchable) {
        return;
      }
      if (this.watching) {
        this.viz.removeWatchVar(this.varName);
      } else {
        this.viz.setWatchVar(this.varName);
      }
      this.setWatchStatus();
      return false;
    };

    return VarName;

  })();

  this.Vamonos["export"]({
    Widget: {
      VarName: VarName
    }
  });

}).call(this);
