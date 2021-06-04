## 1
[视频](https://www.bilibili.com/video/BV1KK411p7sm)
```javascript
//隐藏B站头像 1
document.querySelector('.h-avatar').style.display='none';
// 2
document.querySelector('.ha-vatar').style='display: none';

// 显示B站头像
document.querySelector('.h-avatar').style='display';
```
> 自认为解释:(不代表真实性)
> document: 感觉是对HTML文档进行操作
> querySelector: 选择器，选择出‘h-avatar’这个类，进行操作
> style: 对类的样式进行修改
> display: 显示操作
> 'display: none': 隐藏操作
> 获取类(class)，要用‘.’

**注意：**
收藏夹程序中经常会出现屏幕显示乱七八糟的东西(或跳转网站)
解决方法: 在程序的最后面加上一个'void(0);'

## 2
[视频](https://www.bilibili.com/video/BV1kK4y1x7Vw)
1. 获取图片的地址 (发现是一个md5的jpg地址)
2. 在视频的源码中搜索md5 (发现地址所在的标签)
3. 通过1中的选择器就可以获取相应的属性
4. 获取属性中的图片地址
5. 在新标签页中打开地址链接
```javascript
// 3: 选择器返回的属性
document.querySelector('meta[itemprop=image]');

// 4: 选择出来属性中的url地址
document.querySelector('meta[itemprop=image]')["content"];
document.querySelector('meta[itemprop=image]').getAttribute('content');

// 5: 新标签页打开url连接
window.open(document.querySelector('meta[itemprop=image]').getAttribute('content'));
```

> 自认为解释:(不代表真实性)
> querySelector('meta[itemprop=image]'): 选择器选择一个‘meta’标签，其中含有‘itemprop=image’的属性
> 选择器可以用浏览器自带的 Copy -> JS Path
> getAttribute: 取出属性，也可以用‘[]’来取(最好用getAttribute来取)
> window.open(): 在新标签页打开特定连接

3. 在源码中继续找 (发现一个script标签下有图片的url地址)
4. 调用标签下对象的值(url)
5. 在新标签页打开地址链接

```javascript
// 3: 发现源码中script标签下
window.__INITIAL_STATE__

// 4: 调用出对象中url
window.__INITIAL_STATE__.videoData.pic

// 5: 在新标签中打开url地址
window.open(window.__INITIAL_STATE__.videoData.pic)
```

## 3
[视频](https://www.bilibili.com/video/BV1j54y1Q7jq)
1. 打开头像图片
2. 实现不同场合下，打开不同目标的头像
3. 默认的头像地址不是原图 (通过正则表达式来选取真实的url链接)
4. 在新标签页中打开图片地址

```javascript
// 2: 获取不同场合下的地址链接
window.location.href;

// 2: 正则表达式判断
/^https?:\/\/space\.bilibili\.com\/\d+/.test(window.location.href)

// 3: 获取图片的原地址
url = document.querySelector("#h-avatar")['src']
url = document.querySelector("#h-avatar").getAttribute('src')

// 3: 通过正则表达式获取真实链接
/^.*\/\/.*\/bfs\/face\/[a-z0-9]+\.(jpe?g|png|gif)/.exec(url)[0]
```

> 自认为解释:(不代表真实性)
> window.location.href: 获取当前链接
> 正则表达式要用/^/括起来
> 正则表达式中有两个函数: test, exec
> 前者是判断是否匹配，后者是匹配出字符串
> 前者可以用来判断是否在特定场合下
> 正则表达式中的^是表示起始

**注意**
获取id要用‘#’
获取标签什么都不要
获取类(class)，要用‘.’

## 4
[视频](https://www.bilibili.com/video/BV1wg4y1q7EX)
1. 找到文章的头图片 (发现图片写在css中)
2. 通过选择器选择含链接的部分
3. 通过正则表达式选择出真正的链接
4. 在新标签页中打开图片

```javascript
var gz = /https?:\/\/.*\/bfs\/article\/[a-z0-9]+\.(jpe?g|png|gif)/;
url = gz.exec(document.querySelector('.banner-img-holder').getAttribute('style'))[0];
window.open(url);
```
**注意**
有些文章图片是打开不了的

prompt('标题', '选填内容');
可输入弹窗

计时器
创建计时器: 
n = setInterval('test()', 1000);
清除计时器: 
clearInterval(n);

创建函数
function 函数名() {
}

新控制台输出
var num = 1;
console.log(\`我是${num}岁的小孩子\`);
es6的语法

```javascript
if(typeof level === 'undefined')
    var level = parseInt(document.querySelector('.h-level').getAttribute('lvl'));
level = level === 6 ? 1 : ++level;
document.querySelector('.h-level').setAttribute('lvl', level);
```

获取网站cookie
document.cookie



document.querySelectorAll('.cube-list li').forEach(function(el) {
    console.log(el.getAttribute('data-aid'));
})


获取鼠标选中的文字
window.getSelection().toString()