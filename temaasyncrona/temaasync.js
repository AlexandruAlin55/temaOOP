const button = document.querySelectorAll('.btn-box > button');
const changeDestinations = document.querySelector('.second-row');


async function getDestination() {

  const url = '/data/data.json'

  try {
    const response = await fetch(url)
    const data = await response.json()

    const pictures = data.destinations.map(({ pictures }) => pictures)
    const name = data.destinations.map(({ name }) => name)
    const description = data.destinations.map(({ description }) => description)

    console.log(`${name}, ${pictures}, ${description}`)
  }
  catch (e) {
    console.log(e)
  }
};
getDestination()


button.forEach(button => {
  button.addEventListener('click', getDestination)
})
