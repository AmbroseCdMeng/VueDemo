Vue.component('vInput', {

    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data(){
        return{
            text : this.value,
        }
    },
    render: function (createElement) {
        var _this = this;
        return createElement('div', [
            createElement('span', '昵称：'),
            createElement('input', {
                attrs: {
                    type: 'text'
                },
                domProps: {
                    value: this.value,
                },
                on: {
                    input: function (event) {
                        _this.text = event.target.value;
                        /**
                         * Vue Warning:
                         * Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
                         * Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"
                         *
                         * 翻译：
                         * 避免直接修改属性，因为只要父组件重新渲染，该值就会被覆盖，应该根据 prop 的值使用 data 或计算属性
                         *
                         * 原因：
                         * Vue 2 中，不提倡在子组件中修改父组件内容。也就是说，建议单向数据流
                         *
                         * 官方文档：
                         * 所有的prop都使其父子之间形成单向下行绑定:即父级prop的更新会流动到子级，但是反向不允许，为了防止子级意外改变父级组件状态
                         * 每次父组件发生更新时，子组件中的所有prop都会刷新为最新值。这意味着操作者不应该在子组件中修改prop的值。如果这样做，Vue将
                         * 会在浏览器中发出警告。
                         */
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ]);
    }
});

Vue.component('vTextarea', {
    props: {
        value: {
            type: [String, Object],
            default: '',
        }
    },
    render: function (createElement) {
        var _this = this;
        return createElement('div', [
            createElement('span', '留言内容：'),
            createElement('textarea', {
                attrs: {
                    placeholder: '请输入内容',
                },
                domProps: {
                    value: this.value,
                },
                ref: 'message',
                on: {
                    input: function (event) {
                        //_this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    },
    methods: {
        focus: function () {
            this.$refs.message.focus();
        }
    },
})