
Attached is the following design and architecture

Explanation: user chooses types, a name and a label, adds the fields and submits data object(json file to server) then the server responds 200, signifying ok We create two tables in the database one is for the submissions designated by a specified id and another table contains the form records while each record contains that particular id. For each submission of a certain a new record of the form appears in the forms list page.


BUILDER


--------------

Form Name [text field]
Add Field:	[options: type name label]
[fields...]
Save

Request:
POST http://yair_back.com/forms/build/
{
	"type": [text, color, date, email, tel, number],
	"name": string,
	"label": string,
}

Response: 200




Form Submit Page
-------------------------

Form, rendered from the retrieved data

LOADING STAGE

Request:
GET http://yair_back.com/forms/render/[form_id]/

Response:
{
	"type": "text",
	"name": "description",
	"label": "maleoti",
}

USER SUBMIT STAGE

Request:
POST http://yair_back.com/forms/sumbit/
{
	"description": "something",
	"form_id": 1
}

Response: 200






Form Submissions Page:
---------------------------------
Show form submissions
	[field_1]	[field_2]
1	blabla
2	haha

Request:
GET http://yair_back.com/forms/submissions/[form_id]/

Response:
[
	{
		"description": "something"
	},
	{
		"description": "something else"
	},

]


Forms List Page
----------------------
Form Id 	Form Name 	# Submissions 	Submit Page 	Submissions Page
1 new      	Task Feedback   	0             		View  	View
2 new      	Job Application 	152           	View  	View



