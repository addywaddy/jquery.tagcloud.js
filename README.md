jquery.tagcloud.js
==================

Usage
-----
    <div id="whatever">
      <a href="/path" data-weight="7" rel="tag">peace</a>
      <a href="/path" data-weight="3" rel="tag">unity</a>
      <a href="/path" data-weight="10" rel="tag">love</a>
      <a href="/path" data-weight="5" rel="tag">having fun</a>
    </div>

and then:

    $.fn.tagcloud.defaults = {
      size: {start: 14, end: 18, unit: 'pt'},
      color: {start: '#cde', end: '#f52'}
    };

    $(function () {
      $('#whatever a').tagcloud();
    });

Demo
----
[Check it out here](http://addywaddy.github.com/jquery.tagcloud.js/ "jquery.tagcloud.js Demo").
