document.addEventListener("DOMContentLoaded",
	function (event) {
		
		document.querySelector("button")
			.addEventListener("click",function () {

				$ajaxUtils
					.sendGetRequest("/data/name.json",
						function (res) {
							var message=
								res.firstName+" "+res.lastName
							if(res.likeChineseFood){
								message+="Likes Chinese Food";
							}
							else{
								message+="Doesn't like Chinese Food";
							}
							message+=" and uses ";
							message+=res.numberOfDisplays+1;
							message+=" displays for coding.";

							document.querySelector("#content")
							.innerHTML="<h2>"+message+"</h2>";
						});
			});
	}
);