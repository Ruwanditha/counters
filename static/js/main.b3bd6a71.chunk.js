(this.webpackJsonpcounters=this.webpackJsonpcounters||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),s=n.n(c),o=(n(27),n(2)),i=n(17),u=n(4),l=n(5),d=n(9),h=n(8),j=(n(28),n(38)),p=n(37),b=n(11),m=n(1),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)(j.a,{bg:"light",children:Object(m.jsx)(p.a,{children:Object(m.jsxs)(j.a.Brand,{href:"#home",children:["Counter App"," ",Object(m.jsx)(b.a,{pill:!0,bg:"dark",className:"m-2",children:this.props.totalCounters})]})})})}}]),n}(a.a.Component),f=n(10),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(b.a,{bg:this.getBadgeClasses(),className:"m-2",children:this.formatCount()}),Object(m.jsx)(f.a,{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"m-2",variant:"secondary",children:"Increment"}),Object(m.jsx)(f.a,{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"m-2",variant:"danger",size:"sm",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(a.a.Component),C=(a.a.Component,function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(f.a,{onClick:this.props.onReset,className:"m-2",variant:"primary",children:"Reset"}),Object(m.jsx)(f.a,{onClick:this.props.onAddNew,className:"m-2",variant:"info",children:"Add New"}),this.props.counters.map((function(t){return Object(m.jsx)(O,{onDelete:e.props.onDelete,onIncrement:e.props.onIncrement,counter:t,selected:!0},t.id)}))]})}}]),n}(a.a.Component)),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={counters:[{id:1,value:2},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var n=Object(i.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(o.a)({},t),n[r].value++,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDelete=function(t){console.log("Event Handler Called - Delete",t);var n=e.state.counters.filter((function(e){return e.id!==t}));console.log(n),e.setState({counters:n})},e.handleAddNew=function(){var t=e.state.counters.length;e.setState({counters:e.state.counters.concat({id:t+1,value:5})})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)(v,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(m.jsx)("main",{className:"container",children:Object(m.jsx)(C,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete,onAddNew:this.handleAddNew})})]})}}]),n}(a.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},y=(n(33),n(16));a.a.Component,a.a.Component,a.a.Component;s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.b3bd6a71.chunk.js.map