const iconBaseClass =
  "block h-[50.4px] w-[50.4px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-miterlimit:10] [stroke-width:2] max-[640px]:h-[43.2px] max-[640px]:w-[43.2px]";

const strokeClass =
  "opacity-0 motion-reduce:opacity-100 motion-reduce:[stroke-dashoffset:0]";

function drawStroke(length: number, delay = 0) {
  return {
    className: strokeClass,
    "data-animated-stroke": "true",
    "data-dash-length": String(length),
    "data-draw-delay": String(delay),
  };
}

export function PhoneIcon() {
  return (
    <svg
      className={`${iconBaseClass} text-[#ffca06]`}
      width="70"
      height="70"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <path
        {...drawStroke(141.86227416992188, 0)}
        d="M45.1 44.2C42.9 42 39.6 40 37 42.6c-1.8 1.8-2.6 3.9-2.6 3.9s-4.3 2.3-11.7-5.2-5.2-11.7-5.2-11.7 2.1-.8 3.9-2.6c2.6-2.6.6-5.9-1.7-8.1-2.7-2.7-6.2-4.9-8.2-2.9-3.7 3.7-4.4 8.4-4.4 8.4S9 35.5 18.7 45.3s20.9 11.6 20.9 11.6 4.7-.7 8.4-4.4c2-2.1-.2-5.6-2.9-8.3z"
      />
      <path
        {...drawStroke(65.43706512451172, 120)}
        d="M18.4 12.2C22.2 9.5 26.9 8 32 8c13.3 0 24 10.8 24 24 0 4-1.3 9-4.4 12.2"
      />
      <path
        {...drawStroke(29.203052520751953, 220)}
        d="M27.3 55.6c-9.8-1.9-17.5-9.8-19.1-19.7"
      />
      <path
        {...drawStroke(28.192291259765625, 320)}
        d="M30 21h5.2c1.2 0 1.8.2 1.8 1.1v1.3c0 .6 0 1.4-1.6 2.5-2.3 1.6-5.6 3.8-5.6 5.1 0 1.6.7 2 1.8 2H37"
      />
      <path
        {...drawStroke(29.630718231201172, 420)}
        d="M40 21v3.8c0 1-.1 2.2 1.5 2.2H46v-6.1V33"
      />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg
      className={`${iconBaseClass} text-[#ff3c66]`}
      width="70"
      height="70"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <polyline
        {...drawStroke(58.133636474609375, 0)}
        points="54 17 32 36 10 17"
      />
      <line
        {...drawStroke(19.2849688529524, 100)}
        x1="10.9"
        x2="26"
        y1="48"
        y2="36"
      />
      <path
        {...drawStroke(118.04033660888672, 160)}
        d="M32.7 49H13c-2.2 0-4-1.8-4-4V19c0-2.2 1.8-4 4-4h38c2.2 0 4 1.8 4 4v15.5"
      />
      <circle
        {...drawStroke(63.46017216272297, 300)}
        cx="44.9"
        cy="43.1"
        r="10.1"
      />
      <path
        {...drawStroke(9.829948425292969, 420)}
        d="M44 41.4s-1.3 3.4-.9 5.1c.4 1.7 2.6 2.1 3.7 1.1"
      />
      <circle
        {...drawStroke(5.69581413269043, 500)}
        cx="45.4"
        cy="38.3"
        r=".9"
      />
    </svg>
  );
}

export function CompassIcon() {
  return (
    <svg
      className={`${iconBaseClass} text-[#8bd82b]`}
      width="70"
      height="70"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <polygon
        {...drawStroke(178.82208251953125, 0)}
        points="38.7 36.4 56 32 38.7 27.6 42 22 36.4 25.3 32 8 27.6 25.3 22 22 25.3 27.6 8 32 25.3 36.4 22 42 27.6 38.7 32 56 36.4 38.7 42 42 38.7 36.4"
      />
      <circle
        {...drawStroke(25.132741228718345, 160)}
        cx="32"
        cy="32"
        r="4"
      />
      <path
        {...drawStroke(24.03536605834961, 260)}
        d="M26.1 53.2c-7.9-2.2-13.9-8.6-15.6-16.7"
      />
      <path
        {...drawStroke(24.441139221191406, 340)}
        d="M53.5 36.9c-1.8 8.1-8.2 14.6-16.3 16.5"
      />
      <path
        {...drawStroke(24.744400024414, 420)}
        d="M36.9 10.5c8.2 1.9 14.7 8.3 16.6 16.6"
      />
      <path
        {...drawStroke(24.504955291748047, 500)}
        d="M10.5 27.1c1.9-8.2 8.3-14.6 16.4-16.5"
      />
    </svg>
  );
}
