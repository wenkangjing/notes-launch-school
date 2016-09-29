HTTP
-------------



Hypertext Transfer Protocol
  - stateless
  - trick to make user feel application is stateful
  - default port 50

DNS
- distributed database
- DNS servers routes to another DNS up the hierarchy until found IP

Query parameters
- ?,	This is a reserved character that marks the start of the query string
- search=ruby,	This is a parameter name/value pair.
- &,	This is a reserved character, used when adding more parameters to the query string.
- results=10,	This is also a parameter name/value pair.

URL
  - alphanumeric
  - $-_.+!'()," convert to % and 2 HEX


## HTTP

GET
  - idempotent, read multiple times whith same results
  - should never be useed to chagne database
  - safe
  - **most links are get**
  - size/security limitation

PUT
  - idempotent, update multiple times which same results

DELETE
  - idempotent

POST:
  - not idempotent
  - Repeated POST calls will create multiple users
  - **to submit a form**
  - body: larger information than GET

Request

- URL
- parameters
- headers
- message body (for POST requests)

Response
- Content-Encoding
- Server
- Content-Type
- Location // new resource location, redirect

status code - 3-digit number

200	OK
302	redirect
404	Not Found
500	server side issue

>
> 1×× Informational
> 2×× Success
> 3×× Redirection
> 4×× Client Error
> 5×× Server Error
>

## stateful web application

- sessions
  - session data by id
  - server check session expiration

- cookies
  - server sent session information via response header 'set-cookie'
  - store in browser cookie
  - append to request header if has 'cookie'


- AJAX = async js and xml
  - no full page refresh


## security

- https
  - SSL (Secure Sockets Layer) early https
  - TLS (transport layer security) now a days

- same-origin policy

- cross-origin resource sharing (CORS)

- session hijecking
  - hacker use the local cookie to login without knowing username/password

- cross-site scripting (XSS)
  - inject via input, form
  - sanitize user input, <script> tag, html+js



## TODO
- [.] config curl