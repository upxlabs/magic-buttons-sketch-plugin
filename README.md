<img src="https://link" width="127px" height="127px" align="left"/>

# Magic Buttons v0.1 - Sketch Plugin

Be a wizard! Automatically resize and relabel buttons with padding sizes like CSS.

The Magic Buttons Sketch plugin let you automatically change the label of any symbol button by pressing keyboard keys (cmd + m),
and also resize the button according to the new text added keeping it's padding proportions like in CSS. It's magical!

Created at UPX Technologies in May, 2018. Visite the website: www.upx.com

<br>

<a href="#" >
  <img src="https://.svg?branch=master" align="left" />
</a>

<br>

## Description

This is a free sketch plugin developed to make buttons management easier inside Sketch App.
This plugin's goal is to make buttons a little bit smart by automatically keeping it's proportions
based on the padding sizes and text elements inside it, also giving users hability to change it's label text with a keyboard command.

* Relabel buttons with a keyboard command (cmd + m) - (works as overide of a text layer inside a symbol)
* Keep button size according to text size + padding elements defined by you
* Works similar to the CSS padding concept


## How to use

First, install it:

```
Download the plugin via github
Open the file inside your computer
Double click the file
That's it!
```

Inside Sketch:

First select the symbol you want to relabel and press a keyboard command (cmd + m).
* It just work with symbols!

The the prompt will open, type in the new desired label and hit enter.

Magical! The button is going to be automatically resized to fit the new text with padding settings preserved as you defined in the symbol.

## Buttons Template

We created a sample sketch file with some examples of buttons ready to use. You can download it to test or use for real, it's free.
You can also create your own set of buttons based on our methodology.

## How to create your own buttons

You can create your own set of buttons using our simple structure to ensure the plugin will work, 
or just get our sketch file and use our template buttons.

Simply create a new button and make sure there are 3 elements inside it:
* 1 - padding-left (must be a symbol) - text lowercase only
```
padding-left
```
* 2 - text element (Can't be a symbol)
```
text
```
* 3 - padding-right (must be a symbol) - text lowercase only
```
padding-right
```

Symbol Button structure:
```
padding-left + text + padding-right
```

* For the text layer, make sure it's aligned to the place where you want it to be, centered, left or right. Pin it to the corners if you want it to stick to the left or right and make sure to check the text alignment/position. If you get lost, download our sample files to get some ideas.

Artboard/Symbol size can be any in height or width, and background layers, border layers, color layers, icon layers and others inside the button symbol won't be affected.

The size of padding-left and padding-right can be determined by you and can be different for each element.
Magic Buttons Plugin will do the math for you. It will consider padding-left + text size + padding-right and always keep your buttons with the right size.



## Authors

Created by UPX Technologies.

Github:
https://github.com/upxlabs

Credits:
This plugin was developed as open source code.
Part of the code was based on the plugin called Relabel Button plugin by Ken Moore,
and the rest of it was coded by the authors.


## Contributing

Community contributions are essential for keeping this plugin great. So if you find any problems, feel free to open an issue.

Be sure to provide at least the following information on the issue:

* Environment (e.g. Skecth v5.0)
* Operating System (e.g. iOS 10)
* Plugin version (e.g. 3.0.0)


## License

```
The MIT License (MIT)
Copyright (c) 2018 UPX Technologies
```