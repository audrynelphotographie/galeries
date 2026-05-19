const PHOTOS = [
  {u:"https://i.ibb.co/DDrqWbCP/1.jpg", c:"wedding", n:"Portrait 1"},
  {u:"https://i.ibb.co/wF1sjKFM/14.jpg", c:"portrait", n:"Portrait 14"},
  {u:"https://i.ibb.co/rR1h345P/13.jpg", c:"portrait", n:"Portrait 13"},
  {u:"https://i.ibb.co/WWymrS9H/18.jpg", c:"portrait", n:"Portrait 18"},
  {u:"https://i.ibb.co/s9bKN2M0/2.jpg", c:"portrait", n:"Portrait 2"},
  {u:"https://i.ibb.co/bRqYBXcB/29.jpg", c:"portrait", n:"Portrait 29"},
  {u:"https://i.ibb.co/pvkBYNmK/wedding9.jpg", c:"wedding", n:"Wedding Day 9"},
  {u:"https://i.ibb.co/23cKKB5X/wedding7.jpg", c:"wedding", n:"Wedding Day 7"},
  {u:"https://i.ibb.co/nq8CWGbt/49.jpg", c:"portrait", n:"Portrait 49"},
  {u:"https://i.ibb.co/qF9mTB7L/33.jpg", c:"portrait", n:"Portrait 33"},
  {u:"https://i.ibb.co/0jKMyJkn/32.jpg", c:"portrait", n:"Portrait 32"},
  {u:"https://i.ibb.co/8DBqmhTP/23.jpg", c:"portrait", n:"Portrait 23"},
  {u:"https://i.ibb.co/yBFkTQdd/22.jpg", c:"portrait", n:"Portrait 22"},
  {u:"https://i.ibb.co/ZzBDCbkB/21.jpg", c:"portrait", n:"Portrait 21"},
  {u:"https://i.ibb.co/zY0Yt0k/20.jpg", c:"portrait", n:"Portrait 20"},
  {u:"https://i.ibb.co/4n2nmgqh/19.jpg", c:"portrait", n:"Portrait 19"},
  {u:"https://i.ibb.co/5hVcYYgt/16.jpg", c:"portrait", n:"Portrait 16"},
  {u:"https://i.ibb.co/SXNX77H6/17.jpg", c:"portrait", n:"Portrait 17"},
  {u:"https://i.ibb.co/RktP9WPc/10.jpg", c:"portrait", n:"Portrait 10"},
  {u:"https://i.ibb.co/f3G74L5/3.jpg", c:"portrait", n:"Portrait 3"},
  {u:"https://i.ibb.co/7d5vDxXf/4.jpg", c:"portrait", n:"Portrait 4"},
  {u:"https://i.ibb.co/WW1VChKh/5.jpg", c:"portrait", n:"Portrait 5"},
  {u:"https://i.ibb.co/bj5g7PML/59.jpg", c:"portrait", n:"Portrait 59"},
  {u:"https://i.ibb.co/h1DxPVJx/99.jpg", c:"portrait", n:"Portrait 99"},
  {u:"https://i.ibb.co/ym5rhBRk/7.jpg", c:"portrait", n:"Portrait 7"},
  {u:"https://i.ibb.co/rGmwHVNW/8.jpg", c:"portrait", n:"Portrait 8"},
  {u:"https://i.ibb.co/yF5phwTb/9.jpg", c:"portrait", n:"Portrait 9"},
  {u:"https://i.ibb.co/vxPbV3K4/anniv6.jpg", c:"anniv", n:"Anniversary 6"},
  {u:"https://i.ibb.co/GvhTHnZB/anniv4.jpg", c:"anniv", n:"Anniversary 4"},
  {u:"https://i.ibb.co/yFGn5rn4/event5.jpg", c:"event", n:"Event 5"},
  {u:"https://i.ibb.co/nM78BJFs/wedding1.jpg", c:"wedding", n:"Wedding Day 1"},
  {u:"https://i.ibb.co/kgZyDc8b/wedding2.jpg", c:"wedding", n:"Wedding Day 2"},
  {u:"https://i.ibb.co/dsyczDf9/wedding10.jpg", c:"wedding", n:"Wedding Day 10"},
  {u:"https://i.ibb.co/2DZM9QF/wedding11.jpg", c:"wedding", n:"Wedding Day 11"},
  {u:"https://i.ibb.co/8gfzfjbc/event6.jpg", c:"event", n:"Event 6"},
  {u:"https://i.ibb.co/4gMGqSBz/event3.jpg", c:"event", n:"Event 3"},
  {u:"https://i.ibb.co/Q3r2xtY5/event2.jpg", c:"event", n:"Event 2"},
  {u:"https://i.ibb.co/vCPwh0fN/event1.jpg", c:"event", n:"Event 1"},
  {u:"https://i.ibb.co/k2wvbYjq/anniv5.jpg", c:"anniv", n:"Anniversary 5"}
];
// MARQUEE
const words=['Portrait','Mode','Éditorial','Commercial','Studio','Beauté','Fine Art','Luxury','Fashion','Artistique'];
let mq='';for(let i=0;i<4;i++)words.forEach(w=>{mq+=`<span class="mq-word">${w}<span class="mq-dot">·</span></span>`});
document.getElementById('mq').innerHTML=mq;

// SCROLL GALLERY (20 photos)
const track=document.getElementById('hsgTrack');
PHOTOS.slice(0,20).forEach((p,i)=>{
  const d=document.createElement('div');d.className='hsg-card';
  d.innerHTML=`<img src="${p.u}" loading="${i<3?'eager':'lazy'}" alt="${p.n}"><div class="hsg-badge">${p.c.charAt(0).toUpperCase()+p.c.slice(1)}</div><div class="hsg-info"><span>${p.c.charAt(0).toUpperCase()+p.c.slice(1)}</span><p>${p.n}</p></div><button class="hsg-zoom" onclick="openLB(${i})">⊕</button>`;
  d.querySelector('img').addEventListener('click',()=>openLB(i));
  track.appendChild(d);
});
let dn=false,sx,sl;
track.addEventListener('mousedown',e=>{dn=true;sx=e.pageX-track.offsetLeft;sl=track.scrollLeft});
track.addEventListener('mouseleave',()=>dn=false);
track.addEventListener('mouseup',()=>dn=false);
track.addEventListener('mousemove',e=>{if(!dn)return;e.preventDefault();track.scrollLeft=sl-(e.pageX-track.offsetLeft-sx)*1.8});
let asp=false;
track.addEventListener('mouseenter',()=>asp=true);
track.addEventListener('mouseleave',()=>asp=false);
setInterval(()=>{if(!asp&&!dn){track.scrollLeft+=.6;if(track.scrollLeft>=track.scrollWidth-track.clientWidth-4)track.scrollLeft=0}},16);

// MASONRY (all 40)
const wall=document.getElementById('mwall');
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
function buildWall(f){
  wall.innerHTML='';
  (f==='all'?PHOTOS:PHOTOS.filter(p=>p.c===f)).forEach((p,i)=>{
    const idx=PHOTOS.indexOf(p);
    const d=document.createElement('div');d.className='mcard';
    d.innerHTML=`<img src="${p.u}" loading="lazy" alt="${p.n}"><div class="mcard-ov" onclick="openLB(${idx})"><div class="mc-cat">${p.c.charAt(0).toUpperCase()+p.c.slice(1)}</div><div class="mc-name">${p.n}</div></div>`;
    wall.appendChild(d);obs.observe(d);
    setTimeout(()=>d.classList.add('vis'),i*45);
  });
}
document.querySelectorAll('.fb').forEach(b=>b.addEventListener('click',function(){document.querySelectorAll('.fb').forEach(x=>x.classList.remove('on'));this.classList.add('on');buildWall(this.dataset.f)}));
buildWall('all');

// LIGHTBOX
let curLB=0;
function openLB(i){curLB=i;document.getElementById('lb-img').src=PHOTOS[i].u;document.getElementById('lb-name').textContent=PHOTOS[i].n;document.getElementById('lb-ct').textContent=(i+1)+' / '+PHOTOS.length;document.getElementById('lb').classList.add('open');document.body.style.overflow='hidden'}
function closeLB(){document.getElementById('lb').classList.remove('open');document.body.style.overflow=''}
function moveLB(d){curLB=(curLB+d+PHOTOS.length)%PHOTOS.length;openLB(curLB)}
document.getElementById('lb').addEventListener('click',e=>{if(e.target===document.getElementById('lb'))closeLB()});
document.addEventListener('keydown',e=>{if(!document.getElementById('lb').classList.contains('open'))return;if(e.key==='Escape')closeLB();if(e.key==='ArrowLeft')moveLB(-1);if(e.key==='ArrowRight')moveLB(1)});

// TESTIMONIALS
let curT=0;const tsl=document.querySelectorAll('.tslide'),tdt=document.querySelectorAll('.tdot');
function goT(i){tsl[curT].classList.remove('on');tdt[curT].classList.remove('on');curT=i;tsl[i].classList.add('on');tdt[i].classList.add('on')}
setInterval(()=>goT((curT+1)%tsl.length),5500);

// NAV
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('stuck',scrollY>60),{passive:true});

// CURSOR
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let rx=0,ry=0,mx=window.innerWidth/2,my=window.innerHeight/2;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'},{passive:true});
(function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,.hsg-card,.mcard').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('h'));el.addEventListener('mouseleave',()=>document.body.classList.remove('h'))});

// REVEAL
const rvObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.1,rootMargin:'0px 0px -55px 0px'});
document.querySelectorAll('.rv,.rvl').forEach(el=>rvObs.observe(el));