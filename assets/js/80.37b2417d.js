(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{392:function(e,v,_){"use strict";_.r(v);var t=_(7),s=Object(t.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),v("p",[e._v("在日常情况下在进程或线程中我们可以使用 "),v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI4NjI1OTI4Nw==&mid=2247488320&idx=1&sn=6fd5cddf2a0ff68fe00ccc834e90521b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("synchronized"),v("OutboundLink")],1),e._v(" 、"),v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI4NjI1OTI4Nw==&mid=2247488426&idx=1&sn=705cace6ce7fbc2d6f141e8b03623fff&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lock"),v("OutboundLink")],1),e._v(" 实现并发编程，但是我， 如何在分布式集群下使用呢？可以使用 "),v("strong",[e._v("Redisson")]),e._v(" ， "),v("strong",[e._v("Zookeeper")]),e._v(" ，"),v("strong",[e._v("Redis本身")])]),e._v(" "),v("p",[e._v("分布式锁的整个流程如下图所示")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/25/6aeb02601be40.png",alt:"1619315920885.png"}})]),e._v(" "),v("p",[v("strong",[e._v("分布式锁一般有下面几个特点")])]),e._v(" "),v("ul",[v("li",[e._v("互斥性： 同一时刻只能有一个线程持有锁")]),e._v(" "),v("li",[e._v("可重入性： 同一节点上的同一个线程如果获取了锁之后能够再次获取锁")]),e._v(" "),v("li",[e._v("锁超时：和J.U.C中的锁一样支持锁超时，防止死锁")]),e._v(" "),v("li",[e._v("高性能和高可用： 加锁和解锁需要高效，同时也需要保证高可用，防止分布式锁失效")]),e._v(" "),v("li",[e._v("具备阻塞和非阻塞性：能够及时从阻塞状态中被唤醒")])]),e._v(" "),v("h3",{attrs:{id:"zookeeper实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper实现分布式锁"}},[e._v("#")]),e._v(" Zookeeper实现分布式锁")]),e._v(" "),v("p",[v("strong",[e._v("实现方式")])]),e._v(" "),v("p",[e._v("利用 zookeeper 的同级节点的唯一性特性，在需要获取排他锁时，所有的客户端试图通过调用 create() 接口，在 "),v("strong",[e._v("/exclusive_lock")]),e._v(" 节点下创建临时子节点 "),v("strong",[e._v("/exclusive_lock/lock")]),e._v("，最终只有一个客户端能创建成功，那么此客户端就获得了分布式锁。同时，所有没有获取到锁的客户端可以在 "),v("strong",[e._v("/exclusive_lock")]),e._v(" 节点上注册一个子节点变更的 watcher 监听事件，以便重新争取获得锁。")]),e._v(" "),v("blockquote",[v("p",[e._v("1、持久节点：客户端断开连接zk不删除persistent类型节点")]),e._v(" "),v("p",[e._v("2、临时节点：客户端断开连接zk删除ephemeral类型节点")]),e._v(" "),v("p",[e._v("3、顺序节点：节点后面会自动生成类似0000001的数字表示顺序")]),e._v(" "),v("p",[e._v("4、节点变化的通知：客户端注册了监听节点变化的时候，会"),v("strong",[e._v("调用回调方法")])])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/27/d85322d697d6d.png",alt:"image.png"}})]),e._v(" "),v("p",[v("strong",[e._v("缺点")])]),e._v(" "),v("p",[e._v("频繁的创建删除节点，加上注册watch事件，对于zookeeper集群的压力比较大，性能也比不上Redis实现的分布式锁。")]),e._v(" "),v("p",[e._v("可以参考这篇：")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/zyhlwzy/article/details/102366486",target:"_blank",rel:"noopener noreferrer"}},[e._v("9、Zookeeper分布式锁原理浅析_Ron.Zheng-CSDN博客"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"redis实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis实现分布式锁"}},[e._v("#")]),e._v(" Redis实现分布式锁")]),e._v(" "),v("p",[e._v("本身原理也比较简单，Redis 自身就是一个单线程处理器，具备互斥的特性，通过setNX，exist等命令就可以完成简单的分布式锁，处理好超时释放锁的逻辑即可。")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("SETNX")])]),e._v(" "),v("p",[e._v("SETNX 是SET if Not eXists的简写，日常指令是"),v("code",[e._v("SETNX key value")]),e._v("，如果 key 不存在则set成功返回 1，如果这个key已经存在了返回0。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("SETEX")])]),e._v(" "),v("p",[e._v("SETEX key seconds value 表达的意思是 将值 value 关联到 key ，并将 key 的生存时间设为多少秒。如果 key 已经存在，setex命令将覆写旧值。并且 setex是一个"),v("code",[e._v("原子性")]),e._v("(atomic)操作。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("加锁")])]),e._v(" "),v("p",[e._v("一般就是用一个标识唯一性的字符串比如UUID 配合 SETNX 实现加锁。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("解锁")])]),e._v(" "),v("p",[e._v("这里用到了LUA脚本，LUA可以保证是"),v("strong",[e._v("原子性")]),e._v("的，思路就是判断一下Key和入参是否相等，是的话就删除，返回成功1，0就是失败。")])])]),e._v(" "),v("p",[v("strong",[e._v("缺点")])]),e._v(" "),v("p",[e._v("这个锁是"),v("strong",[e._v("无法重入的")]),e._v("，且自己实心的话各种边边角角都要考虑到，所以了解个大致思路流程即可，"),v("strong",[e._v("工程化还是用开源工具包就行")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("存在的问题")])]),e._v(" "),v("p",[e._v("普通利用Redis实现分布式锁的时候，我们可能会为某个锁指定某个key，当线程获取锁并执行完业务逻辑代码的时候，将该锁对应的key删除掉来释放锁。lock->set(key)，成功->执行业务，业务执行完毕->unlock->del(key)。")]),e._v(" "),v("p",[e._v("第一个问题，因为我们的业务不知道要执行多久才能结束，所以这个key我们一般不会设置过期时间。这样如果在执行业务的过程中，业务机器宕机，unlock操作不会执行，所以这个锁不会被释放，其他机器拿不到锁，从而形成了死锁。")]),e._v(" "),v("p",[e._v("第二个问题，如果Redis宕机，三种情况：")]),e._v(" "),v("p",[e._v("①Redis是单点模式")]),e._v(" "),v("p",[e._v("②Redis是集群模式，master在获取到一把锁之后（写操作成功后），在没来得及把该锁同步到slave之前就宕掉，这个时候slave没有锁，这把锁失效了……")]),e._v(" "),v("p",[e._v("③Redis是集群模式，而整个集群都宕机，那么就没救了……")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/xxcupid/article/details/88120581",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redisson（1）分布式锁——如何解决死锁问题_xxcupid的博客-CSDN博客_redisson分布式锁缺陷解决"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"redisson实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redisson实现分布式锁"}},[e._v("#")]),e._v(" Redisson实现分布式锁")]),e._v(" "),v("p",[v("strong",[e._v("Redisson")]),e._v(" 是在Redis基础上的一个服务，采用了基于NIO的Netty框架，不仅能作为Redis底层驱动"),v("strong",[e._v("客户端")]),e._v("，还能将原生的RedisHash，List，Set，String，Geo，HyperLogLog等数据结构封装为Java里大家最熟悉的映射（Map），列表（List），集（Set），通用对象桶（Object Bucket），地理空间对象桶（Geospatial Bucket），基数估计算法（HyperLogLog）等结构。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/27/58a24fd86143a.png",alt:"image.png"}})]),e._v(" "),v("p",[e._v("加锁解锁的流程如下")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/27/824f29530bd2b.png",alt:"image.png"}})]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/chengxy-nds/p/12750502.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis 分布式锁的 5个坑，真是又大又深 - 程序员内点事 - 博客园 (cnblogs.com)"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("这里应该会问你Redisson解决了啥问题")]),e._v(" "),v("ol",[v("li",[e._v("可以实现可重入加锁机制")]),e._v(" "),v("li",[e._v("在一个分布式环境下，假如一个线程获得锁后，突然服务器宕机了，那么这个时候在一定时间后这个锁会自动释放，你也可以设置锁的有效时间(不设置默认30秒），这样的目的主要是防止死锁的发生。")])]),e._v(" "),v("h2",{attrs:{id:"redis三种过期策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis三种过期策略"}},[e._v("#")]),e._v(" Redis三种过期策略")]),e._v(" "),v("h3",{attrs:{id:"定时过期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定时过期"}},[e._v("#")]),e._v(" 定时过期")]),e._v(" "),v("p",[e._v("每个设置过期时间的key都需要创建一个定时器，到过期时间就会立即对key进行清除。该策略可以立即清除过期的数据，对内存很友好；但是"),v("strong",[e._v("会占用大量的CPU资源去处理过期的数据")]),e._v("，从而影响缓存的响应时间和吞吐量。")]),e._v(" "),v("h3",{attrs:{id:"惰性过期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#惰性过期"}},[e._v("#")]),e._v(" 惰性过期")]),e._v(" "),v("p",[e._v("只有当访问一个key时，才会判断该key是否已过期，过期则清除。该策略可以最大化地节省CPU资源，却"),v("strong",[e._v("对内存非常不友好")]),e._v("。极端情况可能出现大量的过期key没有再次被访问，从而不会被清除，占用大量内存。")]),e._v(" "),v("h3",{attrs:{id:"定期过期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定期过期"}},[e._v("#")]),e._v(" 定期过期")]),e._v(" "),v("p",[e._v("每隔一定的时间，会扫描一定数量的数据库的expires字典中一定数量的key，并清除其中已过期的key。该策略是前两者的一个折中方案。通过调整定时扫描的时间间隔和每次扫描的限定耗时，可以在不同情况下使得CPU和内存资源"),v("strong",[e._v("达到最优")]),e._v("的平衡效果。")]),e._v(" "),v("p",[e._v("expires字典会保存所有设置了过期时间的key的过期时间数据，其中 key 是指向键空间中的某个键的指针，value是该键的毫秒精度的UNIX时间戳表示的过期时间。键空间是指该Redis集群中保存的所有键。")]),e._v(" "),v("h3",{attrs:{id:"默认策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#默认策略"}},[e._v("#")]),e._v(" 默认策略")]),e._v(" "),v("p",[e._v("Redis采用的过期策略："),v("code",[e._v("惰性删除")]),e._v(" + "),v("code",[e._v("定期删除")]),e._v("。memcached采用的过期策略："),v("code",[e._v("惰性删除")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"redis-6种内存淘汰策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-6种内存淘汰策略"}},[e._v("#")]),e._v(" Redis 6种内存淘汰策略")]),e._v(" "),v("p",[e._v("内存淘汰策略是指在Redis的用于缓存的"),v("strong",[e._v("内存不足时，怎么处理需要新写入且需要申请额外空间的数据")])]),e._v(" "),v("blockquote",[v("p",[e._v("过期策略指的是如何让key过期（此时内存可能有很多），而淘汰就是当我们内存不够时淘汰哪些数据（此时key可能并没有过期）")])]),e._v(" "),v("ol",[v("li",[e._v("volatile-lru（"),v("strong",[e._v("常考")]),e._v("）：从已设置过期时间的数据集（server.db[i].expires）中挑选"),v("strong",[e._v("最近最少使用")]),e._v("的数据淘汰")]),e._v(" "),v("li",[e._v("volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选"),v("strong",[e._v("将要过期")]),e._v("的数据淘汰")]),e._v(" "),v("li",[e._v("volatile-random：从已设置过期时间的数据集（server.db[i].expires）中"),v("strong",[e._v("任意选择")]),e._v("数据淘汰")]),e._v(" "),v("li",[e._v("allkeys-lru：从数据集（server.db[i].dict）中挑选"),v("strong",[e._v("最近最少使用")]),e._v("的数据淘汰")]),e._v(" "),v("li",[e._v("allkeys-random：从数据集（server.db[i].dict）中"),v("strong",[e._v("任意选择数")]),e._v("据淘汰 6、no-enviction（驱逐）：禁止驱逐数据，"),v("strong",[e._v("不删除")]),e._v("的意思。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);