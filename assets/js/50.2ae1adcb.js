(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{362:function(t,v,_){"use strict";_.r(v);var a=_(7),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"判断对象是否是垃圾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#判断对象是否是垃圾"}},[t._v("#")]),t._v(" 判断对象是否是垃圾")]),t._v(" "),v("h3",{attrs:{id:"引用计数算法-判断对象的引用数量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法-判断对象的引用数量"}},[t._v("#")]),t._v(" 引用计数算法：判断对象的引用数量")]),t._v(" "),v("p",[t._v("每引用一次就+1，当一个对象实例的某个引用超过了生命周期或者被设置为一个新值时，对象实例的引用计数减 1，当一个对象实例被垃圾收集时，它引用的任何对象实例的引用计数器均减 1，当引用次数为0时就会当成垃圾，")]),t._v(" "),v("p",[v("strong",[t._v("问题")]),t._v("  当两个对象循环引用时，这个垃圾就无法回收")]),t._v(" "),v("h3",{attrs:{id:"可达性分析算法-判断对象的引用链是否可达"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法-判断对象的引用链是否可达"}},[t._v("#")]),t._v(" 可达性分析算法：判断对象的引用链是否可达")]),t._v(" "),v("p",[t._v("通过一系列的名为 “GC Roots” 的对象作为起始点，从这些节点开始向下搜索，搜索所走过的路径称为引用链（Reference Chain）。当一个对象到 GC Roots 没有任何引用链相连（用图论的话来说就是从 GC Roots 到这个对象不可达）时，则证明此对象是不可用的")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/1979a28681ca1.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("有哪些是GC ROOT")]),t._v(" "),v("ol",[v("li",[t._v("栈中引用的对象")]),t._v(" "),v("li",[t._v("静态变量、常量引用的对象")]),t._v(" "),v("li",[t._v("本地方法栈native方法引用的对象")])]),t._v(" "),v("h2",{attrs:{id:"垃圾回收三种算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收三种算法"}},[t._v("#")]),t._v(" 垃圾回收三种算法")]),t._v(" "),v("p",[t._v("标记删除（mark-sweep）、拷贝（copying）、标记压缩（mark-compact）")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("标记删除")]),t._v("  就是把垃圾区域标记出来，然后清除出去（问题：碎片化）")]),t._v(" "),v("li",[v("strong",[t._v("拷贝")]),t._v(" 先将内存分成俩半，把要清除的一半有用的区域复制到另一半，然后清除这一半（浪费空间）")]),t._v(" "),v("li",[v("strong",[t._v("标记整理")]),t._v(" 对内存进行整理，有用的堆到前面，没用的堆到后面，一边标记一边整理（效率低）")]),t._v(" "),v("li",[v("strong",[t._v("分代收集")]),t._v(" 不同的对象生命周期不一样，我们可以通过分成不同的代，不同代使用不同的算法（新生代使用拷贝 老年代使用标记整理）")])]),t._v(" "),v("p",[t._v("JVM是拷贝和标记整理两个算法结合使用")]),t._v(" "),v("h2",{attrs:{id:"java堆内存逻辑分区-分代模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java堆内存逻辑分区-分代模型"}},[t._v("#")]),t._v(" Java堆内存逻辑分区（分代模型）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/f040c4f6128b4.png",alt:"image-20210323111431114"}})]),t._v(" "),v("ul",[v("li",[t._v("内存分为俩大块，一个是新生代区域，一个是老年代区域。")]),t._v(" "),v("li",[t._v("新生代包括伊甸区、survivor1和survivor2")]),t._v(" "),v("li",[t._v("老年代只有一块，但是占的空间更大")])]),t._v(" "),v("h3",{attrs:{id:"详细流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#详细流程"}},[t._v("#")]),t._v(" 详细流程")]),t._v(" "),v("ol",[v("li",[t._v("当我们初始化一个对象时，首先会判断是否可以分配到栈上，如果可以就直接分配到栈上，不行就下一步")]),t._v(" "),v("li",[t._v("然后判断是不是大对象，大对象可以直接分配到老年代，小对象需要判断是否启动了本地线程分配缓存(TLAB)，如果有则将按线程优先在TLAB上分配。")]),t._v(" "),v("li",[t._v("然后就是回收了，一开始垃圾回收器会把S2和伊甸区有用的数据都复制S1中（这里用到了垃圾回收的拷贝），然后清空伊甸区和S2，第二次GC时会把S1和伊甸区的有用的对象都放入S2中，然后清空S1和伊甸区，如此循环往复。")]),t._v(" "),v("li",[t._v("新生代每次GC年龄都会增长1，当年龄到达15时会进入老年代（老年代采用的是标记整理算法）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/f47791111b4b1.png",alt:"image-20210311100052826"}})]),t._v(" "),v("p",[t._v("TLAB：Thread Local Allocation Buffer（线程本地分配缓冲区）eden区有一个线程本地缓冲空间，避免争抢，如果线程需要，就new到线程自己身上去")]),t._v(" "),v("h2",{attrs:{id:"垃圾回收器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器"}},[t._v("#")]),t._v(" 垃圾回收器")]),t._v(" "),v("p",[t._v("垃圾回收器其实就是"),v("strong",[t._v("进行垃圾回收算法时")]),t._v("  用于垃圾标记的算法")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/00ec8ab4bb92a.png",alt:"image-20210310222838854"}})]),t._v(" "),v("ol",[v("li",[t._v("Epslion：最没用的，就是个摆设，就调试用的到（Debug）")]),t._v(" "),v("li",[t._v("Parallel Scavenge：采用多线程切GC")]),t._v(" "),v("li",[t._v("Parallel Old：采用多线程切GC")]),t._v(" "),v("li",[t._v("Serial：stw（stop the world）单线程，停止工作线程，进行GC（很少用了）")]),t._v(" "),v("li",[t._v("Serial Old：单线程，停止工作线程，进行GC（很少用了）")]),t._v(" "),v("li",[t._v("CMS(重点！！！！)：工作在老年代")]),t._v(" "),v("li",[t._v("ParNew：和Parallel Scavenge一样，只不过是用来配合CMS")]),t._v(" "),v("li",[t._v("G1：针对分区模型的回收器")]),t._v(" "),v("li",[t._v("ZGC：针对分区模型的回收器")]),t._v(" "),v("li",[t._v("Shenandosh：针对分区模型的回收器")])]),t._v(" "),v("h2",{attrs:{id:"cms垃圾回收器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cms垃圾回收器"}},[t._v("#")]),t._v(" CMS垃圾回收器")]),t._v(" "),v("p",[t._v("用于回收老年代的垃圾")]),t._v(" "),v("ul",[v("li",[t._v("初始标记：标记老年代root对象")]),t._v(" "),v("li",[t._v("并发标记：对root对象往下进行标记")]),t._v(" "),v("li",[t._v("重新标记：修正错标的内容（三色标记算法）")]),t._v(" "),v("li",[t._v("并发清理：清理垃圾，也会产生浮动垃圾，下次处理")])]),t._v(" "),v("p",[t._v("注意：这里标记的时候会STW，把当前的进程停止，然后进行标记，然后在恢复线程（蓝色的就是我们的实际线程了，黄色的是标记和垃圾回收线程）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/5dab2b981f8b8.png",alt:"image-20210312214042432"}})]),t._v(" "),v("p",[t._v("参考")]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/weixin_44777669/article/details/114745089",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM基础知识和调优_冷雨清的博客-CSDN博客_jvm调优"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://blog.csdn.net/justloveyou_/article/details/71216049",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解Java 垃圾回收机制_Rico's Blogs-CSDN博客_java垃圾回收机制"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"g1垃圾回收器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#g1垃圾回收器"}},[t._v("#")]),t._v(" G1垃圾回收器")]),t._v(" "),v("p",[t._v("这个是jdk9中默认采用的垃圾回收器。")]),t._v(" "),v("p",[t._v("jdk1.8之前，我们的内存空间划分是连续的（注意：jdk8去除了永久代，引入了元空间的概念）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/31/c548b89bcebdc.png",alt:"传统GC内存布局"}})]),t._v(" "),v("p",[t._v("而G1的各代存储地址是不连续的，每一代都使用了n个不连续的大小相同的Region，每个Region占有一块连续的虚拟内存地址。如下图所示：（H存储的是一些巨大的对象，即大小大于等于region一半的对象）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/31/a61074ab59254.png",alt:"g1 GC内存布局"}})]),t._v(" "),v("p",[t._v("G1垃圾回收的流程")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("G1执行的第一阶段：初始标记(Initial Marking )")])]),t._v(" "),v("p",[t._v("这个阶段是STW(Stop the World )的，所有应用线程会被暂停，标记出从GC Root开始直接可达的对象。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("G1执行的第二阶段：并发标记")])]),t._v(" "),v("p",[t._v("从GC Roots开始对堆中对象进行可达性分析，找出存活对象，耗时较长。当并发标记完成后，开始最终标记(Final Marking )阶段")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("最终标记")])]),t._v(" "),v("p",[t._v("标记那些在并发标记阶段发生变化的对象，将被回收。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("筛选回收")])]),t._v(" "),v("p",[t._v("首先对各个Regin的回收价值和成本进行排序，根据用户所期待的GC停顿时间指定回收计划，回收一部分Region。")])])]),t._v(" "),v("p",[t._v("最后，G1中提供了两种模式垃圾回收模式，Young GC和Mixed GC，两种都是Stop The World(STW)的。")]),t._v(" "),v("p",[t._v("参考；")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://tech.meituan.com/2016/09/23/g1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Hotspot G1 GC的一些关键技术 - 美团技术团队 (meituan.com)"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/59861022",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析JVM：G1收集器+回收流程+推荐用例 - 知乎 (zhihu.com)"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/59861022",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析JVM：G1收集器+回收流程+推荐用例 - 知乎 (zhihu.com)"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"ygc和fgc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ygc和fgc"}},[t._v("#")]),t._v(" YGC和FGC")]),t._v(" "),v("p",[t._v("YGC ：对新生代堆进行gc。 频率比较高，因为大部分对象的存活寿命较短，在新生代里被回收。 FGC ：全堆范围的gc。")]),t._v(" "),v("p",[t._v("当一个新的对象来申请内存空间的时候，如果Eden区无法满足内存分配需求，则触发YGC，使用中的Survivor区和Eden区存活对象送到未使用的Survivor区，如果YGC之后还是没有足够空间，则直接进入老年代分配，如果老年代也无法分配空间，触发FGC，FGC之后还是放不下则报出OOM异常。")]),t._v(" "),v("p",[t._v("最复杂的是所谓的悲观策略，它触发的机制是在首先会计算之前晋升的平均大小，也就是从新生代，通过ygc变成新生代的平均大小，然后如果旧生代剩余的空间小于晋升大小，那么就会触发一次FullGC。sdk考虑的策略是， 从平均和长远的情况来看，下次晋升空间不够的可能性非常大， 与其等到那时候在fullGC 不如悲观的认为下次肯定会触发FullGC， 直接先执行一次FullGC。而且从实际使用过程中来看， 也达到了比较稳定的效果。")])])}),[],!1,null,null,null);v.default=r.exports}}]);