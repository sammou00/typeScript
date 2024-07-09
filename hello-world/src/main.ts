// DOM elements
const title: HTMLElement | null = document.querySelector('.title');
const message: string = 'Hello World';
if (title)
{
    title.innerText = message;
}
