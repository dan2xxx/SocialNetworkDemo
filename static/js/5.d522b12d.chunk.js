(this["webpackJsonpreact-lessons"]=this["webpackJsonpreact-lessons"]||[]).push([[5],{100:function(t,e,r){"use strict";r.r(e);var n=r(6),s=r(33),o=r(14),l=r(97),i=r(96);e.default=Object(o.d)(Object(n.b)((function(t){return{userData:Object(l.c)(t),isFetching:Object(l.b)(t),followInProgress:Object(l.a)(t)}}),{getUsers:s.f,startFollow:s.d,stopFollow:s.i,cleanUserList:s.b,nextPage:s.g}))(i.a)},94:function(t,e,r){t.exports={moreButton:"User_moreButton__1LvF6",center:"User_center__UDwpw",isFetchingGif:"User_isFetchingGif__RILtd"}},95:function(t,e,r){t.exports={userElement:"UserItem_userElement__3QTuv",mediumAvatar:"UserItem_mediumAvatar__3M4Sm",userName:"UserItem_userName__6ExXS",userBio:"UserItem_userBio__1JoyJ",button:"UserItem_button__2DF1H"}},96:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(1),s=r(25),o=r(26),l=r(46),i=r(28),u=r(27),c=r(0),a=r.n(c),f=r(95),p=r.n(f),h=r(34),d=r(12),m=(r(10),function(t){var e=t.user,r="",s=t.followInProgress.some((function(t){return t===e.id}));return 0==e.followStatus?r=Object(n.jsx)("button",{onClick:function(){return t.startFollow(e.id,e)},className:p.a.button,disabled:s,children:"Follow"}):1==e.followStatus&&(r=Object(n.jsx)("button",{onClick:function(){return t.stopFollow(e.id,e)},className:p.a.button,disabled:s,children:"Unfollow"})),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:p.a.userElement,children:[Object(n.jsxs)(d.b,{to:"profile/"+e.id,children:[" ",Object(n.jsx)("img",{className:p.a.mediumAvatar,src:null!=e.avatarUrl?e.avatarUrl:h.a})]}),Object(n.jsx)("div",{className:p.a.userName,children:Object(n.jsx)(d.b,{to:"profile/"+e.id,children:e.name})}),Object(n.jsx)("div",{className:p.a.userBio,children:e.bio}),r]})})}),b=r(94),j=r.n(b),g=function(t){return Object(n.jsxs)("div",{children:[t.userData.userList.map((function(e){return Object(n.jsx)(m,{chgFollowStatus:t.chgFollowStatus,user:e,followInProgress:t.followInProgress,setFollowProgress:t.setFollowProgress,startFollow:t.startFollow,stopFollow:t.stopFollow},e.id)})),Object(n.jsx)("div",{className:j.a.center,children:t.isFetching?null:Object(n.jsx)("button",{onClick:function(){t.moreUsers(t.userData.page+1)},className:j.a.moreButton,children:"more..."})})]})},w=r(23),v=function(t){Object(i.a)(r,t);var e=Object(u.a)(r);function r(t){var n;return Object(s.a)(this,r),(n=e.call(this,t)).moreUsers=n.moreUsers.bind(Object(l.a)(n)),n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.cleanUserList(),this.moreUsers(1)}},{key:"moreUsers",value:function(t){this.props.getUsers(t,this.props.userData.userList)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(g,{userData:this.props.userData,moreUsers:this.moreUsers,chgFollowStatus:this.props.chgFollowStatus,isFetching:this.props.isFetching,followInProgress:this.props.followInProgress,setFollowProgress:this.props.setFollowProgress,startFollow:this.props.startFollow,stopFollow:this.props.stopFollow}),Object(n.jsx)("div",{className:j.a.isFetchingGif,children:this.props.isFetching?Object(n.jsx)(w.a,{}):null})]})}}]),r}(a.a.Component)},97:function(t,e,r){"use strict";function n(t,e){return t===e}function s(t,e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var n=e.length,s=0;s<n;s++)if(!t(e[s],r[s]))return!1;return!0}function o(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var r=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return e}r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return u})),r.d(e,"c",(function(){return c}));var l=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];var l=0,i=n.pop(),u=o(n),c=t.apply(void 0,[function(){return l++,i.apply(null,arguments)}].concat(r)),a=t((function(){for(var t=[],e=u.length,r=0;r<e;r++)t.push(u[r].apply(null,arguments));return c.apply(null,t)}));return a.resultFunc=i,a.dependencies=u,a.recomputations=function(){return l},a.resetRecomputations=function(){return l=0},a}}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=null,o=null;return function(){return s(e,r,arguments)||(o=t.apply(null,arguments)),r=arguments,o}}));var i=function(t){return t.userData.isFetching},u=function(t){return t.userData.followInProgress},c=l((function(t){return t.userData}),(function(t){return console.log("selector"),t}))}}]);
//# sourceMappingURL=5.d522b12d.chunk.js.map