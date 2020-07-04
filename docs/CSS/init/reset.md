# 重置样式

## reset
> 源地址：[Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

``` css
@charset "UTF-8";
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
view,div{
  box-sizing: border-box;
}
```
## 清除**小程序** button 默认样式
```css
button::after {
  border: none;
}
button {
  background: #fff;
}
```

## 清除移动端 input 样式
``` css
input{
    border: none;
    -moz-appearance:none;
    -webkit-appearance : none ; /*解决ios上按钮的圆角问题*/
    border-radius: 0; /*解决ios上输入框圆角问题*/
    outline:medium; /*去掉鼠标点击的默认黄色边框*/
    background-color: transparent;
}
```


## 避免 **ios** 滑动滚动条卡顿
``` css
*{
  -webkit-overflow-scrolling : touch
}
```