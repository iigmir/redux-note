(this["webpackJsonpredux-note"]=this["webpackJsonpredux-note"]||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/logo.c18405ab.svg"},18:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=n(8),u=(n(28),n(1)),i=n(2),s=n(4),p=n(3),m=n(5),d=(n(29),{count:0}),v="COUNT",h={alter_val:function(e){return{type:"VAL",payload:{val:e}}},alter_count:function(e){return{type:v,payload:{count:e}}}},b=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"emit_val",value:function(e){this.props.alter_val(e)}},{key:"emit_count",value:function(){this.props.alter_count(this.props.count+1)}},{key:"reset_count",value:function(){this.props.alter_count(0)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{method:"get",className:"RenderInput"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"val"},"\u8f38\u5165 val "),c.a.createElement("input",{type:"text",name:"val",id:"val",value:this.props.val,onChange:function(t){return e.emit_val(t.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"count"},"\u89f8\u52d5 count "),c.a.createElement("button",{id:"count",type:"button",onClick:function(t){return e.emit_count()}},"Add to favorites")))}}]),t}(c.a.Component),f=Object(l.b)((function(e){return{}}),h)(b),O=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("article",null,c.a.createElement("h1",null," Hello Redux "),c.a.createElement("p",null,"\u96d6\u7136\u8aaa Vue \u7684 vuex \u662f\u501f\u947f Redux \u7684\uff1b\u96d6\u7136\u9019\u5169\u500b\u90fd\u662f flux \u67b6\u69cb\u904e\u4f86\u7684\u4e2d\u592e\u7ba1\u7406\u7cfb\u7d71\uff0c\u4f46\u9019\u5169\u500b\u7684\u5be6\u505a\u8d77\u4f86\u537b\u5dee\u5f88\u591a\u3002\u76f4\u63a5\u8df3\u904e\u4f86\u7684\u8a71\uff0c\u6703\u5f88\u56f0\u60d1\u3002"),c.a.createElement("p",null,"\u9996\u5148\uff0c\u5728 vuex \u88e1\u9762\uff0c\u4f60\u6703\u76f4\u63a5\u5728 mutations \u4fee\u6539 state \u7684\u6a23\u5b50\uff1b\u4f46\u5728 Redux \u88e1\u9762\uff0c\u4f60\u5fc5\u9808\u5728 dispatcher function \u88e1\u9762\uff0c\u63d0\u4f9b\u65b0\u7684 state \u7d66 Redux\uff0c\u8b93\u4ed6\u81ea\u5df1\u7528\u4f60\u7d66\u7684\u6578\u503c\uff0c\u4f86\u4fee\u6539 state\u3002"),c.a.createElement("p",null,"\u518d\u4f86\uff0c\u5728 Redux \u88e1\u9762\uff0c\u4e00\u500b React app \u53ea\u80fd\u6709\u4e00\u500b store\u3002\u9019\u500b store \u5fc5\u9808\u8981\u5728\u5305\u5728 Provider \u88e1\u9762\u3002"),c.a.createElement("p",null,"\u518d\u8aaa\u8aaa\u6a21\u584a\u5427\uff1aRedux \u7684\u6bcf\u500b\u6a21\u584a\uff0c\u662f\u4ee5\u4e00\u500b dispatcher \u70ba\u55ae\u4f4d\u7684\uff0c\u800c state \u770b\u8d77\u4f86\uff0c\u4f3c\u4e4e\u53ea\u662f dispatcher \u7684\u9644\u5c6c\u8b8a\u6578\u3002\u4f46\u5728 vuex \u88e1\u9762\uff0c\u5f9e state \u5230 mutation \u7684\u6bcf\u4e00\u500b\u968e\u6bb5\uff0c\u90fd\u662f\u7368\u7acb\u7684\u7269\u4ef6\u3002\u6240\u4ee5\u958b\u767c\u7684\u6642\u5019\uff0c\u6211\u5e38\u5e38\u6703\u96e3\u4ee5\u7406\u89e3\u3002\u6240\u4ee5\u5982\u679c\u53ea\u6709\u4e00\u500b store \u4f46\u4f60\u60f3\u8981\u628a state \u5206\u9580\u5225\u985e\u7684\u8a71\u600e\u9ebc\u8fa6\u5462\uff1f\u7b54\u6848\u662f\u5efa\u7acb\u4e00\u500b dispatcher \u7136\u5f8c\u628a state \u5f04\u8d77\u4f86\uff01"),c.a.createElement("p",null,"\u6700\u5f8c\uff0c\u4f60\u5fc5\u9808\u5728\u8f38\u51fa component \u6642\uff0c\u900f\u904e react-redux \u5167\u5efa\u7684 connect function \u628a state, action, component \u9019\u4e09\u500b\u9023\u7d50\u5728\u4e00\u8d77\u3002\u800c\u4e0d\u662f\u50cf vuex \u90a3\u6a23\uff0c\u4e00\u958b\u59cb\u5c31\u5f15\u5165 mapAction, mapMutation \u4e4b\u985e\u7684\u3002"))}}]),t}(c.a.Component),E=n(17),j=n.n(E),y=(n(30),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Intro"},c.a.createElement("div",{className:"left item"},c.a.createElement(O,null)),c.a.createElement("div",{className:"right item"},c.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"})))}}]),t}(c.a.Component)),_=(n(31),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"RenderInput"},c.a.createElement("h1",null,"\u8f38\u51fa state:"),c.a.createElement("ul",null,c.a.createElement("li",null,"val: ",this.props.val),c.a.createElement("li",null,"count: ",this.props.count)))}}]),t}(c.a.Component)),g=Object(l.b)((function(e){return{val:e.inputs.val,count:e.count.count}}),{})(_),x=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null),c.a.createElement(g,null),c.a.createElement(f,null))}}]),t}(c.a.Component),w=n(9),k=n(10),N={val:"Hello",obj:{}},R=Object(w.c)(Object(w.b)({inputs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VAL":return Object(k.a)({},e,{val:t.payload.val});case"OBJ":return Object(k.a)({},e,{obj:t.payload.obj});default:return e}},count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(k.a)({},e,{count:t.payload.count});default:return e}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l.a,{store:R},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7bca6aca.chunk.js.map