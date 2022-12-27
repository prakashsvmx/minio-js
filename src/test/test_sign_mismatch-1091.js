/*
 * MinIO Javascript Library for Amazon S3 Compatible Cloud Storage, (C) 2020 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Note: YOUR-ACCESSKEYID, YOUR-SECRETACCESSKEY, my-bucketname and
// my-objectname are dummy values, please replace them with original values.

var Minio = require('../../dist/main/minio')

var s3Client = new Minio.Client({
  endPoint: 'localhost',
  accessKey: 'minio',
  secretKey: 'minio123',
  useSSL:false,
  port:20002
})

var size = 0

let bucketName ='test-bucket'
let fileId="data.json"

// s3Client.traceOn()

s3Client.getPartialObject(bucketName, fileId, 10, 30, function(err, dataStream) {
  if (err) {
    return console.log(err)
  }
  dataStream.on('data', function(chunk) {
    size += chunk.length
  })
  dataStream.on('end', function() {
    console.log('End. Total size = ' + size)
  })
  dataStream.on('error', function(err) {
    console.log(err)
  })
})