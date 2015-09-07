Ext.onReady(function() {
			// 在组建中添加子组件，并进行一系列针对子组件的的操作
			/*
			 * var win = new Ext.window.Window({ title : '添加子组件实例', width : 600,
			 * height : 400, renderTo : Ext.getBody(), draggable : false,//
			 * 不允许拖拽 resizable : false,// 不允许改变窗口大小 closable : false, // 不现实关闭按钮
			 * collapsible : true,// 显示折叠按钮 bodyStyle :
			 * 'background:#ffc;padding:20px;', html : '我是window的内容', // Ext
			 * items(array) items : [{ //
			 * Ext的组件给我们提供了一种更加简单的方式来生成一个组建，xtype属性去创建一个组件 xtype : 'panel',
			 * width : '50%', height : 100, html : '我是面板' }, { xtype : 'button',
			 * text:'我是按钮', handler:function(btn){ alert(btn.text); } }]
			 * 
			 * });
			 */
			var win = new Ext.Window({
						title : '子组件',
						id:'myWin',
						width : 300,
						height : 300,
						renderTo : Ext.getBody(),
						// 表示在当前组件的顶部位置添加工具条
						tbar : [{
							
									text : '按钮1',
									handler : function(btn) {
                                       //组件都会有up()和down两个方法，表示向上或者向下查找，需要的参数是组件的xtype或者是选择器
									alert(btn.up('window').title);
										
									}
								}, {
									text : '按钮2',
									handler:function(btn){
										//最常用的方式
										alert(Ext.getCmp('myWin').title);
									}
								},{
								  text:'按钮3',
								  handler:function(btn){
								  	//以上一级组件的形式去查找ownerCt的
								  	console.info(btn.ownerCt);
								  	alert(btn.ownerCt.ownerCt.title);
								  }
								}]
					});
			win.show();
		});
