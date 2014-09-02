/*
 * vamonos.js - the Vamonos algorithm visualization library
 *
 * Copyright 2012-2014 Mike Rosulek & the Vamonos project team
 * http://rosulek.github.io/vamonos
 *
 * Licenced under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 1.2.1
 * Released: 2014-01-13
 */
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Vamonos = {
    handleArguments: function(_arg) {
      var arg, argName, defaultValue, description, givenArgs, ignoreExtraArgs, spec, specObj, specs, type, widgetName, widgetObject, _ref, _results;
      widgetObject = _arg.widgetObject, givenArgs = _arg.givenArgs, ignoreExtraArgs = _arg.ignoreExtraArgs, specObj = _arg.specObj;
      if (ignoreExtraArgs == null) {
        ignoreExtraArgs = false;
      }
      widgetName = widgetObject.constructor.name;
      spec = specObj != null ? specObj : widgetObject.constructor.spec;
      if (widgetName == null) {
        throw Error("handleArguments: widgetName required");
      }
      if (widgetObject == null) {
        throw Error("handleArguments: widgetObject required for " + widgetName + " widget");
      }
      if (givenArgs == null) {
        throw Error("handleArguments: givenArgs required for " + widgetName + " widget");
      }
      if (!spec) {
        throw Error("handleArguments: no spec for " + widgetName + " widget");
      }
      for (argName in spec) {
        specs = spec[argName];
        type = specs.type, description = specs.description, defaultValue = specs.defaultValue;
        if (type == null) {
          throw Error("handleArguments: no type provided for " + widgetName + "." + argName);
        }
        if (type === "jQuery Selector") {
          type = "";
        }
        type = this.arrayify(type);
        if (givenArgs[argName] != null) {
          if (_ref = givenArgs[argName].constructor.name, __indexOf.call(type, _ref) < 0) {
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
    error: function(string) {
      throw {
        type: "VamonosError",
        content: string
      };
    },
    arrayToNum: function(array) {
      var r;
      if (!((array != null) && array.constructor.name === 'Array')) {
        console.log("Vamonos.arrayToNum got non-array input", array);
        return 0;
      }
      r = parseInt(array.join(""), 10);
      if (isNaN(r)) {
        return 0;
      } else {
        return r;
      }
    },
    numToArray: function(num) {
      var r;
      if (!((num != null) && num.constructor.name === 'Number')) {
        console.log("Vamonos.numToArray got non-num input", num);
        return [0];
      }
      if (num < 10) {
        return [num];
      }
      r = num % 10;
      return this.numToArray(Math.floor(num / 10)).concat([r]);
    },
    createNColorClasses: function(prefix, nGroups) {
      var cs, i, _i, _ref, _results;
      if (!((prefix != null) && (nGroups != null))) {
        return;
      }
      cs = function(n) {
        var inc;
        inc = Math.floor(360 / nGroups);
        return "hsl(" + (inc * n) + ", 60%, 70%)";
      };
      _results = [];
      for (i = _i = 0, _ref = nGroups - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        _results.push($('<style>ellipse.' + prefix + i + ' { fill: ' + cs(i) + '; }</style>').appendTo($('html > head')));
      }
      return _results;
    },
    warn: function(objName, str) {
      return console.log("### WARNING ### " + objName + ": " + str);
    },
    rgbToHex: function(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    resolveSubscript: function(name) {
      var lname, nameMatches, subscript, _;
      nameMatches = name.match(/(.+)_(.+)/);
      if (nameMatches == null) {
        return name;
      }
      _ = nameMatches[0], lname = nameMatches[1], subscript = nameMatches[2];
      return "" + lname;
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
      $editor = $("<input class='inline-input'>").hide().val(oldVal).on("keydown.vamonos-graph", function(event) {
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
    stringify: function(obj) {
      if ((obj != null ? obj.type : void 0) === 'Graph') {
        return obj.toString();
      } else {
        return JSON.stringify(obj);
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
      var k, r, v, _ref;
      if (obj == null) {
        return;
      }
      if ((typeof obj).match(/number|string|boolean/)) {
        return obj;
      }
      if ((_ref = obj.type) === 'Queue' || _ref === 'Graph') {
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
    },
    encode: function(thing) {
      var c, h, s, z;
      s = JSON.stringify(thing);
      c = this.lzw_encode(s);
      h = unescape(encodeURIComponent(c));
      z = window.btoa(h);
      return z;
    },
    decode: function(base64str) {
      var c, j, s;
      s = window.atob(base64str);
      c = decodeURIComponent(escape(s));
      j = this.lzw_decode(c);
      return JSON.parse(j);
    },
    lzw_decode: function(s) {
      var code, currChar, currCode, data, dict, i, oldPhrase, out, phrase, _i, _ref;
      dict = {};
      data = (s + "").split("");
      currChar = data[0];
      oldPhrase = currChar;
      out = [currChar];
      code = 256;
      for (i = _i = 1, _ref = data.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
          phrase = data[i];
        } else {
          phrase = dict[currCode] ? dict[currCode] : oldPhrase + currChar;
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
      }
      return out.join("");
    },
    lzw_encode: function(s) {
      var code, currChar, data, dict, i, out, phrase, _i, _j, _len, _ref, _ref1;
      dict = {};
      data = (s + "").split("");
      out = [];
      phrase = data[0];
      code = 256;
      _ref = data.slice(1);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        currChar = _ref[_i];
        if (dict[phrase + currChar] != null) {
          phrase += currChar;
          continue;
        }
        if (phrase.length > 1) {
          out.push(dict[phrase]);
        } else {
          out.push(phrase.charCodeAt(0));
        }
        dict[phrase + currChar] = code;
        code++;
        phrase = currChar;
      }
      if (phrase.length > 1) {
        out.push(dict[phrase]);
      } else {
        out.push(phrase.charCodeAt(0));
      }
      for (i = _j = 0, _ref1 = out.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        out[i] = String.fromCharCode(out[i]);
      }
      return out.join("");
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
  var DisjointSet,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  DisjointSet = (function() {

    DisjointSet.description = "A disjoint set data structure for use in algorithms and widgets.";

    DisjointSet["interface"] = {};

    DisjointSet.spec = {
      onUpdate: {
        type: "Function",
        description: "A function that does something to an element in " + "the set when it the disjoint set is modified.",
        defaultValue: void 0
      }
    };

    function DisjointSet(args) {
      if (args == null) {
        args = {};
      }
      this.updateFunc = args.onUpdate;
      this.type = 'DisjointSet';
      this.guts = [];
    }

    DisjointSet["interface"].makeSet = {
      args: [["elem", "an element"]],
      description: "creates a new set with `elem`"
    };

    DisjointSet.prototype.makeSet = function(elem) {
      if (this.find(elem)) {
        return;
      }
      this.guts.push([elem]);
      return this.update();
    };

    DisjointSet["interface"].find = {
      args: [["elem", "an element"]],
      description: "returns an integer representing the set with `elem` in it"
    };

    DisjointSet.prototype.find = function(elem) {
      var i, _i, _ref;
      for (i = _i = 0, _ref = this.guts.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (this.guts[i] == null) {
          continue;
        }
        if (__indexOf.call(this.guts[i], elem) >= 0) {
          return i;
        }
      }
    };

    DisjointSet["interface"].union = {
      args: [["e1", "an element"], ["e2", "an element"]],
      description: "joins the set containing `e1` with the one containing `e2`"
    };

    DisjointSet.prototype.union = function(e1, e2) {
      var e1Set, e2Set, newSet;
      if (!((e1 != null) && (e2 != null))) {
        return [];
      }
      e1Set = this.find(e1);
      e2Set = this.find(e2);
      if (!((e1Set != null) && (e2Set != null) && e1Set !== e2Set)) {
        return [];
      }
      if (this.guts[e1Set].length > this.guts[e2Set].length) {
        this.guts[e1Set] = this.guts[e1Set].concat(this.guts[e2Set]);
        this.guts[e2Set] = [];
        newSet = this.guts[e1Set];
      } else {
        this.guts[e2Set] = this.guts[e2Set].concat(this.guts[e1Set]);
        this.guts[e1Set] = [];
        newSet = this.guts[e2Set];
      }
      this.update();
      return newSet;
    };

    DisjointSet["interface"].numSets = {
      description: "returns the max number of sets that have existed"
    };

    DisjointSet.prototype.numSets = function() {
      return this.guts.length;
    };

    DisjointSet.prototype.update = function() {
      var elem, set, _i, _len, _ref, _results;
      if (this.updateFunc == null) {
        return;
      }
      _ref = this.guts;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        set = _ref[_i];
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (_j = 0, _len1 = set.length; _j < _len1; _j++) {
            elem = set[_j];
            _results1.push(this.updateFunc(elem));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    DisjointSet["interface"].eachSet = {
      args: [["f", "a function taking an array of elements and optionally an index"]],
      description: "applies `f` to each set in the DisjointSet, along with its index"
    };

    DisjointSet.prototype.eachSet = function(f) {
      var control, i, _i, _ref, _results;
      control = {
        abort: false
      };
      _results = [];
      for (i = _i = 0, _ref = this.numSets() - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (!this.guts[i].length) {
          continue;
        }
        _results.push(f(this.guts[i], i, control));
      }
      return _results;
    };

    DisjointSet["interface"].getSets = {
      description: "returns a list of all the sets in the DisjointSet." + "Sets are represented by lists. " + "Note that some lists may be empty."
    };

    DisjointSet.prototype.getSets = function() {
      return this.guts;
    };

    return DisjointSet;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      DisjointSet: DisjointSet
    }
  });

}).call(this);

(function() {
  var Graph,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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
        example: "vertices: [\n    {id: \"v0\", x: 17,  y: 10},\n    {id: \"v1\", x: 98,  y: 10},\n    {id: \"v3\", x: 15,  y: 78},\n]"
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
      this.edgeId = __bind(this.edgeId, this);

      this.modifyEdgeTarget = __bind(this.modifyEdgeTarget, this);

      this.modifyEdgeSource = __bind(this.modifyEdgeSource, this);

      this.directed = (_ref = args.directed) != null ? _ref : false;
      this.prefix = (_ref1 = args.prefix) != null ? _ref1 : "";
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
      var k, newVtx, v, _ref;
      if (vtx == null) {
        vtx = {};
      }
      if (this.vertices[vtx.id] != null) {
        return this.vertices[vtx.id];
      }
      newVtx = {};
      newVtx.type = 'Vertex';
      if (vtx.name != null) {
        this.removeVertexName(vtx.name);
        newVtx.name = vtx.name;
      } else {
        newVtx.name = this.nextVertexName();
      }
      newVtx.id = (_ref = vtx.id) != null ? _ref : this.nextVertexId();
      this.vertices[newVtx.id] = newVtx;
      for (k in vtx) {
        v = vtx[k];
        if (k !== 'type' && k !== 'name' && k !== 'id') {
          if ((v != null ? v.type : void 0) === 'Vertex') {
            newVtx[k] = this.vertex(v);
          } else {
            newVtx[k] = v;
          }
        }
      }
      return newVtx;
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

    Graph["interface"].eachVertexBy = {
      args: [["comp", "a comparator"], ["f", "a function taking a vertex as an argument"]],
      description: "applies `f` to each vertex in the graph, ordered by `comp`"
    };

    Graph.prototype.eachVertexBy = function(comp, f) {
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
      }).call(this)).sort(comp);
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
      var existingVtx, newId, _i, _len, _ref, _ref1, _ref2;
      if ((_ref = this._customVertexNum) == null) {
        this._customVertexNum = 0;
      }
      newId = "" + ((_ref1 = this.prefix) != null ? _ref1 : "custom-") + "vertex-" + (this._customVertexNum++);
      _ref2 = this.getVertices();
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        existingVtx = _ref2[_i];
        if (existingVtx.id === newId) {
          return this.nextVertexId();
        }
      }
      return newId;
    };

    Graph["interface"].returnVertexName = {
      args: [["n", "string"]],
      description: "adds `n` to the list of available vertex names"
    };

    Graph.prototype.returnVertexName = function(n) {
      var customSort;
      customSort = function(a, b) {
        var capital, lower, number, sameType;
        lower = function(x) {
          return /[a-z]/.test(x);
        };
        capital = function(x) {
          return /[A-Z]/.test(x);
        };
        number = function(x) {
          return /[0-9]/.test(x);
        };
        sameType = function(a, b) {
          return lower(a) && lower(b) || capital(a) && capital(b) || number(a) && number(b);
        };
        if (sameType(a, b)) {
          if (a === b) {
            return 0;
          } else if (a < b) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (lower(a)) {
            return -1;
          } else if (lower(b)) {
            return 1;
          } else if (capital(a)) {
            return -1;
          } else {
            return 1;
          }
        }
      };
      this._initAvailableNames();
      this.availableNames.unshift(n);
      return this.availableNames.sort(customSort);
    };

    Graph["interface"].removeVertexName = {
      args: [["name"]],
      description: "removes `name` from the list of available vertex names"
    };

    Graph.prototype.removeVertexName = function(name) {
      this._initAvailableNames();
      return this.availableNames = this.availableNames.filter(function(n) {
        return n !== name;
      });
    };

    Graph["interface"].nextVertexName = {
      description: "returns the next available vertex name"
    };

    Graph.prototype.nextVertexName = function() {
      this._initAvailableNames();
      return this.availableNames.shift();
    };

    Graph.prototype._initAvailableNames = function() {
      var _ref;
      return (_ref = this.availableNames) != null ? _ref : this.availableNames = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".split("");
    };

    Graph["interface"].edge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"]],
      description: "if there is an edge from `source` to `target`, returns it. " + "understands undirected graphs."
    };

    Graph.prototype.edge = function(source, target) {
      var sourceId, targetId, _ref, _ref1, _ref2, _ref3;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      if (this.directed) {
        return (_ref = this.edges[sourceId]) != null ? _ref[targetId] : void 0;
      } else {
        return (_ref1 = (_ref2 = this.edges[sourceId]) != null ? _ref2[targetId] : void 0) != null ? _ref1 : (_ref3 = this.edges[targetId]) != null ? _ref3[sourceId] : void 0;
      }
    };

    Graph.prototype.modifyEdgeSource = function(edge, newSource) {
      var newSourceId, _base, _base1, _name, _ref, _ref1;
      newSourceId = this.idify(newSource);
      delete this.edges[edge.source.id][edge.target.id];
      ((_ref = (_base = this.edges)[newSourceId]) != null ? _ref : _base[newSourceId] = {})[edge.target.id] = edge;
      if (!this.directed) {
        delete this.edges[edge.target.id][edge.source.id];
        ((_ref1 = (_base1 = this.edges)[_name = edge.target.id]) != null ? _ref1 : _base1[_name] = {})[newSourceId] = edge;
      }
      return edge.source = this.vertex(newSourceId);
    };

    Graph.prototype.modifyEdgeTarget = function(edge, newTarget) {
      var newTargetId, _base, _ref;
      newTargetId = this.idify(newTarget);
      delete this.edges[edge.source.id][edge.target.id];
      this.edges[edge.source.id][newTargetId] = edge;
      if (!this.directed) {
        delete this.edges[edge.target.id][edge.source.id];
        ((_ref = (_base = this.edges)[newTargetId]) != null ? _ref : _base[newTargetId] = {})[edge.source.id] = edge;
      }
      return edge.target = this.vertex(newTargetId);
    };

    Graph["interface"].edgeId = {
      args: [["e", "an edge object"]],
      description: "returns a string identifying `e`"
    };

    Graph.prototype.edgeId = function(e) {
      return e.source.id + "--" + e.target.id;
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
            if ((v != null ? v.type : void 0) === 'Vertex') {
              edge[k] = this.vertex(v);
            } else {
              edge[k] = v;
            }
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
      var edge, name, outgoingEdges, results, source, target, _ref, _results;
      results = {};
      _ref = this.edges;
      for (source in _ref) {
        outgoingEdges = _ref[source];
        for (target in outgoingEdges) {
          edge = outgoingEdges[target];
          name = "" + edge.source.id + "->" + edge.target.id;
          results[name] = edge;
        }
      }
      _results = [];
      for (name in results) {
        edge = results[name];
        _results.push(edge);
      }
      return _results;
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

    Graph["interface"].eachEdgeBy = {
      args: [["comp", "a comparator"], ["f", "a function taking an edge"]],
      description: "applies `f` to each edge, ordered by `comp`"
    };

    Graph.prototype.eachEdgeBy = function(comp, f) {
      var e, es, _i, _len, _ref, _results;
      es = this.getEdges();
      _ref = es.sort(comp);
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
      var edge, outgoingEdges, result, source, target, vid, _ref, _ref1;
      vid = this.idify(v);
      result = [];
      _ref = this.edges;
      for (source in _ref) {
        outgoingEdges = _ref[source];
        for (target in outgoingEdges) {
          edge = outgoingEdges[target];
          if (source === vid) {
            result.push(edge);
          }
        }
      }
      return (_ref1 = []).concat.apply(_ref1, result);
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

    Graph["interface"].collapse = {
      args: [["e", "an edge of the graph to collapse"], ["overlapFunc", "a function taking two edges and returning one of them"]],
      description: "collapses `e`, creating a new vertex. By default " + "vertex names are concatenations of the collapsed vertices' " + "names, vertices' positions are averaged, and overlapping " + "edges take the min weight. only works on undirected graphs. " + "`overlapFunc` is an optional parameter for a function that " + "decides what to do with overlapping edges after a collapse. " + "By default overlapFunc keeps the edge with least `w`."
    };

    Graph.prototype.collapse = function(edge, overlapFunc) {
      var alterEdge, newVtx, v1, v2, _i, _j, _len, _len1, _ref, _ref1, _ref2, _results,
        _this = this;
      if (this.directed) {
        throw "collapse: called on directed graph";
      }
      v1 = this.vertex(edge.source);
      v2 = this.vertex(edge.target);
      if (!((v1 != null) && (v2 != null))) {
        throw "collapse: undefined edge";
      }
      if (overlapFunc == null) {
        overlapFunc = function(e1, e2) {
          if (e1.w <= e2.w) {
            return e1;
          } else {
            return e2;
          }
        };
      }
      newVtx = this.addVertex({
        name: (v1.name + v2.name).split("").sort().join(""),
        id: v1.id + v2.id,
        x: Math.floor((v1.x + v2.x) / 2),
        y: Math.floor((v1.y + v2.y) / 2)
      });
      alterEdge = function(vid, edge) {
        var choice, existingEdge;
        if (edge.source.id === vid) {
          existingEdge = _this.edge(newVtx, edge.target);
          if (existingEdge) {
            choice = overlapFunc(edge, existingEdge);
            _this.removeEdge(newVtx, edge.target);
            _this.addEdge(newVtx, edge.target, choice);
          } else {
            _this.modifyEdgeSource(edge, newVtx);
          }
        }
        if (edge.target.id === vid) {
          existingEdge = _this.edge(edge.source, newVtx);
          if (existingEdge) {
            choice = overlapFunc(edge, existingEdge);
            _this.removeEdge(edge.source, newVtx);
            return _this.addEdge(edge.source, newVtx, choice);
          } else {
            return _this.modifyEdgeTarget(edge, newVtx);
          }
        }
      };
      _ref = this.getEdges();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        edge = _ref[_i];
        alterEdge(v1.id, edge);
        alterEdge(v2.id, edge);
      }
      if ((_ref1 = this.recentlyCollapsed) == null) {
        this.recentlyCollapsed = {};
      }
      this.recentlyCollapsed[v1.id] = newVtx;
      this.recentlyCollapsed[v2.id] = newVtx;
      this.removeVertex(v1);
      this.removeVertex(v2);
      _ref2 = this.getEdges();
      _results = [];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        edge = _ref2[_j];
        if (edge.source === edge.target) {
          _results.push(this.removeEdge(edge.source, edge.target));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Graph.prototype.idify = function(v) {
      if (typeof v === 'string' || !(v != null)) {
        return v;
      }
      return v.id;
    };

    Graph.prototype.clone = function() {
      var r;
      r = new Vamonos.DataStructure.Graph({
        directed: this.directed,
        prefix: this.prefix
      });
      this.eachVertex(function(v) {
        return r.addVertex(v);
      });
      this.eachEdge(function(e) {
        return r.addEdge(e.source, e.target, e);
      });
      r.recentlyCollapsed = Vamonos.clone(this.recentlyCollapsed);
      return r;
    };

    Graph["interface"].toString = {
      description: "returns a javascripty string you could use to initialize a graph with."
    };

    Graph.prototype.toString = function() {
      var attr, attrs, e, s, value, _i, _len, _ref;
      s = "defaultGraph: new Vamonos.DataStructure.Graph({\n    directed: " + this.directed + ",\n    prefix: \"" + this.prefix + "\",\n    vertices: [\n";
      this.eachVertex(function(vtx) {
        var attr, attrs, value;
        attrs = [];
        for (attr in vtx) {
          value = vtx[attr];
          if (!(value != null)) {
            continue;
          }
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

    Graph.prototype.reconstruct = function(graph) {
      var e, id, srcId, tObj, trgId, vtx, _ref, _ref1, _results;
      if (graph.prefix != null) {
        this.prefix = graph.prefix;
      }
      if (graph.directed != null) {
        this.directed = graph.directed;
      }
      if (graph.vertices != null) {
        this.vertices = {};
        _ref = graph.vertices;
        for (id in _ref) {
          vtx = _ref[id];
          this.addVertex(vtx);
        }
      }
      if (graph.edges != null) {
        _ref1 = graph.edges;
        _results = [];
        for (srcId in _ref1) {
          tObj = _ref1[srcId];
          _results.push((function() {
            var _results1;
            _results1 = [];
            for (trgId in tObj) {
              e = tObj[trgId];
              _results1.push(this.addEdge(e.source, e.target, e));
            }
            return _results1;
          }).call(this));
        }
        return _results;
      }
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
        type: "Number",
        defaultValue: 250,
        description: "the maximum number of snapshots"
      },
      autoStart: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to skip edit mode at load time"
      },
      maxCallStackSnapshotDepth: {
        type: "Number",
        defaultValue: void 0,
        description: "the maximum depth of the callstack that snapshots " + "will be taken at when it is set as a watchVar."
      },
      exportAfterEditMode: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the visualizer will update the location with " + "the updated input after leaving edit mode every time"
      },
      unbounded: {
        type: "Boolean",
        defaultValue: false,
        description: "whether there is a limit on how many lines an algorithm can take"
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
      this.tellWidgets("externalInput", this["import"]());
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
        case "editStop":
          return this.tellWidgets("editStop");
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
      if (!this.unbounded && ++this.numCallsToLine > 100000) {
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
        if (this.callStackSnapshotOk() && this.calledProc) {
          (reasons != null ? reasons : reasons = {}).procCalled = this.calledProc;
        }
        if (this.callStackSnapshotOk() && this.returnedProc) {
          (reasons != null ? reasons : reasons = {}).procReturned = this.returnedProc;
        }
      }
      if (n === 'call' && this.returnedProc && this.callStackSnapshotOk()) {
        if (this.returnedProc) {
          (reasons != null ? reasons : reasons = {}).procReturned = this.returnedProc;
        }
      }
      if (n === "end") {
        (reasons != null ? reasons : reasons = {}).procReturned = "main";
      }
      if (n.type === "VamonosError") {
        (reasons != null ? reasons : reasons = {}).error = n.content;
      }
      return reasons;
    };

    Visualizer.prototype.callStackSnapshotOk = function() {
      var _ref;
      if (!this.isWatchVar("_callstack")) {
        return;
      }
      if (!(this.stash.callStack.length <= ((_ref = this.maxCallStackSnapshotDepth) != null ? _ref : Infinity))) {
        return;
      }
      return true;
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
          if (Vamonos.stringify(left) === Vamonos.stringify(right)) {
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
      return function(args, locals) {
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
      if (this.exportAfterEditMode) {
        this["export"]();
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
        if (err.type === "VamonosError") {
          this.line(err);
        } else {
          switch (err) {
            case "too many frames":
              alert("Too many frames. You may have an infinite loop, or you may " + "want to consider setting fewer breakpoints. " + "Visualization has been truncated to the first " + ("" + this.maxFrames + " frames."));
              break;
            case "too many lines":
              alert("Your algorithm has executed for over 100000 instructions. " + "You may have an infinite loop. " + "Visualization has been truncated.");
              break;
            default:
              throw err;
          }
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

    Visualizer.prototype.allowExport = function(varName) {
      var _ref;
      return ((_ref = this.exportableVariables) != null ? _ref : this.exportableVariables = {})[varName] = true;
    };

    Visualizer.prototype["export"] = function() {
      var save, varName, varObj, _ref;
      if (this.exportableVariables == null) {
        return;
      }
      save = {};
      _ref = this.stash.inputScope;
      for (varName in _ref) {
        varObj = _ref[varName];
        if (!(varObj != null)) {
          continue;
        }
        if (!(varName in this.exportableVariables)) {
          continue;
        }
        if ((varObj["export"] != null) && varObj["export"].constructor.name === 'Function') {
          save[varName] = varObj["export"]();
        } else {
          save[varName] = varObj;
        }
      }
      window.history.replaceState({}, "", window.location.origin + window.location.pathname + "#" + Vamonos.encode(save));
      return "ok";
    };

    Visualizer.prototype["import"] = function() {
      var s;
      if (this._alreadyImported != null) {
        return {};
      }
      s = window.location.hash;
      if (!(s.length > 1 && s[0] === "#")) {
        return {};
      }
      this._alreadyImported = true;
      try {
        return Vamonos.decode(s.substr(1));
      } catch (error) {
        return {};
      }
    };

    Visualizer.prototype.deactivate = function() {
      return this.frozen = true;
    };

    Visualizer.prototype.activate = function() {
      return this.frozen = false;
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
      var event, options, viz, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      (_ref = this.guts).event.apply(_ref, arguments);
      if (event === 'setup') {
        return viz = options[0], options;
      }
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
      },
      maxInputLength: {
        type: "Number",
        description: "Limit input to a certain number of characters.",
        defaultValue: void 0
      },
      firstCellBlank: {
        type: "Boolean",
        description: "Leave the first cell blank.",
        defaultValue: void 0
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
      if (!this.showCellNumber) {
        this.$rowIndices.hide();
      }
      this.container.append(this.$rowIndices, this.$rowCells, this.$rowAnnotations);
      if (this.firstCellBlank) {
        this.container.css("margin-left", 26);
      }
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
      var event, i, inp, options, row, v, _, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _results,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          if (!this.displayOnly) {
            this.viz.setVariable(this.varName, this.lastInput.slice());
          }
          if (!this.displayOnly) {
            this.viz.allowExport(this.varName);
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
            for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
              row = _ref4[_l];
              row.hide();
            }
          } else {
            this.$rowCells.on("click.arrayguts", "td", {}, function(e) {
              return _this.tdClick(e);
            });
            this.$rowCells.prop("title", "Click in any cell to edit this array");
          }
          return this.adjustHeight();
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
        case "externalInput":
          inp = options[0];
          if (((_ref6 = inp[this.varName]) != null ? _ref6.constructor.name : void 0) !== 'Array') {
            return;
          }
          return this.lastInput = inp[this.varName];
      }
    };

    ArrayGuts.prototype.render = function(frame, type) {
      var $cell, $selector, className, compare, i, index, indexName, indices, newArray, row, showChange, target, _i, _j, _k, _l, _len, _len1, _len2, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
      newArray = frame[this.varName];
      if (newArray == null) {
        newArray = this.ignoreIndexZero ? [Infinity] : [];
      }
      _ref = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row.find("td").removeClass();
      }
      while (newArray.length < this.theArray.length) {
        this.arrayChopLast();
      }
      while (newArray.length > this.theArray.length) {
        this.arrayPushRaw(null);
      }
      _ref1 = this.cssRules;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        _ref2 = _ref1[_j], compare = _ref2[0], indexName = _ref2[1], className = _ref2[2];
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
      if (newArray.length) {
        showChange = __indexOf.call(this.showChanges, type) >= 0;
        for (i = _k = _ref3 = this.firstIndex, _ref4 = newArray.length; _ref3 <= _ref4 ? _k < _ref4 : _k > _ref4; i = _ref3 <= _ref4 ? ++_k : --_k) {
          this.arraySetFromRaw(i, newArray[i], showChange);
        }
      }
      indices = {};
      _ref5 = this.showIndices;
      for (_l = 0, _len2 = _ref5.length; _l < _len2; _l++) {
        i = _ref5[_l];
        if (/::/.test(i)) {
          i = i.split(/::/)[1];
        }
        target = this.virtualIndex(frame, i);
        if ((_ref6 = indices[target]) == null) {
          indices[target] = [];
        }
        indices[target].push(i);
      }
      this.$rowAnnotations.find("td").empty();
      for (i = _m = _ref7 = this.firstIndex, _ref8 = newArray.length; _ref7 <= _ref8 ? _m < _ref8 : _m > _ref8; i = _ref7 <= _ref8 ? ++_m : --_m) {
        if (indices[i] != null) {
          this.$annotations[i].html(indices[i].join(", "));
        }
      }
      return this.adjustHeight();
    };

    ArrayGuts.prototype.adjustHeight = function() {
      var _ref;
      if (this.container.height() > ((_ref = this.maxHeight) != null ? _ref : 0)) {
        return this.maxHeight = this.container.height();
      } else {

      }
    };

    ArrayGuts.prototype.resetHeight = function() {
      this.maxHeight = 0;
      return this.container.css("min-height", "");
    };

    ArrayGuts.prototype.resetHeight = function() {
      this.maxHeight = 0;
      return this.container.css("height", "");
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
        "class": "inline-input",
        maxlength: this.maxInputLength
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
      var event, frame, options, type, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return (_ref = this.graphDisplay).event.apply(_ref, [event].concat(__slice.call(options)));
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
      },
      formatArgumentValues: {
        type: "Object",
        defaultValue: {},
        description: "A mapping of arg-names to functions of arg-values to strings"
      },
      formatReturnValue: {
        type: "Object",
        defaultValue: {},
        description: "A mapping of proc names to functions from a " + "return-value to a string"
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
      if ($tr.html == null) {
        return;
      }
      return $tr.html("<td class='callstack-args'>" + ("" + (this.argStr(scope)) + "</td><td class='callstack-return'>") + ("" + (this.retStr(scope)) + "</td>"));
    };

    CallStack.prototype.setProcRow = function($tr, scope) {
      var procName, _ref;
      if ($tr.html == null) {
        return;
      }
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
            } else if (k in this.formatArgumentValues) {
              _results.push("" + k + "=" + (this.formatArgumentValues[k](v)));
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
      var r, ret, s;
      if (!("returnValue" in scope)) {
        return "&nbsp;";
      }
      if (scope.procName in this.formatReturnValue) {
        s = this.formatReturnValue[scope.procName](scope.returnValue);
      } else {
        ret = Vamonos.arrayify(scope.returnValue);
        s = ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = ret.length; _i < _len; _i++) {
            r = ret[_i];
            _results.push(Vamonos.rawToTxt(r));
          }
          return _results;
        })()).join(",");
      }
      return "<span class='callstack-arrow'>&uarr;</span>" + s;
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
      if (event === 'setup') {
        this.viz = options[0];
      }
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
      inputVars: {
        type: "Object",
        defaultValue: void 0,
        description: "a mapping from var names to default values"
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
          keyboardShortcuts: this.keyboardShortcuts,
          inputVars: this.inputVars
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
      var event, options, viz, _ref, _ref1, _ref2;
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
        case "setup":
          return viz = options[0], options;
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
      container = _arg.container, runStopButton = _arg.runStopButton, this.autoPlay = _arg.autoPlay, this.keyboardShortcuts = _arg.keyboardShortcuts, this.inputVars = _arg.inputVars;
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

    ControlButtons.prototype.setupInput = function() {
      var $input, $val, defaultValue, varName, _ref, _ref1, _results;
      if (this.inputVars == null) {
        return;
      }
      if (!this.visualizer) {
        throw "controller input: no visualizer";
      }
      _ref = this.inputVars;
      _results = [];
      for (varName in _ref) {
        defaultValue = _ref[varName];
        this.visualizer.registerVariable(varName);
        if (defaultValue != null) {
          this.visualizer.setVariable(varName, defaultValue);
        }
        if ((_ref1 = this.$inputDivs) == null) {
          this.$inputDivs = {};
        }
        this.$inputDivs[varName] = $("<div>", {
          "class": "controls-input"
        });
        $input = $("<span>", {
          text: "input: " + varName + " = "
        });
        $val = $("<span>", {
          "class": "val",
          html: defaultValue != null ? Vamonos.rawToTxt(defaultValue) : "???"
        });
        this.$inputDivs[varName].append($input, $val);
        _results.push(this.$container.prepend(this.$inputDivs[varName]));
      }
      return _results;
    };

    ControlButtons.prototype.acceptInput = function() {
      var $div, varName, _ref, _results;
      console.log(this.$inputDivs);
      _ref = this.$inputDivs;
      _results = [];
      for (varName in _ref) {
        $div = _ref[varName];
        _results.push((function(varName, $div, ths) {
          var _this = this;
          return $div.on("click", function() {
            console.log(varName);
            return Vamonos.editableValue($div.children("span.val"), (function(e) {
              return Vamonos.txtToRaw(e.text());
            }), function(newval) {
              var v;
              if (newval != null) {
                v = Vamonos.txtToRaw(newval);
                ths.inputVars[varName] = v;
                ths.visualizer.setVariable(varName, v);
              }
              return Vamonos.rawToTxt(ths.inputVars[varName]);
            });
          });
        })(varName, $div, this));
      }
      return _results;
    };

    ControlButtons.prototype.rejectInput = function() {
      var $div, varName, _ref, _results;
      _ref = this.$inputDivs;
      _results = [];
      for (varName in _ref) {
        $div = _ref[varName];
        _results.push($div.off("click"));
      }
      return _results;
    };

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
            $("body").on("keydown.controlbuttons", function(e) {
              return _this.keyDownHandler(e);
            });
          }
          if (this.inputVars != null) {
            return this.setupInput();
          }
          break;
        case "editStart":
          this.$runStopButton.html(RUN);
          this.$runStopButton.prop("title", "Execute the algorithm with current inputs/breakpoints/etc [shortcut: enter]");
          this.prevButtonActive(false);
          this.nextButtonActive(false);
          this.playPauseButtonActive(false);
          this.$container.addClass("controls-disabled");
          this.mode = "edit";
          if (this.inputVars != null) {
            return this.acceptInput();
          }
          break;
        case "editStop":
          if (this.inputVars != null) {
            return this.rejectInput();
          }
          break;
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
        example: "new Vamonos.Widget.Error({\n    conditions: [\n        function(viz){\n            var s = viz.getVariable(\"s\");\n            var t = viz.getVariable(\"t\");\n            if (s.id === t.id) {\n                return \"Ford-Fulkerson says: s and t must be different!\";\n            }\n        }\n    ]\n})"
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
      if (event === 'setup') {
        return viz = options[0], options;
      } else if (event === 'checkErrors') {
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
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  GraphDisplay = (function() {

    GraphDisplay.description = "GraphDisplay provides display functionality to " + "widgets that might not need to use graph data structures.";

    GraphDisplay.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      vertexLabels: {
        type: "Object",
        defaultValue: {},
        description: "an object containing a mapping of label positions " + "(inner, nw, sw, ne, se) to labels. Labels can display " + "simple variable names (corresponding to inputVars). " + "This must be provided in the form: `{ label: ['var1', 'var2'] }`. " + "It can be more complicated, as a function that takes " + "a vertex and returns some html. if we give a label " + "an object, we can control what is shown in edit/display " + "mode in the form: " + "`{ label : { edit: function{}, display: function{} } }`",
        example: "vertexLabels: {\n    inner : {\n        edit: function(vtx){return vtx.name},\n        display: function(vtx){return vtx.d}\n    },\n    sw    : function(vtx){return vtx.name},\n    ne    : ['u', 'v'],\n    nw    : ['s'],\n}"
      },
      edgeLabel: {
        type: ["String", "Function", "Object"],
        defaultValue: void 0,
        description: "a string, containing the name of the edge attribute to display" + "or a function taking an edge and returning a string to display. " + "one can also specify whether to show certain things in edit or " + "display mode by using an object.",
        example: "edgeLabel: { display: 'w', edit: function(e){ return e.w } },\nedgeLabel: 'w',\nedgeLabel: function(e){ return e.w + \"!\" },"
      },
      vertexCssAttributes: {
        type: "Object",
        defaultValue: {},
        description: "provides a way to change CSS classes of vertices based on " + "vertex attributes. takes an object of the form `{ attribute: " + "value | [list of values] }`. in the case of a single value,  " + "the vertex will simply get a class with the same name as " + "the attribute. in the case of a list of values, the css " + "class will be of the form 'attribute-value' when its value " + "matches. You can also provide a function that takes a vertex " + "and returns a class to apply to it.",
        example: "vertexCssAttributes: {\n    done: true,\n    color: ['white', 'gray', 'black'],\n    magic: function(vtx){ return \"class-\" + vtx.magicAttr },\n},"
      },
      edgeCssAttributes: {
        type: "Object",
        defaultValue: {},
        description: "provides a way to change CSS classes of edges based " + "upon the values of variables or the edges themselves. You provide " + "a mapping of classnames to functions or strings. The function " + "simply needs to take an edge and return a boolean (whether to " + "apply the class). The string is a pairing of variable names in " + "the form `'u->v'` or `'u<->v'` for undirected graphs.",
        example: "edgeCssAttributes: {\n    green: function(edge){\n        return (edge.target.pred === edge.source.name)\n            || (edge.source.pred === edge.target.name)\n    },\n    red: \"u->v\",\n}"
      },
      styleEdges: {
        type: "Array",
        defaultValue: void 0,
        description: "Provides a way to add styles to path objects. " + "Functions must return an array whose first element is an " + "attribute name, and second element is the value.",
        example: "styleEdges: [\n    function(e){\n        if (e.f !== undefined && (e.f > 0)) {\n            var width = 2 + e.f;\n            return [\"stroke-width\", width];\n        }\n    },\n],"
      },
      containerMargin: {
        type: "Number",
        defaultValue: 30,
        description: "how close vertices can get to the container edge"
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
        description: "whether vertices can be moved"
      },
      highlightChanges: {
        type: "Boolean",
        defaultValue: true,
        description: "whether vertices will get the css class 'changed' when they are modified"
      },
      showVertexChanges: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to flash vertices that have changed attributes"
      },
      vertexWidth: {
        type: "Number",
        defaultValue: 40,
        description: "the width of vertices in the graph"
      },
      vertexHeight: {
        type: "Number",
        defaultValue: 30,
        description: "the height of vertices in the graph"
      },
      arrowWidth: {
        type: "Number",
        defaultValue: 6,
        description: "the width of arrows in directed graphs"
      },
      arrowLength: {
        type: "Number",
        defaultValue: 6,
        description: "the length of arrows in directed graphs"
      },
      bezierCurviness: {
        type: "Number",
        defaultValue: 15,
        description: "the curviness of bezier curves in this graph"
      },
      persistentDragging: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the positions resulting from dragging " + "vertices are persistent across frames in display mode."
      },
      animateEdgeFlips: {
        type: "Boolean",
        defaultValue: false,
        description: "whether edges flip ostentatiously when they switch source and target"
      },
      background: {
        type: "Object",
        defaultValue: void 0,
        description: "an image to use as the background of the graph. " + "Args come in as an object `{ source: STRING, callback: OPTIONAL-FUNCTION }`. " + "If callback is provided, it must be a function taking a d3 selector." + "You can specify seperate images for edit and display mode by providing " + "an object such as `{ display: { source: STRING, callback: OPTIONAL-FUNCTION } " + "edit: { source: STRING, callback: OPTIONAL-FUNCTION }`"
      },
      fadeIn: {
        type: "Boolean",
        defaultValue: false,
        description: "whether new things fade in, and deleted things fade out"
      }
    };

    function GraphDisplay(args) {
      this.updateVertexClasses = __bind(this.updateVertexClasses, this);

      this.updateEdgeStyles = __bind(this.updateEdgeStyles, this);

      this.updateEdgeClasses = __bind(this.updateEdgeClasses, this);

      this.edgeLabelVal = __bind(this.edgeLabelVal, this);

      this.setEdgeLabelPos = __bind(this.setEdgeLabelPos, this);

      this.updateEdgeLabels = __bind(this.updateEdgeLabels, this);

      this.createEdgeLabels = __bind(this.createEdgeLabels, this);

      this.updateVertexLabels = __bind(this.updateVertexLabels, this);

      this.createVertexLabels = __bind(this.createVertexLabels, this);

      this.intersectVertex = __bind(this.intersectVertex, this);

      this.perpendicularPoints = __bind(this.perpendicularPoints, this);

      this.dvector = __bind(this.dvector, this);

      this.pathBezierWithArrow = __bind(this.pathBezierWithArrow, this);

      this.pathStraightWithArrow = __bind(this.pathStraightWithArrow, this);

      this.pathStraightNoArrow = __bind(this.pathStraightNoArrow, this);

      this.antiparallelEdge = __bind(this.antiparallelEdge, this);

      this.genPath = __bind(this.genPath, this);

      var _ref,
        _this = this;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        specObj: Vamonos.Widget.GraphDisplay.spec
      });
      this.$outer = Vamonos.jqueryify(this.container);
      if (((_ref = this.edgeLabel) != null ? _ref.constructor.name : void 0) !== 'Object') {
        this.edgeLabel = {
          edit: this.edgeLabel,
          display: this.edgeLabel
        };
      }
      this.$outer.disableSelection();
      if (this.resizable) {
        this.$outer.resizable({
          handles: "se",
          resize: function(e, ui) {
            _this.svg.attr("height", ui.size.height);
            return _this.svg.attr("width", ui.size.width);
          }
        });
      }
      this.svg = d3.selectAll("#" + this.$outer.attr("id")).append("svg");
      this.createShadowFilter({
        svg: this.svg,
        id: "shadow-green",
        red: 0.0,
        green: 0.9,
        blue: 0.0
      });
      this.createShadowFilter({
        svg: this.svg,
        id: "shadow-blue",
        red: 0.0,
        green: 0.0,
        blue: 0.9
      });
      this.createShadowFilter({
        svg: this.svg,
        id: "shadow",
        red: 0,
        green: 0,
        blue: 0,
        dx: 5,
        dy: 5
      });
      this.inner = this.initializeInner(this.svg);
      this._savex = {};
      this._savey = {};
    }

    GraphDisplay.prototype.initializeInner = function() {
      return this.svg.append("g").attr("transform", "translate(" + [this.containerMargin, this.containerMargin] + ")");
    };

    GraphDisplay.prototype.setBackground = function() {
      var make_bg,
        _this = this;
      if (this._bgmode === this.mode) {
        return;
      }
      if (this._existingbg != null) {
        this._existingbg.style("opacity", 1).transition().duration(400).style("opacity", 0).remove();
      }
      make_bg = function(source, callback) {
        _this._existingbg = _this.svg.insert("image", "defs").attr("xlink:href", source);
        _this._existingbg.style("opacity", 0).transition().duration(400).style("opacity", 1);
        if (callback != null) {
          return callback(_this._existingbg);
        }
      };
      if (this.background != null) {
        if (this.background[this.mode] != null) {
          if (this.background[this.mode].source == null) {
            return;
          }
          make_bg(this.background[this.mode].source, this.background[this.mode].callback);
        } else if (this.background.source != null) {
          make_bg(this.background.source, this.background.callback);
        }
        return this._bgmode = this.mode;
      }
    };

    GraphDisplay.prototype.createShadowFilter = function(_arg) {
      var blue, dx, dy, filter, green, id, merge, red, svg, _ref;
      svg = _arg.svg, id = _arg.id, red = _arg.red, green = _arg.green, blue = _arg.blue, dx = _arg.dx, dy = _arg.dy;
      if (dx == null) {
        dx = 0;
      }
      if (dy == null) {
        dy = 0;
      }
      if ((_ref = this.defs) == null) {
        this.defs = svg.append("svg:defs");
      }
      filter = this.defs.append("svg:filter").attr("id", id).attr("height", 100).attr("width", 100).attr("x", -50).attr("y", -50);
      filter.append("svg:feGaussianBlur").attr("in", "SourceGraphic").attr("stdDeviation", 5);
      filter.append("svg:feOffset").attr("dx", dx).attr("dy", dy);
      filter.append("svg:feColorMatrix").attr("type", "matrix").attr("values", "0 0 0 " + red + " 0                             0 0 0 " + green + " 0                             0 0 0 " + blue + " 0                             0 0 0 1          0").attr("result", "colorblur");
      merge = filter.append("feMerge");
      merge.append("feMergeNode").attr("in", "colorblur");
      return merge.append("feMergeNode").attr("in", "SourceGraphic");
    };

    GraphDisplay.prototype.event = function() {
      var event, klass, label, options, test, v, values, viz, _i, _len, _ref, _ref1, _ref2, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0];
          _ref = this.edgeCssAttributes;
          for (klass in _ref) {
            test = _ref[klass];
            if (typeof test === 'string') {
              _ref1 = test.split(/<?->?/);
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                v = _ref1[_i];
                viz.registerVariable(v);
              }
            }
          }
          _ref2 = this.vertexLabels;
          _results = [];
          for (label in _ref2) {
            values = _ref2[label];
            _results.push((function() {
              var _j, _len1, _results1;
              _results1 = [];
              for (_j = 0, _len1 = values.length; _j < _len1; _j++) {
                v = values[_j];
                if (typeof v === 'string') {
                  _results1.push(viz.registerVariable(v));
                }
              }
              return _results1;
            })());
          }
          return _results;
      }
    };

    GraphDisplay.prototype.draw = function(graph, frame) {
      var _ref,
        _this = this;
      if (frame == null) {
        frame = {};
      }
      if (this.graphHidden) {
        this.showGraph();
      }
      if ((_ref = this.mode) == null) {
        this.mode = "display";
      }
      this.setBackground();
      if (graph == null) {
        return;
      }
      this.directed = graph.directed;
      this.inner.selectAll(".changed").classed("changed", null);
      this.currentGraph = graph;
      this.currentFrame = frame;
      if (!this.fitAlready) {
        this.fitGraph();
        this.fitAlready = true;
      }
      if (this.persistentDragging) {
        this.currentGraph.eachVertex(function(v) {
          if ((_this._savex[v.id] != null) && (_this._savey[v.id] != null)) {
            v.x = _this._savex[v.id];
            return v.y = _this._savey[v.id];
          }
        });
      }
      this.updateVertices();
      this.updateEdges();
      if (this.draggable) {
        this.startDragging();
      }
      return this.previousGraph = graph;
    };

    GraphDisplay.prototype.fitGraph = function(animate) {
      var max_x, max_y, vertex, xVals, yVals, _i, _len, _ref, _ref1, _ref2;
      if (animate == null) {
        animate = false;
      }
      if (this.currentGraph != null) {
        xVals = [];
        yVals = [];
        _ref = this.currentGraph.getVertices();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          vertex = _ref[_i];
          if (!!isNaN(vertex.x)) {
            continue;
          }
          if (!!isNaN(vertex.y)) {
            continue;
          }
          xVals.push(vertex.x + (this.vertexWidth / 2) + this.containerMargin * 2);
          yVals.push(vertex.y + (this.vertexHeight / 2) + this.containerMargin * 2);
        }
        max_x = Math.max.apply(Math, __slice.call(xVals).concat([this.minX]));
        max_y = Math.max.apply(Math, __slice.call(yVals).concat([this.minY]));
      } else {
        max_x = (_ref1 = this.minX) != null ? _ref1 : 0;
        max_y = (_ref2 = this.minY) != null ? _ref2 : 0;
      }
      if (animate) {
        return this.svg.animate({
          width: max_x,
          height: max_y
        }, 500);
      } else {
        this.$outer.width("100%");
        this.svg.attr("height", max_y);
        return this.svg.attr("width", max_x);
      }
    };

    GraphDisplay.prototype.hideGraph = function() {
      this.$outer.hide();
      return this.graphHidden = true;
    };

    GraphDisplay.prototype.showGraph = function() {
      this.$outer.show();
      return this.graphHidden = false;
    };

    GraphDisplay.prototype.clearDisplay = function() {
      if (this.persistentDragging) {
        this._savex = {};
        this._savey = {};
      }
      if (this.fadeIn) {
        this.inner.style("opacity", 1).transition().duration(700).style("opacity", 0).remove();
      } else {
        this.inner.remove();
      }
      this.inner = this.initializeInner();
      this.currentGraph = void 0;
      this.previousGraph = void 0;
      this.fitGraph();
      return this.fitAlready = void 0;
    };

    GraphDisplay.prototype.startDragging = function(graph) {
      var drag, dragmove, dragstart, ths, trans;
      trans = function(d) {
        return "translate(" + [d.x, d.y] + ")";
      };
      ths = this;
      dragstart = function(d) {
        var parent, ref;
        parent = this.parentNode;
        ref = parent.querySelector(".graph-label");
        parent.insertBefore(this, ref);
        return this.style.filter = "url(#shadow)";
      };
      dragmove = function(d) {
        if (!dragmove.initialized) {
          dragstart.call(this, d);
          dragmove.initialized = true;
        }
        d.x = d3.event.x;
        d.y = d3.event.y;
        this.setAttribute("transform", trans(d));
        ths.inner.selectAll("path.edge").call(ths.genPath);
        return ths.updateEdgeLabels();
      };
      drag = d3.behavior.drag().on("drag", dragmove).on("dragend", function(d) {
        dragmove.initialized = false;
        d3.select(this).style("filter", null);
        if (ths.persistentDragging && ths.mode === 'display') {
          ths._savex[d.id] = d.x;
          return ths._savey[d.id] = d.y;
        }
      });
      return this.inner.selectAll("g.vertex").call(drag);
    };

    GraphDisplay.prototype.stopDragging = function() {
      return this.inner.selectAll("g.vertex").on("mousedown.drag", null);
    };

    GraphDisplay.prototype.updateVertices = function() {
      var enter, id, maybeAnimateRemoval, ths, trans, vertices;
      id = function(vtx) {
        return vtx.id;
      };
      trans = function(d) {
        return "translate(" + [d.x, d.y] + ")";
      };
      vertices = this.inner.selectAll("g.vertex").data(this.currentGraph.getVertices(), id).attr("transform", trans).call(this.updateVertexLabels).call(this.updateVertexClasses);
      enter = vertices.enter().append("g").attr("transform", trans).attr("class", "vertex").attr("id", function(d) {
        return d.id;
      });
      if (this.fadeIn) {
        enter.style("opacity", 0).transition().duration(500).style("opacity", 1);
      }
      enter.append("ellipse").attr("class", "vertex").attr("cx", 0).attr("cy", 0).attr("rx", this.vertexWidth / 2).attr("ry", this.vertexHeight / 2);
      enter.call(this.createVertexLabels).call(this.updateVertexClasses);
      ths = this;
      maybeAnimateRemoval = function(vtx) {
        var colVtx, collapsedSel, sel, _ref;
        sel = d3.select(this);
        if (((_ref = ths.currentGraph.recentlyCollapsed) != null ? _ref[vtx.id] : void 0) != null) {
          colVtx = ths.currentGraph.recentlyCollapsed[vtx.id];
          collapsedSel = d3.select("#" + colVtx.id);
          collapsedSel.style("visibility", "hidden");
          return sel.transition().attr("transform", trans(colVtx)).remove().each("end", function() {
            return collapsedSel.style("visibility", "visible");
          });
        } else if (ths.fadeIn) {
          return sel.style("opacity", 1).transition().style("opacity", 0).remove();
        } else {
          return sel.remove();
        }
      };
      return vertices.exit().each(maybeAnimateRemoval);
    };

    GraphDisplay.prototype.updateEdges = function() {
      var edges, enter, maybeFlipAndRemove, ths;
      edges = this.inner.selectAll("path.edge").data(this.currentGraph.getEdges(), this.currentGraph.edgeId);
      edges.call(this.genPath).call(this.updateEdgeClasses).call(this.updateEdgeStyles);
      enter = edges.enter().insert("path", ":first-child").attr("class", "edge");
      enter.call(this.genPath).call(this.updateEdgeClasses).call(this.updateEdgeStyles);
      if (this.fadeIn) {
        enter.style("opacity", 0).transition().duration(500).style("opacity", 1);
      }
      ths = this;
      maybeFlipAndRemove = function(edge) {
        var otherEdge, otherSel, sel, tween, x, y;
        sel = d3.select(this);
        if (ths.animateEdgeFlips && ths.highlightChanges) {
          otherEdge = ths.currentGraph.edge(edge.target, edge.source);
          if (otherEdge) {
            otherSel = d3.select("#" + ths.currentGraph.edgeId(otherEdge));
            otherSel.style("visibility", "hidden");
            x = (edge.source.x + edge.target.x) / 2;
            y = (edge.source.y + edge.target.y) / 2;
            tween = function() {
              return d3.interpolateString("rotate(0, " + x + ", " + y + ")", "rotate(-180, " + x + ", " + y + ")");
            };
            return sel.transition().attrTween("transform", tween).remove().each("end", function() {
              return otherSel.style("visibility", "visible");
            });
          } else {
            return sel.remove();
          }
        } else {
          return sel.remove();
        }
      };
      edges.exit().each(maybeFlipAndRemove);
      return this.updateEdgeLabels();
    };

    GraphDisplay.prototype.genPath = function(sel) {
      var getPath,
        _this = this;
      getPath = function(e) {
        var path;
        if (![e.source.x, e.source.y, e.target.x, e.target.y].every(isFinite)) {
          throw "GETPATH: Bad coordinates";
        }
        if (!_this.directed) {
          path = _this.pathStraightNoArrow(e);
        } else if (_this.antiparallelEdge(e)) {
          path = _this.pathBezierWithArrow(e);
        } else {
          path = _this.pathStraightWithArrow(e);
        }
        return path;
      };
      sel.attr("d", getPath).attr("id", this.currentGraph.edgeId);
      return sel;
    };

    GraphDisplay.prototype.antiparallelEdge = function(e) {
      if (!this.directed) {
        return false;
      }
      return this.currentGraph.edge(e.target, e.source);
    };

    GraphDisplay.prototype.pathStraightNoArrow = function(e) {
      var dx, dy, lx, ly, midx, midy, _, _ref, _ref1, _ref2;
      midx = (e.source.x + e.target.x) / 2;
      midy = (e.source.y + e.target.y) / 2;
      _ref = this.dvector([e.source.x, e.source.y], [e.target.x, e.target.y]), dx = _ref[0], dy = _ref[1];
      _ref1 = this.perpendicularPoints([midx, midy], dx, dy, this.arrowWidth * 1.5), _ = _ref1[0], (_ref2 = _ref1[1], lx = _ref2[0], ly = _ref2[1]);
      e._labelx = lx === lx ? lx : void 0;
      e._labely = ly === ly ? ly : void 0;
      return ("M " + e.source.x + " " + e.source.y + " ") + ("L " + e.target.x + " " + e.target.y + " ");
    };

    GraphDisplay.prototype.pathStraightWithArrow = function(e) {
      var x1, y1, _ref;
      _ref = this.intersectVertex([e.target.x, e.target.y], [e.source.x, e.source.y]), x1 = _ref[0], y1 = _ref[1];
      return ("M " + e.source.x + " " + e.source.y) + this.pathArrowAt([x1, y1], [e.source.x, e.source.y], e);
    };

    GraphDisplay.prototype.pathBezierWithArrow = function(e) {
      var refx, refy, x1, x2, y1, y2, _ref, _ref1, _ref2;
      _ref = this.bezierRefPoint(e), refx = _ref[0], refy = _ref[1];
      _ref1 = this.intersectVertex([e.source.x, e.source.y], [refx, refy]), x1 = _ref1[0], y1 = _ref1[1];
      _ref2 = this.intersectVertex([e.target.x, e.target.y], [refx, refy]), x2 = _ref2[0], y2 = _ref2[1];
      return (" M " + e.source.x + " " + e.source.y + " L " + x1 + " " + y1 + " ") + (" Q " + refx + " " + refy + " " + x2 + " " + y2) + this.pathArrowAt([x2, y2], [refx, refy], e);
    };

    GraphDisplay.prototype.bezierRefPoint = function(e) {
      var dx, dy, midx, midy, refx, refy, _ref;
      midx = (e.source.x + e.target.x) / 2;
      midy = (e.source.y + e.target.y) / 2;
      _ref = this.dvector([e.source.x, e.source.y], [e.target.x, e.target.y]), dx = _ref[0], dy = _ref[1];
      refx = midx - this.bezierCurviness * dy;
      refy = midy + this.bezierCurviness * dx;
      return [refx, refy];
    };

    GraphDisplay.prototype.pathArrowAt = function(_arg, _arg1, edge) {
      var dx, dy, x1, x2, x3, x4, x5, xstart, y1, y2, y3, y4, y5, ystart, _, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      x1 = _arg[0], y1 = _arg[1];
      xstart = _arg1[0], ystart = _arg1[1];
      _ref = this.dvector([xstart, ystart], [x1, y1]), dx = _ref[0], dy = _ref[1];
      x2 = x1 - (dx * -this.arrowLength);
      y2 = y1 - (dy * -this.arrowLength);
      _ref1 = this.perpendicularPoints([x2, y2], dx, dy, this.arrowWidth / 2), (_ref2 = _ref1[0], x3 = _ref2[0], y3 = _ref2[1]), (_ref3 = _ref1[1], x4 = _ref3[0], y4 = _ref3[1]);
      if (edge != null) {
        _ref4 = this.perpendicularPoints([x2, y2], dx, dy, this.arrowWidth * 2), _ = _ref4[0], (_ref5 = _ref4[1], x5 = _ref5[0], y5 = _ref5[1]);
        edge._labelx = x5;
        edge._labely = y5;
      }
      return (" L " + x2 + " " + y2 + " L " + x3 + " " + y3) + (" L " + x1 + " " + y1 + " L " + x4 + " " + y4) + (" L " + x2 + " " + y2 + " L " + x1 + " " + y1);
    };

    GraphDisplay.prototype.dvector = function(_arg, _arg1) {
      var dist, dx, dy, x1, x2, y1, y2;
      x1 = _arg[0], y1 = _arg[1];
      x2 = _arg1[0], y2 = _arg1[1];
      dx = x1 - x2;
      dy = y1 - y2;
      dist = Math.sqrt(dx * dx + dy * dy);
      dx = dx / dist;
      dy = dy / dist;
      return [dx, dy];
    };

    GraphDisplay.prototype.perpendicularPoints = function(_arg, dx, dy, len) {
      var x, y;
      x = _arg[0], y = _arg[1];
      return [[x + len * dy, y - len * dx], [x - len * dy, y + len * dx]];
    };

    GraphDisplay.prototype.intersectVertex = function(_arg, _arg1) {
      var a, b, dx, dy, sq, thingy, x0, x1, y0, y1;
      x1 = _arg[0], y1 = _arg[1];
      x0 = _arg1[0], y0 = _arg1[1];
      dx = x0 - x1;
      dy = y0 - y1;
      sq = function(x) {
        return Math.pow(x, 2);
      };
      a = this.vertexWidth / 2 + 5;
      b = this.vertexHeight / 2 + 5;
      thingy = a * b / Math.sqrt(sq(a) * sq(dy) + sq(b) * sq(dx));
      return [thingy * dx + x1, thingy * dy + y1];
    };

    GraphDisplay.prototype.createVertexLabels = function(vertexGroup) {
      var setLabel, x, xOffset, y, yOffset,
        _this = this;
      x = this.vertexWidth / 2;
      y = this.vertexHeight / 2;
      xOffset = x / 2;
      yOffset = y / 2;
      setLabel = function(klass, xPos, yPos) {
        return vertexGroup.append("text").attr("class", klass).attr("x", xPos).attr("y", yPos);
      };
      setLabel("vertex-contents", 0, yOffset / 2);
      setLabel("vertex-ne-label", x, -y);
      setLabel("vertex-nw-label", -x - xOffset, -y);
      setLabel("vertex-se-label", x, y + yOffset);
      setLabel("vertex-sw-label", -x - xOffset, y + yOffset);
      vertexGroup.call(this.updateVertexLabels);
      return vertexGroup;
    };

    GraphDisplay.prototype.updateVertexLabels = function(sel) {
      var style, target, type, vw, _ref, _ref1,
        _this = this;
      _ref = this.vertexLabels;
      for (type in _ref) {
        style = _ref[type];
        target = sel.select("text." + (function() {
          switch (type) {
            case "inner":
              return "vertex-contents";
            case "ne":
              return "vertex-ne-label";
            case "nw":
              return "vertex-nw-label";
            case "se":
              return "vertex-se-label";
            case "sw":
              return "vertex-sw-label";
            default:
              throw Error("GraphDisplay '" + this.varName + "': no vertex label \"" + type + "\"");
          }
        }).call(this));
        if (style.constructor.name === "Function") {
          target.text(function(d) {
            return Vamonos.rawToTxt(style(d));
          });
        } else if (style.constructor.name === "Array") {
          target.text(function(d) {
            var res, v, _i, _len, _ref1;
            res = [];
            for (_i = 0, _len = style.length; _i < _len; _i++) {
              v = style[_i];
              if (((_ref1 = _this.currentFrame[v]) != null ? _ref1.id : void 0) === d.id) {
                res.push(Vamonos.resolveSubscript(Vamonos.removeNamespace(v)));
              }
            }
            return res.join(",");
          });
        } else if (style.constructor.name === "Object" && ((_ref1 = style[this.mode]) != null ? _ref1.constructor.name : void 0) === "Function") {
          target.text(function(d) {
            return Vamonos.rawToTxt(style[_this.mode](d));
          });
        } else {
          target.text("");
        }
        if (type === "inner") {
          vw = this.vertexWidth;
          target.each(function(d) {
            var v, w, _ref2, _ref3;
            w = this.getComputedTextLength();
            if (w + 10 > vw) {
              v = typeof this !== "undefined" && this !== null ? (_ref2 = this.parentNode) != null ? (_ref3 = _ref2.children) != null ? _ref3[0] : void 0 : void 0 : void 0;
              return v != null ? v.setAttribute("rx", (w / 2) + 10) : void 0;
            }
          });
        }
      }
      return sel;
    };

    GraphDisplay.prototype.createEdgeLabels = function() {
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      this.inner.selectAll("text.graph-label").data(function(d) {
        return this.currentGraph.getEdges();
      }).enter().append("text").attr("class", "graph-label");
      this.updateEdgeLabels();
      return edgeGroups;
    };

    GraphDisplay.prototype.updateEdgeLabels = function() {
      var sel,
        _this = this;
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      sel = this.inner.selectAll("text.graph-label").data(function(d) {
        return _this.currentGraph.getEdges();
      }).text(this.edgeLabelVal).attr("x", function(d) {
        return d._labelx;
      }).attr("y", function(d) {
        return d._labely;
      });
      sel.enter().append("text").attr("class", "graph-label").text(this.edgeLabelVal).attr("x", function(d) {
        return d._labelx;
      }).attr("y", function(d) {
        return d._labely;
      });
      return sel.exit().remove();
    };

    GraphDisplay.prototype.setEdgeLabelPos = function(labelSel) {
      var xPos, yPos,
        _this = this;
      xPos = function(e) {
        var x, y, _ref;
        if (_this.antiparallelEdge(e)) {
          _ref = _this.bezierRefPoint(e), x = _ref[0], y = _ref[1];
          return x;
        } else {
          return Math.floor((e.source.x + e.target.x) / 2);
        }
      };
      yPos = function(e) {
        var x, y, _ref;
        if (_this.antiparallelEdge(e)) {
          _ref = _this.bezierRefPoint(e), x = _ref[0], y = _ref[1];
          return y + 4;
        } else {
          return Math.floor((e.source.y + e.target.y) / 2 + 4);
        }
      };
      return labelSel.attr("x", xPos).attr("y", yPos);
    };

    GraphDisplay.prototype.edgeLabelVal = function(edge) {
      var attr, val, _ref;
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      if (this.edgeLabel[this.mode].constructor.name === 'Function') {
        return val = this.edgeLabel[this.mode](edge);
      } else if (this.edgeLabel[this.mode].constructor.name === 'String') {
        attr = this.edgeLabel[this.mode];
        return val = Vamonos.rawToTxt((_ref = edge[attr]) != null ? _ref : "");
      } else {

      }
    };

    GraphDisplay.prototype.updateEdgeClasses = function(edges) {
      var klass, source, target, test, _ref, _ref1, _ref2,
        _this = this;
      if (this.edgeCssAttributes == null) {
        return;
      }
      _ref = this.edgeCssAttributes;
      for (klass in _ref) {
        test = _ref[klass];
        if ((test != null ? test.constructor.name : void 0) === 'Function') {
          edges.classed(klass, test);
        } else if ((test != null ? test.constructor.name : void 0) === 'String') {
          if (test.match(/<->/)) {
            _ref1 = test.split(/<->/).map(function(v) {
              return _this.currentFrame[v];
            }), source = _ref1[0], target = _ref1[1];
            edges.classed(klass, function(e) {
              return (e.source.id === (source != null ? source.id : void 0) && e.target.id === (target != null ? target.id : void 0)) || (e.target.id === (source != null ? source.id : void 0) && e.source.id === (target != null ? target.id : void 0));
            });
          } else {
            _ref2 = test.split(/->/).map(function(v) {
              return _this.currentFrame[v];
            }), source = _ref2[0], target = _ref2[1];
            edges.classed(klass, function(e) {
              return e.source.id === (source != null ? source.id : void 0) && e.target.id === (target != null ? target.id : void 0);
            });
          }
        }
      }
      return edges;
    };

    GraphDisplay.prototype.updateEdgeStyles = function(edges) {
      var styleFunc, styles, _i, _len, _ref, _ref1, _ref2, _results;
      if (!((_ref = this.styleEdges) != null ? _ref.length : void 0)) {
        return;
      }
      _ref1 = this.styleEdges;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        styleFunc = _ref1[_i];
        if (styleFunc.constructor.name !== 'Function') {
          continue;
        }
        styles = ((_ref2 = this.appliedEdgeStyles) != null ? _ref2 : this.appliedEdgeStyles = []);
        _results.push(edges.each(function(e) {
          var attr, res, val, _j, _len1, _results1;
          res = styleFunc(e);
          if ((res != null ? res.length : void 0) === 2) {
            attr = res[0], val = res[1];
            Vamonos.insertSet(attr, styles);
            return this.style[attr] = val;
          } else {
            _results1 = [];
            for (_j = 0, _len1 = styles.length; _j < _len1; _j++) {
              attr = styles[_j];
              _results1.push(this.style[attr] = null);
            }
            return _results1;
          }
        }));
      }
      return _results;
    };

    GraphDisplay.prototype.updateVertexClasses = function(vertexGroups) {
      var applyClass, attr, kind, labels, ths, val, vertices, _ref, _results,
        _this = this;
      vertices = vertexGroups.selectAll("ellipse.vertex").data(function(d) {
        return [d];
      }).classed("changed", function(vertex) {
        return _this.highlightChanges && _this.showVertexChanges && _this.mode === 'display' && _this.vertexChanged(vertex);
      });
      labels = vertexGroups.selectAll("text.vertex-contents").data(function(d) {
        return [d];
      });
      _ref = this.vertexCssAttributes;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        if (val.constructor.name === "Function") {
          ths = this;
          _results.push(vertexGroups.each(function(vertex) {
            var newClass, sel, _base, _name, _ref1, _ref2;
            if ((_ref1 = (_base = ((_ref2 = ths.appliedNodeClasses) != null ? _ref2 : ths.appliedNodeClasses = {}))[_name = vertex.id]) == null) {
              _base[_name] = {};
            }
            sel = d3.select(this);
            newClass = val(vertex);
            if (newClass === ths.appliedNodeClasses[vertex.id][attr]) {
              return;
            }
            if (ths.appliedNodeClasses[vertex.id][attr] != null) {
              sel.select("ellipse.vertex").classed(ths.appliedNodeClasses[vertex.id][attr], false);
              sel.select("text.vertex-contents").classed(ths.appliedNodeClasses[vertex.id][attr], false);
            }
            if (newClass != null) {
              sel.select("ellipse.vertex").classed(newClass, true);
              sel.select("text.vertex-contents").classed(newClass, true);
              return ths.appliedNodeClasses[vertex.id][attr] = newClass;
            } else {
              return delete ths.appliedNodeClasses[vertex.id][attr];
            }
          }));
        } else if (val.constructor.name === "Array") {
          _results.push((function() {
            var _i, _len, _results1;
            _results1 = [];
            for (_i = 0, _len = val.length; _i < _len; _i++) {
              kind = val[_i];
              applyClass = function(sel) {
                return sel.classed("" + attr + "-" + kind, function(vtx) {
                  return vtx[attr] === kind;
                });
              };
              vertices.call(applyClass);
              _results1.push(labels.call(applyClass));
            }
            return _results1;
          })());
        } else {
          _results.push(vertices.classed(attr, function(vertex) {
            return vertex[attr] === val;
          }));
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
        if (!(k[0] !== "_")) {
          continue;
        }
        if (k === "x" || k === "y") {
          continue;
        }
        if ((v != null ? v.type : void 0) === "Vertex") {
          if (((_ref = oldv[k]) != null ? _ref.id : void 0) !== v.id) {
            return true;
          }
        } else {
          if (oldv[k] !== v) {
            return true;
          }
        }
      }
      for (k in oldv) {
        v = oldv[k];
        if (!(k[0] !== "_")) {
          continue;
        }
        if (k === "x" || k === "y") {
          continue;
        }
        if ((v != null ? v.type : void 0) === "Vertex") {
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
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Graph = (function(_super) {

    __extends(Graph, _super);

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
        description: "a mapping of variable names to vertex ids of the form                `{ var1: 'node1' }` for displaying variables that contain                vertices."
      },
      editable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the graph allows user input"
      },
      showChanges: {
        type: ["String", "Array"],
        description: "type of frame shifts to highlight changes at, " + "can be multiple types with an array of strings",
        defaultValue: "next"
      },
      defaultEdgeAttrs: {
        type: "Object",
        defaultValue: void 0,
        description: "A mapping of attribute names to default values for " + "new edges created in edit mode."
      },
      defaultVertexAttrs: {
        type: "Object",
        defaultValue: void 0,
        description: "A mapping of attribute names to default values for " + "new vertices created in edit mode."
      },
      editableEdgeAttrs: {
        type: "Boolean",
        defaultValue: true,
        description: "whether edge attributes are modifiable in edit mode."
      }
    };

    function Graph(args) {
      this.removePotentialEdge = __bind(this.removePotentialEdge, this);

      this.potentialEdgeTo = __bind(this.potentialEdgeTo, this);

      var argName, k, v, _base, _base1, _ref, _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        ignoreExtraArgs: true
      });
      this.showChanges = Vamonos.arrayify(this.showChanges);
      for (argName in Vamonos.Widget.Graph.spec) {
        delete args[argName];
      }
      if (this.editable) {
        this.theGraph = (_ref = this.defaultGraph) != null ? _ref : new Vamonos.DataStructure.Graph();
        _ref1 = this.inputVars;
        for (k in _ref1) {
          v = _ref1[k];
          this.inputVars[k] = this.theGraph.vertex(v);
        }
      } else {
        if ((_ref2 = args.minX) == null) {
          args.minX = 0;
        }
        if ((_ref3 = args.minY) == null) {
          args.minY = 0;
        }
        if ((_ref4 = args.resizable) == null) {
          args.resizable = false;
        }
      }
      if ((_ref5 = (_base = ((_ref6 = args.edgeCssAttributes) != null ? _ref6 : args.edgeCssAttributes = {})).potential) == null) {
        _base.potential = function(edge) {
          return edge._potential;
        };
      }
      if ((_ref7 = (_base1 = ((_ref8 = args.edgeCssAttributes) != null ? _ref8 : args.edgeCssAttributes = {})).selected) == null) {
        _base1.selected = function(edge) {
          return edge._selected;
        };
      }
      this.edgeLabel = (_ref9 = (_ref10 = args.edgeLabel) != null ? _ref10.edit : void 0) != null ? _ref9 : args.edgeLabel;
      Graph.__super__.constructor.call(this, args);
    }

    Graph.prototype.event = function() {
      var event, frame, inp, newg, oldVal, options, type, varName, _ref, _ref1, _ref2, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.registerVariables();
          this.updateVariables();
          return Graph.__super__.event.call(this, "setup", this.viz);
        case "render":
          frame = options[0], type = options[1];
          if (__indexOf.call(this.showChanges, type) >= 0) {
            this.highlightChanges = true;
          } else {
            this.highlightChanges = false;
          }
          if (frame[this.varName] != null) {
            return this.draw(frame[this.varName], frame);
          } else {
            return this.hideGraph();
          }
          break;
        case "displayStart":
          return this.mode = "display";
        case "displayStop":
          this.clearDisplay();
          if (!this.editable) {
            return this.updateVariables();
          }
          break;
        case "editStart":
          if (this.editable) {
            this.mode = "edit";
            return this.startEditing();
          } else if (this.background != null) {
            this.mode = "edit";
            return this.draw();
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
          break;
        case "externalInput":
          inp = options[0];
          if (((_ref = inp[this.varName]) != null ? _ref.type : void 0) === "Graph") {
            newg = new Vamonos.DataStructure.Graph();
            newg.reconstruct(inp[this.varName]);
            this.theGraph = newg;
          }
          _ref1 = this.inputVars;
          _results = [];
          for (varName in _ref1) {
            oldVal = _ref1[varName];
            if (((_ref2 = inp[varName]) != null ? _ref2.type : void 0) === "Vertex") {
              _results.push(this.inputVars[varName] = this.theGraph.vertex(inp[varName]));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
      }
    };

    Graph.prototype.redraw = function() {
      return this.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.startEditing = function() {
      this.redraw();
      if (this.editable) {
        return this.setEditBindings();
      }
    };

    Graph.prototype.stopEditing = function() {
      if (this.editable) {
        this.deselect();
        this.closeDrawer();
        this.unsetEditBindings();
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
      var graph, k, v, _ref, _ref1;
      graph = Vamonos.clone((_ref = this.theGraph) != null ? _ref : this.defaultGraph);
      this.viz.setVariable(this.varName, graph);
      _ref1 = this.inputVars;
      for (k in _ref1) {
        v = _ref1[k];
        if (v != null) {
          this.viz.setVariable(k, graph.vertex(v.id), true);
          this.viz.allowExport(k);
        }
      }
      return this.viz.allowExport(this.varName);
    };

    Graph.prototype.verifyInputVarsSet = function() {
      var k, s, v;
      s = ((function() {
        var _ref, _results;
        _ref = this.inputVars;
        _results = [];
        for (k in _ref) {
          v = _ref[k];
          if (!(this.theGraph.vertex(v) != null)) {
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
      var newv;
      newv = this.theGraph.addVertex(vertex);
      this.redraw();
      this.setEditBindings();
      return this.selectVertexById(newv.id);
    };

    Graph.prototype.removeVertex = function(vid) {
      var k, v, _ref;
      this.deselect();
      this.closeDrawer();
      this.theGraph.removeVertex(vid);
      _ref = this.inputVars;
      for (k in _ref) {
        v = _ref[k];
        if ((v != null) && v.id === vid) {
          this.inputVars[k] = void 0;
        }
      }
      return this.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.addEdge = function(sourceId, targetId) {
      var attrs, k, v, _ref;
      this.removePotentialEdge();
      attrs = {};
      if (this.defaultEdgeAttrs != null) {
        _ref = this.defaultEdgeAttrs;
        for (k in _ref) {
          v = _ref[k];
          attrs[k] = v;
        }
      }
      this.theGraph.addEdge(sourceId, targetId, attrs);
      this.redraw();
      return this.setEditBindings();
    };

    Graph.prototype.removeEdge = function(sourceId, targetId) {
      if ('edge' === this.selected()) {
        this.deselect();
      }
      this.closeDrawer();
      this.theGraph.removeEdge(sourceId, targetId);
      return this.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.createButtons = function() {
      var _this = this;
      return this.newVertexButton = $("<button>new vertex</button>").on("click", function() {
        return _this.addVertex();
      }).insertAfter("#g-var");
    };

    Graph.prototype.setEditBindings = function() {
      var _this = this;
      this.inner.selectAll("g.vertex").classed("editable-vertex", true).on("click.vamonos-graph", function(d) {
        var sourceId, targetId, _ref, _ref1;
        sourceId = (_ref = _this.selectedVertex) != null ? _ref.attr("id") : void 0;
        targetId = d3.event.target.__data__.id;
        if ((sourceId != null) && (((_ref1 = _this.theGraph) != null ? _ref1.edge(sourceId, targetId)._potential : void 0) != null)) {
          _this.addEdge(sourceId, targetId);
        } else if (sourceId === targetId) {
          _this.deselect();
          _this.closeDrawer();
        } else {
          _this.selectVertexById(targetId);
        }
        return _this._notNewVertexClick = true;
      });
      this.inner.selectAll("path.edge").on("mouseenter.vamonos-graph", function(d) {
        return d3.select(this).classed("selectme", true);
      }).on("mouseout.vamonos-graph", function(d) {
        return d3.select(this).classed("selectme", null);
      }).on("click.vamonos-graph", function(d) {
        _this.selectEdgeBySelector(d3.select(d3.event.target));
        return _this._notNewVertexClick = true;
      });
      this.$outer.off("click.vamonos-graph");
      return this.$outer.on("click.vamonos-graph", function(e) {
        var attrs, k, v, _ref, _ref1, _ref2;
        if (_this._notNewVertexClick) {
          return delete _this._notNewVertexClick;
        } else if (_this.selected()) {
          _this.deselect();
          return _this.closeDrawer();
        } else {
          attrs = {};
          _ref = _this.defaultVertexAttrs;
          for (k in _ref) {
            v = _ref[k];
            attrs[k] = v;
          }
          attrs.x = ((_ref1 = e.offsetX) != null ? _ref1 : e.pageX - _this.$outer.offset().left) - _this.containerMargin;
          attrs.y = ((_ref2 = e.offsetY) != null ? _ref2 : e.pageY - _this.$outer.offset().top) - _this.containerMargin;
          return _this.addVertex(attrs);
        }
      });
    };

    Graph.prototype.unsetEditBindings = function() {
      this.$outer.off("click.vamonos-graph");
      this.inner.selectAll("g.vertex").on("click.vamonos-graph", null).classed("editable-vertex", null);
      return this.inner.selectAll("path.edge").on("mouseenter.vamonos-graph", null).on("mouseout.vamonos-graph", null).classed("selectme", null);
    };

    Graph.prototype.removeButtons = function() {
      var _ref;
      return (_ref = this.newVertexButton) != null ? _ref.remove() : void 0;
    };

    Graph.prototype.selected = function() {
      if (this.selectedVertex != null) {
        return 'vertex';
      }
      if (this.selectedEdge != null) {
        return 'edge';
      }
      return false;
    };

    Graph.prototype.selectEdgeBySelector = function(sel) {
      var oldEdgeId, _ref;
      oldEdgeId = (_ref = this.selectedEdge) != null ? _ref.attr('id') : void 0;
      this.deselect();
      if (oldEdgeId === sel.attr('id')) {
        return;
      }
      this.selectedEdge = sel.classed("selected", true);
      return this.openDrawer();
    };

    Graph.prototype.selectVertexById = function(vid) {
      return this.selectVertexBySelector(this.inner.select("#" + vid));
    };

    Graph.prototype.selectVertexBySelector = function(sel) {
      var _this = this;
      this.deselect();
      this.selectedVertex = sel.classed("selected", true);
      this.inner.selectAll("g.vertex").on("mouseover.vamonos-graph", function(v) {
        return _this.potentialEdgeTo(v.id);
      }).on("mouseleave.vamonos-graph", function(v) {
        return _this.removePotentialEdge();
      });
      return this.openDrawer();
    };

    Graph.prototype.deselect = function() {
      this.deselectVertex();
      return this.deselectEdge();
    };

    Graph.prototype.deselectVertex = function() {
      if (this.selectedVertex == null) {
        return;
      }
      this.selectedVertex.classed("selected", false);
      delete this.selectedVertex;
      return this.unsetPotentialEdgeBindings();
    };

    Graph.prototype.unsetPotentialEdgeBindings = function() {
      this.removePotentialEdge();
      return this.inner.selectAll("g.vertex").on("mouseover.vamonos-graph", null).on("mouseleave.vamonos-graph", null);
    };

    Graph.prototype.deselectEdge = function() {
      if (this.selectedEdge == null) {
        return;
      }
      this.selectedEdge.classed("selected", null);
      return delete this.selectedEdge;
    };

    Graph.prototype.potentialEdgeTo = function(vid) {
      var sourceId;
      sourceId = this.selectedVertex.attr("id");
      if (sourceId === vid) {
        return;
      }
      this.removePotentialEdge();
      this.potentialEdge = this.theGraph.addEdge(sourceId, vid, {
        _potential: true
      });
      return this.redraw();
    };

    Graph.prototype.removePotentialEdge = function() {
      var e;
      if (this.potentialEdge == null) {
        return;
      }
      e = this.potentialEdge;
      this.theGraph.removeEdge(e.source.id, e.target.id);
      delete this.potentialEdge;
      return this.redraw();
    };

    Graph.prototype.openDrawer = function() {
      var arr, attr, attrName, buttons, defVal, defaultVal, edge, label, nametag, sourceId, targetId, type, v, vtx, _fn, _fn1, _fn2, _ref, _ref1,
        _this = this;
      type = this.selected();
      if (type === 'vertex') {
        vtx = this.theGraph.vertex(this.selectedVertex.attr("id"));
        label = "vertex&nbsp;&nbsp;" + vtx.name + "&nbsp;&nbsp;";
        buttons = [];
        _fn = function(v, vtx, buttons, ths, inputVars, theGraph) {
          var $b, vName,
            _this = this;
          vName = Vamonos.resolveSubscript(v);
          $b = $("<button>", {
            text: vName,
            title: "Set " + vName + "=" + vtx.name
          });
          $b.on("click.vamonos-graph", function(e) {
            inputVars[v] = vtx;
            return ths.redraw();
          });
          return buttons.push($b);
        };
        for (v in this.inputVars) {
          _fn(v, vtx, buttons, this, this.inputVars, this.theGraph);
        }
        if (this.defaultVertexAttrs != null) {
          _ref = this.defaultVertexAttrs;
          _fn1 = function(attr, ths) {
            if (vtx[attr] != null) {
              return buttons.push($("<button>", {
                text: "unset " + attr
              }).on("click.vamonos-graph", function(e) {
                console.log("unset " + attr);
                vtx[attr] = void 0;
                ths.redraw();
                return ths.openDrawer();
              }));
            } else {
              return buttons.push($("<button>", {
                text: "set " + attr
              }).on("click.vamonos-graph", function(e) {
                console.log("set " + attr);
                vtx[attr] = true;
                ths.redraw();
                return ths.openDrawer();
              }));
            }
          };
          for (attr in _ref) {
            defVal = _ref[attr];
            _fn1(attr, this);
          }
        }
        buttons.push($("<button>", {
          text: "del",
          title: "Delete " + vtx.name
        }).on("click.vamonos-graph", function(e) {
          return _this.removeVertex(vtx.id);
        }));
      } else if (type === 'edge') {
        edge = this.selectedEdge.data()[0];
        sourceId = edge.source.id;
        targetId = edge.target.id;
        if (this.theGraph.directed) {
          arr = "&rarr;";
        } else {
          arr = "-";
        }
        nametag = edge.source.name + "&nbsp;" + arr + "&nbsp;" + edge.target.name;
        label = "edge&nbsp;&nbsp;" + nametag + "&nbsp;&nbsp;";
        buttons = [];
        if (this.editableEdgeAttrs) {
          _ref1 = this.defaultEdgeAttrs;
          _fn2 = function(edge, attrName, buttons, ths, inputVars, theGraph) {
            var $label, $val,
              _this = this;
            $val = $("<span>", {
              text: edge[attrName]
            });
            $label = $("<div>", {
              text: "" + attrName + " = ",
              "class": "editable-attr"
            }).append($val).on("click", function() {
              var update;
              update = function(newVal) {
                edge[attrName] = +newVal;
                ths.redraw();
                $label.removeClass("active");
                return newVal;
              };
              $label.addClass("active");
              return Vamonos.editableValue($val, (function(e) {
                return e.text();
              }), update);
            });
            return buttons.push($label);
          };
          for (attrName in _ref1) {
            defaultVal = _ref1[attrName];
            _fn2(edge, attrName, buttons, this, this.inputVars, this.theGraph);
          }
        }
        if (!this.theGraph.directed) {
          buttons.push($("<button>", {
            text: "col",
            title: "Collapse " + edge.source.name + "->" + edge.target.name
          }).on("click.vamonos-graph", function(e) {
            _this.theGraph.collapse(edge);
            return _this.startEditing();
          }));
        }
        buttons.push($("<button>", {
          text: "del",
          title: "Delete " + edge.source.name + "->" + edge.target.name
        }).on("click.vamonos-graph", function(e) {
          return _this.removeEdge(edge.source.id, edge.target.id);
        }));
      } else {
        return;
      }
      return Graph.__super__.openDrawer.call(this, {
        buttons: buttons,
        label: label
      });
    };

    return Graph;

  })(this.Vamonos.Widget.GraphDisplay);

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
      var event, options, viz;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return viz = options[0], options;
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
        this.getLine(frame._nextLine).find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint");
      }
      if (frame._snapshotReasons.error != null) {
        this.$tbl.find("tr").removeClass("pseudocode-next");
        this.$tbl.find("tr").removeClass("pseudocode-previous");
        return this.addClassToLine(next, "pseudocode-error");
      }
    };

    Pseudocode.prototype.clear = function() {
      this.$tbl.find("tr").removeClass("pseudocode-next");
      this.$tbl.find("tr").removeClass("pseudocode-previous");
      this.$tbl.find("tr").removeClass("pseudocode-error");
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
      var event, frame, newFrame, options, type, viz, _ref, _ref1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0];
          viz.registerVariable(this.varName);
          return this.arrayWidget.event(event, viz);
        case "render":
          frame = options[0], type = options[1];
          newFrame = Vamonos.clone(frame);
          newFrame[this.varName] = (_ref = frame[this.varName]) != null ? _ref.guts : void 0;
          return this.arrayWidget.event("render", newFrame, type);
        default:
          return (_ref1 = this.arrayWidget).event.apply(_ref1, [event].concat(__slice.call(options)));
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
  var ResultProperty,
    __slice = [].slice;

  ResultProperty = (function() {

    ResultProperty.description = "The `ResultProperty` widget takes as its constructor an object mapping\n(potentially namespaced) variable names in the stash to side-effecting\nfunctions taking those variables.";

    function ResultProperty(vars) {
      this.vars = vars;
    }

    ResultProperty.prototype.event = function() {
      var event, options, vFunc, vName, view, _ref, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case 'setup':
          return this.viz = options[0], options;
        case 'displayStart':
          view = this.viz.frames.slice(0).pop();
          _ref = this.vars;
          _results = [];
          for (vName in _ref) {
            vFunc = _ref[vName];
            _results.push(vFunc(view[vName]));
          }
          return _results;
      }
    };

    return ResultProperty;

  })();

  this.Vamonos["export"]({
    Widget: {
      ResultProperty: ResultProperty
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
          if (!(type === "next" && this.condition(this.currentFrame, this.visualizer.frames) && (_ref = this.currentFrame._frameNumber, __indexOf.call(this.framesPassed, _ref) < 0))) {
            return;
          }
          this.$dialog.attr("title", this.title(this.currentFrame));
          this.$question.html(this.question(this.currentFrame, this.visualizer.frames));
          this.$answer.val("");
          this.$feedback.html("");
          this.$feedback.removeClass("correct-answer", "wrong-answer");
          this.currentAnswer = this.answer(this.currentFrame, this.visualizer.frames);
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
      this.container = Vamonos.jqueryify(this.container);
      this.container.addClass("var-display");
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
          return this.container.empty();
        case "render":
          this.showVars.apply(this, options);
          return this.adjustHeight();
        case "displayStop":
          return this.resetHeight();
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
      oldstr = this.container.html();
      if (newstr !== oldstr) {
        if (__indexOf.call(this.showChanges, type) >= 0) {
          if (this.dontShowChange) {
            this.container.removeClass("changed");
          } else {
            this.container.addClass("changed");
          }
          this.container.html(newstr);
          dup = this.container.clone();
          this.container.replaceWith(dup);
          this.container = dup;
        } else {
          this.container.html(newstr);
          this.container.removeClass("changed");
          this.container.children().removeClass("changed");
        }
      } else {
        this.container.removeClass("changed");
        this.container.children().removeClass("changed");
      }
      this.dontShowChange = void 0;
      return this.oldval = (_ref = frame[this.varName]) != null ? _ref : {
        dummyObj: true
      };
    };

    VarDisplay.prototype.adjustHeight = function() {
      var _ref;
      if (this.container.height() > ((_ref = this.maxHeight) != null ? _ref : 0)) {
        return this.maxHeight = this.container.height();
      } else {
        return this.container.css("min-height", this.maxHeight);
      }
    };

    VarDisplay.prototype.resetHeight = function() {
      this.maxHeight = 0;
      return this.container.css("min-height", "");
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
        description: "alternate varname to display - defaults to `varName`. " + "subscript can be displayed as everything following an underscore.",
        defaultValue: void 0,
        example: "displayName: \"G_f\""
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
      this.displayName = Vamonos.resolveSubscript(this.displayName);
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
