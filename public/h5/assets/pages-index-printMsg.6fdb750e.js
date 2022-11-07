import{K as e,Y as a,N as t,o as l,c as o,w as s,a as r,b as i,i as n,r as d,e as u,f as c,g as m}from"./index.59a38ac7.js";import{_ as p,b as g,a as f}from"./uni-section.ccabbb97.js";import{a as v,b,c as x}from"./uni-forms.fb2477d2.js";var h=p({data:()=>({printerCategoryRange:[{value:1,text:"三年级诗词"}],valiFormData:{code:"",content:"",title:""},rules:{code:{rules:[{required:!0,errorMessage:"code 不能为空"},{format:"number",errorMessage:"code 只能输入数字"}]},title:{rules:[{required:!0,errorMessage:"标题不能为空"}]},content:{rules:[{required:!0,errorMessage:"打印内容不能为空"}]}}}),onLoad(){},onReady(){},methods:{submit(l){this.$refs[l].validate().then((l=>{e("log","at pages/index/printMsg.vue:76","success",l),a({url:"http://printer.imluxin.com/api/printer/print",data:{code:l.code,title:l.title,content:l.content},method:"POST",success:a=>{e("log","at pages/index/printMsg.vue:89",a.data),e("log","at pages/index/printMsg.vue:90","code",a.data.msg),201==a.data.code?(e("log","at pages/index/printMsg.vue:92",a.data.msg),t({title:a.data.msg,showCancel:!1,confirmColor:"#ff4e00",success:function(a){a.confirm?e("log","at pages/index/printMsg.vue:99","用户点击确定"):a.cancel&&e("log","at pages/index/printMsg.vue:101","用户点击取消")}})):t({title:a.data.msg,showCancel:!1,success:function(a){a.confirm?e("log","at pages/index/printMsg.vue:111","用户点击确定"):a.cancel&&e("log","at pages/index/printMsg.vue:113","用户点击取消")}})}})})).catch((a=>{e("log","at pages/index/printMsg.vue:121","err",a)}))}}},[["render",function(e,a,t,p,h,M){const _=n,F=d(u("uni-card"),g),V=d(u("uni-easyinput"),v),D=d(u("uni-forms-item"),b),y=d(u("uni-forms"),x),C=c,q=m,w=d(u("uni-section"),f);return l(),o(q,{class:"container"},{default:s((()=>[r(F,{"is-shadow":!1,"is-full":""},{default:s((()=>[r(_,{class:"uni-h6"},{default:s((()=>[i("这是一台神奇的打印机。")])),_:1})])),_:1}),r(w,{title:"填写打印内容",type:"line"},{default:s((()=>[r(q,{class:"example"},{default:s((()=>[r(y,{ref:"valiForm",rules:h.rules,model:h.valiFormData,labelWidth:"80px","label-position":e.top},{default:s((()=>[r(D,{label:"Code",required:"",name:"code"},{default:s((()=>[r(V,{modelValue:h.valiFormData.code,"onUpdate:modelValue":a[0]||(a[0]=e=>h.valiFormData.code=e),placeholder:"请输入Code"},null,8,["modelValue"])])),_:1}),r(D,{label:"标题",required:"",name:"title"},{default:s((()=>[r(V,{modelValue:h.valiFormData.title,"onUpdate:modelValue":a[1]||(a[1]=e=>h.valiFormData.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1}),r(D,{label:"打印内容",required:"",name:"content"},{default:s((()=>[r(V,{type:"textarea",modelValue:h.valiFormData.content,"onUpdate:modelValue":a[2]||(a[2]=e=>h.valiFormData.content=e),placeholder:"请输入自我介绍"},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model","label-position"]),r(C,{type:"primary",onClick:a[3]||(a[3]=e=>M.submit("valiForm"))},{default:s((()=>[i("提交")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-32326cbd"]]);export{h as default};