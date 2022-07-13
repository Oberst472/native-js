var h=Object.defineProperty;var u=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(u(o,typeof e!="symbol"?e+"":e,t),t);const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};p();const f=(o,{phone:e,name:t,isForm:a})=>`
        <div class="table-item">
                <span class="index table-item__index">${o} </span>
                <span class="table-item__text">${t}</span>
                <span class="table-item__text table-item__phone">${e}</span>
                <button class="table-item__btn btn--warning btn btn--circle" data-name="js-btn-ch" title="Change">&#9998;</button>
                <button class="table-item__btn btn--negative btn btn--circle" data-name="js-btn-del" title="Delete">&#10008;</button>
        </div>`,b=()=>`
            <form class="head-form" data-name="js-head-form">
                <label class="head-form__el">
                    <span class="title head-form__el-title">Name</span>
                    <input class="input" data-name="js-head-inp-n" type="text" placeholder="Ivan Pupkin">
                    <span class="error head-form__error">Name is empty :(</span>
                </label>
                
                <label class="head-form__el">
                    <span class="title head-form__el-title">Phone</span>
                    <input class="input" data-name="js-head-inp-p" type="text" placeholder="+987654321">
                    <span class="error head-form__error">Phone can contains to numbers, - and +</span>
                </label>
              
                <button type="submit" class="head-form__btn btn btn--positive" data-name="js-head-btn">Add</button>
            </form>`,_=o=>`
            <form class="change-form" data-name="js-form">
                <span class="index change-form__index">${o} </span>
                
                <label class="change-form__el">
                    <input class="input change-form__inp" data-name="js-inp-n" type="text" placeholder="name">
                    <span class="error change-form__error">Name is empty :(</span>
                </label>
                
                <label class="change-form__el">
                    <input class="input change-form__inp" data-name="js-inp-p" type="text" placeholder="phone">
                    <span class="error change-form__error">Phone can contains to numbers, - and +</span>
                </label>
              
                <button type="submit" class="btn btn--circle btn--positive" data-name="js-btn-s" title="Save">&#10004;</button>
                <button type="button" class="btn btn--circle btn--primary" data-name="js-btn-b" title="Back">&#10142;</button>
            </form>
        `;var g=[{name:"\u0412\u043E\u0432\u0430",phone:"87650095643",isForm:!1,id:1657702778722},{name:"\u0413\u0430\u043B\u0438\u043D\u0430 \u0421\u043C\u0438\u0442",phone:"+54387765452",isForm:!1,id:1657702789039},{name:"\u041B\u0430\u0432\u0440\u0438\u043D\u0435\u043D\u043A\u043E \u0420\u043E\u0431\u0435\u0440\u0442 \u0414\u0430\u0432\u0438\u0434\u043E\u0432\u0438\u0447",phone:"+54633897698",isForm:!1,id:1657702802135}];class v{constructor(){r(this,"clearItems",()=>{this.content.innerHTML=""});r(this,"createTextNode",(e,t)=>{const a=document.createElement("div");a.innerHTML=this.item(e,{...t}),this.addTextNodeListeners(a,e),this.content.appendChild(a)});r(this,"createFormNode",(e,t)=>{const a=document.createElement("div");a.innerHTML=this.form(e,{...t}),this.addFormNodeListeners(a,e,t),this.content.appendChild(a)});r(this,"createTableItem",()=>{this.clearItems(),this.newArr=this.items,this._items.forEach((e,t)=>e.isForm?this.createFormNode(t,e):this.createTextNode(t,e))});r(this,"addFormNodeListeners",(e,t,a)=>{const s=e.querySelector("[data-name=js-form]"),n=e.querySelector("[data-name=js-inp-n]"),i=e.querySelector("[data-name=js-inp-p]"),c=e.querySelector("[data-name=js-btn-s]"),l=e.querySelector("[data-name=js-btn-b]");s.addEventListener("submit",m=>this.saveForm({e:m,index:t,saveBtn:c,inpName:n,inpPhone:i})),l.addEventListener("click",()=>this.hideForm(t)),n.addEventListener("input",()=>this.changeErrorClass(n,!1)),i.addEventListener("input",()=>this.changeErrorClass(i,!1)),n.value=a.name,i.value=a.phone});r(this,"addHeadFormNodeListeners",e=>{const t=e.querySelector("[data-name=js-head-form]"),a=e.querySelector("[data-name=js-head-inp-n]"),s=e.querySelector("[data-name=js-head-inp-p]"),n=e.querySelector("[data-name=js-head-btn]");t.addEventListener("submit",i=>this.addItem(i,n,a,s)),a.addEventListener("input",()=>this.changeErrorClass(a,!1)),s.addEventListener("input",()=>this.changeErrorClass(s,!1))});r(this,"addTextNodeListeners",(e,t)=>{const a=e.querySelector("[data-name=js-btn-ch]"),s=e.querySelector("[data-name=js-btn-del]");a.addEventListener("click",()=>this.showForm(t)),s.addEventListener("click",()=>this.deleteItem(t))});r(this,"addItem",async(e,t,a,s)=>{e.preventDefault(),this.checkForm(a,s)&&(this.changeLoadingClass(t,!0),await new Promise(i=>setTimeout(i,1e3)),this.newArr.push({name:a.value,phone:s.value,isForm:!1}),this.items=this.newArr,a.value="",s.value="",this.changeLoadingClass(t,!1))});r(this,"deleteItem",e=>{this.newArr.splice(e,1),this.items=this.newArr});r(this,"showForm",e=>{this.newArr[e].isForm=!0,this.items=this.newArr});r(this,"hideForm",e=>{this.newArr[e].isForm=!1,this.items=this.newArr});r(this,"saveForm",async({e,index:t,saveBtn:a,inpName:s,inpPhone:n})=>{const i={name:s.value,phone:n.value,id:Date.now()};e.preventDefault(),this.checkForm(s,n)&&(this.changeLoadingClass(a,!0),await new Promise(l=>setTimeout(l,1e3)),this.newArr[t]={isForm:!1,...i},this.items=this.newArr)});r(this,"checkForm",(e,t)=>{const a=new RegExp("^[\\+ ]?[0-9-]+$");return e.value?t.value?a.test(t.value)?!0:(this.changeErrorClass(t,!0),!1):(this.changeErrorClass(t,!0),!1):(this.changeErrorClass(e,!0),!1)});r(this,"changeErrorClass",(e,t)=>{t?e.classList.add("input--error"):e.classList.remove("input--error")});r(this,"changeLoadingClass",(e,t)=>{t?e.classList.add("btn--loading"):e.classList.remove("btn--loading")});r(this,"createHeadForm",()=>{const e=document.createElement("div");e.innerHTML=this.headForm(),this.addHeadFormNodeListeners(e),this.head.appendChild(e)});this.head=document.querySelector(".table__head"),this.content=document.querySelector(".table__content"),this.item=f,this.headForm=b,this.form=_,this._items=g,this.newArr=[]}set items(e){this._items=e,this.createTableItem(),this._items.length?this.content.classList.remove("hide"):this.content.classList.add("hide")}get items(){return this._items}}const d=new v;d.createTableItem();d.createHeadForm();
