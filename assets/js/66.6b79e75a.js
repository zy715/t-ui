(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{844:function(e,t,a){"use strict";a.r(t);var l={name:"TModuleFormDemoBase",data:function(){var e=this.$createElement;return{formOpts:{goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,opts:{formData:{id:"".concat(Math.floor(10*Math.random()+1)),account:"",password:"",name:"",sex:"",hobby:[],accountType:"",status:""},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",bind:{disabled:!1},arrLabel:"key",arrKey:"value"},{label:"平台用户",value:"accountType",type:"select-obj",comp:"el-select",list:"accountTypeList"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox",widthSize:1}],listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}},freight:{title:"运费信息",name:"freight",opts:{formData:{phone:"",createDate:"",valDate:"",wechat:"",qq:"",email:"",desc:"",number:""},fieldList:[{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"yyyy"},comp:"el-date-picker"},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"yyyy-MM-dd"}},{label:"微信",value:"wechat",type:"input",comp:"el-input"},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}]}},loadingDate:{name:"loadingDate",title:"承运信息",ref:null,opts:{formData:{id:"".concat(Math.floor(10*Math.random()+1)),createDate:"",valDate:"",qq:"",accountType:"",email:"",desc:"",number:"",status:""},fieldList:[{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"yyyy"},comp:"el-date-picker"},{labelRender:function(){return e("div",{class:"label_render"},[e("div",["element日期"]),e("el-tooltip",[e("template",{slot:"content"},[e("span",["总质量4.5吨及以下普通货运车辆的，可填“车籍地6位行政区域代码+000000”。"])]),e("i",{class:"el-icon-warning-outline",style:"cursor: pointer;margin-right:2px;"})])])},value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"yyyy-MM-dd"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],listTypeInfo:{sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}}}}},methods:{back:function(){console.log("自定义返回事件")},submit:function(e){console.log("最终提交数据",e)}}},o=a(2),n=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("t-layout-page",[t("t-layout-page-item",[t("t-module-form",{ref:"sourceForm",attrs:{title:"没有返回icon",formOpts:this.formOpts,isShowBack:"",submit:this.submit}})],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);