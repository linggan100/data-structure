## 认识链表

什么是链表，某些语言中原生自带，但JavaScript中并没有，大家熟知的一种原生数据结构是数组。

数组存储的是一组数据，链表同样，区别就是，数组存储在一块连续的空间，长度固定（可通过索引取值），而链表不需要连续空间，只需要当前节点告诉我下个节点在哪（单向）或者加上一个节点（双向链表），即可。

简单区分：

频繁查询选数组，索引一次查到。

频繁增删用链表，不需要大量移动元素，只要从中间掐断，改变指针。

## 创建链表

既然链表不是语言自带的，就需要手动创建，需要实现的主要功能如下：

- 创建节点
- 找到某节点
- 往链表中添加节点
- 从链表删除节点
- 获取长度
- 获取当前节点
- 链表遍历
- 清空链表

代码如下：

```

```