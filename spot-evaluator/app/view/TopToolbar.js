Ext.define('SpotEvaluator.view.TopToolbar', {
    extend:'Ext.Toolbar',
    xtype:'topToolbar',
    config:{
        docked: 'top',
        items: [
            {
                id: 'segmented',
                xtype: 'segmentedbutton',
                allowMultiple: true,
                
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'search'
                    }
                ]
            },
            {
                xtype: 'textfield',
                id: 'address',
                name: 'address',
                label: '',
                allowBlank: false  
            },
            {
                xtype: 'titlebar',
                title: '',
                docked: 'right',
                items: [{
                        align: 'right',
                        name: 'showFilter_btn',
                        iconCls: 'list',
                        ui: 'plain'
                    }
                ]
            }

        ]
    }
});