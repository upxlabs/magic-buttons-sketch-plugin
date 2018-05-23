/*

Magic Buttons v0.1
Be a wizard! Automatically resize and relabel buttons with padding sizes like CSS.

The Magic Buttons Sketch plugin let you automatically change the label of any symbol button by pressing keyboard keys (cmd + m),
and also resize the button according to the new text added keeping it's padding proportions like in CSS. It's magical!

This is a free sketch plugin developed to make buttons management easier.
This plugin's goal is to make buttons a little bit smart by automatically keeping it's proportions
based on the padding sizes and text elements inside it, also giving users hability to change it's label text with a keyboard command (cmd + m).


Created at UPX Technologies - www.upx.com - May, 2018.

Credits:
This plugin was developed as open source code.
Part of the code was based on the plugin called Relabel Button plugin by Ken Moore,
and the rest of it was coded by the authors.

An idea of Caio Calderari

Github:
https://github.com/calderaricaio

*/

// start magic plugin
var onRun = function(context) {

    // function to do the magic resizing
	function setButtonWidth(paddingLeft, paddingRight, textDeltaWidth, buttonFrame) {
    	
        // variables with padding sizes and text sizes
    	var newLayerWidth = paddingLeft + textDeltaWidth + paddingRight;

    	// do the resize with the new total value
        buttonFrame.setWidth(newLayerWidth);

    	// success message at the end of resize
    	doc.showMessage("Magic just happened! - Resized element to: " + newLayerWidth);

        // TO-DO
    	// deselect and reselect so the override text and size gets updated in the inspector
        // selected .setIsSelected(false);
        // selected .setIsSelected(true);
    }

    // plugin global variables
    var doc = context.document;
    var selection = context.selection;
    var paddingLeft;
    var paddingRight;
    var textWidth;
    var deltaWidth;
    var selFrame;


    // check if something is selected, if not show a message, if yes, then start the magic
    if (selection.count() == 0) {
        //alert user that there is no symbol selected
        doc.showMessage("Please select a symbol!");
    } else {
       
       // create variable to selected symbol
        var selectedSymbol;
        
        // loop thought the selected items
        for (var i = 0; i < selection.count(); i++) {

            //reference the selection
            var layer = selection[i];

            //get the original layer name
            var layerName = layer.name();

            //get the original layer name
            var layerFrame = layer.frame();

            //get layer class
            var layerClass = layer.class();

            //verify if the selecte item is a symbol instance
            if (selection[i].class() == "MSSymbolInstance") {

                // create a variable for the current symbol instance selection
                var selecao = selection[i];
                // create a variable to the current symbol selection master
                var symbolMaster = selecao.symbolMaster();
                // create a variable that collect children elements inside the symbol master
                var children = symbolMaster.children();

                // create a variable to get the current layer frame
                var layerFrame = layer.frame();

                // create a variable to store the total selected item width
                var tamanhoTotal = layerFrame.width();

                // loop though the childrens of the selected symbol master
                for (var j = 0; j < [children count]; j++) {

                    // create a variable to store children elements
                    var layer = children[j];

                    // create a variable to store children name
                    var layerName = layer.name();

                    // check if there's a text layer inside the button
                    if ([layer class] == "MSTextLayer") {
                        
                        // set overrides, or add an override if doesn't exist
                        var ObjectId = layer.objectID().toString();
                        var existingOverrides = selecao.overrides()
                        if (existingOverrides == null) {
                            // no overrides exist, add one
                            selecao.overrides = {
                                ObjectId: "overrideText"
                            };
                            existingOverrides = selecao.overrides();
                        }

                        // get the existing overrides and create a mutable copy
                        var mutableOverrides = NSMutableDictionary.dictionaryWithDictionary(existingOverrides);
                        mutableOverrides.setObject_forKey(NSMutableDictionary.dictionaryWithDictionary(existingOverrides.objectForKey(0)), 0);

                        // Prompt user for input of new button text label
                        var priorText;
                        if (existingOverrides.objectForKey(ObjectId)) {
                            priorText = existingOverrides.objectForKey(ObjectId);
                        } else {
                            // if no overrides originally, prior text is the string value of the master
                            priorText = [layer stringValue];
                        }
                        var newText = [doc askForUserInput: "Add new button label"
                            initialValue: priorText
                        ]; 

                        if (newText) {
                            // store the text field's master text and width
                            var textFrame = [layer frame];
                            var masterText = [layer stringValue];
                            var masterTextWidth = [textFrame width];

                            // set the text of the master to the prior text just to measure its width
                            var priorTextWidth;
                            if (priorText == "") {
                                // if set text to blank then all styling is lost
                                priorTextWidth = 0;
                            } else {
                                [layer setStringValue: priorText];
                                priorTextWidth = [textFrame width];
                            }

                            // get the width of the new text
                            [layer setStringValue: newText];
                            var newTextWidth = [textFrame width];

                            // restore the text field's master text
                            [layer setStringValue: masterText];

                            // resize the instance
                            //deltaWidth = newTextWidth - priorTextWidth;
                            deltaWidth = newTextWidth;
                            selFrame = [selecao frame];

                            // update the mutable dictionary
                            mutableOverrides.setObject_forKey(newText, ObjectId);

                            // apply the overrides to the symbol instance
                            selecao.overrides = mutableOverrides;
                        }
                    }

                    // check if there is another symbol instance inside the master symbol
                    if ([layer class] == "MSSymbolInstance") {

                        // check if the symbols have padding-left name
                        if (layerName == "padding-left") {

                            // create variable to get selected symbol frame
                            var layerFrame = layer.frame();

                            // create variable to get symbol width
                            var layerWidth = layerFrame.width();

                            // create variable to get symbol height
                            var layerHeight = layerFrame.height();

                            // define padding-left width
                            paddingLeft = layerWidth;
                        }

                        if (layerName == "padding-right") {

                            // create variable to get selected symbol frame
                            var layerFrame = layer.frame();

                            // create variable to get symbol width
                            var layerWidth = layerFrame.width();

                            // create variable to get symbol height
                            var layerHeight = layerFrame.height();

                            // define padding-right width
                            paddingRight = layerWidth;
                        }
                    }
                }
                // check if all values where defined
                if (paddingLeft && paddingRight && deltaWidth && selFrame) {
                	//send parameters to run the function that resize the button
                	setButtonWidth(paddingLeft, paddingRight, deltaWidth, selFrame);
                }

            } else{
            	//alert users if the selected item is not a symbol
            	doc.showMessage("Please select a symbol! Just symbols can make magic work.");
            }
        }
    }
};