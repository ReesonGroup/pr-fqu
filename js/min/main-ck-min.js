function resizer(a){for(var e=0;e<texto.length;e++)""==texto[e].style.fontSize&&(texto[e].style.fontSize="1em"),texto[e].style.fontSize=parseFloat(texto[e].style.fontSize)+.1*a+"em"}function mostrar(a){var e=document.getElementById(a);e.style.display="block"}function ivan(){document.getElementById("dia1").style.display="none"}function slideToggle(a){var e=document.getElementById(a);$(e).slideToggle(400)}function irPubillas(){document.getElementById("contenidoPrincipal").innerHTML=segona}function irInicio(){document.getElementById("contenidoPrincipal").innerHTML=primera}var fecha=new Date,numero=fecha.getDate(),dia=fecha.getDay(),mes=fecha.getMonth(),horas=fecha.getHours(),minutos=fecha.getMinutes(),texto=document.getElementsByClassName("detalleEvento"),prog=document.getElementsByClassName("llistaVisible"),bot=document.getElementsByClassName("dia"),meses=["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],diasSemana=["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"];$(function(){$("ul li a").on("click",function(a){a.preventDefault();var e=$(this).attr("href");$("body,html").stop(!0,!0).animate({scrollTop:$(e).offset().top},500)})});var primera='<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><article class="salutaciones"><div class="header"><h2>Salutacions</h2></div><div class="imagen"></div><div class="footer"><a href="personalitats.html">Galeria de personalitats</a></div></article><article class="pubillas"><div class="header"><h2>Pubilles</h2></div><div class="caras"><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla3.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla4.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla5.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla6.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla7.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla8.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla9.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla10.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla11.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla12.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla13.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla14.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div></div><div class="footer"><a href="javascript:irPubillas()">Galeria de pubillas</a></div></article>',segona='<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div><article class="postRecojido"><div class="header"><div class="hero hero1"></div><div class="foto"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt="" /></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div><input type="checkbox" id="desplegarPost" /><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle(\'pubilla1\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla1" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran1.jpg" width="478" heigt="589" alt="" /></div></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="hero hero1"></div><div class="foto"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt="" /></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div><input type="checkbox" id="desplegarPost" /><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle(\'pubilla2\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla2" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran2.jpg" width="478" heigt="589" alt="" /></div></div><div class="footer"><div class="flechita"></div></div></label></article><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div>';$(function(){$(".mobileMenu").mobileMenu({combine:!1,groupPageText:"",nested:!0,prependTo:"nav",switchWidth:770,topOptionText:""})});