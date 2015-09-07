Ext.onReady(function() {
			// 在Ext中如何去定义一个类：Ext.define(classname,properties,callback)
			/*
			 * Ext.define('Person',{
			 * //这里是对于类的一些基本的配置信息，config就是配置当前类的属性内容，并且会自动添加get和set方法 config:{
			 * name:'z2', age:12 }, //自定义的方法 say:function(){ alert('我是方法。。。。。') },
			 * constructor:function(config){ var me=this; me.initConfig(config); }
			 * }); var p=new Person({ name:'lisi', age:25 }); console.info(p);
			 * alert(p.name); p.say(); var p=Ext.create('Person',{
			 * name:'wangwu', age:30 }); p.say() console.info(p);
			 */
			// extjs里面如何实现继承
			Ext.define('Person', {
						config : {
							name : 'bjsxt'
						},
						constructor : function(config) {
							var me = this;
							me.initConfig(config);
						}
					});
			Ext.define('Boy', {
						config : {
							sex : '男',
							age : 20
						},
						extend : 'Person'
					});
				var boy=Ext.create('Boy',{
				name:'张三',
				sex:'nan',
				age:26
				});
				console.info(boy);
		});