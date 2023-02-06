(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{383:function(_,v,t){"use strict";t.r(v);var r=t(7),s=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"什么是视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是视图"}},[_._v("#")]),_._v(" 什么是视图")]),_._v(" "),v("p",[_._v("所谓视图，本质上是一种虚拟表，在物理上是不存在的，其内容与真实的表相似，包含一系列带有名称的列和行数据。但是，视图并不在数据库中以储存的数据值形式存在。行和列数据来自定义视图的查询所引用基本表，并且在具体引用视图时"),v("strong",[_._v("动态生成")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("优点")])]),_._v(" "),v("ol",[v("li",[_._v("通过只给用户访问视图的权限，保证数据的"),v("strong",[_._v("安全性")])]),_._v(" "),v("li",[v("strong",[_._v("简化")]),_._v("复杂的SQL操作，隐藏数据的复杂性（比如复杂的连接）")]),_._v(" "),v("li",[_._v("逻辑数据独立性。视图对重构数据库提供了一定程度的逻辑独立性")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")])]),_._v(" "),v("ol",[v("li",[_._v("数据库必须把视图的查询转化成对基本表的查询，如果这个视图是由一个复杂的多表查询所定义，数据库会把它变成一个复杂的结合体，需要花费一定的时间。")]),_._v(" "),v("li",[_._v("修改限制。当用户试图修改、插入或者删除视图的某些行时，数据库必须把它转化为对基本表的某些行的修改。对于简单视图来说，这是很方便的，但是，对于比较复杂的视图，可能是不可修改的")])]),_._v(" "),v("p",[v("strong",[_._v("特点")])]),_._v(" "),v("ol",[v("li",[_._v("视图的列可以来自不同的表，是表的抽象和在逻辑意义上建立的新关系。")]),_._v(" "),v("li",[_._v("视图是由基本表(实表)产生的表(虚表)。")]),_._v(" "),v("li",[_._v("视图的建立和删除不影响基本表。")]),_._v(" "),v("li",[_._v("对视图内容的更新(添加，删除和修改)直接影响基本表。")]),_._v(" "),v("li",[_._v("当视图来自多个基本表时，不允许添加和删除数据。")]),_._v(" "),v("li",[_._v("可以创建视图，查看视图，删除视图和修改视图。")])]),_._v(" "),v("h2",{attrs:{id:"游标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#游标"}},[_._v("#")]),_._v(" 游标")]),_._v(" "),v("p",[_._v("游标(cursor)，是一个存储在MySQL服务器上的数据库查询，游标不是一条 SELECT语句，而是被该语句检索出来的结果集；可以看做是指向查询结果集的指针；通过cursor，就可以一次一行的从结果集中把行拿出来处理。")]),_._v(" "),v("p",[_._v("详细参考："),v("a",{attrs:{href:"https://www.cnblogs.com/geaozhang/p/6817637.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("MySQL游标的简单实践 - GeaoZhang - 博客园 (cnblogs.com)"),v("OutboundLink")],1)]),_._v(" "),v("h2",{attrs:{id:"存储过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储过程"}},[_._v("#")]),_._v(" 存储过程")]),_._v(" "),v("p",[_._v("存储过程是用户定义的一系列sql语句的集合，涉及特定表或其它对象的任务，用户可以调用存储过程，而函数通常是数据库已定义的方法，它接收参数并返回某种类型的值并且不涉及特定用户表。")]),_._v(" "),v("p",[v("strong",[_._v("优点")])]),_._v(" "),v("ul",[v("li",[_._v("预先编译，而不需要每次运行时编译，提高了数据库执行"),v("strong",[_._v("效率")]),_._v("；")]),_._v(" "),v("li",[_._v("封装了一系列操作，对于一些数据交互比较多的操作，相比于单独执行SQL语句，可以"),v("strong",[_._v("减少网络通信量")]),_._v("；")]),_._v(" "),v("li",[_._v("具有"),v("strong",[_._v("可复用性")]),_._v("，减少了数据库开发的工作量；")]),_._v(" "),v("li",[v("strong",[_._v("安全性高")]),_._v("，可以让没有权限的用户通过存储过程间接操作数据库；")]),_._v(" "),v("li",[_._v("更"),v("strong",[_._v("易于维护")])])]),_._v(" "),v("p",[v("strong",[_._v("缺点")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("可移植性差")]),_._v("，存储过程将应用程序绑定到了数据库上；")]),_._v(" "),v("li",[v("strong",[_._v("开发调试复杂")]),_._v("：没有好的IDE；")]),_._v(" "),v("li",[v("strong",[_._v("修改复杂")]),_._v("，需要重新编译，有时还需要更新程序中的代码以更新调用")])]),_._v(" "),v("h2",{attrs:{id:"触发器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#触发器"}},[_._v("#")]),_._v(" 触发器")]),_._v(" "),v("p",[_._v("触发器是用户定义在关系表上的一类由事件驱动的特殊的存储过程。触发器是指一段代码，当触发某个事件时，自动执行这些代码。")]),_._v(" "),v("p",[_._v("触发器（TRIGGER）是由事件（比如INSERT/UPDATE/DELETE）来触发运行的操作（不能被直接调用，不能接收参数）。在数据库里以独立的对象存储，用于"),v("strong",[_._v("保证数据完整性")]),_._v("（比如可以检验或转换数据）。")]),_._v(" "),v("h3",{attrs:{id:"使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[_._v("#")]),_._v(" 使用场景")]),_._v(" "),v("ul",[v("li",[_._v("可以通过数据库中的相关表实现级联更改。")]),_._v(" "),v("li",[_._v("实时监控某张表中的某个字段的更改而需要做出相应的处理。")]),_._v(" "),v("li",[_._v("例如可以生成某些业务的编号。")]),_._v(" "),v("li",[_._v("注意不要滥用，否则会造成数据库及应用程序的维护困难。")])]),_._v(" "),v("h2",{attrs:{id:"mysql触发器种类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql触发器种类"}},[_._v("#")]),_._v(" MySQL触发器种类")]),_._v(" "),v("ul",[v("li",[_._v("Before Insert")]),_._v(" "),v("li",[_._v("After Insert")]),_._v(" "),v("li",[_._v("Before Update")]),_._v(" "),v("li",[_._v("After Update")]),_._v(" "),v("li",[_._v("Before Delete")]),_._v(" "),v("li",[_._v("After Delete")])])])}),[],!1,null,null,null);v.default=s.exports}}]);