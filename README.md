jquery.tagcloud.js
==================

Usage
-----
    <div id="whatever">
      <a href="/path" rel="7">peace</a>
      <a href="/path" rel="3">unity</a>
      <a href="/path" rel="10">love</a>
      <a href="/path" rel="5">having fun</a>
    </div>

and then:

    $(document).ready(function(){
      $.fn.tagcloud.defaults = {
        size: {start: 14, end: 18, unit: "pt"},
        color: {start: '#cde', end: '#f52'}
      };
    });

Demo
----
[Check it out here](http://addywaddy.github.com/jquery.tagcloud.js/ "jquery.tagcloud.js Demo").
