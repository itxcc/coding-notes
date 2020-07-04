# 加载动画

## loading1

<Load1/>

```html
<div class="box">
    <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
    </svg>
</div>
```
```css
.box {
  width: 50px;
  margin:50px auto;
  position: relative;
}
svg {
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #3eaf7c;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}

```
## loading2

<Load2/>

```html
<div class="box">
    <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
```
```css
.box {
  width: 50px;
  margin:50px auto;
  position: relative;

  div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 2em;
  }

  span {
    width: 0.3em;
    height: 1em;
    background-color: #3eaf7c;
  }

  span:nth-of-type(1) {
    animation: grow 1s -0.45s ease-in-out infinite;
  }

  span:nth-of-type(2) {
    animation: grow 1s -0.3s ease-in-out infinite;
  }

  span:nth-of-type(3) {
    animation: grow 1s -0.15s ease-in-out infinite;
  }

  span:nth-of-type(4) {
    animation: grow 1s ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(2);
    }
  }

}
```

## loading3

<Load3/>

```html
<div class="box">
    <div></div>
</div>
```
```css
.box {
  width: 50px;
  margin:50px auto;
  position: relative;

  div {
    border: 3px solid #fafafa;
    border-top-color: #3eaf7c;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

}
```

## loading4

<Load4/>

```html
<div class="box">
    <div class="atom-spinner">
      <div class="spinner-inner">
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <!--Chrome renders little circles malformed :(-->
        <div class="spinner-circle">
          &#9679;
        </div>
      </div>
    </div>
</div>
```
```css
.box {
  width: 50px;
  margin:50px auto;
  position: relative;

  .atom-spinner, .atom-spinner * {
      box-sizing: border-box;
    }

    .atom-spinner {
      height: 60px;
      width: 60px;
      overflow: hidden;
    }

    .atom-spinner .spinner-inner {
      position: relative;
      display: block;
      height: 100%;
      width: 100%;
    }

    .atom-spinner .spinner-circle {
      display: block;
      position: absolute;
      color: #3eaf7c;
      font-size: calc(60px * 0.24);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .atom-spinner .spinner-line {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation-duration: 1s;
      border-left-width: calc(60px / 25);
      border-top-width: calc(60px / 25);
      border-left-color: #3eaf7c;
      border-left-style: solid;
      border-top-style: solid;
      border-top-color: transparent;
    }

    .atom-spinner .spinner-line:nth-child(1) {
      animation: atom-spinner-animation-1 1s linear infinite;
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
    }

    .atom-spinner .spinner-line:nth-child(2) {
      animation: atom-spinner-animation-2 1s linear infinite;
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
    }

    .atom-spinner .spinner-line:nth-child(3) {
      animation: atom-spinner-animation-3 1s linear infinite;
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
    }

    @keyframes atom-spinner-animation-1 {
      100% {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes atom-spinner-animation-2 {
      100% {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes atom-spinner-animation-3 {
      100% {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
}
```

## 参考
 - [cssfx](https://cssfx.dev/)
 - [epic-spinners](https://epic-spinners.epicmax.co/#/)