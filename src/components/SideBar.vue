<template>
  <div class="sideBarWrap">
    <svg @click="openSidaBar(), sidebarData = !sidebarData"
      ref="arrowWrap" class="arrow" @mouseover="arrowBigger" @mouseout="arrowSmaller"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45">
      <path fill="#F2B102" d="M45 22.5a22.5 22.5 0 1 1-45 0 22.5 22.5 0 0 1 45 0Z"/>
      <path ref="arrow" fill="#2525FF" d="M34.6 24c.5-.5.5-1.5 0-2L25 12.3a1.5 1.5 0 1 0-2.1 2.1l8.5 8.5-8.5 8.5a1.5 1.5 0 1 0 2.1 2.1l9.6-9.5Zm-1.6.5h.5v-3H33v3Z"/>
    </svg>
    <transition name="sideBarFade">
      <div v-show="sidebarData" class="sideBar">
        <ul>
          <svg @click="moveToSection1" class="sideSymbol" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 66 80">
            <g filter="url(#sideSymbol0_f_46_2)">
              <ellipse cx="33" cy="58.1" fill="#000" fill-opacity=".4" rx="21" ry="9.5"/>
            </g>
            <path style="cursor: pointer" fill="#489CFF" d="m17 6.7 2-2.8-.4-1.3c0-.3.1-.6.4-.6C30 .7 36.5.6 47.4 2c.3 0 .5.3.4.6L47.5 4l1.8 3.7v51.2c0 .8-.4 1.5-1.2 1.9-.4.2-.7.5-1 1-.3.7-1 1.2-1.8 1.3-9.1 1-14.8 1-24.2 0-.8 0-1.5-.6-1.8-1.3-.3-.5-.6-.8-1-1a2.2 2.2 0 0 1-1.2-2v-52Z"/>
            <path fill="#FDFF86" d="m24.4 25.4.1.5c0 .2.2.3.3.4l.5.3a25.7 25.7 0 0 0 1.4.8l.7.4.4.6c.2.3.2.5.2.8 0 .3 0 .6-.2.8 0 .3-.3.5-.5.7l-.8.4-1 .1c-.8 0-1.5-.1-2-.4-.4-.3-.7-.8-1-1.4L24 29l.2.5c0 .2.2.3.3.5l.4.3h.5c.4 0 .6 0 .9-.2.2-.1.3-.4.3-.7l-.1-.4-.4-.4-.4-.3a12.8 12.8 0 0 1-1.4-.7l-.7-.5-.5-.7a2 2 0 0 1 0-1.6l.5-.6.8-.4a3.6 3.6 0 0 1 1.9 0c.3 0 .5.2.7.3l.5.5.2.7c0 .3 0 .5-.2.6l-.6.2c-.4 0-.6-.2-.8-.5l.1-.3v-.3l-.3-.3a.9.9 0 0 0-.5 0 1 1 0 0 0-.4 0 .8.8 0 0 0-.5.5v.3Zm9 .1V31h-1.6v-.4a2 2 0 0 1-.6.4 2 2 0 0 1-.6 0 2 2 0 0 1-1 0 1.7 1.7 0 0 1-.8-1.2l-.1-.6V26.4l-.2-.2 1.7-.6V29c0 .3 0 .6.2.8.1.2.3.2.6.2h.4l.4-.3v-3.5l-.2-.2 1.7-.6Zm2.3 0v.5l.6-.2.6-.1c.4 0 .7 0 1 .2.2 0 .4.2.6.4l.3.6V31h-1.4v-3.3l-.2-.8c-.2-.2-.4-.3-.7-.3H36a2 2 0 0 0-.4.2V31h-1.5v-4.7L34 26l1.7-.6Zm8.3.5-.3.1.5.6.2.8c0 .2 0 .5-.2.7l-.5.6-.8.3-.9.1a5 5 0 0 0-.6 0l-.2.1v.1c0 .2 0 .2.2.3l.7.1a98 98 0 0 1 1.8.2l.7.4.2.5c0 .3 0 .5-.2.7l-.6.5-.9.2a5 5 0 0 1-2.7-.2 2 2 0 0 1-.6-.4.7.7 0 0 1-.1-.9 1.5 1.5 0 0 1 .4-.4l.3-.2-.5-.3-.1-.3c0-.2 0-.4.2-.5l.6-.3-.7-.5-.2-.8a1.6 1.6 0 0 1 .8-1.4c.2-.2.4-.3.7-.3a4 4 0 0 1 1.5 0l.6.1c.1-.2.3-.4.6-.5l.6-.2c.2 0 .4 0 .5.2l.2.5c0 .2 0 .3-.2.4l-.4.2c-.2 0-.3 0-.4-.2V26L44 26Zm-2.5 4.4-.3.3v.5l.3.2H43c.2-.1.3-.2.3-.4 0-.1 0-.2-.2-.2l-.5-.2a6.4 6.4 0 0 0-1.1-.2Zm.6-2.1c.2 0 .4 0 .5-.2.2-.1.3-.4.3-.6 0-.3 0-.6-.3-.7a1 1 0 0 0-.5-.2 1 1 0 0 0-.7.2l-.2.7c0 .3 0 .5.2.6l.7.2ZM23 43V36.4l-.2-.2 1.8-.6v.3h1c.5 0 .9 0 1.2.2.3 0 .6.2.8.3.2.2.4.4.4.6l.2.8a1.5 1.5 0 0 1-.9 1.4c.2 0 .4.1.5.3a1.7 1.7 0 0 1 .6.8l.1.6c0 .2 0 .5-.2.8 0 .2-.2.4-.4.6-.3.2-.5.4-.9.5L26 43H23Zm2.7-1c.4 0 .7 0 1-.3.2-.2.3-.5.3-.8 0-.4-.1-.7-.4-.9-.2-.2-.5-.3-.9-.3h-1.1V42h1.1Zm-.3-5.1h-.8v1.9h1.4l.4-.2.2-.4v-.4c0-.4 0-.6-.3-.7-.2-.2-.5-.2-.9-.2Zm7.4 4.4 1.4.5c-.2.4-.5.8-.9 1-.4.3-1 .4-1.5.4a2.7 2.7 0 0 1-1.9-.7 2.7 2.7 0 0 1-.8-2c0-.5 0-.9.2-1.2l.6-1a2.6 2.6 0 0 1 1.8-.7c.4 0 .7 0 1 .2a2.2 2.2 0 0 1 1.4 1.4l.2 1v.6h-3.6c0 .4.2.8.3 1 .2.3.5.5.8.5.3 0 .6-.1.7-.3.2-.2.3-.4.3-.7Zm0-1.5-.3-.9a.8.8 0 0 0-.7-.3c-.3 0-.5 0-.7.3a2 2 0 0 0-.4 1h2Zm5.7 1.5 1.4.5c-.2.4-.5.8-1 1-.3.3-.8.4-1.4.4a2.7 2.7 0 0 1-1.9-.7 2.7 2.7 0 0 1-.8-2c0-.5 0-.9.2-1.2.2-.4.3-.7.6-1a2.6 2.6 0 0 1 1.8-.7c.4 0 .7 0 1 .2a2.2 2.2 0 0 1 1.4 1.4l.2 1v.6h-3.6c0 .4.1.8.3 1 .2.3.5.5.8.5.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7Zm0-1.5-.3-.9a.8.8 0 0 0-.7-.3c-.3 0-.6 0-.7.3a2 2 0 0 0-.4 1h2Zm3.7-2.3v.8l.7-.5.7-.1c.2 0 .4 0 .6.2.2.1.3.3.3.6l-.2.5c-.2.2-.3.3-.6.3h-.4l-.3-.3v-.2h-.5l-.3.3V43h-1.5v-4.7l-.3-.2 1.8-.6Z"/>
            <path fill="#C08459" d="m24.8 26.3-.1.2.1-.2Zm.5.3-.1.2.1-.2Zm.6.3v-.2.2Zm.8.5-.1.1v-.1Zm.7.4-.2.2.2-.2Zm.4.6-.1.1h.1Zm0 1.6h-.1.1Zm-.5.7-.1-.2.1.2Zm-3.7 0-.2.2.2-.1Zm-1-1.3-.1-.2-.2.1v.2h.2Zm1.3-.5h.2v-.3l-.3.1.1.2Zm.2.5h-.2v.1h.2Zm.3.5h-.2v.1l.2-.1Zm.4.3-.1.1v-.1Zm1.6-1.3h-.2.2Zm-.4-.4v.2-.2Zm-.4-.3-.1.2v-.2ZM25 28v-.2.2Zm-.8-.4-.1.2v-.2Zm-.7-.5-.2.1.2-.1Zm-.5-.7-.2.1h.2Zm0-1.6.2.1H23Zm.5-.6.1.2-.1-.2Zm2.7-.4v.2-.2Zm.7.3v.2-.2Zm.5.5-.1.1h.1Zm0 1.3.1.2-.1-.2Zm-1.4-.3h-.2v.1h.2Zm.1-.3H26h.2Zm0-.3h-.2.1Zm-.3-.3-.1.2v-.2Zm-1 0 .2.2-.1-.2Zm-.2.2-.2-.1.2.1Zm-.2.3h-.2.2Zm-.2.3.1.6.4-.2-.1-.4h-.4Zm.1.6.4.5.2-.4-.2-.3-.4.2Zm.4.5.5.3.2-.4c-.2 0-.3-.2-.5-.3l-.2.4Zm.5.3.6.3.2-.4-.6-.3-.2.4Zm.6.3.8.4.2-.3-.8-.5-.2.4Zm.8.4.6.5.3-.3-.7-.5-.2.3Zm.6.5.5.5.3-.1-.5-.7-.3.3Zm.5.5.1.7h.4c0-.3 0-.6-.2-.8l-.3.1Zm.1.7-.1.7.3.2c.2-.2.2-.5.2-.9h-.4Zm-.1.7-.5.6.2.3c.3-.2.5-.4.6-.7l-.3-.2Zm-.5.6-.8.4.1.4 1-.5-.3-.3Zm-.8.4-1 .1v.4l1.1-.1v-.4Zm-1 .1c-.7 0-1.3-.1-1.7-.4l-.3.3c.6.4 1.2.5 2 .5V31Zm-1.7-.4c-.5-.3-.8-.7-1-1.2h-.3c.2.7.5 1.2 1 1.5l.3-.3Zm-1-1 1.3-.5-.2-.4-1.3.5.1.4Zm1-.6.2.5.4-.2-.2-.5-.4.2Zm.2.5c0 .2.2.3.3.5l.3-.3-.2-.4-.4.2Zm.3.5c.1.1.3.3.5.3l.2-.3c-.2 0-.3-.2-.4-.3l-.3.3Zm.5.3.6.2V30L25 30l-.2.3Zm.6.2c.4 0 .7-.1 1-.3l-.3-.3a1 1 0 0 1-.7.2v.4Zm1-.3c.2-.2.4-.5.4-.9h-.4c0 .3-.1.5-.3.6l.3.3Zm.4-.9c0-.2 0-.4-.2-.5l-.3.2v.3h.5Zm-.2-.5c0-.2-.2-.3-.3-.4l-.3.3.3.3.3-.2Zm-.3-.4a3 3 0 0 0-.6-.4l-.1.4.4.3.3-.3Zm-.6-.4-.6-.3-.1.4.6.3.1-.4Zm-.6-.3-.7-.4-.2.4.8.4.1-.4Zm-.7-.4a4 4 0 0 1-.7-.5l-.3.3.8.6.2-.4Zm-.7-.5-.4-.5-.4.1.5.7.3-.3Zm-.4-.5-.2-.8h-.4c0 .3 0 .7.2 1l.4-.2Zm-.2-.8c0-.3 0-.5.2-.7l-.4-.2a2 2 0 0 0-.2.9h.4Zm.2-.7c0-.2.2-.4.4-.5l-.2-.4-.6.7.4.2Zm.4-.5.7-.4v-.4l-1 .4.3.4Zm.7-.4 1-.1v-.4l-1 .1v.4Zm1-.1h.8l.1-.3-.9-.1v.4Zm.8 0 .7.4.2-.4-.8-.3v.4Zm.7.4.5.4.3-.2-.6-.6-.2.4Zm.5.4.1.6h.4c0-.3 0-.5-.2-.8l-.3.2Zm.1.6-.1.5.2.3c.2-.2.3-.5.3-.8h-.4Zm-.1.5h-.5v.5c.3 0 .5 0 .7-.2l-.2-.3Zm-.5 0h-.4a.6.6 0 0 1-.2-.3l-.4.2.4.4.6.2v-.4Zm-.6 0 .1-.5H26v.2l.3.2Zm.1-.5v-.4l-.4.2v.2h.4Zm0-.4-.4-.4-.2.4.2.2.3-.2Zm-.4-.4a1 1 0 0 0-.6 0v.3h.4l.2-.3Zm-.6 0h-.5l.2.4h.3v-.5Zm-.5 0a1 1 0 0 0-.4.3l.3.2.3-.1-.2-.4Zm-.4.3-.2.3.4.2.1-.3-.3-.2Zm-.2.4v.3h.4v-.2l-.4-.1Zm9.1.4h.2v-.3l-.2.1v.2Zm0 5.5v.2h.2V31h-.2Zm-1.5 0h-.2v.2h.2V31Zm0-.4h.2v-.4l-.3.3.1.1Zm-.6.4v-.2.2Zm-1.5 0v-.3.2Zm-.6-.6-.2.2.2-.2Zm-.3-.6h-.2.2Zm-.2-3.4h-.2.2Zm-.1-.2-.1-.2-.5.1.5.3v-.2Zm1.7-.6h.2v-.3l-.3.1.1.2Zm.2 4.3-.2.1.2-.1Zm1 .1.1.2V30Zm.4-.2.2.1v-.1h-.2Zm0-3.5h-.2.2Zm-.2-.2v-.2l-.6.2.5.2V26Zm1.5-.6V31h.4v-5.5h-.4Zm.2 5.3h-1.5v.4h1.5v-.4ZM32 31v-.4h-.4v.4h.4Zm-.3-.5-.5.3.1.4.7-.4-.3-.3Zm-.5.3h-.6v.5l.7-.1-.1-.4Zm-.6 0h-.8l-.2.3 1 .2v-.4Zm-.8 0-.6-.5-.3.3.7.5.2-.4Zm-.6-.5-.2-.5h-.4c0 .3.2.6.3.8l.3-.3Zm-.2-.5-.1-.6h-.4v.7l.5-.1Zm-.1-.6v-2.6h-.4v2.6h.4Zm0-2.6v-.3l-.4.1v.2h.4Zm0-.3c-.1-.2-.2-.3-.4-.3l-.1.4.4-.1Zm-.4 0 1.8-.5-.2-.4-1.7.6.1.4Zm1.5-.7V29h.4v-3.5H30Zm0 3.5c0 .4 0 .7.2.9l.4-.2-.2-.7H30Zm.2.9c.2.2.5.3.8.3V30l-.4-.1-.4.2Zm.8.3h.5l-.1-.4H31v.4Zm.5 0 .5-.4-.3-.3-.3.3.1.3Zm.5-.5v-3.3h-.4v3.3h.4Zm0-3.3v-.3l-.4.2v.1h.4Zm0-.3-.3-.3-.2.4h.5Zm-.3 0 1.7-.5-.1-.4-1.8.6.2.4Zm4-.7h.2v-.3l-.2.1v.2Zm0 .5h-.2v.3l.3-.2V26Zm2.2-.1-.1.1V26Zm.6.4-.2.1h.2Zm.4 4.7v.2h.2V31h-.2Zm-1.5 0h-.2v.2h.2V31Zm-.2-4.1-.2.1.2-.1Zm-1.1-.2v.2-.2Zm-.4.1v-.2l-.2.1v.1h.2Zm0 4.2v.2h.2V31h-.2Zm-1.5 0H34v.2h.2V31Zm0-4.7H34h.2ZM34 26v-.2l-.6.2.5.2V26Zm1.5-.6v.5h.4v-.5h-.4Zm.3.6.6-.2-.1-.3c-.2 0-.5 0-.7.2l.2.3Zm.6-.2h.5v-.4h-.6v.4Zm.5 0 .9.1.2-.3c-.3-.2-.7-.2-1-.2v.4Zm.9.1.5.4.3-.2-.6-.5-.2.3Zm.5.4.3.6.4-.1c0-.3-.2-.5-.4-.7l-.3.2Zm.3.6v.6h.5l-.1-.7h-.4Zm0 .6V31h.5v-3.4h-.4Zm.3 3.2h-1.5v.4h1.5v-.4Zm-1.3.2v-3.3h-.4V31h.4Zm0-3.3c0-.4-.1-.7-.3-1l-.3.3c.1.1.2.3.2.7h.4Zm-.3-1c-.2-.2-.5-.3-.8-.3v.4c.3 0 .4.1.5.2l.3-.2Zm-.8-.3-.5.1.1.4h.4v-.5Zm-.5.1-.4.1.2.4.3-.1v-.4Zm-.5.3V31h.4v-4.2h-.4Zm.2 4h-1.5v.4h1.5v-.4Zm-1.3.2v-4.5H34V31h.4Zm0-4.5v-.3l-.4.2v.1h.4Zm0-.3L34 26l-.2.4h.5Zm-.3 0 1.7-.5-.1-.4-1.8.6.2.4Zm9.6 0-.1-.2-.2.1.2.2V26Zm.5 2H44h.2Zm-2.5 1v.2-.2Zm-.3 0v.3-.2Zm-.2.1v.2h.1l-.1-.2Zm.9.5v.2-.2Zm.9.1v.2-.2Zm.9.1v.2-.2Zm.7.4v-.2.2Zm0 1.2-.2-.1.2.1Zm-1.5.7v-.2.2Zm-1.8 0v-.2.2Zm-.9-.2v.2-.2Zm-.6-.4-.1.2.1-.2Zm-.1-.9h-.2.2Zm.2-.2-.2-.2.2.2Zm.2-.2v-.2H40l.1.2Zm.3-.2v.2l.4-.2-.3-.2-.1.2Zm-.5-.3-.1.2.1-.2Zm.1-.8.1.2V29Zm.6-.3v.2l.6-.2-.5-.2-.1.2Zm-.7-.5-.1.1.1-.1Zm0-1.7-.2-.1.2.1Zm.6-.5-.2-.2.2.2Zm2.2-.4v.2-.2Zm.6.2-.1.2h.2l-.1-.2Zm.6-.5v.2-.2Zm1 0v.1-.1Zm-.7.9-.2-.1v.2l.2-.1Zm0-.2H44v.1l.2-.1Zm-2.7 4.3v-.1h-.1v.1Zm-.3.3-.2-.1.2.1Zm0 .5.1-.1v.1Zm.3.2v.2-.2Zm1.5 0v-.2.2Zm-.4-.8v.2-.2Zm-1.2-3.8.2.2-.2-.2Zm0 1.3v.2-.2Zm2.6-2.3c-.1 0-.3 0-.4.2l.2.3.2-.1v-.4Zm-.4.5.4.5.4-.3-.6-.5-.2.3Zm.4.5c.2.1.2.4.2.7h.4c0-.4 0-.7-.2-1l-.4.3Zm.2.7c0 .2 0 .4-.2.6l.4.2.2-.8h-.4Zm-.2.6c0 .2-.2.4-.4.5l.2.3c.3-.1.5-.3.6-.6l-.4-.2Zm-.4.5-.7.3v.4c.4 0 .7-.2 1-.4l-.3-.3Zm-.7.3-.9.1v.4l1-.1-.1-.4Zm-.9.1h-.3v.4h.3V29Zm-.3 0h-.3v.5h.3V29Zm-.3 0-.3.2.2.3h.1V29Zm-.3.2-.2.2h.4a.1.1 0 0 1 0 .1l-.2-.3Zm-.2.2c0 .2 0 .3.2.3l.2.2.1-.4h-.5Zm.4.5.7.1.1-.4-.7-.1v.4Zm.8.1.9.1v-.4h-1v.3Zm.9.1.8.1.1-.3-1-.2v.4Zm.8.1.6.3.3-.3c-.2-.2-.5-.3-.8-.3v.3Zm.6.3c.2.1.2.3.2.4h.4c0-.3 0-.5-.3-.7l-.3.3Zm.2.4c0 .3 0 .4-.2.6l.3.3c.2-.3.3-.5.3-.9h-.4Zm-.2.6-.5.4.1.4c.3-.2.6-.3.7-.5l-.3-.3Zm-.5.4-.8.2v.4l1-.2-.2-.4Zm-.8.2-1 .1v.4h1V32Zm-1 .1h-.8v.3l.9.1v-.4Zm-.8 0-.8-.3-.1.4.9.2v-.4Zm-.8-.3c-.2 0-.4-.2-.5-.3l-.3.3.7.4.1-.4Zm-.5-.3a.5.5 0 0 1-.2-.4h-.4c0 .2 0 .5.3.7l.3-.3Zm-.2-.4v-.3l-.3-.1-.1.4h.4Zm0-.3.2-.2-.3-.3-.2.3.3.2Zm.2-.2.2-.2-.2-.3-.3.2.3.3Zm.2-.2.3-.1-.2-.4-.3.2.2.3Zm.3-.5a3 3 0 0 1-.5-.2l-.2.3.5.3.2-.4Zm-.4-.2-.1-.2h-.4c0 .2 0 .4.2.5l.3-.3Zm-.1-.2.1-.3-.2-.4c-.2.2-.3.4-.3.7h.4Zm.1-.4.6-.2-.2-.4a2 2 0 0 0-.6.3l.2.3Zm.6-.6-.6-.4-.3.2.7.6.2-.4Zm-.6-.4-.2-.7h-.4c0 .3 0 .6.3.9l.3-.2Zm-.2-.7c0-.4 0-.6.2-.8l-.4-.2-.2 1h.4Zm.2-.8.5-.5-.3-.3-.6.6.4.2Zm.5-.5.7-.2-.1-.4-.9.3.3.3Zm.7-.2.8-.1v-.4h-1l.2.5Zm.8-.1h.5l.1-.4h-.6v.4Zm.5 0 .6.2.1-.4-.6-.2v.4Zm.8.1.6-.4-.2-.4a2 2 0 0 0-.7.6l.3.2Zm.6-.4c.2-.2.3-.2.5-.2V25c-.2 0-.5 0-.7.2l.2.4Zm.5-.2.3.1.3-.2a.8.8 0 0 0-.6-.3v.4Zm.3.1.2.4h.4c0-.3-.1-.5-.3-.7l-.3.3Zm.2.4-.1.3.3.3.2-.6H45Zm-.1.3h-.3v.5c.2 0 .4 0 .6-.2l-.3-.3Zm-.3 0h-.2l-.4.2.6.3v-.4Zm-.2.2V26l-.4.2.4.2Zm0-.4-.4-.2v.4l.3-.2Zm-3 4.3c-.2 0-.3.2-.4.3l.4.2.2-.2-.3-.3Zm-.4.3v.4h.3v-.2l-.3-.2Zm0 .4v.4l.3-.3H41Zm0 .4.5.2v-.4l-.2-.1-.2.3Zm.5.2h.4v-.3l-.3-.1-.1.4Zm.4 0h.5v-.3a5 5 0 0 1-.5 0v.4Zm.5 0h.7l-.1-.4h-.6v.5Zm.7 0 .3-.3.1-.3h-.4l-.1.2.1.3Zm.4-.6c0-.2-.1-.4-.3-.4l-.2.3.1.1h.4Zm-.3-.4-.6-.2v.4l.4.1.2-.3Zm-.6-.2H42v.3h.5v-.3Zm-.6 0-.5-.1v.3l.4.1v-.4Zm0-2c.3 0 .6 0 .8-.2l-.3-.3-.4.2v.4Zm.8-.2c.2-.1.3-.4.3-.7h-.4c0 .2 0 .4-.2.4l.3.3Zm.3-.7c0-.4-.1-.7-.3-.8l-.3.3c.1 0 .2.2.2.5h.4Zm-.3-.8c-.2-.2-.5-.3-.7-.3v.4c.1 0 .3 0 .4.2l.3-.3Zm-.7-.3c-.3 0-.6.1-.8.3l.3.3.5-.2v-.4Zm-.8.3c-.2.1-.3.4-.3.8h.4c0-.3 0-.5.2-.5l-.3-.3Zm-.3.8c0 .3.1.6.3.8l.3-.4-.2-.4H41Zm.3.8.8.2V28c-.3 0-.4 0-.5-.2l-.3.4ZM23.1 43H23v.2h.2V43Zm0-6.6h-.2.2Zm-.2-.2V36l-.6.2.5.2.1-.2Zm1.8-.6h.2v-.3l-.3.1.1.2Zm0 .3h-.2v.2h.2V36Zm2.2.2v.1-.1Zm.8.3-.1.2.1-.2Zm.4.6-.1.1h.1Zm0 1.6.1.1h-.1Zm-.7.6V39l-.5.2.4.2.1-.2Zm.5.3-.1.1.1-.1Zm.4.4.1-.2-.1.2Zm-.3 2.4-.2-.1.2.1Zm-.9.5v-.2.2Zm-.4-1h.2-.2Zm0-1.8-.1.2.1-.2Zm-2-.3v-.2h-.2v.2h.2Zm0 2.3h-.2v.2h.2V42Zm0-5.1v-.2h-.2v.2h.2Zm0 1.9h-.2v.2h.2v-.2Zm1.4 0v.1-.2Zm.6-.6.2.1h-.2Zm-.3-1.1v.1-.1Zm-3 5.9v-6.4h-.5V43h.4Zm0-6.4-.1-.3-.4.2v.1h.4Zm-.1-.3L23 36l-.2.4h.5Zm-.3 0 1.8-.5-.2-.4-1.7.6v.4Zm1.5-.7v.3h.4v-.3h-.4Zm.2.5h1v-.4h-1v.4Zm1 0 1.2.1V36l-1.2-.2v.4Zm1.2.1.7.4.2-.3-.8-.4-.1.3Zm.7.4.4.5.3-.1c0-.3-.2-.5-.5-.7l-.2.3Zm.4.5v.7h.5c0-.3 0-.6-.2-.8l-.3.1Zm0 .7-.1.7.3.2c.2-.3.3-.6.3-1H28Zm-.1.7c-.2.2-.3.4-.6.5l.2.4.7-.7-.3-.2Zm-.6.9.5.2.2-.3a2 2 0 0 0-.5-.3l-.2.4Zm.5.2.3.4.3-.3-.4-.4-.2.3Zm.3.4.2.4.4-.1-.3-.6-.3.3Zm.2.4.1.5h.4v-.6l-.5.1Zm.1.5-.1.7.3.1.2-.8h-.4Zm-.1.7-.5.6.3.3.5-.8-.3-.1Zm-.5.6-.7.4v.4l1-.5-.3-.3Zm-.8.4-1.1.2v.4l1.3-.2-.2-.4Zm-1.1.2H23v.4H26v-.4Zm0-.6c.3 0 .7-.1 1-.3l-.3-.3-.8.2v.4Zm1-.3c.3-.3.4-.6.4-1h-.4c0 .3-.1.5-.3.7l.3.3Zm.4-1c0-.4-.1-.8-.4-1l-.3.3c.2.1.3.4.3.7h.4Zm-.4-1c-.3-.3-.6-.4-1-.4v.4c.3 0 .5.1.7.3l.3-.3Zm-1-.4h-1.2v.4h1.1v-.4Zm-1.4.2V42h.4v-2.3h-.4Zm.2 2.5h1.1v-.4h-1.1v.4Zm.8-5.5h-.8v.4h.8v-.4Zm-1 .2v1.9h.4v-2h-.4Zm.2 2h1v-.3h-1v.4Zm1 0h.5l-.1-.4h-.4v.5Zm.5 0c.1 0 .3 0 .4-.2l-.3-.3-.2.1v.4Zm.4-.2.3-.4-.4-.1-.2.2.3.3Zm.3-.4v-.5h-.3v.4l.3.1Zm0-.5c0-.4 0-.7-.4-1l-.2.4c.2.1.3.3.3.6h.4Zm-.3-1a2 2 0 0 0-1-.1v.4l.7.1.3-.3Zm6.3 4.5.1-.2h-.2v.2h.1Zm1.4.5h.2l.1-.2h-.2v.2Zm-.9 1-.1-.1.1.1Zm-2.5.2v-.2.2Zm-.9-.5-.1.1.1-.1Zm-.6-.9h-.2.2Zm3.4-3.8v.2-.2Zm.8.5-.1.2.1-.2Zm.6.9H34h.2Zm.2 1.6v.2h.2v-.2h-.2Zm-3.6 0v-.2h-.2v.2h.2Zm.3 1-.1.2.1-.1Zm1.8-2v.2h.2v-.2h-.2Zm-.3-.9-.2.1h.2Zm-1.4 0-.2-.1.2.1Zm-.4 1h-.2v.1h.2v-.2Zm2 1.6 1.5.5v-.4L33 41l-.1.4Zm1.3.2a2 2 0 0 1-.8 1l.2.3c.5-.3.8-.7 1-1.2l-.4-.1Zm-.8 1c-.4.2-.9.3-1.4.3v.4a3 3 0 0 0 1.6-.4l-.2-.3Zm-1.4.3c-.3 0-.6 0-1-.2v.4c.3.2.6.2 1 .2V43Zm-1-.2c-.2 0-.5-.2-.7-.5l-.3.3c.3.3.6.5 1 .6v-.4Zm-.7-.5c-.3-.2-.4-.5-.6-.8l-.4.2.7 1 .3-.4Zm-.6-.8-.2-1H29c0 .4 0 .8.2 1.2l.4-.2Zm-.2-1c0-.5 0-.9.2-1.2l-.4-.1-.2 1.2h.4Zm.2-1.2.5-.8-.2-.3-.7 1 .4.1Zm.5-.8.8-.5-.1-.4-1 .6.3.3Zm.8-.5 1-.2v-.4c-.5 0-.8 0-1.1.2l.1.4Zm1-.2c.3 0 .6 0 .9.2l.1-.4a3 3 0 0 0-1-.2v.4Zm.9.2.7.5.3-.3-.9-.6-.1.4Zm.7.5.5.7.4-.1-.6-.9-.3.3Zm.5.7.2 1h.4l-.2-1.1-.4.1Zm.2 1v.6h.4v-.6h-.4Zm.2.4h-3.6v.4h3.6v-.4Zm-3.8.2c0 .5.2.9.4 1.2l.3-.2c-.2-.3-.3-.6-.3-1h-.4ZM31 42c.2.3.5.5 1 .5V42a.7.7 0 0 1-.7-.3l-.3.2Zm1 .5c.3 0 .6-.1.8-.4l-.3-.2-.6.2v.4Zm.8-.4c.2-.2.3-.4.3-.7l-.4-.1c0 .2 0 .4-.2.6l.3.2Zm.3-2.3c0-.4-.2-.7-.4-1l-.3.2.3.9h.4Zm-.4-1a1 1 0 0 0-.8-.4v.4c.2 0 .4 0 .5.2l.3-.2Zm-.8-.4a1 1 0 0 0-.9.4l.3.2.6-.2v-.4Zm-.9.4-.4 1h.4c0-.3.2-.6.3-.8l-.3-.2Zm-.2 1.2h2v-.4h-2v.4Zm7.8 1.3v-.2h-.1v.2h.1Zm1.4.5h.2v-.2h-.1v.2Zm-1 1v-.1.1Zm-2.4.2v-.2.2Zm-.9-.5-.1.1.1-.1Zm-.6-.9H35h.2Zm3.4-3.8v.2-.2Zm.8.5-.1.2.1-.2Zm.6.9h-.2.2Zm.2 1.6v.2h.2v-.2H40Zm-3.6 0v-.2h-.2v.2h.2Zm.3 1-.1.2.1-.1Zm1.7-2v.2h.3v-.2h-.3Zm-.2-.9-.2.1h.2Zm-1.4 0-.2-.1.2.1Zm-.4 1h-.2v.1h.2v-.2Zm2 1.6 1.5.5v-.4l-1.3-.5-.1.4Zm1.3.2a2 2 0 0 1-.8 1l.2.3c.5-.3.8-.7 1-1.2l-.4-.1Zm-.8 1c-.4.2-.9.3-1.4.3v.4a3 3 0 0 0 1.6-.4l-.2-.3Zm-1.4.3c-.3 0-.6 0-1-.2l-.1.4c.4.2.7.2 1.1.2V43Zm-1-.2c-.3 0-.5-.2-.8-.5l-.2.3c.2.3.6.5.9.6l.1-.4Zm-.8-.5-.5-.8-.4.2.7 1 .2-.4Zm-.5-.8-.2-1h-.4c0 .4 0 .8.2 1.2l.4-.2Zm-.2-1c0-.5 0-.9.2-1.2l-.4-.1-.2 1.2h.4Zm.2-1.2.5-.8-.3-.3-.6 1 .4.1Zm.5-.8.8-.5-.2-.4-.9.6.3.3Zm.8-.5.9-.2v-.4c-.4 0-.7 0-1 .2v.4Zm.9-.2c.3 0 .7 0 1 .2v-.4a3 3 0 0 0-1-.2v.4Zm1 .2.7.5.3-.3c-.3-.3-.6-.4-1-.6v.4Zm.7.5.5.7.3-.1c0-.4-.3-.7-.5-.9l-.3.3Zm.5.7.2 1h.4c0-.4-.1-.8-.3-1.1l-.3.1Zm.2 1v.6h.4v-.6h-.4Zm.2.4h-3.6v.4H40v-.4Zm-3.8.2c0 .5.1.9.4 1.2l.3-.2c-.2-.3-.3-.6-.3-1h-.4Zm.4 1.2c.2.3.5.5.9.5V42a.7.7 0 0 1-.6-.3l-.3.2Zm.9.5c.3 0 .6-.1.9-.4l-.3-.2-.6.2v.4Zm.9-.4c.1-.2.3-.4.3-.7l-.4-.1-.2.6.3.2Zm.2-2.3c0-.4 0-.7-.3-1l-.3.2.2.9h.4Zm-.3-1a1 1 0 0 0-.8-.4v.4c.2 0 .4 0 .5.2l.3-.2Zm-.8-.4a1 1 0 0 0-.9.4l.3.2.6-.2v-.4Zm-.9.4-.4 1h.4c0-.3.2-.6.3-.8l-.3-.2Zm-.2 1.2h2v-.4h-2v.4Zm5.8-2.5h.2v-.3l-.3.1v.2Zm0 .8H42v.5l.3-.3-.1-.2Zm.7-.5-.1-.1v.1Zm1.3 0-.1.2.1-.1Zm0 1.2V39h-.1l.2.1Zm-.9.2v.2-.2Zm-.3-.2H43v.2l.2-.2Zm-.5-.2.1.2v-.2Zm-.3.3-.2-.2v.2h.2Zm0 3.9v.2h.2V43h-.2Zm-1.5 0h-.2v.2h.2V43Zm0-4.7h-.3.2Zm-.3-.2v-.2l-.5.2.4.2.1-.2Zm1.6-.6v.8h.4v-.8H42Zm.3 1 .7-.5-.2-.3c-.3 0-.5.3-.8.5l.3.3Zm.7-.5.6-.1v-.4c-.3 0-.5 0-.8.2l.2.3Zm.6-.1.5.1.2-.3c-.2-.2-.4-.2-.7-.2v.4Zm.5.1.2.5h.4a1 1 0 0 0-.4-.8l-.2.3Zm.2.5-.2.4.3.3c.2-.2.3-.5.3-.7h-.4Zm-.2.4-.4.2v.4c.3 0 .5-.1.7-.3l-.3-.3Zm-.4.2h-.3l-.1.3h.4v-.3Zm-.3 0-.2-.2-.3.3.4.2V39Zm-.2 0v-.4l-.4.2.4.2Zm0-.4-.4-.2v.4l.4-.2Zm-.4-.2a1 1 0 0 0-.4.1l.2.4h.2v-.5Zm-.4.1-.4.3.3.3.3-.2-.2-.4Zm-.4.5V43h.4v-4H42Zm.2 3.7h-1.5v.4h1.5v-.4ZM41 43v-4.5h-.4V43h.4Zm0-4.5-.1-.3-.4.2v.1h.5Zm-.1-.3-.3-.3-.2.4h.5Zm-.3 0 1.7-.5v-.4l-1.8.6v.4Z"/>
            <g filter="url(#sideSymbol1_f_46_2)">
              <path fill="#fff" fill-opacity=".5" d="M21.8 2.7c3.2-.7 5.2-.8 9-.7l-.9.7c-3.5-.2-5.5 0-9 .7l.9-.7Z"/>
            </g>
            <g filter="url(#sideSymbol2_f_46_2)">
              <path fill="#fff" fill-opacity=".5" d="M29.9 61.4c-3.3.2-5.3 0-9.1-.7l1-.5c3.5.7 5.5.8 9.1.7l-1 .5Z"/>
            </g>
            <g filter="url(#sideSymbol3_f_46_2)">
              <path fill="#fff" fill-opacity=".5" d="M20.8 6.7h8.3v50.7h-8.3z"/>
            </g>
            <defs>
              <filter id="sideSymbol0_f_46_2" width="66" height="43" x="0" y="36.6" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur result="effect1_foregroundBlur_46_2" stdDeviation="6"/>
              </filter>
              <filter id="sideSymbol1_f_46_2" width="12.1" height="3.4" x="19.8" y=".9" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur result="effect1_foregroundBlur_46_2" stdDeviation=".5"/>
              </filter>
              <filter id="sideSymbol2_f_46_2" width="14.1" height="5.3" x="18.8" y="58.2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur result="effect1_foregroundBlur_46_2" stdDeviation="1"/>
              </filter>
              <filter id="sideSymbol3_f_46_2" width="16.3" height="58.7" x="16.8" y="2.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur result="effect1_foregroundBlur_46_2" stdDeviation="2"/>
              </filter>
            </defs>
          </svg>
          <li @click="moveToSection1">home</li>
          <li @click="moveToSection2">sung beer 즐기기</li>
          <li @click="moveToSection3">브랜드 스토리</li>
          <li @click="moveToSection4">영양 정보</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export default {
  setup (props, { emit }) {
    const sidebarData = ref(false)
    const arrowWrap = ref()
    const arrow = ref()
    const arrowScaleAni = gsap.timeline({ paused: true })

    const openSidaBar = () => {
      if (sidebarData.value === false) {
        if (matchMedia('(max-width: 800px)').matches) {
          gsap.to(arrow.value, {
            rotate: 540,
            transformOrigin: 'center',
            duration: 0.5
          })
          gsap.to(arrowWrap.value, {
            left: '40%'
          }, '<')
        } else if (matchMedia('(min-width: 799px)').matches) {
          gsap.to(arrow.value, {
            rotate: 540,
            transformOrigin: 'center',
            duration: 0.5
          })
          gsap.to(arrowWrap.value, {
            left: '20%'
          }, '<')
        }
      } else if (sidebarData.value === true) {
        gsap.to(arrow.value, {
          rotate: 0,
          transformOrigin: 'center',
          duration: 0.5
        })
        gsap.to(arrowWrap.value, {
          left: 0
        }, '<')
      }
    }
    const arrowBigger = () => {
      arrowScaleAni.play()
    }
    const arrowSmaller = () => {
      arrowScaleAni.reverse()
    }
    const moveToSection1 = () => {
      emit('section1')
    }
    const moveToSection2 = () => {
      emit('section2')
    }
    const moveToSection3 = () => {
      emit('section3')
    }
    const moveToSection4 = () => {
      emit('section4')
    }

    onMounted(() => {
      addEventListener('resize', function () {
        if (matchMedia('(max-width: 800px)').matches) {
          if (sidebarData.value === true) {
            gsap.set(arrowWrap.value, {
              left: '40%'
            })
          }
        } else if (matchMedia('(min-width: 799px)').matches) {
          if (sidebarData.value === true) {
            gsap.set(arrowWrap.value, {
              left: '20%'
            })
          }
        }
      })
      arrowScaleAni.to(arrowWrap.value, {
        scale: 1.3,
        ease: 'none',
        duration: 0.2
      })
    })
    onBeforeUnmount(() => {
      addEventListener('resize', function () {
        if (matchMedia('(max-width: 800px)').matches) {
          if (sidebarData.value === true) {
            gsap.set(arrowWrap.value, {
              left: '40%'
            })
          }
        } else if (matchMedia('(min-width: 799px)').matches) {
          if (sidebarData.value === true) {
            gsap.set(arrowWrap.value, {
              left: '20%'
            })
          }
        }
      })
    })
    return {
      sidebarData,
      arrowWrap,
      arrow,
      openSidaBar,
      arrowBigger,
      arrowSmaller,
      moveToSection1,
      moveToSection2,
      moveToSection3,
      moveToSection4
    }
  }
}
</script>

<style lang="scss" scoped>
.sideBarWrap {
  .arrow {
    position: fixed;
    transform: translate(-40%, -50%);
    top: 50%;
    z-index: 5;
    width: 45px;
    height: 45px;
    cursor: pointer;
  }
  .sideBar {
    position: fixed;
    z-index: 6;
    width: 20%;
    height: 100%;
    background: linear-gradient(0deg, rgba(242,177,2,1) 65%, rgba(255,245,22,1) 100%);
    text-align: center;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      .sideSymbol {
        height: 20%;
      }
      li {
        padding: 10px 0 10px 0;
        color: #2525ff;
        word-break: keep-all;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        &:hover,
        &:focus {
          color: rgb(63, 141, 194);
          text-decoration: underline;
        }
      }
    }
  }
}
.sideBarFade-enter-from,
.sideBarFade-leave-to {
  transform: translate(-100%);
  opacity: 0;
}
.sideBarFade-enter-active,
.sideBarFade-leave-active {
  transition: .5s ease
}
@media screen and (max-width: 1200px) {
  .sideBarWrap {
    .sideBar {
      ul {
        li {
          font-size: 1.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .sideBarWrap {
    .sideBar {
      width: 40%;
      ul {
        li {
          font-size: 1rem;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .sideBarWrap {
    .sideBar {
      width: 60%;
    }
  }
}
</style>
