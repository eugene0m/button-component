# button-component

<h1 align="center">My Button Component</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://eugene0m.github.io/button-component/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/eugene0m/button-component/blob/master/index.html">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

*First of all: sorry if my English is bad and if there are typos in the project variable names...*

![screenshot](https://i.imgur.com/TfAhsFT.jpg)

Ultra small and simplistic Vue3 component that generates buttons with the desired properties.

This includes the ability to add an **icon** before and after the button text, or to choose its **size**, **color** or **type**.

Also, a dynamic text field automatically maps to the button properties, e.g. : 

```javascript
<ButtonCpt startIcon="local_grocery_store" color="danger"></ButtonCpt>
```

The text field (span) above this button will be the following:

```
<Button startIcon="local_grocery_store" color="danger" />
```

In detail this component you can :

- See different button types: default, outline and text
- Choose to disable box-shadow
- Choose to disable the button
- Choose to have an icon on the left or right
- Have different button sizes
- Have different colors
- When you hover or focus, you can see visual indicators
- Still access all button attributes


### Built With

- [Vue.js](https://vuejs.org/)
- [Google Material Icons](https://google.github.io/material-design-icons/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY) was to build an application to complete the given user stories.

## How To Use

VueJS here is just called with a CDN link, this project is only made of an index.html file.

Just do the following to clone the repo:

```bash
# Clone this repository
$ git clone https://github.com/eugene0m/button-component.git
```

## Contact

- GitHub [eugene0m](https://github.com/eugene0m)
