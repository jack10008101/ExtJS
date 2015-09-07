// Ext.onReady准备函数类似于window.onload函数，Ext.onReady在DOM加载玩就执行，window.onload()在整个页面加载结束才执行
Ext.onReady(function() {
			/*
			 * Ext.MessageBox.alert('我是标题', '我是提示', function() {
			 * console.info(this); alert('我是回调函数'); }, this);
			 */
			/*
			 * Ext.MessageBox.confirm("提示信息","确认删除这条记录吗？",function(op){ //yes or
			 * no if(op=="yes"){ alert("deleted"); }else{ alert('cancled'); }
			 * });
			 */
			/*
			 * Ext.MessageBox.prompt('提示信息', '请输入用户名', function(op, value) {
			 * console.info(op); console.info(value);
			 * 
			 * if(op=='ok'){ alert(value); }else{ alert('cancled'); } }, this,
			 * true, '张三');
			 */
			Ext.MessageBox.wait('提示信息', '我是title', {
						interval : 500, // 循环运行间隔时间
						duration : 2000,// 总共时长
						increment : 4,// 执行进度条的次数
						text : '更新中...',// 进度条上面显示的信息
						scope : this,
						animate : true,
						fn : function() {
							// p.updateText('Done!');
						}
					});

		});
