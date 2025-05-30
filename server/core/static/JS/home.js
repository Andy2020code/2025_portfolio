let current = 0;
const sections = document.querySelectorAll('.section');

window.scrollTo(0, 0);

sections.forEach((sec, index) => {
sec.style.transform = `translateY(${(index - current) * 100}%)`;
});
  
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0 && current < sections.length - 1) {
    current++;
  } else if (e.deltaY < 0 && current > 0) {
    current--;
  }
  sections.forEach((sec, index) => {
    sec.style.transform = `translateY(${(index - current) * 100}%)`;
  });
});

const page_02_observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('page_02_animation');
      // Optionally, stop observing after animation starts
      obs.unobserve(entry.target);
    } else {
      entry.target.classList.remove('page_02_animation');
    }
  });
});

[
  '.section_02_header_image_01',
  '.section_02_header_image_01 h2',
  '.section_02_content_01_wrapper',
  '.section_02_title_wrapper span',
  '.section_02_decor_01_element',
  '.section_02_content_title span',
  '.element_content',
  '.element_content_img',
  '.element_content_text_title',
  '.element_content_text_description',
  '.scroll_arrow_down_circle_icon_wrapper_section_02'
].forEach(selector =>
  document.querySelectorAll(selector).forEach(el => page_02_observer.observe(el))
);

const page_03_observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('page_03_animation');
      // Optionally, stop observing after animation starts
      obs.unobserve(entry.target);
    } else {
      entry.target.classList.remove('page_03_animation');
    }
  });
});

[
  '.section_03_header_title_wrapper_01 h2',
  '.section_03_header_title_wrapper h2',
  '.section_03_01_header_title_wrapper span',
  '.section_03_01_content_element_01',
  '.section_03_01_content_element_01_title span',
  '.arrow_right_01_svg_icon',
  '.section_03_01_content_element_01_description p',
  '.glass_flare_01',
  '.section_03_01_content_sub_elements',
  '.section_03_01_content_sub_elements img',
  '.section_03_01_content_sub_elements h2',
  '.card_04',
  '.card_05',
  '.glass_flare_02',
  '.card_elements',
  '.section_03_media_01',
  '.section_03_02_media_content_text',
  '.section_03_02_media_content_text span',
  '.section_03_02_vertical_text',
  '.section_03_02_vertical_text span',
  '.section_03_scroll_arrow_down_circle_icon_wrapper',
  '.section_03_scroll_arrow_down_svg_button',

].forEach(selector =>
  document.querySelectorAll(selector).forEach(el => page_03_observer.observe(el))
);

const page_04_observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('page_04_animation');
      // Optionally, stop observing after animation starts
      obs.unobserve(entry.target);
    } else {
      entry.target.classList.remove('page_04_animation');
    }
  });
});

[
  '.Section_04_Portfolio_Title span',
  '.section_04_portfolio_timeline_container',
  '.section_04_timeline_path',
  '.section_04_timeline_circle_elements button',
  '.section_04_timeline_circle_svg',
  '.section_04_timeline_sticks_elements',
  '.section_04_timeline_sticks_svg',
  '.section_04_timeline_sticks_elements_02 svg',
  '.section_04_timeline_year_numbers h2',

].forEach(selector =>
  document.querySelectorAll(selector).forEach(el => page_04_observer.observe(el))
);

document.addEventListener("DOMContentLoaded", () => {
	const svgs = document.querySelectorAll('.section_04_timeline_circle_svg');

	svgs.forEach((svg, index) => {
		const baseDelay = 2000; // 1s
		const stagger = 100;    // 0.1s per item
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			svg.style.transform = 'scale(1)';
		}, delay);
	});
});
// Circle button animation on page load

document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll('.circle_btn_anim_trigger');

	buttons.forEach((btn, index) => {
		const baseDelay = 2000; // 1s base delay
		const stagger = 100;    // 0.1s per button
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			btn.style.transform = 'scale(1)';
		}, delay);
	});
});

// Click-triggered animation (keep if you want to bounce on click too)
window.triggerCircleAnimation = function (button) {
	button.classList.remove('circle_anim_triggered');
	void button.offsetWidth;
	button.classList.add('circle_anim_triggered');
};