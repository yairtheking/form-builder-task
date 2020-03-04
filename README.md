
Attached is the following design and architecture
A user chooses a type, a name and a label and adds each field with a button, at the end of the a page appears a button that submits the fields and sends the data as a JSON file to the database.
Two tables are created in the database: one for the records the were newly created and a specified id attached to them and another is a table for all the submisions whie each submmission has that same id.
The data is then posted from the backend to the forms list page.


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



