(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t){t.exports=[{id:1,alt:"Dr. Mario",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/dr_mario.png",clicked:!1},{id:2,alt:"Mario",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mario.png",clicked:!1},{id:3,alt:"Luigi",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/luigi.png",clicked:!1},{id:4,alt:"Bowser",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/bowser.png",clicked:!1},{id:5,alt:"Peach",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/peach.png",clicked:!1},{id:6,alt:"Yoshi",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/yoshi.png",clicked:!1},{id:7,alt:"Donkey Kong",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/donkey_kong.png",clicked:!1},{id:8,alt:"Captain Falcon",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/captain_falcon.png",clicked:!1},{id:9,alt:"Ganondorf",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ganondorf.png",clicked:!1},{id:10,alt:"Falco",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/falco.png",clicked:!1},{id:11,alt:"Fox",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/fox.png",clicked:!1},{id:12,alt:"Ness",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ness.png",clicked:!1},{id:13,alt:"Ice Climbers",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/ice_climbers.png",clicked:!1},{id:14,alt:"Kirby",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/kirby.png",clicked:!1},{id:15,alt:"Samus",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/samus.png",clicked:!1},{id:16,alt:"Zelda",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/zelda.png",clicked:!1},{id:17,alt:"Link",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/link.png",clicked:!1},{id:18,alt:"Young Link",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/young_link.png",clicked:!1},{id:19,alt:"Pichu",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pichu.png",clicked:!1},{id:20,alt:"Pikachu",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/pikachu.png",clicked:!1},{id:21,alt:"Jigglypuff",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/jigglypuff.png",clicked:!1},{id:22,alt:"Mewtwo",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mewtwo.png",clicked:!1},{id:23,alt:"Mr. Game & Watch",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/mr_game_and_watch.png",clicked:!1},{id:24,alt:"Marth",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/marth.png",clicked:!1},{id:25,alt:"Roy",src:"https://www.smashbros.com/assets_v2/img/fighter/thumb_a/roy.png",clicked:!1}]},,,,,,,,function(t,e,s){t.exports=s(18)},,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),c=s.n(a),i=s(8),r=s.n(i),n=s(2),o=s(3),h=s(5),l=s(4),m=s(6),u=function(t){return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"This is the title.")))},g=function(t){return c.a.createElement("img",{className:"character-image",src:t.src,alt:t.alt,"data-id":t.id,"data-clicked":t.clicked,onClick:function(){return t.handleClick(t.id,t.alt)}})},d=s(1),w=function(t){function e(){var t,s;Object(n.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(s=Object(h.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={images:d,currentScore:0,wins:0},s.shuffle=function(t){for(var e=t.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),a=t[e];t[e]=t[s],t[s]=a}return t},s.handleClick=function(t,e){console.log("clicked",t,e);var a=s.state.images.map(function(e){return e.id===t&&(!0===e.clicked?s.badClick(e):s.goodClick(e)),e});s.setState({images:s.shuffle(a)})},s.checkIfWin=function(){console.log(s.state.currentScore,d.length),s.state.currentScore===d.length&&s.winGame()},s}return Object(m.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffle(this.state.images)})}},{key:"goodClick",value:function(t){t.clicked=!0,this.setState({currentScore:this.state.currentScore+1})}},{key:"componentDidUpdate",value:function(t,e){console.log(e),e.currentScore!==this.state.currentScore&&this.checkIfWin()}},{key:"badClick",value:function(t){alert("You already selected "+t.alt),this.resetGame()}},{key:"winGame",value:function(){this.state.currentScore===d.length&&(console.log("win game"),this.setState({wins:this.state.wins+1},this.resetGame()))}},{key:"resetGame",value:function(){console.log("reset game");var t=this.state.images.map(function(t){return t.clicked=!1,t});this.setState({currentScore:0,images:this.shuffle(t)})}},{key:"render",value:function(){var t=this;return c.a.createElement("section",null,c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Current Score: ",this.state.currentScore,"/25"),c.a.createElement("p",null,"Wins: ",this.state.wins)),c.a.createElement("div",{className:"container character-container"},this.state.images.map(function(e){return c.a.createElement(g,{key:e.id,id:e.id,src:e.src,alt:e.alt,handleClick:t.handleClick})})))}}]),e}(a.Component),p=(s(15),s(16),s(17),function(t){function e(){return Object(n.a)(this,e),Object(h.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(w,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.749c9888.chunk.js.map