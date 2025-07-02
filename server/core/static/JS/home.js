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
	const section_04_portfolio_title_wrapper = document.querySelector('.Section_04_Portfolio_Title');
	const section_04_portfolio_title_01 = document.querySelectorAll('.Section_04_Portfolio_Title_span');

	requestAnimationFrame(() => {
		section_04_portfolio_title_wrapper.style.display = 'flex';

		section_04_portfolio_title_01.forEach((span, index) => {

			const baseDelay = 2000;
			const stagger = 200; 
			const delay = baseDelay + index * stagger;
	
			setTimeout(() => {
				span.style.transform = 'translateY(50%)';
				span.style.opacity = '1';
			}, delay);
		});
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

//function to trigger transition from timeline to selected portfolio//
window.triggerCircleAnimation = function (button) {
	console.log('triggerCircleAnimation triggered');

	button.classList.remove('circle_anim_triggered');
	void button.offsetWidth;
	requestAnimationFrame(() => {
		button.classList.add('circle_anim_triggered');
	});

	const group = button.dataset.group;

	const stick = document.querySelector(`.section_04_timeline_sticks_svg[data-group="${group}"]`);
	const stick_02 = document.querySelector(`.section_04_timeline_sticks_svg_02[data-group="${group}"]`);
	const date_year = document.querySelector(`.section_04_timeline_year_h2_tags[data-group="${group}"]`);
	const portfolio_title = document.querySelectorAll(`.Section_04_Portfolio_Title_span[data-group="${group}"]`);
	const portfolio_title_wrapper = document.querySelector(`.Section_04_Portfolio_Title`);

	if (stick) {
		stick.classList.remove('stick_anim_triggered');
		void stick.offsetWidth;
		requestAnimationFrame(() => stick.classList.add('stick_anim_triggered'));
	}

	if (stick_02) {
		stick_02.classList.remove('stick_02_anim_triggered');
		void stick_02.offsetWidth;
		requestAnimationFrame(() => stick_02.classList.add('stick_02_anim_triggered'));
	}

	if (date_year) {
		date_year.classList.remove('year_date_anim_triggered');
		void date_year.offsetWidth;
		requestAnimationFrame(() => date_year.classList.add('year_date_anim_triggered'));
	}

	if (portfolio_title) {

			if (getComputedStyle(portfolio_title_wrapper).display === 'none') {
				portfolio_title_wrapper.style.display = 'flex';
			} else {
				console.warn('Portfolio title wrapper is already set to display flex.');
			}

		requestAnimationFrame(() => {

			let completedAnimations = 0;
			const totalSpans = portfolio_title.length;
	
			portfolio_title.forEach((span, index) => {
				span.offsetHeight;
	
				span.classList.remove('title_span_triggered');
				span.style.animation = '';
				void span.offsetHeight;
	
				// Add the class to start animation
				span.style.animationDelay = `${index * 90}ms`;
				span.classList.add('title_span_triggered');
	
				// Listen for the end of animation and clean up
				const handleAnimationEnd = () => {
					span.classList.remove('title_span_triggered');

					completedAnimations++;
					if (completedAnimations === totalSpans) {
						console.log('All title animations completed');
						portfolio_title_wrapper.style.display = 'none';
					}

					span.removeEventListener('animationend', handleAnimationEnd);
				};
	
				span.addEventListener('animationend', handleAnimationEnd);
			});
		});
	}

	// Lookup table for wrappers by group
	const wrappers = {
		'1': document.querySelector('.section_04_portfolio_display_main_wrapper_2020'),
		'2': document.querySelector('.section_04_portfolio_display_main_wrapper_2021'),
		'3': document.querySelector('.section_04_portfolio_display_main_wrapper_2022'),
		'4': document.querySelector('.section_04_portfolio_display_main_wrapper_2023'),
		'5': document.querySelector('.section_04_portfolio_display_main_wrapper_2024')
	};

	// Delay opening selected portfolio until after Main title animation completes
	setTimeout(() => {
		const wrapper = wrappers[group];

		if (wrapper) {

			requestAnimationFrame(() => {
				void wrapper.offsetHeight;
				wrapper.classList.add('section_04_portfolio_display_main_wrapper_triggered_open');

				wrapper.addEventListener('animationend', function handleMainPtfloWrapperStartLoadAnimationEnd() {
					wrapper.classList.remove('section_04_portfolio_display_main_wrapper_triggered_open');
					wrapper.style.width = '95%';
					wrapper.style.opacity = '1';
					wrapper.removeEventListener('animationend', handleMainPtfloWrapperStartLoadAnimationEnd);
				});
			});

			void wrapper.offsetHeight;
		}
	}, 850 + portfolio_title.length * 90);
};

window.PortfolioCategoryButtonAnimations = function (button) {
	const group = button.dataset.group;

	document.querySelectorAll('.section_04_portfolio_wrapper').forEach(wrapper => {
		wrapper.classList.remove('portfolio_reveal_anim_triggered');
		wrapper.style.display = 'none';
	});

	document.querySelectorAll('.section_04_select_portfolio_section_wrapper').forEach(wrapper => {
		wrapper.style.display = 'none';
	});

	const target_portfolio = document.querySelector(`.section_04_portfolio_wrapper[data-group="${group}"]`);
	if (target_portfolio) {
		void target_portfolio.offsetHeight; // force reflow
		target_portfolio.style.display = 'flex';
		requestAnimationFrame(() => {
			target_portfolio.classList.add('portfolio_reveal_anim_triggered');
		});
	}
};

//function to close main portfolio display wrappers


window.PortfolioReturnTimelineButtonAnimation = function (button) {
	const group = button.dataset.group;

	// Title wrapper and spans
	const return_portfolio_title_wrapper = document.querySelector('.Section_04_Portfolio_Title');
	const return_portfolio_title = document.querySelectorAll('.Section_04_Portfolio_Title_span');

	// Portfolio display wrappers mapped by group
	const allWrappers = {
		'0001': document.querySelector('.section_04_portfolio_display_main_wrapper_2020'),
		'0002': document.querySelector('.section_04_portfolio_display_main_wrapper_2021'),
		'0003': document.querySelector('.section_04_portfolio_display_main_wrapper_2022'),
		'0004': document.querySelector('.section_04_portfolio_display_main_wrapper_2023'),
		'0005': document.querySelector('.section_04_portfolio_display_main_wrapper_2024')
	};

	const wrapper = allWrappers[group];
	if (!wrapper) {
		console.warn(`No wrapper found for group: ${group}`);
		return;
	}

	// Trigger close animation on wrapper
	requestAnimationFrame(() => {
		wrapper.classList.add('prtfl_main_wrapper_close_return_btn_triggered');

		// Wait for wrapper animation to end
		wrapper.addEventListener('animationend', function handleWrapperClose() {

			// Slight delay to let browser finalize paint before removing class
			setTimeout(() => {
				wrapper.classList.remove('prtfl_main_wrapper_close_return_btn_triggered');
				wrapper.style.display = 'none';
				wrapper.offsetHeight;

				return_portfolio_title_wrapper.style.display = 'flex';
				return_portfolio_title_wrapper.style.visibility = 'visible';


				// Animate each title span with stagger
				return_portfolio_title.forEach((span, index) => {

					void span.offsetHeight;
					span.style.animationDelay = `${index * 90}ms`;
					span.classList.add('ptfl_left_span_animation_return_btn_triggered');

					span.addEventListener('animationend', function handleReturnSpanTitleAnim() {
						span.classList.remove('ptfl_left_span_animation_return_btn_triggered');
						span.removeEventListener('animationend', handleReturnSpanTitleAnim);
					});
				});

				if (getComputedStyle(portfolio_title_wrapper).display === 'flex') {
					portfolio_title_wrapper.style.display = 'none';
					console.log('Timeline title Element hidden successfully.');
				} else {
					console.warn('Timeline Element is not set to display flex, cannot hide.');
				}

				wrapper.removeEventListener('animationend', handleWrapperClose);
			}, 50); // small delay after animation end to ensure smooth flow
		});
	});
};