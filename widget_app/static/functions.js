function drag_and_resize(parent, child){
    // This script allows a widget to be draggable and resizable
    // TODO: bug with containment where resizing really small allows container to move up
    console.log("hello");
    $(parent).draggable({
      scroll: false,
      containment: "window",
      iframeFix: true
    });

    var $el = $(child);
    var elHeight = $el.outerHeight();
    var elWidth = $el.outerWidth();
    console.log(elHeight);
    console.log(elWidth);

    var $wrapper = $(parent);

    $wrapper.resizable({
      start: function(event, ui) {
            ui.element.append($("<div/>", {
                id: "iframe-barrier",
                css: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    "z-index": 10
                }
            }));
        },
    stop: function(event, ui) {
            $("#iframe-barrier", ui.element).remove();
          }
    });
}
