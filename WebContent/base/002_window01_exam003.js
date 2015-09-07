Ext.onReady(function() {
			// example003:用windowGroup对象去操作多个window窗口
			var windowGroup = new Ext.WindowGroup();
			for (var i = 1; i <= 5; i++) {

				var win = Ext.create('Ext.window.Window', {
							title : '第' + i + '个窗体',
							id : 'win_' + i,
							width : 300,
							height : 300,
							renderTo : Ext.getBody()
						});
						win.show();
				windowGroup.register(win);
			}
			var btn1 = Ext.create('Ext.button.Button', {
						text : '全部隐藏',
						renderTo : Ext.getBody(),
						handler : function() {
							windowGroup.hideAll();
						}
					});
			var btn2=Ext.create('Ext.button.Button',{
			text:'全部显示',
			renderTo:Ext.getBody(),
			handler:function(){
				windowGroup.each(function(component){
					component.show();
				});
				
			}
			});
		});