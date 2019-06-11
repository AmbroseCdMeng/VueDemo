var demo = new Vue({
    el: '#demo',
    data: {
        //构造表头
        thead: [{
                title: 'name',
                key: 'name',
            },
            {
                title: 'age',
                key: 'age',
                sortable: true,
            }, {
                title: 'birthday',
                key: 'birthday',
                sortable: true,
            }, {
                title: 'address',
                key: 'address',
            }
        ],
        //构造表数据
        tbody: [{
            name: '张三',
            age: 18,
            birthday: '1937-10-01',
            address: '深圳龙华区'
        }, {
            name: '李四',
            age: 20,
            birthday: '1999-05-18',
            address: '北京海淀区',
        }, {
            name: '王五',
            age: 23,
            birthday: '1996-02-15',
        }, ],
    },

    methods: {
        /* 添加按钮触发事件，随机添加一笔数据 */
        handleAddData: function () {
            /*随机汉字生成*/
            eval("var firstname=" + '" \\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"');
            eval("var lastname=" + '" \\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"');
            var starttime =
                this.tbody.push({
                    /* 构造两个字的随机用户名 */
                    name: firstname + lastname,
                    /* 随机数[0, 20]向上取整。新学习的写法，现学现用 */
                    age: ~~(Math.random() * 20) + 1,
                    // birthday: '2019-06-10',
                    /* 随机构造一个日期，因时间戳转换代码太过繁琐，且这里并非重点，只是为了体现排序，所以用字符串构造（还会出现2月30日） */
                    birthday: (1989 + ~~(Math.random() * 20)) + '-' + (~~(Math.random() * 11) + 1) + '-' + (~~(Math.random() * 29) + 1),
                    address: '广东河源',
                })
        }
    },
})