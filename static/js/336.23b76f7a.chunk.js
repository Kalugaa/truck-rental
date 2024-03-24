"use strict";(self.webpackChunktruck_rental=self.webpackChunktruck_rental||[]).push([[336],{301:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var r=t(5043),o=t(3003);const i=e=>e.campers.data||[];var c,a,s,l,h,d,x,u,p,m,g,f,b,j,k=t(5184),y=t(9265),A=t(8454),v=t(7528),w=t(197);const F=w.Ay.form(c||(c=(0,v.A)(["\nwidth:360px;\n"]))),C=w.Ay.input(a||(a=(0,v.A)(["\n    background-color: #f7f7f7;\n    border: none;\n    border-radius: 10px;\n    font-size: 16px;\n    line-height: 1.25;\n    outline: none;\n    padding: 18px 18px 18px 44px;\n    width: 100%;\n    color: rgba(16, 24, 40);\n    opacity: 0.6;\n    \n    &:focus {\n        opacity: 1;\n    }\n"]))),S=w.Ay.label(s||(s=(0,v.A)(["\ncolor: #10182899;\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n    position: relative;\n    margin-bottom: 32px;\n    width: 100%;\n    min-width: 150px;\n"]))),I=w.Ay.svg(l||(l=(0,v.A)(["\nfill: #fff;\nstroke: currentColor;\n&.map{\n    left: 18px;\n    position: absolute;\n    bottom: 18px;\n}\n\n"]))),z=w.Ay.p(h||(h=(0,v.A)(["\nfont-family: Inter;\nfont-size: 16px;\nfont-weight: 500;\nline-height: 24px;\ntext-align: left;\ncolor: rgba(71, 84, 103, 1);\nmargin-bottom: 14px;\n"]))),T=w.Ay.h2(d||(d=(0,v.A)(["\nfont-size: 20px;\nfont-weight: 600;\nline-height: 24px;\ntext-align: left;\nmargin-bottom: 24px;\n\n"]))),L=w.Ay.hr(x||(x=(0,v.A)(["\nborder-color: rgba(16, 24, 40, 0.1);\nmargin-bottom: 24px;\n"]))),V=w.Ay.ul(u||(u=(0,v.A)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 10px;\nmargin-bottom: 32px;\n\n&.vehicle-type{\n    margin-bottom: 64px ;\n}\n"]))),N=w.Ay.li(p||(p=(0,v.A)(["\n\n"]))),M=w.Ay.label(m||(m=(0,v.A)(["\nalign-items: center;\n    border: 1px solid #10182833;\n    border-radius: 10px;\n    color: #101828;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n    font-weight: 500;\n    height: 95px;\n    justify-content: center;\n    line-height: 1.25;\n    row-gap: 8px;\n    text-align: center;\n    width: 112px;\n"]))),_=w.Ay.input(g||(g=(0,v.A)([" \n   transition: border-color 0.3s ease-in-out;\n    display: none;\n\n&:checked:hover ~ ","{\n     border-color: rgba(228, 72, 72, 1)}\n\n    &:checked + ","{\n        border-color: rgba(228, 72, 72, 1);\n    }\n     &:hover + ","{\n        border-color: rgba(228, 72, 72, 0.5);\n    }\n    "])),M,M,M),D=(0,w.Ay)(_)(f||(f=(0,v.A)([""]))),E=w.Ay.button(b||(b=(0,v.A)(["\ncursor: pointer;\nwidth: 166px;\nheight: 56px;\npadding: 16px 40px 16px 40px;\nborder-radius: 200px;\nborder: none;\ncolor: #FFFFFF;\nmargin-bottom: 15px;\n background-color: rgba(228,72,72, 0.6);\n     transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background-color: rgb(228, 72, 72);\n  }\n"]))),R=w.Ay.button(j||(j=(0,v.A)(["\ndisplay: block;\ncursor: pointer;\nwidth: 90px;\nheight: 30px;\nborder-radius: 200px;\nborder: none;\ncolor: #FFFFFF;\nalign-self: center;\n background-color: rgba(228,72,72, 0.6);\n     transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background-color: rgb(228, 72, 72);\n  }\n"])));var W=t(579);const q=e=>{let{handleFilterChange:n,handleResetFilter:t}=e;const[o,i]=(0,r.useState)(""),[c,a]=(0,r.useState)({ac:!1,automatic:!1,kitchen:!1,tv:!1,bathroom:!1}),[s,l]=(0,r.useState)(""),[h,d]=(0,r.useState)(!1),x=e=>{const{name:n,checked:t}=e.target;d(!0),a({...c,[n]:t})},u=e=>{const{value:n}=e.target;d(!0),l(n)};return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(F,{children:[(0,W.jsxs)(S,{children:["Location",(0,W.jsx)(I,{className:"map",width:18,height:20,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-map")})}),(0,W.jsx)(C,{type:"text",placeholder:"City",name:"filter",value:o,onChange:e=>{const{value:n}=e.target;d(!0),i(n)}})]}),(0,W.jsx)(z,{children:"Filters"}),(0,W.jsx)(T,{children:"Vehicle equipment"}),(0,W.jsx)(L,{}),(0,W.jsxs)(V,{children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(_,{type:"checkbox",id:"ac",name:"ac",onChange:x,value:c.ac,checked:c.ac?"checked":""}),(0,W.jsxs)(M,{htmlFor:"ac",children:[(0,W.jsx)(I,{width:32,height:32,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-ac")})}),"AC"]})]}),(0,W.jsxs)(N,{children:[(0,W.jsx)(_,{type:"checkbox",id:"automatic",name:"automatic",onChange:x,value:c.automatic,checked:c.automatic?"checked":""}),(0,W.jsxs)(M,{htmlFor:"automatic",children:[(0,W.jsx)(I,{width:32,height:32,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-transmission")})}),"Automatic"]})]}),(0,W.jsxs)(N,{children:[(0,W.jsx)(_,{type:"checkbox",id:"kitchen",name:"kitchen",onChange:x,value:c.kitchen,checked:c.kitchen?"checked":""}),"                        ",(0,W.jsxs)(M,{htmlFor:"kitchen",children:[(0,W.jsx)(I,{width:32,height:32,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-kitchen")})}),"Kitchen"]})]}),(0,W.jsxs)(N,{children:[(0,W.jsx)(_,{type:"checkbox",id:"tv",name:"tv",onChange:x,value:c.tv,checked:c.tv?"checked":""}),"                        ",(0,W.jsxs)(M,{htmlFor:"tv",children:[(0,W.jsx)(I,{width:32,height:32,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-tv")})}),"TV"]})]}),(0,W.jsxs)(N,{children:[(0,W.jsx)(_,{type:"checkbox",id:"bathroom",name:"bathroom",onChange:x,value:c.bathroom,checked:c.bathroom?"checked":""}),"                        ",(0,W.jsxs)(M,{htmlFor:"bathroom",children:[(0,W.jsx)(I,{width:32,height:32,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-shower")})}),"Shower/WC"]})]})]}),(0,W.jsx)(T,{children:"Vehicle type"}),(0,W.jsx)(L,{}),(0,W.jsxs)(V,{className:"vehicle-type",children:[(0,W.jsxs)(N,{children:[(0,W.jsx)(D,{type:"radio",id:"panelTruck",name:"form",onChange:u,value:"panelTruck",checked:"panelTruck"===s?"checked":""}),(0,W.jsxs)(M,{htmlFor:"panelTruck",children:[(0,W.jsx)(I,{width:40,height:28,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-camper1")})}),"Van"]})]}),(0,W.jsxs)(N,{children:[(0,W.jsx)(D,{type:"radio",id:"fullyIntegrated",name:"form",onChange:u,value:"fullyIntegrated",checked:"fullyIntegrated"===s?"checked":""}),(0,W.jsxs)(M,{htmlFor:"fullyIntegrated",children:[(0,W.jsx)(I,{width:40,height:28,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-camper2")})}),"Fully Integrated"]})]}),(0,W.jsxs)(N,{children:[(0,W.jsx)(D,{type:"radio",id:"alcove",name:"form",onChange:u,value:"alcove",checked:"alcove"===s?"checked":""}),(0,W.jsxs)(M,{htmlFor:"alcove",children:[(0,W.jsx)(I,{width:40,height:28,children:(0,W.jsx)("use",{href:"".concat(A.A,"#icon-camper3")})}),"Alcove"]})]})]}),(0,W.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,W.jsx)(E,{onClick:e=>{e.preventDefault();const t={location:o,details:c,form:s};d(!0),n(t)},children:"Search"}),h&&(0,W.jsx)(R,{onClick:e=>{e.preventDefault(),i(""),a({ac:!1,automatic:!1,kitchen:!1,tv:!1,bathroom:!1}),l(""),d(!1),t()},children:"reset filter"})]})]})})};var K,B;const G=w.Ay.div(K||(K=(0,v.A)(["\nmargin: 50px auto 15px auto;\nmax-width: 145px;\n"]))),H=w.Ay.button(B||(B=(0,v.A)(["\nfont-family: Inter;\nfont-size: 16px;\nfont-weight: 500;\nline-height: 24px;\nletter-spacing: -0.08px;\ncursor: pointer;\n\nwidth: 100%;\nheight: 56px;\nborder-radius: 200px;\nborder: 1px solid rgba(71, 84, 103, 0.2);\nbackground-color: inherit;\ncolor: #101828;\ntransition: border 0.3s ease-in-out;\n\n&:hover{\nborder: 1px solid rgba(228, 72, 72, 1)\n}\n"]))),J=e=>{let{loadMoreItems:n}=e;return(0,W.jsx)(G,{children:(0,W.jsx)(H,{onClick:n,className:"load-more-btn",children:"Load More"})})};var O,P;const Q=w.Ay.div(O||(O=(0,v.A)(["\nmargin-top: 300px;\nwidth: 100%;\n\n"]))),U=w.Ay.h1(P||(P=(0,v.A)(["\nfont-family: inherit;\ntext-align: center;\n"]))),X=()=>(0,W.jsx)(Q,{children:(0,W.jsx)(U,{children:"No campers found. Change your  search criteria or reset filter"})}),Y=()=>{const e=(0,o.wA)(),n=(0,o.d4)(i),[t,c]=(0,r.useState)([]),[a,s]=(0,r.useState)(1),[l]=(0,r.useState)(4),[h,d]=(0,r.useState)(null);(0,r.useEffect)((()=>{e((0,k.L)())}),[e]),(0,r.useEffect)((()=>{if(h){const e=((e,n)=>e.filter((e=>{if(n.location&&!e.location.toLowerCase().includes(n.location.toLowerCase()))return!1;const t=n.details;if(t){if(t.ac&&(!e.details||e.details.airConditioner<1))return!1;if(t.automatic&&"automatic"!==e.transmission)return!1;if(t.kitchen&&(!e.details||e.details.kitchen<1))return!1;if(t.tv&&(!e.details||e.details.TV<1))return!1;if(t.bathroom&&(!e.details||e.details.bathroom<1))return!1}return!(null===e.form||!e.form.includes(n.form))})))(n,h);c([...e])}else c(n);s(1)}),[n,h]);const x=a*l,u=Array.isArray(t)?t:[];return(0,W.jsxs)("div",{style:{display:"flex",gap:64,justifyContent:"center"},children:[(0,W.jsx)("div",{children:(0,W.jsx)(q,{handleFilterChange:e=>{d(e)},handleResetFilter:()=>{d(null)}})}),(0,W.jsxs)("div",{style:{minWidth:888},children:[(0,W.jsx)("ul",{children:u.length>0?u.slice(0,x).map((e=>(0,W.jsx)(y.A,{camper:e},e._id))):(0,W.jsx)(X,{})}),u.length>x&&(0,W.jsx)(J,{loadMoreItems:()=>{s((e=>e+1))}})]})]})}}}]);
//# sourceMappingURL=336.23b76f7a.chunk.js.map