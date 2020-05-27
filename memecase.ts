const decoder = new TextDecoder('utf-8');

const stdInContent = await Deno.readAll(Deno.stdin);
const letters = decoder.decode(stdInContent).split('');
for (let i = 0; i < letters.length; i += 2) {
    if (letters[i]) letters[i] = letters[i].toUpperCase();
}
console.log(letters.join(''));
