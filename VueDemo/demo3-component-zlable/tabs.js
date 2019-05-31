Vue.component('tabs', {
    name: "tabs",
    template: '\
		<div class="tabs">\
			<div class="tabs-bar">\
				<!-- 标签列表遍历 -->\
						<div\
							:class="tabCls(item)"\
							v-for="(item, index) in navList"\
							:key="item.id"\
							@click="handleChange(index)"\
						>{{item.label}}</div>\
			</div>\
			<div class="tabs-content">\
				<!-- slot 嵌套 pane -->\
				<slot></slot>\
			</div>\
		</div>\
	',
    data() {
        return {
            navList: [],
            currentValue: this.value //复制一份value自己维护，value 是为了可以使用 v-model
        };
    },
    props: {
        value: {
            type: [String, Number]
        }
    },
    methods: {
        getTabs() {
            return this.$children.filter(function (item) {
                return item.$options.name === "pane";
            });
        },
        updateNav() {
            this.navList = [];
            this.getTabs().forEach((pane, index) => {
                this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });
                if (!pane.name) panem.name = index;
                if (index == 0)
                    if (!this.currentValue) _this.currentValue = pane.name || index;
            });
            this.updateStatus();
        },
        updateStatus() {
            var tabs = this.getTabs();
            tabs.forEach(tab => {
                return (tab.show = tab.name === this.currentValue);
            });
        },

        tabCls: function (item) {
            return [
                "tabs-tab",
                {
                    "tabs-tab-active": item.name === this.currentValue
                }
            ];
        },
        handleChange: function (index) {
            var nav = this.navList[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input', name);
            this.$emit('on-click', name);
        }
    },
    watch: {
        value: function (val) {
            this.currentValue = val;
        },
        currentValue: function () {
            this.updateStatus();
        }
    },
})
