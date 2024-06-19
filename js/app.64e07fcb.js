(function(){"use strict";var e={9421:function(e,t,a){var r=a(7203),l=a.n(r),s=a(6848),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],o=a(1656),c={},u=(0,o.A)(c,i,n,!1,null,null,null),d=u.exports,m=a(6178),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-page"},[e.isLoginForm?t("el-card",{staticClass:"my-card",scopedSlots:e._u([{key:"header",fn:function(){return[t("div",[e._v("明甄谛听")])]},proxy:!0}],null,!1,346781619)},[t("el-form",{ref:"myForm",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",{staticClass:"tc"},[t("el-button",{attrs:{type:"primary"},on:{click:e.clickLogin}},[e._v("登录")]),t("el-button",{on:{click:e.changeForm}},[e._v("注册")])],1)],1)],1):t("el-card",{staticClass:"my-card",scopedSlots:e._u([{key:"header",fn:function(){return[t("div",[e._v("注册")])]},proxy:!0}])},[t("el-form",{ref:"registerForm",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入用户名"},on:{blur:e.checkUsername},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",{staticClass:"tc"},[t("el-button",{attrs:{type:"primary"},on:{click:e.clickRegister}},[e._v("注册")]),t("el-button",{on:{click:e.changeForm}},[e._v("返回登录")])],1)],1)],1)],1)},f=[],g=(a(4114),a(5596)),h=a.n(g),y=a(788),v=a.n(y),b=a(3518);const _="my-token-element-pc",x=()=>localStorage.getItem(_),w=e=>{localStorage.setItem(_,e)},k=()=>{localStorage.removeItem(_)};var S={namespaced:!0,state(){return{token:x()||""}},mutations:{setUserToken(e,t){e.token=t,w(t)},logout(e){e.token="",k()}},actions:{},getters:{}};s["default"].use(b.Ay);var T=new b.Ay.Store({modules:{user:S}});const $=v().create({timeout:5e4});$.interceptors.request.use((function(e){const t=T.state.user.token;return t&&(e.headers.Authorization=`${t}`),e}),(function(e){return Promise.reject(e)})),$.interceptors.response.use((function(e){return e.data}),(function(e){return e.response&&(401===e.response.status?(T.commit("user/logout"),Ie.push("/login"),h().error("尊敬的用户，当前登录状态已过期！")):h().error(e.response.data.message)),Promise.reject(e)}));var P=$;const I=({username:e,password:t})=>P.post("/user/login",{username:e,password:t}),A=()=>P.get("/user/info"),C=e=>P.post("/user/update",e),q=({username:e,password:t})=>P.post("/user/register",{username:e,password:t}),z=e=>P.get(`/user/check-username/${e}`);var D={name:"LoginIndex",data(){return{isLoginForm:!0,form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入账户名称",trigger:["change","blur"]},{min:5,max:11,message:"长度必须是5-11位",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]},{pattern:/^\w{5,11}$/,message:"请输入5-11位的字符",trigger:["change","blur"]}]}}},methods:{changeForm(){this.isLoginForm=!this.isLoginForm},async clickLogin(){try{const e=await I(this.form);0===e.code&&this.$message.error(e.msg),this.$store.commit("user/setUserToken",e.data.token),this.$router.push("/text"),1===e.code&&this.$message.success("登录成功")}catch(e){console.log(e)}},async checkUsername(){if(!this.form.username)return;const e=await z(this.form.username);e.isExist&&this.$message.error("用户名已存在")},async clickRegister(){if(!this.form.username||!this.form.password)return void this.$message.error("用户名和密码不能为空");const e=await z(this.form.username);if(e.isExist)this.$message.error("用户名已存在");else{try{const e=await q(this.form);this.$message.success(e.data)}catch(t){return void this.$message.error("注册失败，请重试")}this.changeForm()}}}},F=D,U=(0,o.A)(F,p,f,!1,null,"e7aa15a6",null),R=U.exports,N=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"layout-page"},[t("el-header",[t("div",{staticClass:"logo"},[t("img",{attrs:{src:a(3340),width:"140px"}})]),t("div",{staticClass:"detail"},[t("span",[e._v("支持")]),t("span",{staticStyle:{"margin-left":"20px"}},[e._v("相关帮助")])]),t("div",{staticClass:"user"},[t("el-avatar",{attrs:{size:36,src:e.avatar}}),t("el-link",{attrs:{underline:!1}},[e._v(e._s(e.name))])],1),t("div",{staticClass:"logout"},[t("el-popconfirm",{attrs:{title:"您确认退出吗？"},on:{confirm:e.handleConfirm}},[t("i",{staticClass:"el-icon-switch-button",attrs:{slot:"reference",title:"logout"},slot:"reference"})])],1)]),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[t("el-menu",{attrs:{router:"","default-active":e.$route.path,"background-color":"#0d2c53da","text-color":"#8391a2","active-text-color":"#FFF"}},[t("el-menu-item",{attrs:{index:"/text"}},[t("i",{staticClass:"el-icon-tickets"}),t("span",[e._v("文本检测")])]),t("el-menu-item",{attrs:{index:"/image"}},[t("i",{staticClass:"el-icon-picture-outline"}),t("span",[e._v("图片检测")])]),t("el-menu-item",{attrs:{index:"/text-record"}},[t("i",{staticClass:"el-icon-pie-chart"}),t("span",[e._v("文本历史")])]),t("el-menu-item",{attrs:{index:"/image-record"}},[t("i",{staticClass:"el-icon-coin"}),t("span",[e._v("图片历史")])]),t("el-menu-item",{attrs:{index:"/user"}},[t("i",{staticClass:"el-icon-user"}),t("span",[e._v("个人中心")])])],1)],1),t("el-main",[t("router-view")],1)],1)],1)},j=[],O={name:"layout-page",data(){return{avatar:"",name:""}},created(){this.initData()},methods:{async initData(){const{data:e}=await A();this.avatar="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",this.name=e.username},handleConfirm(){this.$store.commit("user/logout"),this.$router.push("/login")}}},M=O,E=(0,o.A)(M,N,j,!1,null,"5787e7e9",null),Q=E.exports,L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-page"},[t("div",{staticStyle:{display:"flex","align-items":"center","margin-top":"1.5%","margin-left":"1%"}},[t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:".docx,.txt"},on:{change:function(t){return e.handleFileChange(t)}}}),t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.triggerFileUpload}},[e._v("选择文件")]),t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.selectedFileName))]),t("span",{staticStyle:{"margin-left":"150px"}},[e._v("当前检测模式:")]),t("el-select",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-button",{staticStyle:{"margin-left":"5%"},attrs:{size:"medium",type:"success",loading:e.loading},on:{click:e.handleUpload}},[e._v("开始检测")]),t("el-button",{staticStyle:{"margin-left":"5%"},attrs:{size:"medium",type:"info"},on:{click:e.goToRecordText}},[e._v("历史记录")])],1),t("el-divider"),e.flag?e._e():t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"result",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e._m(0),t("h3",{staticStyle:{"margin-left":"15px"}},[e._v("检测结果：")]),e._m(1),t("el-divider"),t("ul",{staticStyle:{"font-size":"large"}},[e._m(2),t("el-divider"),t("li",[t("p",[e._v("文本内容：人工智能（AI）技术的发展是多方面的，其中机器学习、深度学习和自然语言处理是当前AI技术发展的三大热点。 ")]),t("span",[e._v("真实概率：45.655%")]),t("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：54.345%")]),t("el-divider")],1),t("li",[t("p",[e._v(" 文本内容：首先，机器学习是AI技术的核心组成部分之一。机器学习是一种使计算机系统能够从数据中学习和改进的技术。它通过训练模型来识别数据中的模式和规律，从而使计算机能够预测未知数据的结果。机器学习在许多领域都有广泛的应用，如推荐系统、语音识别、图像识别等。 ")]),t("span",[e._v("真实概率：36.455%")]),t("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：63.545%")]),t("el-divider")],1),t("li",[t("p",[e._v(" 文本内容：其次，深度学习是机器学习的一个子领域，它模拟了人类大脑的神经网络结构，通过多层神经元的学习和推理来处理复杂的数据。深度学习在图像识别、语音识别等领域取得了显著成就。例如，通过深度学习训练的模型能够准确识别图像中的物体，使得计算机能够像人类一样理解和解析图像内容。 ")]),t("span",[e._v("真实概率：43.328%")]),t("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：56.672%")]),t("el-divider")],1),t("li",[t("p",[e._v(" 文本内容：另外，自然语言处理是AI技术的另一个重要方向。自然语言处理致力于使计算机能够理解和响应人类语言。通过自然语言处理技术，计算机能够进行文本分析、情感分析、机器翻译等应用。例如，智能翻译应用利用自然语言处理技术将一种语言翻译成另一种语言，使得跨语言交流变得更加便捷。 ")]),t("span",[e._v("真实概率：17.438%")]),t("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：82.562%")]),t("el-divider")],1),t("li",[t("p",[e._v(" 文本内容：...... ")]),t("span",[e._v("真实概率：......")]),t("span",{staticStyle:{"margin-left":"13%"}},[e._v("AI概率：......")]),t("el-divider")],1)],1)],1),e.flag?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"result",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("span",{staticStyle:{"font-size":"xx-large","margin-bottom":"1%","margin-top":"1%"}},[e._v(e._s(e.selectedFileName))])]),t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("div",{staticStyle:{flex:"1",border:"1px solid black","margin-left":"1%","margin-right":"10%"}},[t("h3",{staticStyle:{"margin-left":"15px"}},[e._v("检测结果：")]),t("ul",{staticStyle:{"font-size":"x-large"}},[t("li",[e.detectionResult.whole_ai_prob>"65"?t("span",{staticStyle:{color:"red"}},[e._v("整体AI概率：")]):t("span",[e._v("整体AI概率：")]),e._v(" "+e._s(e.detectionResult.whole_ai_prob)+"% ")]),t("li",[e._v("整体真实概率："+e._s(e.detectionResult.whole_real_prob)+"%")])])]),e._m(3)]),t("el-divider"),t("ul",{staticStyle:{"font-size":"large"}},e._l(e.detectionResult.details,(function(a,r){return t("li",{key:r},[t("p",{style:{color:a.AI_probability>"65"?"red":""}},[e._v("文本内容："+e._s(a.text))]),t("span",[e._v("真实概率："+e._s(a.real_probability)+"%")]),t("span",{style:{marginLeft:"10%",color:a.AI_probability>"65"?"red":""}},[e._v("AI概率："+e._s(a.AI_probability)+"%")]),t("el-divider")],1)})),0)],1):e._e()],1)},B=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("h2",[e._v("结果示例")])])},function(){var e=this,t=e._self._c;return t("ul",{staticStyle:{"font-size":"x-large",color:"red"}},[t("li",[e._v("整体AI概率：87.103%")]),t("li",[e._v("整体真实概率：12.897%")])])},function(){var e=this,t=e._self._c;return t("li",[t("p",[e._v("文本内容：人工智能（Artificial Intelligence, AI）是指由人制造出来的系统所表现出来的智能。自20世纪50年代起，人工智能经历了几次繁荣与低谷，如今正处于一个新的高潮。 当前，人工智能因其对各行各业潜在的深刻影响而备受关注，被认为是新一轮科技革命和产业变革的核心动力。 ")]),t("span",[e._v("真实概率：30.205%")]),t("span",{staticStyle:{"margin-left":"10%"}},[e._v("AI概率：69.795%")])])},function(){var e=this,t=e._self._c;return t("div",{staticStyle:{flex:"1","text-align":"center","font-size":"x-large",border:"1px solid black","margin-right":"1%","margin-left":"10%"}},[t("p",[e._v("注意")]),t("span",[e._v("自动标红AI概率超过65%的文本")])])}];const G=e=>{const t="/user/upload";return P.post(t,e)},J=e=>P.post("/check/text",e),W=e=>P.post("/record/text",e),X=e=>P.delete("/record/text"+e);var H={name:"text-page",data(){return{check:[],loading:!1,fileToUpload:"",detectionResult:null,options:[{value:1,label:"综合类检测"},{value:2,label:"学术类检测"},{value:3,label:"文学类检测"}],value:1,flag:!1,selectedFileName:"未选择文件"}},methods:{goToRecordText(){this.$router.push("/record/text")},triggerFileUpload(){this.$refs.fileInput.click()},handleFileChange(e){this.fileToUpload=e.target.files[0],this.flag=!1,this.selectedFileName=e.target.files[0].name,console.log(this.fileToUpload)},async handleUpload(){const e=5242880,t=/(\.docx|\.txt)$/i;if(this.fileToUpload.size>e)this.$message.error("文件大小不能超过5MB");else if(t.test(this.fileToUpload.name))if(this.fileToUpload){const e=new FormData;e.append("file",this.fileToUpload),this.loading=!0;try{const t=await G(e),a=await A(),r={url:t.data.url,originalFilename:t.data.originalFilename,id:a.data.id,username:a.data.username,model:this.value},l=await J(r);this.detectionResult=l.data,this.check=Array(this.detectionResult.details.length).fill(!1),this.loading=!1,this.flag=!0}catch(a){console.error("上传失败：",a),this.$message.error("上传失败")}}else this.$message.error("请先选择一个文件。");else this.$message.error("只能上传 Word文档 或 文本文档")},open(){const e=this.$createElement;this.$notify({title:"提示",message:e("i",{style:"color: teal"},"该功能用于检测文本由AI生成的概率,可以提交Word文档，TXT文档检测，限制文件大小5MB"),offset:50,duration:5500})}},watch:{},components:{},mounted(){this.open()}},K=H,V=(0,o.A)(K,L,B,!1,null,"eff6adfa",null),Y=V.exports,Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"article-page"},[t("div",{staticStyle:{display:"flex","align-items":"center","margin-top":"1.5%","margin-left":"1%"}},[t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:".png,.jpg"},on:{change:function(t){return e.handleFileChange(t)}}}),t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.triggerFileUpload}},[e._v("选择图片")]),t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.selectedFileName))]),t("el-button",{staticStyle:{"margin-left":"15%"},attrs:{size:"medium",type:"success",loading:e.loading},on:{click:e.handleUpload}},[e._v("开始检测")]),t("el-button",{staticStyle:{"margin-left":"5%"},attrs:{size:"medium",type:"info"},on:{click:e.goToRecordImage}},[e._v("历史记录")])],1),t("el-divider"),e.fileToUpload?t("div",{staticClass:"result"},[e.imageUrl?t("div",{staticClass:"image-preview"},[t("span",[e._v("待检测图片：")]),t("img",{staticStyle:{display:"block","margin-left":"10px","margin-top":"20px",width:"50%"},attrs:{src:e.imageUrl,alt:"Image preview"}})]):e._e(),e.detectionResult?t("div",{staticClass:"image-preview"},[t("el-divider"),t("h3",{staticStyle:{"font-size":"x-large"}},[e._v("检测结果：")]),t("li",[t("span",{staticStyle:{"font-size":"larger"}},[e._v("AI合成概率："+e._s(e.detectionResult.ai_prob)+"%")])])],1):e._e()]):e._e()],1)},ee=[];a(4603),a(7566),a(8721);const te=e=>{const t="/user/upload";return P.post(t,e)},ae=e=>P.post("/check/image",e),re=e=>P.post("/record/image",e),le=e=>P.delete("/record/image"+e);var se={name:"photo-page",data(){return{loading:!1,flag:!1,selectedFileName:"未选择图片",fileToUpload:"",imageUrl:"",detectionResult:""}},components:{},methods:{goToRecordImage(){this.$router.push("/record/photo")},triggerFileUpload(){this.$refs.fileInput.click()},handleFileChange(e){const t=e.target.files[0];t&&(this.fileToUpload=t,this.flag=!1,this.selectedFileName=t.name,this.imageUrl=URL.createObjectURL(t))},async handleUpload(){const e=5242880,t=/(\.png|\.jpg)$/i;if(this.fileToUpload.size>e)this.$message.error("图片大小不能超过5MB");else if(t.test(this.fileToUpload.name))if(this.fileToUpload){const e=new FormData;e.append("file",this.fileToUpload),this.loading=!0;try{const t=await te(e),a=await A(),r={url:t.data.url,type:this.fileToUpload.name.substring(this.fileToUpload.name.lastIndexOf(".")+1),username:a.data.username,id:a.data.id},l=await ae(r);this.detectionResult=l.data,this.flag=!0}catch(a){console.error("上传失败：",a),this.$message.error("上传失败")}this.loading=!1}else this.$message.error("请先选择一个文件。");else this.$message.error("只能上传图片")},open(){const e=this.$createElement;this.$notify({title:"提示",message:e("i",{style:"color: teal"},"该功能用于检测图片由AI生成的概率,可以提交PNG、JPG格式图片检测，限制文件大小5MB"),offset:50})}},mounted(){this.open()}},ie=se,ne=(0,o.A)(ie,Z,ee,!1,null,"7989bfec",null),oe=ne.exports,ce=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-page"},[t("el-card",{staticClass:"box-card",staticStyle:{width:"400px",margin:"0 auto"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("个人中心")])]),t("el-form",{attrs:{model:e.userData}},[t("el-form-item",{attrs:{label:"用户名："}},[e._v(" "+e._s(e.userData.username)+" ")]),t("el-form-item",{attrs:{label:"真实姓名："}},[t("el-input",{model:{value:e.userData.realName,callback:function(t){e.$set(e.userData,"realName",t)},expression:"userData.realName"}})],1),t("el-form-item",{attrs:{label:"昵称："}},[t("el-input",{model:{value:e.userData.nickName,callback:function(t){e.$set(e.userData,"nickName",t)},expression:"userData.nickName"}})],1),t("el-form-item",{attrs:{label:"电话："}},[t("el-input",{model:{value:e.userData.phone,callback:function(t){e.$set(e.userData,"phone",t)},expression:"userData.phone"}})],1),t("el-form-item",{attrs:{label:"邮箱："}},[t("el-input",{model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}})],1),t("el-form-item",{attrs:{label:"性别："}},[t("el-radio-group",{model:{value:e.userData.sex,callback:function(t){e.$set(e.userData,"sex",t)},expression:"userData.sex"}},[t("el-radio",{attrs:{label:1}},[e._v("男")]),t("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1),t("el-form-item",{staticStyle:{"margin-left":"35%"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.updateInfo}},[e._v("更新信息")])],1)],1)],1)],1)},ue=[],de={name:"user-page",data(){return{userData:{id:"",username:"",realName:"",nickName:"",phone:"",email:"",sex:""}}},methods:{async updateInfo(){try{await C(this.userData),this.$message({type:"success",message:"更新成功"})}catch(e){this.$message({type:"error",message:"更新失败"})}},async getUserData(){try{const e=await A();this.userData=e.data}catch(e){console.error(e)}}},created(){this.getUserData()}},me=de,pe=(0,o.A)(me,ce,ue,!1,null,"6c8b2f3c",null),fe=pe.exports,ge=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"queryForm",attrs:{model:e.queryParams,size:"medium",inline:!0}},[t("el-form-item",{attrs:{label:"文件名称",prop:"roleName"}},[t("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入文件名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery.apply(null,arguments)}},model:{value:e.queryParams.fileName,callback:function(t){e.$set(e.queryParams,"fileName",t)},expression:"queryParams.fileName"}})],1),t("el-form-item",{attrs:{label:"创建时间"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{"value-format":"yyyy-MM-dd",placeholder:"开始日期"},model:{value:e.queryParams.startTime,callback:function(t){e.$set(e.queryParams,"startTime",t)},expression:"queryParams.startTime"}}),e._v(" - "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{"value-format":"yyyy-MM-dd",placeholder:"结束日期"},model:{value:e.queryParams.endTime,callback:function(t){e.$set(e.queryParams,"endTime",t)},expression:"queryParams.endTime"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),t("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),t("el-row",{staticClass:"mb8",attrs:{gutter:10}},[t("el-col",{attrs:{span:1.5}},[t("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),t("el-col",{attrs:{span:1.5}},[t("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"}},[e._v("导出")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"650",border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"文件编号",align:"center"}}),t("el-table-column",{attrs:{prop:"fileName",label:"文件名",align:"center"}}),t("el-table-column",{attrs:{prop:"type",label:"检测类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e.getTypeText(a.row.type)))])]}}])}),t("el-table-column",{attrs:{prop:"wholeAiProb",label:"AI概率",align:"center"}}),t("el-table-column",{attrs:{prop:"wholeRealProb",label:"真实概率",align:"center"}}),t("el-table-column",{attrs:{prop:"dateTime",label:"检测时间",align:"center"}}),t("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.queryParams.pageNum,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.getRecordText,"current-change":e.getRecordText}})],1)},he=[],ye={name:"text-page",data(){return{multiple:!0,tableData:[],ids:[],total:0,queryParams:{pageNum:1,pageSize:10,startTime:"",endTime:"",fileName:"",userId:""}}},created(){this.getRecordText()},methods:{getTypeText(e){switch(e){case 1:return"综合检测";case 2:return"学术检测";case 3:return"文学检测";default:return"未知检测"}},handleSelectionChange(e){this.ids=e.map((e=>e.id)),this.multiple=!e.length},async getRecordText(){this.loading=!0;const e=await A();this.queryParams.userId=e.data.id,W(this.queryParams).then((e=>{this.tableData=e.data.rows,this.total=e.data.totalRows})),this.loading=!1},handleQuery(){this.queryParams.pageNum=1,this.getRecordText()},resetQuery(){this.queryParams.fileName="",this.queryParams.startTime="",this.queryParams.endTime="",this.handleQuery()},handleDelete(e){console.log(e);const t=e.id||this.ids;console.log(t),this.$confirm('是否确认删除文件编号为"'+t+'"的数据项？').then((function(){return X(t)})).then((()=>{this.getRecordText(),this.$modal.msgSuccess("删除成功")})).catch((()=>{}))}}},ve=ye,be=(0,o.A)(ve,ge,he,!1,null,"3d88fb8f",null),_e=be.exports,xe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"queryForm",attrs:{model:e.queryParams,size:"medium",inline:!0}},[t("el-form-item",{attrs:{label:"图片类型"}}),t("el-select",{attrs:{placeholder:"图片类型"},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-form-item",{staticStyle:{"margin-left":"5%"},attrs:{label:"创建时间"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{"value-format":"yyyy-MM-dd",placeholder:"开始日期"},model:{value:e.queryParams.startTime,callback:function(t){e.$set(e.queryParams,"startTime",t)},expression:"queryParams.startTime"}}),e._v(" - "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{"value-format":"yyyy-MM-dd",placeholder:"结束日期"},model:{value:e.queryParams.endTime,callback:function(t){e.$set(e.queryParams,"endTime",t)},expression:"queryParams.endTime"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),t("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),t("el-row",{staticClass:"mb8",attrs:{gutter:10}},[t("el-col",{attrs:{span:1.5}},[t("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),t("el-col",{attrs:{span:1.5}},[t("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"}},[e._v("导出")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"650",border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"图片编号",width:"120",align:"center"}}),t("el-table-column",{attrs:{label:"图片预览",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("el-image",{staticStyle:{width:"100%",height:"auto"},attrs:{src:e.row.url,fit:"cover"}})]}}])}),t("el-table-column",{attrs:{prop:"type",label:"图片类型",align:"center"}}),t("el-table-column",{attrs:{prop:"aiProb",label:"AI概率",align:"center"}}),t("el-table-column",{attrs:{prop:"datetime",label:"检测时间",align:"center"}}),t("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.queryParams.pageNum,"page-sizes":[10,20,30,40],"page-size":e.queryParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.getRecordImage,"current-change":e.getRecordImage}})],1)},we=[],ke={name:"image-page",data(){return{options:[{value:"",label:"全部图片"},{value:"png",label:"PNG"},{value:"jpg",label:"JPG"}],multiple:!0,tableData:[],ids:[],total:0,queryParams:{pageNum:1,pageSize:10,startTime:"",endTime:"",type:"",userId:""}}},created(){this.getRecordImage()},methods:{handleSelectionChange(e){this.ids=e.map((e=>e.id)),this.multiple=!e.length},async getRecordImage(){this.loading=!0;const e=await A();this.queryParams.userId=e.data.id,re(this.queryParams).then((e=>{this.tableData=e.data.rows,this.total=e.data.totalRows})),this.loading=!1},handleQuery(){this.queryParams.pageNum=1,this.getRecordImage()},resetQuery(){this.queryParams.type="",this.queryParams.startTime="",this.queryParams.endTime="",this.handleQuery()},handleDelete(e){const t=e.id||this.ids;this.$confirm('是否确认删除图片编号为"'+t+'"的数据项？').then((function(){return le(t)})).then((()=>{this.getRecordImage(),this.$modal.msgSuccess("删除成功")})).catch((()=>{}))}}},Se=ke,Te=(0,o.A)(Se,xe,we,!1,null,"49696d96",null),$e=Te.exports;s["default"].use(m.Ay);const Pe=new m.Ay({routes:[{path:"/login",component:R},{path:"/",component:Q,children:[{path:"/text",component:Y},{path:"/image",component:oe},{path:"/user",component:fe},{path:"/text-record",component:_e},{path:"/image-record",component:$e}]}]});var Ie=Pe,Ae=a(3832),Ce=a.n(Ae),qe=a(4355),ze=a.n(qe),De=a(3950),Fe=a.n(De),Ue=a(4351),Re=a.n(Ue),Ne=a(9008),je=a.n(Ne),Oe=a(7358),Me=a.n(Oe),Ee=a(6287),Qe=a.n(Ee),Le=a(5614),Be=a.n(Le),Ge=a(4932),Je=a.n(Ge),We=a(353),Xe=a.n(We),He=a(4245),Ke=a.n(He),Ve=a(3715),Ye=a.n(Ve),Ze=a(874),et=a.n(Ze),tt=a(685),at=a.n(tt),rt=a(7705),lt=a.n(rt),st=a(6210),it=a.n(st),nt=a(3656),ot=a.n(nt),ct=a(9507),ut=a.n(ct),dt=a(1362),mt=a.n(dt),pt=a(1227),ft=a.n(pt),gt=a(406),ht=a.n(gt),yt=a(2916),vt=a.n(yt),bt=a(175),_t=a.n(bt),xt=a(7999),wt=a.n(xt),kt=a(2802),St=a.n(kt),Tt=a(6066),$t=a.n(Tt),Pt=a(1038),It=a.n(Pt),At=a(9384),Ct=a.n(At),qt=a(7386),zt=a.n(qt);s["default"].use(zt()),s["default"].use(Ct()),s["default"].use(It()),s["default"].use($t()),s["default"].use(St()),s["default"].use(wt()),s["default"].use(_t()),s["default"].use(vt()),s["default"].use(ht()),s["default"].use(ft()),s["default"].use(mt()),s["default"].use(ut()),s["default"].use(ot()),s["default"].use(it()),s["default"].use(lt()),s["default"].use(at()),s["default"].use(et()),s["default"].use(Ye()),s["default"].use(Ke()),s["default"].use(Xe()),s["default"].use(Je()),s["default"].use(Be()),s["default"].use(Qe()),s["default"].use(Me()),s["default"].use(je()),s["default"].use(Re()),s["default"].use(Fe()),s["default"].use(ze().directive),s["default"].prototype.$loading=ze().service,s["default"].prototype.$msgbox=Ce(),s["default"].prototype.$alert=Ce().alert,s["default"].prototype.$confirm=Ce().confirm,s["default"].prototype.$prompt=Ce().prompt,s["default"].prototype.$notify=Notification,s["default"].prototype.$message=h(),s["default"].use(l()),s["default"].config.productionTip=!1,new s["default"]({router:Ie,store:T,render:e=>e(d)}).$mount("#app")},3340:function(e,t,a){e.exports=a.p+"img/title2.cba6733a.png"}},t={};function a(r){var l=t[r];if(void 0!==l)return l.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,l,s){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],l=e[u][1],s=e[u][2];for(var n=!0,o=0;o<r.length;o++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(n=!1,s<i&&(i=s));if(n){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,l,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,s,i=r[0],n=r[1],o=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in n)a.o(n,l)&&(a.m[l]=n[l]);if(o)var u=o(a)}for(t&&t(r);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self["webpackChunkaigc_pc"]=self["webpackChunkaigc_pc"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(9421)}));r=a.O(r)})();
//# sourceMappingURL=app.64e07fcb.js.map