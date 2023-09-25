/* Define custom blocks using Blockly.Blocks object */

  Blockly.Blocks['compound'] = {
	init: function() {
	  this.appendValueInput("ELEMENT1")
		  .setCheck(["Element", "Compound"])
		  .appendField("Compound:");
	  this.appendValueInput("ELEMENT2")
		  .setCheck(["Element", "Compound"]);
	  this.setInputsInline(true);
	  this.setOutput(true, "Compound");
	  this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['element_symbol'] = {
	init: function() {
	  this.appendValueInput("SYMBOL")
		  .setCheck("String")
		  .appendField("Element Symbol")
		  .appendField(new Blockly.FieldTextInput("H"), "NAME");
	  this.setInputsInline(false);
	  this.setOutput(true, "Element");
	  this.setColour(120);
   this.setTooltip("Enter the chemical symbol for the desired element");
   this.setHelpUrl("https://en.wikipedia.org/wiki/Chemical_symbol");
	}
  };
  
  Blockly.Blocks['element_coefficient'] = {
	init: function() {
	  this.appendValueInput("NAME")
		  .setCheck("Element")
		  .appendField(new Blockly.FieldNumber(1, 1), "NAME");
	  this.setInputsInline(true);
	  this.setOutput(true, "Element");
	  this.setColour(180);
   this.setTooltip("Type the coefficient for the number the inserted element");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['chemical_equation'] = {
	init: function() {
	  this.appendValueInput("NAME")
		  .setCheck(["EquationInput", "Element", "Compound"]);
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([["→","FORWARD"], ["⇌","EQUILIBRIUM"]]), "EquationType");
	  this.appendValueInput("NAME")
		  .setCheck(["EquationInput", "Element", "Compound"]);
	  this.setInputsInline(true);
	  this.setOutput(true, "EquationOutput");
	  this.setColour(230);
   this.setTooltip("Insert reactants_or_products onto each side");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['reactants_or_products'] = {
	init: function() {
	  this.appendValueInput("Element1")
		  .setCheck(["Element", "Compound"]);
	  this.appendDummyInput()
		  .appendField("+");
	  this.appendValueInput("Element2")
		  .setCheck(["Element", "Compound"]);
	  this.setInputsInline(true);
	  this.setOutput(true, "EquationInput");
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

/* Put more custom blocks here */

/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true
};

/* Inject your workspace */ 
var workspace = Blockly.inject('blocklyDiv', options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);