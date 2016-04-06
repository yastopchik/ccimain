ms2Gallery.panel.Gallery = function(config) {
	config = config || {};

	Ext.apply(config,{
		border: false,
		id: 'ms2gallery-page',
		baseCls: 'x-panel ms2gallery ' + (MODx.modx23 ? 'modx23' : 'modx22'),
		items: [{
			border: false,
			style: {padding: '10px 5px'},
			xtype: 'ms2gallery-page-toolbar',
			id: 'ms2gallery-page-toolbar',
			record: config.record,
		}, {
			border: false,
			style: {padding: '5px'},
			layout: 'anchor',
			items: [{
				border: false,
				xtype: 'ms2gallery-images-panel',
				id: 'ms2gallery-images-panel',
				cls: 'modx-pb-view-ct',
				resource_id: config.record.id,
				pageSize: config.pageSize || MODx.config.ms2gallery_page_size
			}]
		}]
	});
	ms2Gallery.panel.Gallery.superclass.constructor.call(this,config);
};
Ext.extend(ms2Gallery.panel.Gallery,MODx.Panel);
Ext.reg('ms2gallery-page',ms2Gallery.panel.Gallery);