# Style Guide

## Color Palette

### Monochromatic Theme Colors

```
$theme-colors: (
    primary: #1e1d24,   //
    accent: #97f1e7,    //
    secondary: #bbbbbd, //
    base: #ffffff       // White
);
```

Example:
`color: color(primary);`

### Misc. Colors

```
$shades-primary: (
    1: mix(white, color(primary), 52.5%),
    2: mix(white, color(primary), 70%),
    3: mix(white, color(primary), 77%),
    4: mix(white, color(primary), 80%),
    5: mix(white, color(primary), 90%)
);
```

Example:
`border-color: shades-primary(1);`

```
$shades-accent: (
    -2: mix(black, color(accent), 40%),
    -1: mix(black, color(accent), 15.4%);
    1: mix(white, color(accent), 50%);
);
```

Example:
`border-color: shades-accent(-1);`

## Typography

### Font Families

```
Ubuntu
Robotoslab
```

### Font Weights

```
$font-weights: (
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
);
```

Example:
`font-weight: weight(light);`

### Font Sizes

```
Base: 24px;

$modular-scale: ( // Perfect Fourth
    -1: 0.75rem,
    0: 1rem,
    1: 1.333rem,
    2: 1.777rem,
    3: 2.369rem,
    4: 3.157rem
);
```

Example:
`font-size: font-size(3);`

## Guide: Colors & Typography by Section

### Colors
Header Background: color(primary);
Logo color: color(base);
Header Text: color(base);
Page Header: color(primary);
Page Description: shades-accent(-2);
Share & Social Links: shades-primary(3);
Blog Summary & Meta: shades-primary(2);
Prev, Next, 1/2/3: shades-primary(1);
Last Section P: shades-accent(1);
Contact Text: #000;
Footer Text: #000;
Border Bottom Page Description: shades-accent(-1);
Border Bottom Breadcrumbs, Border top footer: shades-primary(4);
Border Bottom Blog Post: shades-primary(5);
Border Prev/Next: shades-primary(1);
Social Links Border: shades-primary(2);

### Font Styles
Logo:  ---------- Ubuntu, Medium, 56pt        font-size(3);
Navigation: ----- Ubuntu, Regular, 24pt       font-size(0);
Page Header: ---- Robotoslab, Regular, 80pt   3.33em;
Page Desc: ------ Robotoslab, Light, 56pt     font-size(3); 3.5em line-height
Breadcrumbs: ---- Ubuntu, bold, 24pt          font-size(0);
Share: ---------- Ubuntu, medium, 24pt        font-size(0);
Post h1: -------- Ubuntu, regular, 72pt       3em;
Post P: --------- Ubuntu, light, 42pt         font-size(2); 2.75em line-height
Post Meta: ------ Ubuntu, light italic, 32pt  font-size(1);
Post Read More:-- Ubuntu, medium, 24pt        font-size(0);
Last Sect. h1: -- Ubuntu, medium, 72pt        3em;
Last Sect. p: --- Ubuntu, regular, 32pt       font-size(1); 2.25em line-height
Last Sect. button:Ubuntu, medium, 28pt        1.167em;
Contact links: -- Ubuntu, regular, 36pt       1.5em;
Social links: --- Ubuntu, bold, 24pt          font-size(0);
Footer: --------- Ubuntu, Regular, 22pt       .917em;
