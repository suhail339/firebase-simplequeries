var admin = require("firebase-admin");

let collectionName = process.argv[2];


if(collectionName){

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
  
  let results = db.collection(collectionName)
  .get()
      .then(snap => {
          console.log(collectionName + ' -> Total Count : ' + snap.size);
          if (snap.size > 0) {
              snap.forEach(doc => {
                  console.log(doc.id);
              });
          }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
}
else{
  console.log("**********wrong command*********");
  console.log("pass collection in arguments: node getCollection.js CollectionName");
}
