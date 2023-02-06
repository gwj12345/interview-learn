(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{336:function(t,v,_){"use strict";_.r(v);var a=_(7),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"tls是啥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tls是啥"}},[t._v("#")]),t._v(" TLS是啥")]),t._v(" "),v("p",[t._v("SSL/TLS协议其实就是一个安全通信的协议，https采用的就是这个协议来实现安全传输，这个地方主要会问你https的工作原理")]),t._v(" "),v("h3",{attrs:{id:"tls-1-3的特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tls-1-3的特性"}},[t._v("#")]),t._v(" TLS 1.3的特性")]),t._v(" "),v("h4",{attrs:{id:"最大化兼容性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最大化兼容性"}},[t._v("#")]),t._v(" 最大化兼容性")]),t._v(" "),v("p",[t._v("由于 1.1、1.2 等协议已经出现了很多年，很多应用软件、中间代理（官方称为“MiddleBox”）只认老的记录协议格式，更新改造很困难，甚至是不可行（设备僵化）。一旦变更了记录头字段里的版本号，也就是由 0x303（TLS1.2）改为 0x304（TLS1.3）的话，大量的代理服务器、网关都无法正确处理，最终导致 TLS 握手失败")]),t._v(" "),v("p",[t._v("为了保证这些被广泛部署的“老设备”能够继续使用，避免新协议带来的“冲击”，TLS1.3 不得不做出妥协，保持现有的记录格式不变，通过“伪装”来实现兼容，使得 TLS1.3 看上去“像是”TLS1.2。")]),t._v(" "),v("p",[t._v("那么，该怎么区分 1.2 和 1.3 呢？")]),t._v(" "),v("p",[t._v("这要用到一个新的"),v("strong",[t._v("扩展协议")]),t._v("（Extension Protocol），它有点“补充条款”的意思，通过在记录末尾添加一系列的“扩展字段”来增加新的功能，老版本的 TLS 不认识它可以直接忽略，这就实现了“后向兼容”。")]),t._v(" "),v("p",[t._v("在记录头的 Version 字段被兼容性“固定”的情况下，只要是 TLS1.3 协议，握手的“Hello”消息后面就必须有“"),v("strong",[t._v("supported_versions")]),t._v("”扩展，它标记了 TLS 的版本号，使用它就能区分新旧协议。")]),t._v(" "),v("h4",{attrs:{id:"强化安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强化安全"}},[t._v("#")]),t._v(" 强化安全")]),t._v(" "),v("p",[t._v("TLS1.2 在十来年的应用中获得了许多宝贵的经验，陆续发现了很多的漏洞和加密算法的弱点，所以 TLS1.3 就在协议里修补了这些不安全因素。")]),t._v(" "),v("p",[t._v("比如：")]),t._v(" "),v("ul",[v("li",[t._v("伪随机数函数由 PRF 升级为 HKDF（HMAC-based Extract-and-Expand Key Derivation Function）；")]),t._v(" "),v("li",[t._v("明确禁止在记录协议里使用压缩；")]),t._v(" "),v("li",[t._v("废除了 RC4、DES 对称加密算法；")]),t._v(" "),v("li",[t._v("废除了 ECB、CBC 等传统分组模式；")]),t._v(" "),v("li",[t._v("废除了 MD5、SHA1、SHA-224 摘要算法；")]),t._v(" "),v("li",[t._v("废除了 RSA、DH 密钥交换算法和许多命名曲线。")])]),t._v(" "),v("p",[t._v("经过这一番“减肥瘦身”之后，TLS1.3 里只保留了 AES、ChaCha20 对称加密算法，分组模式只能用 AEAD 的 GCM、CCM 和 Poly1305，摘要算法只能用 SHA256、SHA384，密钥交换算法只有 ECDHE 和 DHE，椭圆曲线也被“砍”到只剩 P-256 和 x25519 等 5 种。")]),t._v(" "),v("p",[t._v("减肥可以让人变得更轻巧灵活，TLS 也是这样。")]),t._v(" "),v("p",[t._v("算法精简后带来了一个意料之中的好处：原来众多的算法、参数组合导致密码套件非常复杂，难以选择，而现在的 TLS1.3 里只有 5 个套件，无论是客户端还是服务器都不会再犯“选择困难症”了。")]),t._v(" "),v("h4",{attrs:{id:"性能提升"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能提升"}},[t._v("#")]),t._v(" 性能提升")]),t._v(" "),v("p",[t._v("HTTPS 建立连接时除了要做 TCP 握手，还要做 TLS 握手，可能导致几十毫秒甚至上百毫秒的延迟，在移动网络中延迟还会更严重。")]),t._v(" "),v("p",[t._v("现在因为密码套件大幅度简化，也就没有必要再像以前那样走复杂的协商流程了。TLS1.3 压缩了以前的“Hello”协商过程，删除了“Key Exchange”消息，效率提高了一倍。")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6844904064766083079",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS之TLS1.3特性解析（四） (juejin.cn)"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"常见的加密算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的加密算法"}},[t._v("#")]),t._v(" 常见的加密算法")]),t._v(" "),v("h3",{attrs:{id:"对称加密算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密算法"}},[t._v("#")]),t._v(" 对称加密算法")]),t._v(" "),v("p",[t._v("DES、3DES、DESX、Blowfish、IDEA、RC4、RC5、RC6和AES")]),t._v(" "),v("h3",{attrs:{id:"非对称加密算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密算法"}},[t._v("#")]),t._v(" 非对称加密算法")]),t._v(" "),v("p",[t._v("RSA、ECC（移动设备用）、Diffie-Hellman、El Gamal、DSA（数字签名用）")]),t._v(" "),v("h3",{attrs:{id:"摘要、hash算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#摘要、hash算法"}},[t._v("#")]),t._v(" 摘要、hash算法")]),t._v(" "),v("p",[t._v("MD2、MD4、MD5、HAVAL、SHA、SHA-1、HMAC、HMAC-MD5、HMAC-SHA1")]),t._v(" "),v("h3",{attrs:{id:"混合加密是啥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#混合加密是啥"}},[t._v("#")]),t._v(" 混合加密是啥")]),t._v(" "),v("p",[t._v("常见的混合加密算法主要是指RSA加解密算法和DES加解密算法这两种加解密算法。随着计算机系统能力的不断发展，因为两种算法各有各优点以及缺点，单独的使用DES或RSA加密可能没有办法满足实际需求，所以就采用了RSA和DES加密方法相结合的方式来实现数据的加密。")]),t._v(" "),v("p",[t._v("比如我们常见的https就采用了混合加密的方式")]),t._v(" "),v("p",[v("strong",[t._v("混合加密实现方式")])]),t._v(" "),v("p",[t._v("1、信息(明文)采用DES密钥加密。")]),t._v(" "),v("p",[t._v("2、使用RSA加密前面的DES密钥信息。")]),t._v(" "),v("p",[t._v("最终将混合信息进行传递。")]),t._v(" "),v("p",[t._v("而接收方接收到信息后：")]),t._v(" "),v("p",[t._v("1、用RSA解密DES密钥信息。")]),t._v(" "),v("p",[t._v("2、再用RSA解密获取到的密钥信息解密密文信息。")])])}),[],!1,null,null,null);v.default=s.exports}}]);