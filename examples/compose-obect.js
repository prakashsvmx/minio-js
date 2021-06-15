
var Minio = require("../../dist/main/minio")
var Helpers = require("../../dist/main/helpers")

var s3Client = new Minio.Client({
  endPoint: 's3.amazonaws.com',
  accessKey: 'YOUR-ACCESSKEYID',
  secretKey: 'YOUR-SECRETACCESSKEY'
})

const sourceList = [new Helpers.CopySourceOptions( {
  Bucket:     "sph-my-bucket",
  Object:     "partaa",
  //other options if any.
}),new Helpers.CopySourceOptions({
  Bucket:     "sph-my-bucket",
  Object:     "partab",
//    VersionID:"2aaec2a4-3509-40a7-aed7-6a44fb9fad4e"
}),new Helpers.CopySourceOptions({
  Bucket:     "sph-my-bucket",
  Object:     "partac",
  
}),new Helpers.CopySourceOptions({
  Bucket:     "sph-my-bucket",
  Object:     "partad",
})]

const destOption = new Helpers.CopyDestinationOptions({
  Bucket:     "sph-my-bucket",
  Object:     "100MB.zip",
  /** Other options  Example*/

  /* Encryption:{
        type:Helpers.ENCRYPTION_TYPES.KMS,
        KMSMasterKeyID:'my-minio-key', //as per env value
        SSEAlgorithm:"aws:kms" // this is important
      },*/
  // UserTags:"tagKeyOverride=tagValueOverride&tgK2Ov=tgK2Ov",//querystring format.
  // UserTags:{tagKeyOverride:'tagValueOverride',tgK2Ov:'tgK2Ov'},//object format
  /* UserMetadata: {
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
  }
  */
})


const composePromise = s3Client.composeObject(destOption,sourceList)
composePromise.then((result) => {
  console.log("ComposeObject Success..." , result)
})
  .catch((e)=>{
    console.log("composeObject Promise Error",e)
  })
