$(function(){
	var page = 1;
	var i = 3;
	var buttonAct = function($parent, direction){
		var $show = $parent.find("div.photoContList");
		var $picCont = $parent.find("div.photoContent");
		var vWidth = $picCont.width();
		if(	!$show.is(":animated")	){
			if(direction === "R"){
				if(	page == i	){
					$show.animate({left: '0px'}, "fast");
					page = 1;
				}	else	{
					$show.animate({left: '-=' + vWidth / 5}, "slow");
					page++;
				}
			} else {
				if(	 page == 1	){
					$show.animate({left: '-=' + (vWidth / 5) * 2}, "fast");
					page = i;
				}	else	{
					$show.animate({left: '+=' + vWidth / 5}, "slow");
					page--;
				}
			}
		}
	};
	$("span.RButton").click(function(){
		var $parent = $(this).parents("div#introducePhoto");
		buttonAct($parent, "R");
	});
	$("span.LButton").click(function(){
		var $parent = $(this).parents("div#introducePhoto");
		buttonAct($parent, "L");
	});

	// 菜单栏的切换 html & css样式有改动
	var $currentUl = $(".nav_menu").find(".current").parent("li").find("ul");
	var ensureLocation = function($this, left){
		switch(parseInt(left / 109)){
			case 0:
				break;
			case 1:
				if($this.find("li").length < 1){

				} else {
					$this.find("ul").css({
					left: -109 + "px"
					});
				}
				break;
			case 2:
				if($this.find("li").length < 1){

				} else {
					$this.find("ul").css({
					left: -109 + "px"
					});
				}
				break;
			case 3:
				if($this.find("li").length < 1){

				} else {
					$this.find("ul").css({
					left: -109 + "px"
					});
				}
				break;
			case 4:
				if($this.find("li").length < 4){
					$this.find("ul").css({
						left: 0 + "px"
					});
				} else {
					$this.find("ul").css({
						left: -($this.find("li").length - 4) * 109 + "px"
					});
				}
				break;
			case 5:
				if($this.find("li").length < 4){
					$this.find("ul").css({
						left: 0 + "px"
					});
				} else {
					$this.find("ul").css({
						left: -($this.find("li").length - 3) * 109 + "px"
					});
				}
				break;
			case 6:
				if($this.find("li").length < 3){
					$this.find("ul").css({
						left: 0 + "px"
					});
				} else {
					$this.find("ul").css({
						left: -($this.find("li").length - 2) * 109 + "px"
					});
				}
				break;
			case 7:
				if($this.find("li").length < 1){
					$this.find("ul").css({
						left: 0 + "px"
					});
				} else if($this.find("li").length < 9){
					$this.find("ul").css({
						left: -($this.find("li").length - 1) * 109 + "px"
					});
				}
				break;
		}
	};

	ensureLocation($currentUl.parent(), parseInt($currentUl.parent().position().left));
	$currentUl.css({
					display: "block", 
					width: $currentUl.width() * $currentUl.find("li").length + "px"
				});
	$(".nav_menu").find("li").mouseover(function(){
			$(".nav_menu").find("li").find("ul").css({display: "none"});
			var ulWidth = $(this).width() * $(this).find("li").length;
			
			ensureLocation($(this), parseInt($(this).position().left));
			$(this).find("ul").css({
									display: "block", 
									width: ulWidth + "px"
								});
	});
	$(".nav_menu").find("li").mouseout(function(){
		$(".nav_menu").find("li").find("ul").css({display: "none"});
		$currentUl.css({display: "block"});
	});
});