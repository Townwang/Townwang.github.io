//Colors from : http://flatuicolors.com/
function changeCouleur(){
	var tabNum=[];
	while (tabNum.length<4){
			var numSlime = Math.floor((Math.random() * 10) + 1); 
				if (tabNum.indexOf(numSlime) == -1){ 
				tabNum.push(numSlime);
			}
		}

	for (var i = 0; i < 4; i++) {
    	var couleurSlime;
		var corpsSlime = document.getElementsByClassName("corps");
		
		switch (tabNum[i]) {
			case 1:
			    couleurSlime = "#3ae374";
			    break;
			case 2:
			    couleurSlime = "#67e6dc";
			    break;
			case 3:
			    couleurSlime = "#17c0eb";
			    break;
			case 4:
			    couleurSlime = "#7158e2";
			    break;
			case 5:
			    couleurSlime = "#3d3d3d";
			    break;
			case 6:
			    couleurSlime = "#fff200";
			    break;
			case 7:
			    couleurSlime = "#ff9f1a";
			    break;
			case 8:
			    couleurSlime = "#ff3838";
			    break;
			case 9:
			    couleurSlime = "#ffb8b8";
			    break;
			case 10:
			    couleurSlime = "#c56cf0";
			    break;           
			} 		
		corpsSlime[i].style.fill = couleurSlime;
		}
}
changeCouleur();