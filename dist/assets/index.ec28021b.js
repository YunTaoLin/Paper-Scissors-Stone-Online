import{f as e,r as o,a,o as t,c as l,b as n,d as s,h as c,u as i,e as r,w as m,v as d,p,g as u,i as v,j as f,k as g,l as R,m as h,t as y,F as b,n as k,q as _,s as C,x as I,y as S}from"./vendor.02c5e115.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((a,n)=>{const s=new URL(e,t);if(self[o].moduleMap[s])return a(self[o].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${o}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${e}`)),l(i)},onload(){a(self[o].moduleMap[s]),l(i)}});document.head.appendChild(i)})),self[o].moduleMap={}}}("/Paper-Scissors-Stone-Online/dist/assets/");var j={apiKey:"AIzaSyB6WCaZsYoGqeotIkZYvMj_EaeP25E7lMI",authDomain:"socket-game-f530e.firebaseapp.com",databaseURL:"https://socket-game-f530e-default-rtdb.firebaseio.com",projectId:"socket-game-f530e",storageBucket:"socket-game-f530e.appspot.com",messagingSenderId:"554022480678",appId:"1:554022480678:web:a0949656e777278ae5afe7",measurementId:"G-TN9DBP7TSL"},D={setup(){e.initializeApp(j);let a=document.documentElement.clientHeight,t=o(!1),l=document.documentElement.clientHeight;return/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&(t.value=!1),{appHeihgt:a,isSafari:t,mainHeihgt:l}}};D.render=function(e,o,s,c,i,r){const m=a("router-view");return t(),l("div",{style:{height:c.isSafari?`${c.mainHeihgt}px`:"100vh"}},[n(m)],4)};var Y=s({state:{linkedRoom:"",role:""},mutations:{setLinkedRoom(e,o){e.linkedRoom=o},setRole(e,o){e.role=o}},actions:{}}),w={setup(a,t){const l=i(),n=r(),s=o(null),m=e.database();return{createRoom:()=>{const e=m.ref(`/room/${s.value}`);e.once("value").then((function(o){if(o.val()){const e=c(o.val().play_A.lastConnect).isAfter(c().add(-2,"m")),a=c(o.val().play_B.lastConnect).isAfter(c().add(-2,"m"));if(e&&a)return alert("已經存在該房間囉，請換一個房號")}e.set({play_A:{join:!0,select:null,lastConnect:c(new Date).format("YYYY/MM/DD hh:mm")},play_B:{join:!1,select:null,lastConnect:null}}).then((()=>{l.commit("setLinkedRoom",s.value),l.commit("setRole","play_A"),setInterval((()=>{m.ref(`/room/${s.value}/play_A`).update({lastConnect:c(new Date).format("YYYY/MM/DD hh:mm")})}),6e4),n.push("/gameRoom")}))}))},createRoomId:s,close:()=>t.emit("close")}}};const A={class:"overlay"},$={class:"popup"},M={class:"createRoom"},B=n("h2",{class:"mb_16"},"創建房間",-1),L=n("div",{class:"createRoom__title"},"請自訂房間ID：",-1);w.render=function(e,o,a,s,c,i){return t(),l("div",A,[n("div",$,[n("div",{class:"close",onClick:o[1]||(o[1]=(...e)=>s.close&&s.close(...e))},"X"),n("div",M,[B,L,m(n("input",{type:"phone",placeholder:"Create Room ID","onUpdate:modelValue":o[2]||(o[2]=e=>s.createRoomId=e)},null,512),[[d,s.createRoomId]]),n("div",{class:"btn mt_16 mb_12",onClick:o[3]||(o[3]=(...e)=>s.createRoom&&s.createRoom(...e))},"創建 Create")])])])};var P={setup(a,t){const l=i(),n=r(),s=o(null),m=e.database();return{joinRoom:()=>{m.ref(`/room/${s.value}`).once("value").then((e=>{const o=e.val();if(!o)return alert("該房間不存在喔");if(!o.play_B.lastConnect||c(o.play_B.lastConnect).isBefore(c().add(-2,"m")))l.commit("setRole","play_B");else{if(o.play_A.lastConnect&&!c(o.play_A.lastConnect).isBefore(c().add(-2,"m")))return alert("該房間人數已額滿");l.commit("setRole","play_A")}l.commit("setLinkedRoom",s.value),m.ref(`/room/${s.value}/${l.state.role}`).update({lastConnect:c(new Date).format("YYYY/MM/DD hh:mm"),join:!0}).then((()=>{setInterval((()=>{m.ref(`/room/${s.value}/${l.state.role}`).update({lastConnect:c(new Date).format("YYYY/MM/DD hh:mm")})}),6e4),n.push("/gameRoom")}))}))},joinRoomId:s,close:()=>t.emit("close")}}};const J={class:"overlay"},U={class:"popup"},E={class:"joinRoom"},O=n("h2",{class:"mb_16"},"加入房間",-1),H=n("div",{class:"createRoom__title"},"請輸入房間ID：",-1);P.render=function(e,o,a,s,c,i){return t(),l("div",J,[n("div",U,[n("div",{class:"close",onClick:o[1]||(o[1]=(...e)=>s.close&&s.close(...e))},"X"),n("div",E,[O,H,m(n("input",{type:"phone",placeholder:"Join Room ID","onUpdate:modelValue":o[2]||(o[2]=e=>s.joinRoomId=e)},null,512),[[d,s.joinRoomId]]),n("div",{class:"btn mt_16 mb_12",onClick:o[3]||(o[3]=(...e)=>s.joinRoom&&s.joinRoom(...e))},"加入 Join")])])])};var x={components:{CreateRoom:w,JoinRoom:P},setup:()=>({openCreateRoom:o(!1),openJoinRoom:o(!1)})};const G=f();p("data-v-09796c09");const T={id:"EnterPage"},F=n("h1",null,[g(" 線上猜拳"),n("br",{class:"hidden-pad-up"}),g(" Paper Scissors Stone ")],-1),V={class:"btn_group"},q=n("div",null,"創建房間+",-1),z=n("div",{class:"btn--secondaryTitle"},"Create Room",-1),W=n("div",null,"加入房間",-1),X=n("div",{class:"btn--secondaryTitle"},"Join Room",-1),Z=n("div",{class:"footer"},null,-1);u();const K=G(((e,o,s,c,i,r)=>{const m=a("CreateRoom"),d=a("JoinRoom");return t(),l("div",T,[F,n("div",V,[n("div",{class:"btn",onClick:o[1]||(o[1]=e=>c.openCreateRoom=!0)},[q,z]),n("div",{class:"btn",onClick:o[2]||(o[2]=e=>c.openJoinRoom=!0)},[W,X])]),Z,c.openCreateRoom?(t(),l(m,{key:0,onClose:o[3]||(o[3]=e=>c.openCreateRoom=!1)})):v("",!0),c.openJoinRoom?(t(),l(d,{key:1,onClose:o[4]||(o[4]=e=>c.openJoinRoom=!1)})):v("",!0)])}));x.render=K,x.__scopeId="data-v-09796c09";const N=[{name:"剪刀",img:"/Paper-Scissors-Stone-Online/dist/assets/剪刀.3781ad54.png",color:"#86bebb",en:"Scissors"},{name:"石頭",img:"/Paper-Scissors-Stone-Online/dist/assets/石頭.401cfcbe.png",color:"#e0808b",en:"Stone"},{name:"布",img:"/Paper-Scissors-Stone-Online/dist/assets/布.2b9332b0.png",color:"#84bc7f",en:"Paper"}];var Q={setup(){const a=i(),t=r(),l=e.database(),n=R({name:"",img:"",color:"",en:""}),s=R({name:"",img:"",color:"",en:""}),c=o(!1),m=o(!1),d=o(""),p=["你贏了 Win","你輸了 lose","平手 Draw"];a.state.linkedRoom||t.replace("/");a.state.linkedRoom&&l.ref(`/room/${a.state.linkedRoom}/`).on("value",(e=>{var o,t,l,i;let r=e.val();if((null==(o=r.play_A)?void 0:o.join)&&(null==(t=r.play_B)?void 0:t.join)&&(c.value=!0),(null==(l=r.play_A)?void 0:l.select)&&(null==(i=r.play_B)?void 0:i.select)){const e=r["play_A"===a.state.role?"play_B":"play_A"].select,o=N.find((o=>o.name==e));o&&(s.name=o.name,s.img=o.img,s.color=o.color,s.en=o.en,(()=>{let e=n.name,o=s.name;switch(e){case"剪刀":"剪刀"==o&&(d.value=p[2]),"石頭"==o&&(d.value=p[1]),"布"==o&&(d.value=p[0]);break;case"石頭":"剪刀"==o&&(d.value=p[0]),"石頭"==o&&(d.value=p[2]),"布"==o&&(d.value=p[1]);break;case"布":"剪刀"==o&&(d.value=p[1]),"石頭"==o&&(d.value=p[0]),"布"==o&&(d.value=p[2])}m.value=!1})())}}));const u=h((()=>a.state.linkedRoom));return{selectHandler:e=>{n.name=e.name,n.img=e.img,n.color=e.color,n.en=e.en,m.value=!0,l.ref(`/room/${a.state.linkedRoom}/${a.state.role}/`).update({select:e.name,join:!1})},selectList:N,selected:n,startGame:c,waiting:m,roomId:u,opponentSelected:s,result:d,again:()=>{n.name="",n.img="",n.color="",n.en="",s.name="",s.img="",s.color="",s.en="",c.value=!1,d.value="",l.ref(`/room/${a.state.linkedRoom}/${a.state.role}/`).update({select:null,join:!0})}}}};const ee=f();p("data-v-75d79ff4");const oe={class:"wrap"},ae={class:"roomId"},te={class:"container"},le={class:"player self"},ne={class:"box"},se={key:1},ce=n("h2",null,[g(" 自己"),n("br"),g(" You ")],-1),ie=n("div",{class:"vs"},"VS",-1),re={class:"player other"},me={class:"box"},de={key:1},pe=n("h2",null,[g("對手 "),n("br"),g("Opponent")],-1),ue={key:0,class:"select"},ve=n("div",{class:"select_title"},"選擇出拳",-1),fe={class:"group"},ge={key:1,class:"result"},Re={class:"result_title"},he=n("div",{class:"space"},null,-1),ye={class:"loading"},be={class:"loading"};u();const ke=ee(((e,o,a,s,c,i)=>(t(),l("div",oe,[n("div",ae,"房號( Room ID )："+y(s.roomId),1),n("div",te,[n("div",le,[n("div",ne,[s.selected.name?(t(),l("div",{key:0,class:"selectItem",style:{backgroundColor:s.selected.color}},[n("figure",null,[n("img",{src:s.selected.img,alt:""},null,8,["src"]),n("figcaption",null,[g(y(s.selected.name)+" ",1),n("span",null,y(s.selected.en),1)])])],4)):(t(),l("div",se,"?"))]),ce]),ie,n("div",re,[n("div",me,[s.opponentSelected.name?(t(),l("div",{key:0,class:"selectItem",style:{backgroundColor:s.opponentSelected.color}},[n("figure",null,[n("img",{src:s.opponentSelected.img,alt:""},null,8,["src"]),n("figcaption",null,[g(y(s.opponentSelected.name)+" ",1),n("span",null,y(s.opponentSelected.en),1)])])],4)):(t(),l("div",de,"?"))]),pe])]),s.result?(t(),l("div",ge,[n("div",Re,y(s.result),1),n("div",{class:"refreshBtn",onClick:o[1]||(o[1]=e=>s.again())},"再來一次！")])):(t(),l("div",ue,[ve,n("div",fe,[(t(!0),l(b,null,k(s.selectList,(e=>(t(),l("div",{class:"selectItem",style:{backgroundColor:e.color},key:e.name,onClick:o=>s.selectHandler(e)},[n("figure",null,[n("img",{src:e.img,alt:""},null,8,["src"]),n("figcaption",null,[g(y(e.name)+" ",1),n("span",null,y(e.en),1)])])],12,["onClick"])))),128))])])),he,m(n("div",ye,"等待對手加入中...",512),[[_,!s.startGame]]),m(n("div",be,"等待對手出拳...",512),[[_,s.waiting]])]))));Q.render=ke,Q.__scopeId="data-v-75d79ff4";const _e=[{path:"/gameRoom",name:"Gameroom",component:Q},{path:"/",name:"Enter",component:x},{path:"/:pathMatch(.*)*",redirect:{path:"/"}}],Ce=C({history:I(),routes:_e});let Ie=S(D);Ie.config.performance=!1,Ie.use(Ce).use(Y).mount("#app");
