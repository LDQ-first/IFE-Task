
window.onload = function(){
	var taskH = document.getElementsByTagName('h3');
	var taskUl = document.getElementsByTagName('ul');


		for(var i = 0; i < taskH.length; i++){
			taskH[i].index = i;

			taskH[i].onclick = function(){

				for(var i = 0; i < taskH.length; i++){
					if(i != this.index){
						taskUl[i].style.display = 'none';
						taskH[i].className = '';
					}
					
				}

			if(this.className == ''){
				taskUl[this.index].style.display = 'block';
				this.className = 'active';
			}
			else{
				taskUl[this.index].style.display = 'none';
				this.className = '';
			}
		}		
	}




}