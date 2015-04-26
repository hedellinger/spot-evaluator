Ext.define('SpotEvaluator.view.FilterList', {
    extend: 'Ext.form.Panel',
    xtype: 'filterList',
    config: {
        cls: 'nav-list',
        items: [
            {
                xtype: 'checkboxfield',
                name: 'all',
                itemId : 'allValues',
                label: 'All Scores',
                value: 'all',
                labelWidth: '80%',
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name: 'a',
                label: 'Low Score (0-35)',
                value: 'a',
                labelWidth: '80%',
                checked: false
            },
            {
                xtype: 'checkboxfield',
                name: 'b',
                label: 'Med Score (36-70)',
                value: 'b',
                labelWidth: '80%',
                checked: false
            },
            {
                xtype: 'checkboxfield',
                name: 'c',
                label: 'High Score (71-100)',
                value: 'c',
                labelWidth: '80%',
                checked: false
            }
        ]
    }
});