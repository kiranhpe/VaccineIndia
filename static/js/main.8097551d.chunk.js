(this["webpackJsonpvaccine-india"]=this["webpackJsonpvaccine-india"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(6),c=n.n(i),r=(n(18),n(2)),o=n(3),l=n(5),d=n(4),h=(n(19),n(20),n(1)),j=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"toolbar",children:this.props.children})})}}]),n}(s.a.Component),u=(n(22),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:this.props.children})}}]),n}(s.a.Component)),b=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"States_API",get:function(){return"https://cdn-api.co-vin.in/api/v2/admin/location/states"}},{key:"District_API",get:function(){return"https://cdn-api.co-vin.in/api/v2/admin/location/districts/"}},{key:"Dashboard_API",get:function(){return"https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id="}}]),t}(),O=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getData",value:function(t){return fetch(t).then((function(t){return t.json()}))}}]),t}();function v(){var t=new Date,e=t.getDate(),n=t.getMonth()+1,a=t.getFullYear();return e<10&&(e="0"+e),n<10&&(n="0"+n),t=a+"-"+n+"-"+e}n(23);var f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"card",children:this.props.children})}}]),n}(s.a.Component),p=(n(24),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"subline inc"}),Object(h.jsx)("div",{className:"subline dec"})]})}}]),n}(a.Component)),g=(a.Component,n(25),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={sites:{total:0},registration:{total:0,today:0},vaccination:{total:0,today:0}},t._api=new O,t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getCardsData()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(f,{children:[Object(h.jsx)("div",{className:0==this.state.sites.total?"progress":"no-display",children:Object(h.jsx)(p,{})}),Object(h.jsxs)("div",{className:"stat-count",children:[Object(h.jsx)("i",{className:"fa fa-map fa-2x"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h4",{children:"Vaccine Centers"}),Object(h.jsx)("h5",{children:this.state.sites.total>0?this.state.sites.total.toLocaleString("en-IN"):""}),Object(h.jsx)("p",{})]})]})]}),Object(h.jsxs)(f,{children:[Object(h.jsx)("div",{className:0==this.state.registration.total?"progress":"no-display",children:Object(h.jsx)(p,{})}),Object(h.jsxs)("div",{className:"stat-count",children:[Object(h.jsx)("i",{className:"fa fa-users fa-2x"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h4",{children:"Registered Users"}),Object(h.jsx)("h5",{children:this.state.registration.total>0?this.state.registration.total.toLocaleString("en-IN"):""})]})]})]}),Object(h.jsxs)(f,{children:[Object(h.jsx)("div",{className:0==this.state.vaccination.total?"progress":"no-display",children:Object(h.jsx)(p,{})}),Object(h.jsxs)("div",{className:"stat-count",children:[Object(h.jsx)("i",{className:"fa fa-medkit fa-2x"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h4",{children:"Vaccines"}),Object(h.jsx)("h5",{children:this.state.vaccination.total>0?this.state.vaccination.total.toLocaleString("en-IN"):""})]})]})]})]})}},{key:"getCardsData",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v(),s="".concat(b.Dashboard_API+e,"&district_id=").concat(n,"&date=").concat(a);this._api.getData(s).then((function(e){t.setState({sites:{total:e.topBlock.sites.total},registration:{total:e.topBlock.registration.total},vaccination:{total:e.topBlock.vaccination.total}})}))}}]),n}(a.Component)),x=n(7),m=n(13),S=(n(26),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={},a.handleChange=function(t){a.setState({selectedOption:t}),a.props.onStateChange(t)},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.selectedOption;return Object(h.jsx)("div",{className:"select",children:Object(h.jsx)(m.a,{value:t,onChange:this.handleChange,options:this.props.data,placeholder:"Select "+this.props.placeholder,isLoading:this.props.isLoading})})}}]),n}(a.Component)),N=(n(42),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={districts:[],states:[],isStatesLoading:!0,isDistrictsLoading:!1},t._api=new O,t.stateSelectedChange=t.stateSelectedChange.bind(Object(x.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchStates()}},{key:"stateSelectedChange",value:function(t){this.setState({isDistrictsLoading:!0}),this.fetchDistricts(t.value)}},{key:"districtSelectedChange",value:function(t){}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row-right",children:[Object(h.jsx)(S,{placeholder:"State",data:this.state.states,onStateChange:this.stateSelectedChange,isLoading:this.state.isStatesLoading}),Object(h.jsx)(S,{placeholder:"District",data:this.state.districts,onStateChange:this.districtSelectedChange,isLoading:this.state.isDistrictsLoading})]})}},{key:"fetchStates",value:function(){var t=this;this._api.getData(b.States_API).then((function(e){t.selectStatesFeed=e.states.map((function(t){return{value:t.state_id,label:t.state_name}})),t.setState({states:t.selectStatesFeed}),t.setState({isStatesLoading:!1}),t.setState({isDistrictsLoading:!0})}))}},{key:"fetchDistricts",value:function(t){var e=this;this._api.getData(b.District_API+t.toString()).then((function(t){var n=t.districts.map((function(t){return{value:t.district_id,label:t.district_name}}));e.setState({districts:n}),e.setState({isDistrictsLoading:!1})}))}}]),n}(a.Component)),y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{children:Object(h.jsx)("div",{className:"brand",children:Object(h.jsx)("p",{className:"brand-name",children:"Vaccine INDIA"})})}),Object(h.jsxs)(u,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"palce-holder",children:Object(h.jsx)("h4",{children:"Work In Progress....."})})]})]})}}]),n}(s.a.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};n(43);c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),C()}},[[44,1,2]]]);
//# sourceMappingURL=main.8097551d.chunk.js.map