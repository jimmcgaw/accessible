(function () {
  // Apply focus properly when accessing internal links with keyboard in WebKit browsers.
  $("a[href^='#']").click(function() {
     $("#"+$(this).attr("href").slice(1)+"").focus();
  });
})(); 