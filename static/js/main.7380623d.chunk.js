(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),s=n(1),u=n(2),l=n(4),i=n(3),f=(n(13),n(5)),m=function(t){var e=t.reset,n=t.sortByLength,r=t.sorAlphabetically,a=t.reverse;return o.a.createElement("div",{className:"button-block"},o.a.createElement("button",{type:"button",className:"button",onClick:function(){return a()}},"Reverse"),o.a.createElement("button",{type:"button",className:"button",onClick:function(){return r()}},"Sort alphabetically"),o.a.createElement("button",{type:"button",className:"button",onClick:function(){return n()}},"Sort by length"),o.a.createElement("button",{type:"button",className:"button",onClick:function(){return e()}},"Reset"))},b=function(t){var e=t.selected;return o.a.createElement("select",{onChange:function(t){return e(t.target.value)}},Array(10).fill("").map((function(t,e){return o.a.createElement("option",{key:e,value:e+1},e+1)})))},d=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:Object(f.a)(t.props.goodsFromServer),numberOfSelectedPoints:10},t.reverse=function(){t.setState((function(e){return{goods:e.goods.reverse().filter((function(n){return e.goods.indexOf(n)<t.state.numberOfSelectedPoints}))}}))},t.sorAlphabetically=function(){t.setState((function(e){return{goods:e.goods.sort().filter((function(n){return e.goods.indexOf(n)<t.state.numberOfSelectedPoints}))}}))},t.reset=function(){t.setState({goods:Object(f.a)(t.props.goodsFromServer),numberOfSelectedPoints:10})},t.sortByLength=function(){t.setState((function(e){return{goods:e.goods.sort((function(t,e){return t.length-e.length})).filter((function(n){return e.goods.indexOf(n)<t.state.numberOfSelectedPoints}))}}))},t.selected=function(e){t.setState({numberOfSelectedPoints:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods;this.state.defaultValue;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,e.filter((function(n){return e.indexOf(n)<t.state.numberOfSelectedPoints})).map((function(t){return o.a.createElement("li",{key:t},t)}))),o.a.createElement(m,{reset:this.reset,sortByLength:this.sortByLength,sorAlphabetically:this.sorAlphabetically,reverse:this.reverse}),o.a.createElement(b,{selected:this.selected}))}}]),n}(o.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={activeButton:!1},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.activeButton;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),e?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:function(){t.setState((function(){return{activeButton:!1}}))}},"Reset ALL"),o.a.createElement(d,{goodsFromServer:p})):o.a.createElement("button",{type:"button",onClick:function(){t.setState((function(){return{activeButton:!0}}))}},"Start"))}}]),n}(o.a.Component);c.a.render(o.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7380623d.chunk.js.map