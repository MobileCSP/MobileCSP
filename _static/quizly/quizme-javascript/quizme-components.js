/**
 *  Creates Blockly.ComponentTypes, a Dictionary of App Inventor components where
 *  each component is represented by a prototype that describes its events, methods,
 *  properties, setters, and getters.
 *
 *  The components are initially represented by their JSON strings, which are stored
 *  in window.componentTypeJson.  They are read from their into Blockly.Quizme.components
 *  and copied from there to Blockly.ComponentTypes.
 * 
 *  TODO: Do we still need Blockly.Quizme.components?
 *
 *  Blockly.ComponentTypes is the Dictionary used in App Inventor (i.e., blockly-all.js).
 */

/**
 * Creates Blockly.ComponentTypes for App Inventor components.
 * Updated for Modern Blockly Compatibility.
 */



// Safety check for DEBUG global
var DEBUG = (typeof GLOBAL_DEBUG !== 'undefined') ? GLOBAL_DEBUG : false;

Blockly.Quizme = Blockly.Quizme || {};

/**
 * Creates a Dictionary of components indexed by component name. 
 */
Blockly.Quizme.inputFromComponentsArray = function() {
  if (DEBUG) console.log("RAM: inputting components from window.componentTypeJson");
  var obj = {};
  var compArr = window.componentTypeJson;
  if (!compArr) {
    console.warn("Error: Can't find componentTypeJson array. Make sure quizme-component-types.js is loaded.");
    return obj;
  }
  
  for (var i=0; i < compArr.length; i++) {
    obj[compArr[i].name] = compArr[i];
  }
  return obj;
};

/**
 * Main initialization function for Components.
 * Named 'addComponents' to match quizme-helper.js
 */
Blockly.Quizme.addComponents = function() {
  if (DEBUG) console.log("RAM: initializing components (addComponents)");
  
  if (!Blockly.ComponentTypes) {
      Blockly.ComponentTypes = {};
  }

  // 1. Load the raw JSON
  Blockly.Quizme.components = Blockly.Quizme.inputFromComponentsArray();
  
  // 2. Process each component into Blockly.ComponentTypes
  for (var name in Blockly.Quizme.components) {
    var json = JSON.stringify(Blockly.Quizme.components[name]);
    Blockly.Quizme.addComponent(json, name, name); 
  }

  // 3. Install the Adapter (CRITICAL FIX)
  Blockly.Quizme.installComponentAdapter();
};

/**
 * Adds a prototype for a component defined by its JSON string.
 */
Blockly.Quizme.addComponent = function(json, name, uid) {
  //if (DEBUG) console.log('RAM: addComponent json = ' + json);
  var prototype = JSON.parse(json);
  var typeName = prototype.name;

  // Initialize the structure modern Blockly expects
  Blockly.ComponentTypes[typeName] = {
    name: typeName,
    eventDictionary: {},  // CRITICAL: blockly-all.js looks here
    methodDictionary: {}, // CRITICAL: blockly-all.js looks here
    properties: {},
    getPropertyList: [],
    setPropertyList: []
  };

  // 1. Map Events
  for (var i = 0; i < prototype.events.length; i++) {
    var event = prototype.events[i];
    // blockly-all.js accesses .parameters, but JSON uses .params — bridge the gap
    if (!event.parameters) event.parameters = event.params || [];
    Blockly.ComponentTypes[typeName].eventDictionary[event.name] = event;
  }

  // 2. Map Methods
  for (var j = 0; j < prototype.methods.length; j++) {
    var method = prototype.methods[j];
    if (!method.params) method.params = [];
    // blockly-all.js accesses .parameters, but JSON uses .params — bridge the gap
    if (!method.parameters) method.parameters = method.params;
    Blockly.ComponentTypes[typeName].methodDictionary[method.name] = method;
  }

  // 3. Map Properties — use blockProperties (the block-visible set).
  // Designer-only 'properties' are a subset of blockProperties and
  // combining both lists caused every overlapping property to appear twice.
  var allProps = prototype.blockProperties || prototype.properties || [];

  for (var k = 0; k < allProps.length; k++) {
    var prop = allProps[k];
    if (!prop || !prop.name) continue;

    // Store the property metadata
    Blockly.ComponentTypes[typeName].properties[prop.name] = prop;

    // Map to Getters/Setters lists
    var rw = prop.rw ? prop.rw.toLowerCase() : "read-write";
    if (rw === "read-write" || rw === "read-only") {
      Blockly.ComponentTypes[typeName].getPropertyList.push(prop.name);
    }
    if (rw === "read-write" || rw === "write-only") {
      Blockly.ComponentTypes[typeName].setPropertyList.push(prop.name);
    }
  }
  
};


// =============================================================================
//  NEW: ADAPTER FOR MODERN BLOCKLY
//  Fixes "reading 'push'", "getInternationalizedEventName", and "getInstanceNames".
// =============================================================================

Blockly.Quizme.installComponentAdapter = function() {
    console.log("Installing Component Database Adapter...");

    var adapter = {
        // 1. Basic Type Lookups
        hasType: function(type) {
            return !!Blockly.ComponentTypes[type];
        },
        getType: function(type) {
            return Blockly.ComponentTypes[type];
        },

        // 2. Member Lookups with PARAM FIX
        getEventForType: function(type, eventName) {
            if (this.hasType(type) && Blockly.ComponentTypes[type].events[eventName]) {
                var evt = Blockly.ComponentTypes[type].events[eventName];
                // FIX: Map 'params' (old JSON) to 'parameters' (expected by new engine)
                // If this is missing, the engine tries to push to null and crashes.
                if (!evt.parameters && evt.params) {
                    evt.parameters = evt.params;
                }
                // Ensure it is at least an empty array
                if (!evt.parameters) {
                    evt.parameters = [];
                }
                return evt;
            }
            return { parameters: [] };
        },
        
        getMethodForType: function(type, methodName) {
            if (this.hasType(type) && Blockly.ComponentTypes[type].methods[methodName]) {
                var mtd = Blockly.ComponentTypes[type].methods[methodName];
                // FIX: Map 'params' to 'parameters' here too
                if (!mtd.parameters && mtd.params) {
                    mtd.parameters = mtd.params;
                }
                if (!mtd.parameters) {
                    mtd.parameters = [];
                }
                return mtd;
            }
            return { parameters: [] };
        },
        
        getPropertyForType: function(type, propName) {
            if (this.hasType(type) && Blockly.ComponentTypes[type].properties[propName]) {
                return Blockly.ComponentTypes[type].properties[propName];
            }
            return { type: 'text', readWrite: 'rw' };
        },

        // 3. Missing Helpers (Prevent crashes)
        getInternationalizedEventName: function(eventName) { return eventName; },
        getInternationalizedMethodName: function(methodName) { return methodName; },
        getInternationalizedPropertyName: function(propName) { return propName; },
        
        getInstanceNames: function() {
            return Object.keys(Blockly.ComponentTypes);
        },

        getOptionList: function(key) {
             // Return empty array to prevent "push to undefined" errors if options are missing
             return [];
        }
    };

    // OVERRIDE: Force every workspace to use this adapter.
    Blockly.Workspace.prototype.getComponentDatabase = function() {
        return adapter;
    };
    
    // Attach to main workspace
    if (Blockly.common && Blockly.common.getMainWorkspace()) {
        Blockly.common.getMainWorkspace().componentDb_ = adapter;
    }
};

// Link our data to the global Blockly core expectation
Blockly.ComponentDatabase = dummyComponentDb; 

// Ensure the first load of components happens
if (window.componentTypeJson) {
    Blockly.Quizme.inputFromComponentsArray();
}