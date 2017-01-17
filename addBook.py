from lxml import html
from pymongo import MongoClient
import requests

#client = MongoClient()
#db = client.das
client = MongoClient('mongodb://das:das2017@ds027505.mlab.com:27505/heroku_5tz53fd8')
db = client.heroku_5tz53fd8
collection = db.biblioteca

print("Insert title")
title = raw_input()
print("Insert author")
author = raw_input()
if(collection.find( {"title": title} ).limit(1).count() == 0):
    collection.insert( { "title": title, "author": author, "description": "To be added" } )
