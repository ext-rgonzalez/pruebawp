!function(a){"use strict";function b(a){function b(a){return("0"+parseInt(a).toString(16)).slice(-2)}return-1==a.search("rgb")?a:(a=a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/),"#"+b(a[1])+b(a[2])+b(a[3]))}wp.mce=wp.mce||{};var c={};c.button={content_id:"fasc-popup-edit-button",is_editing:!1,$node:{},init:function(a,b,c,d){this.$popup=b,this.$preview_area=b.find(".preview-button-area .centered-button"),this.is_editing=c,this.$node=jQuery(a),this.setupControls(b),this.setupIcons(a,b),this.setupTabs(b),this.is_editing?this.setSettingsFromNode(a,b,!0):this.initEmptyTemplate(a,b,d),this.updatePreview()},setupIcons:function(b,c){var d=this,f=(a(b),c.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]'));f.find("#fasc-popup-icon-type-select").change(function(b){a(this).val();f.find(".ico-grid .grid-container").removeClass("ico-screen-active").hide(),f.find("#"+a(this).val()).addClass("ico-screen-active").show()}),f.find(".ico-grid div").click(function(b){b.preventDefault();var c=f.find(".fasc-ico-position:checked").val();return f.find(".ico-grid div").removeClass("active"),a(this).addClass("active"),"none"!=c&&""!=c||(c="before"),f.find(".fasc-ico-position").removeAttr("checked"),f.find(".fasc-ico-position").prop("checked",!1),f.find('.fasc-ico-position[value="'+c+'"]').prop("checked",!0),d.updatePreview(),!1}),f.find(".fasc-ico-position").change(function(b){if(f.find(".fasc-ico-position").removeAttr("checked"),f.find(".fasc-ico-position").prop("checked",!1),a(this).prop("checked",!0),"none"==a(this).val())f.find(".ico-grid div div:not(.clear)").removeClass("active");else{var c=f.find(".ico-grid div.active");if(c.length<1){var e=f.find(".ico-grid .grid-container.ico-screen-active"),c={};c=e.length>0?a(f.find(".ico-grid .grid-container.ico-screen-active div:not(.clear)").get(0)).addClass("active"):a(f.find(".ico-grid .grid-container:first-child div:not(.clear)").get(0)).addClass("active")}}d.updatePreview()}),a('.fasc-ajax-content select, .fasc-ajax-content input[type="checkbox"]').change(function(){d.updatePreview()}),a('.fasc-ajax-content input[type="text"]').keyup(function(){d.updatePreview()}),a('.fasc-ajax-content input[type="text"]').keyup(function(){d.updatePreview()}),a.get(Fasc.ajax_url+"?action=fasc_buttons&load=get_buttons",function(a){d.parseTemplateButtons(a)},"json"),a(".fasc-save-btn").click(function(){var b={};return b.button=d.createButtonHtml({isSaving:!0}),a.post(Fasc.ajax_url+"?action=fasc_buttons&load=save_button",b,function(a){d.parseTemplateButtons(a)},"json"),d.$tabs.find("li").removeClass("active"),d.$tabs.find("li[data-fasc-tab='3']").addClass("active"),d.loadTab(3,c),!1}),d.updatePreview()},parseTemplateButtons:function(b){var c=this,d=a(".saved-buttons-tab .container-grid ul");d.empty();var e="",f=0;a.each(b,function(c){e="";var g=a(b[c].html),h=g.css("background-color"),i=g.css("color");e+="<li data-index='"+f+"'>",e+='<div class="wrap">',e+='<div class="full_button">'+b[c].html+"</div>",e+='<div class="name"><span>'+b[c].name+'</span> <a class="dashicons dashicons-edit fasc-button-edit"></a><a class="fa fa-check fasc-button-update" data-action="update"></a><a class="dashicons dashicons-no-alt fasc-button-update" data-action="remove"></a></div>',e+='<div class="col fasc-button-remove dashicons dashicons-no-alt"></div>',e+='<div class="col" style="background-color:'+h+';"></div>',e+='<div class="col" style="background-color:'+i+';"></div>',e+='<div class="clear"></div>',e+="</div>",e+="</li>",d.append(e),f++});var g=function(b){var c=b.text(),d=a("<input>",{val:c,type:"text",width:"170px","data-orig-text":c});b.replaceWith(d),d.select()},h=function(b){var c=a("<span>",{text:b.attr("data-orig-text")});b.replaceWith(c),c.on("click",g)},i=function(b){var c=a("<span>",{text:b.val()});b.replaceWith(c),c.on("click",g)};a(".fasc-button-edit").click(function(){return a(this).hide(),a(this).parent().find(".fasc-button-update").show().css("display","inline-block"),g(a(this).parent().find("span")),!1}),a(".fasc-button-remove").click(function(b){b.preventDefault();var d=a(this).closest("li").attr("data-index");return a.get(Fasc.ajax_url+"?action=fasc_buttons&load=remove_button&index="+d,function(a){c.parseTemplateButtons(a)},"json"),!1}),a(".fasc-button-update").click(function(){var b=a(this);if(a(this).parent().find(".fasc-button-update").hide(),a(this).parent().find(".fasc-button-edit").show(),"remove"==b.attr("data-action"))h(a(this).parent().find("input"));else{var d=a(this).closest("li").attr("data-index"),e=encodeURIComponent(a(this).parent().find("input").val());a.get(Fasc.ajax_url+"?action=fasc_buttons&load=update_button&index="+d+"&name="+e,function(a){c.parseTemplateButtons(a)},"json"),i(a(this).parent().find("input"))}return!1});var j=a(".saved-buttons-tab .container-grid li .wrap");j.on("click",function(){j.removeClass("active"),a(this).addClass("active");var b=a(this).find(".full_button a.fasc-button");c.loadButtonTemplate(b,!0),c.updatePreview()})},loadButtonTemplate:function(c,d){var e=this,f=c.attr("target");jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!1),void 0!==f&&"_blank"==f&&jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!0);var g=c.attr("rel");if(jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!1),void 0!==g&&-1!==g.indexOf("nofollow")&&jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!0),void 0===d){var h=c.text();jQuery(".fasc-ajax-content input#fasc-popup-button-text").val(h)}var i=b(c.css("color"));jQuery("#fasc-popup-text-color").val(i),e.refreshMiniColors(jQuery("#fasc-popup-text-color"),i,e.$popup);var j=b(c.css("background-color"));jQuery("#fasc-popup-button-color").val(j),e.refreshMiniColors(jQuery("#fasc-popup-button-color"),j,e.$popup);var k=e.$popup.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]');k.find(".ico-grid > div > div").removeClass("active");var l=c.attr("class").split(/\s+/);e.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","0"),e.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","0"),e.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","0");for(var m=0;m<l.length;m++)if("fasc-type"==l[m].substring(0,9)){var n=l[m];(c.hasClass("fasc-rounded-medium")||c.hasClass("rounded"))&&(n+=" fasc-rounded-medium"),jQuery("#fasc-popup-button-type option").prop("selected",!1),jQuery('#fasc-popup-button-type option[value="'+n+'"]').prop("selected",!0),a("#fasc-popup-button-type").val(n)}else if("fasc-style"==l[m].substring(0,10))"fasc-style-bold"==l[m]?e.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","1"):"fasc-style-italic"==l[m]?e.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","1"):"fasc-style-strikethrough"==l[m]&&e.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","1");else if("fasc-size"==l[m].substring(0,9)){var o=l[m];jQuery("#fasc-popup-button-size option").prop("selected",!1),jQuery('#fasc-popup-button-size option[value="'+o+'"]').prop("selected",!0),a("#button-size").val(o)}else if("dashicons"==l[m].substring(0,9)){k.find(".ico-grid .grid-container").removeClass("ico-screen-active"),k.find("#dashicons-grid").addClass("ico-screen-active"),e.$popup.find("#fasc-popup-icon-type-select").val("dashicons-grid"),e.$popup.find("#fasc-popup-icon-type-select").trigger("change");var p=l[m];e.$popup.find(".ico-grid ."+p).addClass("active")}else if("fa-"==l[m].substring(0,3)){k.find(".ico-grid .grid-container").removeClass("ico-screen-active");var q=k.find(".ico-grid").find("."+l[m]),r=q.parent().attr("id"),s=k.find("#"+r);s.addClass("ico-screen-active"),e.$popup.find("#fasc-popup-icon-type-select").val(r),e.$popup.find("#fasc-popup-icon-type-select").trigger("change"),e.$popup.find(".ico-grid ."+l[m]).addClass("active")}c.hasClass("fasc-ico-before")||c.hasClass("fasc-ico-after")?c.hasClass("fasc-ico-before")?(k.find(".fasc-ico-position").prop("checked",!1),k.find('.fasc-ico-position[value="before"]').prop("checked",!0)):c.hasClass("fasc-ico-after")&&(k.find(".fasc-ico-position").prop("checked",!1),k.find('.fasc-ico-position[value="after"]').prop("checked",!0)):(k.find(".fasc-ico-position").prop("checked",!1),k.find('.fasc-ico-position[value="none"]').prop("checked",!0))},setupControls:function(b){var c=this;b.find('.fasc-ajax-content select, .fasc-ajax-content input[type="checkbox"]').change(function(){c.updatePreview()}),b.find('.fasc-ajax-content input[type="text"]').keyup(function(){c.updatePreview()}),b.find('.fasc-ajax-content input[type="text"]').keyup(function(){c.updatePreview()});var d=b.find("[data-fasc-action='popup-colorpicker']");d.click(function(c){var e=a(this),f=e.attr("data-fasc-button-active");d.attr("data-fasc-button-active","");var g=1-f;e.attr("data-fasc-button-active",g);var h=e.data("fasc-action-target"),i=b.find('[data-fasc-colorpicker-name="'+h+'"]'),j=b.find("[data-fasc-colorpicker-name]").not('[data-fasc-colorpicker-name="'+h+'"]'),k=e.position();j.stop(!0,!0).hide(),i.stop(!0,!0).fadeToggle(100),i.css("left",Math.round(k.left)+"px"),i.css("top",Math.round(k.top+e.parent().outerHeight())+"px")}),b.on("click",function(c){0==a(c.target).closest("[data-fasc-action='popup-colorpicker'], .fasc-popup-colorpicker-container").length&&(b.find("[data-fasc-colorpicker-name]").hide(),d.attr("data-fasc-button-active",""))}),b.find(".fasc-mce-button-toggle").on("click",function(){var b=a(this),d=b.attr("data-fasc-button-active"),e=1-d;b.attr("data-fasc-button-active",e),c.updatePreview()}),c.updatePreview()},updatePreview:function(){this.$preview_area.html(this.createButtonHtml()),this.$preview_area.find(".fasc-button").off(),this.$preview_area.find(".fasc-button").click(function(a){a.preventDefault(),a.stopPropagation()})},createButtonHtml:function(b){var c={content:"",isSaving:!1,hasID:!1};a.extend(c,b);var d=jQuery(".fasc-ajax-content input#fasc-popup-button-url").val(),e=jQuery(".fasc-ajax-content input#fasc-popup-button-text").val(),f=jQuery(".fasc-ajax-content select#fasc-popup-button-size").val(),g=jQuery(".fasc-ajax-content input#fasc-popup-button-color").val(),h=jQuery(".fasc-ajax-content input#fasc-popup-text-color").val(),i=jQuery(".fasc-ajax-content select#fasc-popup-button-type").val(),k=(jQuery(".fasc-ajax-content select#fasc-popup-button-align").val(),jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked")),l=jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked"),o="",p="",r="",s="";1==k&&(r=' target="_blank"'),1==l&&(s=' rel="nofollow"'),i&&""!=i&&(o=" "+i),f&&""!=f&&(p=" "+f);var u=a(a('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"] .ico-grid div.active').get(0)),v=a('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"] .fasc-ico-position:checked').val(),w="";if(1==u.length){var y=u.attr("class").split(" "),z=0,A="dashicons";for(z=0;z<y.length;z++)"active"!=y[z]&&"fa"!=y[z]&&"dashicons"!=y[z]&&(w+=" "+y[z]),"fa"==y[z]&&(A="fontawesome");z>0&&("before"!=v&&"after"!=v||(w="fontawesome"==A?" ico-fa fasc-ico-"+v+w:" fasc-ico-"+v+w))}var B="";1==this.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active")&&(B+=" fasc-style-bold"),1==this.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active")&&(B+=" fasc-style-italic");var E=this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active");1==E&&(B+=" fasc-style-strikethrough");this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active");1==E&&(B+=" fasc-style-strikethrough");var G="";if(c.hasID){G=' data-fasc-id="fasc-button-tid-'+(new Date).getTime()+'"'}var I="";return I=c.isSaving?'<a class="fasc-button'+p+o+w+B+'"'+r+s+' style="background-color:'+g+";color:"+h+';" data-fasc-style="background-color:'+g+";color:"+h+';"'+G+"></a>":'<a data-fasc-href="'+d+'" class="fasc-button'+p+o+w+B+'"'+r+s+' style="background-color:'+g+";color:"+h+';" data-fasc-style="background-color:'+g+";color:"+h+';"'+G+">"+e+"</a>",c.isSaving,I},setupTabs:function(b){var c=this;this.$tabs=b.find(".tab-header");var d=this.$tabs.find("li");this.$tabs.find("li a");d.click(function(){var e=a(this),f=e.attr("data-fasc-tab");return d.removeClass("active"),e.addClass("active"),c.loadTab(f,b),!1})},loadTab:function(b,c){c.find(".fasc-ajax-content .fasc-tab-content").hide(),c.find(".fasc-ajax-content .fasc-tab-content[data-fasc-tab="+b+"]").show(),this.loadTabContent(b),a(".ico-grid .grid-container div.active").length>0&&a(".ico-grid").scrollTop(a(".ico-grid .grid-container div.active").position().top-5)},loadTabContent:function(a,b){},refreshMiniColors:function(b,c,d){var e=this;jQuery(".preview-button-area .centered-button");b.is_text_input=!1,b.minicolors({inline:!0,opacity:!1,showSpeed:0,hideSpeed:0,textfield:!0,change:function(c,f){var g=b.val(),h=b.parent().parent().find(".fasc-popup-color-input");1==b.is_text_input?b.is_text_input=!1:h.val(g),h.off("input"),h.on("input",function(){var c=a(this).val();b.is_text_input=!0,b.minicolors("value",c)});var i=a("#fasc-popup-button-color").val(),j=a("#fasc-popup-text-color").val();d.find(".fasc-ico-fg .fg-panel").css("background-color",j),d.find(".fasc-ico-bg .bg-panel").css("background-color",i),e.updatePreview()}}),void 0!==c&&b.minicolors("value",c)},initEmptyTemplate:function(a,c,d){jQuery("#fasc-popup-button-text").val(d);var e=c.find(".preview-button-area .centered-button .fasc-button");this.refreshMiniColors(c.find("#fasc-popup-text-color"),b(e.css("color")),c),this.refreshMiniColors(c.find("#fasc-popup-button-color"),b(e.css("background-color")),c)},setSettingsFromNode:function(c,d,e){var f=a(c),h=f.attr("data-fasc-href");d.find(".fasc-ajax-content input#fasc-popup-button-url").val(h);var i=f.attr("target");d.find(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!1),void 0!==i&&"_blank"==i&&d.find(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!0);var j=f.attr("rel");d.find(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!1),void 0!==j&&-1!==j.indexOf("nofollow")&&d.find(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!0);var k=f.text();d.find(".fasc-ajax-content input#fasc-popup-button-text").val(k);var l=b(f.css("color"));d.find("#fasc-popup-text-color").val(l),d.find(".fasc-ico-fg .fg-panel").css("background-color",l),this.refreshMiniColors(d.find("#fasc-popup-text-color"),l,d);var m=b(f.css("background-color"));d.find("#fasc-popup-button-color").val(m),d.find(".fasc-ico-bg .bg-panel").css("background-color",m),this.refreshMiniColors(d.find("#fasc-popup-button-color"),m,d);var n=d.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]'),o=f.attr("class").split(/\s+/);n.find(".ico-grid > div > div").removeClass("active");for(var p=0;p<o.length;p++)if("fasc-type"==o[p].substring(0,9)){var q=o[p];(f.hasClass("fasc-rounded-medium")||f.hasClass("rounded"))&&(q+=" fasc-rounded-medium"),d.find("#fasc-popup-button-type option").prop("selected",!1),d.find('#fasc-popup-button-type option[value="'+q+'"]').prop("selected",!0),d.find("#fasc-popup-button-type").val(q)}else if("fasc-style"==o[p].substring(0,10))"fasc-style-bold"==o[p]?d.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","1"):"fasc-style-italic"==o[p]?d.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","1"):"fasc-style-strikethrough"==o[p]&&d.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","1");else if("fasc-size"==o[p].substring(0,9)){var r=o[p];d.find("#fasc-popup-button-size option").prop("selected",!1),d.find('#fasc-popup-button-size option[value="'+r+'"]').prop("selected",!0),d.find("#fasc-popup-button-size").val(r)}else if("dashicons"==o[p].substring(0,9)){n.find(".ico-grid .grid-container").removeClass("ico-screen-active"),n.find("#dashicons-grid").addClass("ico-screen-active"),d.find("#fasc-popup-icon-type-select").val("dashicons-grid"),d.find("#fasc-popup-icon-type-select").trigger("change");var s=o[p];d.find(".ico-grid ."+s).addClass("active")}else if("fa-"==o[p].substring(0,3)){n.find(".ico-grid .grid-container").removeClass("ico-screen-active");var t=n.find(".ico-grid").find("."+o[p]),u=t.parent().attr("id"),v=n.find("#"+u);v.addClass("ico-screen-active"),d.find("#fasc-popup-icon-type-select").val(u),d.find("#fasc-popup-icon-type-select").trigger("change"),d.find(".ico-grid ."+o[p]).addClass("active")}f.hasClass("fasc-ico-before")||f.hasClass("fasc-ico-after")?f.hasClass("fasc-ico-before")?(n.find(".fasc-ico-position").prop("checked",!1),n.find('.fasc-ico-position[value="before"]').prop("checked",!0)):f.hasClass("fasc-ico-after")&&(n.find(".fasc-ico-position").prop("checked",!1),n.find('.fasc-ico-position[value="after"]').prop("checked",!0)):(n.find(".fasc-ico-position").prop("checked",!1),n.find('.fasc-ico-position[value="none"]').prop("checked",!0))}},wp.mce.fascpopup={open:function(b,d,e,f,g){this.type=d,this.templateID=d,this.is_editing=f;var h=c[d].content_id,i=jQuery("<div/>",{class:"fasc-thickbox-overlay"}).appendTo("body"),j=a("#fasc-popup-template").clone();j.removeAttr("id"),j.addClass(h);var k=a("#"+h),l=k.clone();k.remove();var m=j.find(".fasc-thickbox-content"),n=j.find(".fasc-thickbox-title-inner"),o=j.find(".fasc-thickbox-action-right");this.initTemplate(j,l,m,n,o),j.insertAfter(i),c[d].init(b,j,this.is_editing,g),j.show(),this.initEvents(b,j,o,m,l,e)},initTemplate:function(a,b,c,d,e){c.html(b.html());var f=b.attr("data-fasc-title"),g=b.attr("data-fasc-submit-label"),h=b.attr("data-fasc-width"),i=b.attr("data-fasc-height");d.text(f),e.text(g),a.css("max-width",h),a.css("max-height",i)},initEvents:function(b,d,e,f,g,h){var i=this;d.find("label").click(function(){}),d.find(".fasc-close-ajax-window").click(function(){i.removePopup(d,g)}),a(".fasc-thickbox-overlay").on("click",function(a){i.removePopup(d,g)}),e.click(function(a){a.preventDefault(),a.stopImmediatePropagation();var b=c[i.type].createButtonHtml({isSaving:!1,hasID:!0}),e=jQuery(b).attr("data-fasc-id");return h(b,e),i.removePopup(d,g),!1});var k=g.attr("data-fasc-width"),l=g.attr("data-fasc-height");a(window).resize(_.debounce(function(){i.centerPopup(d)},100)),i.centerPopup(d,k,l)},removePopup:function(b,d){var e=this;a(".fasc-thickbox-overlay").remove(),b.remove(),a("body").append(d),d.attr("id",c[e.type].content_id)},centerPopup:function(b,c,d){var e=b.find(".fasc-thickbox-header"),f=b.find(".fasc-thickbox-footer"),g=b.find(".fasc-thickbox-content"),i=(a(window),-b.height()/2),j=-b.width()/2;b.css("position","fixed").css({"margin-left":j+"px","margin-top":i+"px",left:"50%",top:"50%"}),g.hide();var k=b.outerHeight(),l=k;l-=e.outerHeight(),l-=f.outerHeight(),g.height(l),g.show()}}}(jQuery);