import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M309.822 19.695c-91.36.614-193.674 54.694-233.935 133.168-58.023 113.09-28.643 221.764 35.04 336.393l190.57-.002c.726.028 1.463.042 2.222.02.142-.002.28-.015.423-.02h53.826c-10.486-3.502-20.882-7.894-31.085-13.047 10.072-16.983 2.354-44.398-23.168-43.71-10.64.29-18.18 5.295-22.633 12.222-9.458-8.397-18.286-17.478-26.467-27.068 14.902-15.993 8.335-49.138-19.69-48.38-4.657.125-8.716 1.157-12.187 2.855-5.633-9.91-10.662-20.057-15.035-30.328 19.106-14.293 13.695-52.217-16.244-51.435-1.302-6.297-2.35-12.564-3.124-18.773-.55-4.415-.957-8.795-1.234-13.135 27.28-5.747 28.78-46.347 4.5-54.635 2.133-8.412 4.962-16.413 8.507-23.892l.038-.08c3.723 2.18 8.316 3.415 13.788 3.267 24.495-.642 31.46-28.02 20.904-43.215 4.208-3.165 8.632-6.252 13.332-9.234 1.612-1.023 3.26-1.98 4.932-2.897 2.136 11.04 10.508 20.495 25.126 20.1 19.36-.506 27.768-17.725 25.23-32.423 10.7-.52 20.69.4 29.788 2.475-3.264 13.06 3.77 28.85 21.106 28.38 7.844-.205 13.576-3.63 17.203-8.513 1.39 1.358 2.702 2.763 3.927 4.208 5.093 6.01 8.785 12.684 10.91 19.893-16.187 5.228-16.828 29.973-1.92 35.932-3.047 8.154-7.957 16.63-15.078 25.203-2.402-2.767-6.02-4.564-10.86-4.433-13.943.38-17.764 16.166-11.48 24.613-7.052 4.543-13.68 7.366-19.712 8.86.646-5.998-2.903-12.428-10.666-12.22-7.328.2-10.9 6.108-10.737 11.784-.245-.09-.493-.178-.733-.273-3.894-2.125-7.526-5.38-10.77-10.09 10-2.95 10.16-18.5.458-21.31 1.414-3.197 3.41-6.582 6.097-10.094 2.516 1.67 6.553 2.795 12.133 2.72 12.562-.16 17.35-6.17 14.387-10.68.03.004.058.005.088.007-.056-.047-.113-.09-.168-.137-.805-1.158-2.132-2.21-3.975-3.03-9.49-6.445-20.606-8.778-30.73-7.298l-.29-.275c-.12.126-.23.253-.35.38-20.527 3.34-36.708 22.448-26.394 54.75 38.275 119.87 242.354 18.336 199.733-111.55-26.183-79.795-79.363-114.193-151.262-115.053v.01c-1.444-.017-2.892-.02-4.342-.012zm10.998 54.41c14.242.315 19.363 14.59 15.375 25.27-8.943-1.925-18.474-2.888-28.455-2.764-1.802.024-3.62.087-5.45.18-1.875-10.222 3.933-22.308 17.437-22.68.37-.01.734-.012 1.093-.005zm-89.662 19.678c10.26.227 15.777 7.702 16.578 15.856-10.812 4.692-20.504 10.55-29.088 17.374-11.32-9.146-7.527-32.72 11.416-33.227.37-.01.735-.012 1.094-.004zM399.52 117.52c20.92.463 22.177 31.056 3.753 36.11-2.97-8.64-7.556-16.664-13.53-23.714-1.64-1.933-3.376-3.795-5.206-5.584 2.952-3.906 7.578-6.64 13.89-6.81.37-.01.734-.01 1.093-.002zm-220.913 47.916c2.688.06 5.046.62 7.084 1.556-.853 1.626-1.68 3.27-2.467 4.932-4.48 9.448-7.923 19.466-10.397 29.908-18.905-3.996-17.358-35.804 4.688-36.394.37-.01.734-.01 1.093-.002zm224.227 36.566c17.194 5.42 15.09 35.413-6.303 35.97-5.064.137-9.04-1.437-11.94-4 8.517-10.48 14.57-21.238 18.244-31.97zM164.51 255.506c.713.016 1.403.067 2.078.14.545.32 1.106.618 1.685.897.292 5.745.794 11.534 1.518 17.355.948 7.61 2.286 15.275 3.946 22.957-.64.555-1.246 1.14-1.824 1.75-2.54 1.096-5.447 1.763-8.738 1.848-28.972.78-28.968-44.158-.002-44.943.452-.012.9-.014 1.338-.004zm193.303 2.953c3.933 8.724-.404 21.676-13.012 22.007-7.69.208-12.293-4.443-13.83-10.127 8.665-2.06 17.738-5.972 26.842-11.88zm-170.31 88.552c.675.062 1.36.11 2.06.13 5.634 13.552 12.316 26.887 19.998 39.79-.043.115-.084.23-.126.347-3.702 3.412-8.744 5.656-15.157 5.822-27.942.752-30.193-39.013-6.773-46.09zm49.524 78.914c11.59 14.01 24.498 27.076 38.655 38.8-4.436 7.024-12.017 12.112-22.752 12.39-29.78.806-35.312-36.62-16.627-51.134.243-.016.484-.035.724-.056z"/></svg>
));