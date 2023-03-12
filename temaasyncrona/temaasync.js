const buttons = document.querySelectorAll('.btn-box > button');
const changeDest = document.querySelector('.second-row');


async function getDestinations() {

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
getDestinations()


buttons.forEach(button => {
  button.addEventListener('click', getDestinations)
})
