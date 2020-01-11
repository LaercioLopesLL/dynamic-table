// monta a tabela e os títulos das colunas
function setTableHeader(title, father){
	let header = '<table><thead><tr>';
	for (let i = 0; i < title.length; i++) {
		header+='<th>'+title[i]+'</th>';
	}
	header += '</tr><tbody id="records-body"></tbody></table>';
	father.append(header);
}

// monta as linhas da tabela
function setRows(dataJSON, dataAtributes, columns, actions, father){
	$.each(dataJSON, function(key, val){
		let line = '<tr';
		
		// adiciona atributos
		for (let i = 0; i < dataAtributes.length; i++) {
			line += ' data-'+dataAtributes[i]+'="'+ val[dataAtributes[i]] +'"';
		}
		line += '>';
		
		// adiciona colunas
		for (let i = 0; i < columns.length; i++) {
			line += '<td>'+val[columns[i]]+'</td>';
		}
		line += '<td>';
		for (let i = 0; i < actions.length; i++) {
			line += actions[i];
		}
		line += '</td>';
		line += '</tr>';
		father.append(line);
		
		// visualizar HTML gerado no console
		console.log(line);
	});
}

let arrayJSON = [
	{
		id: 7,
		name: 'John',
		city: 'New York',
		phone: '65454513',
		status: 'A'
	},
	{
		id: 8,
		name: 'Peter',
		city: 'Paris',
		phone: '41232158',
		status: 'B'
	},
	{
		id: 9,
		name: 'Yan',
		city: 'Singapore',
		phone: '42135845',
		status: 'C'
	}

];

let titleColumns = ['Name', 'City', 'Phone Number', 'Actions']

let columns = ['name', 'city', 'phone'];

let attrs = ['id', 'phone', 'status'];

let actions = ['<a href="#" class="edit">Edit</a>', '<a href="#" class="remove">Remove</a>'];

setTableHeader(titleColumns, $('#records'));
setRows(arrayJSON, attrs, columns, actions, $('#records-body'));

$('#records').on('click', '.remove', function(e){
	e.preventDefault();
	$(this).parents('tr').remove();
});

$('#records').on('click', '.edit', function(e){
	e.preventDefault();
	let text = '';
	for (var i = 0; i < columns.length; i++) {
		text += titleColumns[i] + ':' + $(this).parents('tr').find('td').eq(i).text() + ' | ';
	}
	alert(text);
});