"use client";
import { useEffect } from 'react';
declare global { interface Window { botpressWebChat?: any } }
export default function Botpress(){useEffect(()=>{const s=document.createElement('script');s.src='https://cdn.botpress.cloud/webchat/v3.7/inject.js';s.async=true;s.onload=()=>{window.botpressWebChat?.init({configUrl:'https://files.bpcontent.cloud/2026/09/17/20/20260917200638-4GLLUUL8.json',botId:process.env.NEXT_PUBLIC_BOTPRESS_BOT_ID||'6a635d30-54f8-429d-a011-9de82c326183',launcherTitle:"Chat with Freedom Foundry AI - I'm online 24/7"})};document.body.appendChild(s);return()=>{s.remove()}} ,[]);return null}
