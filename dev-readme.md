##一、组件项目规范
###1、组件项目目录
1. 	src源文件目录
- 		scss目录
- 			utils目录
- 			mixins目录
- 			functions目录
- 			scss组件组装文件
- 			变量定义文件
- 			入口文件
- 			reset文件
- 			基本元素定义文件
2. 		js
- 			base目录
- 			utils目录
- 			组件目录
3. 	dist  生成文件目录
4. 	docs  文档目录
5. 	test  单元测试目录
6. 	build 编译与配置文件
##二、命名规范
1. js相关命名规范：
- 	类命名：首字母大写 Users
- 	静态方法命名：驼峰式  nameSpace
- 	原型方法命名：横线式  name-space
- 	私有方法命名：以_开始  _get
- 	变量命名：以字母开头  【a-z\d_】
- 	常量命名：全部大写与_组成
- 	自定义事件命名：驼峰式
2. scss相关命名规范：
- 	变量命名：以字母开头  【a-z\d_】见名知义
- 	mixin命名：以字母开头  【a-z\d_】  见名知义
- 	function命名：以字母开头  【a-z\d_】见名知义

3. class命名：
- 	前缀-组件-负责的用途
- 	js用途：js-用途
	
##三、demo讲解
1. 	启动测试：npm run test
2. 	编译项目与启动demo：npm start
	
##四、用到的测试框架：
1. 	karma框架
2. 	mocha库 
3.  chai断言库
3.  学习地址：https://mochajs.org/
	
	
	
	