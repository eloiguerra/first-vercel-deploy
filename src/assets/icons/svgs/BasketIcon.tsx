import { IconPropStyles } from "./interface";

export default function BasketIcon(props: IconPropStyles) {
  return (
    <svg
      {...props}
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6836 8.27961L12.9054 1.16964C12.8034 1.02608 12.6675 0.909533 12.5097 0.830181C12.3518 0.750829 12.1768 0.711087 12 0.714428C11.6509 0.714428 11.3018 0.866165 11.0945 1.18048L6.31632 8.27961H1.09086C0.490863 8.27961 -4.57764e-05 8.76734 -4.57764e-05 9.36345C-4.57764e-05 9.461 0.0108633 9.55854 0.0435905 9.65609L2.8145 19.7033C3.06541 20.6137 3.90541 21.2857 4.90905 21.2857H19.0909C20.0945 21.2857 20.9345 20.6137 21.1963 19.7033L23.9672 9.65609L24 9.36345C24 8.76734 23.509 8.27961 22.909 8.27961H17.6836ZM8.72723 8.27961L12 3.51073L15.2727 8.27961H8.72723ZM12 16.9503C10.8 16.9503 9.81814 15.9749 9.81814 14.7826C9.81814 13.5904 10.8 12.615 12 12.615C13.2 12.615 14.1818 13.5904 14.1818 14.7826C14.1818 15.9749 13.2 16.9503 12 16.9503Z"
        fill="white"
      />
    </svg>
  );
}