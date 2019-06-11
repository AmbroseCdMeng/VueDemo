Vue.component('vTable', {
    /* 接受父组件参数 */
    props: {
        /* 表头：Array 类型，默认为空数组 */
        thead: {
            type: Array,
            default: function () {
                return [];
            }
        },
        /* 表身：Array 类型，默认为空数组 */
        tbody: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    /* 组件中的数据 */
    data() {
        return {
            /* 初始化表头数组 */
            currentHead: [],
            /* 初始化表身数组 */
            currentBody: [],
        }
    },

    /* render 函数构造表格 */
    render: function (createElement) {
        /**
         * 定义 _this 临时存储 Vue 实例。（关于这里使用了箭头函数还临时存储 this 的原因说明）
         * 使用箭头函数编写代码原本是不需要临时存储 this 的
         */
        var _this = this;
        /* 定义数组。用来存储表头信息，含节点 */
        var ths = [];
        /* 遍历表头信息 */
        this.currentHead.forEach((ele, index) => {
            /* 如果当前列允许排序 即 sortable 为 Truely */
            if (ele.sortable) {
                /**
                 * 构造节点并push 到 ths 数组
                 * 节点基本结构如下：
                 *  <th>
                 *      <span>ele.title</span>
                 *      <a class="on" @click="handleSortByAsc">↑</a>
                 *      <a class="on" @click="handleSortByDesc">↓</a>
                 *  </th>
                 */
                ths.push(createElement('th', [
                    createElement('span', ele.title),
                    createElement('a', {
                        class: {
                            on: ele._sortType === 'asc'
                        },
                        on: {
                            click: function () {
                                _this.handleSortByAsc(index);
                            }
                        }
                    }, '↑'),
                    createElement('a', {
                        class: {
                            on: ele._sortType === 'desc'
                        },
                        on: {
                            click: function () {
                                _this.handleSortByDesc(index);
                            }
                        }
                    }, '↓'),
                ]));
                /* 如果当前列不允许排序操作，即 sortable 为 Falsely */
            } else {
                /**
                 * 节点基本结构如下：
                 * <th>
                 *      <span>ele.title</span>
                 * </th>
                 */
                ths.push(createElement('th', ele.title));
            }
        });

        /* 定义数组。用来存储表身信息，含节点 */
        var trs = [];
        /* 遍历表身信息 */
        this.currentBody.forEach((ele, index) => {
            /* 循环内定义临时数组，存储当前 tr 的数据 */
            var tds = [];
            /* 遍历表头，根据 key 值获取当前 tr 对应的 td 的内容，并 push 到 tds 数组*/
            this.currentHead.forEach(cell => {
                tds.push(createElement('td', ele[cell.key]));
            });
            /* 将取到的 tr 数据 push 到 tr 数组中 */
            trs.push(createElement('tr', tds));
        });

        /**
         * 返回节点。
         * 节点基本结构如下：
         *  <table>
         *      <thead>
         *          <tr>
         *              ...ths数组的内容...
         *          </tr>
         *      </thead>
         *      <tbody>
         *          ...trs 数组的内容...
         *      </tbody>
         *  </table>
         */
        return createElement('table', [
            createElement('thead', [
                createElement('tr', ths)
            ]),
            createElement('tbody', trs)
        ])
    },

    methods: {
        /* 初始化组件中表头数组，数据源来自父组件 */
        makeHead: function () {
            this.currentHead = this.thead.map((col, index) => {
                /* 默认排序类型为 normal */
                col._sortType = 'normal';
                col._index = index;
                return col;
            });
        },
        /* 初始化组件中表身数组，数据源来自父组件 */
        makeBody: function () {
            this.currentBody = this.tbody.map((row, index) => {
                row._index = index;
                return row;
            })
        },
        /* 正序排列 从小到大 */
        handleSortByAsc: function (index) {
            /* 获取当前点击列的 key 值 */
            var key = this.currentHead[index].key;
            /* 将表头所有列的排序类型置为默认 normal */
            this.currentHead.forEach(col => {
                col._sortType = 'normal';
            });
            /* 修改当前点击列的排序类型为 asc */
            this.currentHead[index]._sortType = 'asc';
            /* 对表身数组进行正序排列 */
            this.currentBody.sort((a, b) => {
                return a[key] > b[key] ? 1 : -1;
            })
        },
        /* 倒序排列 从大到小 */
        handleSortByDesc: function (index) {
            /* 获取当前点击列的 key 值 */
            var key = this.currentHead[index].key;
            /* 将表头所有列的排序类型置为默认 normal */
            this.currentHead.forEach(col => {
                col._sortType = 'normal';
            });
            /* 修改当前点击列的排序类型为 desc */
            this.currentHead[index]._sortType = 'desc';
            /* 对表身数组进行倒序排列 */
            this.currentBody.sort((a, b) => {
                return a[key] < b[key] ? 1 : -1;
            })
        }
    },

    /* 定义监听器 */
    watch: {
        /* 监听表身数据。当表身数据发生变化时，触发该事件 */
        tbody: function () {
            /* 初始化表身 */
            this.makeBody();
            /* 过滤排序类型不为 normal 的表头，即获取指定了排序类型的字段 */
            var sortedColumn = this.currentHead.filter(col => {
                return col._sortType !== 'normal';
            });
            /* 如果指定了排序类型 */
            if (sortedColumn.length > 0) {
                if (sortedColumn[0]._sortType === 'asc') {
                    /* 正序排列 */
                    this.handleSortByAsc(sortedColumn[0]._index);
                } else {
                    /* 倒序排列 */
                    this.handleSortByDesc(sortedColumn[0]._index);
                }
            }
        }
    },

    /* 钩子函数。当Vue实例挂载后执行 */
    mounted() {
        /* 初始化表头 */
        this.makeHead();
        /* 初始化表身 */
        this.makeBody();
    },
})