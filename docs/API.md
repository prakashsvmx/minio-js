# JavaScript Client API Reference [![Slack](https://slack.min.io/slack?type=svg)](https://slack.min.io)

## Initialize MinIO Client object.

## MinIO

```js
import * as Minio from 'minio'

const minioClient = new Minio.Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})
```

## AWS S3

```js
import * as Minio from 'minio'

const s3Client = new Minio.Client({
  endPoint: 's3.amazonaws.com',
  accessKey: 'YOUR-ACCESSKEYID',
  secretKey: 'YOUR-SECRETACCESSKEY',
})
```

| Bucket operations                                     | Object operations                                   | Presigned operations                          | Bucket Policy & Notification operations                       | Custom Settings                                       |     |
| ----------------------------------------------------- | --------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- | --- |
| [`makeBucket`](#makeBucket)                           | [`getObject`](#getObject)                           | [`presignedUrl`](#presignedUrl)               | [`getBucketNotification`](#getBucketNotification)             | [`setS3TransferAccelerate`](#setS3TransferAccelerate) |     |
| [`listBuckets`](#listBuckets)                         | [`getPartialObject`](#getPartialObject)             | [`presignedGetObject`](#presignedGetObject)   | [`setBucketNotification`](#setBucketNotification)             |                                                       |     |
| [`bucketExists`](#bucketExists)                       | [`fGetObject`](#fGetObject)                         | [`presignedPutObject`](#presignedPutObject)   | [`removeAllBucketNotification`](#removeAllBucketNotification) |                                                       |     |
| [`removeBucket`](#removeBucket)                       | [`putObject`](#putObject)                           | [`presignedPostPolicy`](#presignedPostPolicy) | [`getBucketPolicy`](#getBucketPolicy)                         |                                                       |     |
| [`listObjects`](#listObjects)                         | [`fPutObject`](#fPutObject)                         |                                               | [`setBucketPolicy`](#setBucketPolicy)                         |                                                       |     |
| [`listObjectsV2`](#listObjectsV2)                     | [`copyObject`](#copyObject)                         |                                               | [`listenBucketNotification`](#listenBucketNotification)       |                                                       |     |
| [`listIncompleteUploads`](#listIncompleteUploads)     | [`statObject`](#statObject)                         |                                               |                                                               |                                                       |     |
| [`getBucketVersioning`](#getBucketVersioning)         | [`removeObject`](#removeObject)                     |                                               |                                                               |                                                       |     |
| [`setBucketVersioning`](#setBucketVersioning)         | [`removeObjects`](#removeObjects)                   |                                               |                                                               |                                                       |     |
| [`getBucketTagging`](#getBucketTagging)               | [`removeIncompleteUpload`](#removeIncompleteUpload) |                                               |                                                               |                                                       |     |
| [`setBucketTagging`](#setBucketTagging)               | [`putObjectRetention`](#putObjectRetention)         |                                               |                                                               |                                                       |     |
| [`removeBucketTagging`](#removeBucketTagging)         | [`getObjectRetention`](#getObjectRetention)         |                                               |                                                               |                                                       |     |
| [`setBucketLifecycle`](#setBucketLifecycle)           | [`setObjectTagging`](#setObjectTagging)             |                                               |                                                               |                                                       |     |
| [`getBucketLifecycle`](#getBucketLifecycle)           | [`removeObjectTagging`](#removeObjectTagging)       |                                               |                                                               |                                                       |     |
| [`removeBucketLifecycle`](#removeBucketLifecycle)     | [`getObjectTagging`](#getObjectTagging)             |                                               |                                                               |                                                       |     |
| [`setObjectLockConfig`](#setObjectLockConfig)         | [`getObjectLegalHold`](#getObjectLegalHold)         |                                               |                                                               |                                                       |     |
| [`getObjectLockConfig`](#getObjectLockConfig)         | [`setObjectLegalHold`](#setObjectLegalHold)         |                                               |                                                               |                                                       |     |
| [`getBucketEncryption`](#getBucketEncryption)         | [`composeObject`](#composeObject)                   |                                               |                                                               |                                                       |     |
| [`setBucketEncryption`](#setBucketEncryption)         | [`selectObjectContent`](#selectObjectContent)       |                                               |                                                               |                                                       |     |
| [`removeBucketEncryption`](#removeBucketEncryption)   |                                                     |                                               |                                                               |                                                       |     |
| [`setBucketReplication`](#setBucketReplication)       |                                                     |                                               |                                                               |                                                       |     |
| [`getBucketReplication`](#getBucketReplication)       |                                                     |                                               |                                                               |                                                       |     |
| [`removeBucketReplication`](#removeBucketReplication) |                                                     |                                               |                                                               |                                                       |     |

## 1. Constructor

<a name="MinioClient_endpoint"></a>

### new Minio.Client ({endPoint, port, useSSL, accessKey, secretKey, region, transport, sessionToken, partSize})

|                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| `new Minio.Client ({endPoint, port, useSSL, accessKey, secretKey, region, transport, sessionToken, partSize})` |
| Initializes a new client object.                                                                               |

**Parameters**

| Param            | Type                                                      | Description                                                                                                                        |
| ---------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `endPoint`       | _string_                                                  | endPoint is a host name or an IP address.                                                                                          |
| `port`           | _number_                                                  | TCP/IP port number. This input is optional. Default value set to 80 for HTTP and 443 for HTTPs.                                    |
| `useSSL`         | _bool_                                                    | If set to true, https is used instead of http. Default is true.                                                                    |
| `accessKey`      | _string_                                                  | accessKey is like user-id that uniquely identifies your account.                                                                   |
| `secretKey`      | _string_                                                  | secretKey is the password to your account.                                                                                         |
| `sessionToken`   | _string_                                                  | Set this value to provide x-amz-security-token (AWS S3 specific). (Optional)                                                       |
| `region`         | _string_                                                  | Set this value to override region cache. (Optional)                                                                                |
| `transport`      | _string_                                                  | Set this value to pass in a custom transport. (Optional)                                                                           |
| `partSize`       | _number_                                                  | Set this value to override default part size of 64MB for multipart uploads. (Optional)                                             |
| `pathStyle`      | _bool_                                                    | Set this value to override default access behavior (path) for non AWS endpoints. Default is true. (Optional)                       |
| `transportAgent` | [Agent](https://nodejs.org/api/http.html#class-httpagent) | Set this value to provide a custom HTTP(s) agent to handle timeouts, TLS handling, and low-level socket configurations. (Optional) |

**Example**

## Create client for MinIO

```js
import * as Minio from 'minio'

const minioClient = new Minio.Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})
```

## Create client for AWS S3

```js
import * as Minio from 'minio'

const s3Client = new Minio.Client({
  endPoint: 's3.amazonaws.com',
  accessKey: 'YOUR-ACCESSKEYID',
  secretKey: 'YOUR-SECRETACCESSKEY',
})
```

## Create client with temporary credentials

```js
import * as Minio from 'minio'

const s3Client = new Minio.Client({
  endPoint: 's3.amazonaws.com',
  accessKey: 'YOUR-TEMP-ACCESSKEYID',
  secretKey: 'YOUR-TEMP-SECRETACCESSKEY',
  sessionToken: 'YOUR-TEMP-SESSIONTOKEN',
})
```

## Create client with custom HTTPS Agent

```js
import * as Minio from 'minio'
import * as fs from 'fs'
import * as https from 'https'

const s3Client = new Minio.Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
  transportAgent: new https.Agent({
    timeout: 10000,
    ca: fs.readFileSync('path/to/ca.cert'),
    cert: fs.readFileSync('path/to/public.cert'),
    key: fs.readFileSync('path/to/secret.key'),
    keepAlive: false,
  }),
})
```

### _Note_: The below examples may rely on top level await.

## 2. Bucket operations

<a name="makeBucket"></a>

### async makeBucket(bucketName, [region, makeOpts]): Promise<void>

Creates a new bucket.

**Parameters**

| Param        | Type     | Description                                                                                 |
| ------------ | -------- | ------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                         |
| `region`     | _string_ | Region where the bucket is created. This parameter is optional. Default value is us-east-1. |
| `makeOpts`   | _object_ | Options to create a bucket. e.g `{ObjectLocking:true}` (Optional)                           |

**Example**

```js
await minioClient.makeBucket('mybucket', 'us-east-1')
console.log('Bucket created successfully in "us-east-1".')
```

**Example 1**
Create a bucket with object locking enabled.

```js
minioClient.makeBucket('mybucket', 'us-east-1', { ObjectLocking: true }, function (err) {
  if (err) return console.log('Error creating bucket with object lock.', err)
  console.log('Bucket created successfully in "us-east-1" and enabled object lock')
})
```

<a name="listBuckets"></a>

### listBuckets()

Lists all buckets.

**Parameters**

NIL

Returns Array of Objects with the format:-

| Param                 | Type     | Description                   |
| --------------------- | -------- | ----------------------------- |
| `bucket.name`         | _string_ | bucket name                   |
| `bucket.creationDate` | _Date_   | date when bucket was created. |

**Example**

Please refer to: [list-buckets.mjs](..%2Fexamples%2Flist-buckets.mjs)

```js
try {
  const buckets = await minioClient.listBuckets()
  console.log('Success', buckets)
} catch (err) {
  console.log(err.message)
}
```

<a name="bucketExists"></a>

#### async bucketExists(bucketName): Promise<boolean>

Checks if a bucket exists.

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
const exists = await minioClient.bucketExists('mybucket')
if (exists) {
  return console.log('Bucket exists.')
}
```

<a name="removeBucket"></a>

### removeBucket(bucketName[, callback])

Removes a bucket.

**Parameters**

| Param           | Type       | Description                                                                                               |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| `bucketName`    | _string_   | Name of the bucket.                                                                                       |
| `callback(err)` | _function_ | `err` is `null` if the bucket is removed successfully. If no callback is passed, a `Promise` is returned. |

**Example**

```js
try {
  await minioClient.removeBucket('mybucket')
  console.log('Bucket removed successfully.')
} catch (err) {
  console.log('unable to remove bucket.')
}
```

<a name="listObjects"></a>

### listObjects(bucketName, prefix, recursive [,listOpts])

Lists all objects in a bucket.

**Parameters**

| Param        | Type     | Description                                                                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                                                                   |
| `prefix`     | _string_ | The prefix of the objects that should be listed (optional, default `''`).                                                             |
| `recursive`  | _bool_   | `true` indicates recursive style listing and `false` indicates directory style listing delimited by '/'. (optional, default `false`). |
| `listOpts`   | _object_ | query params to list object which can have `{IncludeVersion: _bool_ }` (optional)                                                     |

**Return Value**

| Param    | Type     | Description                                |
| -------- | -------- | ------------------------------------------ |
| `stream` | _Stream_ | Stream emitting the objects in the bucket. |

The object is of the format:

| Param                | Type      | Description                    |
| -------------------- | --------- | ------------------------------ |
| `obj.name`           | _string_  | name of the object.            |
| `obj.prefix`         | _string_  | name of the object prefix.     |
| `obj.size`           | _number_  | size of the object.            |
| `obj.etag`           | _string_  | etag of the object.            |
| `obj.versionId`      | _string_  | versionId of the object.       |
| `obj.isDeleteMarker` | _boolean_ | true if it is a delete marker. |
| `obj.lastModified`   | _Date_    | modified time stamp.           |

**Example**

```js
const data = []
const stream = minioClient.listObjects('mybucket', '', true)
stream.on('data', function (obj) {
  data.push(obj)
})
stream.on('end', function () {
  console.log(data)
})
stream.on('error', function (err) {
  console.log(err)
})
```

**Example1**
To get Object versions

```js
const data = []
const stream = minioClient.listObjects('mybucket', '', true, { IncludeVersion: true })
stream.on('data', function (obj) {
  data.push(obj)
})
stream.on('end', function () {
  console.log(data)
})
stream.on('error', function (err) {
  console.log(err)
})
```

<a name="listObjectsV2"></a>

### listObjectsV2(bucketName, prefix, recursive, startAfter)

Lists all objects in a bucket using S3 listing objects V2 API

**Parameters**

| Param        | Type     | Description                                                                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                                                                   |
| `prefix`     | _string_ | The prefix of the objects that should be listed (optional, default `''`).                                                             |
| `recursive`  | _bool_   | `true` indicates recursive style listing and `false` indicates directory style listing delimited by '/'. (optional, default `false`). |
| `startAfter` | _string_ | Specifies the object name to start after when listing objects in a bucket. (optional, default `''`).                                  |

**Return Value**

| Param    | Type     | Description                                |
| -------- | -------- | ------------------------------------------ |
| `stream` | _Stream_ | Stream emitting the objects in the bucket. |

The object is of the format:

| Param              | Type     | Description                |
| ------------------ | -------- | -------------------------- |
| `obj.name`         | _string_ | name of the object.        |
| `obj.prefix`       | _string_ | name of the object prefix. |
| `obj.size`         | _number_ | size of the object.        |
| `obj.etag`         | _string_ | etag of the object.        |
| `obj.lastModified` | _Date_   | modified time stamp.       |

**Example**

```js
const stream = minioClient.listObjectsV2('mybucket', '', true, '')
stream.on('data', function (obj) {
  console.log(obj)
})
stream.on('error', function (err) {
  console.log(err)
})
```

<a name="listObjectsV2WithMetadata"></a>

### listObjectsV2WithMetadata(bucketName, prefix, recursive, startAfter)

Lists all objects and their metadata in a bucket using S3 listing objects V2 API

**Parameters**

| Param        | Type     | Description                                                                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                                                                   |
| `prefix`     | _string_ | The prefix of the objects that should be listed (optional, default `''`).                                                             |
| `recursive`  | _bool_   | `true` indicates recursive style listing and `false` indicates directory style listing delimited by '/'. (optional, default `false`). |
| `startAfter` | _string_ | Specifies the object name to start after when listing objects in a bucket. (optional, default `''`).                                  |

**Return Value**

| Param    | Type     | Description                                |
| -------- | -------- | ------------------------------------------ |
| `stream` | _Stream_ | Stream emitting the objects in the bucket. |

The object is of the format:

| Param              | Type     | Description                |
| ------------------ | -------- | -------------------------- |
| `obj.name`         | _string_ | name of the object.        |
| `obj.prefix`       | _string_ | name of the object prefix. |
| `obj.size`         | _number_ | size of the object.        |
| `obj.etag`         | _string_ | etag of the object.        |
| `obj.lastModified` | _Date_   | modified time stamp.       |
| `obj.metadata`     | _object_ | metadata of the object.    |

**Example**

```js
const stream = minioClient.extensions.listObjectsV2WithMetadata('mybucket', '', true, '')
stream.on('data', function (obj) {
  console.log(obj)
})
stream.on('error', function (err) {
  console.log(err)
})
```

<a name="listIncompleteUploads"></a>

### listIncompleteUploads(bucketName, prefix, recursive)

Lists partially uploaded objects in a bucket.

**Parameters**

| Param        | Type     | Description                                                                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                                                                   |
| `prefix`     | _string_ | Prefix of the object names that are partially uploaded. (optional, default `''`)                                                      |
| `recursive`  | _bool_   | `true` indicates recursive style listing and `false` indicates directory style listing delimited by '/'. (optional, default `false`). |

**Return Value**

| Param    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| `stream` | _Stream_ | Emits objects of the format listed below: |

| Param           | Type      | Description                            |
| --------------- | --------- | -------------------------------------- |
| `part.key`      | _string_  | name of the object.                    |
| `part.uploadId` | _string_  | upload ID of the object.               |
| `part.size`     | _Integer_ | size of the partially uploaded object. |

**Example**

```js
const Stream = minioClient.listIncompleteUploads('mybucket', '', true)
Stream.on('data', function (obj) {
  console.log(obj)
})
Stream.on('end', function () {
  console.log('End')
})
Stream.on('error', function (err) {
  console.log(err)
})
```

<a name="getBucketVersioning"></a>

### getBucketVersioning(bucketName)

Get Versioning state of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
const versionInfo = await minioClient.getBucketVersioning('bucketname')
console.log('Success ', versionInfo)
```

<a name="setBucketVersioning"></a>

### setBucketVersioning(bucketName, versioningConfig)

Set Versioning state on a Bucket

**Parameters**

| Param              | Type     | Description                                        |
| ------------------ | -------- | -------------------------------------------------- |
| `bucketName`       | _string_ | Name of the bucket.                                |
| `versioningConfig` | _object_ | Versioning Configuration e.g: `{Status:"Enabled"}` |

**Example**

```js
const versioningConfig = { Status: 'Enabled' }
await minioClient.setBucketVersioning('bucketname', versioningConfig)
```

<a name="setBucketReplication"></a>

### setBucketReplication(bucketName, replicationConfig)

Set replication config on a Bucket

**Parameters**

| Param               | Type     | Description                                      |
| ------------------- | -------- | ------------------------------------------------ |
| `bucketName`        | _string_ | Name of the bucket.                              |
| `replicationConfig` | _object_ | replicationConfig Configuration as a JSON Object |

**Example**

```js
const arnFromMcCli = 'arn:minio:replication::b22d653b-e4fb-4c5d-8140-7694c8e72ed4:dest-bucket'
const replicationConfig = {
  role: arnFromMcCli,
  rules: [
    {
      ID: 'cisea130mbms6splbmg0',
      Status: 'Enabled',
      Priority: 1,
      DeleteMarkerReplication: { Status: 'Enabled' },
      DeleteReplication: { Status: 'Enabled' },
      Destination: {
        Bucket: 'arn:aws:s3:::dest-bucket',
        StorageClass: 'REDUCED_REDUNDANCY',
      },
      SourceSelectionCriteria: { ReplicaModifications: { Status: 'Enabled' } },
      Filter: {
        //Possible values.
        // Prefix: '/',
        // Tag: [{ 'Key': 'key1', 'Value': 'value1' }, { 'Key': 'key2', 'Value': 'value2' }],//if only this,  =>    'DeleteMarkerReplication': { 'Status': 'Disabled' },
        And: {
          Prefix: '/',
          Tag: [
            { Key: 'key1', Value: 'value1' },
            { Key: 'key2', Value: 'value2' },
          ],
        },
      },
      ExistingObjectReplication: { Status: 'Enabled' },
    },
  ],
}

await s3Client.setBucketReplication('source-bucket', replicationConfig)
```

<a name="getBucketReplication"></a>

### getBucketReplication(bucketName)

Get replication config of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
const replicatinConfig = await minioClient.getBucketReplication('source-bucket')
console.log(replicatinConfig)
```

<a name="removeBucketReplication"></a>

### removeBucketReplication(bucketName)

Remove replication config of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
await minioClient.removeBucketReplication('source-bucket')
```

<a name="setBucketTagging"></a>

### setBucketTagging(bucketName, tags)

Set Tags on a Bucket

**Parameters**

| Param        | Type     | Description                                               |
| ------------ | -------- | --------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                       |
| `tags`       | _object_ | Tags map Configuration e.g: `{<tag-key-1>:<tag-value-1>}` |

**Example**

```js
await minioClient.setBucketTagging('bucketname', tags)
```

<a name="removeBucketTagging"></a>

### removeBucketTagging(bucketName, callback)

Remove Tags on a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
await minioClient.removeBucketTagging('bucketname')
```

<a name="getBucketTagging"></a>

### getBucketTagging(bucketName)

Gets Tags on a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
const tagList = await minioClient.getBucketTagging('bucketname')
console.log(tagList)
```

<a name="setBucketLifecycle"></a>

### setBucketLifecycle(bucketName, lifecycleConfig)

Set Lifecycle Configuration on a Bucket

**Parameters**

| Param             | Type     | Description                                                                        |
| ----------------- | -------- | ---------------------------------------------------------------------------------- |
| `bucketName`      | _string_ | Name of the bucket.                                                                |
| `lifecycleConfig` | _object_ | Valid Lifecycle Configuration or ( `null` or `''` ) to remove policy configuration |

**Example**

```js
const lifecycleConfig = {
  Rule: [
    {
      ID: 'Transition and Expiration Rule',
      Status: 'Enabled',
      Filter: {
        Prefix: '',
      },
      Expiration: {
        Days: '3650',
      },
    },
  ],
}

await minioClient.setBucketLifecycle('bucketname', lifecycleConfig)
```

<a name="getBucketLifecycle"></a>

### getBucketLifecycle(bucketName)

Get Lifecycle Configuration of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
await minioClient.getBucketLifecycle('bucketname')
```

<a name="removeBucketLifecycle"></a>

### removeBucketLifecycle(bucketName)

Remove Lifecycle Configuration of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example**

```js
await minioClient.removeBucketLifecycle('bucketname')
```

<a name="setObjectLockConfig"></a>

### setObjectLockConfig(bucketName, lockConfig [, callback])

Set Object lock config on a Bucket

**Parameters**

| Param        | Type     | Description                                                                                                                                                                                            |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bucketName` | _string_ | Name of the bucket.                                                                                                                                                                                    |
| `lockConfig` | _object_ | Lock Configuration can be either `{}` to reset or object with all of the following key/value pairs: `{mode: ["COMPLIANCE"/'GOVERNANCE'], unit: ["Days"/"Years"], validity: <a-valid-number-for-unit>}` |

**Example 1**

```js
await minioClient.setObjectLockConfig('my-bucketname', { mode: 'COMPLIANCE', unit: 'Days', validity: 10 })
```

**Example 2**
To reset/remove object lock config on a bucket.

```js
await s3Client.setObjectLockConfig('my-bucketname', {})
```

<a name="getObjectLockConfig"></a>

### getObjectLockConfig(bucketName [, callback])

Get Lock config on a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example **
Get object lock configuration on a Bucket

```js
await minioClient.getObjectLockConfig('my-bucketname')
```

<a name="setBucketEncryption"></a>

### setBucketEncryption(bucketName [,encryptionConfig])

Set encryption configuration on a Bucket

**Parameters**

| Param              | Type     | Description                                                                                                                                                                                        |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`       | _string_ | Name of the bucket.                                                                                                                                                                                |
| `encryptionConfig` | _object_ | Encryption Configuration can be either omitted or `{}` or a valid and supported encryption config. by default: `{Rule:[{ApplyServerSideEncryptionByDefault:{SSEAlgorithm:"AES256"}}]}` is applied. |

**Example **
Set Encryption configuration on a Bucket

```js
await s3Client.setBucketEncryption('my-bucketname')
```

**Example 1**
Set Encryption configuration on a Bucket with an Algorithm

```js
await s3Client.setBucketEncryption('my-bucketname', {
  Rule: [{ ApplyServerSideEncryptionByDefault: { SSEAlgorithm: 'AES256' } }],
})
```

<a name="getBucketEncryption"></a>

### getBucketEncryption(bucketName)

Get encryption configuration of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example **
Get Encryption configuration of a Bucket

```js
await s3Client.getBucketEncryption('my-bucketname')
```

<a name="removeBucketEncryption"></a>

### removeBucketEncryption(bucketName)

Remove encryption configuration of a Bucket

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |

**Example **
Remove Encryption configuration of a Bucket

```js
await s3Client.removeBucketEncryption('my-bucketname')
```

## 3. Object operations

<a name="getObject"></a>

### getObject(bucketName, objectName, getOpts)

Downloads an object as a stream.

**Parameters**

| Param        | Type     | Description                                            |
| ------------ | -------- | ------------------------------------------------------ |
| `bucketName` | _string_ | Name of the bucket.                                    |
| `objectName` | _string_ | Name of the object.                                    |
| `getOpts`    | _object_ | Options to get the object. Default is `{}`. (optional) |

**Return Value**

| Param    | Type              | Description                         |
| -------- | ----------------- | ----------------------------------- |
| `stream` | `stream.Readable` | Stream emitting the object content. |

**Example**

```js
let size = 0
const dataStream = await minioClient.getObject('mybucket', 'photo.jpg')
dataStream.on('data', function (chunk) {
  size += chunk.length
})
dataStream.on('end', function () {
  console.log('End. Total size = ' + size)
})
dataStream.on('error', function (err) {
  console.log(err)
})
```

**Example**

Get a specific object version.

```js
let size = 0
const dataStream = await minioClient.getObject('mybucket', 'photo.jpg', { versionId: 'my-versionId' })
dataStream.on('data', function (chunk) {
  size += chunk.length
})
dataStream.on('end', function () {
  console.log('End. Total size = ' + size)
})
dataStream.on('error', function (err) {
  console.log(err)
})
```

**Example**

Get a Server Side Encrypted object.

```js
let size = 0
const dataStream = await minioClient.getObject('mybucket', 'photo.jpg', {
  SSECustomerAlgorithm: 'AES256',
  SSECustomerKey: 'YOUR_KEY',
  SSECustomerKeyMD5: 'YOUR_MD5',
})
dataStream.on('data', function (chunk) {
  size += chunk.length
})
dataStream.on('end', function () {
  console.log('End. Total size = ' + size)
})
dataStream.on('error', function (err) {
  console.log(err)
})
```

<a name="getPartialObject"></a>

### getPartialObject(bucketName, objectName, offset, length, getOpts[, callback])

Downloads the specified range bytes of an object as a stream.

**Parameters**

| Param                   | Type       | Description                                                                                                                               |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`            | _string_   | Name of the bucket.                                                                                                                       |
| `objectName`            | _string_   | Name of the object.                                                                                                                       |
| `offset`                | _number_   | `offset` of the object from where the stream will start.                                                                                  |
| `length`                | _number_   | `length` of the object that will be read in the stream (optional, if not specified we read the rest of the file from the offset).         |
| `getOpts`               | _object_   | Options to get the object. Default is `{}`. (optional)                                                                                    |
| `callback(err, stream)` | _function_ | Callback is called with `err` in case of error. `stream` is the object content stream. If no callback is passed, a `Promise` is returned. |

**Return Value**

| Param    | Type     | Description                         |
| -------- | -------- | ----------------------------------- |
| `stream` | _Stream_ | Stream emitting the object content. |

**Example**

```js
let size = 0
// reads 30 bytes from the offset 10.
const dataStream = await minioClient.getPartialObject('mybucket', 'photo.jpg', 10, 30)
dataStream.on('data', function (chunk) {
  size += chunk.length
})
dataStream.on('end', function () {
  console.log('End. Total size = ' + size)
})
dataStream.on('error', function (err) {
  console.log(err)
})
```

**Example**
To get a specific version of an object

```js
const versionedObjSize = 0
// reads 30 bytes from the offset 10.
const dataStream = await minioClient.getPartialObject('mybucket', 'photo.jpg', 10, 30, { versionId: 'my-versionId' })
dataStream.on('data', function (chunk) {
  versionedObjSize += chunk.length
})
dataStream.on('end', function () {
  console.log('End. Total size = ' + versionedObjSize)
})
dataStream.on('error', function (err) {
  console.log(err)
})
```

**Example**
To get a Server Side Encrypted object.

```js
const versionedObjSize = 0
// reads 30 bytes from the offset 10.
const dataStream = await minioClient.getPartialObject('mybucket', 'photo.jpg', 10, 30, {
  SSECustomerAlgorithm: 'AES256',
  SSECustomerKey: 'YOUR_KEY',
  SSECustomerKeyMD5: 'YOUR_MD5',
})
dataStream.on('data', function (chunk) {
  versionedObjSize += chunk.length
})
dataStream.on('end', function () {
  console.log('End. Total size = ' + versionedObjSize)
})
dataStream.on('error', function (err) {
  console.log(err)
})
```

<a name="fGetObject"></a>

### fGetObject(bucketName, objectName, filePath, getOpts[, callback])

Downloads and saves the object as a file in the local filesystem.

**Parameters**

| Param           | Type       | Description                                                                                        |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| `bucketName`    | _string_   | Name of the bucket.                                                                                |
| `objectName`    | _string_   | Name of the object.                                                                                |
| `filePath`      | _string_   | Path on the local filesystem to which the object data will be written.                             |
| `getOpts`       | _object_   | Options to get the object. Default is `{}`. (optional)                                             |
| `callback(err)` | _function_ | Callback is called with `err` in case of error. If no callback is passed, a `Promise` is returned. |

**Return Value**

| Value  | Type     | Description                                      |
| ------ | -------- | ------------------------------------------------ |
| `err`  | _object_ | Error in case of any failures                    |
| `file` | _file_   | Streamed Output file at the specified `filePath` |

**Example**

```js
minioClient.fGetObject('mybucket', 'photo.jpg', '/tmp/photo.jpg', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('success')
})
```

**Example**
To Stream a specific object version into a file.

```js
minioClient.fGetObject(bucketName, objNameValue, './download/MyImage.jpg', { versionId: 'my-versionId' }, function (e) {
  if (e) {
    return console.log(e)
  }
  console.log('success')
})
```

**Example**
To Stream a Server Side Encrypted object into a file.

```js
minioClient.fGetObject(
  bucketName,
  objNameValue,
  './download/MyImage.jpg',
  {
    SSECustomerAlgorithm: 'AES256',
    SSECustomerKey: 'YOUR_KEY',
    SSECustomerKeyMD5: 'YOUR_MD5',
  },
  function (e) {
    if (e) {
      return console.log(e)
    }
    console.log('success')
  },
)
```

<a name="putObject"></a>

### putObject(bucketName, objectName, stream, size, metaData[, callback])

Uploads an object from a stream/Buffer.

##### From a stream

**Parameters**

| Param                    | Type                | Description                                                                                                                                                                      |
| ------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`             | _string_            | Name of the bucket.                                                                                                                                                              |
| `objectName`             | _string_            | Name of the object.                                                                                                                                                              |
| `stream`                 | _Stream_            | Readable stream.                                                                                                                                                                 |
| `size`                   | _number_            | Size of the object (optional).                                                                                                                                                   |
| `metaData`               | _Javascript Object_ | metaData of the object (optional).                                                                                                                                               |
| `callback(err, objInfo)` | _function_          | Non-null `err` indicates error, in case of Success,`objInfo` contains `etag` _string_ and `versionId` _string_ of the object. If no callback is passed, a `Promise` is returned. |

**Return Value**

| Value               | Type     | Description                         |
| ------------------- | -------- | ----------------------------------- |
| `err`               | _object_ | Error in case of any failures       |
| `objInfo.etag`      | _string_ | `etag` of an object                 |
| `objInfo.versionId` | _string_ | `versionId` of an object (optional) |

**Example**

The maximum size of a single object is limited to 5TB. putObject transparently uploads objects larger than 64MiB in multiple parts. Uploaded data is carefully verified using MD5SUM signatures.

```js
import * as Fs from 'fs'
const file = '/tmp/40mbfile'
const fileStream = Fs.createReadStream(file)
const fileStat = Fs.stat(file, function (err, stats) {
  if (err) {
    return console.log(err)
  }
  minioClient.putObject('mybucket', '40mbfile', fileStream, stats.size, function (err, objInfo) {
    if (err) {
      return console.log(err) // err should be null
    }
    console.log('Success', objInfo)
  })
})
```

##### From a "Buffer" or a "string"

**Parameters**

| Param                 | Type                 | Description                                                                         |
| --------------------- | -------------------- | ----------------------------------------------------------------------------------- |
| `bucketName`          | _string_             | Name of the bucket.                                                                 |
| `objectName`          | _string_             | Name of the object.                                                                 |
| `string or Buffer`    | _Stream_ or _Buffer_ | Readable stream.                                                                    |
| `metaData`            | _Javascript Object_  | metaData of the object (optional).                                                  |
| `callback(err, etag)` | _function_           | Non-null `err` indicates error, `etag` _string_ is the etag of the object uploaded. |

**Example**

```js
const buffer = 'Hello World'
minioClient.putObject('mybucket', 'hello-file', buffer, function (err, etag) {
  return console.log(err, etag) // err should be null
})
```

<a name="fPutObject"></a>

### fPutObject(bucketName, objectName, filePath, metaData[, callback])

Uploads contents from a file to objectName.

**Parameters**

| Param                                                                                                                                                                                     | Type                | Description                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------------- |
| `bucketName`                                                                                                                                                                              | _string_            | Name of the bucket.              |
| `objectName`                                                                                                                                                                              | _string_            | Name of the object.              |
| `filePath`                                                                                                                                                                                | _string_            | Path of the file to be uploaded. |
| `metaData`                                                                                                                                                                                | _Javascript Object_ | Metadata of the object.          |
| `callback(err, objInfo)` _function_: non null `err` indicates error, `objInfo` _object_ is the information about the object uploaded which contains `versionId` string and `etag` string. |                     |                                  |

**Return Value**

| Value               | Type     | Description                         |
| ------------------- | -------- | ----------------------------------- |
| `err`               | _object_ | Error in case of any failures       |
| `objInfo.etag`      | _string_ | `etag` of an object                 |
| `objInfo.versionId` | _string_ | `versionId` of an object (optional) |

**Example**

The maximum size of a single object is limited to 5TB. fPutObject transparently uploads objects larger than 64MiB in multiple parts. Uploaded data is carefully verified using MD5SUM signatures.

```js
const file = '/tmp/40mbfile'
const metaData = {
  'Content-Type': 'text/html',
  'Content-Language': 123,
  'X-Amz-Meta-Testing': 1234,
  example: 5678,
}
minioClient.fPutObject('mybucket', '40mbfile', file, metaData, function (err, objInfo) {
  if (err) {
    return console.log(err)
  }
  console.log('Success', objInfo.etag, objInfo.versionId)
})
```

<a name="copyObject"></a>

### copyObject(targetBucketName, targetObjectName, sourceBucketNameAndObjectName [,conditions])

Copy a source object into a new object in the specified bucket.

**Parameters**

| Param                           | Type             | Description                                             |
| ------------------------------- | ---------------- | ------------------------------------------------------- |
| `targetBucketName`              | _string_         | Name of the bucket.                                     |
| `targetObjectName`              | _string_         | Name of the object.                                     |
| `sourceBucketNameAndObjectName` | _string_         | Path of the file to be copied.                          |
| `conditions`                    | _CopyConditions_ | Conditions to be satisfied before allowing object copy. |

**Example**

```js
const conds = new Minio.CopyConditions()
conds.setMatchETag('bd891862ea3e22c93ed53a098218791d')
await minioClient.copyObject('mybucket', 'newobject', '/mybucket/srcobject', conds)
```

<a name="statObject"></a>

### statObject(bucketName, objectName, statOpts[, callback])

Gets metadata of an object.

**Parameters**

| Param                 | Type       | Description                                                                                                                                   |
| --------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`          | _string_   | Name of the bucket.                                                                                                                           |
| `objectName`          | _string_   | Name of the object.                                                                                                                           |
| `statOpts`            | _object_   | Version of the object in the form `{versionId:"my-versionId"}`. Default is `{}`. (optional)                                                   |
| `callback(err, stat)` | _function_ | `err` is not `null` in case of error, `stat` contains the object information listed below. If no callback is passed, a `Promise` is returned. |

**Return Value**

| Param               | Type                | Description               |
| ------------------- | ------------------- | ------------------------- |
| `stat.size`         | _number_            | size of the object.       |
| `stat.etag`         | _string_            | etag of the object.       |
| `stat.versionId`    | _string_            | version of the object.    |
| `stat.metaData`     | _Javascript Object_ | metadata of the object.   |
| `stat.lastModified` | _Date_              | Last Modified time stamp. |

**Example**

```js
const stat = await minioClient.statObject('mybucket', 'photo.jpg')
console.log(stat)
```

**Example stat on a version of an object**

```js
const stat = await minioClient.statObject('mybucket', 'photo.jpg', { versionId: 'my-versionId' })
console.log(stat)
```

<a name="removeObject"></a>

### removeObject(bucketName, objectName [, removeOpts])

Removes an object.

**Parameters**

| Param        | Type     | Description                                                                                                                   |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                                                           |
| `objectName` | _string_ | Name of the object.                                                                                                           |
| `removeOpts` | _object_ | Version of the object in the form `{versionId:"my-versionId", governanceBypass: true or false }`. Default is `{}`. (Optional) |

**Example 1**

```js
;(async function () {
  await minioClient.removeObject('mybucket', 'photo.jpg')
  console.log('Removed the object')
})()
```

**Example 2**
Delete a specific version of an object

```js
;(async function () {
  try {
    await minioClient.removeObject('mybucket', 'photo.jpg', { versionId: 'my-versionId' })
    console.log('Removed the object')
  } catch (err) {
    console.log('Unable to remove object', err)
  }
})()
```

**Example 3**
Remove an object version locked with retention mode `GOVERNANCE` using the `governanceBypass` remove option

```js
;(async function () {
  await s3Client.removeObject('my-bucketname', 'my-objectname', { versionId: 'my-versionId', governanceBypass: true })
  console.log('Success')
})()
```

<a name="removeObjects"></a>

### removeObjects(bucketName, objectsList)

Remove all objects in the objectsList.

**Parameters**

| Param         | Type     | Description                                                                                                                                                                                                                                                                |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`  | _string_ | Name of the bucket.                                                                                                                                                                                                                                                        |
| `objectsList` | _object_ | list of objects in the bucket to be removed. any one of the formats: 1. List of Object names as array of strings which are object keys: `['objectname1','objectname2']` 2. List of Object name and VersionId as an object: [{name:"my-obj-name",versionId:"my-versionId"}] |

**Example**

```js
const objectsList = []

// List all object paths in bucket my-bucketname.
const objectsStream = s3Client.listObjects('my-bucketname', 'my-prefixname', true)

objectsStream.on('data', function (obj) {
  objectsList.push(obj.name)
})

objectsStream.on('error', function (e) {
  console.log(e)
})

objectsStream.on('end', async () => {
  await s3Client.removeObjects(bucket, objectsList)
})
```

**Example1**

With versioning Support

```js
const objectsList = []
const bucket = 'my-bucket'
const prefix = 'my-prefix'
const recursive = false

const objectsStream = s3Client.listObjects(bucket, prefix, recursive, { IncludeVersion: true })
objectsStream.on('data', function (obj) {
  objectsList.push(obj)
})
objectsStream.on('error', function (e) {
  return console.log(e)
})
objectsStream.on('end', async () => {
  await s3Client.removeObjects(bucket, objectsList)
})
```

<a name="removeIncompleteUpload"></a>

### removeIncompleteUpload(bucketName, objectName)

Removes a partially uploaded object.

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |
| `objectName` | _string_ | Name of the object. |

**Example**

```js
await minioClient.removeIncompleteUpload('mybucket', 'photo.jpg')
```

<a name="putObjectRetention"></a>

### async putObjectRetention(bucketName, objectName [, retentionOpts])

Apply retention on an object.

**Parameters**

| Param           | Type     | Description                                                                                                                                                               |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`    | _string_ | Name of the bucket.                                                                                                                                                       |
| `objectName`    | _string_ | Name of the object.                                                                                                                                                       |
| `retentionOpts` | _object_ | Options for retention like : `{ governanceBypass:true/false ,mode:COMPLIANCE/GOVERNANCE, retainUntilDate: _date_ , versionId:"my-versionId" }` Default is `{}` (Optional) |

**Example**
Apply object retention on an object

```js
const bucketName = 'my-bucket'
const objectName = 'my-object'

const expirationDate = new Date()
expirationDate.setDate(expirationDate.getDate() + 1)
expirationDate.setUTCHours(0, 0, 0, 0) //Should be start of the day.(midnight)
const versionId = 'e67b4b08-144d-4fc4-ba15-43c3f7f9ba74'

await minioClient.putObjectRetention(bucketName, objectName, {
  Mode: 'GOVERNANCE',
  retainUntilDate: retainUntilDate.toISOString(),
  versionId: versionId,
})
```

<a name="getObjectRetention"></a>

### getObjectRetention(bucketName, objectName [, getOpts])

Get retention config of an object

**Parameters**

| Param        | Type     | Description                                                                            |
| ------------ | -------- | -------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                    |
| `objectName` | _string_ | Name of the object.                                                                    |
| `getOpts`    | _object_ | Options for retention like : `{ versionId:"my-versionId" }` Default is `{}` (Optional) |

**Example 1**

```js
const retentionInfo = await minioClient.getObjectRetention('bucketname', 'objectname')
console.log(retentionInfo)
```

**Example 2**

```js
const retInfoForVersionId = await minioClient.getObjectRetention('bucketname', 'objectname', {
  versionId: 'my-versionId',
})
console.log(retInfoForVersionId)
```

<a name="setObjectTagging"></a>

### setObjectTagging(bucketName, objectName, tags[, putOpts])

Put Tags on an Object

**Parameters**

| Param        | Type     | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| `bucketName` | _string_ | Name of the bucket.                                          |
| `objectName` | _string_ | Name of the object.                                          |
| `tags`       | _object_ | Tags map Configuration e.g: `{<tag-key-1>:<tag-value-1>}`    |
| `putOpts`    | _object_ | Default is {}. e.g `{versionId:"my-version-id"}`. (Optional) |

**Example**

```js
await minioClient.setObjectTagging('bucketname', 'object-name', tags)
```

**Example 1**
Put tags on a version of an object.

```js
await minioClient.setObjectTagging('bucketname', 'object-name', tags, { versionId: 'my-version-id' })
```

<a name="removeObjectTagging"></a>

### removeObjectTagging(bucketName, objectName[, removeOpts])

Remove Tags on an Object

**Parameters**

| Param        | Type     | Description                                                   |
| ------------ | -------- | ------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                           |
| `objectName` | _string_ | Name of the object.                                           |
| `removeOpts` | _object_ | Defaults to {}. e.g `{versionId:"my-version-id"}`. (Optional) |

**Example**

```js
await minioClient.removeObjectTagging('bucketname', 'object-name')
```

**Example1**
Remove tags on a version of an object.

```js
await minioClient.removeObjectTagging('bucketname', 'object-name', { versionId: 'my-object-version-id' })
```

<a name="getObjectTagging"></a>

### getObjectTagging(bucketName, objectName[, getOpts])

Get Tags of an Object

**Parameters**

| Param        | Type     | Description                                                   |
| ------------ | -------- | ------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                           |
| `objectName` | _string_ | Name of the object.                                           |
| `getOpts`    | _object_ | Defaults to {}. e.g `{versionId:"my-version-id"}`. (Optional) |

**Example**

```js
console.log(await minioClient.getObjectTagging('bucketname', 'object-name'))
```

**Example1**
Get tags on a version of an object.

```js
console.log(await minioClient.getObjectTagging('bucketname', 'object-name', { versionId: 'my-object-version-id' }))
```

<a name="getObjectLegalHold"></a>

### getObjectLegalHold(bucketName, objectName, getOpts)

Get legal hold on an object.

**Parameters**

| Param        | Type     | Description                                                                               |
| ------------ | -------- | ----------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                       |
| `objectName` | _string_ | Name of the object.                                                                       |
| `getOpts`    | _object_ | Legal hold configuration options. e.g `{versionId:'my-version-uuid'}`. Defaults to `{}` . |

**Example 1**

Get Legal hold of an object.

```js
const legalholdStatus = await minioClient.getObjectLegalHold('bucketName', 'objectName')
```

**Example 2**

Get Legal hold of an object with versionId.

```js
const legalholdStatus = await minioClient.getObjectLegalHold('bucketName', 'objectName', {
  versionId: 'my-obj-version-uuid',
})
```

<a name="setObjectLegalHold"></a>

### setObjectLegalHold(bucketName, objectName, [,setOpts])

Set legal hold on an object.

**Parameters**

| Param        | Type     | Description                                                                                                                                  |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket.                                                                                                                          |
| `objectName` | _string_ | Name of the object.                                                                                                                          |
| `setOpts`    | _object_ | Legal hold configuration options to set. e.g `{versionId:'my-version-uuid', status:'ON or OFF'}`. Defaults to `{status:'ON'}` if not passed. |

**Example 1**

Set Legal hold of an object.

```js
const legalholdStatus = await minioClient.setObjectLegalHold('bucketName', 'objectName', { Status: 'ON' })
```

**Example 2**

Set Legal hold of an object with versionId.

```js
const legalholdStatus = await minioClient.setObjectLegalHold('bucketName', 'objectName', {
  Status: 'ON',
  versionId: 'my-obj-version-uuid',
})
```

<a name="composeObject"></a>

### composeObject(destObjConfig, sourceObjectList)

Compose an object from parts

**Parameters**

| Param              | Type       | Description                                                                                                                                                                          |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `destObjConfig`    | _object_   | Destination Object configuration of the type [CopyDestinationOptions](https://github.com/minio/minio-js/blob/master/src/helpers.js)                                                  |
| `sourceObjectList` | _object[]_ | Array of object(parts) source to compose into an object. Each part configuration should be of type [CopySourceOptions](https://github.com/minio/minio-js/blob/master/src/helpers.js) |

**Example 1**

Compose an Object from its parts .

```js
import * as minio from 'minio'

const sourceList = [
  new minio.CopySourceOptions({
    Bucket: 'source-bucket',
    Object: 'parta',
  }),
  new minio.CopySourceOptions({
    Bucket: 'source-bucket',
    Object: 'partb',
  }),
  new minio.CopySourceOptions({
    Bucket: 'source-bucket',
    Object: 'partc',
  }),
  new minio.CopySourceOptions({
    Bucket: 'source-bucket',
    Object: 'partd',
  }),
]

const destOption = new minio.CopyDestinationOptions({
  Bucket: 'dest-bucket',
  Object: '100MB.zip',
})

//using Promise style.
await minioClient.composeObject(destOption, sourceList)
```

<a name="selectObjectContent"></a>

### selectObjectContent(bucketName, objectName, selectOpts)

Select contents of an object (S3 Select).

**Parameters**

| Param        | Type     | Description         |
| ------------ | -------- | ------------------- |
| `bucketName` | _string_ | Name of the bucket. |
| `objectName` | _string_ | Name of the object. |
| `selectOpts` | _object_ |                     |

**Example 1**
Select all values

```js
const selectOpts = {
  expression: 'SELECT * FROM s3object s where s."Name" = \'Jane\'',
  expressionType: 'SQL',
  inputSerialization: {
    CSV: { FileHeaderInfo: 'Use', RecordDelimiter: '\n', FieldDelimiter: ',' },
    CompressionType: 'NONE',
  },
  outputSerialization: { CSV: { RecordDelimiter: '\n', FieldDelimiter: ',' } },
  requestProgress: { Enabled: true },
}

const res = await minioClient.selectObjectContent('bucketName', 'objectName', selectOpts)
console.log(res)
```

## 4. Presigned operations

Presigned URLs are generated for temporary download/upload access to private objects.

<a name="presignedUrl"></a>

### presignedUrl(httpMethod, bucketName, objectName[, expiry, reqParams, requestDate])

Generates a presigned URL for the provided HTTP method, 'httpMethod'. Browsers/Mobile clients may point to this URL to directly download objects even if the bucket is private. This presigned URL can have an associated expiration time in seconds after which the URL is no longer valid. The default value is 7 days.

**Parameters**

| Param         | Type     | Description                                                                           |
| ------------- | -------- | ------------------------------------------------------------------------------------- |
| `bucketName`  | _string_ | Name of the bucket.                                                                   |
| `objectName`  | _string_ | Name of the object.                                                                   |
| `expiry`      | _number_ | Expiry time in seconds. Default value is 7 days. (optional)                           |
| `reqParams`   | _object_ | request parameters. (optional) e.g {versionId:"10fa9946-3f64-4137-a58f-888065c0732e"} |
| `requestDate` | _Date_   | A date object, the url will be issued at. Default value is now. (optional)            |

**Example1**

```js
// presigned url for 'getObject' method.
// expires in a day.
const presignedUrl = await minioClient.presignedUrl('GET', 'mybucket', 'hello.txt', 24 * 60 * 60)
console.log(presignedUrl)
```

**Example2**

```js
// presigned url for 'listObject' method.
// Lists objects in 'myBucket' with prefix 'data'.
// Lists max 1000 of them.
await minioClient.presignedUrl('GET', 'mybucket', '', 1000, { prefix: 'data', 'max-keys': 1000 })
```

**Example 3**

```js
// Get Object with versionid
await minioClient.presignedUrl('GET', 'mybucket', '', 1000, { versionId: '10fa9946-3f64-4137-a58f-888065c0732e' })
```

<a name="presignedGetObject"></a>

### presignedGetObject(bucketName, objectName[, expiry, respHeaders, requestDate])

Generates a presigned URL for HTTP GET operations. Browsers/Mobile clients may point to this URL to directly download objects even if the bucket is private. This presigned URL can have an associated expiration time in seconds after which the URL is no longer valid. The default value is 7 days.

**Parameters**

| Param         | Type     | Description                                                                |
| ------------- | -------- | -------------------------------------------------------------------------- |
| `bucketName`  | _string_ | Name of the bucket.                                                        |
| `objectName`  | _string_ | Name of the object.                                                        |
| `expiry`      | _number_ | Expiry time in seconds. Default value is 7 days. (optional)                |
| `respHeaders` | _object_ | response headers to override (optional)                                    |
| `requestDate` | _Date_   | A date object, the url will be issued at. Default value is now. (optional) |

**Example**

```js
// expires in a day.
const presignedUrl = await minioClient.presignedGetObject('mybucket', 'hello.txt', 24 * 60 * 60)
console.log(presignedUrl)
```

<a name="presignedPutObject"></a>

### presignedPutObject(bucketName, objectName [,expiry])

Generates a presigned URL for HTTP PUT operations. Browsers/Mobile clients may point to this URL to upload objects directly to a bucket even if it is private. This presigned URL can have an associated expiration time in seconds after which the URL is no longer valid. The default value is 7 days.

**Parameters**

| Param        | Type     | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| `bucketName` | _string_ | Name of the bucket.                              |
| `objectName` | _string_ | Name of the object.                              |
| `expiry`     | _number_ | Expiry time in seconds. Default value is 7 days. |

**Example**

```js
// expires in a day.
const presignedUrl = await minioClient.presignedPutObject('mybucket', 'hello.txt', 24 * 60 * 60)
console.log(presignedUrl)
```

<a name="presignedPostPolicy"></a>

### presignedPostPolicy(policy)

Allows setting policy conditions to a presigned URL for POST operations. Policies such as bucket name to receive object uploads, key name prefixes, expiry policy may be set.

**Parameters**

| Param    | Type     | Description                                          |
| -------- | -------- | ---------------------------------------------------- |
| `policy` | _object_ | Policy object created by minioClient.newPostPolicy() |

Create policy:

```js
const policy = minioClient.newPostPolicy()
```

Apply upload policy restrictions:

```js
// Policy restricted only for bucket 'mybucket'.
policy.setBucket('mybucket')

// Policy restricted only for hello.txt object.
policy.setKey('hello.txt')
```

or

```js
// Policy restricted for incoming objects with keyPrefix.
policy.setKeyStartsWith('keyPrefix')

const expires = new Date()
expires.setSeconds(24 * 60 * 60 * 10)
// Policy expires in 10 days.
policy.setExpires(expires)

// Only allow 'text'.
policy.setContentType('text/plain')

// Set content disposition response header.
policy.setContentDisposition('attachment; filename=text.txt')

// Only allow content size in range 1KB to 1MB.
policy.setContentLengthRange(1024, 1024 * 1024)

// Set key-value user defined metadata
policy.setUserMetaData({
  key: 'value',
})
```

POST your content from the browser using `superagent`:

```js
const { postURL, formData } = await minioClient.presignedPostPolicy(policy)
const req = superagent.post(postURL)
_.each(formData, function (value, key) {
  req.field(key, value)
})

// file contents.
req.attach('file', '/path/to/hello.txt', 'hello.txt')

req.end(function (err, res) {
  if (err) {
    return console.log(err.toString())
  }
  console.log('Upload successful.')
})
```

## 5. Bucket Policy & Notification operations

Buckets are configured to trigger notifications on specified types of events and paths filters.

<a name="getBucketNotification"></a>

### getBucketNotification(bucketName[, cb])

Fetch the notification configuration stored in the S3 provider and that belongs to the specified bucket name.

**Parameters**

| Param                                     | Type       | Description                                                                                                                                                                                                                                     |
| ----------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`                              | _string_   | Name of the bucket.                                                                                                                                                                                                                             |
| `callback(err, bucketNotificationConfig)` | _function_ | Callback function is called with non `null` err value in case of error. `bucketNotificationConfig` will be the object that carries all notification configurations associated to bucketName. If no callback is passed, a `Promise` is returned. |

**Example**

```js
minioClient.getBucketNotification('mybucket', function (err, bucketNotificationConfig) {
  if (err) return console.log(err)
  console.log(bucketNotificationConfig)
})
```

<a name="setBucketNotification"></a>

### setBucketNotification(bucketName, bucketNotificationConfig[, callback])

Upload a user-created notification configuration and associate it to the specified bucket name.

**Parameters**

| Param                      | Type                 | Description                                                                                                                |
| -------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`               | _string_             | Name of the bucket.                                                                                                        |
| `bucketNotificationConfig` | _BucketNotification_ | Javascript object that carries the notification configuration.                                                             |
| `callback(err)`            | _function_           | Callback function is called with non `null` err value in case of error. If no callback is passed, a `Promise` is returned. |

**Example**

```js
// Create a new notification object
const bucketNotification = new Minio.NotificationConfig()

// Setup a new Queue configuration
const arn = Minio.buildARN('aws', 'sqs', 'us-west-2', '1', 'webhook')
const queue = new Minio.QueueConfig(arn)
queue.addFilterSuffix('.jpg')
queue.addFilterPrefix('myphotos/')
queue.addEvent(Minio.ObjectReducedRedundancyLostObject)
queue.addEvent(Minio.ObjectCreatedAll)

// Add the queue to the overall notification object
bucketNotification.add(queue)

minioClient.setBucketNotification('mybucket', bucketNotification, function (err) {
  if (err) return console.log(err)
  console.log('Success')
})
```

<a name="removeAllBucketNotification"></a>

### removeAllBucketNotification(bucketName[, callback])

Remove the bucket notification configuration associated to the specified bucket.

**Parameters**

| Param           | Type       | Description                                                                                                                |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `bucketName`    | _string_   | Name of the bucket                                                                                                         |
| `callback(err)` | _function_ | Callback function is called with non `null` err value in case of error. If no callback is passed, a `Promise` is returned. |

```js
minioClient.removeAllBucketNotification('my-bucketname', function (e) {
  if (e) {
    return console.log(e)
  }
  console.log('True')
})
```

<a name="listenBucketNotification"></a>

### listenBucketNotification(bucketName, prefix, suffix, events)

Listen for notifications on a bucket. Additionally one can provider
filters for prefix, suffix and events. There is no prior set bucket notification
needed to use this API. This is an MinIO extension API where unique identifiers
are registered and unregistered by the server automatically based on incoming requests.

Returns an `EventEmitter`, which will emit a `notification` event carrying the record.

To stop listening, call `.stop()` on the returned `EventEmitter`.

**Parameters**

| Param        | Type     | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| `bucketName` | _string_ | Name of the bucket                              |
| `prefix`     | _string_ | Object key prefix to filter notifications for.  |
| `suffix`     | _string_ | Object key suffix to filter notifications for.  |
| `events`     | _Array_  | Enables notifications for specific event types. |

See [here](https://github.com/minio/minio-js/blob/master/examples/minio/listen-bucket-notification.js) for a full example.

```js
const listener = minioClient.listenBucketNotification('my-bucketname', 'photos/', '.jpg', ['s3:ObjectCreated:*'])
listener.on('notification', function (record) {
  // For example: 's3:ObjectCreated:Put event occurred (2016-08-23T18:26:07.214Z)'
  console.log('%s event occurred (%s)', record.eventName, record.eventTime)
  listener.stop()
})
```

<a name="getBucketPolicy"></a>

### async getBucketPolicy(bucketName: string): Promise<string>

Get the bucket policy associated with the specified bucket. If `objectPrefix`
is not empty, the bucket policy will be filtered based on object permissions
as well.

**Parameters**

| Param        | Type     | Description        |
| ------------ | -------- | ------------------ |
| `bucketName` | _string_ | Name of the bucket |

```js
// Retrieve bucket policy of 'my-bucketname'
const policy = await minioClient.getBucketPolicy('my-bucketname')

console.log(`Bucket policy file: ${policy}`)
```

<a name="setBucketPolicy"></a>

### async setBucketPolicy(bucketName, bucketPolicy): Promise<void>

Set the bucket policy on the specified bucket. [bucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) is detailed here.

**Parameters**

| Param          | Type     | Description         |
| -------------- | -------- | ------------------- |
| `bucketName`   | _string_ | Name of the bucket. |
| `bucketPolicy` | _string_ | bucket policy.      |

```js
// Set the bucket policy of `my-bucketname`
await minioClient.setBucketPolicy('my-bucketname', JSON.stringify(policy))
```

## 6. Custom Settings

<a name="setS3TransferAccelerate"></a>

### setS3TransferAccelerate(endpoint)

Set AWS S3 transfer acceleration endpoint for all API requests hereafter.
NOTE: This API applies only to AWS S3 and is a no operation for S3 compatible object storage services.

**Parameters**

| Param      | Type     | Description                                   |
| ---------- | -------- | --------------------------------------------- |
| `endpoint` | _string_ | Set to new S3 transfer acceleration endpoint. |

## 7. HTTP request options

### setRequestOptions(options)

Set the HTTP/HTTPS request options. Supported options are `agent` ([http.Agent()](https://nodejs.org/api/http.html#http_class_http_agent)), `family` ([IP address family to use while resolving `host` or `hostname`](https://nodejs.org/api/http.html#http_http_request_url_options_callback)), and tls related options ('agent', 'ca', 'cert', 'ciphers', 'clientCertEngine', 'crl', 'dhparam', 'ecdhCurve', 'honorCipherOrder', 'key', 'passphrase', 'pfx', 'rejectUnauthorized', 'secureOptions', 'secureProtocol', 'servername', 'sessionIdContext') documented [here](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options)

```js
// Do not reject self signed certificates.
minioClient.setRequestOptions({ rejectUnauthorized: false })
```

## 7. Explore Further

- [Build your own Shopping App Example](https://github.com/minio/minio-js-store-app)
