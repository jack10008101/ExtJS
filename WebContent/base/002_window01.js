Ext.onReady(function() {

	Ext.create('Ext.window.Window', {
		title : '我的第一个组件widow',
		width : 400,// Number类型，也可以是字符串类型，width:'90%'
		height : 300,
		layout : 'fit',
		modal : true,// 设置一个模态窗口，遮罩整个下面的窗体
		constrain : true,// 限制窗体不会超出浏览器
		plain : true,
		autoScroll : true,
		html : '<div style=width:100ps;height:100px>我是第一个DIV</div><div style=width:100ps;height:100px>我是第二个DIV</div>',
		constrainHeader : true,// 不允许窗体的title超出浏览器边
		renderTo : Ext.getBody()
			// 新创建的组建渲染到什么地方
	}).show();
});