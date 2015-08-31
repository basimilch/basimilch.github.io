jQuery( function() { ( function( $$, $, undefined ) {

  /* Make all non-local links open in new tab */
  $("a[href^=http]").attr("target", "_blank");

  /* Add download attr to /download links */
  $("a[href^='/downloads/']")
    .attr("target", "_blank")
    .attr("download", "");

  /* Add direct links on hover over section titles */
  $("h1[id],h2[id],h3[id],h4[id]").hover(
    function(){
      var $this = $(this);
      if ( $this.data("section-title-link-already-added") ) {
        $this.find(".section-title-link").toggleClass("hidden");
      } else {
        var faqLinkHTML = "<a class='section-title-link' href='#" + $this.attr("id") + "'>[link]</span></a>";
        $this.append(faqLinkHTML);
        $this.data("section-title-link-already-added", true);
      }
    });

  var topThreshold = 325,
      topLinkShown = false,
      $topLink     = $(".top-link");
  $(window).scroll(function(){
    if ( this.scrollY > topThreshold && ! topLinkShown ) {
      topLinkShown = true;
      $topLink.stop().fadeIn("fast");
    } else if ( this.scrollY < topThreshold && topLinkShown ) {
      topLinkShown = false;
      $topLink.stop().fadeOut("fast");
    }
  });
  function removeHash () {
    if ( window.location.hash ) {
      history.pushState("",
                        document.title,
                        window.location.pathname + window.location.search);
    }
  }
  $topLink.click(function(){
    var topElemPosition = $("#inhalt").parent().find("h1:first-of-type").position() ||
                          $("#markdown-toc").position(),
        scrollTopPosition = topElemPosition ? topElemPosition.top : 0,
        scrollTopPosition = (window.scrollY > scrollTopPosition) ? scrollTopPosition : 0;
    $("html,body").animate({scrollTop : scrollTopPosition},"fast");
    removeHash();
    return false;
  });

}( window.basimilch = window.basimilch || {}, jQuery ));});