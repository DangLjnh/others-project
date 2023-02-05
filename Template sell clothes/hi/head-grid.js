const section = $("body > section");

let sectionOffsetTop = [];
$.each(section, function (indexInArray, valueOfElement) {
  sectionOffsetTop.push($(valueOfElement).offset().top);
  // console.log(sectionOffsetTop);
});
$(window).scroll(function () {
  const currentPos = $("html, body").scrollTop();
  for (let i = 0; i < sectionOffsetTop.length; i++) {
    console.log(sectionOffsetTop[i]);
    if (
      currentPos > sectionOffsetTop[i - 1] &&
      currentPos < sectionOffsetTop[i]
    ) {
      console.log("Da di qua section ", i + 1);
      const animateClassLeft = $(section)
        .eq(i)
        .find(".left")
        .attr("data-animate");
      const animateClassRight = $(section)
        .eq(i)
        .find(".right")
        .attr("data-animate");
      $(section).eq(i).find(".left").addClass(animateClassLeft);
      $(section).eq(i).find(".right").addClass(animateClassRight);
    }
  }
});
