#### How The Web Works Exercise

##### Answer the following questions. Write out your answers in atext or markdown file.

- What is HTTP?

```
HTTP stands for Hypertext Transfer Protocol. It is the means of communication between servers and browsers. it specifies how information 
```

- What is URL?

```
URL stands for Uniforn Resource Locator, it is use to specify addresses on the World Wide Web. The URL is in the following format: protocol://hostname/other_information
```

- What is TCP?

```
TCP stands for Transmission Control Protocol, it enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order it was sent.
```

- What is IP?    

```
IP stands for Internet Protocol, The IP is the set of rules for routing and addressing packets of data so that they can travel across the networks and arrive at the correct destination.

```

- What is DNS?

```
DNS stands for Domain Name System, The DNS servers converts the human-readable domain names into computer-readable numerical IP addresses. 

```

- What is Idempotent?

```
Idempotent is an operation that will produce the same results if executed once or multiple times.

```

- What is a query string?

```
A query string is a part of the URL that assigns values to specified parameters.

```

- What is a path or route?

```
A path is route between any two points or node.

```

- List four HTTP Verbs and their use cases.

```
GET - The GET method is used to retrieve data from the server.

POST - The POST method is used to submit an enitity to the specified resource. causing a change in state on the server. The POST method is said to be non idempotent.

PUT- The PUT method is used to update data that already exist on the server.

DELETE - the DELETE method deletes data from the server.

```

- What is a client?

```
A client is a computer that request for resources or information from a remote computer(server)

```

- What is a server?

```
A server is a computer designed to process requests and provide data to other computers over the network

```

- What is an HTTP equest?

```
HTTP Request is a packet of binary data sent by the client to the server.
The HTTP Request contains the following:
1 - Request line
2 - HTTP Header

```

- What is HTTP Response?

```
HTTP Response - is the HTML page sent back to the requesting computer via a HTTP response message.
The HTTP Response contains the following:
1 - Status Line
2 - HTTP Header
3 - The Content/Body

```

- What is an HTTP header? Give a couple examples of request and response headers you have seen.

```
The HTTP Header is the core part of the HTTP requests and responses, it contains information about the client broswer, the requested page, the server, the method used, content-type and other information.

Example of an HTTP request Header:

GET /tutorials/other/top-20-mysql-best-practices/ HTTP/1.1
Host: net.tutsplus.com
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache


Example of an HTTP response Header:

HTTP/1.x 200 OK
Transfer-Encoding: chunked
Date: Sat, 28 Nov 2009 04:36:25 GMT
Server: LiteSpeed
Connection: close
X-Powered-By: W3 Total Cache/0.8
Pragma: public
Expires: Sat, 28 Nov 2009 05:36:25 GMT
Etag: "pub1259380237;gz"
Cache-Control: max-age=3600, public
Content-Type: text/html; charset=UTF-8
Last-Modified: Sat, 28 Nov 2009 03:50:37 GMT
X-Pingback: https://net.tutsplus.com/xmlrpc.php
Content-Encoding: gzip
Vary: Accept-Encoding, Cookie, User-Agent
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Top 20+ MySQL Best Practices - Nettuts+</title>
<!-- ... rest of the html ... -->



```

- What is REST?

```
REST stands for Representational State Transfer. it is an architectural style for desgning network applications. RESTful applications use HTTP requests to post data, read data and delete data.

```

- What is JSON?

```
JSON stands for Javascript Object Notation. JSON is a syntax for storing and exchanging data. it makes it possible to store Javascript object as text. it has two functions:
The JSON.stringify() function - converts data from one datatype to string
.
The JSON.parse() function is used to convert data from string back to its initial datatype.

```


- What happens when you type in "Hello World" in google.com and press enter?

```
- The first that happens is that the DNS translate google.com to its corresponding IP adrress.
- then, the browser makes an HTTP GET request using the IP address
- The server receives the GET request and and generate the HTML page
- the page is sent back to the requesting browser via the HTTP response message
- the browser read the HTTP response body line by line and then create the HTML document
- lastly, the browser makes additional GET request anytime it encounters tags that reference other tags

```

- What is curl?

```
curl - client url, is a command line tool for transferring data using various network protocol.

```

- What does it mean when we say the web is "stateless"?

```
This means that the server does not retain information previously sent to it. the server treats all clients connections equally and saves no information from prior requests or sessions.
```

- Make a GET request to the icanhazdadjoke API with curl to find all jokes involving the word "pirate." (your answer should be the curl command required).

```
noimot@DESKTOP-N0937DG:~$ curl https://icanhazdadjoke.com/search?term=pirate
What does a pirate pay for his corn? A buccaneer!
What did the pirate say on his 80th birthday? Aye Matey!
Why couldn't the kid see the pirate movie? Because it was rated arrr!
Why do pirates not know the alphabet? They always get stuck at "C".
Why are pirates called pirates? Because they arrr!
```
