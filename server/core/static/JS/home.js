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
	
	const stagger = 200;

	setTimeout(() => {
		requestAnimationFrame(() => {

			if (getComputedStyle(section_04_portfolio_title_wrapper).display === 'none') {
				section_04_portfolio_title_wrapper.style.display = 'flex';
			} else {
				console.warn('Portfolio title wrapper is already set to display flex.');
			}
	
			section_04_portfolio_title_01.forEach((span, index) => {
				void span.offsetHeight;
	
				span.style.animationDelay = `${index * stagger}ms`;
				span.classList.add('title_span_Page_load_triggered');
	
				// Listen for the end of animation and clean up
				span.addEventListener('animationend', function handlePortfolioMainTitlePageLoadAnimationEnd() {
					if (typeof onLoadTitleShowComplete === 'function') {
						onLoadTitleShowComplete();
					}
					span.removeEventListener('animationend', handlePortfolioMainTitlePageLoadAnimationEnd);
				});
			});
		});
	}, 2000);
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
	const portfolio_title = document.querySelectorAll(`.Section_04_Portfolio_Title_span`);

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
		triggerPortfolioMainTitleHideAnimation(portfolio_title);
	}

	// Lookup table for wrappers by group
	const wrappers = {
		'1': document.querySelector('.section_04_portfolio_display_main_wrapper_2020'),
		'2': document.querySelector('.section_04_portfolio_display_main_wrapper_2021'),
		'3': document.querySelector('.section_04_portfolio_display_main_wrapper_2022'),
		'4': document.querySelector('.section_04_portfolio_display_main_wrapper_2023'),
		'5': document.querySelector('.section_04_portfolio_display_main_wrapper_2024')
	};

	const wrapper = wrappers[group];

	// Delay opening selected portfolio until after Main title animation completes
	setTimeout(() => {
		triggerPortfolioWrapperOpen(wrapper);
	}, 600 + portfolio_title.length * 90);
};

function triggerPortfolioMainTitleShowAnimation(return_portfolio_title, onTitleShowComplete) {
	const portfolio_title_wrapper = document.querySelector(`.Section_04_Portfolio_Title`);
	const stagger = 100;

	if (return_portfolio_title) {

		requestAnimationFrame(() => {

			if (getComputedStyle(portfolio_title_wrapper).display === 'none') {
				portfolio_title_wrapper.style.display = 'flex';
			} else {
				console.warn('Portfolio title wrapper is already set to display flex.');
			}
	
			return_portfolio_title.forEach((span, index) => {
				span.classList.remove('title_span_triggered');
				void span.offsetHeight;

				span.style.animationDelay = `${index * stagger}ms`;
				span.classList.add('ptfl_left_span_animation_return_btn_triggered');
	
				// Listen for the end of animation and clean up
				span.addEventListener('animationend', function handlePortfolioMainTitleShowAnimationEnd() {
					if (typeof onTitleShowComplete === 'function') {
						onTitleShowComplete();
					}
					span.removeEventListener('animationend', handlePortfolioMainTitleShowAnimationEnd);
				});
			});
		});
	}
}

function triggerPortfolioMainTitleHideAnimation(portfolio_title, onTitleHideComplete) {
	const portfolio_title_wrapper = document.querySelector(`.Section_04_Portfolio_Title`);
	const stagger = 100;

	if (portfolio_title) {

		requestAnimationFrame(() => {
			portfolio_title.forEach((span, index) => {
				span.classList.remove('title_span_Page_load_triggered');
				span.classList.remove('ptfl_left_span_animation_return_btn_triggered');
				void span.offsetHeight;

				span.style.animationDelay = `${index * stagger}ms`;
				span.classList.add('title_span_triggered');
	
				// Listen for the end of animation and clean up
				span.addEventListener('animationend', function handlePortfolioMainTitleHideAnimationEnd() {

					if (typeof onTitleHideComplete === 'function') {
						onTitleHideComplete();
					}
					span.removeEventListener('animationend', handlePortfolioMainTitleHideAnimationEnd);
				});
			});

			setTimeout(() => {
				if (getComputedStyle(portfolio_title_wrapper).display === 'flex') {
					portfolio_title_wrapper.style.display = 'none';
				} else {
					console.warn('Portfolio title wrapper is already set to display none.');
				}
			}, 650 + portfolio_title.length * 90);
		});
	}
}

function triggerPortfolioWrapperOpen(wrapper, onWrapperOpenComplete) {

	let wrapper_element_trigger_on = false;

	if (wrapper) {

		if (getComputedStyle(wrapper).display === 'none') {
			wrapper.style.display = 'flex';
		} else {
			console.warn('Portfolio title wrapper is already set to display flex.');
		}

		requestAnimationFrame(() => {
			wrapper.classList.remove('prtfl_main_wrapper_close_return_btn_triggered');
			void wrapper.offsetHeight;

			wrapper.classList.add('section_04_portfolio_display_main_wrapper_triggered_open');

			setTimeout(() => {

				wrapper_element_trigger_on = true;
				if (wrapper_element_trigger_on) {
					triggerPortfolioWrapperElementsOn(wrapper_element_trigger_on);
				} else {
					console.warn('No elements to trigger on for the portfolio wrapper.');
					return;
				}

				wrapper.addEventListener('animationend', function handleMainPtfloWrapperStartLoadAnimationEnd() {

					if (typeof onWrapperOpenComplete === 'function') {
						onWrapperOpenComplete();
					}
					wrapper.removeEventListener('animationend', handleMainPtfloWrapperStartLoadAnimationEnd);
				});
			}, 2000 + wrapper.length);
		});
	}
}

function triggerPortfolioWrapperElementsOn(wrapper_element_trigger_on, onWrapperEleTriggerOnComplete) {

	const stagger = 100;

	const onportfolioUI = [
		document.querySelector('.section_04_portfolio_year_return_button'),
		document.querySelector('.section_04_portfolio_left_span_wrapper'),
		document.querySelector('.section_04_portfolio_display_devider_01'),
		document.querySelector('.section_04_portfolio_category_wrapper'),
		document.querySelector('.section_04_select_portfolio_section_wrapper'),
		document.querySelector('.section_04_portfolio_wrapper')
	];

	if (wrapper_element_trigger_on) {
		requestAnimationFrame(() => {
			setTimeout(() => {
				onportfolioUI.forEach((el, index) => {
					if (!el) {
						return;
					}

					void el.offsetHeight;

					el.style.display = 'flex';

					setTimeout(() => {
						el.style.transition = 'opacity 0.3s cubic-bezier(0.65, 0.3, 0.35, 1.5)';
						el.style.opacity = '1';
						el.style.visibility = 'visible';
						el.style.pointerEvents = 'auto';
						
					}, index * stagger); // stagger delay


					// Listen for transition end
					el.addEventListener('transitionend', function handlePtfloEleOnTransitionEnd() {
						void el.offsetHeight;
						
						if (typeof onWrapperEleTriggerOnComplete === 'function') {
							onWrapperEleTriggerOnComplete();
						}
						el.removeEventListener('transitionend', handlePtfloEleOnTransitionEnd);
					});
				});
			}, 350);
		});
	}
}

function triggerPortfolioWrapperClose(button_group, onWrapperCloseComplete) {

	const group = button_group;
	let wrapper_element_trigger_off = false;

	if (group) {
		// Portfolio display wrappers mapped by group
		const allWrappers = {
			'0001': document.querySelector('.section_04_portfolio_display_main_wrapper_2020'),
			'0002': document.querySelector('.section_04_portfolio_display_main_wrapper_2021'),
			'0003': document.querySelector('.section_04_portfolio_display_main_wrapper_2022'),
			'0004': document.querySelector('.section_04_portfolio_display_main_wrapper_2023'),
			'0005': document.querySelector('.section_04_portfolio_display_main_wrapper_2024')
		};

		const wrapper_return_animation = allWrappers[group];
		if (!wrapper_return_animation) {
			console.warn(`No wrapper found for group: ${group}`);
			return;

		} else {

			requestAnimationFrame(() => {
				wrapper_element_trigger_off = true;

				if (wrapper_element_trigger_off) {
					triggerPortfolioWrapperElementsOff(wrapper_element_trigger_off);
				} else {
					console.warn('No elements to trigger off for the portfolio wrapper.');
					return;
				}

				setTimeout(() => {
					wrapper_return_animation.classList.remove('section_04_portfolio_display_main_wrapper_triggered_open'); 
					void wrapper_return_animation.offsetHeight;

					wrapper_return_animation.classList.add('prtfl_main_wrapper_close_return_btn_triggered');

					wrapper_return_animation.addEventListener('animationend', function handleMainPtfloWrapperCloseAnimationEnd() {

						if (typeof onWrapperCloseComplete === 'function') {
							onWrapperCloseComplete();
						}
						wrapper_return_animation.removeEventListener('animationend', handleMainPtfloWrapperCloseAnimationEnd);
					});
				}, 200 + triggerPortfolioWrapperElementsOff.length * 90);
			});
		}
	}
}

function triggerPortfolioWrapperElementsOff(wrapper_element_trigger_off, onWrapperEleTriggerOffComplete) {

	const stagger = 300;
	
	const portfolioUI = [
		document.querySelector('.section_04_portfolio_year_return_button'),
		document.querySelector('.section_04_portfolio_left_span_wrapper'),
		document.querySelector('.section_04_portfolio_display_devider_01'),
		document.querySelector('.section_04_portfolio_category_wrapper'),
		document.querySelector('.section_04_select_portfolio_section_wrapper'),
		document.querySelector('.section_04_portfolio_wrapper')
	];

	if (wrapper_element_trigger_off) {
		requestAnimationFrame(() => {
			setTimeout(() => {
				portfolioUI.forEach((el, index) => {
					if (!el) {
						return;
					}

					setTimeout(() => {
						el.style.transition = 'opacity 0.5s cubic-bezier(0.65, 0.3, 0.35, 1.5)';
						el.style.opacity = '0';
						el.style.pointerEvents = 'none';
						el.style.visibility = 'hidden';

						setTimeout(() => {
							el.style.display = 'none';
						}, 500); // match transition duration
					}, index * stagger); // stagger delay


					// Listen for transition end
					el.addEventListener('transitionend', function handletriggerPortfolioWrapperElementsOffAnimationEnd() {
						if (typeof onWrapperEleTriggerOffComplete === 'function') {
							onWrapperEleTriggerOffComplete();
						}
						el.removeEventListener('transitionend', handletriggerPortfolioWrapperElementsOffAnimationEnd);
					});
				});
			}, 200);

		});
	}
}

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

	//clicked buttion group
	button_group = button.dataset.group.padStart(4, '0');

	// Title spans
	const return_portfolio_title = document.querySelectorAll('.Section_04_Portfolio_Title_span');

	// Trigger close animation on wrapper
	requestAnimationFrame(() => {
		triggerPortfolioWrapperClose(button_group);

		// Wait for wrapper animation to end
		setTimeout(() => {

			// Animate each title span with stagger
			triggerPortfolioMainTitleShowAnimation(return_portfolio_title);
		}, 650 + triggerPortfolioWrapperClose.length);
	});
};