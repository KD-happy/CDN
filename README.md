[总的链接](https://cdn.jsdelivr.net/gh/KD-happy/CDN@master/)         [最新版本](https://cdn.jsdelivr.net/gh/KD-happy/CDN@latest/) 

[![](https://data.jsdelivr.com/v1/package/gh/KD-happy/CDN/badge)](https://www.jsdelivr.com/package/gh/KD-happy/CDN)

# git

使用之前需要查看[点击我](https://blog.csdn.net/guankangqiang/article/details/80525539)


## clone

**clone项目代码库**
```git
git clone git@github.com:xxx/xxxx.git
```

## 分支
[源网站](https://www.jianshu.com/p/7ebb0286444f)  
**查看分支**

```git
git branch
* master
```
\* 标志是当前所在的分支
- 查看远程分支： git branch -r
- 查看所有分支： git branch -a

**本地创建新的分支**
```git
git branch [branch name]
```

**切换到新分支**
```git
git checkout [branch name]
```

**创建+切换分支**
```git
git checkout -b [branch name]
```

**将新分支推送到GitHub**
```git
git push origin [branch name]
```

**删除本地分支**
```git
git branch -d [branch name]
```

**删除GitHub**
```git
git push origin :[branch name]
```

# 一些好JS的使用

## SweetAlert 2

[引入作者](https://cdn.jsdelivr.net/npm/sweetalert2@latest/)

**要引入的链接**

> https://cdn.jsdelivr.net/gh/KD-happy/CDN@master/myfile/sweetalert2.min.js

**SweetAlert 2使用方法**

> https://blog.csdn.net/WuLex/article/details/109501829  
> https://www.cnblogs.com/beiz/p/5238124.html  

**简单的演示**

```javascript
Swal.fire({
    icon: 'warning', // 弹框类型
    title: '注销帐号', //标题
    text: "注销后将无法恢复，请谨慎操作！", //显示内容            

    confirmButtonColor: '#3085d6',// 确定按钮的 颜色
    confirmButtonText: '确定',// 确定按钮的 文字
    showCancelButton: true, // 是否显示取消按钮
    cancelButtonColor: '#d33', // 取消按钮的 颜色
    cancelButtonText: "取消", // 取消按钮的 文字

    focusCancel: true, // 是否聚焦 取消按钮
    reverseButtons: true  // 是否 反转 两个按钮的位置 默认是  左边 确定  右边 取消
}).then((isConfirm) => {
    try {
        //判断 是否 点击的 确定按钮
        if (isConfirm.value) {
            Swal.fire("成功", "点击了确定", "success");
        }
        else {
            Swal.fire("取消", "点击了取消", "error");
        }
    } catch (e) {
        alert(e);
    }
});

Swal.fire({icon: 'warning',title: '提示',text: '警告！！'});
Swal.fire('提示','请输入某个值','info');
Swal.fire({
    title: '提示',
    text: '当前页面超时',
    icon: 'warning',
    confirmButtonText: '点击后刷新'
}).then(function(){
    parent.location.reload();
});


var content = "无记录";
var msg=""; //msg 是从外面传入的数据
if (msg) {

    content = "<p style='color: red'>最近一次操作后的5小时内有效</p> "
        + "<p>可以使用 Ctrl +F 查找关键字</p>"
        + "<table class='table_list'>"
        + "<tr>"
        + "     <th class='js_tr_data'> 时间</th> <th>名称</th> <th>密码</th>"
        + "</tr>"
        + msg
        + "</table>"
}
Swal.fire({
    title: '<strong>记录</strong>',
    icon: 'info',
    html: content, // HTML
    focusConfirm: true, //聚焦到确定按钮
    showCloseButton: true,//右上角关闭
})
```


## NoticeJS

[作者的Github](https://github.com/alihesari/notice.js)

[引入作者](https://cdn.jsdelivr.net/gh/alihesari/notice.js@latest/dist/)

[animation演示站](https://animate.style/)

**要引入三个链接**

> https://cdn.jsdelivr.net/gh/KD-happy/CDN@master/myfile/noticejs.js  
> https://cdn.jsdelivr.net/gh/KD-happy/CDN@master/myfile/noticejs.css  
> https://cdn.jsdelivr.net/gh/KD-happy/CDN@master/myfile/animate.css  

**简单的演示**

```javascript
function showMessage(msg, type) {
    // type: success[green] error[red] warning[orange] info[blue]
    let color = ['success', 'error', 'warning', 'info'];
    new NoticeJs({
    text: msg,
    type: color[type],
    position: 'bottomRight', //topLeft topCenter topRight middleLeft middleCenter middleRight bottomLeft bottomCenter bottomRight
    animation: { //网站：https://animate.style/ 其中的带In Out基本上都是可以用的 但是要一一对应
        open: 'animated bounceIn',
        close: 'animated bounceOut',
    }
    }).show();
}
```
