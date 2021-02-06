const form = document.querySelector("form");
form.addEventListener("submit",function(e) {
	e.preventDefault();
})

const inputKey = document.querySelector("#inputKeyUp");
inputKey.addEventListener("input",function(e) {
	var key = this.value.toLowerCase();
	var filterInput = myArray.filter(fil => {
		return fil.firstName.toLowerCase().includes(key);
	})
	render(filterInput);
})




const myArray = [
	{id:1,firstName:"Jahongir",lastName:"Xaytboyev"},
	{id:2,firstName:"Husan",lastName:"Mannopov"},
	{id:3,firstName:"Yaxyo",lastName:"Qo'ldoshev"},
	{id:4,firstName:"Ulug'bek",lastName:"Xasanov"},
	{id:5,firstName:"Odil",lastName:"Ahmedov"},
	{id:6,firstName:"A'zamjon",lastName:"Yoqubov"},
	{id:7,firstName:"Umar",lastName:"Shamsiyev"}
]


function render(data) {
	var tbody = document.querySelector("tbody");
	tbody.innerHTML = "";
	for( var i = 0; i < data.length; i++) {
		tbody.innerHTML += 
		(`<tr>
			<td>${data[i].id}</td>
			<td>${data[i].firstName}</td>
			<td>${data[i].lastName}</td>
		</tr>`)
	}
}
render(myArray);