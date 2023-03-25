export default async function getQuote() {
  const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
    headers: {
      'X-Api-Key': 'kbdBHYGmEhIlmf/ENaVm4Q==Tt132PHdoKvl0IHP',
      'Content-Type': 'application/json',
    },
  });
  const quote = await response.json();
  return quote;
}
