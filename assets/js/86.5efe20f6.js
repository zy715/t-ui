(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{868:function(t,e,a){"use strict";a.r(e);a(20);var i={data:function(){return{table:{data:[],columns:[{label:"物料编号",width:"100px",prop:"code"},{label:"物料名称",width:"149px",prop:"name",noShowTip:!0},{label:"规格",width:"149px",prop:"spec"},{label:"单位",width:"110px",prop:"unitName"}]}}},created:function(){this.initData()},methods:{initData:function(){for(var t=0;t<10;t++)this.table.data.push({id:t+1,code:t+1,name:"物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名称1"+t,spec:"物料名称1"+t,unitName:"吨"})},radioChange:function(t){console.log("传给后台的值",t)},clear:function(){this.$refs.selectTable.clear()}}},l=a(2),n=Object(l.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("t-layout-page",{staticStyle:{"flex-direction":"row"}},[e("t-select-table",{ref:"selectTable",staticStyle:{width:"50%"},attrs:{table:this.table,columns:this.table.columns,"max-height":540,keywords:{label:"name",value:"id"}},on:{radioChange:this.radioChange}}),this._v(" "),e("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:this.clear}},[this._v("清空选中")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);