(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[13],{133:function(e,t,a){"use strict";a.r(t);var C=a(11),c=a(0),l=a.n(c),n=(a(99),a(54)),r=a.n(n),s=a.p+"static/media/react-tech-icon.12dca02a.svg",o=a.p+"static/media/js-tech-icon.896c4dfd.svg",i=a.p+"static/media/git-tech-icon.0b284efc.svg",m=a.p+"static/media/figma-tech-icon.cab50cb8.svg",h=a.p+"static/media/phpstorm-tech-icon.5afd5324.svg",d=a.p+"static/media/reaction-icon.02aeb901.svg",p=a.p+"static/media/follower-icon.b33416a7.svg",g=a.p+"static/media/view-icon.f0d44f26.svg",E=a.p+"static/media/code-doc-icon.17cb25cf.svg",L=a.p+"static/media/rails-tech-icon.8acb280e.svg";t.default=function(){var e=Object(c.useState)([]),t=Object(C.a)(e,2),a=t[0],n=t[1],b=Object(c.useState)([]),u=Object(C.a)(b,2),V=u[0],v=u[1],f=Object(c.useState)(0),_=Object(C.a)(f,2),k=_[0],H=_[1];Object(c.useEffect)((function(){return r.a.get("https://dev.to/api/articles?username=gedalyakrycer&per_page=1000").then((function(e){n(e.data.length),v(e.data[0]);var t=[];e.data.forEach((function(e){t.push(e.public_reactions_count)}));var a=t.reduce((function(e,t){return e+t}));H(a)})).catch((function(e){console.log(e)})),function(){}}),[]);var M=[{stat:"reactions",statNumber:function(e,t){t=Math.pow(10,t);for(var a=["k","m","b","t"],C=a.length-1;C>=0;C--){var c=Math.pow(10,3*(C+1));if(c<=e){1e3===(e=Math.round(e*t/c)/t)&&C<a.length-1&&(e=1,C++),e+=a[C];break}}return e}(k,2)+"+",icon:d},{stat:"followers",statNumber:"1.3k+",icon:p},{stat:"views",statNumber:"50k+",icon:g},{stat:"articles",statNumber:a,icon:E}],Z=[];return M.forEach((function(e){var t=l.a.createElement("div",{className:"block__blog-stat",key:e.stat},l.a.createElement("img",{src:e.icon,alt:"Start checkered flag icon",className:"block__icon-left"}),l.a.createElement("p",{className:"block__stat-text"},e.statNumber," ",l.a.createElement("span",{className:"block__stat-type"},e.stat)));return Z.push(t)})),l.a.createElement("section",{className:"bio-blocks"},l.a.createElement("a",{className:"block",href:"https://workoutme.app/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("div",{className:"block__header"},l.a.createElement("h5",null,"Working as a\u2026"),l.a.createElement("h3",null,"Front-End Designer")),l.a.createElement("div",{className:"block__tools"},l.a.createElement("p",null,"Using:"),l.a.createElement("div",{className:"blocks__tool-icons"},l.a.createElement("img",{src:s,alt:"React logo"}),l.a.createElement("img",{src:o,alt:"JavaScript logo"}),l.a.createElement("img",{src:L,alt:"Rails logo"}),l.a.createElement("img",{src:i,alt:"Git logo"}),l.a.createElement("img",{src:m,alt:"Figma logo"}),l.a.createElement("img",{src:h,alt:"PHPStorm logo"}))),l.a.createElement("div",{className:"block__meta-container"},l.a.createElement("div",{className:"block__meta"},l.a.createElement("svg",{width:"110",height:"16",viewBox:"0 0 110 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",null,l.a.createElement("path",{d:"M29.6967 9.14623H29.5424C29.3367 9.14623 29.2337 8.99555 29.1821 8.84486V1.91354C29.1821 1.71264 29.0277 1.61218 28.8218 1.61218H27.8955C27.6895 1.61218 27.5352 1.76286 27.5352 1.91354V9.69872C27.5352 10.2512 28.0498 10.7535 28.6161 10.7033H29.6454C29.7483 10.7033 29.8513 10.6028 29.8513 10.5024V9.34715C29.9027 9.24668 29.7997 9.14623 29.6967 9.14623Z"}),l.a.createElement("path",{d:"M48.2766 4.224C47.0414 4.224 46.218 4.82671 45.9607 5.02763L45.8061 4.57559C45.7547 4.4249 45.6518 4.37467 45.4974 4.37467H45.0341C44.8282 4.37467 44.6738 4.52537 44.6738 4.67604V10.4019C44.6738 10.6028 44.8282 10.7033 45.0341 10.7033H45.9091C46.218 10.7033 46.3208 10.6028 46.3208 10.4019V6.53443C46.4237 6.28331 47.1443 5.63035 48.1223 5.63035C48.9972 5.63035 49.4605 6.18286 49.4605 7.18739V10.4019C49.4605 10.6028 49.6148 10.7535 49.8206 10.7033H50.7471C50.9528 10.7033 51.1074 10.5526 51.1074 10.4019V7.23762C51.0558 5.329 50.0265 4.224 48.2766 4.224Z"}),l.a.createElement("path",{d:"M97.5825 9.2969C97.5311 9.19645 97.4797 9.14623 97.4281 9.09598C97.3768 9.09598 97.3768 9.09598 97.3252 9.09598C97.2738 9.09598 97.2222 9.09598 97.1708 9.14623C96.8621 9.2969 96.5018 9.39735 96.1929 9.44757C95.9356 9.44757 95.6782 9.39735 95.6782 8.84486L95.7298 5.73079H97.3252C97.5311 5.73079 97.6855 5.58009 97.6855 5.42942V4.67601C97.6855 4.47511 97.5311 4.37464 97.3768 4.37464L95.7298 4.32442V2.36558C95.7298 2.16466 95.5753 2.06421 95.4209 2.06421H94.4946C94.2886 2.06421 94.1343 2.21488 94.1343 2.36558L94.0827 4.32442H93.4651C93.2593 4.32442 93.105 4.47511 93.105 4.62579V5.32897C93.105 5.52987 93.2593 5.68054 93.4651 5.63032L94.1343 5.68054V8.89508C94.1343 9.69872 94.2886 10.8037 95.8326 10.8037C96.6562 10.8037 97.6341 10.4019 97.7884 10.3517C97.9428 10.3014 98.0458 10.1508 97.9944 10.0001V9.94984L97.5825 9.2969Z"}),l.a.createElement("path",{d:"M40.6594 4.224C39.4758 4.224 38.7036 4.77649 38.3435 5.02763L38.1889 4.57559C38.1375 4.4249 38.0346 4.37467 37.8802 4.37467H37.4169C37.211 4.37467 37.0566 4.52537 37.0566 4.67604V10.4019C37.0566 10.6028 37.211 10.7033 37.4169 10.7033H38.2919C38.6008 10.7033 38.7036 10.6028 38.7036 10.4019V6.53443C38.8065 6.28331 39.5271 5.63035 40.5051 5.63035C41.38 5.63035 41.8433 6.18286 41.8433 7.18739V10.4019C41.8433 10.6028 41.9976 10.7535 42.2034 10.7033H43.1299C43.3357 10.7033 43.4902 10.5526 43.4902 10.4019V7.23762C43.4386 5.329 42.4093 4.224 40.6594 4.224Z"}),l.a.createElement("path",{d:"M33.6598 4.224C32.8878 4.224 32.1158 4.32445 31.3438 4.57559C31.1893 4.62582 31.0865 4.77649 31.0865 4.92718C31.0865 4.92718 31.0865 4.92718 31.0865 4.97741L31.2409 5.58012C31.2409 5.7308 31.3952 5.83127 31.5496 5.88149C31.6012 5.88149 31.6012 5.88149 31.6525 5.88149C32.2702 5.7308 32.8878 5.63035 33.5054 5.58012C33.8657 5.58012 34.0714 5.63035 34.226 5.78104C34.4317 5.98194 34.4833 6.28331 34.4317 6.88603C34.0201 6.78558 33.6084 6.73535 33.1965 6.73535C31.6012 6.73535 30.5203 7.53899 30.5203 8.79466C30.5203 10.0503 31.3952 10.9544 32.6818 10.9544C33.4538 10.9544 34.0714 10.7033 34.7407 10.2512L34.895 10.6028C34.9464 10.7535 35.0494 10.854 35.2037 10.854H35.667C35.8729 10.854 36.0273 10.7033 36.0273 10.5526V7.18739C36.0273 5.47968 35.8213 4.224 33.6598 4.224ZM34.4833 8.94534C34.123 9.39738 33.6084 9.69875 33.0421 9.69875C32.5275 9.69875 32.0642 9.29693 32.0642 8.79466C32.0642 8.74442 32.0642 8.74442 32.0642 8.69419C32.0642 8.09148 32.5789 7.68966 33.4024 7.68966C33.8141 7.68966 34.1744 7.79011 34.5347 7.9408L34.4833 8.94534Z"}),l.a.createElement("path",{d:"M23.4694 3.87231C22.6458 3.87231 21.8738 4.17368 21.2562 4.72617L21.2047 4.7764L21.1018 4.22391C21.0503 4.12346 20.9474 4.02301 20.8445 4.07323H20.1754C20.021 4.07323 19.8666 4.17368 19.8666 4.37458V13.767C19.8666 13.968 20.021 14.0684 20.2269 14.1186H21.2047C21.4621 14.1186 21.565 13.968 21.565 13.767L21.6165 10.653C22.1312 10.9543 22.7488 11.105 23.3664 11.105C25.2707 11.105 26.7633 9.54796 26.7633 7.53889C26.7633 5.42936 25.3736 3.87231 23.4694 3.87231ZM23.2121 9.64843C22.8002 9.64843 22.3371 9.54796 21.9768 9.34706C21.7194 9.24661 21.565 8.99547 21.565 8.69412V6.48412C21.565 6.33344 21.6165 6.18277 21.6679 6.0823C22.0282 5.58003 22.6458 5.27869 23.2634 5.27869C24.3957 5.27869 25.1677 6.18277 25.1677 7.48867C25.1677 8.74435 24.3443 9.64843 23.2121 9.64843Z"}),l.a.createElement("path",{d:"M109.729 4.5253C109.574 4.27416 108.957 4.17371 108.494 4.17371C107.465 4.17371 106.847 4.7262 106.538 4.97734L106.384 4.57552C106.332 4.42485 106.229 4.32438 106.075 4.32438H105.612C105.406 4.32438 105.251 4.47507 105.251 4.62575V10.3516C105.251 10.5525 105.406 10.653 105.612 10.653H106.384C106.641 10.653 106.847 10.6028 106.847 10.3516V6.33347C107.156 5.88143 107.722 5.58006 108.288 5.58006C108.494 5.58006 108.648 5.63028 108.854 5.68053C108.905 5.68053 108.957 5.73075 109.008 5.73075C109.111 5.73075 109.266 5.68053 109.317 5.52983L109.729 4.77642C109.832 4.7262 109.832 4.62575 109.729 4.5253Z"}),l.a.createElement("path",{d:"M69.121 4.3746H68.4518C68.3488 4.3746 68.2461 4.42485 68.1945 4.57552L68.0401 5.02757C67.4739 4.47507 66.6505 4.17371 65.8785 4.17371C63.9741 4.17371 62.5845 5.73075 62.5845 7.79004C62.5845 9.84935 64.0257 11.3562 65.9813 11.3562C66.5989 11.3562 67.2165 11.2055 67.7828 10.9544V11.105C67.8342 11.5571 67.6798 12.0091 67.3195 12.3105C66.9078 12.7625 66.2902 12.9634 65.4666 12.9634C64.7976 12.9634 64.18 12.6621 63.8713 12.4612C63.8197 12.4612 63.7683 12.4109 63.7167 12.4109C63.614 12.4109 63.5624 12.4612 63.511 12.5114L63.1507 13.2146C63.0991 13.315 63.0991 13.4657 63.2537 13.5159C63.4594 13.6666 64.5403 14.3195 65.8785 14.3195H65.9813C68.0401 14.2693 69.4813 13.0136 69.4813 11.3059V4.67597C69.4297 4.47507 69.2754 4.3746 69.121 4.3746ZM67.8342 9.04572C67.8342 9.29686 67.6798 9.54798 67.4225 9.69868C67.0622 9.89958 66.5989 10 66.1872 10C65.0036 10 64.18 9.09594 64.18 7.84029C64.18 6.53436 64.952 5.63028 66.0843 5.63028C66.7019 5.63028 67.3195 5.93165 67.6798 6.43392C67.7828 6.53436 67.7828 6.68506 67.7828 6.83573L67.8342 9.04572Z"}),l.a.createElement("path",{d:"M77.819 8.69412C77.7676 8.6439 77.6646 8.59367 77.6132 8.59367C77.5103 8.59367 77.4073 8.6439 77.3559 8.69412L77.2529 8.79457C76.944 9.09594 76.5837 9.39731 75.8117 9.39731C74.7824 9.39731 73.9589 8.54345 73.9589 7.48867C73.9075 6.48414 74.7824 5.63028 75.8117 5.58005H75.8633C76.378 5.58005 76.841 5.8312 77.2013 6.18277C77.2529 6.23299 77.3559 6.28324 77.4587 6.33347C77.5616 6.33347 77.6132 6.28324 77.6646 6.23299L78.2309 5.78095C78.2822 5.73073 78.3336 5.63028 78.3852 5.58005C78.3852 5.47961 78.3852 5.37916 78.3336 5.32891C77.7676 4.57552 76.841 4.1737 75.9147 4.22393C74.0105 4.22393 72.4149 5.78095 72.4149 7.58914C72.4149 9.39731 73.9589 10.9041 75.9147 10.9041C76.9956 10.9041 77.9219 10.4521 78.4882 9.54798C78.5909 9.39731 78.5396 9.19639 78.3852 9.09594L77.819 8.69412Z"}),l.a.createElement("path",{d:"M82.1423 4.224C80.2381 4.224 78.7969 5.68057 78.7969 7.53899C78.7969 9.4476 80.2381 10.854 82.1423 10.854C83.0686 10.854 83.9952 10.5526 84.6128 10.0503C84.7156 10.0001 84.7672 9.89965 84.7672 9.84942C84.7672 9.74897 84.7156 9.69875 84.6642 9.59828L84.2009 8.99556C84.1495 8.94534 84.0979 8.89511 83.9952 8.89511C83.8922 8.89511 83.7892 8.94534 83.6863 8.99556C83.2746 9.29693 82.7599 9.4476 82.2453 9.4476C81.2674 9.4476 80.4954 8.74444 80.3924 7.84033H84.8185C84.9729 7.84033 85.1275 7.68966 85.1275 7.53899C85.1275 7.38829 85.1788 7.23762 85.1788 7.08695C85.1788 5.47968 83.8922 4.224 82.1423 4.224ZM80.4438 6.78558C80.5982 6.03217 81.2674 5.47968 82.0907 5.47968C82.8629 5.47968 83.4805 6.08239 83.5319 6.8358L80.4438 6.78558Z"}),l.a.createElement("path",{d:"M89.8625 4.224C88.6273 4.224 87.8037 4.82671 87.5464 5.02763L87.392 4.57559C87.3404 4.4249 87.2377 4.37467 87.0831 4.37467H86.6201C86.4141 4.37467 86.2598 4.52537 86.2598 4.67604V10.4019C86.2598 10.6028 86.4141 10.7033 86.6201 10.7033H87.495C87.8037 10.7033 87.9067 10.6028 87.9067 10.4019V6.53443C88.0097 6.28331 88.7303 5.63035 89.708 5.63035C90.5829 5.63035 91.0462 6.18286 91.0462 7.18739V10.4019C91.0462 10.6028 91.2005 10.7535 91.4065 10.7033H92.3328C92.5388 10.7033 92.6931 10.5526 92.6931 10.4019V7.23762C92.6417 5.329 91.6124 4.224 89.8625 4.224Z"}),l.a.createElement("path",{d:"M53.1146 1.41125C52.6 1.41125 52.1367 1.81307 52.1367 2.36556C52.1367 2.86784 52.5484 3.31989 53.1146 3.31989C53.6293 3.31989 54.0923 2.91807 54.1439 2.4158C54.1439 1.91352 53.7323 1.46148 53.2174 1.41125C53.166 1.41125 53.166 1.41125 53.1146 1.41125Z"}),l.a.createElement("path",{d:"M53.6293 4.37463H52.7027C52.497 4.37463 52.3424 4.52533 52.3424 4.676V10.4019C52.3424 10.6028 52.497 10.7032 52.7027 10.7032H53.6293C53.835 10.7032 53.9896 10.5526 53.9896 10.4019V4.676C53.9896 4.52533 53.835 4.37463 53.6293 4.37463Z"}),l.a.createElement("path",{d:"M58.9304 4.224C57.6952 4.224 56.8718 4.82671 56.6145 5.02763L56.4599 4.57559C56.4085 4.4249 56.3056 4.37467 56.1512 4.37467H55.6879C55.4822 4.37467 55.3276 4.52537 55.3276 4.67604V10.4019C55.3276 10.6028 55.4822 10.7033 55.6879 10.7033H56.5629C56.8718 10.7033 56.9748 10.6028 56.9748 10.4019V6.53443C57.0775 6.28331 57.7981 5.63035 58.7761 5.63035C59.651 5.63035 60.1143 6.18286 60.1143 7.18739V10.4019C60.1143 10.6028 60.2686 10.7535 60.4746 10.7033H61.4009C61.6069 10.7033 61.7612 10.5526 61.7612 10.4019V7.23762C61.7096 4.57559 59.9597 4.224 58.9304 4.224Z"}),l.a.createElement("path",{d:"M101.443 4.224C99.5384 4.224 98.0972 5.68057 98.0972 7.53899C98.0972 9.4476 99.5384 10.854 101.443 10.854C102.369 10.854 103.295 10.5526 103.913 10.0503C104.016 10.0001 104.067 9.89965 104.067 9.84942C104.067 9.74897 104.016 9.69875 103.964 9.59828L103.501 8.99556C103.45 8.94534 103.398 8.89511 103.295 8.89511C103.193 8.89511 103.09 8.94534 102.987 8.99556C102.575 9.29693 102.06 9.4476 101.546 9.4476C100.568 9.4476 99.7957 8.74444 99.7443 7.84033H104.17C104.325 7.84033 104.479 7.68966 104.479 7.53899C104.479 7.38829 104.531 7.23762 104.531 7.08695C104.531 5.47968 103.193 4.224 101.443 4.224ZM99.7957 6.78558C99.95 6.03217 100.671 5.47968 101.443 5.47968C102.215 5.47968 102.832 6.08239 102.884 6.8358L99.7957 6.78558Z"}),l.a.createElement("path",{d:"M10.1906 6.28326L8.38925 6.78552C8.02898 6.88597 7.6687 6.88597 7.30842 6.78552L5.50706 6.23303C5.45559 6.23303 5.35266 6.28326 5.35266 6.33348V8.59369C5.35266 8.64391 5.40413 8.69416 5.45559 8.74439L7.6687 9.39733C7.77165 9.44755 7.92605 9.44755 8.02898 9.39733L10.2421 8.74439C10.2935 8.74439 10.345 8.69416 10.345 8.59369V6.38371C10.345 6.33348 10.2935 6.28326 10.1906 6.28326Z"}),l.a.createElement("path",{d:"M13.8963 1.71263L9.10978 0.306271C8.28629 0.0551361 7.41134 0.0551361 6.53639 0.306271L1.80137 1.71263C0.720546 2.06422 0 3.01853 0 4.12351V11.6576C0 12.7626 0.720546 13.7169 1.80137 14.0685L6.58786 15.4748C7.41134 15.726 8.28629 15.726 9.16124 15.4748L13.9477 14.0685C15.0285 13.7169 15.7491 12.7626 15.7491 11.6576V4.12351C15.6976 3.01853 14.9256 2.06422 13.8963 1.71263ZM11.889 9.34714C11.889 9.64849 11.6831 9.89963 11.4258 10.0001L8.23483 10.9544C7.97748 11.0548 7.66867 11.0548 7.41134 10.9544L5.35263 10.3517C5.35263 10.3517 5.30117 10.3517 5.30117 10.4019V11.9087C5.30117 12.0594 5.14677 12.1598 4.99235 12.1096L3.91154 11.8082C3.80861 11.758 3.75713 11.6576 3.75713 11.5571V5.42941C3.75713 4.87692 4.32329 4.47511 4.88942 4.6258L7.66867 5.42941C7.77162 5.47966 7.87455 5.42941 7.92602 5.42941L10.7053 4.6258C11.2714 4.42488 11.889 4.87692 11.889 5.47966V9.34714Z"})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip0"},l.a.createElement("rect",{width:"110",height:"15.8559"}))))),l.a.createElement("div",{className:"block__meta"},l.a.createElement("p",{className:"block__meta-text block__work-cta"},"Visit"),l.a.createElement("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",className:"block__icon-right",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M4.84305 1.279L5.33859 0.783465C5.54841 0.573643 5.8877 0.573643 6.09528 0.783465L10.4346 5.12052C10.6444 5.33034 10.6444 5.66963 10.4346 5.87722L6.09528 10.2165C5.88546 10.4263 5.54618 10.4263 5.33859 10.2165L4.84305 9.72097C4.631 9.50891 4.63546 9.16293 4.85198 8.95534L7.54171 6.39284L1.12653 6.39284C0.82966 6.39284 0.59082 6.154 0.59082 5.85713L0.59082 5.14284C0.59082 4.84597 0.82966 4.60713 1.12653 4.60713L7.54171 4.60713L4.85198 2.04463C4.63323 1.83704 4.62877 1.49105 4.84305 1.279Z"}))))),l.a.createElement("a",{className:"block",href:V.url?V.url:"",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("div",{className:"block__header"},l.a.createElement("h5",null,"Read latest article..."),l.a.createElement("h3",null,function(e){var t=void 0===e?"Loading...":e.split("");return t.length<48?t:t.slice(0,48).join("")+"..."}(V.title))),l.a.createElement("div",{className:"block__blog-container"},Z)))}},99:function(e,t,a){}}]);
//# sourceMappingURL=13.00dc3fa2.chunk.js.map