Blockly.Blocks['element'] = {
    init: function() {
        this.appendDummyInput('Symbol')
            .appendField(new Blockly.FieldTextInput("", function(newText) {
                const symbol = newText;
                // Check if the input is a valid chemical symbol
                if (/^[A-Za-z]{1,2}$/.test(symbol)) {
                    const apiUrl = `https://periodic-table-elements-info.herokuapp.com/element/symbol/${symbol}`;
            
                    // Use fetch to attempt to fetch the element data
                    fetch(apiUrl)
                      .then(response => {
                        if (!response.ok) {
                          // Invalid symbol or API request failed
                          this.setWarningText('Invalid symbol. Please enter a valid chemical symbol.');
                          return null;
                        } else {
                          // Valid symbol and API request succeeded
                          this.setWarningText(null); // Clear any previous error message
                          return newText;
                        }
                      })
                      .catch(error => {
                        console.error('Error:', error);
                        this.setWarningText('Error occurred while validating the symbol.');
                        return null;
                      });
                } else {
                    // Invalid symbol
                    this.setWarningText('Invalid symbol. Please enter a valid chemical symbol.');
                    return null;
                }
            }), "Symbol");
        this.setInputsInline(true);
        this.setColour(120);
        this.setTooltip('Enter the chemical symbol for the desired element');
        this.setHelpUrl('https://en.wikipedia.org/wiki/Chemical_symbol');   
    }
};
