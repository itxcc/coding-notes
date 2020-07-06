
# Git学习笔记

## 前言

1. 从 **svn** 转到 **git** 版本控制之后，最大的不同在于区别分支（branch）管理，面向 分支（branch）开发
2. 还多了一个暂存区的概念（git stash）



1. 在进行远程仓库开始之前，需要进行创建 SSH Key

```shell
ssh-keygen -t rsa -C "youremail@example.com" # 生成密钥
ssh -T git@github.com # 测试是否成功
```

1. 在 Mac 上查看自己的 SSH Key

```shell
cat ~/.ssh/id_rsa.pub
```



## 常用命令

**账号配置相关**

```shell
git config --global user.name itxcc # 设置用户名
git config --global user.email itxcc420@gmail.com # 设置邮箱
git config --list # 查看配置的信息
git help config # 获取帮助信息
```

**配置别名**

```
git config --global alias.st status #git st
git config --global alias.co checkout #git co
git config --global alias.br branch #git br
git config --global alias.ci commit #git ci
```

**基础命令**

```shell
# 初始化操作
git init # 初始化git仓库
git status # 文件状态
git add [file1] [file2] ... #.或*代表全部添加
git commit -m "msessage"

# commit备注规范：
- type（文件）：‘备注’
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- perf: （改进性能的代码更改）
- chore：项目构建

# 回滚&&查看历史
git log # 查看所有提交记录
git reflog # 不小心删除了东西，先查到commit id，恢复
git reset –-hard 8ff24a6803173208f3e606e32dfcf82db9ac84d8 # 指定hash值

# 分支相关
git branch # 显示所有本地分支
git branch test # 新建test分支
git push git test # 推送test分支到远程
git checout test # 切换到test分支
git merge test # 将test分支合并到当前分支
git branch -d test # 删除test分支
git push origin -d test # 删除远程test分支

# 变基操作
git rebase master # 将master分之上超前的提交，变基到当前分支
git rebase --onto master 169a6 # 限制回滚范围，rebase 当前分支从169a6以后的提交
git rebase --interactive # 交互模式
git rebase --continue # 处理完冲突继续合并
git rebase --skip # 跳过
git rebase --abort # 取消合并

# Tag 相关
git tag #列出现有标签
git tag v0.1 [branch|commit] # [从指定位置]新建标签
git tag -a v0.1 -m 'my version 1.4'# 新建带注释标签
git checkout tagname # 切换到标签
git tag -d v0.1 # 删除标签
git push origin :refs/tags/v0.1 # 删除远程标签
git push origin v1.5 # 推送分支到源上
git push origin --tags # 一次性推送所有分支

# stash (暂存)相关
git stash # 暂存当前修改
git stash list # 查看所有 stash
git stash clear #注意这是清空你所有 stash 内容
git stash drop stash@{0} # 删除指定 stas
git stash pop stash@{0} # 恢复指定 stash

# merge 合并本地分支(当前在 master 分支，合并 dev 到 master)
git merge dev


```

## git工作流

项目分支分为 `master` 分支和 `dev` 分支

1. 开发人员从远端拉取 `dev` 分支到本地，然后本地再从 `dev` 分支 `checkout` 一个新分支

2. 新开的分支命名规则为：`姓名-功能-日期`，开发完成之后将该分支推到远端随后发起 `merge request`

3. 管理员根据情况进行合并到 `dev` 分支，最后由运维合并到 `master` 分支


## 踩抗

1. 在进行远程提交时，一定要注意有没有相互关联的远程仓库，建议直接：`git push`，git会报错把正确的命令打出来，直接复制就行

2. 把本地仓库和远程仓库的概念区分开来，举例一个操作：把dev分支的一个改动更新到master分支

   在本地dev分支commit之后，切换master分支，进行merge  `git merge dev`

3. git commit 可以在本地多次提交，push的作用就是把改动推送到远端

   git checkout -- file 可以撤销修改

4. 如果遇到临时要修改的模块，自己本地分支也改了东西，切换不过去怎么办？

   解决：先使用`git stash`存入本地缓存区，再`git checkout`切换到要修改的分支，修改完进行第一步

5. `git reflog`查看所有提交日志，git log和git reflog的区别

## 还没搞懂的

1. git rebase 变基操作

当前碰到一种场景：当出现需要变基的分支，直接解决冲突，然后继续

[Git由浅入深之细说变基(rebase)](<https://zhuanlan.zhihu.com/p/26493245>)

## 参考

- [廖雪峰：Git教程](<https://www.liaoxuefeng.com/wiki/896043488029600>)
- [在团队中使用GitLab中的Merge Request工作模式](<http://blog.fwhyy.com/2018/06/Use-the-Merge-Request-working-mode-in-GitLab-in-the-team/>)
