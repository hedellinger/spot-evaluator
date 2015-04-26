Ext.define('SpotEvaluator.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainContainer',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        itemId : 'mainContainer',
        fullscreen: true,
        layout: 'hbox',
        items: [{
                xtype: 'filterList',
                width: 250
            },
            {
                xtype: 'body',
                cls: 'slide',
                width: '100%'
            }
        ]
    }
});