# FirstNameAnalysisAPI

View first name meaning dictionary:
GET http://localhost:5000/meanings

Add new meaning:
POST http://localhost:5000/meanings/mn?firstName=a&gender=non&meaning=fish

Search first name meaning with gender:
GET http://localhost:5000/meanings/mn?firstName=z&gender=female

Delete meaning:
DELETE http://localhost:5000/meanings/mn?firstName=z&gender=female

Change existing meaning:
PATCH http://localhost:5000/meanings/mn?firstName=z&gender=female&meaning=lion