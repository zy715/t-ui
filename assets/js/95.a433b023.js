(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{865:function(t,e,s){"use strict";s.r(e);var i={data:function(){return{active:0,stepData:[{id:1,title:"创建账户",slotName:"first",btnArr:[{btnTitle:"下一步",params:1,fn:this.next}]},{id:2,title:"填写基础信息",slotName:"second",btnArr:[{btnTitle:"上一步",params:2,fn:this.back},{btnTitle:"下一步",params:2,fn:this.next}]},{id:3,title:"填写用户信息",slotName:"third",btnArr:[{btnTitle:"上一步",params:3,fn:this.back},{btnTitle:"下一步",params:3,fn:this.next}]},{id:4,title:"注册成功"}],successTitle:"企业信息填写完成，等待提交认证资料，经*****平台审核通过后即可办理业务"}},methods:{next:function(t){switch(t.params){case 1:case 2:this.active+=1;break;case 3:this.active+=2;break;case 4:console.log(22222222222)}},back:function(t){switch(t.params){case 2:case 3:this.active-=1;break;case 4:console.log(111111111)}},complete:function(){this.active=0}}},n=s(2),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{width:"100%"}},[s("t-step-wizard",{staticStyle:{"min-height":"400px"},attrs:{stepData:t.stepData,active:t.active,successTitle:t.successTitle},on:{complete:t.complete},scopedSlots:t._u([{key:"first",fn:function(){return[t._v("第一步")]},proxy:!0},{key:"second",fn:function(){return[t._v("第二步骤")]},proxy:!0},{key:"third",fn:function(){return[t._v("第三步骤")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=a.exports}}]);