(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,475254,258541,e=>{"use strict";var t=e.i(271645);let r=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},a=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:s="",children:l,iconNode:c,...u},d)=>(0,t.createElement)("svg",{ref:d,...i,width:r,height:r,stroke:e,strokeWidth:n?24*Number(o)/Number(r):o,className:a("lucide",s),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]]));e.s(["default",0,o],258541),e.s(["default",0,(e,i)=>{let n=(0,t.forwardRef)(({className:n,...s},l)=>(0,t.createElement)(o,{ref:l,iconNode:i,className:a(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...s}));return n.displayName=r(e),n}],475254)},820783,e=>{"use strict";var t=e.i(271645);function r(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function a(...e){return t=>{let a=!1,i=e.map(e=>{let i=r(e,t);return a||"function"!=typeof i||(a=!0),i});if(a)return()=>{for(let t=0;t<i.length;t++){let a=i[t];"function"==typeof a?a():r(e[t],null)}}}}e.s(["composeRefs",0,a,"useComposedRefs",0,function(...e){return t.useCallback(a(...e),e)}])},991918,e=>{"use strict";var t=e.i(271645),r=e.i(820783),a=e.i(843476),i=Symbol.for("react.lazy"),o=t[" use ".trim().toString()];function n(e){var t;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===i&&"_payload"in e&&"object"==typeof(t=e._payload)&&null!==t&&"then"in t}function s(e){var i;let s,l=(i=e,(s=t.forwardRef((e,a)=>{let{children:i,...s}=e;if(n(i)&&"function"==typeof o&&(i=o(i._payload)),t.isValidElement(i)){var l;let e,o,n=(l=i,(o=(e=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.ref:(o=(e=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.props.ref:l.props.ref||l.ref),c=function(e,t){let r={...t};for(let a in t){let i=e[a],o=t[a];/^on[A-Z]/.test(a)?i&&o?r[a]=(...e)=>{let t=o(...e);return i(...e),t}:i&&(r[a]=i):"style"===a?r[a]={...i,...o}:"className"===a&&(r[a]=[i,o].filter(Boolean).join(" "))}return{...e,...r}}(s,i.props);return i.type!==t.Fragment&&(c.ref=a?(0,r.composeRefs)(a,n):n),t.cloneElement(i,c)}return t.Children.count(i)>1?t.Children.only(null):null})).displayName=`${i}.SlotClone`,s),c=t.forwardRef((e,r)=>{let{children:i,...s}=e;n(i)&&"function"==typeof o&&(i=o(i._payload));let c=t.Children.toArray(i),d=c.find(u);if(d){let e=d.props.children,i=c.map(r=>r!==d?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,a.jsx)(l,{...s,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,i):null})}return(0,a.jsx)(l,{...s,ref:r,children:i})});return c.displayName=`${e}.Slot`,c}var l=s("Slot"),c=Symbol("radix.slottable");function u(e){return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===c}e.s(["Slot",0,l,"createSlot",0,s])},519455,225913,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(991918),i=e.i(207670);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,n=i.clsx,s=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:s}=t,l=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],a=null==s?void 0:s[e];if(null===t)return null;let n=o(t)||o(a);return i[e][n]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return n(e,l,null==t||null==(a=t.compoundVariants)?void 0:a.reduce((e,t)=>{let{class:r,className:a,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...c}[t]):({...s,...c})[t]===r})?[...e,r,a]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)};e.s(["cva",0,s],225913);var l=e.i(975157);let c=s("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=r.forwardRef(({className:e,variant:r,size:i,asChild:o=!1,...n},s)=>{let u=o?a.Slot:"button";return(0,t.jsx)(u,{className:(0,l.cn)(c({variant:r,size:i,className:e})),ref:s,...n})});u.displayName="Button",e.s(["Button",0,u,"buttonVariants",0,c],519455)},235318,e=>{"use strict";var t=e.i(301792);let r=null;function a(e){r?r(e):t.logger.warn("Referral success handler not set. Make sure ReferralSuccessProvider is mounted.")}e.s(["checkForDebugReferralModal",0,function(){"true"===new URLSearchParams(window.location.search).get("debug-referral")&&setTimeout(()=>{a({creditsAwarded:10,referrerInfo:{name:"John Doe",photo_url:void 0}})},1e3)},"setGlobalReferralSuccessHandler",0,function(e){r=e},"showReferralSuccessGlobal",0,a])},95187,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={callServer:function(){return o.callServer},createServerReference:function(){return s.createServerReference},findSourceMapURL:function(){return n.findSourceMapURL}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let o=e.r(132120),n=e.r(92245),s=e.r(235326)},557951,180257,578285,305576,763328,837632,444600,713654,393004,337236,791221,582531,e=>{"use strict";var t=e.i(843476),r=e.i(271645);e.i(151718);var a=e.i(544073),a=a,i=a,o=a,n=a;e.s(["onAuthStateChanged",()=>n.z],180257);var n=a,s=a;e.s(["onIdTokenChanged",()=>s.x],578285);var s=a,l=a;e.s(["GoogleAuthProvider",()=>l.Y],305576);var l=a,c=a;e.s(["GithubAuthProvider",()=>c.Z],763328);var c=a,u=a;e.s(["signInWithPopup",()=>u.d],837632);var u=a,d=a,f=a,p=a,h=a,m=a,g=a;e.s(["OAuthProvider",()=>g._],444600);var g=a,y=a,w=a,v=e.i(283414);let b="blink_session_cache";function _(){localStorage.removeItem(b)}e.s(["clearSessionCache",0,_,"persistSession",0,function(e,t){localStorage.setItem(b,JSON.stringify({uid:e,data:t,ts:Date.now()}))},"readCachedSession",0,function(e){let t=localStorage.getItem(b);if(t)try{let r=JSON.parse(t);if(r.uid!==e||Date.now()-r.ts>6048e5)return;return r.data}catch{localStorage.removeItem(b);return}}],713654);let x={"auth/email-already-in-use":"An account with this email already exists","auth/invalid-email":"Please enter a valid email address","auth/user-not-found":"Incorrect email or password","auth/wrong-password":"Incorrect email or password","auth/weak-password":"Password should be at least 6 characters","auth/popup-closed-by-user":"Sign in was cancelled","auth/account-exists-with-different-credential":"Try signing in with a different method","auth/invalid-credential":"Invalid login credentials","auth/operation-not-allowed":"This sign-in method is not available","auth/requires-recent-login":"Please sign in again to continue","auth/too-many-requests":"Too many attempts. Please try again later","auth/user-disabled":"This account has been disabled","auth/invalid-verification-code":"Invalid verification code","auth/invalid-verification-id":"Invalid verification","auth/captcha-check-failed":"Captcha verification failed","auth/provider-already-linked":"Account already linked","auth/network-request-failed":"Network error. Please check your connection","auth/needs-email-signin-first":"Please sign in with email first to link your accounts","auth/email-not-verified":"Please verify your email before signing in",default:"Something went wrong. Please try again"};var k=e.i(95187);let E=(0,k.createServerReference)("40c577beb429f6c69bb8dda8828175cf3ad0bf04b3",k.callServer,void 0,k.findSourceMapURL,"sendVerificationEmail");e.s(["sendVerificationEmail",0,E],393004);let S="blink_ref",I={set(e){let t=new Date;t.setTime(t.getTime()+2592e6);let r=`expires=${t.toUTCString()}`;document.cookie=`${S}=${e};${r};path=/;SameSite=Lax${"https:"===window.location.protocol?";Secure":""}`},get(){let e=S+"=",t=decodeURIComponent(document.cookie).split(";");for(let r=0;r<t.length;r++){let a=t[r];for(;" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return null},clear(){document.cookie=`${S}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`}};e.s(["clientCookies",0,I],337236),e.i(247167);let C={workerUrl:"https://blink-geolocation.kai-96c.workers.dev",timeout:5e3};e.s(["GEOFENCED_COUNTRIES",0,["IN","RU","PK","NG","BD","BR","EG","PH","NP","MA","BY","LK","ET","GH","TN","TH","IQ","AR","RS","GE","UG","AZ","LB","SO","KH","KG","MG","CM","ID","VN","UZ","DZ","CI","BJ","TR","YE","KE","LY","CD","MY","AO","BF","BI","CF","CG","DJ","ER","GM","GN","GW","LR","LS","MW","ML","MR","MZ","NE","RW","SD","SL","SS","SZ","TD","TG","ZM","ZW","NA","GA","ZA","AF","LA","MM","TJ","TM","BT","CN","MX","BO","GT","HN","HT","NI","SV","VE","PY","CU","CO","PE","EC","DO","JM","MD","UA"],"GEOLOCATION_API",0,C,"GEOLOCATION_CACHE",0,{staleTime:864e5,gcTime:864e5,retry:1,retryDelay:1e3},"GEO_APPROVAL_COOKIE",0,{name:"blink_geo_approved",maxAge:864e5,value:"true"}],791221);var A=e.i(235318);function T(){return navigator.userAgent}function O(){try{localStorage.removeItem("blink_referral_ua")}catch(e){}}function R(){return T()===function(){try{return localStorage.getItem("blink_referral_ua")}catch(e){return null}}()}e.s(["clearReferralUserAgent",0,O,"getUserAgent",0,T,"isSameBrowserAsReferral",0,R,"storeReferralUserAgent",0,function(){try{localStorage.setItem("blink_referral_ua",T())}catch(e){}}],582531);var N=e.i(301792);let D=(0,r.createContext)({user:null,token:null,isLoading:!0,sessionReady:!1,signIn:async()=>{},signUp:async()=>({email:"",userId:""}),signInWithGoogle:async()=>{},signInWithGitHub:async()=>{},signInWithApple:async()=>{},signInWithMicrosoft:async()=>{},signOut:async()=>{},sendPasswordResetEmail:async()=>{},updateProfile:async()=>{},checkEmailVerification:async()=>!1,getIdToken:async()=>null});async function P(){try{let e=new AbortController,t=setTimeout(()=>e.abort(),2e3),r=await fetch(C.workerUrl,{method:"GET",headers:{"Content-Type":"application/json"},signal:e.signal});if(clearTimeout(t),!r.ok)return void N.logger.warn(`[GEO] Cloudflare worker returned ${r.status} - continuing without geo`);let a=await r.json();if(!a?.success||!a?.data?.country_name)return void N.logger.warn("[GEO] Cloudflare worker response missing country_name - continuing without geo");let i=a.data;return N.logger.info(`[GEO] Got geo from Cloudflare worker: ${i.country_name} / ${i.city||"unknown city"}`),{country_name:i.country_name||void 0,country_code:i.country_code||void 0,city:i.city||void 0,region:i.region||void 0,region_code:i.region_code||void 0,postal_code:i.postal_code||void 0,latitude:null!=i.latitude?i.latitude:void 0,longitude:null!=i.longitude?i.longitude:void 0,timezone:i.timezone||void 0}}catch(e){e instanceof Error&&"AbortError"===e.name?N.logger.warn("[GEO] Cloudflare worker timed out after 2s - continuing without geo"):N.logger.warn("[GEO] Failed to fetch geo - continuing without geo:",e);return}}let $=null,U=null,j=null,G=0,L=0,M=!1,F=null,W=e=>{let t=e.uid.slice(-16);return{id:e.uid,email:e.email,displayName:e.displayName||e.email?.split("@")[0]||"User",photoURL:e.photoURL,username:t}},z=async(e,t=!1,r,a)=>{if(j===e.uid)return!0;if($&&U===e.uid)return $;if($&&U!==e.uid){if(await $,j===e.uid)return!0;if($&&U===e.uid)return $}U=e.uid,$=B(e,t,r,a);try{return await $}finally{$=null,U=null}},B=async(e,t,r,a)=>{try{N.logger.info(`🔄 syncUserWithDatabase: Starting for user ${e.uid}, emailVerified: ${t}`);let i=await e.getIdToken(),o=e.uid.slice(-16),n=r||I.get();N.logger.info(`🍪 syncUserWithDatabase: Referral code from cookie: ${n}`);let s=T(),l=R(),c=await P();N.logger.info(`🌍 syncUserWithDatabase: Geo for signup: ${c?.country_name||"unknown"}`);let u=window.location.pathname,d=u.startsWith("/sign-up")?"sign_up_page":u.startsWith("/sign-in")?"sign_in_page":u.startsWith("/auth")?"auth_page":"app",f=await fetch("/api/users/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({email:e.email,name:e.displayName,photo_url:e.photoURL,username:o,email_verified:t,referred_by:n,user_agent:s,is_same_browser:l,provider_id:e.providerData[0]?.providerId||null,geoip:c,signup_source:d})});if(!f.ok){let e=await f.text().catch(()=>"");return N.logger.error(`[AUTH] User sync failed: HTTP ${f.status} | body: ${e}`),!1}let p=await f.json();p.referralSuccess&&(0,A.showReferralSuccessGlobal)(p.referralSuccess);let h=p.usage?.monthly_credits_limit===0,m=p.referralSuccess?.creditsAwarded>0;return p.isNewUser&&h&&!m&&(N.logger.info(`[FREE_PLAN_AB] New user ${e.uid} in no-free-plan cohort, dispatching pricing modal event`),setTimeout(()=>{window.dispatchEvent(new CustomEvent("open-pricing-modal"))},500)),n&&(I.clear(),O()),await V(i),a?.(),await Z(e),j=e.uid,!0}catch(e){return!1}},V=async e=>{try{let t=await fetch("/api/auth/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e})});t.ok||await t.json()}catch(e){}},Z=async e=>{try{let t=await e.getIdToken(),r=await fetch("/api/auth/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:t})});if(r.ok){let e=await r.json(),t={access_token:e.access_token,refresh_token:e.refresh_token,token_type:"Bearer",expires_in:e.expires_in||900,refresh_expires_in:e.refresh_expires_in,created_at:Date.now()};localStorage.setItem("blink_tokens",JSON.stringify(t))}}catch(e){}},H=async()=>{try{await fetch("/api/auth/session",{method:"DELETE"})}catch(e){}};async function J(){return v.auth?v.auth.currentUser?v.auth.currentUser.getIdToken():new Promise(e=>{let t=setTimeout(()=>{r(),e(null)},1e4),r=(0,n.z)(v.auth,a=>{r(),clearTimeout(t),e(a?a.getIdToken():null)})}):null}let Y="blink_auth_user";function K(){let e=localStorage.getItem(Y);if(!e)return null;try{let t=JSON.parse(e);if(!t.id||Date.now()-(t._ts??0)>6048e5)return null;return t}catch{return null}}e.s(["AuthProvider",0,function({children:e}){let[b,k]=(0,r.useState)(null),[S,I]=(0,r.useState)(null),[C,A]=(0,r.useState)(!0),[T,O]=(0,r.useState)(()=>!!K()),R=e=>{e?localStorage.setItem(Y,JSON.stringify({...e,_ts:Date.now()})):localStorage.removeItem(Y),k(e)};(0,r.useEffect)(()=>{let e=K();e&&(k(e),A(!1))},[]);let P=(0,r.useRef)(null);(0,r.useEffect)(()=>(P.current=setTimeout(()=>A(!1),5e3),()=>{P.current&&clearTimeout(P.current)}),[]),(0,r.useEffect)(()=>{if(v.auth)return(0,s.x)(v.auth,async e=>{if(!M)if(e){let t=await e.getIdToken();I(t),Date.now()-G>864e5&&(G=Date.now(),V(t).then(()=>O(!0)).catch(()=>{})),Date.now()-L>36e5&&(L=Date.now(),Z(e).catch(()=>{}))}else I(null)})},[]),(0,r.useEffect)(()=>{if(!v.auth)return void A(!1);let e=(0,n.z)(v.auth,async e=>{try{if(P.current&&(clearTimeout(P.current),P.current=null),M)return void A(!1);if(e){let t=e.providerData.some(e=>e.providerId===l.Y.PROVIDER_ID||e.providerId===c.Z.PROVIDER_ID||"apple.com"===e.providerId||"microsoft.com"===e.providerId);R(W(e)),A(!1),z(e,t,void 0,()=>O(!0)).then(t=>{t||N.logger.warn(`Failed to sync user ${e.uid} with database — will retry on next auth event`)}).catch(e=>{})}else{let e=!!K();if(R(null),A(!1),e&&!document.cookie.includes("__auth_init=")){let e=window.location.pathname;if("/"!==e&&"/auth"!==e&&"/sign-in"!==e&&"/sign-up"!==e){let t=encodeURIComponent(e+window.location.search);window.location.href=`/sign-in?redirect=${t}`}}}}catch(t){e&&R(W(e)),A(!1)}});return()=>e()},[]);let $=e=>{let t=e.code||"default",r=Error(x[t]||x.default);return r.code=t,r},U=async e=>{try{let t=await fetch(`/api/users/check-verification?email=${encodeURIComponent(e)}`);if(t.ok)return(await t.json()).verified||!1;return!1}catch(e){return!0}},F=async(e,t)=>{try{if(!await U(e)){let e=Error("Please verify your email before signing in");throw e.code="auth/email-not-verified",e}if(!v.auth)throw Error("Firebase Auth not available");let r=await (0,a.ac)(v.auth,e,t);R(W(r.user))}catch(e){throw $(e)}},B=async(e,t)=>{try{if(!v.auth)throw Error("Firebase Auth not available");let r=(await (0,i.ab)(v.auth,e,t)).user,a=await E({email:r.email,userId:r.uid});if(!a.success){try{await (0,w.G)(r)}catch(e){}throw Error(a.error||"Failed to send verification email")}return await (0,o.D)(v.auth),{email:r.email,userId:r.uid}}catch(e){throw $(e)}},q=async(e,t)=>{if("auth/account-exists-with-different-credential"!==e.code)throw $(e);let r=e.customData?.email;if(!r)throw $(e);try{let a;if(!v.auth)throw Error("Firebase Auth not available");let i=await (0,p.ag)(v.auth,r);if(!i.length)throw $(e);let o=null;if(t instanceof l.Y?o=l.Y.credentialFromError(e):t instanceof c.Z?o=c.Z.credentialFromError(e):t instanceof g._&&(o=g._.credentialFromError(e)),!o)throw $(e);if(i.includes(l.Y.PROVIDER_ID))a=await (0,u.d)(v.auth,new l.Y);else if(i.includes(c.Z.PROVIDER_ID))a=await (0,u.d)(v.auth,new c.Z);else if(i.includes("apple.com")){let e=new g._("apple.com");e.addScope("email"),e.addScope("name"),a=await (0,u.d)(v.auth,e)}else if(i.includes("microsoft.com")){let e=new g._("microsoft.com");e.addScope("email"),e.addScope("profile"),a=await (0,u.d)(v.auth,e)}else if(i.includes(m.W.PROVIDER_ID)){let e=Error(x["auth/needs-email-signin-first"]);throw e.code="auth/needs-email-signin-first",e}else throw $(e);if(a.user)return await (0,h.a3)(a.user,o),R(W(a.user)),a;throw $(e)}catch(t){if(t.code&&t.code!==e.code)throw $(t);throw $(e)}},Q=async()=>{try{if(!v.auth)throw Error("Firebase Auth not available");let e=new l.Y;e.addScope("profile"),e.addScope("email"),e.setCustomParameters({prompt:"select_account"});let t=await (0,u.d)(v.auth,e);R(W(t.user))}catch(e){await q(e,new l.Y)}},X=async()=>{try{if(!v.auth)throw Error("Firebase Auth not available");let e=new c.Z;e.addScope("read:user"),e.setCustomParameters({allow_signup:"true"});let t=await (0,u.d)(v.auth,e),r=(0,y.ar)(t);if(r?.isNewUser||!t.user.displayName){let e=r?.profile;if(e){let r=e.login,a=e.name||r||t.user.email?.split("@")[0]||"User";try{await (0,f.al)(t.user,{displayName:a})}catch(e){}}}R(W(t.user))}catch(e){await q(e,new c.Z)}},ee=async()=>{let e=new g._("apple.com");e.addScope("email"),e.addScope("name");try{if(!v.auth)throw Error("Firebase Auth not available");let t=await (0,u.d)(v.auth,e);R(W(t.user))}catch(t){await q(t,e)}},et=async()=>{let e=new g._("microsoft.com");e.addScope("email"),e.addScope("profile");try{if(!v.auth)throw Error("Firebase Auth not available");let t=await (0,u.d)(v.auth,e);R(W(t.user))}catch(t){await q(t,e)}},er=async()=>{try{for(let e of(await H(),document.cookie="workspace_slug=;path=/;max-age=0",document.cookie="session=;path=/;max-age=0",localStorage.removeItem("blink_tokens"),localStorage.removeItem(Y),_(),Object.keys(localStorage)))e.startsWith("blink_tokens_proj_")&&localStorage.removeItem(e);if(j=null,!v.auth)throw Error("Firebase Auth not available");await (0,o.D)(v.auth),R(null),window.location.href="/"}catch(e){throw e}},ea=async e=>{try{if(!v.auth)throw Error("Firebase Auth not available");await (0,d.a6)(v.auth,e)}catch(e){throw $(e)}},ei=async({displayName:e,photoURL:t})=>{try{if(!v.auth)throw Error("Firebase Auth not available");let r=v.auth.currentUser;if(r){let a={};void 0!==e&&(a.displayName=e),void 0!==t&&(a.photoURL=t),await (0,f.al)(r,a),j=null,await z(r),v.auth.currentUser?.uid===r.uid&&R(W(r))}}catch(e){throw e}};return(0,t.jsx)(D.Provider,{value:{user:b,token:S,isLoading:C,sessionReady:T,signIn:F,signUp:B,signInWithGoogle:Q,signInWithGitHub:X,signInWithApple:ee,signInWithMicrosoft:et,signOut:er,sendPasswordResetEmail:ea,updateProfile:ei,checkEmailVerification:U,getIdToken:J},children:e})},"setAuthContextSuppression",0,e=>{M=e,F&&(clearTimeout(F),F=null),e&&(F=setTimeout(()=>{M&&(M=!1)},3e4))},"useAuth",0,()=>(0,r.useContext)(D)],557951)},618566,(e,t,r)=>{t.exports=e.r(976562)},705766,e=>{"use strict";let t,r;var a,i=e.i(271645);let o={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?c(n,o):o+"{"+c(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=c(n,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=c.p?c.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},u={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function f(e){let t,r,a=this||{},i=e.call?e(a.p):e;return((e,t,r,a,i)=>{var o;let f=d(e),p=u[f]||(u[f]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(f));if(!u[p]){let t=f!==e?e:(e=>{let t,r,a=[{}];for(;t=n.exec(e.replace(s,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);u[p]=c(i?{["@keyframes "+p]:t}:t,r?"":"."+p)}let h=r&&u.g?u.g:null;return r&&(u.g=u[p]),o=u[p],h?t.data=t.data.replace(h,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),p})(i.unshift?i.raw?(t=[].slice.call(arguments,1),r=a.p,i.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o})(a.target),a.g,a.o,a.k)}f.bind({g:1});let p,h,m,g=f.bind({k:1});function y(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;r.p=Object.assign({theme:h&&h()},s),r.o=/ *go\d+/.test(l),s.className=f.apply(r,a)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),m&&c[0]&&m(s),p(c,s)}return t?t(i):i}}var w=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),b=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},_="default",x=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return x(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},k=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},S={},I=(e,t=_)=>{S[t]=x(S[t]||E,e),k.forEach(([e,r])=>{e===t&&r(S[t])})},C=e=>Object.keys(S).forEach(t=>I(e,t)),A=(e=_)=>t=>{I(t,e)},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={},t=_)=>{let[r,a]=(0,i.useState)(S[t]||E),o=(0,i.useRef)(S[t]);(0,i.useEffect)(()=>(o.current!==S[t]&&a(S[t]),k.push([t,a]),()=>{let e=k.findIndex(([e])=>e===t);e>-1&&k.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,a,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...r,toasts:n}},R=e=>(t,r)=>{let a,i=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||v()}))(t,e,r);return A(i.toasterId||(a=i.id,Object.keys(S).find(e=>S[e].toasts.some(e=>e.id===a))))({type:2,toast:i}),i.id},N=(e,t)=>R("blank")(e,t);N.error=R("error"),N.success=R("success"),N.loading=R("loading"),N.custom=R("custom"),N.dismiss=(e,t)=>{let r={type:3,toastId:e};t?A(t)(r):C(r)},N.dismissAll=e=>N.dismiss(void 0,e),N.remove=(e,t)=>{let r={type:4,toastId:e};t?A(t)(r):C(r)},N.removeAll=e=>N.remove(void 0,e),N.promise=(e,t,r)=>{let a=N.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?w(t.success,e):void 0;return i?N.success(i,{id:a,...r,...null==r?void 0:r.success}):N.dismiss(a),e}).catch(e=>{let i=t.error?w(t.error,e):void 0;i?N.error(i,{id:a,...r,...null==r?void 0:r.error}):N.dismiss(a)}),e};var D=1e3,P=(e,t="default")=>{let{toasts:r,pausedAt:a}=O(e,t),o=(0,i.useRef)(new Map).current,n=(0,i.useCallback)((e,t=D)=>{if(o.has(e))return;let r=setTimeout(()=>{o.delete(e),s({type:4,toastId:e})},t);o.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),i=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&N.dismiss(r.id);return}return setTimeout(()=>N.dismiss(r.id,t),a)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let s=(0,i.useCallback)(A(t),[t]),l=(0,i.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),c=(0,i.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),u=(0,i.useCallback)(()=>{a&&s({type:6,time:Date.now()})},[a,s]),d=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=t||{},n=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},$=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,j=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,F=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=y("div")`
  position: absolute;
`,V=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(H,null,t):t:"blank"===r?null:i.createElement(V,null,i.createElement(M,{...a}),"loading"!==r&&i.createElement(B,null,"error"===r?i.createElement(G,{...a}):i.createElement(z,{...a})))},Y=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,i]=b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(J,{toast:e}),s=i.createElement(K,{...e.ariaProps},w(e.message,e));return i.createElement(Y,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):i.createElement(i.Fragment,null,n,s))});a=i.createElement,c.p=void 0,p=a,h=void 0,m=void 0;var Q=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let n=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:n,className:t,style:r},o)},X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;e.s(["CheckmarkIcon",0,z,"ErrorIcon",0,G,"LoaderIcon",0,M,"ToastBar",0,q,"ToastIcon",0,J,"Toaster",0,({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,toasterId:n,containerStyle:s,containerClassName:l})=>{let{toasts:c,handlers:u}=P(r,n);return i.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(r=>{let n,s,l=r.position||t,c=u.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}),d=(n=l.includes("top"),s=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...s});return i.createElement(Q,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?X:"",style:d},"custom"===r.type?w(r.message,r):o?o(r):i.createElement(q,{toast:r,position:l}))}))},"default",0,N,"resolveValue",0,w,"toast",0,N,"useToaster",0,P,"useToasterStore",0,O],705766)}]);