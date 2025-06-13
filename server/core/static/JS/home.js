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
	const section_04_portfolio_title_01 = document.querySelectorAll('.Section_04_Portfolio_Title_span');

	section_04_portfolio_title_01.forEach((span, index) => {
		const baseDelay = 2000; // 1s
		const stagger = 200;    // 0.1s per item
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			span.style.transform = 'translateY(50%)';
      span.style.opacity = '1';
		}, delay);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const red_timeline_container = document.querySelector('.section_04_portfolio_timeline_container');

	const baseDelay = 2100;

	setTimeout(() => {
		red_timeline_container.style.opacity = '1';
    red_timeline_container.style.transform = 'scaleX(1)';
	}, baseDelay);
});

document.addEventListener("DOMContentLoaded", () => {
	const timeline_bar_svg = document.querySelector('.section_04_timeline_path_svg');

	const baseDelay = 2300;

	setTimeout(() => {
    timeline_bar_svg.style.transform = 'scaleX(1)';
	}, baseDelay);
});

document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll('.circle_btn_anim_trigger');


	buttons.forEach((btn, index) => {
		const baseDelay = 2600;
		const stagger = 150;
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			btn.style.transform = 'scale(1)';
		}, delay);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const svgs = document.querySelectorAll('.section_04_timeline_sticks_svg');

	svgs.forEach((svg, index) => {
		const baseDelay = 2200; // 1s
		const stagger = 100;    // 0.1s per item
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			svg.style.transform = 'scale(1)';
		}, delay);
	});
});





document.addEventListener("DOMContentLoaded", () => {
	const svgs = document.querySelectorAll('.section_04_timeline_sticks_svg_02');

	svgs.forEach((svg, index) => {
		const baseDelay = 2300; // 1s
		const stagger = 100;    // 0.1s per item
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			svg.style.transform = 'scale(1)';
		}, delay);
	});
});

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

document.addEventListener("DOMContentLoaded", () => {
	const text = document.querySelectorAll('.section_04_timeline_year_h2_tags');

	text.forEach((h2, index) => {
		const baseDelay = 2250; // 1s
		const stagger = 100;    // 0.1s per item
		const delay = baseDelay + index * stagger;

		setTimeout(() => {
			h2.style.clipPath = 'inset(-20px 0 0 0)';
		}, delay);
	});
});

window.triggerCircleAnimation = function (button) {
	// Circle animation reset
	button.classList.remove('circle_anim_triggered');

	// Trigger reflow
	void button.offsetWidth;

	// Re-add class after a minimal delay
	requestAnimationFrame(() => {
		button.classList.add('circle_anim_triggered');
	});

	const group = button.dataset.group;
	const stick = document.querySelector(`.section_04_timeline_sticks_svg[data-group="${group}"]`);
  const stick_02 = document.querySelector(`.section_04_timeline_sticks_svg_02[data-group="${group}"]`);
  const date_year = document.querySelector(`.section_04_timeline_year_h2_tags[data-group="${group}"]`);
  const portfolio_title = document.querySelectorAll(`.Section_04_Portfolio_Title_span[data-group="${group}"]`);

	if (stick) {

		stick.classList.remove('stick_anim_triggered');
		void stick.offsetWidth;

		requestAnimationFrame(() => {
			stick.classList.add('stick_anim_triggered');
		});
	}

  if (stick_02) {

		stick_02.classList.remove('stick_02_anim_triggered');
		void stick_02.offsetWidth;

		requestAnimationFrame(() => {
			stick_02.classList.add('stick_02_anim_triggered');
		});
	}

  if (date_year) {

		date_year.classList.remove('year_date_anim_triggered');
		void date_year.offsetWidth;

		requestAnimationFrame(() => {
			date_year.classList.add('year_date_anim_triggered');
		});
	}

	if (portfolio_title) {
		portfolio_title.forEach((span, index) => {
			span.classList.remove('title_span_triggered');
			span.style.animation = 'none';
			span.offsetHeight; // Force reflow
			span.style.animation = `Section_04_Portfolio_Title_Span_animation 0.85s cubic-bezier(0.65, 0.3, 0.35, 1.5) forwards`;
			span.style.animationDelay = `${index * 90}ms`;
			span.classList.add('title_span_triggered');
		});

		setTimeout(() => {
			trigger_open_section_04_portfolio_display_animation();
		}, 850 + portfolio_title.length * 90); // Total duration of the title animation
	}
};


//Function to display the selected portfolio items based on the year//

function trigger_open_section_04_portfolio_display_animation() {
	const Portfolio_Main_Wrapper = document.getElementById('section_04_portfolio_display_main_wrapper');
	Portfolio_Main_Wrapper.classList.add('section_04_portfolio_display_main_wrapper_triggered_open');
}

function trigger_close_section_04_portfolio_display_animation() {
	const Portfolio_Main_Wrapper = document.getElementById('section_04_portfolio_display_main_wrapper');
	Portfolio_Main_Wrapper.classList.add('section_04_portfolio_display_main_wrapper_triggered_close');
}

//You were editing the blur effect in the buttons of the portfolio display. You removed the position:relative stuff and it wont get begind of the text