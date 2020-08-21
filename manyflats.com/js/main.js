$(document).ready(() => {
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

	/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

	$("select").each(function () {
		var $this = $(this),
			numberOfOptions = $(this).children("option").length;
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

	let search__drop = document.querySelectorAll(".search__drop");
	[].forEach.call(search__drop, (element) => {
		console.log("start");
		element.onclick = (e) => {
			console.log(e.target);
			if (e.target.classList.contains("search__drop")) {
				e.target.classList.add("parent-hover");
			}
			[].forEach.call(e.target.parentNode.children, (element) => {
				console.log(element.tagName == "UL");
				if (element.tagName == "UL") {
					element.classList.add("show");
					element.classList.remove("hidden");
					console.log("compl");
				}
			});
		};
	});
	$(".minPrice").mask("000.000.000.000.000", { reverse: true });
	$(".maxPrice").mask("000.000.000.000.000", { reverse: true });
});
