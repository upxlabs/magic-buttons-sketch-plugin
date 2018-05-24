
<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/cover-and-icons/github-magic-buttons-cover.png" />

<br>

<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/relabel-example.gif" />

<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/cover-and-icons/magic-buttons-icon-big.png" width="127px" height="127px" align="left"/>

# Magic Buttons v0.1 - Sketch Plugin

Be a wizard! Automatically resize and relabel buttons with padding sizes like CSS.

The Magic Buttons Sketch plugin let you automatically change the label of any symbol button by pressing keyboard keys <b>(cmd + shift + m)</b>,
and also resize the button according to the new text added keeping it's padding proportions like in CSS. It's magical!

Created at UPX Technologies in May, 2018. Visite the website: www.upx.com

<br>


<a href="https://github.com/upxlabs/magic-buttons-sketch-plugin/raw/master/magic-buttons-sketch-plugin-v01.zip" ><img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/download-button.jpg" width="750" height="300" align="center" /></a>

<br>

<a href="https://github.com/upxlabs/magic-buttons-sketch-plugin/graphs/contributors">
  Contributors
</a>

<br>

 <a href="http://bit.ly/SketchRunnerWebsite">
      <img src="http://bit.ly/RunnerBadgeBlue" height="40" width="160">
 </a>


<br>

## Description

This is a free sketch plugin developed to make buttons management easier inside Sketch App.
This plugin's goal is to make buttons a little bit smart by automatically keeping it's proportions
based on the padding sizes and text elements inside it, also giving users ability to change it's label text with a keyboard command.

* Relabel buttons with a keyboard command <b>(cmd + shift + m)</b> - (works as override of a text layer inside a symbol)
* Keep button size according to text size + padding elements defined by you
* Works similar to the CSS padding concept

<br>
<a href="https://blog.prototypr.io/magic-buttons-sketch-plugin-first-release-bed434900576"><b>Read a medium post we wrote about the plugin!</b></a>

<br>

## The problem

Look at how hard it is to change a button label and keep it with the correct size and proportions today.


<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/example-how-we-do-it-today.gif" />

<br>

## How to use

First, download the plugin here and install it:

<a href="https://github.com/upxlabs/magic-buttons-sketch-plugin/raw/master/magic-buttons-sketch-plugin-v01.zip"><b>Download it here</b></a>

<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/how-to-install.gif" />

```
Download the plugin via github
Open the file inside your computer
Double click the file
That's it!
```

### Inside Sketch:

1 - First select the symbol you want to relabel and press a keyboard command <b>(cmd + shift + m)</b>.
<b>It just works with symbols!</b>


2 - The prompt will open, type in the new desired label and hit enter.

3 - Magical! The button is going to be automatically resized to fit the new text with padding settings preserved as you defined in the symbol.

<b>View how it works here:</b>
<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/resize-button-example.gif" />

Tip:
You can select more than one symbol at the same time, it will ask new label for each in a separated prompt.

## Buttons Template

We created a sample sketch file with some examples of buttons ready to use. You can download it to test or use for real, it's free.
You can also create your own set of buttons based on our methodology.

<a href="https://github.com/upxlabs/magic-buttons-sketch-plugin/raw/master/magic-buttons-sketch-plugin-v01.zip"><b>Download it here</b></a>


Here's quick example on how to hide padding-layers inside our sample file, it's easy!
<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/how-to-hide-padding.gif" />

<br>

## How to create your own buttons

You can create your own set of buttons using our simple structure to ensure the plugin will work, 
or just get our sketch file and use our template buttons.

<a href="https://github.com/upxlabs/magic-buttons-sketch-plugin/raw/master/magic-buttons-sketch-plugin-v01.zip"><b>Download it here</b></a>

###### Simply create a new button and make sure there are 3 elements inside it:
### 1 - padding-left (must be a symbol) - symbol name must be exatly that, lowercase only
```
padding-left
```
### 2 - text element (Can't be a symbol) - you can setup as you like, no special requirements
```
text
```
### 3 - padding-right (must be a symbol) - symbol name must be exatly that, lowercase only
```
padding-right
```

### <b>Symbol Button final structure:</b>
```
padding-left + text + padding-right
```

<br>
<b>TIP:</b> For the text layer, make sure it's aligned to the place where you want it to be, centered, left or right. Pin it to the corners if you want it to stick to the left or right and make sure to check the text alignment/position. If you get lost, download our sample files to get some ideas.

<br>
Artboard/Symbol size can be any in height or width, and background layers, border layers, color layers, icon layers and others inside the button symbol won't be affected.

<br>
The size of padding-left and padding-right can be determined by you and can be different for each element.
Magic Buttons Plugin will do the math for you. It will consider <b>padding-left + text size + padding-right</b> and always keep your buttons with the right size.


<br>

## Authors

<br>

<img src="https://github.com/upxlabs/magic-buttons-sketch-plugin/blob/master/documentation-images/logo-upx.png" width="200" height="72"  />

<br>
Created by <b>UPX Technologies</b>.

www.upx.com

Github:
https://github.com/upxlabs

Credits:
This plugin was developed as open source code.
Part of the code was based on the plugin called Relabel Button plugin by Ken Moore,
and the rest of it was coded by the authors.

An idea from <a href="https://github.com/calderariciao">Caio Calderari</a>

<br>

## Contributing

Community contributions are essential for keeping this plugin great. So if you find any problems, feel free to open an issue.

Be sure to provide at least the following information on the issue:

* Environment (e.g. Skecth v5.0)
* Operating System (e.g. iOS 10)
* Plugin version (e.g. 3.0.0)

## Share it
Use some of our image sources to share this plugin on your website or social networks!

https://github.com/upxlabs/magic-buttons-sketch-plugin/tree/master/documentation-images


## License

```
The MIT License (MIT)
Copyright (c) 2018 UPX Technologies
```