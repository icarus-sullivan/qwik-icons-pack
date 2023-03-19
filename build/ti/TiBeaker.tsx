import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M19.445 16.809l-2.64-9.809h1.195c.552 0 1-.448 1-1s-.448-1-1-1h-12c-.552 0-1 .448-1 1s.448 1 1 1h1.135c-.013.176-.048.402-.121.671l-2.459 9.138c-.218.809-.074 1.623.393 2.231.466.61 1.214.96 2.052.96h10c.838 0 1.586-.35 2.055-.959.466-.609.609-1.423.39-2.232zm-4.713-9.809l1.352 5.018-.084-.018h-8l-.084.018 1.029-3.826c.084-.312.173-.744.192-1.192h5.595zm2.734 10.824c-.087.114-.252.176-.466.176h-10c-.214 0-.379-.062-.466-.176-.086-.113-.104-.289-.048-.496l1.197-4.45c.088.073.195.122.317.122h8c.122 0 .229-.049.316-.121l1.197 4.45c.057.206.04.382-.047.495z"/></svg>
));