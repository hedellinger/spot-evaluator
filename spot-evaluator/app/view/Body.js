Ext.define('SpotEvaluator.view.Body', {
    extend: 'Ext.Panel',
    xtype: 'body',
    config: {
        itemId : 'bodyPanel',
        items: [
            {
                xtype:'topToolbar'
            },
            {
                xtype: 'semap'
            }
        ],
        masked: {
            xtype: 'loadmask',
            message: 'Loading'
        }
    }
});