(this["webpackJsonpreact-warrior"]=this["webpackJsonpreact-warrior"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),i=a.n(o),r=a(8),s=a(1),l=a(2),m=a(3),u=a(4),v=(a(6),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,o=t.addMovieToWillWatch,i=t.removeMovieFromWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),i(a)}},"Remove Will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),o(a)}},"Will Watch"),c.a.createElement("button",{onClick:n.bind(this,a),className:"btn btn-danger",disabled:this.state.willWatch},"delete"))))}}]),a}(n.Component)),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){return a(e)}},o=function(e){return t===e?"active":""};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:"nav-link ".concat(o("popularity.desc")),onClick:n("popularity.desc")},"Popularity")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:"nav-link  ".concat(o("revenue.desc")),onClick:n("revenue.desc")},"Revenue")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:"nav-link ".concat(o("vote_average.desc")),onClick:n("vote_average.desc")},"Vote average")))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onNextButtonClick,a=e.onPrevButtonClick,n=this.props,o=n.currentPage,i=n.totalPages,r=1===o?"disabled":"",s=o===i?"disabled":"";return c.a.createElement("nav",{"aria-label":"Page navigation",className:"d-flex justify-content-between"},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"page-item ".concat(r)},c.a.createElement("span",{className:"page-link",onClick:a},"Previous")),c.a.createElement("li",{className:"page-item ".concat(s)},c.a.createElement("span",{className:"page-link",onClick:t},"Next"))),c.a.createElement("h4",null,"page ",o," of ",i))}}]),a}(n.Component),p="https://api.themoviedb.org/3",b="3f4ca4f3a9750da53450646ced312397",g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getMovies=function(){fetch("".concat(p,"/discover/movie?api_key=").concat(b,"&sort_by=").concat(e.state.sort_by)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,totalPages:t.total_pages,currentPage:t.page})}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(r.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.onNextButtonClick=function(t){if(e.state.currentPage===e.state.totalPages)return!1;fetch("".concat(p,"/discover/movie?api_key=").concat(b,"&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.currentPage+1)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,totalPages:t.total_pages,currentPage:t.page})}))},e.onPrevButtonClick=function(t){if(1===e.state.currentPage)return!1;fetch("".concat(p,"/discover/movie?api_key=").concat(b,"&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.currentPage-1)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,totalPages:t.total_pages,currentPage:t.page})}))},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",totalPages:0,currentPage:1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row  mb-4 mt-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(d,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t,a){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(v,{movie:t,removeMovie:e.removeMovie,removeMovieFromWillWatch:e.removeMovieFromWillWatch,addMovieToWillWatch:e.addMovieToWillWatch}))})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("h4",null,"Will watch: ",this.state.moviesWillWatch.length),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("div",{className:"d-flex justify-content-between"}))))),c.a.createElement("div",{className:"row  mb-4 mt-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(h,{onNextButtonClick:this.onNextButtonClick,onPrevButtonClick:this.onPrevButtonClick,totalPages:this.state.totalPages,currentPage:this.state.currentPage}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c94f4ffa.chunk.js.map