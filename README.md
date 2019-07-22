# Firestore Simple Queies
A script that help to export and import in Cloud Firestore

```
Clone and run npm install
```
# FirebaseAccountConfig.json
```
replace or paste your firebase key file in root and change config file name in scripts.
```
# Export database from Firestore

This will help you create a backup of your collection and subcollection from Firestore to a JSON file name same as collection and in ./db folder.

```
node export.js <your-collection-name> <sub-collection-name-(optional)>
```

# Query database from Firestore
```
node getDocumentById.js Collection DocId
node getCollection.js CollectionName
```
*If you have any recommendation or question, please create an issue. Thanks,*
