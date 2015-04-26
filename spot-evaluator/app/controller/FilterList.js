Ext.define('SpotEvaluator.controller.FilterList', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'body',
            filterList: 'filterList',
            navBtn: 'button[name="showFilter_btn"]'
        },

        control: {
            navBtn: {
                tap: 'toggleFilter'
            },

            filterList: {
                itemtap: function (list, index, target, record) {
                    this.toggleNav();
                }
            }
        }
    },

    toggleFilter: function () {
        var eFilter = this.getMain().element;

        if(eFilter.hasCls('out'))
            eFilter.removeCls('out').addCls('in');
        else 
            eFilter.removeCls('in').addCls('out');
        
    }
});