// Clock
function updateClock(){
  const now=new Date();
  const t=now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  document.getElementById('time-display').textContent=t;
}
setInterval(updateClock,1000); updateClock();

// Terminal elements
const overlay=document.getElementById('kali-overlay');
const terminal=document.getElementById('kali-terminal');
const terminalText=document.getElementById('kali-terminal-text');
const title=document.getElementById('terminal-title');

document.getElementById('kali-icon').addEventListener('click',()=>{
  openTerminal('murdered','default','Welcome to murdered.lol','https://t.me/rolls_rolls_store');
});

// Open terminal for a member
function openUserTerminal(username, avatar, bio, telegram, doxbin){
  openTerminal(username,avatar,bio,telegram,doxbin);
}

// Generic terminal opener
function openTerminal(username, avatar, bio, telegram, doxbin){
  overlay.style.display='flex';
  terminalText.innerHTML='';
  title.textContent=username+'@linux';
  typeCommand('neofetch',()=>renderNeofetch(username,bio,telegram,doxbin));
  centerTerminal();
}

// Hide terminal
function hideKaliTerminal(){ overlay.style.display='none'; }

// Center terminal
function centerTerminal(){
  terminal.style.top='50%';
  terminal.style.left='50%';
  terminal.style.transform='translate(-50%,-50%)';
}

// Drag terminal
dragElement(terminal,document.getElementById('kali-drag-header'));
function dragElement(elmnt,dragHeader){
  if(!dragHeader) return;
  let pos1=0,pos2=0,pos3=0,pos4=0;
  dragHeader.onmousedown=dragMouseDown;
  function dragMouseDown(e){
    e.preventDefault(); pos3=e.clientX; pos4=e.clientY;
    document.onmouseup=closeDragElement;
    document.onmousemove=elementDrag;
  }
  function elementDrag(e){
    e.preventDefault();
    pos1=pos3-e.clientX; pos2=pos4-e.clientY;
    pos3=e.clientX; pos4=e.clientY;
    elmnt.style.top=(elmnt.offsetTop-pos2)+'px';
    elmnt.style.left=(elmnt.offsetLeft-pos1)+'px';
    elmnt.style.transform='translate(0,0)';
  }
  function closeDragElement(){ document.onmouseup=null; document.onmousemove=null; }
}

// Typewriter
function typeCommand(cmd,callback){
  let i=0;
  const line=document.createElement('div');
  line.innerHTML=`<span class="prompt">$</span><span id="typing-cmd"></span>`;
  terminalText.appendChild(line);
  function step(){
    if(i<cmd.length){ line.querySelector('#typing-cmd').textContent+=cmd.charAt(i); i++; setTimeout(step,70);}
    else{ terminalText.appendChild(document.createElement('br')); setTimeout(callback,200);}
  } step();
}
function typeOutput(text,speed=28,callback){
  let i=0; const line=document.createElement('div'); terminalText.appendChild(line);
  function step(){ if(i<text.length){ line.textContent+=text.charAt(i); i++; setTimeout(step,speed);} else if(callback) callback();}
  step();
}

// Neofetch render with bio and links
function renderNeofetch(username,bio,telegram,doxbin){
  const ascii=[
"     .--.     ",
"    |o_o |    ",
"    |:_/ |    ",
"   //   \\ \\   ",
"  (|     | )  ",
" /'\\_   _/`\\ ",
" \\___)=(___/  "
  ];
  const info=[
    "OS: BrowserOS",
    `Host: ${navigator.platform}`,
    `Kernel: Browser Kernel`,
    `Uptime: ~${Math.floor(performance.now()/60000)} mins`,
    `Resolution: ${window.screen.width}x${window.screen.height}`,
    `Bio: ${bio}`,
    "Shell: bash"
  ];
  const wrapper=document.createElement('div'); wrapper.style.display='flex'; wrapper.style.gap='24px';
  const left=document.createElement('div'); left.style.whiteSpace='pre'; left.style.color='#4e9a06'; left.textContent=ascii.join("\n");
  const right=document.createElement('div'); right.style.fontFamily='VCR OSD Mono'; right.style.color='#dcdcdc'; right.style.lineHeight='1.4'; right.style.fontSize='13px';
  right.innerHTML=info.map(line=>{ const [k,v]=line.split(': '); return `<div><span style="color:#4e9a06">${k}:</span> ${v}</div>`}).join('');
  wrapper.appendChild(left); wrapper.appendChild(right); terminalText.appendChild(wrapper);
  setTimeout(()=>typeOutput(`$ Telegram: ${telegram}`,12),300);
  setTimeout(()=>typeOutput(`$ Doxbin: ${doxbin}`,12),500);
}
