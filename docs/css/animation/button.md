# 按钮&Input

## button1

<Button1/>

```html
<div class="box">
   <button>itxcc</button>
</div>
```

```css
.box {
  width: 50px;
  margin:50px auto;
  position: relative;
}
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #3eaf7c;
}

button:hover {
  cursor: pointer;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid #3eaf7c;
  transform-origin: center;
  transform: scale(1);
}

button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}

```

## button2

<Button2/>

```html
<div class="box">
    <button>itxcc</button>
</div>
```

```css
.box {
  width: 50px;
  margin:50px auto;
  position: relative;
}
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #3eaf7c;
  overflow: hidden;
  cursor: pointer;
}

button::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

button:hover::after {
  transition: transform .45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
}
```


## input1

<Input1/>

```html
<div class="box">
    <input type="text" placeholder="Input Outline">
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
</div>
```

```css
.box {
  width: 7.5em;
  margin:50px auto;
  position: relative;
}
input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: rgb(240,240,240);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #666;
}

span {
  position: absolute;
  background-color: #3eaf7c;
  transform-origin: center;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

input:focus ~ .top, input:focus ~ .bottom {
  transform: scaleX(1);
}

input:focus ~ .left, input:focus ~ .right {
  transform: scaleY(1);
}
```

## input2

<Input2/>


```html
<div class="box">
    <input type="text" placeholder="Input Underline">
    <span></span>
</div>
```

```css
.box {
  width: 7.5em;
  margin:50px auto;
  position: relative;
}
input {
  width: 7.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: rgba(53,162,105,.2);
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #666;
}

span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #3eaf7c;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

input:focus ~ span {
  transform-origin: bottom left;
  transform: scaleX(1);
}
```

## 参考
 - [cssfx](https://cssfx.dev/)