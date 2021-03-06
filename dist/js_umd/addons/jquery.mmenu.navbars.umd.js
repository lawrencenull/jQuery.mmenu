(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu navbar addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var a="mmenu",n="navbars",t="navbar";e[a].addons[n]={setup:function(){var i=this,c=this.opts[n];this.conf[n],l=e[a].glbl,"undefined"!=typeof c&&(this.$navbars={},c instanceof Array||(c=[c]),e.each(c,function(d){var o=c[d];"boolean"==typeof o&&o&&(o={}),"object"!=typeof o&&(o={}),"undefined"==typeof o.content&&(o.content=["prev","title","next"]),o=e.extend(!0,{},e[a].defaults[t],o);var f=f=o.position||"top",h=e('<div class="'+r.navbar+" "+r.navbar+"-"+f+'" />');if(o.content instanceof Array){for(var v=e("<div />"),p=0,m=!1,u=!1,b=0,C=o.content.length;C>b;b++){switch(o.content[b]){case"prev":case"next":case"title":m=!0}switch(o.content[b]){case"prev":u=!0}switch(o.content[b]){case"prev":case"next":case"close":h.addClass(r.hasbtns),v.append('<a class="'+r[o.content[b]]+" "+r.btn+'" href="#"></a>');break;case"title":p++,v.append('<a class="'+r.title+'"></a>');break;default:p++,v.append(o.content[b])}}p>1&&h.addClass(r.navbar+"-"+p),v=v.html()}else var v=o.content;if(h.prependTo(i.$menu).append(v),i.$navbars[f]=h,i.$menu.addClass(r.hasnavbar+"-"+f),u&&(i.$menu.addClass(r.hasnavbar),i.bind("init",function(e){e.removeClass(r.hasnavbar)})),m){var x=h.find("."+r.title),$=h.find("."+r.prev),y=h.find("."+r.next),N=h.find("."+r.close),k=function(e){e=e||i.$menu.children("."+r.current);var a=e.find("."+i.conf.classNames[n].panelTitle+"-"+f),t=e.find("."+i.conf.classNames[n].panelPrev+"-"+f),l=e.find("."+i.conf.classNames[n].panelNext+"-"+f),c=e.data(s.parent),d=a.html(),h=t.attr("href"),v=l.attr("href"),p=!1,m=t.html(),u=l.html();switch(d||(d=e.children("."+r.navbar).children("."+r.title).html()),d||(d=o.title),h||(h=e.children("."+r.navbar).children("."+r.prev).attr("href")),o.titleLink){case"anchor":var p=c?c.children("a").not("."+r.next).attr("href"):!1;break;case"panel":var p=h}x[p?"attr":"removeAttr"]("href",p),x[d?"removeClass":"addClass"](r.hidden),x.html(d),$[h?"attr":"removeAttr"]("href",h),$[h||m?"removeClass":"addClass"](r.hidden),$.html(m),y[v?"attr":"removeAttr"]("href",v),y[v||u?"removeClass":"addClass"](r.hidden),y.html(u)};if(i.bind("openPanel",k),i.bind("init",function(){k.call(i,i.$menu.children("."+r.current))}),i.opts.offCanvas){var A=function(e){N.attr("href","#"+e.attr("id"))};A.call(i,l.$page),i.bind("setPage",A)}}}))},add:function(){r=e[a]._c,s=e[a]._d,i=e[a]._e,r.add("close hasbtns")},clickAnchor:function(){}},e[a].defaults[t]={position:"top",title:"Menu",titleLink:"panel"},e[a].configuration.classNames[n]={panelTitle:"Title",panelNext:"Next",panelPrev:"Prev"};var r,s,i,l}(jQuery);
}));