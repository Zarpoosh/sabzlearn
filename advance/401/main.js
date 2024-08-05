
import { Unbody } from '@unbody-io/ts-client';


const unbody = new Unbody({apiKey, projectId , transformers},{
  apiKey: "user:gh.8e186e5d-ca0b-4478-b9b6-4538c137a98e:U-qCfEj_myuH_1yNjOQ8Qw",
  projectId: "93cb2081-cb88-4d16-b2c7-211975367c05",
});

(async()=>{
  const res=await unbody.get.googleDoc
  .search
  .about(concept,"programming")
  .exec()
  
  console.log(res)
})()







// import { Unbody } from '@unbody-io/ts-client';

// const unbody = new Unbody({
//   apiKey: "user:gh.8e186e5d-ca0b-4478-b9b6-4538c137a98e:U-qCfEj_myuH_1yNjOQ8Qw",
//   projectId: "93cb2081-cb88-4d16-b2c7-211975367c05",
// });

// async function searchGoogleDocs(concept) {
//   const res = await unbody.get.googleDoc
//     .search
//     .about(concept, "programming")
//     .exec();

//   console.log(res);
// }


// user:gh.8e186e5d-ca0b-4478-b9b6-4538c137a98e:bCUtIjx7B2ln1EbV-uc6HA

// user:gh.8e186e5d-ca0b-4478-b9b6-4538c137a98e:U-qCfEj_myuH_1yNjOQ8Qw
