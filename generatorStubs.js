Blockly.JavaScript['element'] = function(block) {
    // Retrieve the chemical symbol entered by the user
    const symbol = Blockly.JavaScript.valueToCode(block, 'Symbol', Blockly.JavaScript.ORDER_ATOMIC);
  
    // Generate code to represent the chemical symbol entered
    const code = `${symbol}`;
  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };