Ext.onReady(function() {
			// 点击一个按钮，打开一个窗体
			var btn = Ext.get("btn");// 经过ExtJs包装过后的一个ExtJs的DOM对象
			btn.on('click', function() {
				if(!Ext.getCmp('myWindow')){
						Ext.create('Ext.window.Window', {
							id:'myWindow',//如果给你的组建加了一个Id，那么这个组建就会被Ext component manager管理起来
                             title:'新创建的窗体',
                             width:300,
                             height:300,
                             renderTo:Ext.getBody()
						}).show();
				}
					});

		});