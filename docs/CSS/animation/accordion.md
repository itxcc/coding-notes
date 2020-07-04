# 手风琴

<Accordion/>

```html
    <ul class="accordion-container">
      <li class="accordion-item">
        <p class="accordion-title">背景1</p>
      </li>
      ···
    </ul>
```

```css
  .accordion-container {
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .accordion-item {
      list-style: none;
      height: 500px;
      transition: width 0.5s;
      background-repeat: no-repeat;
      background-size: 500px;
      background-position: center center;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.2);
      
      &:not(:hover) {
        width: 20%;
      }
      &:hover {
        width: 500px;
        &::after {
          opacity: 1;
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.5s;
      }
      .accordion-title {
        color: #fff;
        font-size: 18px;
        z-index: 2;
      }
    }
  }
```

