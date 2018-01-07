import barista from 'barista-context';

var response = new barista.response();

response.statusCode = 418;
response.statusDescription = "I'M A TEAPOT"

response.body = `
    -=[ teapot ]=-

       _...._
     .'  _ _ `.
    | ."` ^ `". _,
    \_;`"---"`|//
      |       ;/
      \_     _/
        `"""`
`;

export default response;
