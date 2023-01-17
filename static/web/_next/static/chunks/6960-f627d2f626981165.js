"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6960],{73615:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(85893);n(67294);var i=n(94184),s=n.n(i);let r=e=>{let{status:t}=e,{type:n,icon:i,message:r}=t||{},l=s()({"status-container":!0,["status-".concat(n)]:n,empty:!r});return(0,a.jsxs)("span",{className:l,children:[i?(0,a.jsx)("span",{className:"status-icon",children:i}):null,r?(0,a.jsx)("span",{className:"status-message",children:r}):null]})};t.Z=r},79139:function(e,t,n){n.d(t,{A8:function(){return u},Kx:function(){return c},Sk:function(){return h},mG:function(){return d},nv:function(){return f},xA:function(){return m}});var a=n(85893);n(67294);var i=n(94184),s=n.n(i),r=n(79531),l=n(79915),o=n(73615);let c="default",u="password",d="numeric",h="textarea",m="url",f=e=>{let{className:t,disabled:n,fieldName:i,label:c,maxLength:f,onBlur:p,onChange:g,onPressEnter:b,pattern:y,placeholder:x,required:v,status:w,tip:j,type:P,useTrim:k,value:L}=e,N=e=>{if(g){let t=P===d?e:e.target.value;g({fieldName:i,value:k?t.trim():t})}},S=e=>{let t=e.target.value;p&&p({value:t})},C=()=>{b&&b()},T=r.Z,E={};P===h?(T=r.Z.TextArea,E={autoSize:!0}):P===u?(T=r.Z.Password,E={visibilityToggle:!0}):P===d?(T=l.Z,E={type:"number",min:1,max:10**f-1}):P===m&&(E={type:"url",pattern:y});let A="field-".concat(i),{type:O}=w||{},G=s()({"formfield-container":!0,"textfield-container":!0,["type-".concat(P)]:!0,required:v,["status-".concat(O)]:w});return(0,a.jsxs)("div",{className:G,children:[c?(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("label",{htmlFor:A,className:"formfield-label",children:c})}):null,(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsx)("div",{className:"input-group",children:(0,a.jsx)(T,{id:A,className:"field ".concat(t," ").concat(A),...E,...P!==d&&{allowClear:!0},placeholder:x,maxLength:f,onChange:N,onBlur:S,onPressEnter:C,disabled:n,value:L})}),(0,a.jsx)(o.E,{status:w}),(0,a.jsx)("p",{className:"field-tip",children:j})]})]})};f.defaultProps={className:"",disabled:!1,label:"",maxLength:255,placeholder:"",required:!1,status:null,tip:"",type:c,value:"",pattern:"",useTrim:!1,useTrimLead:!1,onSubmit:()=>{},onBlur:()=>{},onChange:()=>{},onPressEnter:()=>{}}},46551:function(e,t,n){n.d(t,{$7:function(){return p},Sk:function(){return m},xA:function(){return f}});var a=n(85893),i=n(71577),s=n(94184),r=n.n(s),l=n(67294),o=n(90745),c=n(41983),u=n(99519),d=n(73615),h=n(79139);let m="textarea",f="url",p=e=>{let{apiPath:t,configPath:n="",initialValue:s,useTrim:m,useTrimLead:f,...p}=e,[g,b]=(0,l.useState)(null),[y,x]=(0,l.useState)(!1),v=(0,l.useContext)(u.aC),{setFieldInConfigState:w}=v||{},j=null,{fieldName:P,required:k,tip:L,status:N,value:S,onChange:C,onSubmit:T}=p,E=()=>{b(null),x(!1),clearTimeout(j),j=null};(0,l.useEffect)(()=>{k&&(""===S||null===S)||S===s?x(!1):(E(),x(!0))},[S]);let A=e=>{let{fieldName:t,value:n}=e;if(C){let a=n;m?a=n.trim():f&&(a=n.replace(/^\s+/g,"")),C({fieldName:t,value:a})}},O=e=>{let{value:t}=e;C&&k&&""===t&&C({fieldName:P,value:s})},G=async()=>{(k&&""!==S||S!==s)&&(b((0,c.kg)(c.Jk)),await (0,o.Si)({apiPath:t,data:{value:S},onSuccess:()=>{w({fieldName:P,value:S,path:n}),b((0,c.kg)(c.zv))},onError:e=>{b((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),j=setTimeout(E,o.sI),T&&T())},M=r()({"textfield-with-submit-container":!0,submittable:y});return(0,a.jsxs)("div",{className:M,children:[(0,a.jsx)("div",{className:"textfield-component",children:(0,a.jsx)(h.nv,{...p,onSubmit:null,onBlur:O,onChange:A})}),(0,a.jsxs)("div",{className:"formfield-container lower-container",children:[(0,a.jsx)("p",{className:"label-spacer"}),(0,a.jsxs)("div",{className:"lower-content",children:[(0,a.jsx)("div",{className:"field-tip",children:L}),(0,a.jsx)(d.E,{status:N||g}),(0,a.jsx)("div",{className:"update-button-container",children:(0,a.jsx)(i.Z,{type:"primary",size:"small",className:"submit-button",onClick:G,disabled:!y,children:"Update"})})]})]})]})};p.defaultProps={configPath:"",initialValue:""}},6960:function(e,t,n){n.d(t,{l:function(){return W}});var a=n(85893),i=n(99519),s=n(82661),r=n(67294),l=n(45697),o=n.n(l),c=n(41664),u=n.n(c),d=n(9008),h=n.n(d),m=n(11699),f=n(11163),p=n(97183),g=n(14670),b=n(66516),y=n(26713),x=n(94199),v=n(71577),w=n(94184),j=n.n(w),P=n(5152),k=n.n(P),L=n(64777),N=n(70241),S=n(50738),C=n(46551),T=n(90745),E=n(79531),A=n(85402),O=n(41983);let{TextArea:G}=E.Z,M=e=>{let{open:t,handleClose:n}=e,[i,s]=(0,r.useState)(""),[l,o]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null);function d(){o(!1),u(null),n()}async function h(){o(!0);try{await (0,L.rQ)(L.e_,{data:{value:i},method:"POST",auth:!0}),u(O.zv),setTimeout(d,1e3)}catch(e){console.error(e),u(O.Un)}o(!1)}return(0,a.jsxs)(A.Z,{destroyOnClose:!0,width:600,title:"Post to Followers",open:t,onCancel:n,footer:[(0,a.jsx)(v.Z,{onClick:()=>n(),children:"Cancel"}),(0,a.jsx)(v.Z,{type:"primary",onClick:h,disabled:l||c,loading:l,children:(null==c?void 0:c.toUpperCase())||"Post"})],children:[(0,a.jsx)("h3",{children:"Tell the world about your future streaming plans or let your followers know to tune in."}),(0,a.jsx)(G,{placeholder:"I'm still live, come join me!",size:"large",showCount:!0,maxLength:500,style:{height:"150px",width:"100%"},onChange:function(e){s(e.target.value)}})]})},U=k()(()=>Promise.all([n.e(2074),n.e(1264)]).then(n.t.bind(n,63126,23)),{loadableGenerated:{webpack:()=>[63126]},ssr:!1}),D=k()(()=>Promise.all([n.e(2074),n.e(863)]).then(n.t.bind(n,50863,23)),{loadableGenerated:{webpack:()=>[50863]},ssr:!1}),q=k()(()=>Promise.all([n.e(2074),n.e(9073)]).then(n.t.bind(n,99073,23)),{loadableGenerated:{webpack:()=>[99073]},ssr:!1}),Z=k()(()=>Promise.all([n.e(2074),n.e(7090)]).then(n.t.bind(n,87090,23)),{loadableGenerated:{webpack:()=>[87090]},ssr:!1}),H=k()(()=>Promise.all([n.e(2074),n.e(4927)]).then(n.t.bind(n,64927,23)),{loadableGenerated:{webpack:()=>[64927]},ssr:!1}),F=k()(()=>Promise.all([n.e(2074),n.e(7434)]).then(n.t.bind(n,27434,23)),{loadableGenerated:{webpack:()=>[27434]},ssr:!1}),I=k()(()=>Promise.all([n.e(2074),n.e(3840)]).then(n.t.bind(n,3840,23)),{loadableGenerated:{webpack:()=>[3840]},ssr:!1}),R=k()(()=>Promise.all([n.e(2074),n.e(5672)]).then(n.t.bind(n,65672,23)),{loadableGenerated:{webpack:()=>[65672]},ssr:!1}),B=k()(()=>Promise.all([n.e(2074),n.e(5258)]).then(n.t.bind(n,85258,23)),{loadableGenerated:{webpack:()=>[85258]},ssr:!1}),_=k()(()=>Promise.all([n.e(2074),n.e(775)]).then(n.t.bind(n,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),z=e=>{let{children:t}=e,n=(0,r.useContext)(i.aC),{serverConfig:l,online:o,broadcaster:c,versionNumber:d}=n||{},{instanceDetails:w,chatDisabled:P,federation:k}=l,{enabled:E}=k,[A,O]=(0,r.useState)(""),[G,z]=(0,r.useState)(!1),W=(0,r.useContext)(s.k),V=(0,f.useRouter)(),{route:K}=V||{},{Header:Q,Footer:$,Content:X,Sider:J}=p.Z,[Y,ee]=(0,r.useState)(""),et=async()=>{try{let e=await (0,L.GR)(d);ee(e)}catch(t){console.log("==== error",t)}};(0,r.useEffect)(()=>{et()},[d]),(0,r.useEffect)(()=>{O(w.streamTitle)},[w]);let en=e=>{let{value:t}=e;O(t)},ea=()=>{z(!0)},ei=j()({"app-container":!0,online:o}),es=()=>{W.setMessage(null)},er=W.message?(0,a.jsx)(g.Z,{message:W.message,afterClose:es,banner:!0,closable:!0}):null,el=c?(0,N.wS)((0,m.Z)(new Date,new Date(c.time))):"",eo=o?(0,a.jsx)(H,{}):(0,a.jsx)(F,{}),ec=(0,a.jsxs)("div",{className:"online-status-indicator",children:[(0,a.jsx)("span",{className:"status-label",children:o?"Online ".concat(el):"Offline"}),(0,a.jsx)("span",{className:"status-icon",children:eo})]}),eu=[{label:(0,a.jsx)(u(),{href:"/admin/webhooks",children:"Webhooks"}),key:"webhooks"},{label:(0,a.jsx)(u(),{href:"/admin/access-tokens",children:"Access Tokens"}),key:"access-tokens"},{label:(0,a.jsx)(u(),{href:"/admin/actions",children:"External Actions"}),key:"actions"}],ed=[{label:(0,a.jsx)(u(),{href:"/admin/chat/messages",children:"Messages"}),key:"messages"},{label:(0,a.jsx)(u(),{href:"/admin/chat/users",children:"Users"}),key:"chat-users"},{label:(0,a.jsx)(u(),{href:"/admin/chat/emojis",children:"Emojis"}),key:"emojis"}],eh=[{label:(0,a.jsx)(u(),{href:"/admin/hardware-info",children:"Hardware"}),key:"hardware-info"},{label:(0,a.jsx)(u(),{href:"/admin/stream-health",children:"Stream Health"}),key:"stream-health"},{label:(0,a.jsx)(u(),{href:"/admin/logs",children:"Logs"}),key:"logs"},E&&{label:(0,a.jsx)(u(),{href:"/admin/federation/actions",children:"Social Actions"}),key:"federation-activities"}],em=[{label:(0,a.jsx)(u(),{href:"/admin/config/general",children:"General"}),key:"config-public-details"},{label:(0,a.jsx)(u(),{href:"/admin/config/server",children:"Server Setup"}),key:"config-server"},{label:(0,a.jsx)(u(),{href:"/admin/config-video",children:"Video"}),key:"config-video"},{label:(0,a.jsx)(u(),{href:"/admin/config-chat",children:"Chat"}),key:"config-chat"},{label:(0,a.jsx)(u(),{href:"/admin/config-federation",children:"Social"}),key:"config-federation"},{label:(0,a.jsx)(u(),{href:"/admin/config-notify",children:"Notifications"}),key:"config-notify"}],ef=[{label:(0,a.jsx)(u(),{href:"/admin",children:"Home"}),icon:(0,a.jsx)(D,{}),key:"home"},{label:(0,a.jsx)(u(),{href:"/admin/viewer-info",children:"Viewers"}),icon:(0,a.jsx)(q,{}),key:"viewer-info"},!P&&{label:(0,a.jsx)(u(),{href:"/admin/viewer-info",children:"Chat & Users"}),icon:(0,a.jsx)(R,{}),children:ed,key:"chat-and-users"},E&&{key:"fediverse-followers",label:(0,a.jsx)(u(),{href:"/admin/federation/followers",children:"Followers"}),icon:(0,a.jsx)("img",{alt:"fediverse icon",src:"/img/fediverse-black.png",width:"17rem",style:{opacity:.6,position:"relative",top:"-1px"}})},{key:"configuration",label:"Configuration",icon:(0,a.jsx)(U,{}),children:em},{key:"utilities",label:"Utilities",icon:(0,a.jsx)(Z,{}),children:eh},{key:"integrations",label:"Integrations",icon:(0,a.jsx)(B,{}),children:eu},Y&&{key:"upgrade",label:(0,a.jsx)(u(),{href:"/upgrade",children:"Upgrade to v".concat("".concat(Y)||"")})},{key:"help",label:(0,a.jsx)(u(),{href:"/admin/help",children:"Help"}),icon:(0,a.jsx)(I,{})}];return(0,a.jsxs)(p.Z,{className:ei,children:[(0,a.jsxs)(h(),{children:[(0,a.jsx)("title",{children:"Owncast Admin"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"})]}),(0,a.jsxs)(J,{width:240,className:"side-nav",children:[(0,a.jsxs)("h1",{className:"owncast-title",children:[(0,a.jsx)("span",{className:"logo-container",children:(0,a.jsx)(S.C,{variant:"simple"})}),(0,a.jsx)("span",{className:"title-label",children:"Owncast Admin"})]}),(0,a.jsx)(b.Z,{defaultSelectedKeys:[K.substring(1)||"home"],defaultOpenKeys:Y?["utilities-menu"]:[],mode:"inline",className:"menu-container",items:ef})]}),(0,a.jsxs)(p.Z,{className:"layout-main",children:[(0,a.jsxs)(Q,{className:"layout-header",children:[(0,a.jsx)(y.Z,{direction:"horizontal",children:(0,a.jsx)(x.Z,{title:"Compose post to your social followers",children:(0,a.jsx)(v.Z,{type:"link",icon:(0,a.jsx)(_,{}),size:"small",onClick:ea,style:{display:E?"block":"none",margin:"10px"},children:"Compose Post"})})}),(0,a.jsx)("div",{className:"global-stream-title-container",children:(0,a.jsx)(C.$7,{fieldName:"streamTitle",...T.$t,placeholder:"What are you streaming now? (Stream title)",value:A,initialValue:w.streamTitle,onChange:en})}),(0,a.jsx)(y.Z,{direction:"horizontal",children:ec})]}),er,(0,a.jsx)(X,{className:"main-content-container",children:t}),(0,a.jsx)($,{className:"footer-container",children:(0,a.jsxs)("a",{href:"https://owncast.online/?source=admin",target:"_blank",rel:"noopener noreferrer",children:["About Owncast v",d]})})]}),(0,a.jsx)(M,{open:G,handleClose:()=>z(!1)})]})};z.propTypes={children:o().element.isRequired};let W=e=>{let{page:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/main-layout.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/form-textfields.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-socialhandles.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-storage.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-edit-string-tags.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-video-variants.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-public-details.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/home.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/styles/admin/chat.css"}),(0,a.jsx)(i.ZP,{children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(z,{children:t})})})]})}},82661:function(e,t,n){n.d(t,{k:function(){return l}});var a=n(85893),i=n(67294),s=n(45697),r=n.n(s);let l=i.createContext({message:null,setMessage:e=>null}),o=e=>{let{children:t}=e,[n,s]=(0,i.useState)("");return(0,a.jsx)(l.Provider,{value:{message:n,setMessage:s},children:t})};o.propTypes={children:r().element.isRequired},t.Z=o},90745:function(e,t,n){n.d(t,{$t:function(){return k},$w:function(){return h},AA:function(){return o},AN:function(){return _},AP:function(){return g},BF:function(){return K},B_:function(){return X},CJ:function(){return b},CQ:function(){return v},Dg:function(){return B},EY:function(){return D},FE:function(){return V},HM:function(){return es},I$:function(){return el},IX:function(){return S},KB:function(){return E},Kl:function(){return z},LC:function(){return W},ME:function(){return M},P:function(){return q},RE:function(){return P},SS:function(){return ei},Si:function(){return j},Xc:function(){return Q},Xq:function(){return et},ZQ:function(){return C},_X:function(){return Z},c9:function(){return m},cf:function(){return y},cj:function(){return G},d$:function(){return c},dL:function(){return Y},dR:function(){return J},dj:function(){return R},gX:function(){return H},i3:function(){return eo},kB:function(){return I},lT:function(){return O},mv:function(){return em},nm:function(){return ee},os:function(){return x},oy:function(){return eh},pE:function(){return w},rE:function(){return A},rd:function(){return N},rs:function(){return L},sI:function(){return l},sv:function(){return f},t$:function(){return er},tQ:function(){return T},vv:function(){return p},wC:function(){return ec},x8:function(){return en},yC:function(){return ea},y_:function(){return U},yi:function(){return $},yj:function(){return F},z_:function(){return eu},zm:function(){return ed}});var a=n(85893),i=n(64777),s=n(79139),r=n(37174);let l=3e3,o="/pagecontent",c="/customstyles",u="/serverurl",d="/nsfw",h="/s3",m="/socialhandles",f="/video/streamlatencylevel",p="/video/streamoutputvariants",g="/directoryenabled",b="/chat/forbiddenusernames",y="/chat/suggestedusernames",x="/externalactions",v="/video/codec",w="/federation/blockdomains";async function j(e){let{apiPath:t,data:n,onSuccess:a,onError:s}=e,r=await (0,i.rQ)("".concat(i.ao).concat(t),{data:n,method:"POST",auth:!0});r.success&&a?a(r.message):s&&s(r.message)}let P={apiPath:"/name",configPath:"instanceDetails",maxLength:255,placeholder:"Owncast site name",label:"Name",tip:"The name of your Owncast server",required:!0,useTrimLead:!0},k={apiPath:"/streamtitle",configPath:"instanceDetails",maxLength:100,placeholder:"Doing cool things...",label:"Stream Title",tip:"What is your stream about today?"},L={apiPath:"/serversummary",configPath:"instanceDetails",maxLength:500,placeholder:"",label:"About",tip:"A brief blurb about you, your server, or what your stream is about."},N={apiPath:"/offlinemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"An optional message you can leave people when your stream is not live.",label:"Offline Message",tip:"An optional message you can leave people when your stream is not live."},S={apiPath:"/welcomemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"",label:"Welcome Message",tip:"A system chat message sent to viewers when they first connect to chat. Leave blank to disable."},C={apiPath:"/logo",configPath:"instanceDetails",maxLength:255,placeholder:"/img/mylogo.png",label:"Logo",tip:"Upload your logo if you have one (max size 2 MB). We recommend that you use a square image that is at least 256x256. SVGs are discouraged as they cannot be displayed on all social media platforms."},T={apiPath:"/key",configPath:"",maxLength:255,placeholder:"abc123",label:"Admin Password",tip:"Save this password somewhere safe, you will need it to login to the admin dashboard!",required:!0},E={apiPath:"/ffmpegpath",configPath:"",maxLength:255,placeholder:"/usr/local/bin/ffmpeg",label:"FFmpeg Path",tip:"Absolute file path of the FFMPEG application on your server",required:!0},A={apiPath:"/webserverport",configPath:"",maxLength:6,placeholder:"8080",label:"Owncast port",tip:"What port is your Owncast web server listening? Default is 8080",required:!0},O={apiPath:"/rtmpserverport",configPath:"",maxLength:6,placeholder:"1935",label:"RTMP port",tip:"What port should accept inbound broadcasts? Default is 1935",required:!0},G={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server.",type:s.xA,pattern:r.ax,useTrim:!0},M={apiPath:"/sockethostoverride",configPath:"",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Websocket host override",tip:"The direct URL of your Owncast server.",type:s.xA,pattern:r.ax,useTrim:!0},U={apiPath:"/tags",configPath:"instanceDetails",maxLength:24,placeholder:"Add a new tag",required:!0,label:"",tip:""},D={apiPath:d,configPath:"instanceDetails",label:"NSFW?",tip:"Turn this ON if you plan to steam explicit or adult content. Please respectfully set this flag so unexpected eyes won't accidentally see it in the Directory."},q={apiPath:g,configPath:"yp",label:"Enable directory",tip:"Turn this ON to request to show up in the directory."},Z={apiPath:"/hideviewercount",configPath:"",label:"Hide viewer count",tip:"Turn this ON to hide the viewer count the web page."},H={framerate:24,videoPassthrough:!1,videoBitrate:800,audioPassthrough:!0,audioBitrate:0,cpuUsageLevel:3,scaledHeight:null,scaledWidth:null,name:""},F={apiPath:"/chat/disable",configPath:"",label:"Chat",tip:"Turn the chat functionality on/off on your Owncast server.",useSubmit:!0},I={apiPath:"/chat/joinmessagesenabled",configPath:"",label:"Join Messages",tip:"Show when a viewer joins the chat.",useSubmit:!0},R={apiPath:"/chat/establishedusermode",configPath:"",label:"Established users only",tip:"Only users who have previously been established for some time may chat.",useSubmit:!0},B={apiPath:b,placeholder:"username",label:"Forbidden usernames",tip:"A list of words in chat usernames you disallow."},_={apiPath:y,placeholder:"username",label:"Default usernames",tip:"An optional list of chat usernames that new users get assigned. If the list holds less then 10 items, random names will be generated.  Users can change their usernames afterwards and the same username may be given out multple times.",min_not_reached:"At least 10 items are required for this feature.",no_entries:"The default name generator is used."},z={apiPath:"/federation/enable",configPath:"federation",label:"Enable Social Features",tip:"Send and receive activities on the Fediverse.",useSubmit:!0},W={apiPath:"/federation/private",configPath:"federation",label:"Private",tip:"Follow requests will require approval and only followers will see your activity.",useSubmit:!0},V={apiPath:"/federation/showengagement",configPath:"showEngagement",label:"Show engagement",tip:"Following, liking and sharing will appear in the chat feed.",useSubmit:!0},K={apiPath:"/federation/livemessage",configPath:"federation",maxLength:500,placeholder:"My stream has started, tune in!",label:"Now Live message",tip:"The message sent announcing that your live stream has begun. Tags will be automatically added. Leave blank to disable."},Q={apiPath:"/federation/username",configPath:"federation",maxLength:10,placeholder:"owncast",default:"owncast",label:"Username",tip:'The username used for sending and receiving activities from the Fediverse. For example, if you use "bob" as a username you would send messages to the fediverse from @bob@yourserver. Once people start following your instance you should not change this.'},$={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server is required to enable social features. Must use SSL (https). Once people start following your instance you should not change this.",type:s.xA,pattern:r.ax,useTrim:!0},X={apiPath:d,configPath:"instanceDetails",label:"Potentially NSFW",tip:"Turn this ON if you plan to steam explicit or adult content so previews of your stream can be marked as potentially sensitive."},J={apiPath:w,configPath:"federation",label:"Blocked domains",placeholder:"bad.domain.biz",tip:"You can block specific domains from interacting with you."},Y={audioBitrate:{min:600,max:1200,defaultValue:800,unit:"kbps",incrementBy:100,tip:"nothing to see here"},videoPassthrough:{tip:"If enabled, all other settings will be disabled. Otherwise configure as desired."},audioPassthrough:{tip:"If No is selected, then you should set your desired Audio Bitrate."},scaledWidth:{fieldName:"scaledWidth",label:"Resized Width",maxLength:4,placeholder:"1080",tip:"Optionally resize this content's width."},scaledHeight:{fieldName:"scaledHeight",label:"Resized Height",maxLength:4,placeholder:"720",tip:"Optionally resize this content's height."}},ee={min:24,max:120,defaultValue:24,unit:"fps",incrementBy:null,tip:"Reducing your framerate will decrease the amount of video that needs to be encoded and sent to your viewers, saving CPU and bandwidth at the expense of smoothness.  A lower value is generally is fine for most content."},et={[ee.min]:"".concat(ee.min," ").concat(ee.unit),25:" ",30:" ",50:" ",60:" ",90:" ",[ee.max]:"".concat(ee.max," ").concat(ee.unit)},en={[ee.min]:"".concat(ee.min,"fps - Good for film, presentations, music, low power/bandwidth servers."),25:"25fps - Good for film, presentations, music, low power/bandwidth servers.",30:"30fps - Good for slow/casual games, chat, general purpose.",50:"50fps - Good for fast/action games, sports, HD video.",60:"60fps - Good for fast/action games, sports, HD video.",90:"90fps - Good for newer fast games and hardware.",[ee.max]:"".concat(ee.max,"fps - Experimental, use at your own risk!")},ea={min:400,max:6e3,defaultValue:1200,unit:"kbps",incrementBy:100,tip:"The overall quality of your stream is generally impacted most by bitrate."},ei={fieldName:"name",label:"Name",maxLength:15,placeholder:"HD or Low",tip:"Human-readable name for for displaying in the player."},es={[ea.min]:{style:{marginLeft:"24px"},label:"".concat(ea.min," ").concat(ea.unit)},3e3:3e3,4500:4500,[ea.max]:{style:{marginLeft:"-10px"},label:"".concat(ea.max," ").concat(ea.unit)}},er={1:{style:{marginLeft:"15px"},label:(0,a.jsx)("p",{children:"lowest"})},2:"",3:"",4:"",5:{style:{marginLeft:"-15px"},label:(0,a.jsx)("p",{children:"highest"})}},el={1:"Lowest hardware usage - lowest quality video",2:"Low hardware usage - low quality video",3:"Medium hardware usage - average quality video",4:"High hardware usage - high quality video",5:"Highest hardware usage - higher quality video"},eo={VIDEO_HEIGHT:1080,VIDEO_BITRATE:3e3,HELP_TEXT:"You have only set one video quality variant. If your server has the computing resources, consider adding another, lower-quality variant, so more people can view your content!"},ec={url:"",platform:""},eu="OTHER_SOCIAL_HANDLE_OPTION",ed={accessKey:{fieldName:"accessKey",label:"Access Key",maxLength:255,placeholder:"access key 123",tip:""},acl:{fieldName:"acl",label:"ACL",maxLength:255,placeholder:"",tip:"Optional specific access control value to add to your content.  Generally not required."},bucket:{fieldName:"bucket",label:"Bucket",maxLength:255,placeholder:"bucket 123",tip:"Create a new bucket for each Owncast instance you may be running."},endpoint:{fieldName:"endpoint",label:"Endpoint",maxLength:255,placeholder:"https://your.s3.provider.endpoint.com",tip:'The full URL (with "https://") endpoint from your storage provider.',useTrim:!0,type:s.xA,pattern:r.ax},region:{fieldName:"region",label:"Region",maxLength:255,placeholder:"region 123",tip:""},secret:{fieldName:"secret",label:"Secret key",maxLength:255,placeholder:"your secret key",tip:""},servingEndpoint:{fieldName:"servingEndpoint",label:"Serving Endpoint",maxLength:255,placeholder:"http://cdn.ss3.provider.endpoint.com",tip:"Optional URL that content should be accessed from instead of the default.  Used with CDNs and specific storage providers. Generally not required.",type:s.xA,pattern:r.ax,useTrim:!0},forcePathStyle:{fieldName:"forcePathStyle",label:"Force path-style",tip:"If your S3 provider doesn't support virtual-hosted-style URLs set this to ON (i.e. Oracle Cloud Object Storage)"}},eh={webhookUrl:{fieldName:"webhook",label:"Webhook URL",maxLength:255,placeholder:"https://discord.com/api/webhooks/837/jf38-6iNEv",tip:"The webhook assigned to your channel.",type:s.xA,pattern:r.ax,useTrim:!0},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:300,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},em={goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}}},70241:function(e,t,n){n.d(t,{AB:function(){return c},Qr:function(){return r},t5:function(){return s},wS:function(){return o}});var a=n(42238),i=n.n(a);function s(e){let t=e.split(":");t[t.length-1]="";let n=t.join(":");return"[::1]"===(n=n.slice(0,n.length-1))||"127.0.0.1"===n?"Localhost":n}function r(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function l(e,t,n){return String(t.repeat(n)+e).slice(-n)}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Number.isFinite(+e)?Math.abs(e):0,n=Math.floor(t/86400),a=n>0?"".concat(n," day").concat(n>1?"s":""," "):"",i=Math.floor(t/3600%24),s=i||n?l("".concat(i,":"),"0",3):"",r=l("".concat(Math.floor(t/60%60),":"),"0",3),o=l("".concat(Math.floor(t%60)),"0",2);return a+s+r+o}function c(e){let t=i()(e),{device:n,os:a,browser:s}=t,{major:r,name:l}=s,{version:o,name:c}=a,{model:u,type:d}=n;return"libmpv"===e?"mpv media player":l&&r&&c?"".concat(l," ").concat(r," on ").concat(c," ").concat(o,"\n  ").concat(u||d?" (".concat(u||d,")"):""):e}},41983:function(e,t,n){n.d(t,{Jk:function(){return h},Un:function(){return u},dG:function(){return f},kg:function(){return g},zv:function(){return m}});var a=n(85893),i=n(5152),s=n.n(i);let r=s()(()=>Promise.all([n.e(2074),n.e(7431)]).then(n.t.bind(n,37431,23)),{loadableGenerated:{webpack:()=>[37431]},ssr:!1}),l=s()(()=>Promise.all([n.e(2074),n.e(2461)]).then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),o=s()(()=>Promise.all([n.e(2074),n.e(628)]).then(n.t.bind(n,628,23)),{loadableGenerated:{webpack:()=>[628]},ssr:!1}),c=s()(()=>Promise.all([n.e(2074),n.e(7282)]).then(n.t.bind(n,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),u="error",d="invalid",h="proessing",m="success",f="warning",p={[m]:{type:m,icon:(0,a.jsx)(r,{style:{color:"green"}}),message:"Success!"},[u]:{type:u,icon:(0,a.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[d]:{type:d,icon:(0,a.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[h]:{type:h,icon:(0,a.jsx)(o,{}),message:""},[f]:{type:f,icon:(0,a.jsx)(c,{style:{color:"#fc0"}}),message:""}};function g(e,t){return e&&p[e]?t?{type:e,icon:p[e].icon,message:t}:p[e]:null}},99519:function(e,t,n){n.d(t,{aC:function(){return d}});var a=n(85893),i=n(67294),s=n(45697),r=n.n(s),l=n(64777),o=n(90745);let c={streamKeys:[],adminPassword:"",instanceDetails:{customStyles:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[o.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},u={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0}},d=i.createContext({...u,serverConfig:c,setFieldInConfigState:e=>null}),h=e=>{let{children:t}=e,[n,s]=(0,i.useState)(u),[r,o]=(0,i.useState)(c),h=async()=>{try{let e=await (0,l.rQ)(l.Q_);s({...e})}catch(t){}},m=async()=>{try{let e=await (0,l.rQ)(l.bl);o(e)}catch(t){}},f=e=>{let{fieldName:t,value:n,path:a}=e,i=a?{...r,[a]:{...r[a],[t]:n}}:{...r,[t]:n};o(i)};(0,i.useEffect)(()=>{let e=null;return h(),e=setInterval(h,l.NE),m(),()=>{clearInterval(e)}},[]);let p={...n,serverConfig:r,setFieldInConfigState:f};return(0,a.jsx)(d.Provider,{value:p,children:t})};h.propTypes={children:r().element.isRequired},t.ZP=h},37174:function(e,t,n){n.d(t,{Kf:function(){return s},ax:function(){return a},bu:function(){return r},jv:function(){return i}});let a="https?://.*";function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let n=new URL(e);if(""===n.protocol||""===n.hostname||!t.includes(n.protocol))return!1}catch(a){return!1}return!0}function s(e,t){e.startsWith("@")&&(e=e.slice(1));let n=e.split(/:|@/),[a,i,s]=n;return console.log({account:e,protocol:t,service:a,user:i,host:s}),a===t&&3===n.length&&!!a&&!!i&&!!s}function r(e){if(!e.startsWith("matrix:"))return!1;(e=e.slice(7)).startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[n,a]=t;return 2===t.length&&!!n&&!!a}}}]);
//# sourceMappingURL=6960-f627d2f626981165.js.map