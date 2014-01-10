jquery.tagcloud.js
==================

Usage with JSON data:

    Create a new div element with a unique ID.
    
    <div id="tagcloudwithJSON">
    </div>


    Create the JSON data.
    
    var oJsonData = [{"weight":"0.1","value":"Lorem"},
        {"weight":"2","value":"ipsum"},
        {"weight":"3","value":"dolor"},
        {"weight":"4","value":"sit"},
        {"weight":"5","value":"amet,"},
        {"weight":"6","value":"consectetur"},
        {"weight":"7","value":"adipisicing"}
    ];


    Initialize the tagcloud plugin.

    $(function () {
      $('#tagcloudwithJSON').tagcloud({
        "sWeightSelector": "data-weight",
        "bJson": true,
        "oData": oJsonData
      });
    });


Usage without JSON data:

    Create a new div element with a unique ID.
    
    <div id="tagcloudwithoutJSON">
        <a href="#" rel="0.1">Lorem</a>
        <a href="#" rel="2">ipsum</a>
        <a href="#" rel="3">dolor</a>
        <a href="#" rel="4">sit</a>
        <a href="#" rel="5">amet,</a>
    </div>
    
    
    Initialize the tagcloud plugin.
    
    $(function () {
        $('#tagcloudwithoutJSON').tagcloud();
    });
      
     
Demo
----
[Check it out here](http://addywaddy.github.com/jquery.tagcloud.js/ "jquery.tagcloud.js Demo").
