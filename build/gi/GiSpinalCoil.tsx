import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M268 21.47l-.094 32.06c-7.55.48-15.157 1.345-22.78 2.595l12.81 57.125c13.747-1.546 27.14-1.392 40.002.344L308.813 55c-7.306-1.024-14.718-1.647-22.22-1.844l.094-31.656L268 21.47zm-71.97 14.436l-17.593 6.344 10.72 29.813c-2.8 1.14-5.596 2.324-8.376 3.562-2.896 1.29-5.748 2.652-8.56 4.063l28.874 49.25c12.942-5.666 25.774-9.865 38.375-12.625l-12.657-56.47c-6.72 1.634-13.44 3.58-20.125 5.782l-10.657-29.72zm168.22 1.782L351.03 66.28c-7.723-3.17-15.684-5.734-23.842-7.75l-10.938 58.72c5.633 1.485 11.136 3.262 16.5 5.375 8.172 3.22 16.09 7.14 23.688 11.78L389.5 86.438c-6.967-4.408-14.15-8.512-21.53-12.28L381.22 45.5l-16.97-7.813zM118.906 76.156l-14.53 11.72 20.06 24.905c-5.744 5.305-11.176 10.914-16.28 16.782l43.688 33.313c9.49-9.746 20.367-18.35 32.53-25.47l-28.468-48.593c-5.954 3.698-11.69 7.67-17.187 11.907l-19.814-24.564zM442 86.78l-21.844 22.47c-4.9-4.28-9.975-8.367-15.22-12.25l-33.186 48.125c11.065 8.77 21.282 19.29 30.438 31.688l46.468-37.907c-4.696-5.856-9.678-11.462-14.906-16.812l21.656-22.28L442 86.78zM96.5 144.188c-4.35 5.972-8.4 12.162-12.125 18.532l-28.28-14.032-8.282 16.75 27.812 13.78c-3.49 7.318-6.577 14.844-9.25 22.5l51.438 14.688c5.324-14.068 12.645-27.335 21.78-39.344L96.5 144.188zm363.25 9.782l-47.188 38.468c4.79 8.02 9.2 16.673 13.188 25.968 19.406 12.31 48.29-.43 55.688-23.187-1.407-3.563-2.925-7.057-4.5-10.5l21.093-11.157-8.75-16.532-20.81 11.032c-2.738-4.83-5.65-9.523-8.72-14.093zm-176.438 41.093c-1.41.01-2.802.08-4.187.187l-1.594 26.656c8.773 1.175 16.902 4.41 24.25 9.188l21.19-25.5c-13.22-6.88-26.925-10.635-39.658-10.53zm-23.125 4c-18.62 5.896-36.06 18.262-45.156 39.312 14.578-9.77 29.515-15.014 43.782-16.563l1.375-22.75zm112.594 11.25l-20.655 16.5c-4.207-4.078-8.63-7.814-13.188-11.188L316 243.22c7.872 8.543 14.178 18.956 18.563 30.124l38.53-20.406c-2.615-4.25-5.446-8.314-8.468-12.188l19.844-15.844-11.69-14.594zm-311.81 9.312c-1.83 7.102-3.288 14.296-4.407 21.563l-30.407-3.563L24 256.188l30.5 3.562c-.48 7.082-.63 14.214-.406 21.344l53.437-7.313c-.077-13.44 1.537-26.732 4.72-39.53l-51.28-14.625zm320.75 49.906l-41.75 22.095c2.354 11.546 2.794 23.143 1.374 34.313l49.094 7.187c.527-4.438.864-8.905 1-13.375.084-2.763.05-5.505-.063-8.22l24.594-3.842-2.876-18.47-24 3.75c-1.677-8.15-4.176-15.993-7.375-23.437zm-272.97 22.94l-53.22 7.28c.787 6.57 1.905 13.13 3.314 19.656l-30.157 10.938 6.344 17.562 28.564-10.344c1.765 5.664 3.783 11.274 6.062 16.844.944 2.304 1.944 4.572 2.97 6.813l47.186-26.44c-.003-.008.004-.02 0-.03-5.686-13.895-9.322-28.114-11.062-42.28zm228.5 51.717c-3.17 9.706-7.852 18.854-13.97 27.063l40.626 31.344c3.32-4.693 6.352-9.59 9.094-14.625l26.188 10.124 6.75-17.438L380.906 371c2.49-6.343 4.566-12.852 6.188-19.47l-49.844-7.342zm-209.156 7.344L81.28 377.814c4.008 6.795 8.43 13.21 13.19 19.28l-22.532 20.47 12.593 13.843 22.22-20.22c5.807 5.975 11.992 11.494 18.5 16.533l29.28-44.44c-10.256-8.77-19.214-19.41-26.436-31.75zm182.5 33.533c-7.464 6.628-16.195 12.224-26.125 16.468-1.852.792-3.704 1.55-5.564 2.25l19.03 49.44c2.413-.914 4.827-1.884 7.22-2.908 5.052-2.16 9.89-4.608 14.53-7.28l17.845 26.75 15.533-10.344-17.844-26.782c6.1-4.725 11.74-9.923 16.905-15.5l-41.53-32.094zm-140.938 9.25l-29.03 44.093c6.273 3.87 12.782 7.32 19.468 10.375l-12 28.814 17.28 7.156 12.095-29.094c7.373 2.475 14.902 4.475 22.56 5.97l5.44-52.595c-12.664-2.948-24.748-7.904-35.814-14.717zm91.313 14.812c-12.438 2.78-24.9 3.67-37.033 2.75l-5.375 52.344c7.43.652 14.94.85 22.47.56l1.812 28.064 18.656-1.188-1.844-28.594c6.843-.984 13.67-2.353 20.47-4.156l-19.157-49.78z"/></svg>
));