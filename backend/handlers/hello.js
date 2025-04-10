export const helloHandler = (request, response) => {
  response.status(200).send('Hello our first app')
}

// export default helloHandler se puede exportar asi pero mejor pon el exportar
// en la parte de const helloHandler

