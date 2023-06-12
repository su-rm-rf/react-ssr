# HTML5

判断元素在可视区域内
MutationObserver

# CSS2

# CSS3
预处理器
  在vite中，通过css.preprocessorOptions.scss.additionalData给每个vue文件的style注入共用的scss文件

  sass + var 原理：dom.style.setProperty(name, value)
  https://blog.csdn.net/weixin_44392565/article/details/85755592

# CSS4
函数
calc()

var()
  :root { --header-width: 100vw; }
  .header { width: var(--header-width, $header-width); }
  二者都要以--开头，后者可以使用scss变量
  
  https://codepen.io/jakealbaugh/post/css4-variables-and-sass

env()
  由user-agent控制的只读环境变量

  https://developer.mozilla.org/zh-CN/docs/Web/CSS/var

