import barista from 'barista-context';
import teapot from './teapot.txt';

var response = new barista.response();

response.statusCode = 418;
response.statusDescription = "I'M A TEAPOT"
response.body = teapot;

export default response;
