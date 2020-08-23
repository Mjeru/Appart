$(document).ready(() => {
	let openedlist;
	let openedlistLink;
	console.log(1);
	// document.querySelector(".nav__item").onmouseenter = (e) => {
	// 	let target = e.target;
	// 	target.onmouseenter = (e) => {
	// 		if (target.classList.contains("sub__menu-parent")) {
	// 			[].forEach.call(target.children, (element) => {
	// 				console.log(element.tagName == "UL");
	// 				if (element.tagName == "UL") {
	// 					element.classList.remove("hidden");
	// 					console.log("compl");
	// 					element.classList.add("show");
	// 				}
	// 			});
	// 		}
	// 		target.onmouseleave = (e) => {
	// 			console.log(e.target);
	// 			[].forEach.call(e.target.children, (element) => {
	// 				if (element.tagName == "UL") {
	// 					element.classList.add("hidden");
	// 					element.classList.remove("show");
	// 				}
	// 			});
	// 		};
	// 	};
	// };
	let subMenuParent = document.querySelectorAll(".sub__menu-parent");
	[].forEach.call(subMenuParent, (element) => {
		console.log("start");
		element.onmouseenter = (e) => {
			e.target.classList.add("parent-hover");
			[].forEach.call(e.target.children, (element) => {
				console.log(element.tagName == "UL");
				if (element.tagName == "UL") {
					element.classList.add("show");
					element.classList.remove("hidden");
					console.log("compl");
				}
			});
		};

		element.onmouseleave = (e) => {
			e.target.classList.remove("parent-hover");
			console.log(e.target);
			[].forEach.call(e.target.children, (element) => {
				if (element.tagName == "UL") {
					element.classList.remove("show");
					element.classList.add("hidden");
				}
			});
		};
	});

	/*в
Reference: http://jsfiddle.net/BB3JK/47/
*/

	$("select").each(function (index) {
		var $this = $(this),
			numberOfOptions = $(this).children("option").length;
		let dropClass = "";
		$this.addClass("select-hidden");
		$this.wrap('<div class="select"></div>');
		console.log($(this)[index]);
		console.log(index);
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
			if ($(this).text() == "(пусто)") {
				$this.val("");
				console.log($(this).parent().children().first().text());
				$styledSelect
					.text($(this).parent().children().first().text())
					.removeClass("active");
				$list.hide();
				return;
			} else {
				$styledSelect.text($(this).text()).removeClass("active");
				$this.val($(this).attr("rel"));
				$list.hide();
				//console.log($this.val());
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
			console.log(document.querySelector(".clear-input").style.opasity);
			if (e.target.value !== "") {
				document.querySelector(".clear-input").style = "opacity: 1;";
			} else {
				document.querySelector(".clear-input").style = "opacity: 0;";
			}
			console.log(document.querySelector(".clear-input").style.opasity);
		});
	});
	// document.querySelector(".clear-input").onclick = (e) => {
	// 	e.target.style = "opacity: 0;";
	// 	document.querySelector(".search-field").value = "";
	// };
	document.querySelector(".search-label").onmouseenter = () => {
		console.log("add");
		document.querySelector(".searcharea").classList.remove("hidden");
		document.querySelector(".searcharea").classList.add("show");
	};
	document.querySelector(".search-label").onmouseleave = () => {
		console.log("add");
		document.querySelector(".searcharea").classList.add("hidden");
		document.querySelector(".searcharea").classList.remove("show");
	};
	[].forEach.call(document.querySelectorAll(".clear-input"), (element) => {
		element.onclick = (e) => {
			[].forEach.call(e.target.parentNode.children, (element) => {
				console.log(element);
				console.log(element.tagName);
				if (element.tagName == "INPUT") {
					element.value = "";
				}
				e.target.style = "opacity: 0;";
			});
			// document.querySelectorAll(".clear-input").onclick = (e) => {
			// 	[].forEach.call(e.target.parentNode.children, (element) => {
			// 		if (element.tagName == "input") {
			// 			console.log;
			// 			element.value = "";
			// 		}
			// 	});
		};
	});

	// let search__drop = document.querySelectorAll(".search__drop");
	// [].forEach.call(search__drop, (element) => {
	// 	console.log("start");
	// 	element.onclick = (e) => {
	// 		console.log(!e.target.classList.contains("droped") + "asd");
	// 		if (!e.target.parentNode.classList.contains("droped") == true) {
	// 			if (e.target.classList.contains("search__drop")) {
	// 				e.target.classList.add("parent-hover");
	// 			}
	// 			[].forEach.call(e.target.parentNode.children, (element) => {
	// 				console.log(element.tagName == "UL");
	// 				if (element.tagName == "UL") {
	// 					element.classList.add("show");
	// 					element.classList.remove("hidden");
	// 				}
	// 			});
	// 		} else {
	// 			if (e.target.parentNode.classList.contains("droped") == true) {
	// 				if (e.target.classList.contains("search__drop")) {
	// 					e.target.classList.remove("parent-hover");
	// 				}
	// 				[].forEach.call(e.target.parentNode.children, (element) => {
	// 					console.log(element.tagName == "UL");
	// 					if (element.tagName == "UL") {
	// 						element.classList.remove("show");
	// 						element.classList.add("hidden");
	// 					}
	// 				});

	// 				return;
	// 			}
	// 		}
	// 	};
	// });

	let search__dropA = document.querySelectorAll(".search__drop-link");
	[].forEach.call(search__dropA, (element) => {
		console.log("start");
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
				}
				[].forEach.call(e.target.parentNode.children, (element) => {
					console.log(element.tagName == "UL");
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
						console.log(element.tagName == "UL");
						if (element.tagName == "UL") {
							element.classList.remove("show");
							element.classList.add("hidden");
						}
					});
					e.target.classList.remove("droped");
					return;
				}
			}
		};
	});
	[].forEach.call(
		document.querySelectorAll(".filter-label-link"),
		(element) => {
			element.onclick = (e) => {
				console.log(e.target.parentNode.tagName == "LABEL");
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

		$(".country-select").each(function () {
			var $this = $(this),
				numberOfOptions = $(this).children("option").length;
			if (this.classList.contains("tostyle")) {
				let dropClass = "";
				$this.addClass("select-hidden");
				$this.wrap('<div class="select"></div>');
				$this.after('<div class="select-styled"></div>');

				var $styledSelect = $this.next("div.select-styled");
				$styledSelect.text($this.children("option").eq(0).text());

				var $list = $("<ul />", {
					class: "select-options",
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
					if ($(this).text() == "") {
						$this.val("");
						console.log($(this).parent().children().first().text());
						$styledSelect
							.text($(this).parent().children().first().text())
							.removeClass("active");
						$list.hide();
						return;
					} else {
						$styledSelect.text($(this).text()).removeClass("active");
						$this.val($(this).attr("rel"));
						$list.hide();
						//console.log($this.val());
					}
				});

				$(document).click(function () {
					$styledSelect.removeClass("active");
					$list.hide();
				});
				[].forEach.call(
					document.querySelectorAll(".whith-clear"),
					(element) => {
						element.oninput = (e) => {
							if (e.target.value !== "") {
								e.target.parentNode.querySelector(".clear-input").style =
									"opacity: 1;";
							} else {
								e.target.parentNode.querySelector(".clear-input").style =
									"opacity: 0;";
							}
						};
					}
				);
				document
					.querySelector(".whith-clear")
					.addEventListener("input", (e) => {
						e.target.value;
						if (e.target.value !== "") {
							document.querySelector(".clear-input").style = "opacity: 1;";
						} else {
							document.querySelector(".clear-input").style = "opacity: 0;";
						}
						console.log(document.querySelector(".clear-input").style.opasity);
					});
			}
		});
		document.onmouseup = (e) => {
			e.stopPropagation();
			if (!e.target.classList.contains("droped")) {
			}
		};
	})();
	$(".minPrice").mask("000.000.000.000.000", { reverse: true });
	$(".maxPrice").mask("000.000.000.000.000", { reverse: true });
	$(".number-type").mask("00000000000", { reverse: true });
});
