/* 
 *  filename : vlinks.js 
 */

var i=0;

/*
 *  
 */
function showse(){
   se.style.visibility="visible";
}

/*
 *
 */
function addfav(){
 var str="Visual Search Engine"; 
 var ur="http://vlinks.co";
	if (window.sidebar){ 
		window.sidebar.addPanel(str, ur,"");
    } 
	else if(window.external){
	   window.external.AddFavorite(ur, str);
	}
	else if(window.opera && window.print){ 
		 return true; 
	}
 }

/*
 *
 */ 
function Valid(str){
	var newstr="";
	var a, count, i;
	
   a=str.split("'");
	count=a.length;
	for(i=0; i<count; i++)
	  newstr = newstr + a[i];
	
	return newstr;
}

/*
 *
 */
function serch(){
  document.searchBox.text1.value=Valid(document.searchBox.text1.value);    
  if (document.searchBox.text1.value === ""){
		document.searchBox.text1.focus();
		document.searchBox.text1.select();
		
		return 0;
	}
  }

/*
 *
 */  
function mas(){
  document.form2.mas.value=Valid(document.form2.mas.value);    
  if (document.form2.mas.value === ""){
		document.form2.mas.focus();
		document.form2.mas.select();
		document.form2.mas.value="Bla Bla";
		return 0;
  }
  return 1;
}

/*
 *
 */
function urll(){
  document.form2.ur.value=Valid(document.form2.ur.value);  
  if (document.form2.ur.value === ""){
		document.form2.ur.focus();
		document.form2.ur.select();
		document.form2.ur.value="Url not inserted";
		return 1;
  }
  return;
}

/*
 *
 */
function submitForm(){
	var flag;
	
        flag=serch();
	if(flag === 0)
		return;
	searchBox.submit();	
}

/*
 *
 */
function aclick(str){
  pa1.innerHTML="<iframe src='"+str+"' height=5 width=5>";
}

/*
 * Plus window : "Send" button
 */
function flag2(){
	var flag1;

	flag1=mas();
	if(flag1 === 0)
	  return;
	
	flag2=urll();
	 if(flag2 === 0)
		return;	
	form2.submit();	
}

/*
 *  Plus window : "Cancel" button
 */
function hidese(){        
  se.style.visibility="hidden";
}

/*
 *  Advertise rubric
 */
     //ads1
var links1 = ["http://www.vlinks.co/vlinks_ads.asp", "http://www.xubuntu.org", "http://www.blender.org",
 				 "http://whatismyip.com", "http://www.thinkpenguin.com"];
var logos1 = ["images/adver.png", "pic2/xubuntu.org.png", "pic2/blender.org.png", "pic2/whatismyip.com.png", 
"pic2/thinkpenguin.com.png"];
     //ads2
var links2 = ["http://www.translit.ru", "http://www.vlinks.co/vlinks_ads.asp", "http://www.howtogeek.com", 
"http://www.trisquel.info", "http://www.whatsup.org.il"];
var logos2 = ["pic2/translit.ru.png", "images/adver.png", "pic2/howtogeek.com.png", "pic2/trisquel.info.png", 
"pic2/whatsup.org.il.png"];
     //ads3
var links3 = ["http://www.qmp.cat", "http://www.zugi4u.co.il", "http://www.vlinks.co/vlinks_ads.asp",
"http://www.python.org","http://udemy.com"];
var logos3 = ["pic2/qmp.cat.png", "pic2/zugi4u.co.il.png", "images/adver.png", "pic2/python.org.png", "pic2/udemy.com.png"];
     //ads4
var links4 = ["http://www.travelocity.com", "http://www.metador.co.il", "http://www.fsf.org", "http://www.vlinks.co/vlinks_ads.asp","http://www.raspberrypi.org"];
var logos4 = ["pic2/travelocity.com.png", "pic2/metador.co.il.png", "pic2/fsf.org.png", "images/adver.png", "pic2/raspberrypi.org.png"];
     //ads5
var links5 = ["http://www.osuosl.org", "http://www.xfce.org", "http://www.midori-browser.org","http://finance.yahoo.com", "http://www.vlinks.co/vlinks_ads.asp"];
var logos5 = ["pic2/osuosl.org.png", "pic2/xfce.org.png", "pic2/midori-browser.org.png", "pic2/finance.yahoo.com.png", "images/adver.png" ];

var i=0;
var my_interval = self.setInterval(function(){advertise()}, 5000);// rotation speed in seconds

function advertise(){   
  //for ads1(a1,a2)
  a1.href=links1[i];
  a2.src=logos1[i];
  //for ads2
  b1.href=links2[i];
  b2.src=logos2[i];
  //for ads3
  c1.href=links3[i];
  c2.src=logos3[i];
  //for ads4
  d1.href=links4[i];
  d2.src=logos4[i];
  //for ads5
  e1.href=links5[i];
  e2.src=logos5[i];

  i=i+1;

  if (i == 5){
    i=0;
  }
}

function stop() {
    clearInterval(my_interval);
}

/*
// manage ads with js, change first element in arrays links1 & logos1
// with splice(remove) and push(add) functions
links1.splice(0,1);
logos1.splice(0,1);

links1[0] = "www.blabla.com";
logos1[0] = "pic2/translit.ru.png"
// or build an associative array like links1["my_link"] = "my_png";
*/
