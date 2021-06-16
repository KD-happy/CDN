# git

使用之前需要查看[点击我](https://blog.csdn.net/guankangqiang/article/details/80525539)

[总的链接](https://cdn.jsdelivr.net/gh/KD-happy/CDN@master/)

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