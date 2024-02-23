(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{496:function(v,_,t){"use strict";t.r(_);var r=t(28),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"关于跨域的几个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于跨域的几个问题"}},[v._v("#")]),v._v(" 关于跨域的几个问题")]),v._v(" "),t("ul",[t("li",[v._v("跨域请求是谁拦截的，跨域究竟是谁的策略？")]),v._v(" "),t("li",[v._v("在什么时机会拦截请求？")]),v._v(" "),t("li",[v._v("究竟什么时候会发预检请求？")]),v._v(" "),t("li",[v._v("如果有预检，请求什么时候会真正被执行？")])]),v._v(" "),t("h3",{attrs:{id:"跨域请求的拦截"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求的拦截"}},[v._v("#")]),v._v(" 跨域请求的拦截")]),v._v(" "),t("p",[v._v("有同学觉得跨域请求时服务端进行拦截的，我们想一想，服务端有什么责任和义务对跨域的请求做拦截呢？首先我们俗称的跨域，也就是浏览器的 "),t("strong",[v._v("同源策略")]),v._v("，直接看MDN的解释吧。")]),v._v(" "),t("img",{attrs:{src:"/blog/imgs/03技术/crossOrigin1.png",alt:"跨域介绍",width:"400"}}),v._v(" "),t("p",[v._v("这很明显是浏览器的策略，如果是服务端拦截跨域请求，那每个server都要专门为浏览器实现一个拦截策略，这根本不现实。")]),v._v(" "),t("p",[v._v("另外， 服务端就算想拦截， 也没法判断请求是否跨域， "),t("strong",[v._v("HTTP Request")]),v._v(" 的所有 "),t("strong",[v._v("Header")]),v._v(" 都是可以被篡改的，它用什么去判断请求是否跨域呢？ 很明显服务端心有余而力不足啊。")]),v._v(" "),t("h3",{attrs:{id:"在什么时候拦截"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在什么时候拦截"}},[v._v("#")]),v._v(" 在什么时候拦截")]),v._v(" "),t("p",[v._v("好了，知道服务端不会拦截了，接下来了解一下客户端（浏览器）实在什么时候进行拦截的，大家可能都看过《解决跨域问题的XXX种方式》这样的文章，一般文章里都会告诉你用 "),t("strong",[v._v("CORS")]),v._v(" 去解决跨域。 大概的原理就是客户端会通过服务端返回的一些 "),t("strong",[v._v("Header")]),v._v(" 去判断该请求是否允许跨域：")]),v._v(" "),t("img",{attrs:{src:"/blog/imgs/03技术/crossOrigin2.png",alt:"跨域介绍",width:"400"}}),v._v(" "),t("p",[v._v("比如， "),t("strong",[v._v("Access-Control-Allow-Origin")]),v._v(" 告诉客户端允许请求在哪些 "),t("strong",[v._v("Origin")]),v._v(" 下被发送， 这些 "),t("strong",[v._v("Header")]),v._v("  一般我们配在 "),t("strong",[v._v("Server")]),v._v(" 上的。")]),v._v(" "),t("p",[v._v("回到上面的问题， 如果请求没发出去， 这个 "),t("strong",[v._v("Header")]),v._v(" 是怎么被带回来的呢？ 浏览器又咋知道 "),t("strong",[v._v("Server")]),v._v(" 允许请求在哪些 "),t("strong",[v._v("Origin")]),v._v(" 下跨域发送呢？\n所以， 我们又明确了一个信息： 请求一定是先发送出去， 在返回来的时候被浏览器拦截了， 如果请求是有返回值的，会被浏览器隐藏掉。")]),v._v(" "),t("h3",{attrs:{id:"预检请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[v._v("#")]),v._v(" 预检请求")]),v._v(" "),t("p",[v._v("因为是浏览器拦截隐藏返回值，所以实际上服务器已经走了一遍接口逻辑了，这就造成了一定的资源浪费，所以实际上浏览器在实际接口请求之前先发起一个预检请求。")]),v._v(" "),t("img",{attrs:{src:"/blog/imgs/03技术/crossOrigin3.png",alt:"跨域介绍",width:"400"}}),v._v(" "),t("p",[v._v("我们发现，在发送真正的请求之前，浏览器会先发送一个 "),t("strong",[v._v("Preflight")]),v._v(" 请求，也就是我们常说的预检请求，它的方法为 "),t("strong",[v._v("OPTIONS")]),v._v("。")]),v._v(" "),t("p",[v._v("这也就是为什么有的时候我们明明只发了一个请求，在 "),t("strong",[v._v("NetWork")]),v._v(" 里却看到了两个。")]),v._v(" "),t("img",{attrs:{src:"/blog/imgs/03技术/crossOrigin4.png",alt:"跨域介绍",width:"400"}}),v._v(" "),t("p",[v._v("预检请求有一个很重要的作用就是 "),t("strong",[v._v("询问")]),v._v(" 服务端是不是允许这次请求，如果当前请求是一个跨域的请求，你可以理解为： "),t("strong",[v._v("询问")]),v._v(" 服务端是不是允许请求在当前域下跨域发送。")]),v._v(" "),t("p",[v._v("当然， 它还有其他的作用， 比如 "),t("strong",[v._v("询问")]),v._v(" 服务端支持哪些HTTP方法。")]),v._v(" "),t("h3",{attrs:{id:"预检的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预检的过程"}},[v._v("#")]),v._v(" 预检的过程")]),v._v(" "),t("p",[v._v("当预检请求到达服务端时，服务端是不会真正执行这个请求的逻辑的，只会在这个请求上返回一些 "),t("strong",[v._v("HTTP Header")]),v._v(" ， 以此来告诉客户端是不是要发送真正的请求。")]),v._v(" "),t("p",[v._v("如果服务端告诉客户端，请求是允许被发送的，那真正的请求才会被发送出去。")]),v._v(" "),t("p",[v._v("比如： 我在 "),t("strong",[v._v("a.com")]),v._v(" 这个 "),t("strong",[v._v("origin")]),v._v(" 下， 发送了 "),t("strong",[v._v("conardli.top")]),v._v(" 这个域名的请求。那么浏览器会先向 "),t("strong",[v._v("conardli.top")]),v._v(" 发送一个预检请求, 返回了一些 "),t("strong",[v._v("CORS Header")]),v._v("，比如 "),t("strong",[v._v("Access-Control-Allow-Origin: a.com")])]),v._v(" "),t("p",[v._v("这时候浏览器发现， "),t("strong",[v._v("conardli.top")]),v._v(" 的请求是允许在 "),t("strong",[v._v("a.com")]),v._v(" 下发送的，才会真正发出请求。这时服务端才会真正执行请求接口的逻辑。")]),v._v(" "),t("p",[v._v("那么，所有的请求都会有预检吗？当然不是。")]),v._v(" "),t("h3",{attrs:{id:"简单请求和复杂请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和复杂请求"}},[v._v("#")]),v._v(" 简单请求和复杂请求")]),v._v(" "),t("p",[v._v("预检请求虽然不会真正在服务端执行逻辑，但也是一个请求啊，考虑到服务端的开销，不是所有请求都会发送预检的。")]),v._v(" "),t("p",[v._v("一旦浏览器把请求判定为 "),t("strong",[v._v("简单请求")]),v._v("，浏览器就不会发送预检了。")]),v._v(" "),t("p",[v._v("浏览器判定请求是否为简单请求要同时满足以下四个条件：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("使用以下方法之一：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("GET")])]),v._v(" "),t("li",[t("strong",[v._v("HEAD")])]),v._v(" "),t("li",[t("strong",[v._v("POST")])])])]),v._v(" "),t("li",[t("p",[v._v("只使用如下的安全 "),t("strong",[v._v("Header")]),v._v("，不得人为设置其他 "),t("strong",[v._v("Header")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("Accept")])]),v._v(" "),t("li",[t("strong",[v._v("Accept-Language")])]),v._v(" "),t("li",[t("strong",[v._v("Content-Language")])]),v._v(" "),t("li",[t("strong",[v._v("Content-Type")]),v._v(" 的值仅限于下列三者之一: text/plain、multipart/form-data、application/x-www-form-urlencoded")])])]),v._v(" "),t("li",[t("p",[v._v("请求中的任意 "),t("strong",[v._v("XMLHttpRequest")]),v._v(" 对象均没有注册任何事件监听器；"),t("strong",[v._v("XMLHttpRequest")]),v._v(" 对象可以使用 "),t("strong",[v._v("XMLHttpRequest.upload")]),v._v(" 属性访问。")])]),v._v(" "),t("li",[t("p",[v._v("请求中没有使用 "),t("strong",[v._v("ReadableStream")]),v._v(" 对象。")])])]),v._v(" "),t("p",[v._v("所以，如果你发送的是一个简单请求，这个请求不管是不是会受到跨域的限制，只要发出去了，一定会在服务端被执行，浏览器只是隐藏了返回值而已。")]),v._v(" "),t("p",[v._v("现在，一切都清晰了吧 ...")]),v._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("最后来总结下要点：")]),v._v(" "),t("ul",[t("li",[v._v("简单请求：不管是否跨域，只要发出去了，一定会到达服务端并被执行，浏览器只会隐藏返回值")]),v._v(" "),t("li",[v._v("复杂请求：先发预检，预检不会真正执行业务逻辑，预检通过后才会发送真正请求并在服务端被执行")])]),v._v(" "),t("h3",{attrs:{id:"csrf攻击小例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击小例子"}},[v._v("#")]),v._v(" CSRF攻击小例子")]),v._v(" "),t("p",[v._v("这里是仓库地址 "),t("a",{attrs:{href:"https://github.com/lyc2014/just-for-fun/tree/master/browser/cookie/crossSiteRequestForgery",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/lyc2014/just-for-fun/tree/master/browser/cookie/crossSiteRequestForgery"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=s.exports}}]);