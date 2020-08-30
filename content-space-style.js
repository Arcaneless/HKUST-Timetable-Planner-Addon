var maxYrs = 4;
$(document).ready(function() {
	// check if more than one list
	var listraw = $('.semester-dropdown li')
	while (listraw.length > 1) {
		listraw.eq(listraw.length-1).remove()
		listraw = $('.semester-dropdown li')
	}

	// initiaize the list
	$('.semester-dropdown li a').removeAttr('disabled')
	var list = $('.semester-dropdown li').clone()
	
	// change original
	var currentYr = new Date().getFullYear()
	var ll = String(currentYr) + '-' + String(currentYr+1).slice(2,4)
	$('.semester-dropdown li').attr('data-year', ll.slice(2, 4))
	$('.semester-dropdown li').find('h5').text(ll)
	$('.semester-dropdown li a').removeAttr('class')
	
	// add pass
	for (let i=1; i<maxYrs; i++) {
		let c = list.clone()
		let yrStr = String(currentYr-i) + '-' + String(currentYr-i+1).slice(2,4)
		let data_yr = yrStr.slice(2, 4)
		
		c.find('a').removeAttr('class')
		c.attr('data-year', data_yr)
		c.find('h5').text(yrStr)
		$('.semester-dropdown').append(c)
	}
	
	// select back the option
	var dropdown = $('.semester-select')
	var yr = dropdown.find('strong').text()
	var sem = dropdown.find('em').text()
	console.log(yr + " " + sem)
	
	var p = $(".semester-dropdown h5:contains('"+yr+"')").parent()
	p.find('h5').text(yr)
	p.find("a:contains('"+sem+"')").attr('class', 'selected')
})

