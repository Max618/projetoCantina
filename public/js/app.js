webpackJsonp([1],Array(54).concat([function(t,e,a){"use strict";var n=a(2),s=a(187),i=a(168),o=a.n(i),l=a(176),r=a.n(l);n.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Login",component:r.a},{path:"/home",name:"Home",component:o.a}]})},function(t,e,a){"use strict";var n=a(2),s=a(189),i=a.n(s);n.default.use(i.a);var o={listaPedidos:[]},l={getListaPedidos:function(t){return t.listaPedidos}},r={addListaPedidos:function(t,e){t.commit("addListaPedidos",e)},removeListaPedidos:function(t,e){t.commit("removeListaPedidos",e)}},c={addListaPedidos:function(t,e){t.listaPedidos.unshift(e)},removeListaPedidos:function(t,e){t.listaPedidos.splice(e,1)}};e.a=new i.a.Store({state:o,getters:l,actions:r,mutations:c})},,,function(t,e){},function(t,e,a){a(164);var n=a(4)(a(99),a(184),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(174),s=a.n(n),i=a(175),o=a.n(i),l=a(169),r=a.n(l);e.default={data:function(){return{menu:s.a,nivel:window.sessionStorage.getItem("nivel"),opcao:""}},methods:{principal:function(t){switch(t[0]){case"pedidos":this.opcao=o.a;break;case"estoque":case"opcoes":this.opcao="";break;case"lanches":this.opcao=r.a;break;case"refeicao":this.opcao=""}}},components:{Menu:s.a,Pedidos:o.a,Lanches:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(170),s=a.n(n),i=a(171),o=a.n(i),l=a(172),r=a.n(l),c=a(173),u=a.n(c),d=a(32),p=a.n(d);e.default={data:function(){return{active:0,size:85,lanches:"",outros:""}},computed:{steps:function(){return"Step"+(this.active+1)}},mounted:function(){this.request()},methods:{next:function(){this.active++>3&&(this.active=0)},back:function(){this.active--<1&&(this.active=0)},request:function(){var t=this;p.a.post("api/responsavel/lanches").then(function(e){var a=e.data;t.lanches=a.lanches,t.outros=a.outros}).catch(function(t){console.log("error"),console.log(t)})}},components:{Step1:s.a,Step2:o.a,Step3:r.a,Step4:u.a}}},function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["lanches"],data:function(){return{tableData:[],value:"",qtde:0,loading:!1,elQtde:!1,elProd:!1}},methods:{add:function(){if(this.value)if(this.elProd=!1,this.qtde){var t={produto:this.value.name,qtde:this.qtde,unit:this.value.price};this.tableData.unshift(t),this.$store.dispatch("addListaPedidos",t),this.elQtde=!1}else this.$notify({title:"Aviso",message:"Quantidade inválida!",type:"warning"}),this.elQtde=!0;else this.$notify({title:"Aviso",message:"Nenhum produto selecionado!",type:"warning"}),this.elProd=!0},apagarItem:function(t,e,a){var n=this;this.$confirm("Deseja apagar este lanche?","Aviso",{confirmButtonText:"Sim",cancelButtonText:"Não",type:"warning"}).then(function(){n.$message({type:"info",message:"Produto apagado"});var e=n.tableData.indexOf(t);n.tableData.splice(e,1),n.$store.dispatch("removeListaPedidos",e)}).catch(function(){n.$message({type:"info",message:"Produto não apagado"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["outros"],data:function(){return{tableData:[],value:"",qtde:0,loading:!1,elQtde:!1,elProd:!1}},methods:{add:function(){if(this.value)if(this.elProd=!1,this.qtde){var t={produto:this.value.name,qtde:this.qtde,unit:this.value.price};this.tableData.unshift(t),this.$store.dispatch("addListaPedidos",t),this.elQtde=!1}else this.$notify({title:"Aviso",message:"Quantidade inválida!",type:"warning"}),this.elQtde=!0;else this.$notify({title:"Aviso",message:"Nenhum produto selecionado!",type:"warning"}),this.elProd=!0},apagarItem:function(t,e,a){var n=this;this.$confirm("Deseja apagar este lanche?","Aviso",{confirmButtonText:"Sim",cancelButtonText:"Não",type:"warning"}).then(function(){n.$message({type:"info",message:"Produto apagado"});var e=n.tableData.indexOf(t);n.tableData.splice(e,1),n.$store.dispatch("removeListaPedidos",e)}).catch(function(){n.$message({type:"info",message:"Produto não apagado"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(110),s=a.n(n);e.default={data:function(){return{tableData:this.$store.getters.getListaPedidos,fullPrice:""}},watch:{tableData:function(){this.fullPrice=this.calculateFullPrice()}},mounted:function(){this.fullPrice=this.calculateFullPrice()},methods:{calculateFullPrice:function(){var t=this.tableData,e=0,a=!0,n=!1,i=void 0;try{for(var o,l=s()(t);!(a=(o=l.next()).done);a=!0){var r=o.value;e+=r.unit*r.qtde}}catch(t){n=!0,i=t}finally{try{!a&&l.return&&l.return()}finally{if(n)throw i}}return e}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["nivel"],data:function(){return{menu:"",cantina:{op1:{texto:"PEDIDOS",link:"pedidos",icon:"receipt"},op2:{texto:"ESTOQUE",link:"estoque",icon:"store_mall_directory"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}},pais:{op1:{texto:"LANCHES",link:"lanches",icon:"local_pizza"},op2:{texto:"REFEIÇÃO",link:"refeicao",icon:"restaurant"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}}}},methods:{display:function(t,e){var a=e.target;"div"!==e.target.localName&&(a=e.target.parentElement);var n=document.getElementsByClassName("light-black-bg");[].forEach.call(n,function(t){t.classList.remove("light-black-bg")}),a.classList.add("light-black-bg"),this.$emit("opcao",[t])}},created:function(){2==this.nivel?this.menu=this.pais:3==this.nivel?this.menu=this.cantina:this.menu="n tem nada"}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(32),s=a.n(n);e.default={data:function(){return{email:"",password:"",emailV:"",passwordV:""}},watch:{email:function(t){var e=t.indexOf("@"),a=t.lastIndexOf(".");e<1||a<e+2||a+2>=t.length?this.emailV=!1:this.emailV=!0},password:function(t){this.password.length?this.passwordV=!0:this.passwordV=!1}},methods:{checkEntry:function(){this.emailV?this.password.length?console.log("EMAIL E SENHA VÁLIDOS"):console.log("SENHA EM BRANCO"):console.log("EMAIL INVÁLIDO")},accessGranted:function(t){window.sessionStorage.setItem("nivel",t),this.$router.push("home")},serverError:function(){},invalidUser:function(){},logon:function(t){switch(t){case-1:this.serverError();break;case 0:this.invalidUser();break;default:this.accessGranted(t)}},request:function(){var t=this.email,e=this.password,a=this.logon;s.a.post("api/login",{email:t,password:e}).then(function(t){a(t.data.nivel)}).catch(function(t){console.log("ERRO: "),console.log(t),a(-1)})}},mounted:function(){window.sessionStorage.setItem("nivel",0)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a(59),i=a.n(s),o=a(54),l=a(56),r=a.n(l),c=a(55),u=a(58),d=(a.n(u),a(57)),p=a.n(d);n.default.use(r.a,{locale:p.a}),n.default.config.productionTip=!1,new n.default({el:"#app",router:o.a,store:c.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){a(166);var n=a(4)(a(100),a(186),"data-v-f5d779a8",null);t.exports=n.exports},function(t,e,a){a(158);var n=a(4)(a(101),a(178),"data-v-2bf9322f",null);t.exports=n.exports},function(t,e,a){a(160);var n=a(4)(a(102),a(180),"data-v-4405a1e5",null);t.exports=n.exports},function(t,e,a){a(161);var n=a(4)(a(103),a(181),"data-v-4413b966",null);t.exports=n.exports},function(t,e,a){a(162);var n=a(4)(a(104),a(182),"data-v-4421d0e7",null);t.exports=n.exports},function(t,e,a){a(163);var n=a(4)(a(105),a(183),"data-v-442fe868",null);t.exports=n.exports},function(t,e,a){a(165);var n=a(4)(a(106),a(185),"data-v-7e1223ac",null);t.exports=n.exports},function(t,e,a){a(159);var n=a(4)(a(107),a(179),"data-v-32c40211",null);t.exports=n.exports},function(t,e,a){a(157);var n=a(4)(a(108),a(177),"data-v-24937077",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",align:"middle"}},[a("el-col",{attrs:{md:{offset:7,span:10},sm:{offset:6,span:12},xs:{offset:2,span:20}}},[a("el-card",{staticClass:"card card-login"},[a("el-tooltip",{staticClass:"item",attrs:{content:"Informe um email válido!",placement:"top-start"}},[a("el-input",{staticClass:"inputs",class:{warning:!t.emailV,success:t.emailV},attrs:{id:"emailInput",placeholder:"Usuário",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("el-input",{staticClass:"inputs",class:{warning:!t.passwordV,success:t.passwordV},attrs:{id:"passwordInput",type:"password",placeholder:"Senha"},on:{enter:function(e){t.request()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("div",{staticClass:"buttons"},[a("el-button",{attrs:{size:"small",type:"danger"}},[t._v("Cancelar")]),t._v(" "),a("el-button",{attrs:{size:"large",type:"success"},on:{click:function(e){t.request()}}},[t._v("Entrar")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-row",{class:{"row-bg":!0},attrs:{type:"flex"}},[a("el-steps",{attrs:{space:t.size,center:!0,"align-center":!0,active:t.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"Intro"}}),t._v(" "),a("el-step",{attrs:{title:"Lanche"}}),t._v(" "),a("el-step",{attrs:{title:"Outros"}}),t._v(" "),a("el-step",{attrs:{title:"Confirmar"}})],1),t._v(" "),a("keep-alive",[a(t.steps,{tag:"component",staticClass:"step",attrs:{lanches:t.lanches,outros:t.outros}})],1),t._v(" "),a("el-col",[a("div",{staticClass:"buttons"},[a("el-button",{class:{btnLanches:!0},on:{click:t.back}},[t._v("Voltar")]),t._v(" "),3!=t.active?a("el-button",{class:{btnLanches:!0,"blue-bg":!0},attrs:{type:"primary"},on:{click:t.next}},[t._v("Continuar")]):a("el-button",{class:{btnLanches:!0,"blue-bg":!0},attrs:{type:"success"},on:{click:function(t){}}},[t._v("Concluir")])],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    To dentro do Pedido\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{staticClass:"intro"},[a("el-row",{staticClass:"title",attrs:{type:"flex"}},[a("el-col",[t._v("Introdução")])],1),t._v(" "),a("el-row",{staticClass:"info",attrs:{type:"flex"}},[a("el-col",[t._v("Para realizar o pedido do lanche para seu filho, é simples:")]),t._v(" "),a("el-col",[t._v("1. Você seleciona qual o produto e indica a quantidade.")]),t._v(" "),a("el-col",[t._v("2. Você pode selecionar outro tipo de produto e a quantidade.")]),t._v(" "),a("el-col",[t._v("3. Você visualiza tudo o que selecionou com o preço total.")]),t._v(" "),a("el-col",[t._v("Clique em finalizar, ou utilize a opção de voltar para alterar algum produto.")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step2"},[a("el-col",[a("el-select",{class:{inputs:!0,warning:t.elProd},attrs:{id:"select",placeholder:"Escolha",loading:t.loading},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.lanches,function(t){return a("el-option",{attrs:{label:t.name,value:t}})}))],1),t._v(" "),a("el-col",[a("el-input-number",{class:{inputs:!0,warning:t.elQtde},attrs:{min:0,max:10},model:{value:t.qtde,callback:function(e){t.qtde=e},expression:"qtde"}})],1),t._v(" "),a("el-col",[a("el-button",{attrs:{type:"success"},on:{click:t.add}},[t._v("Adicionar")])],1),t._v(" "),a("el-col",[a("el-table",{attrs:{height:"150",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step3"},[a("el-col",[a("el-select",{class:{inputs:!0,warning:t.elProd},attrs:{id:"select",placeholder:"Escolha",loading:t.loading},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.outros,function(t){return a("el-option",{attrs:{label:t.name,value:t}})}))],1),t._v(" "),a("el-col",[a("el-input-number",{class:{inputs:!0,warning:t.elQtde},attrs:{min:0,max:10},model:{value:t.qtde,callback:function(e){t.qtde=e},expression:"qtde"}})],1),t._v(" "),a("el-col",[a("el-button",{attrs:{type:"success"},on:{click:t.add}},[t._v("Adicionar")])],1),t._v(" "),a("el-col",[a("el-table",{attrs:{height:"150",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",[a("el-table",{attrs:{height:"250",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1),t._v(" "),a("h3",{staticClass:"fullPrice"},[t._v("Preço total: R$ "+t._s(t.fullPrice))])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{class:{items:!0,"silver-bg":!0}},[a("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0}},[a("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op1.link,e)}}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op1.icon))]),a("p",[t._v(t._s(t.menu.op1.texto))])])]),t._v(" "),a("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(e){t.display(t.menu.op2.link)}}},[a("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op2.link,e)}}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op2.icon))]),a("p",[t._v(t._s(t.menu.op2.texto))])])]),t._v(" "),a("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(e){t.display(t.menu.op3.link)}}},[a("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op3.link,e)}}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op3.icon))]),a("p",[t._v(t._s(t.menu.op3.texto))])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home dark-white-bg"},[a("el-row",{class:{home:!0,"dark-white-bg":!0}},[a("el-col",{class:{menu:!0,"light-gray-bg":!0},attrs:{span:4}},[a(t.menu,{tag:"component",attrs:{nivel:t.nivel},on:{opcao:t.principal}})],1),t._v(" "),a("el-col",{class:{content:!0},attrs:{span:20}},[a(t.opcao,{tag:"component"})],1)],1)],1)},staticRenderFns:[]}}]),[109]);
//# sourceMappingURL=app.js.map