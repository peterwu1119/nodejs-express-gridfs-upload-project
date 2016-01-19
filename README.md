1. execute node server.js
2. use browser , and enter: 127.0.0.1:8081/upload.html
3. select a file to upload
4. the file will be uploaded to your local mongodb gridfs instance
5. you can verify your mongodb gridfs file uploads by using 
    'mongofiles list 'command to get current gridfs files.
6. using 'mongofiles get filename' can download the file to local directory.
