(self.webpackChunkverify=self.webpackChunkverify||[]).push([[842],{7618:function(e,t,r){"use strict";r.d(t,{E1:function(){return u},l_:function(){return p},K2:function(){return n},UM:function(){return o},Q9:function(){return h},sK:function(){return c}});var a=r(271),s=function(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?"),a=e.toString().match(r);return a?a[0]:""},p=function(e,t,r){for(var a,p,n,i,o,u,h=t,d="",l=[],g=0;g<r;g++){var f=c.md.sha512.create();f.update(e+"-"+h),d=f.digest().toHex(),a=parseInt((d.substring(0,2)+"").replace(/[^a-f0-9]/gi,""),16),p=parseInt((d.substring(2,4)+"").replace(/[^a-f0-9]/gi,""),16),n=parseInt((d.substring(4,6)+"").replace(/[^a-f0-9]/gi,""),16),i=parseInt((d.substring(6,8)+"").replace(/[^a-f0-9]/gi,""),16),o=Math.floor(1e6*(a/Math.pow(256,1)+p/Math.pow(256,2)+n/Math.pow(256,3)+i/Math.pow(256,4))),u=s(parseFloat((1e6/(o+1)*.96).toString()),2),l.push({crashPoint:u,gameHash:h});var m=c.md.sha256.create();m.update(h),h=m.digest().toHex()}return l},n=function(e,t,r){var a=t+":"+e+":"+r,s=c.md.sha256.create();s.update(t);var p=s.digest().toHex(),n=c.md.sha512.create();n.update(a);for(var i=(a=n.digest().toHex()).length,o=0,u=1e6,h="";u>=1e6&&(h=a.substring(o,o+5),u=parseInt((h+"").replace(/[^a-f0-9]/gi,""),16),!(o+5>i));)o+=5;var d="Impossible Game";return u<1e6&&(d="".concat(u%1e4)),{serverSeed:p,rollResult:d}},i={8:{low:[4,1.82,1.1,1,.5,1,1.1,1.82,4],medium:[14,2.4,1.3,.7,.4,.7,1.3,2.4,14],high:[28,3.63,1.5,.3,.2,.3,1.5,3.63,28]},9:{low:[6,1.9,1.4,1,.7,.7,1,1.4,1.9,6],medium:[17,3.2,1.7,.9,.5,.5,.9,1.7,3.2,17],high:[42.2,6.2,2,.6,.2,.2,.6,2,6.2,42.2]},10:{low:[7,2.1,1.3,1.1,1,.5,1,1.1,1.3,2.1,7],medium:[20,3.7,2,1.4,.6,.4,.6,1.4,2,3.7,20],high:[70,9,3,.9,.3,.2,.3,.9,3,9,70]},11:{low:[7,1.8,1.6,1.3,1,.7,.7,1,1.3,1.6,1.8,7],medium:[24,4.6,2.7,1.8,.7,.5,.5,.7,1.8,2.7,4.6,24],high:[120,11,5.2,1.4,.4,.2,.2,.4,1.4,5.2,11,120]},12:{low:[5,1.8,1.3,1.3,1.1,1,.5,1,1.1,1.3,1.3,1.8,5],medium:[33,8,3.6,2,1.1,.6,.3,.6,1.1,2,3.6,8,33],high:[163,21,8.1,1.9,.7,.2,.2,.2,.7,1.9,8.1,21,163]},13:{low:[8,3.2,1.9,1.8,1.2,.9,.7,.7,.9,1.2,1.8,1.9,3.2,8],medium:[40,12,5,2.9,1.3,.7,.4,.4,.7,1.3,2.9,5,12,40],high:[252,36,10,3.9,1,.2,.2,.2,.2,1,3.9,10,36,252]},14:{low:[7,2.5,2,1.3,1.1,1.1,1,.5,1,1.1,1.1,1.3,2,2.5,7],medium:[58,15,5.8,3.9,1.8,1,.5,.2,.5,1,1.8,3.9,5.8,15,58],high:[420,50,17,4.8,1.9,.3,.2,.2,.2,.3,1.9,4.8,17,50,420]},15:{low:[13,6.5,2,1.5,1.4,1.1,1,.7,.7,1,1.1,1.4,1.5,2,6.5,13],medium:[88,19,10,4.4,2.9,1.3,.5,.3,.3,.5,1.3,2.9,4.4,10,19,88],high:[620,79,27,7,3,.5,.2,.2,.2,.2,.5,3,7,27,79,620]},16:{low:[14,5,1.4,1.3,1.2,1.1,1.1,1,.5,1,1.1,1.1,1.2,1.3,1.4,5,14],medium:[110,41,8,4,2.9,1.5,1,.5,.3,.5,1,1.5,2.9,4,8,41,110],high:[1e3,100,22,9,4,2,.2,.2,.2,.2,.2,2,4,9,22,100,1e3]}},o=function(e,t,r,a,s){var p=[],n=[],o=0,u=c.md.sha256.create();u.update(t);var h=u.digest().toHex(),d=c.hmac.create();d.start("sha256",t),d.update(e+":"+r+":0");var l=d.digest().toHex(),g=c.hmac.create();g.start("sha256",t),g.update(e+":"+r+":1");var f=g.digest().toHex(),m=c.hmac.create();m.start("sha256",t),m.update(e+":"+r+":2");for(var v=m.digest().toHex(),x=0,w=0;w<32;w++)x=2*w,p.push(l.substring(2*w,x+2));for(var F=0;F<32;F++)x=2*F,p.push(f.substring(2*F,x+2));for(var I=0;I<32;I++)x=2*I,p.push(v.substring(2*I,x+2));for(var b=0;b<20;b++){var M=4*b,S=parseInt(p[M],16)/Math.pow(256,1),H=parseInt(p[M+1],16)/Math.pow(256,2),j=parseInt(p[M+2],16)/Math.pow(256,3),y=parseInt(p[M+3],16)/Math.pow(256,4),N=parseFloat(S.toString()).toFixed(12),k=parseFloat(H.toString()).toFixed(12),T=parseFloat(j.toString()).toFixed(12),Z=parseFloat(y.toString()).toFixed(12),_=Math.floor(2*(+N+ +k+ +T+ +Z));n.push(_)}n=n.slice(0,a);for(var P=0;P<n.length;P++)o=+o+ +n[P];return{result:i[a][s][o],server_seed_hash:h}},u=function(e,t,r){var a=[],p=c.md.sha256.create();p.update(t);var n=p.digest().toHex(),i=c.hmac.create();i.start("sha256",t),i.update(e+":"+r);for(var o=i.digest().toHex(),u=0,h=0;h<32;h++)u=2*h,a.push(o.substring(2*h,u+2));var d=parseInt(a[0],16)/Math.pow(256,1),l=parseInt(a[1],16)/Math.pow(256,2),g=parseInt(a[2],16)/Math.pow(256,3),f=parseInt(a[3],16)/Math.pow(256,4),m=parseFloat(d.toString()).toFixed(12),v=parseFloat(l.toString()).toFixed(12),x=parseFloat(g.toString()).toFixed(12),w=parseFloat(f.toString()).toFixed(12),F=s(1e6*(+m+ +v+ +x+ +w),0);return{payout:s(1e6/(+F+1)*.97/1,2),server_seed_hash:n}},h=function(e,t,r){var a=[],p=c.md.sha256.create();p.update(t);var n=p.digest().toHex(),i=c.hmac.create();i.start("sha256",t),i.update(e+":"+r);for(var o=i.digest().toHex(),u=0,h=0;h<32;h++)u=2*h,a.push(o.substring(2*h,u+2));var d=parseInt(a[0],16)/Math.pow(256,1),l=parseInt(a[1],16)/Math.pow(256,2),g=parseInt(a[2],16)/Math.pow(256,3),f=parseInt(a[3],16)/Math.pow(256,4),m=parseFloat(d.toString()).toFixed(12),v=parseFloat(l.toString()).toFixed(12),x=parseFloat(g.toString()).toFixed(12),w=parseFloat(f.toString()).toFixed(12);return{result:s(37*(+m+ +v+ +x+ +w),0),seed:n}},c=r.n(a)()},8237:function(e,t,r){"use strict";r.d(t,{e8:function(){return p},gN:function(){return u},II:function(){return c},PI:function(){return s}});r(2791);var a=r(184),s=function(e){var t=e.children;return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"lead",children:"This page does not send any data to the server. All of the calculations happen right in your browser."}),(0,a.jsx)("p",{children:"We've the following parameters:"}),t]})},p=function(){return(0,a.jsxs)("p",{children:["If you are interested in checking the code behind this, please open",(0,a.jsx)("b",{children:(0,a.jsx)("a",{href:"https://github.com/FaucetPayio/verify",children:" source code"})})]})},n=r(8683),i=r(4925),o=r(8182),u=function(e){var t=e.subTitle,r=e.title,s=e.children,p=e.className;return(0,a.jsxs)("div",{className:(0,o.Z)("inputWrapper",p),children:[(0,a.jsx)("p",{children:r}),s,(0,a.jsx)("small",{className:"text-secondary ",children:t})]})},h=["subTitle","title","className"],c=function(e){var t=e.subTitle,r=e.title,s=e.className,p=(0,i.Z)(e,h);return(0,a.jsx)(u,{subTitle:t,title:r,children:(0,a.jsx)("input",(0,n.Z)((0,n.Z)({},p),{},{className:(0,o.Z)("form-control me-sm-2",s),type:"text"}))})};r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p},5819:function(){}}]);
//# sourceMappingURL=842.6460376f.chunk.js.map