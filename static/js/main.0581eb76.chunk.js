(this["webpackJsonpmemory-react"]=this["webpackJsonpmemory-react"]||[]).push([[0],{12:function(t,e,r){},14:function(t,e,r){"use strict";r.r(e);var c=r(1),i=r.n(c),s=r(7),n=r.n(s),a=(r(12),r(5)),d=r(6),o=r(0);function h(t){return t.show?Object(o.jsxs)("div",{id:"gameOver",children:[Object(o.jsx)("div",{children:"Congratulations, you finished the game!"}),Object(o.jsx)("button",{id:"restart",onClick:t.handleRestart,children:"Play again"})]}):Object(o.jsx)(c.Fragment,{})}function l(t){return Object(o.jsxs)("div",{id:t.card.id,className:"card ".concat(t.card.flipped?"flip":""),onClick:function(){return t.handleFlip(t.card)},children:[Object(o.jsx)("div",{className:"card_front",children:Object(o.jsx)("img",{className:"icon",src:"assets/images/".concat(t.card.icon,".png"),alt:t.card.icon})}),Object(o.jsx)("div",{className:"card_back",children:"</>"})]})}function f(t){return Object(o.jsx)("div",{id:"gameBoard",children:t.cards.map((function(e,r){return Object(o.jsx)(l,{handleFlip:t.handleFlip,card:e},r)}))})}var u={lockMode:!1,firstCard:null,secondCard:null,techs:["bootstrap","css","electron","firebase","html","javascript","jquery","mongo","node","react"],cards:null,setCard:function(t){var e=this.cards.filter((function(e){return e.id===t}))[0];return console.log(e),!e.flipped&&!this.lockMode&&(this.firstCard?(this.secondCard=e,this.secondCard.flipped=!0,this.lockMode=!0,!0):(this.firstCard=e,this.firstCard.flipped=!0,!0))},checkMatch:function(){return!(!this.firstCard||!this.secondCard)&&this.firstCard.icon===this.secondCard.icon},clearCards:function(){this.firstCard=null,this.secondCard=null,this.lockMode=!1},unflipCards:function(){this.firstCard.flipped=!1,this.secondCard.flipped=!1,this.clearCards()},checkGameOver:function(){return 0===this.cards.filter((function(t){return!t.flipped})).length},createCardsFromTechs:function(){var t=this;return this.cards=[],this.techs.forEach((function(e){t.cards.push(t.createPairFromTech(e))})),this.cards=this.cards.flatMap((function(t){return t})),this.shuffleCards(),this.cards},createPairFromTech:function(t){return[{id:this.createIdWithTech(t),icon:t,flipped:!1},{id:this.createIdWithTech(t),icon:t,flipped:!1}]},createIdWithTech:function(t){return t+parseInt(1e3*Math.random())},shuffleCards:function(t){for(var e=this.cards.length,r=0;0!==e;){r=Math.floor(Math.random()*e),e--;var c=[this.cards[e],this.cards[r]];this.cards[r]=c[0],this.cards[e]=c[1]}},flipCard:function(t,e,r){var c=this;this.setCard(t)&&this.secondCard&&(this.checkMatch()?(this.clearCards(),this.checkGameOver()&&e()):setTimeout((function(){c.unflipCards(),r()}),1e3))}};function j(){var t=Object(c.useState)(!1),e=Object(d.a)(t,2),r=e[0],i=e[1],s=Object(c.useState)([]),n=Object(d.a)(s,2),l=n[0],j=n[1];return Object(c.useEffect)((function(){j(u.createCardsFromTechs())}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(f,{handleFlip:function(t){u.flipCard(t.id,(function(){i(!0)}),(function(){j(Object(a.a)(u.cards))})),j(Object(a.a)(u.cards))},cards:l}),Object(o.jsx)(h,{show:r,handleRestart:function(){u.clearCards(),j(u.createCardsFromTechs()),i(!1)}})]})}var p=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(e){var r=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,n=e.getTTFB;r(t),c(t),i(t),s(t),n(t)}))};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.0581eb76.chunk.js.map