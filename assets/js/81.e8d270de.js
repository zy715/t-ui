(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{864:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{searchValue:"",selectValue:"0",searchCondition:[{label:"新增待审批",value:"0"},{label:"新增已通过",value:"1"},{label:"新增已驳回",value:"2"}]}},methods:{search:function(e){console.log("点击查询按钮",e)},typeChange:function(e){this.searchValue="",this.selectValue=e}}},l=a(2),n=Object(l.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"t-search-demo",staticStyle:{"min-height":"100px",width:"100%",padding:"10px"}},[t("t-search",{attrs:{tips:"请输入用户名",searchValue:this.searchValue,selectValue:this.selectValue,searchCondition:this.searchCondition},on:{click:this.search,change:this.typeChange}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);