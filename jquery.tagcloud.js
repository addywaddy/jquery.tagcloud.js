/*!
 * jquery.tagcloud.js
 * A Simple Tag Cloud Plugin for JQuery
 *
 * https://github.com/addywaddy/jquery.tagcloud.js
 * created by Adam Groves
 */
(function ($) {

    /*global jQuery*/
    "use strict";

    $.fn.tagcloud = function (options) {
        var oOptions = $.extend({
            sSelector: "a",
            sWeightSelector: "rel",
            bJson: false,
            oData: [],
            aSize: {
                start: 10,
                end: 20,
                unit: 'pt'
            },
            aColor: {
                start: '#cde',
                end: '#f52'
            }
        }, options);
        var oOptionsCheck = typeof options == 'object';
        if (oOptionsCheck) {
            if (typeof options.sSelector == 'string') {
                oOptions.sSelector = options.sSelector;
            }
            if (typeof options.sWeightSelector == "string") {
                oOptions.sWeightSelector = options.sWeightSelector;
            }
            if (typeof options.bJson == 'boolean') {
                oOptions.bJson = options.bJson;
            }
            if (typeof options.oData == 'object') {
                oOptions.oData = options.oData;
            }
            if (typeof options.aSize == 'object') {
                oOptions.aSize = options.aSize;
            }
            if (typeof options.aColor == 'object') {
                oOptions.aColor = options.aColor;
            }
        }
        if (oOptions.bJson === true) {
            var sTagCloudHTML = "";
            for (var x = 0; x < oOptions.oData.length; x++) {
               sTagCloudHTML += '<a href="#" ' + ((oOptions.sWeightSelector == "rel") && "rel" ||
                                                 (oOptions.sWeightSelector == "data-weight") && "data-weight") + '="' + oOptions.oData[x].weight + '"> ' + oOptions.oData[x].value + '</a>';
            }
          $( this ).html(sTagCloudHTML);
        }

        var tagWeights = $(this).find(oOptions.sSelector).map(function () {
            return ((oOptions.sWeightSelector == "rel") && $( this ).attr('rel') ||
                    (oOptions.sWeightSelector == "data-weight") && $( this ).data('weight'));
        });

        tagWeights = jQuery.makeArray(tagWeights).sort(compareWeights);

        var lowest = tagWeights[0];
        var highest = tagWeights.pop();
        var range = highest - lowest;
        if (range === 0) {
            range = 1;
        }
        // Sizes
        var fontIncr, colorIncr;
        if (oOptions.aSize) {
            fontIncr = (oOptions.aSize.end - oOptions.aSize.start) / range;
        }
        // Colors
        if (oOptions.aColor) {
            colorIncr = colorIncrement(oOptions.aColor, range);
        }
        $(this).find(oOptions.sSelector).each(function () {
            var weighting = ((oOptions.sWeightSelector == "rel") && $( this ).attr('rel') ||
                            (oOptions.sWeightSelector == "data-weight") && $( this ).data('weight')) - lowest;
            if (oOptions.aSize) {
                $(this).css({
                    "font-size": oOptions.aSize.start + (weighting * fontIncr) + oOptions.aSize.unit
                });
            }
            if (oOptions.aColor) {
                $(this).css({
                    "color": tagColor(oOptions.aColor, colorIncr, weighting)
                });
            }
        });
    };

    var compareWeights = function (a, b) {
        return a - b;
    };

    // Converts hex to an RGB array
    var toRGB = function (code) {
        if (code.length === 4) {
            code = code.replace(/(\w)(\w)(\w)/gi, "$1$1$2$2$3$3");
        }
        var hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
        return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
    };

    // Converts an RGB array to hex
    var toHex = function (ary) {
        return "#" + jQuery.map(ary, function (i) {
            var hex = i.toString(16);
            hex = (hex.length === 1) ? "0" + hex : hex;
            return hex;
        }).join("");
    };

    var colorIncrement = function (color, range) {
        return jQuery.map(toRGB(color.end), function (n, i) {
            return (n - toRGB(color.start)[i]) / range;
        });
    };

    var tagColor = function (color, increment, weighting) {
        var rgb = jQuery.map(toRGB(color.start), function (n, i) {
            var ref = Math.round(n + (increment[i] * weighting));
            if (ref > 255) {
                ref = 255;
            } else {
                if (ref < 0) {
                    ref = 0;
                }
            }
            return ref;
        });
        return toHex(rgb);
    };
}(jQuery));
