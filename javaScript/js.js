
let divParent1 = document.createElement("div");
divParent1.classList.add("container");
document.body.appendChild(divParent1);

let headerelt = document.createElement("div");
headerelt.classList.add("site-header","clearfix");
headerelt.setAttribute("role","banner");
divParent1.appendChild(headerelt);

/* let navelt = document.createElement("div");
navelt.classList.add("site-nav","inline-block-list");
headerelt.appendChild(navelt);
 navelt.innerHTML = "<ul ><li><a >Source code</a></li><li><a >Docs</a></li><li><a>Other projects</a></li></ul>"; */

let logo = document.createElement("div");
let logoNode1 = document.createTextNode("HTML5");
let star = document.createElement("span");
star.classList.add("star");
let starNode = document.createTextNode(" * ");
star.appendChild(starNode);
let logoNode2 = document.createTextNode("BOILERPLATE");
logo.appendChild(logoNode1);
logo.appendChild(star);
logo.appendChild(logoNode2);
logo.classList.add("site-logo");
/* headerelt.insertBefore("logo","navelt");   ?marche pas bien*/
headerelt.appendChild(logo);

let navelt = document.createElement("div");
navelt.classList.add("site-nav","inline-block-list");
headerelt.appendChild(navelt);
 navelt.innerHTML = "<ul ><li><a >Source code</a></li><li><a >Docs</a></li><li><a>Other projects</a></li></ul>";

let promo = document.createElement("div");
promo.classList.add = ("site-promo");
divParent1.appendChild(promo); 
promo.innerHTML = "<h1>The web’s most popular front-end template</h1><p>HTML5 Boilerplate helps you build <strong>fast</strong>, <strong>robust</strong>, and <strong>adaptable</strong> web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.</p><div><a><strong>Download</strong> <span>v8.0.0</span> </a><a>See the CHANGELOG</a></div>"; 
promo.lastChild.classList.add("cta-option");
promo.lastChild.previousSibling.classList.add("description");

let divParent2 = document.createElement("div");
divParent2.classList.add("site-section",);
document.body.appendChild(divParent2);
let cont = document.createElement("div");
//cont.classList.add = ("container");
cont.className = "container";
divParent2.appendChild(cont);
let contH2 = document.createElement("h2");
let contNode = document.createTextNode("Save time. Create with confidence.");
contH2.appendChild(contNode);
cont.appendChild(contH2);
let grid = document.createElement("div");
grid.classList.add("grid");
grid.innerHTML = "<div><h3><span >★</span> Analytics, icons, and more</h3><p>A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.</p></div><div><h3><span>★</span> Normalize.css and helpers</h3><p>Includes <a>Normalize.css</a> — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.</p></div><div><h3><span>★</span>Modernizr</h3><p>Get the latest minified versions of Modernizr: <a>Modernizr</a> feature detection library, complete with a custom build configuration</p></div><div><h3><span>★</span> High performance</h3><p>Apache settings to help you deliver excellent site performance. We independently maintain <a>server configs</a> for multiple platforms.</p></div>";
cont.appendChild(grid);
//function add classname 
let gridChild = document.querySelectorAll(".grid > div");
let i ;
function setTous (x){
    for(i = 0; i < x.length; i++){
        x[i].className = "grid-cell";
    }
    return x.className;
}
setTous(gridChild); 

// ? classename de span

/*  let spanElts = document.querySelectorAll(".grid-cell span");
let i;
function setTous (b){
    for(i = 0; i < b.length; i++){
        b[i].className = "star";
    }
    return b.className;
}
giveName(spanElts);  */
grid.firstElementChild.firstChild.firstChild.classList.add("star");
grid.firstElementChild.nextElementSibling.firstChild.firstChild.classList.add("star");

grid.lastElementChild.firstChild.firstChild.classList.add("star");
grid.lastElementChild.previousSibling.firstChild.firstChild.classList.add("star");
let divParent3 = document.createElement("div");
divParent3.classList.add("site-section","site-section-vidio");
document.body.appendChild(divParent3);
divParent3.innerHTML ="<h2>Introduction to v8</h2><div><p>What's new?</p><ul><li>Added a sample package.json with basic Parcel commands to jump start your app development</li><li>Added sample Open Graph metadata</li><li>Updated Modernizr and main.css</li><li>Removed jQuery</li><li>Set anonymizeIp to true in Google Analytics snippet</li><li>Removed Browser Upgrade Prompt</li><li>That's just the start of all the goodness. <a>Check out the Changelog for all the details.</a></li></ul></div>";
let content = divParent3.lastElementChild.className = "content"; 
divParent3.lastElementChild.firstElementChild.className = "new";
divParent3.lastElementChild.lastElementChild.className = "new";
divParent3.style.color = "white";
divParent3.style.backgroundColor = "#2f3135";
/* content.setAttribute("text-align","left");//???marche pas?? */
divParent3.lastElementChild.style.textAlign = "left";
divParent3.lastElementChild.style.marginLeft = "12em";
divParent3.lastElementChild.lastElementChild.lastElementChild.firstElementChild.href = "https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md";
divParent3.lastElementChild.lastElementChild.lastElementChild.firstElementChild.setAttribute("color" ,"#ffa000");//???marche pas???





/* content.firstChild.className = "new"; ? marche pas*/
/* let pn = document.querySelector(".site-section p"); // ?
pn.classList.add("new");
content.lastElementChild.className = "new";// ?
divParent3.lastElementChild.lastElementChild.className = "new"; // ? */

let divParent4 = document.createElement("div");
divParent4.classList.add("site-section",);
document.body.appendChild(divParent4);
divParent4.innerHTML = "<h2>Who uses HTML5 Boilerplate?</h2><p><a>Microsoft</a>, <a>NASA</a>, <a>Nike</a>, <a>Barack Obama</a>, <a>ITV News</a>, <a>Creative Commons</a>, <a>Australia Post</a>, and <a>many more</a>.</p><div><a><strong>Download</strong> <span>v8.0.0</span></a></div>";
divParent4.firstElementChild.nextElementSibling.className = "in-the-wild";
let eltA = document.querySelectorAll(".in-the-wild > a");
eltA[0].href = "https://www.microsoft.com/surface/";
eltA[1].href = "https://data.nasa.gov/";
eltA[2].href = "http://www.nikeskateboarding.com/";
eltA[3].href = "https://www.barackobama.com/";
eltA[4].href = "https://www.itv.com/news/";
eltA[5].href = "https://creativecommons.org/";
eltA[6].href = "https://auspost.com.au/";
eltA[7].href = "https://github.com/h5bp/html5-boilerplate/wiki/sites";
divParent4.lastElementChild.className = "cta-option";

/* ???marche pas?
class aDeDive {
    constructor(className, href, ) {
      this.className = className;
      this.href = href;
      this.data-ga-category = data-ga-category;
      this.data-ga-action = data-ga-action;
      this.data-ga-label = data-ga-label;
    }
  }
  
  let aDive = divParent4.lastElementChild.firstElementChild;
  let aDive = new aDeDive {
      "btn btn-download",
      "https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip",
      "Download",
      "Download - bottom",
      "v8.0.0"
  }
 */
let aDive = divParent4.lastElementChild.firstElementChild;
aDive.className = "btn btn-download";
aDive.href = "https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip";
aDive.setAttribute("data-ga-category", "Download");
aDive.setAttribute("data-ga-action","Download - bottom");
aDive.setAttribute("data-ga-label","v8.0.0");

aDive.lastElementChild.className = "version";


let divParent5 = document.createElement("div");
divParent5.classList.add("aside",);
document.body.appendChild(divParent5);
divParent5.innerHTML = "<div><ul><li><a><span></span> Report issues</a></li><li><a><span></span> Help on Stack Overflow</a></li><li><a><span></span> View the showcase</a></li></ul></div>";
divParent5.firstElementChild.className = "container";
divParent5.firstElementChild.firstElementChild.className = "inline-block-list";
let aDeDiveParent5 = document.querySelectorAll(".inline-block-list >li >a");
aDeDiveParent5[0].href = "https://github.com/h5bp/html5-boilerplate/issues";
aDeDiveParent5[1].href = "https://stackoverflow.com/questions/tagged/html5boilerplate";
aDeDiveParent5[2].href = "https://h5bp.net/";
/* aDeDiveParent5[0].setAttributeNode("data-ga-category","Outbound links");//???marche pas?? */
aDeDiveParent5[0].firstElementChild.className = "Icon Icon--github";
aDeDiveParent5[1].firstElementChild.className = "Icon Icon--stackoverflow";
aDeDiveParent5[2].firstElementChild.className = "Icon Icon--html5";



let footer = document.createElement("footer");
footer.className = "site-footer";
document.body.appendChild(footer);
footer.innerHTML = "<p><iframe></iframe> &nbsp; <iframe></iframe></p><p>A project from <a>H5BP</a> currently maintained by<br><a>Rob Larsen</a> &amp; <a>Christian Oliff</a></p><p>This project wouldn't have been possible without our past team members:<br><a>Mathias Bynens</a>, <a>Cătălin Mariș</a>, <a>Hans Christian Reinl</a>, <a>Nicolas Gallagher</a>, <a>Paul Irish</a>, and <a>Divya Manian</a>.</p>";
/* let eltIframe = document.querySelectorAll(".site-footer >p >iframe");
eltIframe[0].setAttribute = ("id","twitter-widget-1"); */
let eltIframe1= document.body.lastElementChild.firstElementChild.firstElementChild;
eltIframe1.id = "twitter-widget-1";
eltIframe1.scrolling = "no";
eltIframe1.setAttribute("frameborder", "0");
eltIframe1.setAttribute("allowtransparency", "true");   
eltIframe1.setAttribute("allowfullscreen", "true");
eltIframe1.className = "twitter-share-button twitter-share-button-rendered twitter-tweet-button";
eltIframe1.style.position = "static";
eltIframe1.style.visibility = "visible";
eltIframe1.style.width = "76px";
eltIframe1.style.height = "28px";
eltIframe1.src = "https://platform.twitter.com/widgets/tweet_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-1&lang=en&original_referer=https%3A%2F%2Fhtml5boilerplate.com%2F&size=l&text=HTML5%20Boilerplate%3A%20The%20rock-solid%20professional%20front-end%20template&time=1601810949997&type=share&url=https%3A%2F%2Fhtml5boilerplate.com%2F&via=h5bp";
eltIframe1.setAttribute("data-url","https://html5boilerplate.com/");

let eltIframe2= document.body.lastElementChild.firstElementChild.lastElementChild;
eltIframe2.id = "twitter-widget-0";
eltIframe2.scrolling = "no";
eltIframe2.setAttribute("frameborder", "0");
eltIframe2.setAttribute("allowtransparency", "true");   
eltIframe2.setAttribute("allowfullscreen", "true");
eltIframe2.className = "twitter-follow-button twitter-follow-button-rendered";
eltIframe2.style.position = "static";
eltIframe2.style.visibility = "visible";
eltIframe2.style.width = "125px";
eltIframe2.style.height = "28px";
eltIframe2.src = "https://platform.twitter.com/widgets/follow_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=h5bp&show_count=false&show_screen_name=true&size=l&time=1601810949995";
eltIframe2.setAttribute("data-screen-name","h5bp");

let aDeFooter = document.querySelectorAll(".site-footer a");
aDeFooter[0].href = "https://github.com/h5bp";
aDeFooter[1].href = "https://htmlcssjavascript.com/";
aDeFooter[2].href = "https://github.com/coliff";
aDeFooter[3].href = "https://mathiasbynens.be/";
aDeFooter[4].href = "https://twitter.com/alrra";
aDeFooter[5].href = "https://drublic.de/";
aDeFooter[6].href = "http://nicolasgallagher.com/";
aDeFooter[7].href = "https://www.paulirish.com/";
aDeFooter[8].href = "http://nimbupani.com/";



