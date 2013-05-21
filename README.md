jquery.tagcloud.js
==================

Usage
-----
    <div id="whatever">
      <a href="/path" data-weight="7">peace</a>
      <a href="/path" data-weight="3">unity</a>
      <a href="/path" data-weight="10">love</a>
      <a href="/path" data-weight="5">having fun</a>
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
