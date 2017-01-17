#!/usr/bin/env python

from lxml import html
from pymongo import MongoClient
import requests

#client = MongoClient()
#db = client.das
client = MongoClient('mongodb://das:das2017@ds027505.mlab.com:27505/heroku_5tz53fd8')
db = client.heroku_5tz53fd8
collection = db.biblioteca

page = requests.get('https://www.waterstones.com/campaign/new-books')
tree = html.fromstring(page.content)

#This will create a list of titles:
titles = tree.xpath('//a[@class="title link-invert"]/text()')
#This will create a list of authors
authors = tree.xpath('//a[@class="text-gold"]//b/text()')

#print('Titles: ', titles)
#print(len(titles))
#print('Authors: ', authors)

added = 0
for x in range(0, len(titles)):
    if(collection.find( {"title": titles[x]} ).limit(1).count() == 0):
        collection.insert( { "title": titles[x], "author": authors[x], "description": "To be added" } )
        added+=1
print("New books: "+`added`)
