function slider(element){

	if (element){

		add_classes_to_children(element);
		dragging_func(element);

		//keydown event for prev and next
		document.addEventListener("keydown", event => {
		  if (event.isComposing || event.keyCode === 37) {
		    prev_slide();
		  }

		  if (event.isComposing || event.keyCode === 39) {
		    next_slide();
		  }
		});

	//click events for prev and next
	document.getElementsByClassName('next-button')[0].addEventListener('click', next_slide );
	document.getElementsByClassName('prev-button')[0].addEventListener('click', prev_slide );

	}

}

function make_images_draggable(e){

	//not yet finish....

	let images = e.getElementsByTagName('img')[0];

	images.setAttribute('draggable', true);

	let bool = images.hasAttribute('draggable');

		if (bool){

			console.log('images are draggable');

		}

		else{
			error('not draggable');
		}//enforces images to be draggable...tbc

}

function add_classes_to_children(parentElement){

	let num = 0;
	let parent = document.getElementsByClassName(parentElement)[num];

	for (let i = 0; i < parent.children.length; i++){

		let childElement;

		if ( i < 1 ){
			childElement = parent.children[i].className += 'first-slide ';		
		}

		if (i == 1){
			let activeElement = parent.children[i].className += 'active-slide ';
			style_active_previous_and_next_slides();
		}

		childElement = parent.children[i].className += 'slide-' + i + ' ';
		childElement = parent.children[i].className += 'slide ';

		make_images_draggable(parent);

	}

}

function style_active_previous_and_next_slides(){

	let active = document.getElementsByClassName('active-slide')[0];
	
	let prev = active.previousElementSibling;
	let next = active.nextElementSibling;

	prev.className += 'prev-slide ';
	next.className += 'next-slide ';

}

function next_slide(){

	let active = document.getElementsByClassName('active-slide')[0];

	if (active.nextElementSibling){

		let next = active.nextElementSibling;
		let nextnext = next.nextElementSibling;
		let prev = active.previousElementSibling;

		if (prev){
			active.previousElementSibling.classList.remove('prev-slide');
		}

		active.nextElementSibling.classList.remove('next-slide');
		active.classList.remove('active-slide');

		next.className += ' active-slide ';
		active.className += ' prev-slide ';

		if (nextnext){
			next.nextElementSibling.className += ' next-slide ';
		}

	}

}

function prev_slide(){

	let active = document.getElementsByClassName('active-slide')[0];

	if (active.previousElementSibling){

		let prev = active.previousElementSibling;
		let prevprev = prev.previousElementSibling;
		let next = active.nextElementSibling;
		

		if (next){
			active.nextElementSibling.classList.remove('next-slide');
		}

		active.previousElementSibling.classList.remove('prev-slide');
		active.classList.remove('active-slide');

		prev.className += ' active-slide ';
		active.className += ' next-slide ';

		if (prevprev){
			prev.previousElementSibling.className += ' prev-slide ';
		}

	}

}

function dragging_func(element){

	let parentElement = document.getElementsByClassName(element)[0];
	let images;
	let i;

	for (i = 0; i < parentElement.childElementCount; i++){

		let slideParents = parentElement.getElementsByClassName('slide')[i];
		let slide = slideParents;

		if (slide){

			slide.onmousedown = function(event){

				let shiftX = event.pageX - slide.getBoundingClientRect().left;
				let shiftY = event.pageY - slide.getBoundingClientRect().top;

				document.body.className += 'grabbing';
				slide.style.position = 'absolute';
				slide.style.cursor = 'grabbing';
				//slide.style.zIndex = 999;

				//document.body.append(slide);

				function moveAt(pageX, pageY){
					slide.style.left = (pageX - shiftX / 2) + 100 + 'px';
					slide.style.top = (pageY - shiftY / 2) + 100 + 'px';

					//slide.style.transform = 'translate(-' + (pageX - shiftX) / 2 + 'px, -' + (pageY - shiftY) / 2 + 'px)';
				}

				moveAt(event.pageX, event.pageY);

				function onMouseMove(event) {
					moveAt(event.pageX, event.pageY);
					//slide.style.removeProperty('transition');
				}

				function logMousePlace(event) {
					console.log('X is ' + event.pageX);
				}

				document.addEventListener('mousemove', onMouseMove);
				document.addEventListener('mousedown', logMousePlace);

				slide.onmouseup = function() {
					document.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mousedown', logMousePlace);

					slide.onmouseup = null;
					document.body.classList.remove('grabbing');

					slide.style.removeProperty('position');
					slide.style.removeProperty('z-index');
					slide.style.removeProperty('top');
					slide.style.removeProperty('left');
					slide.style.removeProperty('cursor');
					
				
				}

				slide.onmouseleave = function() {
					document.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mousedown', logMousePlace);

					slide.onmouseup = null;
					document.body.classList.remove('grabbing');

					slide.style.removeProperty('position');
					slide.style.removeProperty('z-index');
					slide.style.removeProperty('top');
					slide.style.removeProperty('left');
					slide.style.removeProperty('cursor');
					
				
				}

				document.body.onmouseup = function(){
					document.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mousedown', logMousePlace);

					slide.onmouseup = null;
					document.body.classList.remove('grabbing');

					slide.style.removeProperty('position');
					slide.style.removeProperty('z-index');
					slide.style.removeProperty('top');
					slide.style.removeProperty('left');
					slide.style.removeProperty('cursor');
				}

				document.body.onmouseleave = function(){

					document.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mousedown', logMousePlace);

					slide.onmouseup = null;
					document.body.classList.remove('grabbing');

					slide.style.removeProperty('position');
					slide.style.removeProperty('z-index');
					slide.style.removeProperty('top');
					slide.style.removeProperty('left');
					slide.style.removeProperty('cursor');

				}

			}

			slide.ondragstart = function() {
				return false;
			};

		}

	}
}

slider('slider');

console.log('----------------'); //divider for console logs