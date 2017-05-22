/* global tinymce */

/*
 * The TinyMCE view API.
 *
 * Note: this API is "experimental" meaning that it will probably change
 * in the next few releases based on feedback from 3.9.0.
 * If you decide to use it, please follow the development closely.
 *
 * Diagram
 *
 * |- registered view constructor (type)
 * |  |- view instance (unique text)
 * |  |  |- editor 1
 * |  |  |  |- view node
 * |  |  |  |- view node
 * |  |  |  |- ...
 * |  |  |- editor 2
 * |  |  |  |- ...
 * |  |- view instance
 * |  |  |- ...
 * |- registered view
 * |  |- ...
 */
!function(a,b,c,d){"use strict";var e={},f={};b.mce=b.mce||{},b.mce.fascviews={register:function(a,b){},unregister:function(a){delete e[a]},get:function(a){return e[a]},unbind:function(){_.each(f,function(a){a.unbind()})},render:function(a){_.each(f,function(b){b.render(a)})},edit:function(a,b){var c=this.getInstance(b);c&&c.edit&&c.edit(c.text,function(d,e){c.update(d,a,b,e)})},remove:function(a,b){var c=this.getInstance(b);c&&c.remove(a,b)}},b.mce.View=function(a){_.extend(this,a),this.initialize()},b.mce.View.extend=Backbone.View.extend,_.extend(b.mce.View.prototype,{content:null,loader:!0,initialize:function(){},getContent:function(){return this.content}})}(window,window.wp,window.wp.shortcode,window.jQuery);