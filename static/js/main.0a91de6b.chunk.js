(this["webpackJsonpvaccine-india"]=this["webpackJsonpvaccine-india"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(6),c=n.n(i),r=(n(18),n(2)),o=n(3),u=n(5),l=n(4),d=(n(19),n(20),n(1)),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"toolbar",children:this.props.children})})}}]),n}(s.a.Component),j=(n(22),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"container",children:this.props.children})}}]),n}(s.a.Component)),f=(n(23),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"card",children:this.props.children})}}]),n}(s.a.Component)),b=(n(24),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).states=[],t.state={},t.selectFeed=[],t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchStates()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)(f,{className:"center-text",children:[Object(d.jsx)("i",{className:"fa fa-map fa-2x"}),Object(d.jsx)("p",{children:this.state.states1})]}),Object(d.jsx)(f,{children:Object(d.jsx)("i",{className:"fa fa-users fa-2x"})}),Object(d.jsx)(f,{children:Object(d.jsx)("i",{className:"fa fa-medkit fa-2x"})})]})}},{key:"fetchStates",value:function(){var t=this;fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(t){return t.json()})).then((function(e){t.states=e.states,t.selectFeed=t.states.map((function(t){return{value:t.state_id+"",label:t.state_name}})),t.setState({states:t.states[0].state_id})}))}}]),n}(a.Component)),O=n(7),p=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"States_API",get:function(){return"https://cdn-api.co-vin.in/api/v2/admin/location/states"}},{key:"District_API",get:function(){return"https://cdn-api.co-vin.in/api/v2/admin/location/districts/"}}]),t}(),v=n(13),g=(n(25),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={},a.handleChange=function(t){a.setState({selectedOption:t}),a.props.onStateChange(t)},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.selectedOption;return Object(d.jsx)("div",{className:"select",children:Object(d.jsx)(v.a,{value:t,onChange:this.handleChange,options:this.props.data,placeholder:"Select "+this.props.placeholder,isLoading:this.props.isLoading})})}}]),n}(a.Component)),m=(n(41),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={districts:[],states:[],isStatesLoading:!0,isDistrictsLoading:!1},t.stateSelectedChange=t.stateSelectedChange.bind(Object(O.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchStates()}},{key:"stateSelectedChange",value:function(t){this.setState({isDistrictsLoading:!0}),this.fetchDistricts(t.value)}},{key:"districtSelectedChange",value:function(t){}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"row-right",children:[Object(d.jsx)(g,{placeholder:"State",data:this.state.states,onStateChange:this.stateSelectedChange,isLoading:this.state.isStatesLoading}),Object(d.jsx)(g,{placeholder:"District",data:this.state.districts,onStateChange:this.districtSelectedChange,isLoading:this.state.isDistrictsLoading})]})}},{key:"fetchStates",value:function(){var t=this;fetch(p.States_API).then((function(t){return t.json()})).then((function(e){t.selectStatesFeed=e.states.map((function(t){return{value:t.state_id,label:t.state_name}})),t.setState({states:t.selectStatesFeed}),t.setState({isStatesLoading:!1}),t.setState({isDistrictsLoading:!0})}))}},{key:"fetchDistricts",value:function(t){var e=this;fetch(p.District_API+t.toString()).then((function(t){return t.json()})).then((function(t){var n=t.districts.map((function(t){return{value:t.district_id,label:t.district_name}}));e.setState({districts:n}),e.setState({isDistrictsLoading:!1})}))}}]),n}(a.Component)),S=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{children:Object(d.jsx)("div",{className:"brand",children:Object(d.jsx)("p",{className:"brand-name",children:"Vaccine INDIA"})})}),Object(d.jsxs)(j,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(b,{})]})]})}}]),n}(s.a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};n(42);c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.0a91de6b.chunk.js.map