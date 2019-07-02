var admin = require("firebase-admin");

let collectionName = process.argv[2];
let documentId = process.argv[3];


if(collectionName && documentId){

  const serviceAccount = require("./FirebaseAccountConfig.json");
  const app_config = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: ''
    };
  admin.initializeApp(app_config);
  
  let db = admin.firestore();
  db.settings({ timestampsInSnapshots: true });
  
  let data = {};
  data[collectionName] = {};
  
  let results = db.collection(collectionName).doc(documentId)
  .get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
}
else{
  console.log("**********wrong command*********");
  console.log("pass collection and documentid in arguments: node getDocumentById.js Collection DocId");
}
