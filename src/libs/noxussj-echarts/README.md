# Introduce

echarts 图表插件，持续封装 50+种图表。目前仅支持 Echarts 5.0 版本以上

# Installing

Using npm:

```
$ npm install noxussj-echarts
```

Using yarn:

```
$ yarn add noxussj-echarts
```

# Example

<b>注入 echarts</b>

首先要导入 echarts 依赖包，然后传入到该插件中进行使用

```javascript
import * as Echarts from 'echarts';
import { use, $echarts } from 'noxussj-echarts';

use(Echarts);
```

<b>定义数据</b>

定义每一种类型图表所需要的数据格式，不同类型的图表数据格式有所不同，但大部分都相同

```javascript
let data = [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' },
];
```

<b>渲染类型图表</b>

使用$echarts.dispatch 方法进行渲染，其中 pieAnnular 为不同类型的图表名称。

```javascript
$echarts.dispatch('pieAnnular', {
    dom: this.$refs.echart,
    param: {
        data: data,
    },
    opt: {},
});
```

![image](https://user-images.githubusercontent.com/37679301/113994590-18900d00-9888-11eb-8f7a-3895f541a2db.png)

# Update Option

### ONE 通过参数传入

其实还可以有更多的传入参数，比如饼图的大小、颜色、图例的位置等，这些都需要您去封装方法里面自定义

```javascript
let param = {
    data: data,

    // ...more
};
```

### TWO 通过儿子继承爸爸的方式

您有没有发现 opt = {} 却能出来一个饼图，因为 pieAnnular 本身就有一个已经写好的 option。所以当您传入（下方代码）时，父级的该项属性则会被替换掉

```javascript
let opt = {
    title: {
        text: 'aaa',
    },
};
```

# Other Echarts

pieAnnular

```javascript
let data = [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' },
];
```

lineSimple

```javascript
let data = {
    series: [
        {
            name: '今年数据',
            data: [10, 20, 30, 30, 10, 30],
        },
        {
            name: '去年数据',
            data: [20, 30, 10, 20, 52, 40],
        },
    ],
    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
};
```

barxSimple

```javascript
let data = {
    series: [
        {
            name: '今年数据',
            data: [10, 20, 30, 30, 10, 30],
        },
    ],
    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
};
```
