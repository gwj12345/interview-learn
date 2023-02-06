(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{365:function(t,a,e){"use strict";e.r(a);var s=e(7),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("因为没找到好的项目结构，所以这里就先说面试题吧")]),t._v(" "),a("h2",{attrs:{id:"同学的一次面试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同学的一次面试"}},[t._v("#")]),t._v(" 同学的一次面试")]),t._v(" "),a("h3",{attrs:{id:"mybatis的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的优缺点"}},[t._v("#")]),t._v(" mybatis的优缺点")]),t._v(" "),a("ul",[a("li",[t._v("与JDBC相比，减少了50%以上的代码量")]),t._v(" "),a("li",[t._v("MyBatis是最简单的持久化框架，小巧并且简单易学")]),t._v(" "),a("li",[t._v("MyBatis灵活，不会对应用程序或者数据库的现有设计强加任何影响，SQL写在XML里，从程序代码中彻底分离，降低耦合度，便于统一管理和优化，可重用")]),t._v(" "),a("li",[t._v("提供XML标签，支持编写动态SQL语句（XML中使用if, else）")]),t._v(" "),a("li",[t._v("提供映射标签，支持对象与"),a("a",{attrs:{href:"http://lib.csdn.net/base/mysql",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库"),a("OutboundLink")],1),t._v("的ORM字段关系映射（在XML中配置映射关系，也可以使用注解）")])]),t._v(" "),a("p",[a("strong",[t._v("缺点")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SQL语句的编写工作量较大，尤其是字段多、关联表多时，更是如此，对开发人员编写SQL语句的功底有一定要求。")])]),t._v(" "),a("li",[a("p",[t._v("SQL语句依赖于数据库，导致数据库移植性差，不能随意更换数据库。")])])]),t._v(" "),a("h3",{attrs:{id:"mybatis-dao层是否可以重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-dao层是否可以重载"}},[t._v("#")]),t._v(" mybatis Dao层是否可以重载")]),t._v(" "),a("p",[t._v("写dao层的mapper接口时，是不可以进行方法的重载的。每个方法都有唯一的命名时，在xml中进行映射后，就可以执行，不会出现异常。如果重载的话，那么就会出现ID相同的现象")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/1c64b2c8a0076.png",alt:"image.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/b7a4b66b1adfc.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("上面这样就会报错，因为两个ID相同，冲突了")]),t._v(" "),a("h3",{attrs:{id:"mybatis分页是物理分页吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis分页是物理分页吗"}},[t._v("#")]),t._v(" mybatis分页是物理分页吗")]),t._v(" "),a("p",[t._v("是的，基本原理就是使用 Mybatis 提供的插件接口，在插件的拦截方法内，拦截待执行的 SQL ，然后重写 SQL ，根据 dialect 方言，添加对应的物理分页语句和物理分页参数。")]),t._v(" "),a("h2",{attrs:{id:"javaguide上的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javaguide上的"}},[t._v("#")]),t._v(" JavaGuide上的")]),t._v(" "),a("h3",{attrs:{id:"和-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-的区别是什么"}},[t._v("#")]),t._v(" #{}和${}的区别是什么？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("${}")]),t._v("是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于静态文本替换，比如${driver}会被静态替换为"),a("code",[t._v("com.mysql.jdbc.Driver")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("#{}")]),t._v("是 sql 的参数占位符，MyBatis 会将 sql 中的"),a("code",[t._v("#{}")]),t._v("替换为?号，在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的?号占位符设置参数值，比如 ps.setInt(0, parameterValue)，"),a("code",[t._v("#{item.name}")]),t._v(" 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 "),a("code",[t._v("param.getItem().getName()")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"xml-映射文件中-除了常见的-select-insert-update-delete-标签之外-还有哪些标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-映射文件中-除了常见的-select-insert-update-delete-标签之外-还有哪些标签"}},[t._v("#")]),t._v(" Xml 映射文件中，除了常见的 select|insert|update|delete 标签之外，还有哪些标签？")]),t._v(" "),a("p",[t._v("注：这道题是京东面试官面试我时问的。")]),t._v(" "),a("p",[t._v("答：还有很多其他的标签，"),a("code",[t._v("<resultMap>")]),t._v("、"),a("code",[t._v("<parameterMap>")]),t._v("、"),a("code",[t._v("<sql>")]),t._v("、"),a("code",[t._v("<include>")]),t._v("、"),a("code",[t._v("<selectKey>")]),t._v("，加上动态 sql 的 9 个标签，"),a("code",[t._v("trim|where|set|foreach|if|choose|when|otherwise|bind")]),t._v("等，其中为 sql 片段标签，通过"),a("code",[t._v("<include>")]),t._v("标签引入 sql 片段，"),a("code",[t._v("<selectKey>")]),t._v("为不支持自增的主键生成策略标签。")]),t._v(" "),a("h3",{attrs:{id:"最佳实践中-通常一个-xml-映射文件-都会写一个-dao-接口与之对应-请问-这个-dao-接口的工作原理是什么-dao-接口里的方法-参数不同时-方法能重载吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践中-通常一个-xml-映射文件-都会写一个-dao-接口与之对应-请问-这个-dao-接口的工作原理是什么-dao-接口里的方法-参数不同时-方法能重载吗"}},[t._v("#")]),t._v(" 最佳实践中，通常一个 Xml 映射文件，都会写一个 Dao 接口与之对应，请问，这个 Dao 接口的工作原理是什么？Dao 接口里的方法，参数不同时，方法能重载吗？")]),t._v(" "),a("p",[t._v("Dao 接口，就是人们常说的 "),a("code",[t._v("Mapper")]),t._v("接口，接口的全限名，就是映射文件中的 namespace 的值，接口的方法名，就是映射文件中"),a("code",[t._v("MappedStatement")]),t._v("的 id 值，接口方法内的参数，就是传递给 sql 的参数。"),a("code",[t._v("Mapper")]),t._v("接口是没有实现类的，当调用接口方法时，接口全限名+方法名拼接字符串作为 key 值，可唯一定位一个"),a("code",[t._v("MappedStatement")]),t._v("，举例："),a("code",[t._v("com.mybatis3.mappers.StudentDao.findStudentById")]),t._v("，可以唯一找到 namespace 为"),a("code",[t._v("com.mybatis3.mappers.StudentDao")]),t._v("下面"),a("code",[t._v("id = findStudentById")]),t._v("的"),a("code",[t._v("MappedStatement")]),t._v("。在 MyBatis 中，每一个"),a("code",[t._v("<select>")]),t._v("、"),a("code",[t._v("<insert>")]),t._v("、"),a("code",[t._v("<update>")]),t._v("、"),a("code",[t._v("<delete>")]),t._v("标签，都会被解析为一个"),a("code",[t._v("MappedStatement")]),t._v("对象。")]),t._v(" "),a("p",[t._v("Dao 接口里的方法可以重载，但是Mybatis的XML里面的ID不允许重复。")]),t._v(" "),a("p",[t._v("Mybatis版本3.3.0，亲测如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Mapper接口里面方法重载\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StuMapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllStu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllStu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("然后在 "),a("code",[t._v("StuMapper.xml")]),t._v(" 中利用Mybatis的动态sql就可以实现。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("select id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getAllStu"')]),t._v(" resultType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.pojo.Student"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \t\tselect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" from student\n        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id != null"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("where"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("能正常运行，并能得到相应的结果，这样就实现了在Dao接口中写重载方法。")]),t._v(" "),a("p",[a("strong",[t._v("Mybatis 的 Dao 接口可以有多个重载方法，但是多个接口对应的映射必须只有一个，否则启动会报错。")])]),t._v(" "),a("p",[t._v("Dao 接口的工作原理是 JDK 动态代理，MyBatis 运行时会使用 JDK 动态代理为 Dao 接口生成代理 proxy 对象，代理对象 proxy 会拦截接口方法，转而执行"),a("code",[t._v("MappedStatement")]),t._v("所代表的 sql，然后将 sql 执行结果返回。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-是如何进行分页的-分页插件的原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是如何进行分页的-分页插件的原理是什么"}},[t._v("#")]),t._v(" MyBatis 是如何进行分页的？分页插件的原理是什么？")]),t._v(" "),a("p",[t._v("MyBatis 使用 RowBounds 对象进行分页，它是针对 ResultSet 结果集执行的内存分页，而非物理分页，可以在 sql 内直接书写带有物理分页的参数来完成物理分页功能，也可以使用分页插件来完成物理分页。")]),t._v(" "),a("p",[t._v("分页插件的基本原理是使用 MyBatis 提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的 sql，然后重写 sql，根据 dialect 方言，添加对应的物理分页语句和物理分页参数。")]),t._v(" "),a("p",[t._v("举例："),a("code",[t._v("select _ from student")]),t._v("，拦截 sql 后重写为："),a("code",[t._v("select t._ from （select \\* from student）t limit 0，10")])]),t._v(" "),a("h3",{attrs:{id:"简述-mybatis-的插件运行原理-以及如何编写一个插件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-mybatis-的插件运行原理-以及如何编写一个插件。"}},[t._v("#")]),t._v(" 简述 MyBatis 的插件运行原理，以及如何编写一个插件。")]),t._v(" "),a("p",[t._v("MyBatis 仅可以编写针对 "),a("code",[t._v("ParameterHandler")]),t._v("、"),a("code",[t._v("ResultSetHandler")]),t._v("、"),a("code",[t._v("StatementHandler")]),t._v("、"),a("code",[t._v("Executor")]),t._v(" 这 4 种接口的插件，MyBatis 使用 JDK 的动态代理，为需要拦截的接口生成代理对象以实现接口方法拦截功能，每当执行这 4 种接口对象的方法时，就会进入拦截方法，具体就是 "),a("code",[t._v("InvocationHandler")]),t._v(" 的 "),a("code",[t._v("invoke()")]),t._v("方法，当然，只会拦截那些你指定需要拦截的方法。")]),t._v(" "),a("p",[t._v("实现 MyBatis 的 Interceptor 接口并复写"),a("code",[t._v("intercept()")]),t._v("方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-执行批量插入-能返回数据库主键列表吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-执行批量插入-能返回数据库主键列表吗"}},[t._v("#")]),t._v(" MyBatis 执行批量插入，能返回数据库主键列表吗？")]),t._v(" "),a("p",[t._v("能，JDBC 都能，MyBatis 当然也能。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不"}},[t._v("#")]),t._v(" MyBatis 动态 sql 是做什么的？都有哪些动态 sql？能简述一下动态 sql 的执行原理不？")]),t._v(" "),a("p",[t._v("MyBatis 动态 sql 可以让我们在 Xml 映射文件内，以标签的形式编写动态 sql，完成逻辑判断和动态拼接 sql 的功能，MyBatis 提供了 9 种动态 sql 标签 "),a("code",[t._v("trim|where|set|foreach|if|choose|when|otherwise|bind")]),t._v("。")]),t._v(" "),a("p",[t._v("其执行原理为，使用 OGNL 从 sql 参数对象中计算表达式的值，根据表达式的值动态拼接 sql，以此来完成动态 sql 的功能。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式"}},[t._v("#")]),t._v(" MyBatis 是如何将 sql 执行结果封装为目标对象并返回的？都有哪些映射形式？")]),t._v(" "),a("p",[t._v("第一种是使用"),a("code",[t._v("<resultMap>")]),t._v("标签，逐一定义列名和对象属性名之间的映射关系。第二种是使用 sql 列的别名功能，将列别名书写为对象属性名，比如 T_NAME AS NAME，对象属性名一般是 name，小写，但是列名不区分大小写，MyBatis 会忽略列名大小写，智能找到与之对应对象属性名，你甚至可以写成 T_NAME AS NaMe，MyBatis 一样可以正常工作。")]),t._v(" "),a("p",[t._v("有了列名与属性名的映射关系后，MyBatis 通过反射创建对象，同时使用反射给对象的属性逐一赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-能执行一对一、一对多的关联查询吗-都有哪些实现方式-以及它们之间的区别。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-能执行一对一、一对多的关联查询吗-都有哪些实现方式-以及它们之间的区别。"}},[t._v("#")]),t._v(" MyBatis 能执行一对一、一对多的关联查询吗？都有哪些实现方式，以及它们之间的区别。")]),t._v(" "),a("p",[t._v("能，MyBatis 不仅可以执行一对一、一对多的关联查询，还可以执行多对一，多对多的关联查询，多对一查询，其实就是一对一查询，只需要把 "),a("code",[t._v("selectOne()")]),t._v("修改为 "),a("code",[t._v("selectList()")]),t._v("即可；多对多查询，其实就是一对多查询，只需要把 "),a("code",[t._v("selectOne()")]),t._v("修改为 "),a("code",[t._v("selectList()")]),t._v("即可。")]),t._v(" "),a("p",[t._v("关联对象查询，有两种实现方式，一种是单独发送一个 sql 去查询关联对象，赋给主对象，然后返回主对象。另一种是使用嵌套查询，嵌套查询的含义为使用 join 查询，一部分列是 A 对象的属性值，另外一部分列是关联对象 B 的属性值，好处是只发一个 sql 查询，就可以把主对象和其关联对象查出来。")]),t._v(" "),a("p",[t._v("那么问题来了，join 查询出来 100 条记录，如何确定主对象是 5 个，而不是 100 个？其去重复的原理是"),a("code",[t._v("<resultMap>")]),t._v("标签内的"),a("code",[t._v("<id>")]),t._v("子标签，指定了唯一确定一条记录的 id 列，MyBatis 根据列值来完成 100 条记录的去重复功能，"),a("code",[t._v("<id>")]),t._v("可以有多个，代表了联合主键的语意。")]),t._v(" "),a("p",[t._v("同样主对象的关联对象，也是根据这个原理去重复的，尽管一般情况下，只有主对象会有重复记录，关联对象一般不会重复。")]),t._v(" "),a("p",[t._v("举例：下面 join 查询出来 6 条记录，一、二列是 Teacher 对象列，第三列为 Student 对象列，MyBatis 去重复处理后，结果为 1 个老师 6 个学生，而不是 6 个老师 6 个学生。")]),t._v(" "),a("p",[t._v("t_id t_name s_id")]),t._v(" "),a("p",[t._v("| 1 | teacher | 38 | | 1 | teacher | 39 | | 1 | teacher | 40 | | 1 | teacher | 41 | | 1 | teacher | 42 | | 1 | teacher | 43 |")]),t._v(" "),a("h3",{attrs:{id:"mybatis-是否支持延迟加载-如果支持-它的实现原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是否支持延迟加载-如果支持-它的实现原理是什么"}},[t._v("#")]),t._v(" MyBatis 是否支持延迟加载？如果支持，它的实现原理是什么？")]),t._v(" "),a("p",[t._v("MyBatis 仅支持 association 关联对象和 collection 关联集合对象的延迟加载，association 指的就是一对一，collection 指的就是一对多查询。在 MyBatis 配置文件中，可以配置是否启用延迟加载 "),a("code",[t._v("lazyLoadingEnabled=true|false。")])]),t._v(" "),a("p",[t._v("它的原理是，使用"),a("code",[t._v("CGLIB")]),t._v(" 创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用 "),a("code",[t._v("a.getB().getName()")]),t._v("，拦截器 "),a("code",[t._v("invoke()")]),t._v("方法发现 "),a("code",[t._v("a.getB()")]),t._v("是 null 值，那么就会单独发送事先保存好的查询关联 B 对象的 sql，把 B 查询上来，然后调用 a.setB(b)，于是 a 的对象 b 属性就有值了，接着完成 "),a("code",[t._v("a.getB().getName()")]),t._v("方法的调用。这就是延迟加载的基本原理。")]),t._v(" "),a("p",[t._v("当然了，不光是 MyBatis，几乎所有的包括 Hibernate，支持延迟加载的原理都是一样的。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复"}},[t._v("#")]),t._v(" MyBatis 的 Xml 映射文件中，不同的 Xml 映射文件，id 是否可以重复？")]),t._v(" "),a("p",[t._v("不同的 Xml 映射文件，如果配置了 namespace，那么 id 可以重复；如果没有配置 namespace，那么 id 不能重复；毕竟 namespace 不是必须的，只是最佳实践而已。")]),t._v(" "),a("p",[t._v("原因就是 namespace+id 是作为 "),a("code",[t._v("Map<String, MappedStatement>")]),t._v("的 key 使用的，如果没有 namespace，就剩下 id，那么，id 重复会导致数据互相覆盖。有了 namespace，自然 id 就可以重复，namespace 不同，namespace+id 自然也就不同。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-中如何执行批处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-中如何执行批处理"}},[t._v("#")]),t._v(" MyBatis 中如何执行批处理？")]),t._v(" "),a("p",[t._v("使用 BatchExecutor 完成批处理。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-都有哪些-executor-执行器-它们之间的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-都有哪些-executor-执行器-它们之间的区别是什么"}},[t._v("#")]),t._v(" MyBatis 都有哪些 Executor 执行器？它们之间的区别是什么？")]),t._v(" "),a("p",[t._v("MyBatis 有三种基本的 Executor 执行器，"),a("strong",[a("code",[t._v("SimpleExecutor")]),t._v("、"),a("code",[t._v("ReuseExecutor")]),t._v("、"),a("code",[t._v("BatchExecutor")]),t._v("。")])]),t._v(" "),a("p",[t._v("**"),a("code",[t._v("SimpleExecutor")]),t._v("：**每执行一次 update 或 select，就开启一个 Statement 对象，用完立刻关闭 Statement 对象。")]),t._v(" "),a("p",[t._v("**``ReuseExecutor`：**执行 update 或 select，以 sql 作为 key 查找 Statement 对象，存在就使用，不存在就创建，用完后，不关闭 Statement 对象，而是放置于 Map<String, Statement>内，供下一次使用。简言之，就是重复使用 Statement 对象。")]),t._v(" "),a("p",[t._v("**"),a("code",[t._v("BatchExecutor")]),t._v("：**执行 update（没有 select，JDBC 批处理不支持 select），将所有 sql 都添加到批处理中（addBatch()），等待统一执行（executeBatch()），它缓存了多个 Statement 对象，每个 Statement 对象都是 addBatch()完毕后，等待逐一执行 executeBatch()批处理。与 JDBC 批处理相同。")]),t._v(" "),a("p",[t._v("作用范围：Executor 的这些特点，都严格限制在 SqlSession 生命周期范围内。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-中如何指定使用哪一种-executor-执行器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-中如何指定使用哪一种-executor-执行器"}},[t._v("#")]),t._v(" MyBatis 中如何指定使用哪一种 Executor 执行器？")]),t._v(" "),a("p",[t._v("在 MyBatis 配置文件中，可以指定默认的 ExecutorType 执行器类型，也可以手动给 "),a("code",[t._v("DefaultSqlSessionFactory")]),t._v(" 的创建 SqlSession 的方法传递 ExecutorType 类型参数。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-是否可以映射-enum-枚举类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是否可以映射-enum-枚举类"}},[t._v("#")]),t._v(" MyBatis 是否可以映射 Enum 枚举类？")]),t._v(" "),a("p",[t._v("MyBatis 可以映射枚举类，不单可以映射枚举类，MyBatis 可以映射任何对象到表的一列上。映射方式为自定义一个 "),a("code",[t._v("TypeHandler")]),t._v("，实现 "),a("code",[t._v("TypeHandler")]),t._v(" 的 "),a("code",[t._v("setParameter()")]),t._v("和 "),a("code",[t._v("getResult()")]),t._v("接口方法。"),a("code",[t._v("TypeHandler")]),t._v(" 有两个作用，一是完成从 javaType 至 jdbcType 的转换，二是完成 jdbcType 至 javaType 的转换，体现为 "),a("code",[t._v("setParameter()")]),t._v("和 "),a("code",[t._v("getResult()")]),t._v("两个方法，分别代表设置 sql 问号占位符参数和获取列查询结果。")]),t._v(" "),a("h3",{attrs:{id:"mybatis-映射文件中-如果-a-标签通过-include-引用了-b-标签的内容-请问-b-标签能否定义在-a-标签的后面-还是说必须定义在-a-标签的前面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-映射文件中-如果-a-标签通过-include-引用了-b-标签的内容-请问-b-标签能否定义在-a-标签的后面-还是说必须定义在-a-标签的前面"}},[t._v("#")]),t._v(" MyBatis 映射文件中，如果 A 标签通过 include 引用了 B 标签的内容，请问，B 标签能否定义在 A 标签的后面，还是说必须定义在 A 标签的前面？")]),t._v(" "),a("p",[t._v("虽然 MyBatis 解析 Xml 映射文件是按照顺序解析的，但是，被引用的 B 标签依然可以定义在任何地方，MyBatis 都可以正确识别。")]),t._v(" "),a("p",[t._v("原理是，MyBatis 解析 A 标签，发现 A 标签引用了 B 标签，但是 B 标签尚未解析到，尚不存在，此时，MyBatis 会将 A 标签标记为未解析状态，然后继续解析余下的标签，包含 B 标签，待所有标签解析完毕，MyBatis 会重新解析那些被标记为未解析的标签，此时再解析 A 标签时，B 标签已经存在，A 标签也就可以正常解析完成了。")]),t._v(" "),a("h3",{attrs:{id:"简述-mybatis-的-xml-映射文件和-mybatis-内部数据结构之间的映射关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-mybatis-的-xml-映射文件和-mybatis-内部数据结构之间的映射关系"}},[t._v("#")]),t._v(" 简述 MyBatis 的 Xml 映射文件和 MyBatis 内部数据结构之间的映射关系？")]),t._v(" "),a("p",[t._v("MyBatis 将所有 Xml 配置信息都封装到 All-In-One 重量级对象 Configuration 内部。在 Xml 映射文件中，"),a("code",[t._v("<parameterMap>")]),t._v("标签会被解析为 "),a("code",[t._v("ParameterMap")]),t._v(" 对象，其每个子元素会被解析为 ParameterMapping 对象。"),a("code",[t._v("<resultMap>")]),t._v("标签会被解析为 "),a("code",[t._v("ResultMap")]),t._v(" 对象，其每个子元素会被解析为 "),a("code",[t._v("ResultMapping")]),t._v(" 对象。每一个"),a("code",[t._v("<select>、<insert>、<update>、<delete>")]),t._v("标签均会被解析为 "),a("code",[t._v("MappedStatement")]),t._v(" 对象，标签内的 sql 会被解析为 BoundSql 对象。")]),t._v(" "),a("h3",{attrs:{id:"为什么说-mybatis-是半自动-orm-映射工具-它与全自动的区别在哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么说-mybatis-是半自动-orm-映射工具-它与全自动的区别在哪里"}},[t._v("#")]),t._v(" 为什么说 MyBatis 是半自动 ORM 映射工具？它与全自动的区别在哪里？")]),t._v(" "),a("p",[t._v("Hibernate 属于全自动 ORM 映射工具，使用 Hibernate 查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取，所以它是全自动的。而 MyBatis 在查询关联对象或关联集合对象时，需要手动编写 sql 来完成，所以，称之为半自动 ORM 映射工具。")]),t._v(" "),a("p",[t._v("面试题看似都很简单，但是想要能正确回答上来，必定是研究过源码且深入的人，而不是仅会使用的人或者用的很熟的人，以上所有面试题及其答案所涉及的内容，在我的 MyBatis 系列博客中都有详细讲解和原理分析。")])])}),[],!1,null,null,null);a.default=r.exports}}]);