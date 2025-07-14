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

document.addEventListener("DOMContentLoaded", async() => {
	const section_04_portfolio_title_01 = document.querySelectorAll('.Section_04_Portfolio_Title_span');
	const stagger = 200;

	try {
		await portfolio_title_wrapper_switch(true);
		console.log('Portfolio title wrapper switch function called in page load.');

		setTimeout(() => {

			requestAnimationFrame(() => {
				section_04_portfolio_title_01.forEach((span, index) => {
					void span.offsetHeight;
					span.style.animationDelay = `${index * stagger}ms`;
					span.classList.add('title_span_Page_load_triggered');
				});
			});
		}, 2000);
		
	} catch (error) {
		console.error('Error calling portfolio_title_wrapper_switch in page load:', error);
	}
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

// Add event listeners to all buttons with the class 'circle_btn_anim_trigger'
// This will trigger the portfolio wrapper animation when any button is clicked
document.querySelectorAll('.circle_btn_anim_trigger').forEach(button => {
	button.addEventListener('click', () => triggerCircleAnimation(button));
});

async function triggerCircleAnimation(button, onPtflTimelineAnimationComplete) {
	let trigger_check = true;
	if (!trigger_check) {
		console.warn('Animation Trigger check failed.');
		return;
	}

	const group = button.dataset.group;
	if (!group) {
		console.error('No group found on button.');
		return;
	}

	const stick = document.querySelector(`.section_04_timeline_sticks_svg[data-group="${group}"]`);
	const stick_02 = document.querySelector(`.section_04_timeline_sticks_svg_02[data-group="${group}"]`);
	const date_year = document.querySelector(`.section_04_timeline_year_h2_tags[data-group="${group}"]`);
	const portfolio_title = document.querySelectorAll('.Section_04_Portfolio_Title_span');

	console.log('Portfolio Year Selected');

	// Utility function to handle animation with class
	const animateWithClass = (el, className) => {
		return new Promise((resolve) => {
			trigger_check = false;
			if (!el) return resolve();

			el.classList.remove(className);
			void el.offsetWidth;

			const onTimelineAnimEnd = function () {
				el.removeEventListener('animationend', onTimelineAnimEnd);

				if (typeof onPtflTimelineAnimationComplete === 'function') {
					onPtflTimelineAnimationComplete();
				}

				resolve();
			};

			requestAnimationFrame(() => {
				el.addEventListener('animationend', onTimelineAnimEnd);
				el.classList.add(className);
			});
		});
	};


	// Start portfolio title hide animation (already async internally)
	triggerPortfolioMainTitleHideAnimation(portfolio_title);

	// Wait for individual timeline elements to animate
	try {
		await Promise.all([
			animateWithClass(button, 'circle_anim_triggered'),
			animateWithClass(stick, 'stick_anim_triggered'),
			animateWithClass(stick_02, 'stick_02_anim_triggered'),
			animateWithClass(date_year, 'year_date_anim_triggered')
		]);

		await triggerPortfolioWrapperOpen(group)
		trigger_check = true;

	} catch (error) {
		console.error('Error during timeline animations:', error);
	}
}


function getDefaultDisplay(tagName) {
	const temp = document.createElement(tagName);
	document.body.appendChild(temp);

	const display = getComputedStyle(temp).display;
	document.body.removeChild(temp); 

	const showStates = new Set(['none', 'inline', 'inline-block', 'block']);
	const targetDisplay = showStates.has(display) ? 'flex' : 'none';

	console.log(`Default display for <${tagName}> is: ${display}`);
	return targetDisplay;
}

async function portfolio_title_wrapper_switch() {
	await new Promise((resolve) => {
		const wrapper = document.querySelector('.Section_04_Portfolio_Title');
		if (!wrapper) {
			console.warn('toggleDisplay: wrapper not found.');
			return;
		}
		
		const currentDisplay = getComputedStyle(wrapper).display;
		const isHidden = currentDisplay === 'none';
		const target = wrapper.dataset.display || getDefaultDisplay(wrapper.tagName.toLowerCase());

		requestAnimationFrame(() => {
			void wrapper.offsetHeight;
			wrapper.style.display = isHidden ? target : target;
			console.log(`Wrapper is now: ${wrapper.style.display}`);
			resolve();
		});
	});
}

async function triggerPortfolioMainTitleShowAnimation(onTitleShowComplete) {
	const stagger = 100;
	const portfolio_title_wrapper = document.querySelector('.Section_04_Portfolio_Title');
	const return_portfolio_title = document.querySelectorAll('.Section_04_Portfolio_Title_span');

	if (!portfolio_title_wrapper || return_portfolio_title.length === 0) {
		console.warn('Missing wrapper or title spans.');
		return;
	}

	try {
		await portfolio_title_wrapper_switch();
		console.log('Portfolio title wrapper switch called in portfolioMainTitleShowAnimation.');
	} catch (error) {
		console.error('Error in portfolio_title_wrapper_switch:', error);
	}

	requestAnimationFrame(() => {
		return_portfolio_title.forEach((span, index) => {
			span.classList.remove('title_span_triggered');
			void span.offsetHeight;

			span.style.animationDelay = `${index * stagger}ms`;
			span.classList.add('ptfl_left_span_animation_return_btn_triggered');

			const handlePortfolioMainTitleShowAnimationEnd = () => {
				if (typeof onTitleShowComplete === 'function') {
					onTitleShowComplete();
				}
				span.removeEventListener('animationend', handlePortfolioMainTitleShowAnimationEnd);
			};

			span.addEventListener('animationend', handlePortfolioMainTitleShowAnimationEnd, { once: true });
		});
	});
}

function triggerPortfolioMainTitleHideAnimation(portfolio_title, onTitleHideComplete) {
	const stagger = 100;

	if (!portfolio_title || portfolio_title.length === 0) return;

	let completed = 0;
	const total = portfolio_title.length;

	requestAnimationFrame(() => {
		portfolio_title.forEach((span, index) => {
			span.classList.remove('title_span_Page_load_triggered', 'ptfl_left_span_animation_return_btn_triggered');
			void span.offsetHeight;

			span.style.animationDelay = `${index * stagger}ms`;
			span.classList.add('title_span_triggered');

			span.addEventListener('animationend', async function handleEnd() {
				completed++;
				span.removeEventListener('animationend', handleEnd);

				// After all spans have finished animating
				if (completed === total) {
					try {
						await portfolio_title_wrapper_switch();
						console.log('Portfolio title wrapper hide function called after all hide span animations.');
					} catch (error) {
						console.error('Error in portfolio_title_wrapper_switch:', error);
					}

					if (typeof onTitleHideComplete === 'function') {
						onTitleHideComplete();
					}
				}
			}, { once: true });
		});
	});
}

async function triggerPortfolioWrapperOpen(group, onWrapperOpenComplete) {	
	const wrappers = {
		'1': document.querySelector('.section_04_portfolio_display_main_wrapper_2020'),
		'2': document.querySelector('.section_04_portfolio_display_main_wrapper_2021'),
		'3': document.querySelector('.section_04_portfolio_display_main_wrapper_2022'),
		'4': document.querySelector('.section_04_portfolio_display_main_wrapper_2023'),
		'5': document.querySelector('.section_04_portfolio_display_main_wrapper_2024')
	};

	const wrapper = wrappers[group];

	if (!group || !wrapper) {
		console.error(`No wrapper found for group "${group}"`);
		return;
	}
	// Only show wrapper if it's hidden
	if (getComputedStyle(wrapper).display === 'none') {
		wrapper.style.display = 'flex';
		wrapper.style.opacity = '0';
		await triggerPortfolioWrapperElementsOff();
	} else {
		console.warn('Wrapper already visible, skipping open animation.');
		return;
	}

	return new Promise((resolve) => {
		try {
			requestAnimationFrame(() => {
				// Reset and trigger animation
				wrapper.classList.remove('prtfl_main_wrapper_close_return_btn_triggered');
				void wrapper.offsetHeight;
				wrapper.classList.add('section_04_portfolio_display_main_wrapper_triggered_open');

				// When wrapper animation completes
				const handleWrapperOpenEnd = () => {
					wrapper.removeEventListener('animationend', handleWrapperOpenEnd);

					triggerPortfolioWrapperElementsOn(true);

					if (typeof onWrapperOpenComplete === 'function') {
						onWrapperOpenComplete();
					}

					resolve();
				};

				wrapper.addEventListener('animationend', handleWrapperOpenEnd, { once: true });
			});

		} catch (error) {
			console.error('Error during triggerPortfolioWrapperOpen execution:', error);
		}
	});
}

async function triggerPortfolioWrapperElementsOn(onWrapperEleTriggerOnComplete) {
	return new Promise((resolve) => {

		const stagger = 100;
		let completed = 0;

		const onportfolioUI = [
			document.querySelector('.section_04_portfolio_year_return_button'),
			document.querySelector('.section_04_portfolio_left_span_wrapper'),
			document.querySelector('.section_04_portfolio_display_devider_01'),
			document.querySelector('.section_04_portfolio_category_wrapper'),
			document.querySelector('.section_04_portfolio_display_viewport_wrapper'),
			document.querySelector('.section_04_select_portfolio_section_wrapper')
		];

		requestAnimationFrame(() => {
			onportfolioUI.forEach((el, index) => {
				if (!el) {
					return;
				}

				setTimeout(() => {
					el.style.transition = 'opacity 0.3s cubic-bezier(0.65, 0.3, 0.35, 1.5)';
					el.style.opacity = '1';
					el.style.visibility = 'visible';
					el.style.pointerEvents = 'auto';
					
				}, index * stagger);

				// Listen for transition end
				el.addEventListener('transitionend', function handlePtfloEleOnTransitionEnd() {

					completed++;
					void el.offsetHeight;

					if (completed === el.length) {
						resolve(); // all elements done animating
					}
					
					if (typeof onWrapperEleTriggerOnComplete === 'function') {
						onWrapperEleTriggerOnComplete();
					}
					el.removeEventListener('transitionend', handlePtfloEleOnTransitionEnd);
				});
			});
		});
	});
}

async function triggerPortfolioWrapperClose(group, onWrapperCloseComplete) {

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

	try {
		await triggerPortfolioWrapperElementsOff();
		console.log('Portfolio Wrapper Elements Trigger Off called in triggerPortfolioWrapperClose.');
	} catch (error) {
		console.error('Error triggering portfolio wrapper elements off:', error);
	}
	

	requestAnimationFrame(() => {
		wrapper.classList.remove('section_04_portfolio_display_main_wrapper_triggered_open'); 
		void wrapper.offsetHeight;

		wrapper.classList.add('prtfl_main_wrapper_close_return_btn_triggered');

		wrapper.addEventListener('animationend', function handleMainPtfloWrapperCloseAnimationEnd() {

			wrapper.style.opacity = '0';
			wrapper.style.display = 'none';

			if (typeof onWrapperCloseComplete === 'function') {
				onWrapperCloseComplete();
			}
			wrapper.removeEventListener('animationend', handleMainPtfloWrapperCloseAnimationEnd);
		});
	});
}

async function triggerPortfolioWrapperElementsOff(onWrapperEleTriggerOffComplete) {
	return new Promise((resolve) => {
		const stagger = 50;

		const offportfolioUI = [
			document.querySelector('.section_04_portfolio_year_return_button'),
			document.querySelector('.section_04_portfolio_left_span_wrapper'),
			document.querySelector('.section_04_portfolio_display_devider_01'),
			document.querySelector('.section_04_portfolio_category_wrapper'),
			document.querySelector('.section_04_portfolio_display_viewport_wrapper'),
			document.querySelector('.section_04_select_portfolio_section_wrapper')
		];

		const total = offportfolioUI.filter(Boolean).length;
		let completed = 0;

		requestAnimationFrame(() => {
			console.log('triggerPortfolioWrapperElementsOff called');

			offportfolioUI.forEach((el, index) => {
				if (!el) return;

				el.style.opacity = '1';
				el.style.visibility = 'visible';
				el.style.pointerEvents = 'auto';
				el.style.transition = 'opacity 0.1s cubic-bezier(0.65, 0.3, 0.35, 1.5)';

				setTimeout(() => {
					void el.offsetHeight;
					el.style.opacity = '0';
					el.style.pointerEvents = 'none';
					el.style.visibility = 'hidden';
				}, index * stagger);

				const handlePtfloEleOffTransitionEnd = function (event) {
					console.log(`Transition ended for element: ${el.className}`);
					if (event.propertyName !== 'opacity') return;

					el.removeEventListener('transitionend', handlePtfloEleOffTransitionEnd);

					if (++completed === total) {
						console.log('triggerPortfolioWrapperElementsOff done');
						if (typeof onWrapperEleTriggerOffComplete === 'function') {
							onWrapperEleTriggerOffComplete();
						}

						resolve();
					}
				};

				el.addEventListener('transitionend', handlePtfloEleOffTransitionEnd, { once: true });
			});
		});
	});
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

document.querySelectorAll('.section_04_portfolio_year_return_button').forEach(button => {
	button.addEventListener('click', () => PortfolioReturnTimelineButtonAnimation(button));
});

//function to close main portfolio display wrappers
async function PortfolioReturnTimelineButtonAnimation(button) {

	//clicked button group
	const group = button.dataset.group;

	// Trigger close animation on wrapper
	try {
		await triggerPortfolioWrapperClose(group);
		triggerPortfolioMainTitleShowAnimation(true);
	} catch (error) {
		console.error('Error in PortfolioReturnTimelineButtonAnimation:', error);
	}
};