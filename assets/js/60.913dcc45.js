(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{838:function(e,a,l){"use strict";l.r(a);l(27);var t={name:"TModuleDetailDemo",data:function(){return{descData:{goods:{name:"goods",title:"货品信息",data:[{label:"货品名称",fieldName:"cargoName",value:""},{label:"货品类别",fieldName:"cargoType",value:""},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:""},{label:"总重量",fieldName:"cargoWeightKg",value:""},{label:"总体积",fieldName:"cargoVolumeDm3",value:""},{label:"总件数",fieldName:"cargoQty",value:""},{label:"易碎品",fieldName:"isBreakable",span:2,value:""},{label:"备注(独占一行)",fieldName:"cargoRemark",span:4,value:""}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:""},{label:"运费单价",value:""},{label:"路损类型",fieldName:"roadLossType",value:""},{label:"路耗定额",fieldName:"roadLossKg",value:""},{label:"整车承载",fieldName:"loadKgPerCar",value:""},{label:"保险购买",fieldName:"buyInsurance",value:""}]}}}},mounted:function(){var e={cargoName:"汽车总动员",cargoType:"玩具",cargoMoneyCentPerTon:"500",cargoWeightKg:"500",cargoVolumeDm3:"30",cargoQty:"40",isBreakable:"否",cargoRemark:"汽车总动员备注"};this.descData.goods.data.map((function(a){a.value=e[a.fieldName]}))}},o=l(2),r=Object(o.a)(t,(function(){var e=this.$createElement,a=this._self._c||e;return a("t-layout-page",[a("t-layout-page-item",[a("t-module-form",{ref:"sourceDetail",attrs:{title:"模块详情",subTitle:"独占一行（span设置）",handleType:"desc",descData:this.descData}})],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);