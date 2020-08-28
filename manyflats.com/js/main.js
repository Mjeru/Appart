$(document).ready(() => {
	let subMenuParent = document.querySelectorAll(".sub__menu-parent");
	let urlGeo = document.querySelector(".url-geo").textContent;
	[].forEach.call(subMenuParent, (element) => {
		element.onmouseenter = (e) => {
			e.target.classList.add("parent-hover");
			[].forEach.call(e.target.children, (element) => {
				if (element.tagName == "UL") {
					element.classList.add("show");
					element.classList.remove("hidden");
				}
			});
		};

		element.onmouseleave = (e) => {
			e.target.classList.remove("parent-hover");
			[].forEach.call(e.target.children, (element) => {
				if (element.tagName == "UL") {
					element.classList.remove("show");
					element.classList.add("hidden");
				}
			});
		};
	});

	$(".tostyle").each(function (index) {
		var $this = $(this),
			numberOfOptions = $(this).children("option").length;
		let dropClass = "";
		$this.addClass("select-hidden");
		$this.wrap('<div class="select"></div>');
		if ($(this).hasClass("popup-disabled-select")) {
			$this.after('<div class="select-styled popup-disabled-select"></div>');
		} else {
			$this.after('<div class="select-styled"></div>');
		}

		var $styledSelect = $this.next("div.select-styled");
		$styledSelect.text($this.children("option").eq(0).text());

		var $list = $("<ul />", {
			class: "select-options ",
			style: "display: none;",
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$("<li />", {
				text: $this.children("option").eq(i).text(),
				rel: $this.children("option").eq(i).val(),
			}).appendTo($list);
		}

		var $listItems = $list.children("li");

		$styledSelect.click(function (e) {
			e.stopPropagation();
			if (e.target.classList.contains(".droplist")) {
				return;
			}
			$("div.select-styled.active")
				.not(this)
				.each(function () {
					$(this).removeClass("active").next("ul.select-options").hide();
				});
			$(this).toggleClass("active").next("ul.select-options").toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			if ($(this).text() == "...") {
				$this.val("");
				$styledSelect
					.text($(this).parent().children().first().text())
					.removeClass("active");
				$list.hide();
				return;
			} else {
				$styledSelect.text($(this).text()).removeClass("active");
				$this.val($(this).attr("rel"));
				$list.hide();
			}
		});
		$(document).click(function () {
			$styledSelect.removeClass("active");
			$list.hide();
		});
		[].forEach.call(document.querySelectorAll(".whith-clear"), (element) => {
			element.oninput = (e) => {
				if (e.target.value !== "") {
					e.target.parentNode.querySelector(".clear-input").style =
						"opacity: 1;";
				} else {
					e.target.parentNode.querySelector(".clear-input").style =
						"opacity: 0;";
				}
			};
		});
		document.querySelector(".whith-clear").addEventListener("input", (e) => {
			e.target.value;
			if (e.target.value !== "") {
				document.querySelector(".clear-input").style = "opacity: 1;";
			} else {
				document.querySelector(".clear-input").style = "opacity: 0;";
			}
		});
	});
	document.querySelector(".search-form").classList.remove("loaded");

	document.querySelector(".search-label").onmouseenter = () => {
		document.querySelector(".searcharea").classList.remove("hidden");
		document.querySelector(".searcharea").classList.add("show");
	};
	document.querySelector(".search-label").onmouseleave = () => {
		document.querySelector(".searcharea").classList.add("hidden");
		document.querySelector(".searcharea").classList.remove("show");
	};
	[].forEach.call(document.querySelectorAll(".clear-input"), (element) => {
		element.onclick = (e) => {
			[].forEach.call(e.target.parentNode.children, (element) => {
				if (element.tagName == "INPUT") {
					element.value = "";
				}
				e.target.style = "opacity: 0;";
			});
		};
	});

	let search__dropA = document.querySelectorAll(".search__drop-link");
	[].forEach.call(search__dropA, (element) => {
		element.onclick = (e) => {
			e.stopPropagation;
			e.target.classList.toggle("droped-link");
			if (!e.target.classList.contains("droped") == true) {
				if (e.target.classList.contains("search__drop")) {
					if (
						document.querySelectorAll(".droped").length > 0 &&
						!e.target.classList.contains("droped")
					) {
						document.querySelector(".droped").click();
					}
					e.target.classList.add("parent-hover");
					document.querySelector(".lang-block2-close").classList.toggle("disp");
				}
				[].forEach.call(e.target.parentNode.children, (element) => {
					if (element.tagName == "UL") {
						element.classList.add("show");
						element.classList.remove("hidden");
					}
				});
				e.target.classList.add("droped");
			} else {
				if (e.target.classList.contains("droped") == true) {
					if (e.target.classList.contains("search__drop")) {
						e.target.classList.remove("parent-hover");
					}
					[].forEach.call(e.target.parentNode.children, (element) => {
						if (element.tagName == "UL") {
							element.classList.remove("show");
							element.classList.add("hidden");
						}
					});
					e.target.classList.remove("droped");
					document.querySelector(".lang-block2-close").classList.toggle("disp");
					return;
				}
			}
		};
	});

	[].forEach.call(
		document.querySelectorAll(".filter-label-link"),
		(element) => {
			element.onclick = (e) => {
				if (e.target.parentNode.tagName == "LABEL") {
					e.target.parentNode.click();
					document.forms.searchForm.submit();
				}
			};
		}
	);
	(function () {
		function disableScroll() {
			let padding = window.innerWidth - document.body.offsetWidth;
			let pagePosition = window.scrollY;
			document.body.classList.add(`lock`);
			document.body.dataset.position = pagePosition;
			document.body.style.top = -pagePosition + `px`;
			document.body.style.paddingRight = padding + `px`;
			document.querySelector(`.header`).style.paddingRight = padding + `px`;
		}
		function enableScroll() {
			let pagePosition = parseInt(
				document.querySelector(`.lock`).dataset.position,
				10
			);
			document.querySelector(`.lock`).style.top = `auto`;
			document.body.classList.remove(`lock`);
			window.scroll({ top: pagePosition, left: 0 });
			document.body.removeAttribute(`dataset`);
			document.body.removeAttribute(`style`);
			document.querySelector(`.header`).removeAttribute(`style`);
		}
		function popupAnimate() {
			$(`.popup`).removeClass(`visually-hidden`);
			$(`.popup-overlay`).removeClass(`visually-hidden`);
			$(`.popup`).animate({ opacity: 1 }, 200, `linear`);
			$(`.popup-overlay`).animate({ opacity: 1 }, 200, `linear`);
		}
		$(`.all-filters`).on(`click`, function (e) {
			if (country.childNodes.length == 0) {
				country.appendChild(blunk);
				$.ajax({
					url: `${urlGeo}?type=country`,
					context: document.body,
					success: function (html) {
						html.list.forEach((element) => {
							let newLi = document.createElement("option");
							newLi.value = `${element}`;
							newLi.innerHTML = `${element}`;
							country.appendChild(newLi);
						});
					},
				});
			}
			disableScroll();
			popupAnimate();
		});
		$(`.popup-overlay`).on(`click`, function (e) {
			$(`.popup`).animate({ opacity: 0 }, 200, `linear`);
			$(`.popup-overlay`).animate({ opacity: 0 }, 200, `linear`);
			enableScroll();
			window.setTimeout(() => {
				$(`.popup`).addClass(`visually-hidden`);
				$(`.popup-overlay`).addClass(`visually-hidden`);
			}, 350);
		});
		$(`.popup__close`).on(`click`, function (e) {
			$(`.popup`).animate({ opacity: 0 }, 200, `linear`);
			$(`.popup-overlay`).animate({ opacity: 0 }, 200, `linear`);
			enableScroll();
			window.setTimeout(() => {
				$(`.popup`).addClass(`visually-hidden`);
				$(`.popup-overlay`).addClass(`visually-hidden`);
			}, 350);
		});
		$(`.cancel-button`).on(`click`, function (e) {
			$(`.popup`).animate({ opacity: 0 }, 200, `linear`);
			$(`.popup-overlay`).animate({ opacity: 0 }, 200, `linear`);
			enableScroll();
			window.setTimeout(() => {
				$(`.popup`).addClass(`visually-hidden`);
				$(`.popup-overlay`).addClass(`visually-hidden`);
			}, 350);
		});

		document.onmouseup = (e) => {
			e.stopPropagation();
			if (!e.target.classList.contains("droped")) {
			}
		};
	})();

	let country = document.querySelector(".country-select"),
		region = document.querySelector(".region-select"),
		city = document.querySelector(".sity-select"),
		district = document.querySelector(".district-select"),
		street = document.querySelector(".street-select"),
		house = document.querySelector(".house-select"),
		blunk = document.createElement("option");
	blunk.value = "";
	country.onchange = (e) => {
		let value = e.target.value;
		while (region.firstChild) {
			region.removeChild(region.firstChild);
		}
		while (city.firstChild) {
			city.removeChild(city.firstChild);
		}
		while (street.firstChild) {
			street.removeChild(street.firstChild);
		}
		while (district.firstChild) {
			district.removeChild(district.firstChild);
		}
		region.appendChild(blunk.cloneNode());
		city.appendChild(blunk.cloneNode());
		if (!street.classList.contains("popup-disabled-select")) {
			street.classList.add("popup-disabled-select");
		}
		if (!district.classList.contains("popup-disabled-select")) {
			district.classList.add("popup-disabled-select");
		}
		if (value == "") {
			region.classList.add("popup-disabled-select");
			city.classList.add("popup-disabled-select");
			district.classList.add("popup-disabled-select");
			street.classList.add("popup-disabled-select");
			house.classList.add("popup-disabled-select");
			return;
		}
		$.ajax({
			url: `${urlGeo}?type=region&country=${value}`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					region.appendChild(newLi);
				});
				region.classList.remove("popup-disabled-select");
			},
		});
		$.ajax({
			url: `${urlGeo}?type=city&country=${country.value}&region=""`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					city.appendChild(newLi);
				});
				city.classList.remove("popup-disabled-select");
			},
		});
	};

	region.onchange = (e) => {
		let value = e.target.value;
		while (city.firstChild) {
			city.removeChild(city.firstChild);
		}
		while (district.firstChild) {
			district.removeChild(district.firstChild);
		}
		while (street.firstChild) {
			street.removeChild(street.firstChild);
		}
		if (!street.classList.contains("popup-disabled-select"))
			street.classList.add("popup-disabled-select");
		if (!district.classList.contains("popup-disabled-select"))
			district.classList.add("popup-disabled-select");
		city.appendChild(blunk.cloneNode());
		console.log(`${urlGeo}?type=city&country=${country.value}&region=${value}`);
		$.ajax({
			url: `${urlGeo}?type=city&country=${country.value}&region=${value}`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					city.appendChild(newLi);
				});
				city.classList.remove("popup-disabled-select");
			},
		});
	};

	city.onchange = (e) => {
		let value = e.target.value;
		while (district.firstChild) {
			district.removeChild(district.firstChild);
		}
		while (street.firstChild) {
			street.removeChild(street.firstChild);
		}
		while (house.firstChild) {
			house.removeChild(house.firstChild);
		}
		district.appendChild(blunk.cloneNode());
		street.appendChild(blunk.cloneNode());
		if (value == "") {
			district.classList.add("popup-disabled-select");
			street.classList.add("popup-disabled-select");
			house.classList.add("popup-disabled-select");
			return;
		}
		$.ajax({
			url: `${urlGeo}?type=district&country=${country.value}&region=${region.value}&city=${value}`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					district.appendChild(newLi);
				});
				district.classList.remove("popup-disabled-select");
			},
		});
		$.ajax({
			url: `${urlGeo}?type=street&country=${country.value}&region=${region.value}&city=${city.value}&district=${value}`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					street.appendChild(newLi);
				});
				street.classList.remove("popup-disabled-select");
			},
		});
	};

	district.onchange = (e) => {
		let value = e.target.value;
		while (street.firstChild) {
			street.removeChild(street.firstChild);
		}

		street.appendChild(blunk.cloneNode());
		$.ajax({
			url: `${urlGeo}?type=street&country=${country.value}&region=${region.value}&city=${value}`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					street.appendChild(newLi);
				});
			},
		});
	};
	street.onchange = (e) => {
		let value = e.target.value;
		while (house.firstChild) {
			house.removeChild(house.firstChild);
		}
		if (value == "") {
			house.classList.add("popup-disabled-select");
			return;
		}
		house.appendChild(blunk.cloneNode());
		$.ajax({
			url: `${urlGeo}?type=house&country=${country.value}&region=${region.value}&city=${city.value}&district=${district.value}&street=${value}`,
			context: document.body,
			success: function (html) {
				html.list.forEach((element) => {
					let newLi = document.createElement("option");
					newLi.value = `${element}`;
					newLi.innerHTML = `${element}`;

					house.appendChild(newLi);
				});
				house.classList.remove("popup-disabled-select");
			},
		});
	};
	let langBlock = document.querySelector(".lang-block");
	let langWidth = document.querySelector(".lang-options").offsetWidth;
	let langHeigth = $(".lang-options").height();
	console.log(langWidth);
	console.log(langHeigth);
	let options = document.querySelector(".lang-options");

	document.querySelector(".langlink").onclick = (e) => {
		if (options.offsetWidth > 0) {
			$(".lang-options").animate(
				{
					width: "0px",
				},
				100,
				function () {
					$(".lang-options").animate(
						{
							height: "0px",
						},
						100
					);
				}
			);
			document.querySelector(".lang-block-close").classList.remove("disp");
		} else {
			$(".lang-options").animate(
				{
					width: `${langWidth}px`,
				},
				100,
				function () {
					$(".lang-options").animate(
						{
							height: `${langHeigth}px`,
						},
						100
					);
				}
			);
			document.querySelector(".lang-block-close").classList.add("disp");
		}
	};
	document.querySelector(".langcancel").onclick = (e) => {
		if (options.offsetWidth > 0) {
			$(".lang-options").animate(
				{
					width: "0px",
				},
				100,
				function () {
					$(".lang-options").animate(
						{
							height: "0px",
						},
						100
					);
				}
			);
			document.querySelector(".lang-block-close").classList.remove("disp");
		} else {
			$(".lang-options").animate(
				{
					width: `${langHeigth}px`,
				},
				100,
				function () {
					$(".lang-options").animate(
						{
							height: `${langWidth}px`,
						},
						100
					);
				}
			);
			document.querySelector(".lang-block-close").classList.add("disp");
		}
	};
	document.querySelector(".langlink").onclick();
	window.setTimeout(() => {
		langBlock.style.opacity = 1;
	}, 300);
	document.querySelector(".lang-block-close").onclick = (e) => {
		document.querySelector(".lang-block-close").classList.remove("disp");
		if (document.querySelector(".lang-block").offsetWidth > 150) {
			document.querySelector(".langcancel").click();
		}
		document.querySelector(".droped").click();
		document.querySelector(".lang-block-close").classList.toggle("disp");
	};
	document.querySelector(".lang-block2-close").onclick = (e) => {
		document.querySelector(".lang-block2-close").classList.remove("disp");
		if (document.querySelector(".lang-block").offsetWidth > 150) {
			document.querySelector(".langcancel").click();
		}
		document.querySelector(".droped").click();
		document.querySelector(".lang-block2-close").classList.toggle("disp");
	};
	let sliders = document.querySelectorAll(".owl-stage"),
		nextslidelinks = document.querySelectorAll(".owl-next"),
		prevslidelinks = document.querySelectorAll(".owl-prev");

	// [].forEach.call(sliders, (el) => {
	// 	console.log(el.childNodes.length + "длинна");

	// 	total = el.childNodes.length;
	// 	try {
	// 		el.parentNode.parentNode.parentNode.children[0].children[1].innerHTML = total;
	// 	} catch {}
	// });
	// [].forEach.call(nextslidelinks, (el) => {
	// 	el.onclick = (ev) => {
	// 		if (!ev.target.parentNode.classList.contains("disabled")) {
	// 			let curentElem =
	// 				ev.target.parentNode.parentNode.parentNode.parentNode.children[0]
	// 					.children[0];
	// 			let curent = parseInt(curentElem.innerHTML);
	// 			curent = curent + 1;
	// 			curentElem.innerHTML = curent;
	// 		}
	// 	};
	// });
	// [].forEach.call(prevslidelinks, (el) => {
	// 	el.onclick = (ev) => {
	// 		if (!ev.target.parentNode.classList.contains("disabled")) {
	// 			let curentElem =
	// 				ev.target.parentNode.parentNode.parentNode.parentNode.children[0]
	// 					.children[0];
	// 			let curent = parseInt(curentElem.innerHTML);
	// 			curent = curent - 1;
	// 			curentElem.innerHTML = curent;
	// 		}
	// 	};
	// });
	document.querySelector(".changeLang").onclick = (e) => {
		let mainUrl = "search.html";
		e.preventDefault;
		console.log("change");
		let lang = $("input[name=lang]:checked").val();
		let val = $(".lang-select1").val();
		let metr = $(".lang-select2").val();
		let url = `country=${lang}&area=${metr}&currency=${val}`;
		let curentUrl = location.href;
		if (curentUrl.match(/country\=[A-z]+\&area\=[A-z]+\&currency\=[A-z]+/)) {
			curentUrl.replace(/country\=[A-z]+\&area\=[A-z]+\&currency\=[A-z]+/, url);
			location.replace(curentUrl);
			console.log("change");
		} else {
			curentUrl = curentUrl.replace(`${mainUrl}`, `${mainUrl}&${url}`);
			location.replace(curentUrl);
		}
	};

	[].forEach.call(
		document.querySelector(".nav-mobile").children[0].children,
		(el) => {
			el.children[0].onclick = (e) => {
				$(".subsub").addClass("pasive");
				$(".subsub").removeClass("active");
				e.target.parentNode.children[1].classList.remove("pasive");
				e.target.parentNode.children[1].classList.add("active");

				$(".pasive").slideUp();
				$(".active").slideDown();
				e.target.parentNode;

				// [].forEach.call(e.target.parentNode.children, (el) => {
				// 	if (el.tagName == "UL") {
				// 		el.$(this).slideUp();
				// 	}
				// });
			};
		}
	);
	[].forEach.call(document.querySelectorAll(".subsub"), (el) => {
		[].forEach.call(el.children, (el) => {
			console.log(el);
			if (el.children[0] && el.children[0].tagName == "DIV") {
				el.onclick = (e) => {
					$(".subsubsub").addClass("subpasive");
					$(".subsubsub").removeClass("subactive");
					e.target.parentNode.children[1].classList.remove("subpasive");
					e.target.parentNode.children[1].classList.add("subactive");

					$(".subpasive").slideUp();
					$(".subactive").slideDown();
					e.target.parentNode;

					// [].forEach.call(e.target.parentNode.children, (el) => {
					// 	if (el.tagName == "UL") {
					// 		el.$(this).slideUp();
					// 	}
					// });
				};
			}
		});
	});

	let navMob = $(".nav-mobile");
	let burger = $(".burger-container");
	burger.click((e) => {
		burger.toggleClass("burger-open");
		navMob.slideToggle();
	});

	window.addEventListener("resize", () => {
		if (document.body.clientWidth > 650) {
			burger.removeClass("burger-open");
			navMob.slideUp();
			console.log(321);
		}
	});

	$(".minPrice").mask("000.000.000.000.000", { reverse: true });
	$(".maxPrice").mask("000.000.000.000.000", { reverse: true });
	$(".number-type").mask("00000000000", { reverse: true });
});
