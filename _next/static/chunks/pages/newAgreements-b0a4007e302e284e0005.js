_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"610x":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("o0o1"),i=a.n(n),s=a("HaE+"),c=a("1OyB"),r=a("vuIU"),o=a("JX7q"),l=a("Ji7U"),d=a("md7G"),u=a("foSv"),h=a("rePB"),p=a("nKUr"),m=a("q1tI");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(d.a)(this,a)}}var b=function(e){Object(l.a)(a,e);var t=f(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),Object(h.a)(Object(o.a)(n),"takePhoto",(function(){n.state.isCameraVisible?n.setState({isCameraVisible:!1,isDocsReady:!1,isFaceIDReady:!0}):n.state.isCameraVisibleDocs&&n.setState({isCameraVisibleDocs:!1,isDocsReady:!0});var e=n.canvas.getContext("2d");n.canvas.width=n.videoPlayer.videoWidth,n.canvas.height=n.videoPlayer.videoHeight,e.drawImage(n.videoPlayer,0,0,n.canvas.width,n.canvas.height)})),Object(h.a)(Object(o.a)(n),"takePhotoAgain",(function(){n.state.isDocsReady?n.setState({isCameraVisibleDocs:!0,isDocsReady:!1}):n.state.isFaceIDReady&&n.setState({isCameraVisible:!0,isFaceIDReady:!1})})),Object(h.a)(Object(o.a)(n),"showCameraDocs",(function(){n.setState({isCameraVisibleDocs:!0,isPreload:!1})})),Object(h.a)(Object(o.a)(n),"showCamera",(function(){setTimeout((function(){n.setState({isCameraVisible:!0,isPreload:!1}),setTimeout((function(){n.setState({isScanning:!0}),setTimeout((function(){n.setState({isScanning:!1,isVerificationSecond:!0}),setTimeout((function(){n.setState({isVerificationSecond:!1,isScanning:!0}),setTimeout((function(){n.setState({isScanning:!1,isVerificationThird:!0}),setTimeout((function(){n.setState({isScanning:!0}),setTimeout((function(){n.setState({isScanning:!1,isVerificationThird:!1,isVerificationCompleted:!0})}),1e3)}),2e3)}),1e3)}),2e3)}),1e3)}),2e3)}),1e3)})),Object(h.a)(Object(o.a)(n),"startVerification",(function(){"1"===n.props.isBMG?n.showCamera():n.showCameraDocs()})),Object(h.a)(Object(o.a)(n),"sendPhoto",(function(){if(+n.props.isBMG){n.setState({isAfterload:!0});var e=n.props.sendFile;n.canvas.toBlob(e)}else if(n.state.isDocAccepted){var t=n.props.sendFileManually;n.canvas.toBlob((function(e){n.state.selfie=e})),setTimeout((function(){n.setState({isAfterload:!0}),t(n.state.doc,n.state.selfie)}),1e3)}else n.canvas.toBlob((function(e){n.state.doc=e})),n.setState({isDocAccepted:!0,isCameraVisible:!0}),n.showCamera()})),n.state={isCameraVisible:!1,isCameraVisibleDocs:!1,isVerificationCompleted:!1,isScanning:!1,isVerificationSecond:!1,isVerificationThird:!1,isPreload:!0,isAfterload:!1,isDocsReady:!1,isFaceIDReady:!1,isDocAccepted:!1,doc:null,selfie:null},n}return Object(r.a)(a,[{key:"processDevices",value:function(e){var t=this;e.forEach((function(e){t.setDevice(e)}))}},{key:"setDevice",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.deviceId,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:a}});case 3:return this.videoPlayer.srcObject=e.sent,e.next=6,this.videoPlayer.play();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:t=e.sent,this.processDevices(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"c-camera-feed",children:[Object(p.jsx)("div",{className:"".concat(this.state.isAfterload?"modelLoader":"d-none")}),Object(p.jsxs)("div",{className:"c-camera-feed__preload ".concat(this.state.isPreload?"":"d-none"),children:[Object(p.jsx)("p",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438. \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u043e\u0442\u043e. \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435 \u043a\u0430\u043c\u0435\u0440\u0443."}),Object(p.jsx)("button",{onClick:this.startVerification,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"})]}),Object(p.jsxs)("div",{className:"c-camera-feed--holder ".concat(!this.state.isCameraVisible&&!this.state.isCameraVisibleDocs||this.state.isPreload?"d-none":""),children:[Object(p.jsxs)("div",{className:"c-camera-feed__viewer",children:[Object(p.jsx)("video",{ref:function(t){return e.videoPlayer=t},width:"100%",height:"100%",autoPlay:!0,playsInline:!0,muted:!0}),Object(p.jsx)("div",{className:"iin ".concat(this.state.isCameraVisibleDocs?"":"d-none"),children:Object(p.jsx)("div",{className:"iin-frame"})}),Object(p.jsx)("div",{className:"face-id ".concat(this.state.isVerificationCompleted||this.state.isCameraVisibleDocs?"d-none":""),children:Object(p.jsx)("div",{className:"face-id__frame ".concat(this.state.isVerificationThird?"scale-smaller":""),children:Object(p.jsx)("div",{className:"face-id__scanner ".concat(this.state.isScanning?"":"d-none")})})})]}),Object(p.jsx)("p",{className:"face-id__text ".concat(this.state.isCameraVisibleDocs?"":"d-none"),children:"\u0421\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438"}),Object(p.jsx)("p",{className:"face-id__text ".concat(!this.state.isVerificationCompleted&&this.state.isCameraVisible?"":"d-none"),children:this.state.isVerificationSecond?"\u0423\u043b\u044b\u0431\u043d\u0438\u0442\u0435\u0441\u044c":this.state.isVerificationThird?"\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u0435\u0441\u044c":"\u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043b\u0438\u0446\u043e \u0432 \u0440\u0430\u043c\u043a\u0443"}),Object(p.jsx)("button",{className:"".concat(this.state.isVerificationCompleted||this.state.isCameraVisibleDocs?"":"d-none"),onClick:this.takePhoto,children:"\u0421\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(p.jsxs)("div",{className:"c-camera-feed--holder ".concat((this.state.isFaceIDReady||this.state.isDocsReady&&!this.state.isCameraVisible)&&!this.state.isPreload?"":"d-none"),children:[Object(p.jsx)("div",{className:"c-camera-feed__stage",children:Object(p.jsx)("canvas",{className:"canvas",height:"100%",ref:function(t){return e.canvas=t}})}),Object(p.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(p.jsx)("button",{onClick:this.takePhotoAgain,children:"\u041f\u0435\u0440\u0435\u0441\u043d\u044f\u0442\u044c"}),Object(p.jsx)("button",{onClick:this.sendPhoto,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})]})]})}}]),a}(m.Component)},Suie:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),i=a.n(n),s=a("HaE+"),c=a("1OyB"),r=a("vuIU"),o=a("JX7q"),l=a("Ji7U"),d=a("md7G"),u=a("foSv"),h=a("nKUr"),p=a("q1tI"),m=a.n(p),f=a("nOHt"),b=a.n(f),j=a("vDqi"),g=a.n(j),v=a("GUC0"),O=a.n(v),x=a("8Kt/"),y=a.n(x),D=a("tNPP"),S=a("uuUm"),C=a("Otl1"),N=a("uJQ+"),k=a("DCcX"),w=a("vkoW"),I=a("CaDr"),V=a("610x"),A=a("/MKj");function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(d.a)(this,a)}}function P(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var _=function(e){Object(l.a)(n,e);var t=M(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={token:null,isBMG:!1,leadID:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,fio:null,dateOfBirth:null,address:null,email:null,placeOfWork:null,position:null,iin:null,cardNumber:null,startCard:null,endCard:null,placeOfBirth:null,insuranceAmount:null,givenDate:null,code:null,period:null,contractNumber:null,reward:null,main:null,total:null,cardGiven:null,iban:null,phone2:null,endDate:null,isModalOpen:!1},a.toggleModal=a.toggleModal.bind(Object(o.a)(a)),a.uploadImage=a.uploadImage.bind(Object(o.a)(a)),a.uploadImageManually=a.uploadImageManually.bind(Object(o.a)(a)),a.signDocuments=a.signDocuments.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"getUserDocument",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,g.a.get("https://api.i-credit.kz/api/getDocumentData?token=".concat(t)).then(function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.data?a.setState({leadID:t.data.leadID,phone2:t.data.phone,fio:t.data.fio,dateOfBirth:t.data.birthday,address:t.data.address,email:t.data.email,placeOfWork:t.data.work,position:t.data.position,iin:t.data.iin,cardNumber:t.data.cardNumber,startCard:t.data.cardDate,endCard:t.data.cardExpiration,placeOfBirth:t.data.placeOfBirth,insuranceAmount:t.data.insuranceAmount,givenDate:t.data.givenDate,code:t.data.code,period:t.data.period,contractNumber:t.data.contractNumber,reward:t.data.reward,main:t.data.main,total:t.data.main+Number(t.data.reward),cardGiven:t.data.cardGiven,iban:t.data.iban,endDate:t.data.repaymentDate.split("-").reverse().join(".")}):O()("Oops","\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a","error").then((function(){b.a.push("/")}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),O()("Oops","\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a","error").then((function(){b.a.push("/")}))})).finally((function(){a.setState({loading:!1})}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"sendAgreementStatus",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("VerificationAttempts")){e.next=10;break}if(!((t=Number(localStorage.getItem("VerificationAttempts"))+1)>3)){e.next=7;break}return O()("\u0418\u0441\u0447\u0435\u0440\u043f\u0430\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a (3).","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","success").then((function(){localStorage.setItem("VerificationAttempts","0"),b.a.push("/")})),e.abrupt("return");case 7:localStorage.setItem("VerificationAttempts",t.toString());case 8:e.next=11;break;case 10:localStorage.setItem("VerificationAttempts","1");case 11:navigator.permissions.query({name:"camera"}).then((function(e){"granted"!==e.state?O()("Oops","\u041d\u0443\u0436\u043d\u043e \u0434\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435!","error"):a.toggleModal()})).catch((function(e){console.log("Got error :",e),O()("Oops","\u041a\u0430\u043c\u0435\u0440\u0430 \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430!","error")}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"uploadImageManually",value:function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("iin",this.state.iin),n.append("leadID",this.state.leadID),n.append("photo",t),n.append("fileName","doc.png"),n.append("extension","png"),n.append("photo2",a),n.append("fileName2","selfie.png"),n.append("extension2","png"),this.setState({loading:!0}),e.next=12,g.a.post("https://24money.kz/biometria/public/api/comparePhotoManual",n).then((function(e){var t;(null===(t=e.data)||void 0===t?void 0:t.similarity)>82?O()("\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u044b.","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","success").then((function(){b.a.push("/")})):localStorage.getItem("VerificationAttempts")&&(+localStorage.getItem("VerificationAttempts")>=3?O()("\u0418\u0441\u0447\u0435\u0440\u043f\u0430\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a (3).","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","error").then((function(){localStorage.setItem("VerificationAttempts","0"),b.a.push("/")})):O()("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e.","\u0424\u043e\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","error").then((function(){s.toggleModal()})))})).catch((function(e){console.log(e),localStorage.getItem("VerificationAttempts")&&(+localStorage.getItem("VerificationAttempts")>=3?O()("\u0418\u0441\u0447\u0435\u0440\u043f\u0430\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a (3).","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","error").then((function(){localStorage.setItem("VerificationAttempts","0"),b.a.push("/")})):O()("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e.","\u0424\u043e\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","error").then((function(){s.toggleModal()})))})).finally((function(){s.setState({loading:!1})}));case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"signDocuments",value:function(){var e=this;try{g.a.get("https://api.i-credit.kz/api/agreementNew",{params:{leadID:this.state.leadID,sign:"y"}}).then((function(t){console.log(t),e.setState({loading:!1}),t.data.success?O()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0434\u0435\u043d\u0435\u0433 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u0434\u043d\u044f.").then((function(){b.a.push("/")})):O()("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432. ".concat(t.data.message),"\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","error").then((function(){b.a.push("/")}))}))}catch(t){this.setState({loading:!1}),console.log(t),b.a.push("/")}}},{key:"uploadImage",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("iin",this.state.iin),a.append("leadID",this.state.leadID),a.append("photo",t),a.append("fileName","image.png"),a.append("extension","png"),this.setState({loading:!0}),e.next=9,g.a.post("https://24money.kz/biometria/public/api/comparePhotos",a).then((function(e){var t;(null===(t=e.data)||void 0===t?void 0:t.similarity)>82?O()("\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u044b","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","success").then((function(){b.a.push("/")})):localStorage.getItem("VerificationAttempts")&&(+localStorage.getItem("VerificationAttempts")>=3?O()("\u0418\u0441\u0447\u0435\u0440\u043f\u0430\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a (3).","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","error").then((function(){localStorage.setItem("VerificationAttempts","0"),b.a.push("/")})):O()("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e.","\u0424\u043e\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","error").then((function(){n.toggleModal()})))})).catch((function(e){console.log(e),localStorage.getItem("VerificationAttempts")&&(+localStorage.getItem("VerificationAttempts")>=3?O()("\u0418\u0441\u0447\u0435\u0440\u043f\u0430\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a (3).","\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","error").then((function(){localStorage.setItem("VerificationAttempts","0"),b.a.push("/")})):O()("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e.","\u0424\u043e\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","error").then((function(){n.toggleModal()})))})).finally((function(){n.setState({loading:!1})}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=P("token");if(e){var t=P("bmg");this.setState({token:P("token"),isBMG:"1"===t||"auto"===t?"1":"0"}),this.getUserDocument(e)}else O()("Oops","\u041d\u0435\u0442 \u0442\u043e\u043a\u0435\u043d\u0430","error").then((function(){b.a.push("/")}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fio,i=t.dateOfBirth,s=t.address,c=t.email,r=t.placeOfWork,o=t.position,l=t.iin,d=t.cardNumber,u=t.startCard,p=t.endCard,m=t.placeOfBirth,f=t.insuranceAmount,b=t.givenDate,j=t.code,g=t.period,v=t.contractNumber,O=t.reward,x=t.main,A=t.total,M=t.cardGiven,P=t.iban,_=t.phone2,R=t.endDate;return Object(h.jsxs)("div",{className:"container otherPages",children:[Object(h.jsxs)(k.a,{isOpen:this.state.isModalOpen,class:"modal modal-calculator",size:"lg",children:[Object(h.jsx)(w.a,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438"}),Object(h.jsx)(I.a,{children:Object(h.jsx)(V.a,{sendFile:this.uploadImage,sendFileManually:this.uploadImageManually,isBMG:this.state.isBMG})})]}),Object(h.jsx)(y.a,{children:Object(h.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(h.jsx)("div",{className:"modelLoader"}):Object(h.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"agreements-block",children:[Object(h.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"lperiod",style:{margin:"25px 0"},children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438:"}),Object(h.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0438:"}),Object(h.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(h.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u0438\u044f \u0432 \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434:"}),Object(h.jsx)("th",{children:"\u0421\u0440\u043e\u043a \u0438 \u0434\u0430\u0442\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430:"}),Object(h.jsx)("th",{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0434\u043e\u043b\u0433:"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:(+x-+O).toLocaleString()}),Object(h.jsx)("td",{children:(+O).toLocaleString()}),Object(h.jsxs)("td",{children:[(+O).toLocaleString()," \u0442\u0433"]}),Object(h.jsxs)("td",{children:[(+x).toLocaleString()," \u0442\u0433"]}),Object(h.jsxs)("td",{children:[g," \u0434\u043d\u0435\u0439 \u0434\u043e ",R,"\u0433."]}),Object(h.jsxs)("td",{children:[A," \u0442\u0433"]})]})})]})}),Object(h.jsxs)("ul",{className:"complete",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(h.jsx)(D.a,{fio:n,dateOfBirth:i,address:s,phone:_,email:c,placeOfWork:r,position:o,iin:l,cardNumber:d,startCard:u,endCard:p,placeOfBirth:m,insuranceAmount:f,givenDate:b,code:j,period:g})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(h.jsx)(S.a,{fio:n,dateOfBirth:i,address:s,iin:l,cardNumber:d,contractNumber:v,insuranceAmount:f,code:j,period:g,reward:O})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(h.jsx)(C.a,{contractNumber:v,givenDate:b,endDate:R,fio:n,address:s,phone:_,iin:l,insuranceAmount:f,reward:O,cardNumber:d,cardGiven:M,startCard:u,email:c,period:g})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(h.jsx)(N.a,{main:x,reward:O,fio:n,iin:l,address:s,cardNumber:d,cardGiven:M,startCard:u,endCard:p,dateOfBirth:i,phone:_,iban:P,email:c,contractNumber:v,givenDate:b,endDate:R,total:A,period:g})]})]}),Object(h.jsx)("div",{className:"repeatBtn form-group",style:{padding:0},children:Object(h.jsx)("button",{onClick:function(){return e.sendAgreementStatus()},className:"mt-5",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u043e\u0433\u043e\u0432\u043e\u0440"})})]})})})]})}}]),n}(m.a.Component);t.default=Object(A.connect)((function(e){return{userReducer:e.userReducer}}))(_)},ZWQX:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newAgreements",function(){return a("Suie")}])},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},vkoW:function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),s=a("q1tI"),c=a.n(s),r=a("17x9"),o=a.n(r),l=a("TSYQ"),d=a.n(l),u=a("33Jr"),h={tag:u.o,wrapTag:u.o,toggle:o.a.func,className:o.a.string,cssModule:o.a.object,children:o.a.node,closeAriaLabel:o.a.string,charCode:o.a.oneOfType([o.a.string,o.a.number]),close:o.a.object},p=function(e){var t,a=e.className,s=e.cssModule,r=e.children,o=e.toggle,l=e.tag,h=e.wrapTag,p=e.closeAriaLabel,m=e.charCode,f=e.close,b=Object(i.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),j=Object(u.k)(d()(a,"modal-header"),s);if(!f&&o){var g="number"===typeof m?String.fromCharCode(m):m;t=c.a.createElement("button",{type:"button",onClick:o,className:Object(u.k)("close",s),"aria-label":p},c.a.createElement("span",{"aria-hidden":"true"},g))}return c.a.createElement(h,Object(n.a)({},b,{className:j}),c.a.createElement(l,{className:Object(u.k)("modal-title",s)},r),f||t)};p.propTypes=h,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p}},[["ZWQX",0,1,11,12,14,2,3,4,5,6,8,10,13]]]);