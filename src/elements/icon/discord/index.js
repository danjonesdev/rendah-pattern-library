import React from "react";
export default function Discord(props) {
  const { color } = props;

  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.784 15.584h-6.804c-.678 0-1.23-.552-1.23-1.236v-8.112c0-.684.552-1.236 1.23-1.236h8.04c.678 0 1.23.552 1.23 1.236v10.764l-1.29-1.14-.726-.672-.768-.714.318 1.11zm-1.08-2.748c1.326-.042 1.836-.912 1.836-.912 0-1.932-.864-3.498-.864-3.498-.864-.648-1.686-.63-1.686-.63l-.084.096c1.02.312 1.494.762 1.494.762-.624-.342-1.236-.51-1.806-.576-.432-.048-.846-.036-1.212.012l-.102.012c-.21.018-.72.096-1.362.378l-.354.174s.498-.474 1.578-.786l-.06-.072s-.822-.018-1.686.63c0 0-.864 1.566-.864 3.498 0 0 .504.87 1.83.912l.402-.498c-.762-.228-1.05-.708-1.05-.708l.168.102.024.018.024.013.006.004.024.013c.15.084.3.15.438.204.246.096.54.192.882.258.45.084.978.114 1.554.006.282-.048.57-.132.87-.258.21-.078.444-.192.69-.354 0 0-.3.492-1.086.714l.396.486zm-2.79-2.802c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666.006-.366-.27-.666-.612-.666zm2.19 0c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666 0-.366-.27-.666-.612-.666z" />
    </svg>
  );
}